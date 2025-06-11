
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Wave {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [waves, setWaves] = useState<Wave[]>([]);
  const animationRef = useRef<number>();
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with theme-aware colors
    const particleCount = 120;
    const initialParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const hue = isDark ? 270 + Math.random() * 60 : 200 + Math.random() * 80;
      const saturation = isDark ? 100 : 60 + Math.random() * 40;
      const lightness = isDark ? 60 + Math.random() * 20 : 40 + Math.random() * 30;
      
      initialParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100
      });
    }
    
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Create ripple waves on mouse movement
      setWaves(prevWaves => [
        ...prevWaves.slice(-8),
        {
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          opacity: 0.8,
          speed: 2
        }
      ]);
    };

    const handleClick = (e: MouseEvent) => {
      // Create explosion effect on click
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15;
        const speed = Math.random() * 3 + 2;
        setParticles(prev => [...prev, {
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 2,
          opacity: 1,
          color: isDark ? `hsl(${270 + Math.random() * 60}, 100%, 70%)` : `hsl(${200 + Math.random() * 80}, 70%, 50%)`,
          life: 0,
          maxLife: 60
        }]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || particles.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create dynamic gradient background based on theme and mouse position
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 400
      );
      
      if (isDark) {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
        gradient.addColorStop(0.3, 'rgba(168, 85, 247, 0.08)');
        gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
        gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.08)');
        gradient.addColorStop(0.6, 'rgba(168, 85, 247, 0.05)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw waves
      setWaves(prevWaves => 
        prevWaves.map(wave => ({
          ...wave,
          radius: wave.radius + wave.speed,
          opacity: wave.opacity * 0.95
        })).filter(wave => wave.opacity > 0.01 && wave.radius < 300)
      );

      // Draw waves
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        const waveColor = isDark ? '139, 92, 246' : '59, 130, 246';
        ctx.strokeStyle = `rgba(${waveColor}, ${wave.opacity * 0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Inner wave
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${waveColor}, ${wave.opacity * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Update and draw particles
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate distance to mouse
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Mouse attraction/repulsion with smooth falloff
          if (distance < 200) {
            const force = (200 - distance) / 200;
            const attraction = distance < 100 ? -1 : 1; // Repel when close, attract when far
            particle.vx += (dx / distance) * force * 0.02 * attraction;
            particle.vy += (dy / distance) * force * 0.02 * attraction;
          }

          // Gravity towards center
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const centerDx = centerX - particle.x;
          const centerDy = centerY - particle.y;
          const centerDistance = Math.sqrt(centerDx * centerDx + centerDy * centerDy);
          
          if (centerDistance > 100) {
            particle.vx += (centerDx / centerDistance) * 0.001;
            particle.vy += (centerDy / centerDistance) * 0.001;
          }

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Boundary collision with smooth bounce
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -0.8;
            particle.x = Math.max(0, Math.min(canvas.width, particle.x));
          }
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.vy *= -0.8;
            particle.y = Math.max(0, Math.min(canvas.height, particle.y));
          }

          // Add some dampening and life cycle
          particle.vx *= 0.995;
          particle.vy *= 0.995;
          particle.life++;

          // Regenerate particle if it's too old
          if (particle.life > particle.maxLife) {
            const hue = isDark ? 270 + Math.random() * 60 : 200 + Math.random() * 80;
            const saturation = isDark ? 100 : 60 + Math.random() * 40;
            const lightness = isDark ? 60 + Math.random() * 20 : 40 + Math.random() * 30;
            
            return {
              ...particle,
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: (Math.random() - 0.5) * 0.8,
              vy: (Math.random() - 0.5) * 0.8,
              color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
              life: 0,
              opacity: Math.random() * 0.8 + 0.2
            };
          }

          return particle;
        }).filter(particle => particle.life <= particle.maxLife)
      );

      // Draw particles with enhanced effects
      particles.forEach((particle, index) => {
        const lifeRatio = 1 - (particle.life / particle.maxLife);
        const currentOpacity = particle.opacity * lifeRatio;
        
        // Main particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${currentOpacity})`).replace('hsl', 'hsla');
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Trailing effect
        ctx.beginPath();
        ctx.arc(particle.x - particle.vx * 3, particle.y - particle.vy * 3, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${currentOpacity * 0.3})`).replace('hsl', 'hsla');
        ctx.fill();
      });

      // Draw enhanced connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            const connectionColor = isDark ? '139, 92, 246' : '59, 130, 246';
            ctx.strokeStyle = `rgba(${connectionColor}, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, waves, isDark]);

  const backgroundStyle = isDark 
    ? 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, #16213e 25%, #0f0f1e 50%, #000000 100%)'
    : 'radial-gradient(circle at 25% 25%, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 100%)';

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 transition-all duration-1000"
      style={{ background: backgroundStyle }}
    />
  );
};

export default AnimatedBackground;
