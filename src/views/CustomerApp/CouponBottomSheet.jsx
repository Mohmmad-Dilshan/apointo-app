import React, { useState } from 'react';
import { X, Tag, Check } from 'lucide-react';
import { COUPONS } from '../../data/sampleData';

export default function CouponBottomSheet({ isOpen, onClose, onApplyCoupon, appliedCoupon }) {
  const [promoInput, setPromoInput] = useState('');

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,0.65)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        maxHeight: '80vh',
        background: '#FFFFFF',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
        padding: '24px',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
        overflowY: 'auto'
      }} className="animate-slide-up no-scrollbar">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Apply Promo Coupon</h3>
          <button onClick={onClose} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <X size={18} color="#64748B" />
          </button>
        </div>

        {/* Custom Input */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#F1F5F9',
            padding: '12px 16px',
            borderRadius: '14px'
          }}>
            <Tag size={18} color="#4F46E5" />
            <input
              type="text"
              placeholder="Enter code e.g. APOINTO100"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
              style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}
            />
          </div>

          <button
            onClick={() => {
              const matched = COUPONS.find(c => c.code === promoInput) || { code: promoInput, amount: 100, title: `Code ${promoInput}` };
              onApplyCoupon(matched);
              onClose();
            }}
            style={{
              padding: '12px 20px',
              borderRadius: '14px',
              background: '#4F46E5',
              color: '#FFFFFF',
              fontSize: '0.88rem',
              fontWeight: 700
            }}
          >
            Apply
          </button>
        </div>

        {/* Coupons List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {COUPONS.map(c => {
            const isApplied = appliedCoupon?.code === c.code;
            return (
              <div
                key={c.code}
                style={{
                  background: isApplied ? '#ECFDF5' : '#F8FAFC',
                  borderRadius: '18px',
                  padding: '16px',
                  border: isApplied ? '2px solid #10B981' : '1px dashed #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Tag size={16} color="#10B981" />
                    <span>{c.code}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>{c.description}</p>
                </div>

                <button
                  onClick={() => { onApplyCoupon(c); onClose(); }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    background: isApplied ? '#10B981' : '#FFFFFF',
                    color: isApplied ? '#FFFFFF' : '#4F46E5',
                    border: '1px solid #10B981',
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}
                >
                  {isApplied ? 'Applied ✓' : 'Apply'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
