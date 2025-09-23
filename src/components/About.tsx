"use client";

import { CheckCircle, Users, Clock, Award } from "lucide-react";
import { useAdmin } from '@/contexts/AdminContext';

const About = () => {
  const { profile } = useAdmin();
  
  // Icon mapping for dynamic highlights
  const iconMap = {
    Users,
    Clock,
    Award
  };

  const highlights = profile.highlights.map(highlight => ({
    ...highlight,
    icon: iconMap[highlight.icon as keyof typeof iconMap] || Users
  }));

  const skills = profile.skills;

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue font-medium mb-6">About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {profile.name} - <span className="text-gradient">{profile.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {profile.description}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With {profile.experience} in the industry, I specialize in modern web technologies and focus on delivering clean, maintainable code that performs beautifully across all devices. Every project is an opportunity to exceed expectations and build long-lasting partnerships.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="card-elevated p-6 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
