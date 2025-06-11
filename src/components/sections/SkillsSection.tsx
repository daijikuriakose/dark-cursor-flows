
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SkillsSection = () => {
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

  const renderSkillBars = (skills: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-foreground font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and abilities that drive my development
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools & Others</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend" className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Frontend Development</h3>
              {renderSkillBars(frontendSkills)}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Backend Development</h3>
              {renderSkillBars(backendSkills)}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Tools & Development Environment</h3>
              {renderSkillBars(toolsSkills)}
            </div>
          </TabsContent>
          
          <TabsContent value="professional" className="space-y-8">
            <div className="space-y-8">
              {professionalSkills.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">{category.category}</h3>
                  {renderSkillBars(category.skills)}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
