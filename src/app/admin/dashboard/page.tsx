"use client";

import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  FolderOpen, 
  MessageSquare, 
  Users, 
  Eye,
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function AdminDashboard() {
  const { inquiries } = useAdmin();

  const stats = [
    {
      name: 'Total Projects',
      value: '12',
      icon: FolderOpen,
      color: 'bg-gradient-to-r from-brand-blue to-brand-indigo',
      change: '+2 this month'
    },
    {
      name: 'New Inquiries',
      value: inquiries.length.toString(),
      icon: MessageSquare,
      color: 'bg-gradient-to-r from-brand-green to-brand-emerald',
      change: `${inquiries.filter(i => !i.isRead).length} unread`
    },
    {
      name: 'Testimonials',
      value: '8',
      icon: Users,
      color: 'bg-gradient-to-r from-brand-indigo to-brand-blue',
      change: '+1 this week'
    },
    {
      name: 'Page Views',
      value: '2.4k',
      icon: Eye,
      color: 'bg-gradient-to-r from-brand-emerald to-brand-lime',
      change: '+12% this week'
    }
  ];

  const recentInquiries = inquiries.slice(0, 5);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="card-elevated bg-card border border-border p-6 group hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color} shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Inquiries */}
          <div className="card-elevated bg-card border border-border">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Recent Inquiries</h3>
            </div>
            <div className="p-6">
              {recentInquiries.length > 0 ? (
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 ${inquiry.isRead ? 'bg-muted-foreground' : 'bg-brand-green'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {inquiry.name}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {inquiry.email}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {inquiry.timestamp.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">No inquiries yet</p>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card-elevated bg-card border border-border">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <a
                  href="/admin/portfolio"
                  className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/50 hover:border-brand-green/50 transition-all duration-300 group"
                >
                  <FolderOpen className="w-5 h-5 text-brand-blue mr-3 group-hover:text-brand-green transition-colors" />
                  <span className="text-sm font-medium text-foreground">Manage Portfolio</span>
                </a>
                <a
                  href="/admin/inquiries"
                  className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/50 hover:border-brand-green/50 transition-all duration-300 group"
                >
                  <MessageSquare className="w-5 h-5 text-brand-green mr-3 group-hover:text-brand-emerald transition-colors" />
                  <span className="text-sm font-medium text-foreground">View Inquiries</span>
                </a>
                <a
                  href="/admin/testimonials"
                  className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/50 hover:border-brand-green/50 transition-all duration-300 group"
                >
                  <Users className="w-5 h-5 text-brand-indigo mr-3 group-hover:text-brand-blue transition-colors" />
                  <span className="text-sm font-medium text-foreground">Manage Testimonials</span>
                </a>
                <a
                  href="/admin/profile"
                  className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/50 hover:border-brand-green/50 transition-all duration-300 group"
                >
                  <CheckCircle className="w-5 h-5 text-brand-emerald mr-3 group-hover:text-brand-lime transition-colors" />
                  <span className="text-sm font-medium text-foreground">Update Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Website Performance */}
        <div className="card-elevated bg-card border border-border">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">Website Performance</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-blue/20 to-brand-indigo/20 rounded-lg mx-auto mb-3 border border-brand-blue/30">
                  <TrendingUp className="w-6 h-6 text-brand-blue" />
                </div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-green/20 to-brand-emerald/20 rounded-lg mx-auto mb-3 border border-brand-green/30">
                  <Clock className="w-6 h-6 text-brand-green" />
                </div>
                <p className="text-2xl font-bold text-foreground">1.2s</p>
                <p className="text-sm text-muted-foreground">Load Time</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-indigo/20 to-brand-blue/20 rounded-lg mx-auto mb-3 border border-brand-indigo/30">
                  <Eye className="w-6 h-6 text-brand-indigo" />
                </div>
                <p className="text-2xl font-bold text-foreground">2.4k</p>
                <p className="text-sm text-muted-foreground">Monthly Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}