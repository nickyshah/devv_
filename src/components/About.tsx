import { CheckCircle, Users, Clock, Award } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Users, title: "50+ Happy Clients", description: "Delivered successful projects for businesses worldwide" },
    { icon: Clock, title: "5+ Years Experience", description: "Expertise in modern web technologies and frameworks" },
    { icon: Award, title: "Quality Guaranteed", description: "100% satisfaction rate with all delivered projects" }
  ];

  const skills = [
    "React & Next.js Development",
    "Full-Stack Web Applications",
    "E-commerce Solutions",
    "Responsive Design",
    "Database Integration",
    "API Development",
    "Performance Optimization",
    "SEO Implementation"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue font-medium mb-6">About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building digital solutions that make a <span className="text-gradient">difference</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate software developer with over 5 years of experience creating custom web solutions for businesses of all sizes. What sets me apart is my commitment to understanding your unique needs and translating them into powerful, user-friendly websites.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I specialize in modern web technologies and focus on delivering clean, maintainable code that performs beautifully across all devices. Every project is an opportunity to exceed expectations and build long-lasting partnerships.
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
