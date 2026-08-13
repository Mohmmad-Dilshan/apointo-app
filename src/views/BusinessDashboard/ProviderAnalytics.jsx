import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, Flame } from 'lucide-react';

export default function ProviderAnalytics() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Business Analytics & Insights</h2>
        <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Peak hours, customer acquisition & revenue trends</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>Peak Hours</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>04 PM - 07 PM</div>
          <p style={{ fontSize: '0.75rem', color: '#4F46E5', fontWeight: 700, marginTop: '2px' }}>78% slot occupancy</p>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>Repeat Customer Rate</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10B981', marginTop: '4px' }}>92.4%</div>
          <p style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, marginTop: '2px' }}>High customer loyalty</p>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700 }}>Cancellation Rate</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>1.2%</div>
          <p style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>Well below 5% benchmark</p>
        </div>
      </div>
    </div>
  );
}
