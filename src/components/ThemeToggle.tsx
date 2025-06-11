
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle relative w-16 h-8 rounded-full border-2 border-primary/30 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/50"
      type="button"
      aria-label="Toggle theme"
    >
      <div className="theme-toggle-inner relative w-full h-full overflow-hidden rounded-full">
        <svg
          className="theme-toggle-svg absolute inset-0 w-full h-full"
          viewBox="0 0 70 35"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1"
        >
          <g className={`theme-plugs-left transition-transform duration-500 ${isDark ? 'translate-x-0' : 'translate-x-8'}`}>
            <g transform="translate(13,10)">
              <polyline points="0 0,0 1" className="stroke-primary" />
              <g className="theme-plug-seg" transform="translate(0,1)">
                <polyline points="0 0,0 1" className="stroke-primary" />
              </g>
            </g>
          </g>
          
          <g className={`theme-plugs-right transition-transform duration-500 ${isDark ? 'translate-x-0' : '-translate-x-8'}`}>
            <g transform="translate(43,10)">
              <polyline points="0 0,0 1" className="stroke-accent" />
              <g className="theme-plug-seg" transform="translate(0,1)">
                <polyline points="0 0,0 1" className="stroke-accent" />
              </g>
            </g>
          </g>
          
          <circle
            cx={isDark ? "22" : "48"}
            cy="17.5"
            r="8"
            className="fill-primary/20 stroke-primary transition-all duration-500"
            strokeWidth="2"
          />
        </svg>
        
        <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg transition-transform duration-500 ${isDark ? 'translate-x-1' : 'translate-x-9'}`}>
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
        </div>
      </div>
      
      <span className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-60'}`}>
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;
