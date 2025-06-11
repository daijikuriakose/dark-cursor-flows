
import React from 'react';
import { Code, Coffee, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable solutions' },
    { icon: Lightbulb, title: 'Innovation', description: 'Exploring new technologies and methodologies' },
    { icon: Coffee, title: 'Problem Solving', description: 'Tackling complex challenges with creative approaches' },
    { icon: Heart, title: 'User Experience', description: 'Creating intuitive and delightful interfaces' }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Get to know me better
          </p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed">
              I'm a passionate Computer Science student at St Joseph's College of Engineering and Technology, 
              currently exploring the fascinating world of Full Stack Development. My journey in technology 
              began with curiosity and has evolved into a deep commitment to creating meaningful digital experiences.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Currently, I'm diving deep into Data Structures and Algorithms using C++, while simultaneously 
              building modern web applications with React, TypeScript, and Next.js. I believe in the power of 
              continuous learning and enjoy staying updated with the latest industry trends and best practices.
            </p>
            
            <p className="leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with fellow developers. I'm always excited about collaborative opportunities 
              and innovative projects that challenge me to grow.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <interest.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
