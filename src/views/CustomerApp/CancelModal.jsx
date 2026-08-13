import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

export default function CancelModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        background: '#FFFFFF',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
        padding: '24px'
      }} className="animate-slide-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Cancel Appointment?</h3>
          <button onClick={onClose} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <X size={18} color="#64748B" />
          </button>
        </div>

        <div style={{ background: '#FFF1F2', padding: '14px 16px', borderRadius: '16px', border: '1px solid #FECDD3', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <AlertTriangle size={24} color="#F43F5E" />
          <p style={{ fontSize: '0.82rem', color: '#9F1239', lineHeight: 1.4, fontWeight: 600 }}>
            According to business policy, cancelling within 2 hours of appointment slot incurs 0% penalty and 100% full refund to original payment source.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '999px',
              background: '#4F46E5',
              color: '#FFFFFF',
              fontSize: '0.9rem',
              fontWeight: 700
            }}
          >
            Keep Appointment
          </button>

          <button
            onClick={onConfirm}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '999px',
              background: 'transparent',
              color: '#F43F5E',
              fontSize: '0.9rem',
              fontWeight: 700
            }}
          >
            Confirm Cancellation
          </button>
        </div>
      </div>
    </div>
  );
}
