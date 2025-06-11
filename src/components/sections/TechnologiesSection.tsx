
import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'C',
    'Node.js', 'C++', 'API', 'MongoDB', 'MySQL', 'Arch Linux',
    'Augment Code', 'VS Code', 'Git', 'GitHub', 'Python', 'HTML',
    'CSS/SCSS', 'Tailwind CSS', 'Material UI', 'Figma', 'Webpack'
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground">
            Technologies and tools I've worked with throughout my career
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
