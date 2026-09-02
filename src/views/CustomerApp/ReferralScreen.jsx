import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Trophy, ArrowUpRight, Users, Gift, Star, Zap, ChevronRight } from 'lucide-react';

const FRIENDS = [
  { name: "Rahul Verma", initials: "RV", date: "12 Aug 2026", reward: "+₹500", pts: "+500 PTS", color: "#6366F1", status: "Paid" },
  { name: "Priya Sharma", initials: "PS", date: "08 Aug 2026", reward: "+₹500", pts: "+500 PTS", color: "#F59E0B", status: "Paid" },
  { name: "Amit Kumar", initials: "AK", date: "01 Aug 2026", reward: "+₹500", pts: "+500 PTS", color: "#10B981", status: "Paid" }
];

const HOW_IT_WORKS = [
  { icon: "📤", step: "1", title: "Share Your Code", desc: "Send your exclusive invite link to friends & family" },
  { icon: "📱", step: "2", title: "They Book First", desc: "Your friend downloads Apo and completes their 1st booking" },
  { icon: "💰", step: "3", title: "Both Get Rewarded", desc: "They get ₹100 OFF and you earn ₹500 instant cashback" }
];

export default function ReferralScreen({ onBack, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [activeShare, setActiveShare] = useState(null);
  const referralCode = "DILSHAN50";
  const totalEarned = 1500;
  const totalFriends = 3;
  const pendingBonus = 1000;

  const handleCopy = () => {
    setCopied(true);
    if (onShowToast) onShowToast({ message: "✅ Referral code copied to clipboard!", type: "success" });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    setActiveShare('whatsapp');
    const text = `Hey! 🎉 Use my code *${referralCode}* on Apo to get ₹100 OFF your 1st salon or doctor appointment!\n\nBook here 👉 https://apo.app/ref/${referralCode}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    setTimeout(() => setActiveShare(null), 1500);
  };

  return (
    <div style={{ background: '#F0F4FF', minHeight: '100%', paddingBottom: '100px' }} className="animate-fade-in">

      {/* ──────── HERO HEADER ──────── */}
      <div style={{
        background: 'linear-gradient(145deg, #0F172A 0%, #1E1B4B 55%, #3730A3 100%)',
        padding: '24px 20px 0',
        color: '#FFFFFF',
        borderBottomLeftRadius: '36px',
        borderBottomRightRadius: '36px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 16px 48px rgba(15,23,42,0.45)'
      }}>

        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(99,102,241,0.15)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(245,158,11,0.1)', pointerEvents: 'none' }} />

        {/* Back button & title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px', position: 'relative' }}>
          <button
            onClick={onBack}
            style={{
              width: '40px', height: '40px', borderRadius: '14px',
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF'
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Referral Program
            </div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Invite & Earn 🎁
            </h1>
          </div>
        </div>

        {/* Stats Row - 3 Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', position: 'relative', marginBottom: '-24px', paddingBottom: '0' }}>
          {[
            { label: 'Total Earned', value: `₹${totalEarned.toLocaleString()}`, icon: <Trophy size={18} color="#F59E0B" />, bg: 'rgba(245,158,11,0.2)', border: 'rgba(245,158,11,0.3)' },
            { label: 'Friends Joined', value: `${totalFriends}`, icon: <Users size={18} color="#10B981" />, bg: 'rgba(16,185,129,0.2)', border: 'rgba(16,185,129,0.3)' },
            { label: 'Pending Bonus', value: `₹${pendingBonus}`, icon: <Zap size={18} color="#818CF8" />, bg: 'rgba(129,140,248,0.2)', border: 'rgba(129,140,248,0.3)' }
          ].map((stat, i) => (
            <div key={i} style={{
              background: stat.bg,
              border: `1px solid ${stat.border}`,
              borderRadius: '20px',
              padding: '14px 12px',
              backdropFilter: 'blur(16px)',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '6px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>{stat.value}</div>
              <div style={{ fontSize: '0.62rem', color: '#A5B4FC', fontWeight: 700, marginTop: '1px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* bottom spacer */}
        <div style={{ height: '36px' }} />
      </div>

      {/* ──────── MAIN CONTENT ──────── */}
      <div style={{ padding: '28px 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* ── REFERRAL CODE CARD ── */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '28px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(99,102,241,0.1)',
          border: '1px solid #E0E7FF'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#6366F1', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
            🔖 Your Exclusive Code
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #EEF2FF 0%, #F0F4FF 100%)',
            borderRadius: '18px',
            padding: '18px',
            border: '2px dashed #818CF8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px'
          }}>
            <div>
              <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#4F46E5', letterSpacing: '0.1em' }}>{referralCode}</div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600, marginTop: '2px' }}>Share this code for instant ₹500 cashback</div>
            </div>
            <button
              onClick={handleCopy}
              style={{
                padding: '10px 18px', borderRadius: '999px',
                background: copied ? 'linear-gradient(135deg, #10B981, #059669)' : 'linear-gradient(135deg, #4F46E5, #6366F1)',
                color: '#FFFFFF',
                fontSize: '0.8rem', fontWeight: 800,
                display: 'flex', alignItems: 'center', gap: '6px',
                boxShadow: copied ? '0 4px 12px rgba(16,185,129,0.4)' : '0 4px 12px rgba(79,70,229,0.35)',
                transition: 'all 0.3s ease'
              }}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Referral Link Row */}
          <div style={{
            background: '#F8FAFC', borderRadius: '14px', padding: '10px 14px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            border: '1px solid #E2E8F0'
          }}>
            <span style={{ fontSize: '0.76rem', color: '#64748B', fontFamily: 'monospace' }}>
              apo.app/ref/{referralCode.toLowerCase()}
            </span>
            <ChevronRight size={14} color="#94A3B8" />
          </div>
        </div>

        {/* ── SHARE BUTTONS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={handleWhatsAppShare}
            style={{
              width: '100%', padding: '16px 20px',
              borderRadius: '20px',
              background: activeShare === 'whatsapp'
                ? 'linear-gradient(135deg, #128C7E, #0D7069)'
                : 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              color: '#FFFFFF',
              fontSize: '0.95rem', fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>💬</span>
            <span>Share via WhatsApp</span>
            <ArrowUpRight size={18} />
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { emoji: '📧', label: 'Email', bg: '#EEF2FF', color: '#4F46E5' },
              { emoji: '📲', label: 'SMS Invite', bg: '#FFF7ED', color: '#EA580C' }
            ].map((btn, i) => (
              <button key={i} style={{
                padding: '14px',
                borderRadius: '16px',
                background: btn.bg,
                color: btn.color,
                fontSize: '0.85rem', fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                border: `1px solid ${btn.color}20`
              }}>
                <span>{btn.emoji}</span>
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div style={{
          background: '#FFFFFF', borderRadius: '28px', padding: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0'
        }}>
          <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={18} color="#F59E0B" />
            How It Works
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', paddingBottom: i < HOW_IT_WORKS.length - 1 ? '16px' : '0', position: 'relative' }}>
                {/* Step connector line */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div style={{ position: 'absolute', left: '20px', top: '42px', width: '2px', height: '30px', background: 'linear-gradient(to bottom, #C7D2FE, transparent)' }} />
                )}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  border: '2px solid #C7D2FE'
                }}>
                  {step.icon}
                </div>
                <div style={{ paddingTop: '2px' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>{step.title}</div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── REFERRED FRIENDS LEDGER ── */}
        <div style={{
          background: '#FFFFFF', borderRadius: '28px', padding: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} color="#6366F1" />
              Referred Friends
            </div>
            <span style={{
              fontSize: '0.72rem', fontWeight: 800, color: '#6366F1',
              background: '#EEF2FF', padding: '4px 10px', borderRadius: '999px'
            }}>
              {totalFriends} Total
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {FRIENDS.map((f, idx) => (
              <div key={idx} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px',
                borderRadius: '16px',
                background: idx % 2 === 0 ? '#F8FAFC' : '#FFFFFF',
                transition: 'background 0.2s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Avatar with initials */}
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '14px',
                    background: `linear-gradient(135deg, ${f.color}30, ${f.color}15)`,
                    border: `2px solid ${f.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.82rem', fontWeight: 900, color: f.color
                  }}>
                    {f.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>{f.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={10} color="#F59E0B" fill="#F59E0B" />
                      Joined {f.date}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '0.88rem', fontWeight: 900, color: '#10B981',
                    background: '#ECFDF5', padding: '4px 12px', borderRadius: '999px',
                    border: '1px solid #A7F3D0'
                  }}>
                    {f.reward}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '3px', textAlign: 'center' }}>{f.pts}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Cashback Summary Row */}
          <div style={{
            marginTop: '14px', padding: '14px', borderRadius: '16px',
            background: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
            border: '1px solid #A7F3D0',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#065F46' }}>Total Referral Cashback</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#10B981' }}>₹{totalEarned.toLocaleString()} 🎉</div>
          </div>
        </div>

        {/* ── BONUS CHALLENGE CARD ── */}
        <div style={{
          borderRadius: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          boxShadow: '0 12px 32px rgba(79,70,229,0.35)',
          display: 'flex', gap: '16px', alignItems: 'center'
        }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '16px', flexShrink: 0,
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem'
          }}>
            🏆
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 900, color: '#FFFFFF' }}>Invite 5 Friends Bonus</div>
            <div style={{ fontSize: '0.74rem', color: '#C7D2FE', marginTop: '3px' }}>
              Invite 2 more friends to unlock an extra <strong style={{ color: '#FCD34D' }}>₹1,000</strong> super bonus!
            </div>
            <div style={{ marginTop: '10px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', height: '6px', overflow: 'hidden' }}>
              <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #FCD34D, #F59E0B)', borderRadius: '999px' }} />
            </div>
            <div style={{ fontSize: '0.68rem', color: '#C7D2FE', marginTop: '4px' }}>3 of 5 friends joined</div>
          </div>
        </div>

      </div>
    </div>
  );
}
