import React from 'react';
import { Award, Gift, Zap, Users, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

export default function RewardsScreen({ user, onNavigateScreen }) {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)',
        padding: '24px 20px 32px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '28px',
        borderBottomRightRadius: '28px'
      }}>
        <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 800, color: '#C7D2FE', letterSpacing: '0.05em', marginBottom: '4px' }}>
          Apointo Rewards & Loyalty
        </div>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Gold Member Status</h1>

        {/* Balance Card */}
        <div style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '20px',
          marginTop: '16px',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#E0E7FF' }}>Current Points Balance</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>2,450</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F59E0B' }}>PTS</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#C7D2FE', marginTop: '2px' }}>Worth ₹245 Instant Cashback</div>
          </div>

          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '18px',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Award size={32} color="#F59E0B" />
          </div>
        </div>

        {/* Tier Progress */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#E0E7FF', marginBottom: '6px' }}>
            <span>Progress to Platinum (3,000 pts)</span>
            <span style={{ fontWeight: 800 }}>550 pts remaining</span>
          </div>
          <div style={{ width: '100%', height: '8px', borderRadius: '999px', background: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
            <div style={{ width: '82%', height: '100%', background: '#F59E0B', borderRadius: '999px' }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Ways to Earn */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Ways to Earn Points</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: <Sparkles size={20} color="#4F46E5" />, title: "Book Any Service", pts: "+150 PTS", desc: "Earn points on every completed booking" },
              { icon: <Users size={20} color="#06B6D4" />, title: "Refer Friends", pts: "+500 PTS", desc: "When your friend completes their first appointment", action: () => onNavigateScreen('referral') },
              { icon: <Award size={20} color="#10B981" />, title: "Leave a 5-Star Review", pts: "+50 PTS", desc: "Share feedback and photos" }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={item.action}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '14px 16px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: item.action ? 'pointer' : 'default'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748B' }}>{item.desc}</p>
                  </div>
                </div>

                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10B981', background: '#ECFDF5', padding: '4px 10px', borderRadius: '999px' }}>
                  {item.pts}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Redeem Section */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Redeem Rewards</h3>
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>₹100 Wallet Discount Voucher</h4>
              <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Redeem for 1,000 Points</p>
            </div>
            <button style={{ padding: '8px 16px', borderRadius: '999px', background: '#4F46E5', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700 }}>
              Redeem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
