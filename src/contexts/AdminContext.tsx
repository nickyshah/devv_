"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  inquiries: ContactInquiry[];
  addInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'date' | 'isRead'>) => void;
  deleteInquiry: (id: number) => void;
  markAsRead: (id: number) => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: number, project: Project) => void;
  deleteProject: (id: number) => void;
  services: Service[];
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: number, service: Service) => void;
  deleteService: (id: number) => void;
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: number, testimonial: Testimonial) => void;
  deleteTestimonial: (id: number) => void;
  profile: Profile;
  updateProfile: (profile: Profile) => void;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  project?: string;
}

interface Profile {
  name: string;
  title: string;
  description: string;
  experience: string;
  email: string;
  phone?: string;
  location?: string;
  skills: string[];
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [projects, setProjects] = useState<Project[]>([
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
  ]);

  const [profile, setProfile] = useState<Profile>({
    name: "Professional Developer",
    title: "Full-Stack Web Developer",
    description: "I'm a passionate software developer with over 5 years of experience creating custom web solutions for businesses of all sizes. What sets me apart is my commitment to understanding your unique needs and translating them into powerful, user-friendly websites.",
    experience: "5+ Years Experience",
    email: "hello@devportfolio.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    skills: [
      "React & Next.js Development",
      "Full-Stack Web Applications",
      "E-commerce Solutions",
      "Responsive Design",
      "Database Integration",
      "API Development",
      "Performance Optimization",
      "SEO Implementation"
    ],
    highlights: [
      {
        icon: "Users",
        title: "50+ Happy Clients",
        description: "Delivered successful projects for businesses worldwide"
      },
      {
        icon: "Clock",
        title: "5+ Years Experience",
        description: "Expertise in modern web technologies and frameworks"
      },
      {
        icon: "Award",
        title: "Quality Guaranteed",
        description: "100% satisfaction rate with all delivered projects"
      }
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "hello@devportfolio.com"
    }
  });

  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "Custom Websites",
      description: "Bespoke websites tailored to your brand identity and business goals with modern design principles.",
      icon: "Globe",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Features"]
    },
    {
      id: 2,
      title: "E-commerce Stores",
      description: "Complete online store solutions with payment integration, inventory management, and user-friendly interfaces.",
      icon: "ShoppingCart",
      features: ["Payment Integration", "Inventory System", "Order Management", "Mobile Optimized"]
    },
    {
      id: 3,
      title: "Web Applications",
      description: "Complex web applications and SaaS platforms built with scalable architecture and modern frameworks.",
      icon: "BarChart3",
      features: ["Real-time Data", "User Authentication", "API Integration", "Cloud Deployment"]
    },
    {
      id: 4,
      title: "Mobile-First Design",
      description: "Websites optimized for mobile devices ensuring perfect user experience across all screen sizes.",
      icon: "Smartphone",
      features: ["Progressive Web App", "Touch Optimized", "Offline Support", "App-like Experience"]
    },
    {
      id: 5,
      title: "Database Solutions",
      description: "Robust database design and integration for efficient data management and seamless user experiences.",
      icon: "Database",
      features: ["Data Modeling", "Performance Tuning", "Backup Solutions", "Security Implementation"]
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to ensure your website loads fast and ranks well.",
      icon: "Zap",
      features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Integration"]
    }
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all expectations.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "Creative Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Incredible work on our company website redesign. The new site has improved our conversion rate by 40% and looks absolutely stunning.",
      rating: 5,
      project: "Website Redesign"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The custom dashboard application they built for us has streamlined our entire workflow. The user experience is intuitive and powerful.",
      rating: 5,
      project: "Dashboard Application"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      company: "Bella Vista Restaurant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Our restaurant's online presence was completely transformed. The new website with online reservations has increased our bookings significantly.",
      rating: 5,
      project: "Restaurant Website"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "The healthcare platform they developed for us is robust, secure, and user-friendly. They understood our complex requirements perfectly.",
      rating: 5,
      project: "Healthcare Platform"
    },
    {
      id: 6,
      name: "James Mitchell",
      role: "Real Estate Broker",
      company: "Premier Properties",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "The property listing platform has revolutionized how we do business. Our agents love the intuitive interface and powerful search features.",
      rating: 5,
      project: "Real Estate Platform"
    }
  ]);

  // Load data from localStorage on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('admin_authenticated');
    const storedInquiries = localStorage.getItem('admin_inquiries');
    const storedProjects = localStorage.getItem('admin_projects');
    const storedServices = localStorage.getItem('admin_services');
    const storedTestimonials = localStorage.getItem('admin_testimonials');
    const storedProfile = localStorage.getItem('admin_profile');
    
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    
    if (storedInquiries) {
      try {
        const parsed = JSON.parse(storedInquiries);
        setInquiries(parsed.map((inquiry: any) => ({
          ...inquiry,
          timestamp: new Date(inquiry.timestamp)
        })));
      } catch (error) {
        console.error('Error parsing stored inquiries:', error);
      }
    }

    if (storedProjects) {
      try {
        const parsed = JSON.parse(storedProjects);
        setProjects(parsed);
      } catch (error) {
        console.error('Error parsing stored projects:', error);
      }
    }

    if (storedServices) {
      try {
        const parsed = JSON.parse(storedServices);
        setServices(parsed);
      } catch (error) {
        console.error('Error parsing stored services:', error);
      }
    }

    if (storedTestimonials) {
      try {
        const parsed = JSON.parse(storedTestimonials);
        setTestimonials(parsed);
      } catch (error) {
        console.error('Error parsing stored testimonials:', error);
      }
    }

    if (storedProfile) {
      try {
        const parsed = JSON.parse(storedProfile);
        setProfile(parsed);
      } catch (error) {
        console.error('Error parsing stored profile:', error);
      }
    }
  }, []);

  // Save inquiries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('admin_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('admin_projects', JSON.stringify(projects));
  }, [projects]);

  // Save services to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('admin_services', JSON.stringify(services));
  }, [services]);

  // Save testimonials to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('admin_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('admin_profile', JSON.stringify(profile));
  }, [profile]);

  const login = (username: string, password: string): boolean => {
    // Simple authentication - in production, use proper authentication
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      // Set cookie for middleware
      document.cookie = 'admin_authenticated=true; path=/; max-age=86400'; // 24 hours
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    // Remove cookie
    document.cookie = 'admin_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  };

  const addInquiry = (inquiry: Omit<ContactInquiry, 'id' | 'timestamp' | 'isRead'>) => {
    const newInquiry: ContactInquiry = {
      ...inquiry,
      id: Date.now().toString(),
      timestamp: new Date(),
      isRead: false
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const deleteInquiry = (id: number) => {
    setInquiries(prev => prev.filter(inquiry => inquiry.id !== id.toString()));
  };

  const markAsRead = (id: number) => {
    setInquiries(prev => 
      prev.map(inquiry => 
        inquiry.id === id.toString() ? { ...inquiry, isRead: true } : inquiry
      )
    );
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    const newProject: Project = { ...project, id: newId };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: number, updatedProject: Project) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id ? updatedProject : project
      )
    );
  };

  const deleteProject = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  const addService = (service: Omit<Service, 'id'>) => {
    const newId = Math.max(...services.map(s => s.id), 0) + 1;
    const newService: Service = { ...service, id: newId };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (id: number, updatedService: Service) => {
    setServices(prev => 
      prev.map(service => 
        service.id === id ? updatedService : service
      )
    );
  };

  const deleteService = (id: number) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const newId = Math.max(...testimonials.map(t => t.id), 0) + 1;
    const newTestimonial: Testimonial = { ...testimonial, id: newId };
    setTestimonials(prev => [...prev, newTestimonial]);
  };

  const updateTestimonial = (id: number, updatedTestimonial: Testimonial) => {
    setTestimonials(prev => 
      prev.map(testimonial => 
        testimonial.id === id ? updatedTestimonial : testimonial
      )
    );
  };

  const deleteTestimonial = (id: number) => {
    setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
  };

  const updateProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      inquiries,
      addInquiry,
      deleteInquiry,
      markAsRead,
      projects,
      addProject,
      updateProject,
      deleteProject,
      services,
      addService,
      updateService,
      deleteService,
      testimonials,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      profile,
      updateProfile
    }}>
      {children}
    </AdminContext.Provider>
  );
};