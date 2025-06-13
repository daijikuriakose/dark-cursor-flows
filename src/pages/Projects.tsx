
import React from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import CursorTrail from "@/components/CursorTrail";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WaveFooter from "@/components/WaveFooter";

const Projects = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <FloatingOrbs />
      <CursorTrail />
      <Navigation />
      
      <div className="relative z-10 pt-16">
        <ProjectsSection />
      </div>
      
      <WaveFooter />
    </div>
  );
};

export default Projects;
