import React from 'react';
import { Save, Building, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

export default function ProviderSettings() {
  const biz = BUSINESSES[0];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Business Profile Settings</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Operating hours, location & policies</p>
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
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>Business Name</label>
          <input type="text" defaultValue={biz.name} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.9rem', fontWeight: 700 }} />
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>Business Address</label>
          <input type="text" defaultValue={biz.address} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.9rem', fontWeight: 700 }} />
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>Cancellation Policy Disclaimer</label>
          <textarea rows={3} defaultValue={biz.cancellationPolicy} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.9rem', resize: 'none' }} />
        </div>
      </div>
    </div>
  );
}
