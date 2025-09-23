"use client";

import { Star, Quote } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

const Testimonials = () => {
  const { testimonials } = useAdmin();

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue font-medium mb-6">Client Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
            What my clients say about <span className="text-gradient">working with me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what some of my satisfied clients have to say about their experience working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-elevated p-8 group relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-10 h-10 text-brand-blue" />
              </div>
              
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial content */}
              <blockquote className="text-muted-foreground mb-8 leading-relaxed text-lg italic relative z-10">
                "{testimonial.content}"
              </blockquote>
              
              {/* Client info */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-blue/20 group-hover:ring-brand-blue/40 transition-all duration-300" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                  <p className="text-sm text-brand-blue font-semibold">{testimonial.company}</p>
                  {testimonial.project && (
                    <p className="text-xs text-muted-foreground mt-1 opacity-75">{testimonial.project}</p>
                  )}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-muted-foreground font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-muted-foreground font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
