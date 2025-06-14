
import React, { useState } from 'react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 65 },
    { name: "Responsive Design", level: 75 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "C++", level: 70 },
    { name: "API", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 65 },
    { name: "Python", level: 60 }
  ];

  const toolsSkills = [
    { name: "UI Fundamentals", level: 70 },
    { name: "Tailwind CSS", level: 65 },
    { name: "Frontend Basics", level: 80 },
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "GitHub", level: 80 }
  ];

  const professionalSkills = [
    {
      category: "Communication & Collaboration",
      skills: [
        { name: "Communication", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Critical Thinking", level: 80 }
      ]
    },
    {
      category: "Leadership & Management",
      skills: [
        { name: "Learning Agility", level: 90 },
        { name: "Attention to Detail", level: 85 },
        { name: "Time Management", level: 80 },
        { name: "Adaptability", level: 95 }
      ]
    }
  ];

  const tabs = [
    { id: 'frontend', label: 'Frontend', skills: frontendSkills },
    { id: 'backend', label: 'Backend', skills: backendSkills },
    { id: 'tools', label: 'Tools & Others', skills: toolsSkills },
    { id: 'professional', label: 'Professional', skills: professionalSkills }
  ];

  const renderSkillBars = (skills: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex justify-between">
            <span className="text-foreground font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out hover:scale-x-105 transform origin-left"
              style={{ 
                width: `${skill.level}%`,
                animationDelay: `${index * 0.1}s`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="min-h-screen py-20 px-4 pl-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-['Orbitron',sans-serif] mb-4">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and abilities that drive my development
          </p>
        </div>
        
        <div className="flex gap-8">
          {/* Vertical Tabs */}
          <div className="w-64 space-y-2 animate-slide-in-left">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card/50 backdrop-blur-sm border border-border hover:bg-secondary/50'
                }`}
              >
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="flex-1 animate-slide-in-right">
            {activeTab === 'professional' ? (
              <div className="space-y-8">
                {professionalSkills.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-foreground mb-6">{category.category}</h3>
                    {renderSkillBars(category.skills)}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {tabs.find(tab => tab.id === activeTab)?.label} Development
                </h3>
                {renderSkillBars(tabs.find(tab => tab.id === activeTab)?.skills || [])}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
