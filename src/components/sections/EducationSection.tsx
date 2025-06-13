
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2020 - 2022",
      description: "Specialized in Machine Learning and Software Engineering"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "University of California, Berkeley",
      period: "2016 - 2020",
      description: "Graduated Magna Cum Laude with focus on Web Development"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 pl-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-['Orbitron',sans-serif] mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            My academic journey and achievements
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500/10 hover:via-blue-500/10 hover:to-cyan-500/10 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
