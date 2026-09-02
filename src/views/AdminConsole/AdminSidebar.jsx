import React from 'react';
import { LayoutDashboard, ShieldCheck, ClipboardList, DollarSign, Users, HelpCircle, Activity, Sparkles } from 'lucide-react';
import { ADMIN_STATS } from '../../data/sampleData';

export default function AdminSidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'overview', label: 'Platform Pulse', icon: <LayoutDashboard size={18} /> },
    { id: 'verification', label: 'Partner KYC Approvals', icon: <ShieldCheck size={18} />, badge: `${ADMIN_STATS.pendingVerifications.length} Pending`, badgeColor: '#F59E0B' },
    { id: 'bookings', label: 'Global Bookings', icon: <ClipboardList size={18} /> },
    { id: 'payments', label: 'Financials & Payouts', icon: <DollarSign size={18} />, badge: '₹3.58L Due', badgeColor: '#10B981' },
    { id: 'users', label: 'User Directory', icon: <Users size={18} /> },
    { id: 'support', label: 'Support Desk', icon: <HelpCircle size={18} />, badge: '2 Urgent', badgeColor: '#F43F5E' },
    { id: 'diagnostics', label: 'Diagnostics & Telemetry', icon: <Activity size={18} /> },
  ];

  return (
    <aside style={{
      width: '260px',
      background: '#090D16',
      color: '#94A3B8',
      minHeight: 'calc(100vh - 68px)',
      padding: '20px 14px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 12px 8px' }}>
          MANAGEMENT SUITE
        </div>

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
                borderRadius: '14px',
                fontSize: '0.85rem',
                fontWeight: isActive ? 800 : 600,
                color: isActive ? '#FFFFFF' : '#94A3B8',
                background: isActive ? 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' : 'transparent',
                boxShadow: isActive ? '0 4px 18px rgba(79,70,229,0.4)' : 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: isActive ? '#FFFFFF' : '#818CF8' }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span style={{
                  fontSize: '0.65rem',
                  background: isActive ? 'rgba(255,255,255,0.25)' : `${item.badgeColor}22`,
                  color: isActive ? '#FFFFFF' : item.badgeColor,
                  border: isActive ? '1px solid rgba(255,255,255,0.4)' : `1px solid ${item.badgeColor}44`,
                  padding: '2px 7px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  whiteSpace: 'nowrap'
                }}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Cloud Node Footer */}
      <div style={{
        background: '#131B2E',
        borderRadius: '16px',
        padding: '14px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        marginTop: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <Sparkles size={14} color="#818CF8" />
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#E2E8F0' }}>Apointo Cloud v2.6.4</span>
        </div>
        <p style={{ fontSize: '0.65rem', color: '#64748B', lineHeight: 1.4 }}>
          Cluster: in-blr-prod-01<br />
          SSL TLS 1.3 • AES-256 Encrypted
        </p>
      </div>
    </aside>
  );
}
