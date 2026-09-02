import React, { useState } from 'react';
import { DollarSign, CreditCard, ShieldCheck, CheckCircle2, Send, ArrowUpRight, TrendingUp, RefreshCw, X } from 'lucide-react';

export default function AdminPayments() {
  const [payouts, setPayouts] = useState([
    { id: 'po_101', merchant: 'Urban Cut Studio', bank: 'HDFC Bank ••4819', city: 'Gurugram', amount: '₹1,42,800', period: '01 - 07 Aug 2026', status: 'Pending Disbursal', tax: '₹25,704' },
    { id: 'po_102', merchant: 'Glow Beauty Lounge', bank: 'ICICI Bank ••9021', city: 'Bengaluru', amount: '₹2,15,400', period: '01 - 07 Aug 2026', status: 'Pending Disbursal', tax: '₹38,772' },
    { id: 'po_103', merchant: 'SmileCare Dental', bank: 'SBI ••3310', city: 'Mumbai', amount: '₹53,800', period: '01 - 07 Aug 2026', status: 'Settled ✓', tax: '₹9,684' },
    { id: 'po_104', merchant: 'FitZone Wellness', bank: 'Axis Bank ••7712', city: 'New Delhi', amount: '₹88,200', period: '01 - 07 Aug 2026', status: 'Settled ✓', tax: '₹15,876' },
  ]);

  const [toastMsg, setToastMsg] = useState(null);
  const [selectedPayout, setSelectedPayout] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmDisbursal = () => {
    if (!selectedPayout) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPayouts(payouts.map(p => p.id === selectedPayout.id ? { ...p, status: 'Settled ✓' } : p));
      setToastMsg(`₹ Settlement of ${selectedPayout.amount} successfully wired to ${selectedPayout.merchant}!`);
      setSelectedPayout(null);
      setTimeout(() => setToastMsg(null), 3500);
    }, 800);
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #065F46 0%, #047857 50%, #059669 100%)',
        borderRadius: '24px',
        padding: '28px 32px',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
      }}>
        <div style={{ position: 'absolute', top: -30, right: -30, width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)', filter: 'blur(30px)' }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '4px' }}>
            Unified Financials & Merchant Settlement Engine
          </p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
            ₹1,01,10,000 <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#A7F3D0' }}>Platform Revenue (12%)</span>
          </h1>
          <div style={{ display: 'flex', gap: '16px', marginTop: '10px', fontSize: '0.85rem' }}>
            <span style={{ color: '#A7F3D0', fontWeight: 700 }}>Total GMV: ₹8.42 Cr</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>• 100% RBI Payout Compliance</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>• Instant IMPS / UPI Disbursal</span>
          </div>
        </div>
      </div>

      {/* 3 Metric Summary Tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Total Platform Gross (GMV)</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginTop: '4px' }}>₹8,42,50,000</div>
          <p style={{ fontSize: '0.72rem', color: '#34D399', fontWeight: 700, marginTop: '4px' }}>+32% YoY transaction growth</p>
        </div>

        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(245, 158, 11, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Pending Provider Disbursals</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FBBF24', marginTop: '4px' }}>₹3,58,200</div>
          <p style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '4px' }}>Batch release queued for Friday 4PM</p>
        </div>

        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(52, 211, 153, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Settled to Merchants</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34D399', marginTop: '4px' }}>₹74,20,000</div>
          <p style={{ fontSize: '0.72rem', color: '#34D399', marginTop: '4px' }}>100% on-time settlement rate</p>
        </div>
      </div>

      {/* Toast message */}
      {toastMsg && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '14px', padding: '12px 18px', color: '#34D399', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Disbursal Queue Table */}
      <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>Merchant Settlement Disbursal Queue</h3>
            <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Automated IMPS / NEFT payment gateway to verified business accounts</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {payouts.map((item) => {
            const isSettled = item.status.includes('Settled');

            return (
              <div
                key={item.id}
                style={{
                  background: '#0F172A',
                  borderRadius: '18px',
                  padding: '18px 22px',
                  border: isSettled ? '1px solid rgba(52, 211, 153, 0.2)' : '1px solid rgba(245, 158, 11, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '14px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>{item.merchant}</h4>
                    <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>({item.city})</span>
                  </div>
                  <p style={{ fontSize: '0.76rem', color: '#94A3B8', marginTop: '3px' }}>
                    Bank: {item.bank} • Cycle: {item.period} • GST Deducted: {item.tax}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>Net Payout</span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>{item.amount}</span>
                  </div>

                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    color: isSettled ? '#34D399' : '#FBBF24',
                    background: isSettled ? 'rgba(52, 211, 153, 0.15)' : 'rgba(251, 191, 36, 0.15)',
                    border: isSettled ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(251, 191, 36, 0.3)'
                  }}>
                    {item.status}
                  </span>

                  {!isSettled && (
                    <button
                      onClick={() => setSelectedPayout(item)}
                      style={{
                        padding: '10px 18px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                        color: '#FFFFFF',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
                      }}
                    >
                      <Send size={14} /> Release Payout
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disbursal Confirmation Modal */}
      {selectedPayout && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#1E293B',
            borderRadius: '24px',
            padding: '26px',
            maxWidth: '460px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF' }}>Confirm Merchant Payout</h3>
              <button onClick={() => setSelectedPayout(null)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '18px', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Recipient Merchant</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>{selectedPayout.merchant}</div>
              <p style={{ fontSize: '0.78rem', color: '#CBD5E1', marginTop: '4px' }}>Bank Account: {selectedPayout.bank}</p>
              
              <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Transfer Amount:</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#34D399' }}>{selectedPayout.amount}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setSelectedPayout(null)}
                style={{ flex: 1, padding: '12px', borderRadius: '12px', background: '#0F172A', color: '#94A3B8', fontWeight: 700, border: 'none', cursor: 'pointer' }}
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDisbursal}
                disabled={isProcessing}
                style={{
                  flex: 1.5,
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 16px rgba(16,185,129,0.4)'
                }}
              >
                {isProcessing ? <RefreshCw size={14} className="animate-spin" /> : <Send size={14} />}
                <span>{isProcessing ? 'Transmitting...' : 'Authorize Bank Wire'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
