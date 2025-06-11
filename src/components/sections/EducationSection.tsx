
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
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            My academic journey and achievements
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
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
