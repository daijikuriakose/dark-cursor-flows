
import React, { useEffect } from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import CursorTrail from "@/components/CursorTrail";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/sections/SkillsSection";
import WaveFooter from "@/components/WaveFooter";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <FloatingOrbs />
      <CursorTrail />
      <Navigation />
      
      <div className="relative z-10 pt-16">
        <SkillsSection />
      </div>
      
      <WaveFooter />
    </div>
  );
};

export default Skills;
