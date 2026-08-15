import React, { useState } from 'react';
import { ArrowLeft, MapPin, Plus, Trash2, Edit3, Home, Briefcase, MoreHorizontal, Check } from 'lucide-react';

const ICON_MAP = { Home: <Home size={18} />, Work: <Briefcase size={18} />, Other: <MoreHorizontal size={18} /> };
const COLOR_MAP = { Home: { bg: '#EEF2FF', color: '#4F46E5' }, Work: { bg: '#ECFDF5', color: '#10B981' }, Other: { bg: '#FEF3C7', color: '#D97706' } };

export default function AddressManager({ addresses, onBack }) {
  const [addressList, setAddressList] = useState(addresses || [
    { id: 'addr_1', label: 'Home', address: 'Flat 402, Sunshine Heights, 12th Main Rd, Indiranagar, Bengaluru — 560038', isDefault: true },
    { id: 'addr_2', label: 'Work', address: 'Tech Park Block B, 4th Floor, Outer Ring Rd, Marathahalli, Bengaluru — 560037', isDefault: false },
    { id: 'addr_3', label: 'Other', address: 'Silver Oak Township, Phase 2, Whitefield, Bengaluru — 560066', isDefault: false }
  ]);
  const [deleted, setDeleted] = useState(null);

  const setDefault = (id) => setAddressList(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  const deleteAddr = (id) => {
    setDeleted(id);
    setTimeout(() => {
      setAddressList(prev => prev.filter(a => a.id !== id));
      setDeleted(null);
    }, 350);
  };

  return (
    <div style={{ background: '#F0F4FF', minHeight: '100%', paddingBottom: '100px' }} className="animate-fade-in">

      {/* Header */}
      <div style={{
        background: 'linear-gradient(145deg, #0F172A 0%, #1E1B4B 60%, #3730A3 100%)',
        padding: '24px 20px 28px',
        borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(99,102,241,0.15)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', position: 'relative' }}>
          <button onClick={onBack} style={{
            width: '40px', height: '40px', borderRadius: '14px',
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF'
          }}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Profile Settings</div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>📍 Saved Addresses</h1>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ marginTop: '16px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', borderRadius: '14px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.15)', position: 'relative' }}>
          <span style={{ fontSize: '0.8rem', color: '#C7D2FE', fontWeight: 700 }}>{addressList.length} saved location{addressList.length !== 1 ? 's' : ''}</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {addressList.map((_, i) => (
              <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? '#10B981' : 'rgba(255,255,255,0.3)' }} />
            ))}
          </div>
        </div>
      </div>

      {/* Address List */}
      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {addressList.map((addr) => {
          const cfg = COLOR_MAP[addr.label] || COLOR_MAP.Other;
          const icon = ICON_MAP[addr.label] || ICON_MAP.Other;
          return (
            <div
              key={addr.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '22px',
                padding: '16px',
                border: addr.isDefault ? `2px solid ${cfg.color}` : '1px solid #E2E8F0',
                boxShadow: addr.isDefault ? `0 4px 20px ${cfg.color}20` : '0 2px 8px rgba(0,0,0,0.04)',
                opacity: deleted === addr.id ? 0.3 : 1,
                transition: 'all 0.35s ease',
                position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Default ribbon */}
              {addr.isDefault && (
                <div style={{ position: 'absolute', top: 0, right: 0, background: `linear-gradient(135deg, ${cfg.color}, ${cfg.color}CC)`, color: '#FFFFFF', fontSize: '0.6rem', fontWeight: 900, padding: '4px 12px', borderBottomLeftRadius: '12px', letterSpacing: '0.04em' }}>
                  DEFAULT
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                {/* Icon badge */}
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: cfg.bg, border: `1.5px solid ${cfg.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cfg.color, flexShrink: 0 }}>
                  {icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0F172A' }}>{addr.label}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5 }}>{addr.address}</p>

                  {/* Action row */}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    {!addr.isDefault && (
                      <button
                        onClick={() => setDefault(addr.id)}
                        style={{
                          padding: '6px 12px', borderRadius: '8px',
                          background: cfg.bg, color: cfg.color,
                          fontSize: '0.72rem', fontWeight: 800,
                          display: 'flex', alignItems: 'center', gap: '4px',
                          border: `1px solid ${cfg.color}30`
                        }}
                      >
                        <Check size={12} /> Set Default
                      </button>
                    )}
                    <button style={{
                      padding: '6px 12px', borderRadius: '8px',
                      background: '#F1F5F9', color: '#475569',
                      fontSize: '0.72rem', fontWeight: 800,
                      display: 'flex', alignItems: 'center', gap: '4px'
                    }}>
                      <Edit3 size={12} /> Edit
                    </button>
                    {!addr.isDefault && (
                      <button
                        onClick={() => deleteAddr(addr.id)}
                        style={{
                          padding: '6px 12px', borderRadius: '8px',
                          background: '#FFF1F2', color: '#F43F5E',
                          fontSize: '0.72rem', fontWeight: 800,
                          display: 'flex', alignItems: 'center', gap: '4px'
                        }}
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Add New Address */}
        <button style={{
          width: '100%', padding: '16px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)',
          color: '#4F46E5', fontSize: '0.9rem', fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          border: '2px dashed #818CF8',
          boxShadow: '0 4px 16px rgba(99,102,241,0.1)'
        }}>
          <Plus size={20} />
          <span>Add New Address</span>
        </button>

        {/* Info note */}
        <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '12px 16px', border: '1px solid #E2E8F0', fontSize: '0.74rem', color: '#64748B', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <MapPin size={14} color="#94A3B8" style={{ marginTop: '1px', flexShrink: 0 }} />
          <span>Your saved addresses are used to find nearby salons, clinics, and wellness centers automatically.</span>
        </div>
      </div>
    </div>
  );
}
