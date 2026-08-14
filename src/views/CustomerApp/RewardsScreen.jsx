import React, { useState } from 'react';
import { Award, Gift, Zap, Users, ShieldCheck, ChevronRight, Sparkles, Crown, ArrowUpRight, Copy, CheckCircle2, History, Ticket } from 'lucide-react';

export default function RewardsScreen({ user, onNavigateScreen }) {
  const [points, setPoints] = useState(2450);
  const [redeemedCode, setRedeemedCode] = useState(null);

  const handleRedeem = (cost, codeName) => {
    if (points >= cost) {
      setPoints(prev => prev - cost);
      setRedeemedCode(codeName);
      setTimeout(() => setRedeemedCode(null), 4000);
    } else {
      alert("Insufficient points! Earn more points by booking services or referring friends.");
    }
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Toast Alert for Reward Redemption */}
      {redeemedCode && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2000,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(16px)',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: '999px',
          fontSize: '0.84rem',
          fontWeight: 700,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255,255,255,0.2)'
        }} className="animate-fade-in">
          <CheckCircle2 size={16} color="#10B981" />
          <span>Reward Unlocked! Code <strong>{redeemedCode}</strong> copied to clipboard! 🎉</span>
        </div>
      )}

      {/* Header Banner: Midnight Gradient with MetallicVIP Card */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '24px 20px 36px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 800, color: '#A5B4FC', letterSpacing: '0.06em' }}>
              APOINTO CLUB & REWARDS
            </div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Gold VIP Status 👑
            </h1>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            color: '#FFFFFF',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            boxShadow: '0 4px 12px rgba(245,158,11,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Crown size={12} />
            <span>GOLD VIP</span>
          </div>
        </div>

        {/* 3D Gold Metallic VIP Pass Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '22px',
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Shimmer Graphic Ornament */}
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(255,255,255,0) 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '0.74rem', color: '#C7D2FE', fontWeight: 600 }}>Available Reward Balance</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.03em', display: 'flex', alignItems: 'baseline', gap: '6px', color: '#FFFFFF', marginTop: '2px' }}>
                <span>{points.toLocaleString()}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#F59E0B' }}>PTS</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#E0E7FF', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <Sparkles size={13} color="#F59E0B" />
                <span>Worth ₹{(points / 10).toFixed(0)} Instant Cashback</span>
              </div>
            </div>

            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(245,158,11,0.35)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              <Award size={30} color="#FFFFFF" />
            </div>
          </div>

          {/* Tier Progress Bar */}
          <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#E0E7FF', marginBottom: '6px', fontWeight: 700 }}>
              <span>Progress to Platinum VIP (3,000 PTS)</span>
              <span style={{ color: '#F59E0B' }}>{Math.max(0, 3000 - points)} pts remaining</span>
            </div>
            <div style={{ width: '100%', height: '8px', borderRadius: '999px', background: 'rgba(255,255,255,0.18)', overflow: 'hidden' }}>
              <div style={{
                width: `${Math.min(100, (points / 3000) * 100)}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)',
                borderRadius: '999px',
                boxShadow: '0 0 10px #F59E0B',
                transition: 'width 0.5s ease-out'
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {/* Ways to Earn Points */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>Ways to Earn Points</h3>
            <span style={{ fontSize: '0.78rem', color: '#6366F1', fontWeight: 700 }}>Unlimited Perks</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: <Sparkles size={20} color="#4F46E5" />, bg: '#EEF2FF', title: "Book Any Service", pts: "+150 PTS", desc: "Earn points automatically on every completed booking" },
              { icon: <Users size={20} color="#0284C7" />, bg: '#E0F2FE', title: "Refer Friends", pts: "+500 PTS", desc: "Get 500 PTS when your friend completes their 1st appointment", action: () => onNavigateScreen('referral') },
              { icon: <Award size={20} color="#059669" />, bg: '#D1FAE5', title: "Leave a 5-Star Review", pts: "+50 PTS", desc: "Share feedback and photos after your appointment" }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={item.action}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 14px rgba(15,23,42,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: item.action ? 'pointer' : 'default',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>{item.title}</span>
                      {item.action && <ArrowUpRight size={14} color="#6366F1" />}
                    </h4>
                    <p style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px' }}>{item.desc}</p>
                  </div>
                </div>

                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 12px', borderRadius: '999px', flexShrink: 0 }}>
                  {item.pts}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Redeem Rewards Voucher Store */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>Redeem Reward Vouchers</h3>
            <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Instant Coupon Codes</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: "₹100 Off Salon & Spa Voucher", cost: 1000, code: "REWARD100", desc: "Valid on all salon & grooming services" },
              { title: "Flat ₹250 Off Dental Checkup", cost: 2000, code: "SMILE250", desc: "Applicable on dental consultation & scaling" },
              { title: "Free Premium Hair Spa Addon", cost: 1500, code: "FREESPA", desc: "Complimentary deep conditioning treatment" }
            ].map((v, idx) => {
              const canAfford = points >= v.cost;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 14px rgba(15,23,42,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
                      <Ticket size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>{v.title}</h4>
                      <p style={{ fontSize: '0.75rem', color: '#64748B' }}>{v.desc}</p>
                      <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#4F46E5', marginTop: '2px', display: 'inline-block' }}>{v.cost} Points</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRedeem(v.cost, v.code)}
                    disabled={!canAfford}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '999px',
                      background: canAfford ? '#4F46E5' : '#CBD5E1',
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: canAfford ? 'pointer' : 'not-allowed',
                      boxShadow: canAfford ? '0 4px 12px rgba(79,70,229,0.25)' : 'none',
                      flexShrink: 0
                    }}
                  >
                    Redeem
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Points History */}
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <History size={16} color="#6366F1" />
            <span>Recent Points Activity</span>
          </h3>

          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: "Classic Haircut & Styling", date: "14 Aug 2026", pts: "+150 PTS", status: "Earned" },
              { title: "Friend Referral Bonus", date: "10 Aug 2026", pts: "+500 PTS", status: "Earned" },
              { title: "5-Star Review Bonus", date: "02 Aug 2026", pts: "+50 PTS", status: "Earned" }
            ].map((h, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: idx < 2 ? '10px' : '0', borderBottom: idx < 2 ? '1px solid #F1F5F9' : 'none' }}>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0F172A' }}>{h.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{h.date}</div>
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10B981' }}>{h.pts}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
