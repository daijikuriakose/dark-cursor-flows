
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import AnimatedSendButton from '../AnimatedSendButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's work together on your next project
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities and interesting projects. 
                Feel free to reach out if you'd like to collaborate!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-6">
              <a href="#" className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors">
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent transition-all duration-300"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 px-2 bg-background text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent transition-all duration-300"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 px-2 bg-background text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Email
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent transition-all duration-300"
                  placeholder="Subject"
                  required
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 -top-2.5 px-2 bg-background text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary"
                >
                  Subject
                </label>
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent resize-none transition-all duration-300"
                  placeholder="Message"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 px-2 bg-background text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary"
                >
                  Message
                </label>
              </div>
              
              <AnimatedSendButton 
                onClick={() => handleSubmit}
                disabled={!isFormValid}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
