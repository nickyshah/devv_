"use client";

import { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Globe,
  Bell,
  Shield,
  Palette,
  Database,
  Key,
  Save,
  Upload,
  Eye,
  EyeOff,
  Settings as SettingsIcon
} from 'lucide-react';

export default function SettingsPage() {
  const { logout } = useAdmin();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // Mock user data - in a real app, this would come from your user context/API
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@devportfolio.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate software developer with 5+ years of experience creating exceptional web experiences.',
    website: 'https://devportfolio.com',
    avatar: ''
  });

  const [preferences, setPreferences] = useState({
    theme: 'dark',
    language: 'en',
    timezone: 'PST',
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    weeklyReports: true
  });

  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'data', label: 'Data & Privacy', icon: Database }
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', profileData);
  };

  const handlePreferencesUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle preferences update logic here
    console.log('Preferences updated:', preferences);
  };

  const handleSecurityUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle security update logic here
    console.log('Security updated:', security);
  };

  const TabButton = ({ tab, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(tab.id)}
      className={`flex items-center gap-3 w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-gradient-primary text-white shadow-lg'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
      }`}
    >
      <tab.icon className="w-5 h-5" />
      <span className="font-medium">{tab.label}</span>
    </button>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="card-elevated bg-card border border-border p-4 space-y-2">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={setActiveTab}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="card-elevated bg-card border border-border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-brand-green" />
                  <h2 className="text-xl font-semibold text-foreground">Profile Information</h2>
                </div>

                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  {/* Avatar Upload */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground hover:bg-muted">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="bg-muted border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="bg-muted border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        className="bg-muted border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-foreground">Location</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                        className="bg-muted border-border text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-foreground">Website</Label>
                    <Input
                      id="website"
                      value={profileData.website}
                      onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                      className="bg-muted border-border text-foreground"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bio" className="text-foreground">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      className="bg-muted border-border text-foreground"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="bg-gradient-primary hover:opacity-90 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </form>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="card-elevated bg-card border border-border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Palette className="w-5 h-5 text-brand-blue" />
                  <h2 className="text-xl font-semibold text-foreground">Preferences</h2>
                </div>

                <form onSubmit={handlePreferencesUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-foreground">Theme</Label>
                      <Select onValueChange={(value) => setPreferences({ ...preferences, theme: value })}>
                        <SelectTrigger className="bg-muted border-border text-foreground">
                          <SelectValue placeholder={preferences.theme === 'dark' ? 'Dark' : preferences.theme === 'light' ? 'Light' : 'System'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-foreground">Language</Label>
                      <Select onValueChange={(value) => setPreferences({ ...preferences, language: value })}>
                        <SelectTrigger className="bg-muted border-border text-foreground">
                          <SelectValue placeholder={preferences.language === 'en' ? 'English' : preferences.language === 'es' ? 'Spanish' : preferences.language === 'fr' ? 'French' : 'German'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-foreground">Timezone</Label>
                      <Select onValueChange={(value) => setPreferences({ ...preferences, timezone: value })}>
                        <SelectTrigger className="bg-muted border-border text-foreground">
                          <SelectValue placeholder={preferences.timezone === 'PST' ? 'Pacific Standard Time' : preferences.timezone === 'EST' ? 'Eastern Standard Time' : preferences.timezone === 'CST' ? 'Central Standard Time' : 'Mountain Standard Time'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PST">Pacific Standard Time</SelectItem>
                          <SelectItem value="EST">Eastern Standard Time</SelectItem>
                          <SelectItem value="CST">Central Standard Time</SelectItem>
                          <SelectItem value="MST">Mountain Standard Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="bg-gradient-primary hover:opacity-90 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Preferences
                  </Button>
                </form>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="card-elevated bg-card border border-border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Bell className="w-5 h-5 text-brand-emerald" />
                  <h2 className="text-xl font-semibold text-foreground">Notification Settings</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium text-foreground">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, emailNotifications: !preferences.emailNotifications })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.emailNotifications ? 'bg-brand-green' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium text-foreground">Push Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, pushNotifications: !preferences.pushNotifications })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.pushNotifications ? 'bg-brand-green' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium text-foreground">Marketing Emails</h3>
                      <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, marketingEmails: !preferences.marketingEmails })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketingEmails ? 'bg-brand-green' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketingEmails ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium text-foreground">Weekly Reports</h3>
                      <p className="text-sm text-muted-foreground">Receive weekly analytics reports</p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, weeklyReports: !preferences.weeklyReports })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.weeklyReports ? 'bg-brand-green' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.weeklyReports ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="card-elevated bg-card border border-border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-semibold text-foreground">Security Settings</h2>
                </div>

                <form onSubmit={handleSecurityUpdate} className="space-y-6">
                  <div>
                    <Label htmlFor="currentPassword" className="text-foreground">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword ? "text" : "password"}
                        value={security.currentPassword}
                        onChange={(e) => setSecurity({ ...security, currentPassword: e.target.value })}
                        className="bg-muted border-border text-foreground pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="newPassword" className="text-foreground">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={security.newPassword}
                        onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
                        className="bg-muted border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={security.confirmPassword}
                        onChange={(e) => setSecurity({ ...security, confirmPassword: e.target.value })}
                        className="bg-muted border-border text-foreground"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h3 className="font-medium text-foreground">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSecurity({ ...security, twoFactorEnabled: !security.twoFactorEnabled })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        security.twoFactorEnabled ? 'bg-brand-green' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          security.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <Button type="submit" className="bg-gradient-primary hover:opacity-90 text-white">
                    <Key className="w-4 h-4 mr-2" />
                    Update Security
                  </Button>
                </form>
              </div>
            )}

            {/* Data & Privacy Tab */}
            {activeTab === 'data' && (
              <div className="card-elevated bg-card border border-border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Database className="w-5 h-5 text-brand-indigo" />
                  <h2 className="text-xl font-semibold text-foreground">Data & Privacy</h2>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-medium text-foreground mb-2">Export Your Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">Download a copy of all your data including projects, testimonials, and settings.</p>
                    <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground hover:bg-muted">
                      Export Data
                    </Button>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-medium text-foreground mb-2">Delete Account</h3>
                    <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all associated data. This action cannot be undone.</p>
                    <Button variant="outline" className="border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-500">
                      Delete Account
                    </Button>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-medium text-foreground mb-2">Privacy Policy</h3>
                    <p className="text-sm text-muted-foreground mb-4">Review our privacy policy to understand how we collect, use, and protect your data.</p>
                    <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground hover:bg-muted">
                      View Privacy Policy
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}