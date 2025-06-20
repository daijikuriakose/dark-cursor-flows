
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const WaveFooter = () => {
  return (
    <div className="relative w-full overflow-hidden mt-20">
      {/* Wave Animation */}
      <svg
        className="relative w-full h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.5" />
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
          fill="#7c3aed"
          fillOpacity="0.3"
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
      
      {/* Footer Content with matching wave gradient background */}
      <div className="relative" style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(168, 85, 247, 0.5), rgba(147, 51, 234, 0.4))',
        backdropFilter: 'blur(8px)'
      }}>
        <div className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Portfolio Section */}
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A showcase of my professional journey, skills, and achievements.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Home', path: '/home' },
                    { name: 'Projects', path: '/projects' },
                    { name: 'Skills', path: '/skills' },
                    { name: 'Experience', path: '/experience' },
                    { name: 'Contact', path: '/contact' }
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-2 transform"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
                    aria-label="Github"
                  >
                    <Github className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                  <a
                    href="mailto:daijikuriakose50@gmail.com"
                    className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6 text-center">
              <p className="text-muted-foreground text-sm">
                © 2024 John Doe. All rights reserved. Made with ❤️ using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveFooter;
