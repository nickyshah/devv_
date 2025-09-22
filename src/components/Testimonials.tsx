import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "CEO, TechStart Inc.", company: "TechStart Inc.", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face", content: "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and code quality is outstanding.", rating: 5, project: "E-commerce Platform" },
    { id: 2, name: "Michael Chen", role: "Founder, Digital Agency", company: "Creative Solutions", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", content: "Incredible work on our company website redesign. The new site has improved our conversion rate by 40% and we've received countless compliments on the design. Highly recommend!", rating: 5, project: "Website Redesign" },
    { id: 3, name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", content: "The custom dashboard application they built for us has streamlined our entire workflow. The user experience is intuitive and the performance is exceptional. Worth every penny!", rating: 5, project: "Custom Dashboard" },
    { id: 4, name: "David Thompson", role: "Restaurant Owner", company: "Bella Vista Restaurant", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", content: "Our restaurant's online presence was completely transformed. The new website with online reservations has increased our bookings by 60%. Professional service from start to finish.", rating: 5, project: "Restaurant Website" },
    { id: 5, name: "Lisa Wang", role: "Product Manager", company: "HealthTech Solutions", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", content: "The healthcare platform they developed for us is robust, secure, and user-friendly. They understood our complex requirements and delivered a solution that works perfectly for our needs.", rating: 5, project: "Healthcare Platform" },
    { id: 6, name: "James Mitchell", role: "Real Estate Broker", company: "Premier Properties", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", content: "The property listing platform has revolutionized how we do business. Our agents love the interface and our clients find properties faster than ever. Excellent development work!", rating: 5, project: "Real Estate Platform" }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-indigo/10 rounded-full text-brand-indigo font-medium mb-6">Client Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
            What my clients say about <span className="text-gradient">working with me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what some of my satisfied clients have to say about their experience working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-elevated p-6 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-brand-blue/20" />
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-brand-blue font-medium">{testimonial.project}</p>
                </div>
              </div>
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
