
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import TechnologiesSection from './TechnologiesSection';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2020 - Present",
      description: "Providing comprehensive web development services to clients worldwide. Specializing in modern web technologies and delivering high-quality, scalable solutions.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Next.js"]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and career highlights
          </p>
        </div>
        
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <TechnologiesSection />
      </div>
    </section>
  );
};

export default ExperienceSection;
