"use client";

import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Clock,
  Globe,
  Smartphone,
  Monitor,
  BarChart3,
  PieChart,
  Calendar,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';

export default function AnalyticsPage() {
  const { inquiries } = useAdmin();

  // Mock analytics data - in a real app, this would come from your analytics service
  const analyticsData = {
    overview: {
      totalVisitors: 15420,
      pageViews: 28350,
      bounceRate: 32.5,
      avgSessionDuration: '2m 45s',
      conversionRate: 4.2
    },
    traffic: {
      organic: 45,
      direct: 30,
      social: 15,
      referral: 10
    },
    devices: {
      desktop: 60,
      mobile: 35,
      tablet: 5
    },
    topPages: [
      { page: '/', views: 8420, change: 12.5 },
      { page: '/portfolio', views: 5230, change: -2.1 },
      { page: '/services', views: 4180, change: 8.7 },
      { page: '/about', views: 3920, change: 15.3 },
      { page: '/contact', views: 2850, change: 5.2 }
    ],
    monthlyData: [
      { month: 'Jan', visitors: 1200, pageViews: 2400 },
      { month: 'Feb', visitors: 1350, pageViews: 2700 },
      { month: 'Mar', visitors: 1180, pageViews: 2360 },
      { month: 'Apr', visitors: 1420, pageViews: 2840 },
      { month: 'May', visitors: 1680, pageViews: 3360 },
      { month: 'Jun', visitors: 1890, pageViews: 3780 }
    ]
  };

  const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
    <div className="card-elevated bg-card border border-border p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <ArrowUp className="w-4 h-4 text-brand-green mr-1" />
            ) : (
              <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-brand-green' : 'text-red-500'}`}>
              {change}%
            </span>
          </div>
        </div>
        <div className="p-3 bg-gradient-primary rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const TrafficSourceCard = ({ source, percentage, color }: any) => (
    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${color}`} />
        <span className="font-medium text-foreground capitalize">{source}</span>
      </div>
      <span className="text-sm font-semibold text-muted-foreground">{percentage}%</span>
    </div>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">Track your website performance and user engagement</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last 30 days</span>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard
            title="Total Visitors"
            value={analyticsData.overview.totalVisitors.toLocaleString()}
            change={12.5}
            trend="up"
            icon={Users}
          />
          <StatCard
            title="Page Views"
            value={analyticsData.overview.pageViews.toLocaleString()}
            change={8.2}
            trend="up"
            icon={Eye}
          />
          <StatCard
            title="Bounce Rate"
            value={`${analyticsData.overview.bounceRate}%`}
            change={-2.1}
            trend="up"
            icon={Activity}
          />
          <StatCard
            title="Avg. Session"
            value={analyticsData.overview.avgSessionDuration}
            change={15.3}
            trend="up"
            icon={Clock}
          />
          <StatCard
            title="Conversion Rate"
            value={`${analyticsData.overview.conversionRate}%`}
            change={4.7}
            trend="up"
            icon={TrendingUp}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traffic Sources */}
          <div className="card-elevated bg-card border border-border p-6">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-brand-green" />
              <h3 className="text-lg font-semibold text-foreground">Traffic Sources</h3>
            </div>
            <div className="space-y-3">
              <TrafficSourceCard source="organic" percentage={analyticsData.traffic.organic} color="bg-brand-green" />
              <TrafficSourceCard source="direct" percentage={analyticsData.traffic.direct} color="bg-brand-blue" />
              <TrafficSourceCard source="social" percentage={analyticsData.traffic.social} color="bg-brand-indigo" />
              <TrafficSourceCard source="referral" percentage={analyticsData.traffic.referral} color="bg-brand-emerald" />
            </div>
          </div>

          {/* Device Types */}
          <div className="card-elevated bg-card border border-border p-6">
            <div className="flex items-center gap-2 mb-6">
              <Monitor className="w-5 h-5 text-brand-blue" />
              <h3 className="text-lg font-semibold text-foreground">Device Types</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">Desktop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: `${analyticsData.devices.desktop}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground w-8">{analyticsData.devices.desktop}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">Mobile</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-brand-green rounded-full" style={{ width: `${analyticsData.devices.mobile}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground w-8">{analyticsData.devices.mobile}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">Tablet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-brand-emerald rounded-full" style={{ width: `${analyticsData.devices.tablet}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground w-8">{analyticsData.devices.tablet}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="card-elevated bg-card border border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-brand-emerald" />
            <h3 className="text-lg font-semibold text-foreground">Top Pages</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Page</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Views</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Change</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.topPages.map((page, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-medium text-foreground">{page.page}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-muted-foreground">{page.views.toLocaleString()}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        {page.change > 0 ? (
                          <ArrowUp className="w-4 h-4 text-brand-green" />
                        ) : (
                          <ArrowDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm font-medium ${page.change > 0 ? 'text-brand-green' : 'text-red-500'}`}>
                          {page.change > 0 ? '+' : ''}{page.change}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="card-elevated bg-card border border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-brand-lime" />
            <h3 className="text-lg font-semibold text-foreground">Monthly Trend</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {analyticsData.monthlyData.map((month, index) => (
              <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium text-muted-foreground mb-2">{month.month}</p>
                <p className="text-lg font-bold text-foreground">{month.visitors.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">visitors</p>
                <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-500" 
                    style={{ width: `${(month.visitors / 2000) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}