"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    websiteStyle: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({ title: "Message sent successfully!", description: "I'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", businessType: "", websiteStyle: "", budget: "", timeline: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue font-medium mb-6">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
            Ready to bring your <span className="text-gradient">vision to life?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project requirements and create something amazing together. Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="card-elevated p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Enter your full name" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="your@email.com" required className="mt-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup</SelectItem>
                        <SelectItem value="small-business">Small Business</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="websiteStyle">Website Type</Label>
                    <Select onValueChange={(value) => handleInputChange("websiteStyle", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="What kind of website do you need?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business-website">Business Website</SelectItem>
                        <SelectItem value="e-commerce">E-commerce Store</SelectItem>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="portfolio">Portfolio Site</SelectItem>
                        <SelectItem value="landing-page">Landing Page</SelectItem>
                        <SelectItem value="blog">Blog/Magazine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-plus">$50,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Tell me about your project..." required className="mt-2 min-h-[120px]" />
                </div>

                <Button type="submit" className="btn-hero w-full md:w-auto">Send Project Request</Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center"><Mail className="w-5 h-5 text-brand-blue" /></div>
                  <div><p className="font-medium">Email</p><p className="text-sm text-muted-foreground">hello@devportfolio.com</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-indigo/10 rounded-lg flex items-center justify-center"><Phone className="w-5 h-5 text-brand-indigo" /></div>
                  <div><p className="font-medium">Phone</p><p className="text-sm text-muted-foreground">+1 (555) 123-4567</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center"><MapPin className="w-5 h-5 text-brand-blue" /></div>
                  <div><p className="font-medium">Location</p><p className="text-sm text-muted-foreground">San Francisco, CA</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-indigo/10 rounded-lg flex items-center justify-center"><Clock className="w-5 h-5 text-brand-indigo" /></div>
                  <div><p className="font-medium">Response Time</p><p className="text-sm text-muted-foreground">Within 24 hours</p></div>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick FAQ</h3>
              <div className="space-y-4">
                <div><h4 className="font-medium mb-2">How long does a typical project take?</h4><p className="text-sm text-muted-foreground">Most projects are completed within 4-8 weeks, depending on complexity.</p></div>
                <div><h4 className="font-medium mb-2">Do you provide ongoing support?</h4><p className="text-sm text-muted-foreground">Yes! I offer maintenance packages and ongoing support for all projects.</p></div>
                <div><h4 className="font-medium mb-2">What's included in the price?</h4><p className="text-sm text-muted-foreground">Design, development, testing, deployment, and 30 days of free support.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
