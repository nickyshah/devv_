"use client";

import { Globe, ShoppingCart, BarChart3, Smartphone, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    { icon: Globe, title: "Custom Websites", description: "Bespoke websites tailored to your brand identity and business goals with modern design principles.", features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Features"] },
    { icon: ShoppingCart, title: "E-commerce Stores", description: "Complete online store solutions with payment integration, inventory management, and user-friendly interfaces.", features: ["Payment Integration", "Inventory System", "Order Management", "Mobile Optimized"] },
    { icon: BarChart3, title: "Web Applications", description: "Complex web applications and SaaS platforms built with scalable architecture and modern frameworks.", features: ["Real-time Data", "User Authentication", "API Integration", "Cloud Deployment"] },
    { icon: Smartphone, title: "Mobile-First Design", description: "Websites optimized for mobile devices ensuring perfect user experience across all screen sizes.", features: ["Progressive Web App", "Touch Optimized", "Offline Support", "App-like Experience"] },
    { icon: Database, title: "Database Solutions", description: "Robust database design and integration for efficient data management and seamless user experiences.", features: ["Data Modeling", "Performance Tuning", "Backup Solutions", "Security Implementation"] },
    { icon: Zap, title: "Performance Optimization", description: "Speed optimization and performance tuning to ensure your website loads fast and ranks well.", features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Integration"] }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue font-medium mb-6">Services Offered</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
            Everything you need to build a <span className="text-gradient">successful online presence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From simple landing pages to complex web applications, I provide comprehensive solutions tailored to your specific business needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-elevated p-8 group relative">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ready to start your project? Let's discuss your requirements.</p>
          <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-hero">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
