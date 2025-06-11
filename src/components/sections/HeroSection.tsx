
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Twitter, Upload, User, Mail } from 'lucide-react';
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

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center space-y-8 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-left space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                TypeScript
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                React
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                Python
              </span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] mb-4">
                John Doe
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                Student, Frontend Developer
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Exploring Full Stack Development | Learning DSA in C++ | 
              Computer Science Student at St Joseph's College of 
              Engineering and Technology
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                className="px-6 py-6 text-base rounded-xl group h-auto bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '#contact'}
              >
                Get in Touch
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                className="px-6 py-6 text-base rounded-xl group h-auto download-btn"
              >
                About Me
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm">
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
              
              <label className="absolute bottom-4 right-4 p-3 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90 transition-colors shadow-lg">
                <Upload className="h-5 w-5" />
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              
              <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for projects
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <code className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-lg">
                const developer = new Developer();
              </code>
              <div className="mt-2">
                <code className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-lg">
                  await skills.improve();
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
