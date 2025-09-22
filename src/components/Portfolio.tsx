"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Store",
      category: "E-commerce",
      description: "Modern online fashion store with advanced filtering, wishlist functionality, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Analytics dashboard for SaaS businesses with real-time data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "Business Website",
      description: "Elegant restaurant website with online reservations, menu showcase, and location integration.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "Tailwind CSS", "Firebase", "Maps API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Portfolio",
      description: "Creative portfolio website for a digital agency with smooth animations and project showcases.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
      tech: ["Vue.js", "Nuxt.js", "GSAP", "Headless CMS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Healthcare Platform",
      category: "Web Application",
      description: "Patient management system for healthcare providers with appointment scheduling and medical records.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "Express.js", "MySQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "Marketplace",
      description: "Property listing platform with advanced search filters, virtual tours, and agent profiles.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      tech: ["Angular", "Node.js", "MongoDB", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue font-medium mb-6">Portfolio Showcase</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
            Recent projects that showcase my <span className="text-gradient">expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here's a selection of projects I've worked on recently. Each project represents a unique challenge and demonstrates different aspects of my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-elevated overflow-hidden group">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"> <ExternalLink className="w-4 h-4 mr-2" /> Live Demo </Button>
                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 text-white border-white hover:bg-white hover:text-brand-blue"> <Github className="w-4 h-4 mr-2" /> Code </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Want to see more projects or discuss your own?</p>
          <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-hero">Let's Work Together</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
