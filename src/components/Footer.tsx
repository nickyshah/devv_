"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "E-commerce Solutions", href: "#services" },
      { name: "Web Applications", href: "#services" },
      { name: "Mobile-First Design", href: "#services" }
    ],
    company: [
      { name: "About Me", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Privacy Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Email", icon: Mail, href: "mailto:hello@devportfolio.com" }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    else window.open(href, "_blank");
  };

  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-brand-indigo/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-gradient mb-4">DevPortfolio</div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                I'm a passionate software developer dedicated to creating exceptional web experiences that help businesses grow and succeed in the digital world.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">📧 hello@devportfolio.com</p>
                <p className="text-gray-300">📱 +1 (555) 123-4567</p>
                <p className="text-gray-300">📍 San Francisco, CA</p>
              </div>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <button key={social.name} onClick={() => handleLinkClick(social.href)} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:scale-110" aria-label={social.name}>
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => handleLinkClick(link.href)} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => handleLinkClick(link.href)} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button onClick={() => handleLinkClick(link.href)} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="max-w-md">
              <h3 className="font-semibold mb-2 text-lg">Stay Updated</h3>
              <p className="text-gray-300 mb-4 text-sm">Get the latest web development tips and project updates.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                <button className="px-6 py-2 bg-gradient-primary rounded-lg font-medium hover:scale-105 transition-transform duration-200">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-sm">© {currentYear} DevPortfolio. All rights reserved. Built with ❤️ using React & TypeScript.</p>
              <button onClick={scrollToTop} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 group">
                Back to top
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
