
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  id: number;
  rotation: number;
  velocity: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [idCounter, setIdCounter] = useState(0);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      // Calculate velocity based on distance from last point
      const dx = currentX - lastPosition.x;
      const dy = currentY - lastPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const velocity = Math.min(1, distance / 30); // Normalize velocity
      
      // Calculate rotation angle
      const rotation = Math.atan2(dy, dx);
      
      setTrail(prevTrail => {
        const newPoint: TrailPoint = {
          x: currentX,
          y: currentY,
          timestamp: Date.now(),
          id: idCounter,
          rotation,
          velocity
        };
        
        setIdCounter(prev => prev + 1);
        
        return [...prevTrail, newPoint].slice(-30); // Keep last 30 points
      });
      
      setLastPosition({ x: currentX, y: currentY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up old trail points
    const cleanup = setInterval(() => {
      setTrail(prevTrail => 
        prevTrail.filter(point => Date.now() - point.timestamp < 1000)
      );
    }, 40);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, [idCounter, lastPosition]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-5">
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = 1 - age / 2000;
        
        // Different color schemes based on theme
        const hue = isDark 
          ? 270 + (index * 5) % 60 
          : 200 + (index * 8) % 120;
        
        const saturation = isDark ? 100 : 70;
        const lightness = isDark ? 70 : 50;
        
        // Calculate sizes based on velocity
        const baseSize = 5 + point.velocity * 10;
        
        return (
          <React.Fragment key={point.id}>
            {/* Main particle */}
            <div
              className="absolute rounded-full"
              style={{
                left: point.x - baseSize / 2,
                top: point.y - baseSize / 2,
                width: baseSize * scale,
                height: baseSize * scale,
                background: `radial-gradient(circle, hsl(${hue}, ${saturation}%, ${lightness}%), transparent)`,
                boxShadow: isDark 
                  ? `0 0 10px 2px hsl(${hue}, ${saturation}%, ${lightness}%)` 
                  : `0 0 8px 1px hsl(${hue}, ${saturation}%, ${lightness}%)`,
                opacity: opacity * 0.8,
                transform: `scale(${Math.max(0.1, scale)})`,
                transition: 'all 0.1s ease-out'
              }}
            />
            
            {/* Directional streak (only for points with sufficient velocity) */}
            {point.velocity > 0.2 && (
              <div
                className="absolute"
                style={{
                  left: point.x,
                  top: point.y,
                  width: baseSize * 3 * scale * point.velocity,
                  height: baseSize / 2 * scale,
                  background: `linear-gradient(to right, hsl(${hue}, ${saturation}%, ${lightness}%), transparent)`,
                  opacity: opacity * 0.6 * point.velocity,
                  transform: `translate(-100%, -50%) rotate(${point.rotation}rad)`,
                  transformOrigin: 'right center',
                  borderRadius: `${baseSize}px`,
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CursorTrail;
