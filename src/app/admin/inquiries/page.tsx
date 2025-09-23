"use client";

import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  Mail, 
  Phone, 
  Calendar,
  Eye,
  EyeOff,
  Trash2,
  Search,
  Filter,
  Download,
  MessageSquare
} from 'lucide-react';
import { useState } from 'react';

export default function InquiriesPage() {
  const { inquiries, markAsRead, deleteInquiry } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, read, unread
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'read' && inquiry.isRead) ||
                         (filterStatus === 'unread' && !inquiry.isRead);
    
    return matchesSearch && matchesFilter;
  });

  const handleMarkAsRead = (inquiryId: string) => {
    markAsRead(inquiryId);
  };

  const handleDelete = (inquiryId: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      deleteInquiry(inquiryId);
      if (selectedInquiry?.id === inquiryId) {
        setSelectedInquiry(null);
      }
    }
  };

  const exportInquiries = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Message', 'Date', 'Status'],
      ...inquiries.map(inquiry => [
        inquiry.name,
        inquiry.email,
        inquiry.phone || '',
        inquiry.message.replace(/,/g, ';'),
        inquiry.timestamp.toLocaleDateString(),
        inquiry.isRead ? 'Read' : 'Unread'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inquiries.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Contact Inquiries</h1>
            <p className="text-muted-foreground mt-2">Manage and respond to contact form submissions</p>
          </div>
          <button
            onClick={exportInquiries}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-brand-blue to-brand-indigo text-white rounded-lg hover:shadow-lg transition-all duration-200"
          >
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-subtle border border-border p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center">
              <MessageSquare className="w-8 h-8 text-brand-blue mr-3" />
              <div>
                <p className="text-2xl font-bold text-foreground">{inquiries.length}</p>
                <p className="text-sm text-muted-foreground">Total Inquiries</p>
              </div>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-subtle border border-border p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center">
              <EyeOff className="w-8 h-8 text-brand-orange mr-3" />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {inquiries.filter(i => !i.isRead).length}
                </p>
                <p className="text-sm text-muted-foreground">Unread</p>
              </div>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-subtle border border-border p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center">
              <Eye className="w-8 h-8 text-brand-green mr-3" />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {inquiries.filter(i => i.isRead).length}
                </p>
                <p className="text-sm text-muted-foreground">Read</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-subtle border border-border p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-foreground"
              >
                <option value="all">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* List */}
          <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-subtle border border-border">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">
                Inquiries ({filteredInquiries.length})
              </h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredInquiries.length > 0 ? (
                <div className="divide-y divide-border">
                  {filteredInquiries.map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className={`p-4 cursor-pointer hover:bg-accent/50 transition-colors ${
                        selectedInquiry?.id === inquiry.id ? 'bg-brand-blue/10 border-r-4 border-brand-blue' : ''
                      }`}
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground truncate">
                              {inquiry.name}
                            </p>
                            {!inquiry.isRead && (
                              <span className="w-2 h-2 bg-brand-blue rounded-full" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{inquiry.email}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">
                            {inquiry.timestamp.toLocaleDateString()} at{' '}
                            {inquiry.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkAsRead(inquiry.id);
                            }}
                            className="p-1 text-muted-foreground hover:text-brand-blue transition-colors"
                            title={inquiry.isRead ? 'Mark as unread' : 'Mark as read'}
                          >
                            {inquiry.isRead ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(inquiry.id);
                            }}
                            className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                            title="Delete inquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">No inquiries found</p>
                </div>
              )}
            </div>
          </div>

          {/* Detail View */}
          <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-subtle border border-border">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Inquiry Details</h3>
            </div>
            <div className="p-6">
              {selectedInquiry ? (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-4">
                      {selectedInquiry.name}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${selectedInquiry.email}`} className="hover:text-brand-blue transition-colors">
                          {selectedInquiry.email}
                        </a>
                      </div>
                      {selectedInquiry.phone && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${selectedInquiry.phone}`} className="hover:text-brand-blue transition-colors">
                            {selectedInquiry.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedInquiry.timestamp.toLocaleDateString()} at{' '}
                        {selectedInquiry.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Message</h5>
                    <div className="bg-accent/30 rounded-lg p-4 border border-border">
                      <p className="text-sm text-foreground whitespace-pre-wrap">
                        {selectedInquiry.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleMarkAsRead(selectedInquiry.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                        selectedInquiry.isRead
                          ? 'bg-accent/50 text-foreground hover:bg-accent border border-border'
                          : 'bg-gradient-to-r from-brand-blue to-brand-indigo text-white hover:shadow-lg'
                      }`}
                    >
                      {selectedInquiry.isRead ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                      {selectedInquiry.isRead ? 'Mark Unread' : 'Mark Read'}
                    </button>
                    <a
                      href={`mailto:${selectedInquiry.email}?subject=Re: Your inquiry&body=Hi ${selectedInquiry.name},%0D%0A%0D%0AThank you for your inquiry.%0D%0A%0D%0ABest regards`}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-brand-green to-brand-emerald text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Reply
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Select an inquiry to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}