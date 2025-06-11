
import React, { useState } from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import CursorTrail from "@/components/CursorTrail";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/sections/HomeSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeSection />;
      case 'Education':
        return <EducationSection />;
      case 'Projects':
        return <ProjectsSection />;
      case 'Skills':
        return <SkillsSection />;
      case 'Experience':
        return <ExperienceSection />;
      case 'Certificates':
        return <CertificatesSection />;
      case 'Contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background layers */}
      <AnimatedBackground />
      <FloatingOrbs />
      <CursorTrail />
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content */}
      <div className="relative z-10 pt-16">
        {renderActiveSection()}
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default Index;
