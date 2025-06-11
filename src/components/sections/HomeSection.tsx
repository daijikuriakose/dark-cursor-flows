
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const HomeSection = () => {
  const { isDark } = useTheme();
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/10 mb-2">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            John Doe
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mt-2">
            Full Stack Developer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate developer specializing in creating elegant solutions for complex problems.
          I bring creativity and technical expertise to every project.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          <Button 
            className="px-6 py-6 text-base rounded-xl group h-auto"
            onClick={() => window.location.href = '#projects'}
          >
            View My Work
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            className="px-6 py-6 text-base rounded-xl group h-auto"
          >
            Download CV
            <Download className="ml-2 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
        
        {/* Social links */}
        <div className="pt-8 flex justify-center space-x-6">
          <a 
            href="#" 
            className={`p-3 rounded-full ${isDark ? 'bg-secondary/60' : 'bg-secondary/80'} hover:bg-primary/20 transition-all duration-300 hover:scale-110`}
            aria-label="Github"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="#"
            className={`p-3 rounded-full ${isDark ? 'bg-secondary/60' : 'bg-secondary/80'} hover:bg-primary/20 transition-all duration-300 hover:scale-110`}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="#"
            className={`p-3 rounded-full ${isDark ? 'bg-secondary/60' : 'bg-secondary/80'} hover:bg-primary/20 transition-all duration-300 hover:scale-110`}
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse"></div>
          </div>
          <span className="text-xs text-muted-foreground mt-2">Scroll down</span>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
