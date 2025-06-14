
import React, { useEffect } from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import CursorTrail from "@/components/CursorTrail";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import CertificatesSection from "@/components/sections/CertificatesSection";
import WaveFooter from "@/components/WaveFooter";

const Certificates = () => {
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
        <CertificatesSection />
      </div>
      
      <WaveFooter />
    </div>
  );
};

export default Certificates;
