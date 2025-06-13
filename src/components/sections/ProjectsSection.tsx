
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      github: "#",
      live: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Weather Dashboard",
      description: "Weather monitoring dashboard with interactive charts and forecasts",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      live: "#",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 pl-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work and side projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full hover:scale-105 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform duration-300">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform duration-300">
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
