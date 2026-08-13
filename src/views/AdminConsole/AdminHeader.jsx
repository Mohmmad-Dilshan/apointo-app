import React from 'react';
import { ShieldCheck, Bell, Sparkles } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header style={{
      background: '#0F172A',
      color: '#FFFFFF',
      padding: '14px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ShieldCheck size={20} color="#FFFFFF" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Apointo Command Center</h2>
          <p style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Platform Administration & Verification Portal</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <span style={{ fontSize: '0.78rem', background: 'rgba(16,185,129,0.15)', color: '#34D399', padding: '4px 12px', borderRadius: '999px', fontWeight: 700, border: '1px solid rgba(52,211,153,0.3)' }}>
          ● All Systems Operational
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '14px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Super Admin</div>
        </div>
      </div>
    </header>
  );
}
