import React from 'react';
import { LayoutDashboard, CheckSquare, Users, Building, CreditCard, HelpCircle, Settings } from 'lucide-react';

export default function AdminSidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'overview', label: 'Platform Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'verification', label: 'Business Verification', icon: <CheckSquare size={18} />, badge: '3 Pending' },
    { id: 'bookings', label: 'Global Bookings', icon: <Building size={18} /> },
    { id: 'payments', label: 'Financials & Payouts', icon: <CreditCard size={18} /> },
    { id: 'users', label: 'User Directory', icon: <Users size={18} /> },
    { id: 'support', label: 'Support Tickets', icon: <HelpCircle size={18} /> }
  ];

  return (
    <aside style={{
      width: '240px',
      background: '#0B1120',
      color: '#94A3B8',
      minHeight: 'calc(100vh - 65px)',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      borderRight: '1px solid rgba(255,255,255,0.05)'
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
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: '12px',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: isActive ? '#FFFFFF' : '#94A3B8',
              background: isActive ? '#4F46E5' : 'transparent',
              transition: 'all 0.2s',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {item.icon}
              <span>{item.label}</span>
            </div>
            {item.badge && (
              <span style={{ fontSize: '0.68rem', background: '#F59E0B', color: '#0F172A', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </aside>
  );
}
