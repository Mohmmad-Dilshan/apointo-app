import React, { useState } from 'react';
import { ArrowLeft, MapPin, Plus, Check } from 'lucide-react';

export default function AddressManager({ addresses, onBack }) {
  const [addressList, setAddressList] = useState(addresses || [
    { id: "addr_1", label: "Home", address: "Flat 402, Sunshine Heights, 12th Main Rd, Indiranagar, Bengaluru", isDefault: true },
    { id: "addr_2", label: "Work", address: "Tech Park Block B, 4th Floor, Outer Ring Rd, Marathahalli, Bengaluru", isDefault: false }
  ]);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Saved Addresses</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Manage delivery & service locations</p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {addressList.map(addr => (
          <div
            key={addr.id}
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '16px',
              border: addr.isDefault ? '2px solid #4F46E5' : '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', gap: '12px' }}>
              <MapPin size={20} color="#4F46E5" style={{ marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{addr.label}</span>
                  {addr.isDefault && <span style={{ fontSize: '0.7rem', background: '#EEF2FF', color: '#4F46E5', padding: '2px 6px', borderRadius: '4px' }}>Default</span>}
                </div>
                <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '4px', lineHeight: 1.4 }}>{addr.address}</p>
              </div>
            </div>
          </div>
        ))}

        <button style={{
          width: '100%',
          padding: '14px',
          borderRadius: '16px',
          background: '#EEF2FF',
          color: '#4F46E5',
          fontSize: '0.88rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '10px'
        }}>
          <Plus size={18} /> Add New Address
        </button>
      </div>
    </div>
  );
}
