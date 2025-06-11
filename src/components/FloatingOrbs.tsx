
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  delay: number;
  pulse: number;
  direction: number;
}

const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const createOrb = (i: number): Orb => {
      const hue = isDark 
        ? 270 + Math.random() * 60 
        : 200 + Math.random() * 100;
      const saturation = isDark ? 80 : 60;
      const lightness = isDark ? 50 + Math.random() * 30 : 40 + Math.random() * 25;
      
      return {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 300 + 150,
        speed: Math.random() * 0.3 + 0.1,
        color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        delay: i * 0.8,
        pulse: Math.random() * Math.PI * 2,
        direction: Math.random() * Math.PI * 2
      };
    };

    const initialOrbs: Orb[] = Array.from({ length: 8 }, (_, i) => createOrb(i));
    setOrbs(initialOrbs);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs(prevOrbs => 
        prevOrbs.map(orb => {
          const time = Date.now() * 0.001;
          const baseX = orb.x + Math.sin(time * orb.speed + orb.delay) * 0.8;
          const baseY = orb.y + Math.cos(time * orb.speed + orb.delay) * 0.6;
          
          // Enhanced direction change
          if (Math.random() < 0.01) {
            orb.direction += (Math.random() - 0.5) * 0.2;
          }
          
          return {
            ...orb,
            x: baseX + Math.sin(orb.direction) * 0.3,
            y: baseY + Math.cos(orb.direction) * 0.3,
            pulse: orb.pulse + 0.02
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {orbs.map(orb => {
        const distanceX = mousePosition.x - orb.x;
        const distanceY = mousePosition.y - orb.y;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = 400;
        const influence = Math.max(0, 1 - distance / maxDistance);
        
        const pulseSize = Math.sin(orb.pulse) * 30 + orb.size;
        const opacity = isDark ? 0.15 : 0.08;
        
        return (
          <div
            key={orb.id}
            className="absolute rounded-full transition-all duration-500 ease-out"
            style={{
              left: orb.x + distanceX * influence * 0.15,
              top: orb.y + distanceY * influence * 0.15,
              width: pulseSize + influence * 80,
              height: pulseSize + influence * 80,
              background: isDark
                ? `radial-gradient(circle, ${orb.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}, transparent 70%)`
                : `radial-gradient(circle, ${orb.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}, transparent 60%)`,
              transform: `translate(-50%, -50%) scale(${1 + influence * 0.4}) rotate(${orb.pulse * 10}deg)`,
              filter: `blur(${isDark ? 40 : 30}px) brightness(${1 + influence * 0.3})`,
              mixBlendMode: isDark ? 'screen' : 'multiply'
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingOrbs;
