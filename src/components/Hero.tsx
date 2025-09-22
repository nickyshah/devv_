"use client";

import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-brand-blue font-medium mb-8 border border-white/30">
            <Zap className="w-4 h-4 mr-2" />
            Available for freelance projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            I'm a <span className="text-gradient">software developer</span> who builds websites tailored to your needs.
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I create modern, responsive, and user-friendly websites that help businesses grow. From custom web applications to e-commerce solutions, I deliver results that exceed expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} className="btn-hero group">
              Let's Build Your Website
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button variant="outline" onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline">
              View My Work
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-brand-blue" />
              <span className="font-medium">Clean Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-brand-indigo" />
              <span className="font-medium">Beautiful Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-blue" />
              <span className="font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-blue/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-indigo/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
