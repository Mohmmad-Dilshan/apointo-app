import React, { useState } from 'react';
import { DollarSign, CreditCard, ShieldCheck, CheckCircle2, Send } from 'lucide-react';

export default function AdminPayments() {
  const [payouts, setPayouts] = useState([
    { id: 'po_101', merchant: 'Urban Cut Studio', city: 'Bengaluru', amount: '₹1,42,800', period: '01 - 07 Aug 2026', status: 'Pending Disbursal' },
    { id: 'po_102', merchant: 'Glow Beauty Lounge', city: 'Bengaluru', amount: '₹2,15,400', period: '01 - 07 Aug 2026', status: 'Pending Disbursal' },
    { id: 'po_103', merchant: 'SmileCare Dental', city: 'Bengaluru', amount: '₹53,800', period: '01 - 07 Aug 2026', status: 'Settled ✓' }
  ]);

  const [toastMsg, setToastMsg] = useState(null);

  const handleReleasePayout = (id, merchant) => {
    setPayouts(payouts.map(p => p.id === id ? { ...p, status: 'Settled ✓' } : p));
    setToastMsg(`Settlement of funds released to ${merchant}!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Platform Financials & Commission Revenue</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Gross merchandise value & business settlement status</p>
        </div>
        {toastMsg && (
          <span className="badge badge-success animate-pop">
            <CheckCircle2 size={14} /> {toastMsg}
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>Total Platform GMV</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>₹8,42,50,000</div>
          <p style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '4px' }}>+32% YoY growth</p>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>Platform Revenue (12%)</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4F46E5', marginTop: '6px' }}>₹1,01,10,000</div>
          <p style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, marginTop: '4px' }}>Net commission earnings</p>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>Pending Provider Disbursals</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F59E0B', marginTop: '6px' }}>₹4,12,000</div>
          <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>Auto-settlement every Friday</p>
        </div>
      </div>

      {/* Disbursal Queue Table */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #E2E8F0' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Merchant Settlement Disbursal Queue</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {payouts.map((item) => (
            <div
              key={item.id}
              style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '16px 20px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{item.merchant} ({item.city})</h4>
                <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>Settlement Period: {item.period}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>{item.amount}</span>
                <span className={`badge ${item.status.includes('Settled') ? 'badge-success' : 'badge-warning'}`}>
                  {item.status}
                </span>

                {!item.status.includes('Settled') && (
                  <button
                    onClick={() => handleReleasePayout(item.id, item.merchant)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Send size={14} /> Release Payout
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

