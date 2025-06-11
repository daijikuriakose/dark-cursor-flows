
import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail(prevTrail => {
        const newPoint: TrailPoint = {
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
          id: idCounter
        };
        
        setIdCounter(prev => prev + 1);
        
        return [...prevTrail, newPoint].slice(-20); // Keep last 20 points
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up old trail points
    const cleanup = setInterval(() => {
      setTrail(prevTrail => 
        prevTrail.filter(point => Date.now() - point.timestamp < 1000)
      );
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, [idCounter]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-5">
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = 1 - age / 2000;
        
        return (
          <div
            key={point.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: point.x - 6,
              top: point.y - 6,
              background: `radial-gradient(circle, hsl(${270 + index * 5}, 100%, 70%), transparent)`,
              opacity: opacity * 0.8,
              transform: `scale(${Math.max(0.1, scale)})`,
              transition: 'all 0.1s ease-out'
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
