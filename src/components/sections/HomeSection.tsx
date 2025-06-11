
import React from 'react';

const HomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground">
            Full Stack Developer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate developer with expertise in modern web technologies. 
          I create engaging user experiences and robust backend solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="px-8 py-4 bg-primary/20 border border-primary/50 rounded-lg text-primary hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
            View My Work
          </button>
          <button className="px-8 py-4 bg-transparent border border-muted-foreground/30 rounded-lg text-foreground hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
