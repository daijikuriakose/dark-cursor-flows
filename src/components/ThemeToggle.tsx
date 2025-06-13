
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-20 h-12 rounded-2xl border-2 border-border bg-background/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 group"
      type="button"
      aria-label="Toggle theme"
    >
      {/* Slider track */}
      <div className="absolute inset-1 rounded-xl bg-gradient-to-r from-secondary to-secondary/50"></div>
      
      {/* Plug connectors */}
      <div className={`absolute top-2 transition-all duration-500 ${isDark ? 'left-2' : 'left-10'}`}>
        <div className="w-6 h-8 bg-primary/20 rounded-lg border border-primary/30 relative">
          {/* Plug pins */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-primary rounded-full"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
      
      <div className={`absolute top-2 transition-all duration-500 ${isDark ? 'right-10' : 'right-2'}`}>
        <div className="w-6 h-8 bg-accent/20 rounded-lg border border-accent/30 relative">
          {/* Socket holes */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-accent rounded-full"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-accent rounded-full"></div>
        </div>
      </div>
      
      {/* Connection indicator */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-1 transition-all duration-500 ${
        isDark ? 'bg-primary rotate-0' : 'bg-accent rotate-180'
      } rounded-full`}></div>
      
      {/* Labels */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="text-xs text-muted-foreground">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
