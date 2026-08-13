import React from 'react';
import { CreditCard, DollarSign, Download, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

export default function ProviderPayments() {
  const transactions = [
    { id: "TXN-901", date: "Today, 02:30 PM", customer: "Dilshan P.", service: "Classic Haircut", gross: "₹329", commission: "₹39", netPayout: "₹290", status: "Settled" },
    { id: "TXN-902", date: "Today, 10:30 AM", customer: "Arjun K.", service: "Beard Combo", gross: "₹499", commission: "₹59", netPayout: "₹440", status: "Settled" },
    { id: "TXN-903", date: "Yesterday", customer: "Siddharth N.", service: "Royal Package", gross: "₹899", commission: "₹107", netPayout: "₹792", status: "Payout Queued" }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }} className="animate-fade-in">
      {/* Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B' }}>Total Monthly Revenue</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>₹1,42,850</div>
          <p style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, marginTop: '4px' }}>+24% vs last month</p>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B' }}>Pending Bank Payout</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4F46E5', marginTop: '6px' }}>₹28,400</div>
          <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>Next transfer: Friday, 16 Aug</p>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B' }}>Apointo Platform Fee</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>12%</div>
          <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>Standard tier commission</p>
        </div>
      </div>

      {/* Transaction History */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Recent Settlement Transactions</h3>
          <button style={{ padding: '8px 14px', borderRadius: '10px', background: '#F1F5F9', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Download size={14} /> Download Statement
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '14px 20px' }}>Txn ID</th>
              <th style={{ padding: '14px 20px' }}>Date</th>
              <th style={{ padding: '14px 20px' }}>Customer & Service</th>
              <th style={{ padding: '14px 20px' }}>Gross Revenue</th>
              <th style={{ padding: '14px 20px' }}>Commission</th>
              <th style={{ padding: '14px 20px' }}>Net Payout</th>
              <th style={{ padding: '14px 20px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#4F46E5' }}>#{t.id}</td>
                <td style={{ padding: '16px 20px', color: '#64748B' }}>{t.date}</td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontWeight: 800, color: '#0F172A' }}>{t.customer}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{t.service}</div>
                </td>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#0F172A' }}>{t.gross}</td>
                <td style={{ padding: '16px 20px', color: '#F43F5E', fontWeight: 600 }}>-{t.commission}</td>
                <td style={{ padding: '16px 20px', fontWeight: 800, color: '#10B981' }}>{t.netPayout}</td>
                <td style={{ padding: '16px 20px' }}>
                  <span className={`badge ${t.status === 'Settled' ? 'badge-success' : 'badge-warning'}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
