
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-2023-001",
      link: "#"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-2022-002",
      link: "#"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PRO-2022-003",
      link: "#"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MONGO-DEV-2021-004",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground mb-2">Issued: {cert.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                  <a 
                    href={cert.link} 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
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

export default CertificatesSection;
