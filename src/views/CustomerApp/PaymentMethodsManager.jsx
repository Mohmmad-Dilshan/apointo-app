import React from 'react';
import { ArrowLeft, CreditCard, Smartphone, Plus, Trash2 } from 'lucide-react';

export default function PaymentMethodsManager({ onBack }) {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Saved Payment Methods</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Fast 1-tap checkout accounts</p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* UPI Saved */}
        <div style={{ background: '#FFFFFF', borderRadius: '18px', padding: '16px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.4rem' }}>🟢</span>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>Google Pay UPI</div>
              <p style={{ fontSize: '0.75rem', color: '#64748B' }}>dilshan@okicici</p>
            </div>
          </div>
          <button style={{ color: '#F43F5E', opacity: 0.8 }}><Trash2 size={16} /></button>
        </div>

        {/* Card Saved */}
        <div style={{ background: '#FFFFFF', borderRadius: '18px', padding: '16px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CreditCard size={20} color="#4F46E5" />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>HDFC Regalia Credit Card</div>
              <p style={{ fontSize: '0.75rem', color: '#64748B' }}>•••• 4291 (Exp 08/28)</p>
            </div>
          </div>
          <button style={{ color: '#F43F5E', opacity: 0.8 }}><Trash2 size={16} /></button>
        </div>

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
          <Plus size={18} /> Add New Payment Method
        </button>
      </div>
    </div>
  );
}
