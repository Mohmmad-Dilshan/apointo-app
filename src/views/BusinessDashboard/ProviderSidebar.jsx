import React from 'react';
import { LayoutDashboard, Calendar, ClipboardList, Zap, Scissors, Users, UserCheck, CreditCard, Tag, BarChart3, Star, Settings } from 'lucide-react';

export default function ProviderSidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'automations', label: 'Smart Automations ⚡', icon: <Zap size={18} /> },
    { id: 'calendar', label: 'Live Calendar', icon: <Calendar size={18} /> },
    { id: 'appointments', label: 'Appointments', icon: <ClipboardList size={18} /> },
    { id: 'services', label: 'Services Catalog', icon: <Scissors size={18} /> },
    { id: 'staff', label: 'Staff Management', icon: <UserCheck size={18} /> },
    { id: 'crm', label: 'Customer CRM', icon: <Users size={18} /> },
    { id: 'payments', label: 'Payments & Payouts', icon: <CreditCard size={18} /> },
    { id: 'offers', label: 'Marketing Offers', icon: <Tag size={18} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={18} /> },
    { id: 'reviews', label: 'Customer Reviews', icon: <Star size={18} /> },
    { id: 'settings', label: 'Business Settings', icon: <Settings size={18} /> }
  ];

  return (
    <aside style={{
      width: '240px',
      background: '#FFFFFF',
      borderRight: '1px solid #E2E8F0',
      minHeight: 'calc(100vh - 65px)',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
      {menuItems.map(item => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 14px',
              borderRadius: '12px',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: isActive ? '#FFFFFF' : '#475569',
              background: isActive ? '#4F46E5' : 'transparent',
              transition: 'all 0.2s',
              textAlign: 'left'
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
