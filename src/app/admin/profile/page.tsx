"use client";

import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Plus, 
  Trash2,
  Save,
  Github,
  Linkedin,
  Twitter,
  Award,
  Users,
  Clock
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const { profile, updateProfile } = useAdmin();
  const { toast } = useToast();
  const [formData, setFormData] = useState(profile);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  useEffect(() => {
    const hasChanges = JSON.stringify(formData) !== JSON.stringify(profile);
    setHasChanges(hasChanges);
  }, [formData, profile]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const addSkill = () => {
    if (formData.skills.length < 12) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, '']
      }));
    }
  };

  const removeSkill = (index: number) => {
    if (formData.skills.length > 1) {
      const newSkills = formData.skills.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        skills: newSkills
      }));
    }
  };

  const handleHighlightChange = (index: number, field: string, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = {
      ...newHighlights[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      highlights: newHighlights
    }));
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter out empty skills
    const cleanedFormData = {
      ...formData,
      skills: formData.skills.filter(skill => skill.trim() !== '')
    };
    
    updateProfile(cleanedFormData);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  const iconOptions = [
    { value: 'Users', label: 'Users', icon: Users },
    { value: 'Clock', label: 'Clock', icon: Clock },
    { value: 'Award', label: 'Award', icon: Award }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
            <p className="text-muted-foreground mt-2">Update your personal information and about section</p>
          </div>
          {hasChanges && (
            <div className="flex items-center gap-2 text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Unsaved changes</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="card-elevated bg-card border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-brand-green" />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Full-Stack Web Developer"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Experience</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="e.g., 5+ Years Experience"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location || ''}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g., San Francisco, CA"
                />
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <Label htmlFor="description">About Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                placeholder="Write a compelling description about yourself and your expertise..."
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="card-elevated bg-card border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-blue" />
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="card-elevated bg-card border border-border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-emerald" />
                Skills & Expertise
              </h2>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSkill}
                disabled={formData.skills.length >= 12}
                className="flex items-center gap-2 border-brand-green/30 hover:bg-brand-green/10 hover:border-brand-green"
              >
                <Plus className="w-4 h-4" />
                Add Skill
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    placeholder={`Skill ${index + 1}`}
                    className="flex-1"
                  />
                  {formData.skills.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeSkill(index)}
                      className="p-2 border-destructive/30 hover:bg-destructive/10 hover:border-destructive text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="card-elevated bg-card border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-indigo" />
              Profile Highlights
            </h2>
            
            <div className="space-y-6">
              {formData.highlights.map((highlight, index) => (
                <div key={index} className="border border-border rounded-lg p-4 bg-accent/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Icon</Label>
                      <select
                        value={highlight.icon}
                        onChange={(e) => handleHighlightChange(index, 'icon', e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                      >
                        {iconOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={highlight.title}
                        onChange={(e) => handleHighlightChange(index, 'title', e.target.value)}
                        placeholder="e.g., 50+ Happy Clients"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Input
                        value={highlight.description}
                        onChange={(e) => handleHighlightChange(index, 'description', e.target.value)}
                        placeholder="Brief description"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="card-elevated bg-card border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Github className="w-5 h-5 text-brand-lime" />
              Social Links
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="github" className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  GitHub
                </Label>
                <Input
                  id="github"
                  value={formData.socialLinks.github || ''}
                  onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                  placeholder="https://github.com/username"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  value={formData.socialLinks.linkedin || ''}
                  onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="twitter" className="flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-muted-foreground" />
                  Twitter
                </Label>
                <Input
                  id="twitter"
                  value={formData.socialLinks.twitter || ''}
                  onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                  placeholder="https://twitter.com/username"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email-social" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Contact Email
                </Label>
                <Input
                  id="email-social"
                  value={formData.socialLinks.email || ''}
                  onChange={(e) => handleSocialLinkChange('email', e.target.value)}
                  placeholder="contact@example.com"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="flex items-center gap-2 px-6 bg-gradient-to-r from-brand-green to-brand-emerald hover:from-brand-emerald hover:to-brand-lime shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!hasChanges}
            >
              <Save className="w-4 h-4" />
              Save Profile
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}