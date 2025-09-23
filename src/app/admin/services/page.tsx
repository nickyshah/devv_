'use client';

import { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Globe, ShoppingCart, BarChart3, Smartphone, Database, Zap } from 'lucide-react';

const iconMap = {
  Globe,
  ShoppingCart,
  BarChart3,
  Smartphone,
  Database,
  Zap
};

export default function ServicesPage() {
  const { services, addService, updateService, deleteService } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'Globe',
    features: ['', '', '', '']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceData = {
      ...formData,
      features: formData.features.filter(feature => feature.trim() !== '')
    };

    if (editingService) {
      updateService(editingService.id, { ...serviceData, id: editingService.id });
    } else {
      addService(serviceData);
    }

    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: 'Globe',
      features: ['', '', '', '']
    });
    setEditingService(null);
  };

  const handleEdit = (service: any) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      features: [...service.features, '', '', '', ''].slice(0, 4)
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this service?')) {
      deleteService(id);
    }
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Services Management</h1>
            <p className="text-muted-foreground">Manage your service offerings</p>
          </div>
          <Button 
            onClick={() => { resetForm(); setIsModalOpen(true); }}
            className="bg-gradient-primary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>

      {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="card-elevated p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4 border-b border-border pb-4">
                <h2 className="text-xl font-bold text-foreground">
                  {editingService ? 'Edit Service' : 'Add New Service'}
                </h2>
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className="border-border text-muted-foreground hover:text-foreground hover:bg-muted">
                  ×
                </Button>
              </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Service Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="icon">Icon</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, icon: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an icon" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Globe">Globe</SelectItem>
                      <SelectItem value="ShoppingCart">Shopping Cart</SelectItem>
                      <SelectItem value="BarChart3">Bar Chart</SelectItem>
                      <SelectItem value="Smartphone">Smartphone</SelectItem>
                      <SelectItem value="Database">Database</SelectItem>
                      <SelectItem value="Zap">Zap</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Features (up to 4)</Label>
                {formData.features.map((feature, index) => (
                  <Input
                    key={index}
                    placeholder={`Feature ${index + 1}`}
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                  />
                ))}
              </div>

              <div className="flex justify-end space-x-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsModalOpen(false)}
                    className="border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-primary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {editingService ? 'Update Service' : 'Add Service'}
                  </Button>
                </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Globe;
            
            return (
              <div key={service.id} className="card-elevated p-6 relative group overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(service)}
                      className="border-border text-muted-foreground hover:text-brand-blue hover:bg-brand-blue/10"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(service.id)}
                      className="border-border text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

      {services.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <Globe className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">No services yet</h3>
          <p className="text-muted-foreground mb-4">Get started by adding your first service.</p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-primary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Service
          </Button>
        </div>
      )}
      </div>
    </AdminLayout>
  );
}