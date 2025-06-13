
import React from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import CursorTrail from "@/components/CursorTrail";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/sections/ContactSection";
import WaveFooter from "@/components/WaveFooter";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <FloatingOrbs />
      <CursorTrail />
      <Navigation />
      
      <div className="relative z-10 pt-16">
        <ContactSection />
      </div>
      
      <WaveFooter />
    </div>
  );
};

export default Contact;
