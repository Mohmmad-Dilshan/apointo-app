import React from 'react';
import { DollarSign, CreditCard, ShieldCheck } from 'lucide-react';

export default function AdminPayments() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Platform Financials & Commission Revenue</h2>
        <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Gross merchandise value & business settlement status</p>
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
    </div>
  );
}
