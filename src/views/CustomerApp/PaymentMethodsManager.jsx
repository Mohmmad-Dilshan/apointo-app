import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Plus, Trash2, Shield, Check, ChevronRight, Zap } from 'lucide-react';

const METHODS = [
  {
    id: 'pm_1', type: 'upi', label: 'Google Pay', subLabel: 'dilshan@okicici',
    emoji: '🟢', color: '#10B981', bg: '#ECFDF5', border: '#A7F3D0',
    isDefault: true, verified: true
  },
  {
    id: 'pm_2', type: 'card', label: 'HDFC Regalia Credit Card', subLabel: '•••• •••• •••• 4291',
    emoji: null, color: '#6366F1', bg: '#EEF2FF', border: '#C7D2FE',
    expiry: '08/28', isDefault: false, network: 'VISA', verified: true
  },
  {
    id: 'pm_3', type: 'upi', label: 'PhonePe UPI', subLabel: 'dilshan@ybl',
    emoji: '🟣', color: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE',
    isDefault: false, verified: false
  }
];

const UPI_OPTIONS = [
  { label: 'Google Pay', emoji: '🟢' },
  { label: 'PhonePe', emoji: '🟣' },
  { label: 'Paytm', emoji: '🔵' },
  { label: 'BHIM UPI', emoji: '🟠' }
];

export default function PaymentMethodsManager({ onBack }) {
  const [methods, setMethods] = useState(METHODS);
  const [showAdd, setShowAdd] = useState(false);

  const setDefault = (id) => setMethods(prev => prev.map(m => ({ ...m, isDefault: m.id === id })));
  const deleteMethod = (id) => setMethods(prev => prev.filter(m => m.id !== id));

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
            <div style={{ fontSize: '0.7rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Wallet & Payments</div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>💳 Payment Methods</h1>
          </div>
        </div>

        {/* Security badge */}
        <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.15)', borderRadius: '12px', padding: '10px 14px', border: '1px solid rgba(16,185,129,0.3)', position: 'relative' }}>
          <Shield size={16} color="#10B981" />
          <span style={{ fontSize: '0.76rem', color: '#6EE7B7', fontWeight: 700 }}>256-bit SSL Encrypted • RBI Compliant • PCI-DSS Secured</span>
        </div>
      </div>

      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* 1-tap checkout badge */}
        <div style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', borderRadius: '16px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #FCD34D' }}>
          <Zap size={18} color="#D97706" fill="#D97706" />
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 900, color: '#92400E' }}>1-Tap Checkout Enabled</div>
            <div style={{ fontSize: '0.7rem', color: '#A16207' }}>Your default method is used for instant booking payments</div>
          </div>
        </div>

        {/* Payment Method Cards */}
        {methods.map((m) => (
          <div key={m.id} style={{
            background: '#FFFFFF',
            borderRadius: '22px',
            padding: '16px',
            border: m.isDefault ? `2px solid ${m.color}` : '1px solid #E2E8F0',
            boxShadow: m.isDefault ? `0 6px 24px ${m.color}20` : '0 2px 8px rgba(0,0,0,0.04)',
            position: 'relative', overflow: 'hidden'
          }}>
            {m.isDefault && (
              <div style={{ position: 'absolute', top: 0, right: 0, background: `linear-gradient(135deg, ${m.color}, ${m.color}CC)`, color: '#FFFFFF', fontSize: '0.6rem', fontWeight: 900, padding: '4px 12px', borderBottomLeftRadius: '12px', letterSpacing: '0.04em' }}>
                DEFAULT
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {/* Icon */}
              <div style={{
                width: '50px', height: '50px', borderRadius: '16px',
                background: m.bg, border: `1.5px solid ${m.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: m.emoji ? '1.4rem' : '1rem', color: m.color, flexShrink: 0
              }}>
                {m.emoji || <CreditCard size={22} />}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0F172A' }}>{m.label}</span>
                  {m.verified && (
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={10} color="#FFFFFF" strokeWidth={3} />
                    </div>
                  )}
                  {m.network && (
                    <span style={{ fontSize: '0.6rem', fontWeight: 900, color: '#4F46E5', background: '#EEF2FF', padding: '1px 6px', borderRadius: '4px' }}>{m.network}</span>
                  )}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px', fontFamily: m.type === 'card' ? 'monospace' : 'inherit' }}>{m.subLabel}</div>
                {m.expiry && <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '1px' }}>Expires {m.expiry}</div>}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
              {!m.isDefault && (
                <button onClick={() => setDefault(m.id)} style={{
                  padding: '6px 14px', borderRadius: '8px',
                  background: m.bg, color: m.color,
                  fontSize: '0.72rem', fontWeight: 800,
                  display: 'flex', alignItems: 'center', gap: '4px',
                  border: `1px solid ${m.border}`
                }}>
                  <Check size={11} /> Set Default
                </button>
              )}
              <button onClick={() => deleteMethod(m.id)} style={{
                padding: '6px 12px', borderRadius: '8px',
                background: '#FFF1F2', color: '#F43F5E',
                fontSize: '0.72rem', fontWeight: 800,
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                <Trash2 size={11} /> Remove
              </button>
            </div>
          </div>
        ))}

        {/* Add Method Section */}
        <div style={{ background: '#FFFFFF', borderRadius: '22px', padding: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Add New Payment Method</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            {UPI_OPTIONS.map((u, i) => (
              <button key={i} style={{
                padding: '10px', borderRadius: '12px',
                background: '#F8FAFC', border: '1px solid #E2E8F0',
                display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '0.8rem', fontWeight: 700, color: '#0F172A'
              }}>
                <span>{u.emoji}</span> {u.label}
              </button>
            ))}
          </div>
          <button style={{
            width: '100%', padding: '13px',
            borderRadius: '14px', border: '2px dashed #818CF8',
            background: '#EEF2FF', color: '#4F46E5',
            fontSize: '0.85rem', fontWeight: 800,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
          }}>
            <CreditCard size={16} /> Add Credit / Debit Card
          </button>
        </div>
      </div>
    </div>
  );
}
