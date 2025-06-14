
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import AnimatedSendButton from '../AnimatedSendButton';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:daijikuriakose50@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your default email client should open with the message pre-filled.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    const form = document.querySelector('form');
    if (form) {
      form.requestSubmit();
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section className="min-h-screen py-20 px-4 pl-24 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-['Orbitron',sans-serif] mb-4">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's work together on your next project
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
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
              {[
                { icon: Mail, label: 'Email', value: 'daijikuriakose50@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 animate-fade-in-up hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 pt-6">
              {[Github, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 bg-background/50 border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 px-2 bg-background/80 text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary backdrop-blur-sm rounded"
                  >
                    <span className="inline-block transform transition-transform duration-300 group-hover:scale-110">
                      Name
                    </span>
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 bg-background/50 border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 px-2 bg-background/80 text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary backdrop-blur-sm rounded"
                  >
                    <span className="inline-block transform transition-transform duration-300 group-hover:scale-110">
                      Email
                    </span>
                  </label>
                </div>
              </div>
              
              {/* Subject Field */}
              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 bg-background/50 border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Subject"
                  required
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 -top-2.5 px-2 bg-background/80 text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary backdrop-blur-sm rounded"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:scale-110">
                    Subject
                  </span>
                </label>
              </div>
              
              {/* Message Field */}
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 bg-background/50 border-2 border-border rounded-lg focus:ring-0 focus:border-primary text-foreground placeholder-transparent resize-none transition-all duration-300 backdrop-blur-sm"
                  placeholder="Message"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 px-2 bg-background/80 text-sm font-medium text-muted-foreground transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-primary backdrop-blur-sm rounded"
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:scale-110">
                    Message
                  </span>
                </label>
              </div>
              
              <AnimatedSendButton 
                onClick={handleButtonClick}
                disabled={!isFormValid || isSubmitting}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
