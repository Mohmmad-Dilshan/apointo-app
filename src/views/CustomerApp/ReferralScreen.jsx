import React, { useState } from 'react';
import { ArrowLeft, Share2, Copy, Check, Gift, Users, Sparkles, Trophy, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ReferralScreen({ onBack, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const referralCode = "DILSHAN50";

  const handleCopy = () => {
    setCopied(true);
    if (onShowToast) onShowToast({ message: "Referral link copied to clipboard!", type: "success" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = `Hey! Use my code *${referralCode}* on Apointo to get ₹100 OFF your 1st salon or doctor appointment! Book here: https://apointo.app/ref/${referralCode}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Midnight Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '24px 20px 32px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <button
            onClick={onBack}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Referral Rewards Program
            </span>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Invite & Earn ₹500 🎁
            </h1>
          </div>
        </div>

        {/* Total Earned Counter Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.14)',
          backdropFilter: 'blur(16px)',
          borderRadius: '22px',
          padding: '18px',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.74rem', color: '#C7D2FE', fontWeight: 600 }}>Total Referral Cashback Earned</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginTop: '2px' }}>
              ₹1,500 <span style={{ fontSize: '0.85rem', color: '#F59E0B', fontWeight: 700 }}>(3 Friends Joined)</span>
            </div>
          </div>

          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 16px rgba(16,185,129,0.35)'
          }}>
            <Trophy size={26} color="#FFFFFF" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Unique Referral Code Box */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '20px',
          border: '2px dashed #6366F1',
          boxShadow: '0 8px 24px rgba(99,102,241,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 800, textTransform: 'uppercase' }}>Your Exclusive Code</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#4F46E5', letterSpacing: '0.08em', marginTop: '2px' }}>{referralCode}</div>
          </div>

          <button
            onClick={handleCopy}
            style={{
              padding: '10px 18px',
              borderRadius: '999px',
              background: copied ? '#10B981' : '#EEF2FF',
              color: copied ? '#FFFFFF' : '#4F46E5',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: copied ? '0 4px 12px rgba(16,185,129,0.3)' : 'none'
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied Link' : 'Copy Code'}</span>
          </button>
        </div>

        {/* WhatsApp Share CTA */}
        <button
          onClick={handleWhatsAppShare}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
            cursor: 'pointer'
          }}
        >
          <span>Share via WhatsApp</span>
          <ArrowUpRight size={18} />
        </button>

        {/* Referral History / Friends List */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Referred Friends Activity</h3>

          <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1px solid #E2E8F0', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: "Rahul Verma", date: "12 Aug 2026", reward: "+500 PTS", status: "Completed" },
              { name: "Priya Sharma", date: "08 Aug 2026", reward: "+500 PTS", status: "Completed" },
              { name: "Amit Kumar", date: "01 Aug 2026", reward: "+500 PTS", status: "Completed" }
            ].map((f, idx, arr) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: idx < arr.length - 1 ? '10px' : '0', borderBottom: idx < arr.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                    👤
                  </div>
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F172A' }}>{f.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{f.date}</div>
                  </div>
                </div>

                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10B981', background: '#ECFDF5', padding: '4px 10px', borderRadius: '999px' }}>
                  {f.reward}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
