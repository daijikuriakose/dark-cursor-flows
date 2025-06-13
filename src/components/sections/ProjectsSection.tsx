
import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring advanced animations and smooth navigation",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "#",
      live: "#",
      image: "/placeholder.svg",
      keyFeatures: [
        "Dynamic Tab Navigation with URL routing",
        "Custom cursor with trail effects",
        "Animated background with floating orbs",
        "Responsive design with glass morphism effects",
        "Contact form with email integration",
        "Smooth scrolling animations throughout",
        "Theme switching capability",
        "Professional wave footer animations"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      image: "/placeholder.svg",
      keyFeatures: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart functionality",
        "Secure payment processing with Stripe",
        "Order management system",
        "Admin dashboard for inventory management"
      ]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      github: "#",
      live: "#",
      image: "/placeholder.svg",
      keyFeatures: [
        "Real-time collaboration with multiple users",
        "Drag and drop task organization",
        "Progress tracking and analytics",
        "File attachments and comments",
        "Notification system",
        "Mobile-responsive design"
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="min-h-screen py-20 px-4 pl-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-['Orbitron',sans-serif] mb-4">
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

                {/* Key Features Section */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-2"
                  >
                    <span className="font-medium">Key Features</span>
                    {expandedProject === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedProject === index && (
                    <div className="bg-secondary/30 rounded-lg p-4 mb-4 animate-fade-in">
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
