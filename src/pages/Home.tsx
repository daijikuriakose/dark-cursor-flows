
import React from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import CursorTrail from "@/components/CursorTrail";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/sections/HomeSection";
import WaveFooter from "@/components/WaveFooter";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <FloatingOrbs />
      <CursorTrail />
      <Navigation />
      
      <div className="relative z-10 pt-16">
        <HomeSection />
      </div>
      
      <WaveFooter />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default Home;
