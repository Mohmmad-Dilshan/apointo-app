import React from 'react';
import { Plus, Tag, Flame, Percent } from 'lucide-react';

export default function ProviderOffers() {
  const activeOffers = [
    { code: "URBAN100", title: "Flat ₹100 OFF Haircuts", type: "Flat Discount", uses: 84, status: "Active" },
    { code: "BEAUTY20", title: "20% OFF Facial Combos", type: "Percentage", uses: 42, status: "Active" }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Marketing & Offers</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Create promo codes & boost customer retention</p>
        </div>

        <button style={{
          padding: '10px 18px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
          color: '#FFFFFF',
          fontSize: '0.85rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Plus size={16} /> Create Campaign
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {activeOffers.map((o, idx) => (
          <div key={idx} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.78rem', background: '#EEF2FF', color: '#4F46E5', padding: '2px 8px', borderRadius: '4px', fontWeight: 800, width: 'fit-content', marginBottom: '6px' }}>
                CODE: {o.code}
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{o.title}</h4>
              <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>{o.uses} customers redeemed this coupon</p>
            </div>

            <span className="badge badge-success">Active</span>
          </div>
        ))}
      </div>
    </div>
  );
}
