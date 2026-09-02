import React, { useState } from 'react';
import { ArrowLeft, Plus, Check, ChevronRight, Sparkles } from 'lucide-react';

export default function AddonsSelection({ service, onBack, onConfirmAddons }) {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const addonsList = service?.addons || [
    { id: 'add_1', name: 'Hair Wash & Deep Conditioning', price: 100 },
    { id: 'add_2', name: 'Beard Trim & Herbal Oil Styling', price: 150 },
    { id: 'add_3', name: 'Express Charcoal Face Cleanse', price: 200 },
    { id: 'add_4', name: 'Relaxing Scalp & Shoulder Massage', price: 250 }
  ];

  const toggleAddon = (addon) => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Top Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Popular Add-ons</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Enhance your appointment experience</p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {addonsList.map(addon => {
          const isSelected = selectedAddons.some(a => a.id === addon.id);
          return (
            <div
              key={addon.id}
              onClick={() => toggleAddon(addon)}
              style={{
                background: isSelected ? '#EEF2FF' : '#FFFFFF',
                borderRadius: '20px',
                padding: '16px',
                border: isSelected ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}
            >
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{addon.name}</h4>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#4F46E5', marginTop: '4px' }}>+₹{addon.price}</div>
              </div>

              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isSelected ? '#4F46E5' : '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isSelected ? '#FFFFFF' : '#64748B'
              }}>
                {isSelected ? <Check size={18} /> : <Plus size={18} />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Bottom Summary & CTA */}
      <div style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '14px 20px',
        borderTop: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
        boxShadow: '0 -4px 16px rgba(0,0,0,0.05)'
      }}>
        <div>
          <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Add-ons Total</span>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0F172A' }}>+₹{addonsTotal}</div>
        </div>

        <button
          onClick={() => onConfirmAddons(selectedAddons)}
          style={{
            padding: '14px 26px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.92rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          <span>View Checkout</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
