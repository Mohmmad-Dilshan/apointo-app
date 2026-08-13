import React from 'react';
import { Plus, UserCheck, Star, Calendar } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

export default function ProviderStaff() {
  const staff = BUSINESSES[0].staff;

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Staff Management</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Stylists, specialists & schedules</p>
        </div>

        <button style={{
          padding: '10px 18px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          color: '#FFFFFF',
          fontSize: '0.85rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Plus size={16} /> Add Staff Member
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {staff.map(stf => (
          <div key={stf.id} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <img src={stf.photo} alt={stf.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{stf.name}</h3>
            <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '2px 0 10px' }}>{stf.role} • {stf.experience}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: '#FEF3C7', padding: '4px 10px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800, color: '#D97706', marginBottom: '14px' }}>
              ★ {stf.rating} Rating
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', paddingTop: '12px', borderTop: '1px solid #F1F5F9', textAlign: 'left', fontSize: '0.78rem' }}>
              <div>
                <span style={{ color: '#94A3B8' }}>Working Hours</span>
                <div style={{ fontWeight: 700, color: '#0F172A' }}>09 AM - 07 PM</div>
              </div>

              <div>
                <span style={{ color: '#94A3B8' }}>Commission</span>
                <div style={{ fontWeight: 700, color: '#10B981' }}>15% Share</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
