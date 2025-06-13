
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, User, Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative pl-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Hero Box with Neon Gradient Border */}
        <div className="hero-box relative bg-background/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-border">
          <div className="bg-background/90 backdrop-blur-lg rounded-3xl p-8 md:p-12">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Text content */}
              <div className="flex-1 space-y-8 animate-slide-in-left">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Next.js', 'Python'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Name and Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] font-['Orbitron',sans-serif]">
                    John Doe
                  </h1>
                  <h2 className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    Student, Frontend Developer
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Exploring Full Stack Development | Learning DSA in C++ | 
                  Computer Science Student at St Joseph's College of 
                  Engineering and Technology
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <Button 
                    className="px-8 py-6 text-lg rounded-xl group h-auto bg-primary hover:bg-primary/90 shadow-lg hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="px-8 py-6 text-lg rounded-xl group h-auto backdrop-blur-sm border-border/50 hover:bg-secondary/50 hover:scale-105 transition-all duration-300 hover:border-gradient-to-r hover:from-cyan-400 hover:to-purple-500"
                    onClick={scrollToAbout}
                  >
                    About Me
                  </Button>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 backdrop-blur-sm border border-primary/20 hover:scale-110 hover:rotate-6"
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Right side - Profile section */}
              <div className="flex-shrink-0 relative animate-slide-in-right">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm shadow-2xl hover:scale-105 transition-transform duration-500">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="h-32 w-32 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <label className="absolute bottom-4 right-4 p-3 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90 transition-colors shadow-lg backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                    <Upload className="h-5 w-5" />
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  
                  {/* Available for projects - single line */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 backdrop-blur-sm animate-pulse-glow whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Available for projects
                    </div>
                  </div>
                </div>
                
                {/* Code snippets */}
                <div className="mt-12 space-y-3 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <code className="block text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-border/30 hover:scale-105 transition-transform duration-300">
                    const developer = new Developer();
                  </code>
                  <code className="block text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-border/30 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.9s' }}>
                    await skills.improve();
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
