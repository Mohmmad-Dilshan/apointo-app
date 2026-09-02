import React from 'react';
import { LayoutDashboard, Building2, ShieldCheck, ClipboardList, DollarSign, Tag, Bell, Users, HelpCircle, ShieldAlert, History, Activity, Sparkles } from 'lucide-react';
import { ADMIN_STATS } from '../../data/sampleData';

export default function AdminSidebar({ activeTab, setActiveTab }) {
  const sections = [
    {
      group: "CORE OPERATIONS",
      items: [
        { id: 'overview', label: 'Platform Pulse', icon: <LayoutDashboard size={17} /> },
        { id: 'merchants', label: 'Merchant Master', icon: <Building2 size={17} />, badge: '420 Live', badgeColor: '#38BDF8' },
        { id: 'verification', label: 'Partner KYC Approvals', icon: <ShieldCheck size={17} />, badge: `${ADMIN_STATS.pendingVerifications.length} Pending`, badgeColor: '#F59E0B' },
        { id: 'bookings', label: 'Global Bookings', icon: <ClipboardList size={17} /> },
        { id: 'payments', label: 'Financials & Payouts', icon: <DollarSign size={17} />, badge: '₹3.58L Due', badgeColor: '#10B981' },
      ]
    },
    {
      group: "GROWTH & MARKETING",
      items: [
        { id: 'promotions', label: 'Coupons & Campaigns', icon: <Tag size={17} />, badge: '4 Active', badgeColor: '#FBBF24' },
        { id: 'broadcast', label: 'Push & SMS Broadcast', icon: <Bell size={17} /> },
        { id: 'users', label: 'User Directory', icon: <Users size={17} /> },
      ]
    },
    {
      group: "GOVERNANCE & TELEMETRY",
      items: [
        { id: 'support', label: 'Support & Disputes', icon: <HelpCircle size={17} />, badge: '2 Urgent', badgeColor: '#F43F5E' },
        { id: 'security', label: 'AI Fraud Sentinel', icon: <ShieldAlert size={17} />, badge: 'Active', badgeColor: '#F43F5E' },
        { id: 'audit', label: 'Audit Trail Logs', icon: <History size={17} /> },
        { id: 'diagnostics', label: 'Microservices Health', icon: <Activity size={17} /> },
      ]
    }
  ];

  return (
    <aside style={{
      width: '260px',
      background: '#090D16',
      color: '#94A3B8',
      minHeight: 'calc(100vh - 68px)',
      padding: '18px 12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRight: '1px solid rgba(255, 255, 255, 0.06)',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }} className="no-scrollbar">
        {sections.map((sec, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 10px 4px' }}>
              {sec.group}
            </div>

            {sec.items.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#FFFFFF' : '#94A3B8',
                    background: isActive ? 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' : 'transparent',
                    boxShadow: isActive ? '0 4px 18px rgba(79,70,229,0.4)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: isActive ? '#FFFFFF' : '#818CF8' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span style={{
                      fontSize: '0.62rem',
                      background: isActive ? 'rgba(255,255,255,0.25)' : `${item.badgeColor}22`,
                      color: isActive ? '#FFFFFF' : item.badgeColor,
                      border: isActive ? '1px solid rgba(255,255,255,0.4)' : `1px solid ${item.badgeColor}44`,
                      padding: '2px 6px',
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
        ))}
      </div>

      {/* Cloud Node Footer */}
      <div style={{
        background: '#131B2E',
        borderRadius: '16px',
        padding: '12px 14px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        marginTop: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
          <Sparkles size={13} color="#818CF8" />
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#E2E8F0' }}>Apointo SuperAdmin v3.0</span>
        </div>
        <p style={{ fontSize: '0.62rem', color: '#64748B', lineHeight: 1.3 }}>
          Cluster: in-blr-prod-01 (99.99%)<br />
          SOC2 & ISO 27001 Certified
        </p>
      </div>
    </aside>
  );
}
