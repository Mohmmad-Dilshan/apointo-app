import React from 'react';
import { Bell, Sparkles, Plus, Search } from 'lucide-react';

export default function ProviderHeader({ businessName = "Urban Cut Studio", onAddAppointment }) {
  return (
    <header style={{
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      padding: '14px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          fontSize: '1.15rem',
          fontWeight: 800,
          color: '#0F172A',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>{businessName}</span>
          <span style={{ fontSize: '0.72rem', background: '#ECFDF5', color: '#059669', padding: '3px 8px', borderRadius: '999px', fontWeight: 700 }}>
            ● Open for Bookings
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <button
          onClick={onAddAppointment}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 14px rgba(79,70,229,0.3)'
          }}
        >
          <Plus size={16} />
          <span>New Appointment</span>
        </button>

        <button style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: '#F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <Bell size={18} color="#334155" />
          <span style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#F43F5E' }} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderLeft: '1px solid #E2E8F0', paddingLeft: '14px' }}>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
            alt="Owner"
            style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A' }}>Rahul Sharma</div>
            <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Business Owner</div>
          </div>
        </div>
      </div>
    </header>
  );
}
