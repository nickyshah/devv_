"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAdmin } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  BarChart3,
  Briefcase
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, inquiries } = useAdmin();
  const pathname = usePathname();
  const router = useRouter();

  const unreadCount = inquiries.filter(inquiry => !inquiry.isRead).length;

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Portfolio', href: '/admin/portfolio', icon: FolderOpen },
    { name: 'Services', href: '/admin/services', icon: Briefcase },
    { name: 'Testimonials', href: '/admin/testimonials', icon: Users },
    { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare, badge: unreadCount },
    { name: 'Profile', href: '/admin/profile', icon: User },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border shadow-large transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:flex lg:flex-col ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-border flex-shrink-0">
          <Link href="/admin/dashboard" className="text-xl font-bold text-gradient">
            Admin Panel
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-green to-brand-emerald text-primary-foreground shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`mr-3 h-5 w-5 transition-colors ${isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
                  {item.name}
                  {item.badge && item.badge > 0 && (
                    <span className="ml-auto bg-destructive text-destructive-foreground text-xs rounded-full px-2 py-1 min-w-[20px] text-center font-semibold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-border flex-shrink-0">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full justify-start text-destructive border-destructive/20 hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
          >
            <LogOut className="mr-3 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top header */}
        <header className="bg-card/50 backdrop-blur-sm shadow-subtle border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="text-sm text-foreground font-medium">
                Welcome back, <span className="text-gradient">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 bg-gradient-subtle overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}