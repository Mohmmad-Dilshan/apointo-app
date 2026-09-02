import React from 'react';
import { ShieldCheck, Bell, Sparkles, Activity, Search, LogOut } from 'lucide-react';

export default function AdminHeader({ activeTab, onSearch }) {
  return (
    <header style={{
      background: '#0B1120',
      color: '#FFFFFF',
      padding: '14px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      {/* Brand & Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(99, 102, 241, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <ShieldCheck size={22} color="#FFFFFF" />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              Apointo Command Center
            </h2>
            <span style={{ fontSize: '0.62rem', background: 'rgba(99, 102, 241, 0.25)', color: '#A5B4FC', padding: '2px 6px', borderRadius: '6px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              SUPER ADMIN
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '1px' }}>
            Enterprise Multi-Tenant SaaS & KYC Verification Portal
          </p>
        </div>
      </div>

      {/* System Status Indicators & Admin Session */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Live Pulse Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(52, 211, 153, 0.3)',
          padding: '6px 14px',
          borderRadius: '999px',
          fontSize: '0.76rem',
          color: '#34D399',
          fontWeight: 800
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
          <span>All 14 Clusters Operational</span>
        </div>

        {/* SuperAdmin ID */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '16px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
            border: '2px solid #818CF8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.82rem',
            fontWeight: 800,
            color: '#FFFFFF'
          }}>
            SA
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFFFFF' }}>SuperAdmin</div>
            <div style={{ fontSize: '0.65rem', color: '#A5B4FC' }}>admin@apointo.in</div>
          </div>
        </div>
      </div>
    </header>
  );
}
