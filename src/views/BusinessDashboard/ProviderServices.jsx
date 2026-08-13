import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Scissors, Clock } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

export default function ProviderServices() {
  const [services, setServices] = useState(BUSINESSES[0].services);

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Services Catalog</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Add, edit or disable business offerings</p>
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
          <Plus size={16} /> Add New Service
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {services.map(srv => (
          <div key={srv.id} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', gap: '16px' }}>
            <img src={srv.image} alt={srv.name} style={{ width: '100px', height: '100px', borderRadius: '16px', objectFit: 'cover' }} />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{srv.name}</h4>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button style={{ padding: '4px', color: '#4F46E5' }}><Edit2 size={16} /></button>
                    <button style={{ padding: '4px', color: '#F43F5E' }}><Trash2 size={16} /></button>
                  </div>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '4px 0' }}>{srv.duration} • {srv.description.substring(0, 60)}...</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #F1F5F9' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>₹{srv.price}</div>
                <span className="badge badge-success">Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
