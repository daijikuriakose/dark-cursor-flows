
import React from 'react';

const WaveFooter = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Wave Animation */}
      <svg
        className="relative w-full h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,60 C300,120 600,0 900,60 C1050,90 1200,30 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          className="animate-wave-1"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0,60 C300,120 600,0 900,60 C1050,90 1200,30 1200,60 L1200,120 L0,120 Z;
                    M0,80 C300,40 600,100 900,40 C1050,10 1200,70 1200,80 L1200,120 L0,120 Z;
                    M0,60 C300,120 600,0 900,60 C1050,90 1200,30 1200,60 L1200,120 L0,120 Z"
          />
        </path>
        
        <path
          d="M0,80 C300,40 600,100 900,40 C1050,10 1200,70 1200,80 L1200,120 L0,120 Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.2"
          className="animate-wave-2"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="M0,80 C300,40 600,100 900,40 C1050,10 1200,70 1200,80 L1200,120 L0,120 Z;
                    M0,100 C300,60 600,20 900,80 C1050,110 1200,50 1200,100 L1200,120 L0,120 Z;
                    M0,80 C300,40 600,100 900,40 C1050,10 1200,70 1200,80 L1200,120 L0,120 Z"
          />
        </path>
      </svg>
      
      {/* Footer Content */}
      <div className="bg-primary/10 backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 John Doe. All rights reserved. Made with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaveFooter;
