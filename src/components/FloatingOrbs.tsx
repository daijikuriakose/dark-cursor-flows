
import React, { useEffect, useState } from 'react';

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  delay: number;
}

const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialOrbs: Orb[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 200 + 100,
      speed: Math.random() * 0.5 + 0.2,
      color: `hsl(${270 + Math.random() * 60}, 80%, ${50 + Math.random() * 30}%)`,
      delay: i * 0.5
    }));
    
    setOrbs(initialOrbs);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs(prevOrbs => 
        prevOrbs.map(orb => ({
          ...orb,
          x: orb.x + Math.sin(Date.now() * 0.001 * orb.speed + orb.delay) * 0.5,
          y: orb.y + Math.cos(Date.now() * 0.001 * orb.speed + orb.delay) * 0.3,
        }))
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
        const maxDistance = 300;
        const influence = Math.max(0, 1 - distance / maxDistance);
        
        return (
          <div
            key={orb.id}
            className="absolute rounded-full opacity-20 blur-3xl animate-pulse-glow"
            style={{
              left: orb.x + distanceX * influence * 0.1,
              top: orb.y + distanceY * influence * 0.1,
              width: orb.size + influence * 50,
              height: orb.size + influence * 50,
              background: `radial-gradient(circle, ${orb.color}40, transparent 70%)`,
              transform: `translate(-50%, -50%) scale(${1 + influence * 0.3})`,
              transition: 'all 0.3s ease-out'
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingOrbs;
