
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Weather monitoring dashboard with interactive charts and forecasts",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work and side projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a href={project.live} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
