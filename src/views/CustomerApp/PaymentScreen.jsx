import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, CreditCard, Smartphone, Building, Banknote } from 'lucide-react';

export default function PaymentScreen({ bookingData, onBack, onPaymentSuccess }) {
  const [selectedMethod, setSelectedMethod] = useState('gpay'); // 'gpay' | 'phonepe' | 'card' | 'cash'
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 1200);
  };

  const amount = bookingData?.totalAmount || 329;

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Top Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Select Payment Method</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Amount to pay: <strong>₹{amount}</strong></p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Security Messaging */}
        <div style={{
          background: '#ECFDF5',
          borderRadius: '16px',
          padding: '12px 16px',
          border: '1px solid #A7F3D0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.82rem',
          color: '#065F46',
          fontWeight: 600
        }}>
          <ShieldCheck size={20} color="#10B981" />
          <span>256-Bit Bank Grade Secure Checkout</span>
        </div>

        {/* UPI Methods */}
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>
            Instant UPI Apps
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { id: 'gpay', title: 'Google Pay', icon: '🟢', desc: 'Fast 1-tap checkout' },
              { id: 'phonepe', title: 'PhonePe', icon: '🟣', desc: 'UPI ID: dilshan@ybl' },
              { id: 'paytm', title: 'Paytm UPI', icon: '🔵', desc: 'Direct bank transfer' }
            ].map(m => (
              <div
                key={m.id}
                onClick={() => setSelectedMethod(m.id)}
                style={{
                  background: selectedMethod === m.id ? '#EEF2FF' : '#FFFFFF',
                  borderRadius: '18px',
                  padding: '14px 16px',
                  border: selectedMethod === m.id ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.4rem' }}>{m.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{m.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748B' }}>{m.desc}</p>
                  </div>
                </div>
                {selectedMethod === m.id && <CheckCircle2 size={20} color="#4F46E5" />}
              </div>
            ))}
          </div>
        </div>

        {/* Cards & Other Methods */}
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>
            Cards & Cash Options
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              onClick={() => setSelectedMethod('card')}
              style={{
                background: selectedMethod === 'card' ? '#EEF2FF' : '#FFFFFF',
                borderRadius: '18px',
                padding: '14px 16px',
                border: selectedMethod === 'card' ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CreditCard size={20} color="#4F46E5" />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>HDFC Credit Card</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B' }}>Saved card ending in •••• 4291</p>
                </div>
              </div>
              {selectedMethod === 'card' && <CheckCircle2 size={20} color="#4F46E5" />}
            </div>

            <div
              onClick={() => setSelectedMethod('cash')}
              style={{
                background: selectedMethod === 'cash' ? '#EEF2FF' : '#FFFFFF',
                borderRadius: '18px',
                padding: '14px 16px',
                border: selectedMethod === 'cash' ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Banknote size={20} color="#10B981" />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>Pay at Salon / Business</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B' }}>Pay cash or card upon arrival</p>
                </div>
              </div>
              {selectedMethod === 'cash' && <CheckCircle2 size={20} color="#4F46E5" />}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Pay CTA */}
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
        zIndex: 100,
        boxShadow: '0 -4px 16px rgba(0,0,0,0.05)'
      }}>
        <button
          onClick={handlePay}
          disabled={isProcessing}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            color: '#FFFFFF',
            fontSize: '0.96rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(16,185,129,0.35)'
          }}
        >
          {isProcessing ? (
            <span>Processing Payment...</span>
          ) : (
            <>
              <Lock size={18} />
              <span>Pay ₹{amount} & Complete Booking</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
