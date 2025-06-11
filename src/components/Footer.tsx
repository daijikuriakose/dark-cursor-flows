
import React from 'react';
import { Github, Linkedin, Mail, Home, User, FolderOpen, Award, Briefcase, FileText, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Projects', icon: FolderOpen, href: '#projects' },
    { name: 'Skills', icon: Award, href: '#skills' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'About & Contact', icon: Phone, href: '#contact' }
  ];

  return (
    <footer className="relative bg-card/30 backdrop-blur-sm border-t border-border mt-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Portfolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A showcase of my professional journey, skills, and achievements.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110 group"
                aria-label="Github"
              >
                <Github className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 John Doe. All rights reserved. Made with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
