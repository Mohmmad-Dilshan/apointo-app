import React, { useState } from 'react';
import { Tag, Plus, CheckCircle2, Percent, TrendingUp, Calendar, AlertCircle, Trash2, X, Send, Sparkles } from 'lucide-react';
import { COUPONS } from '../../data/sampleData';

export default function AdminPromotions() {
  const [coupons, setCoupons] = useState([
    ...COUPONS.map((c, i) => ({
      ...c,
      id: `cp_${i + 1}`,
      discountPct: i === 0 ? 20 : i === 1 ? 50 : 15,
      minOrder: i === 0 ? "₹499" : i === 1 ? "₹299" : "₹799",
      maxDiscount: i === 0 ? "₹150" : i === 1 ? "₹200" : "₹300",
      redemptions: i === 0 ? 1420 : i === 1 ? 2840 : 890,
      burnedGMV: i === 0 ? "₹1,42,000" : i === 1 ? "₹3,90,000" : "₹89,000",
      isActive: true,
      sponsorSplit: "70% Apointo / 30% Merchant"
    })),
    {
      id: "cp_4",
      code: "FESTIVE500",
      title: "Festive Season Flat ₹500 Off",
      discountPct: 25,
      minOrder: "₹1,499",
      maxDiscount: "₹500",
      redemptions: 412,
      burnedGMV: "₹2,06,000",
      isActive: true,
      sponsorSplit: "50% Apointo / 50% Merchant"
    }
  ]);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newCode, setNewCode] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDiscountPct, setNewDiscountPct] = useState(20);
  const [newMaxDiscount, setNewMaxDiscount] = useState('₹200');
  const [newMinOrder, setNewMinOrder] = useState('₹500');
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const toggleCouponStatus = (id) => {
    setCoupons(coupons.map(c => {
      if (c.id === id) {
        const nextState = !c.isActive;
        showToast(`Promo Code '${c.code}' is now ${nextState ? 'Activated 🟢' : 'Deactivated 🔴'}`);
        return { ...c, isActive: nextState };
      }
      return c;
    }));
  };

  const handleCreateCoupon = (e) => {
    e.preventDefault();
    if (!newCode.trim()) return;

    const newEntry = {
      id: `cp_${Date.now()}`,
      code: newCode.toUpperCase().replace(/\s+/g, ''),
      title: newTitle || `Special ${newDiscountPct}% Off Promo`,
      discountPct: newDiscountPct,
      minOrder: newMinOrder.startsWith('₹') ? newMinOrder : `₹${newMinOrder}`,
      maxDiscount: newMaxDiscount.startsWith('₹') ? newMaxDiscount : `₹${newMaxDiscount}`,
      redemptions: 0,
      burnedGMV: "₹0",
      isActive: true,
      sponsorSplit: "70% Apointo / 30% Merchant"
    };

    setCoupons([newEntry, ...coupons]);
    setIsCreateOpen(false);
    setNewCode('');
    setNewTitle('');
    showToast(`New Campaign '${newEntry.code}' successfully created and live!`);
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Header */}
      <div style={{
        background: '#131B2E',
        borderRadius: '20px',
        padding: '22px 24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Tag size={22} color="#F59E0B" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Platform Coupon & Campaign Engine</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Launch system-wide discounts, manage merchant cost splits & track marketing ROI
          </p>
        </div>

        <button
          onClick={() => setIsCreateOpen(true)}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(245, 158, 11, 0.4)'
          }}
        >
          <Plus size={16} /> Create Promo Campaign
        </button>
      </div>

      {/* Toast Alert */}
      {toastMsg && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '14px', padding: '12px 18px', color: '#34D399', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 3 Metric Summary Tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Total Discount Burned</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FBBF24', marginTop: '4px' }}>₹8,27,000</div>
          <p style={{ fontSize: '0.72rem', color: '#34D399', fontWeight: 700, marginTop: '4px' }}>Generated ₹68.4L in Booking GMV (8.2x ROI)</p>
        </div>

        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(52, 211, 153, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Total Redemptions</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34D399', marginTop: '4px' }}>5,562 Users</div>
          <p style={{ fontSize: '0.72rem', color: '#34D399', marginTop: '4px' }}>94.2% completion rate</p>
        </div>

        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(99, 102, 241, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Active Campaigns</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#818CF8', marginTop: '4px' }}>{coupons.filter(c => c.isActive).length} Live Codes</div>
          <p style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '4px' }}>Auto-expiring in 28 days</p>
        </div>
      </div>

      {/* Coupons List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {coupons.map(coupon => (
          <div
            key={coupon.id}
            style={{
              background: '#131B2E',
              borderRadius: '20px',
              padding: '20px',
              border: coupon.isActive ? '1px solid rgba(251, 191, 36, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '14px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ padding: '6px 12px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.15)', border: '1px dashed #F59E0B', color: '#FBBF24', fontSize: '1rem', fontWeight: 900, letterSpacing: '0.05em' }}>
                    {coupon.code}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: '#A5B4FC', background: 'rgba(99, 102, 241, 0.2)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    {coupon.discountPct}% OFF
                  </span>
                </div>

                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  color: coupon.isActive ? '#34D399' : '#94A3B8',
                  background: coupon.isActive ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  border: coupon.isActive ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {coupon.isActive ? '● Live on App' : '○ Paused'}
                </span>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 700, marginTop: '10px' }}>{coupon.title}</p>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8', marginTop: '4px' }}>
                Min Order: {coupon.minOrder} • Max Cap: {coupon.maxDiscount} • Split: {coupon.sponsorSplit}
              </div>
            </div>

            {/* Metrics & Control Bar */}
            <div style={{
              background: '#0F172A',
              borderRadius: '14px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div style={{ display: 'flex', gap: '14px', fontSize: '0.75rem' }}>
                <span style={{ color: '#34D399', fontWeight: 700 }}>🎟️ {coupon.redemptions} Used</span>
                <span style={{ color: '#FBBF24', fontWeight: 700 }}>💸 {coupon.burnedGMV} Burned</span>
              </div>

              <button
                onClick={() => toggleCouponStatus(coupon.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: coupon.isActive ? 'rgba(244, 63, 94, 0.15)' : 'rgba(52, 211, 153, 0.15)',
                  border: coupon.isActive ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid rgba(52, 211, 153, 0.3)',
                  color: coupon.isActive ? '#F43F5E' : '#34D399',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                {coupon.isActive ? 'Deactivate Code' : 'Activate Code'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Campaign Modal */}
      {isCreateOpen && (
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
          <form onSubmit={handleCreateCoupon} style={{
            background: '#1E293B',
            borderRadius: '24px',
            padding: '26px',
            maxWidth: '480px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFFFFF' }}>Create System Promo Campaign</h3>
              <button type="button" onClick={() => setIsCreateOpen(false)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div>
                <label style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Promo Code (Uppercase)</label>
                <input
                  type="text"
                  placeholder="e.g. MONSOON300"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value.toUpperCase())}
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FBBF24', fontSize: '1rem', fontWeight: 900, letterSpacing: '0.05em', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Campaign Title</label>
                <input
                  type="text"
                  placeholder="e.g. Monsoon Special Flat 25% Off"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Discount %</label>
                  <input
                    type="number"
                    value={newDiscountPct}
                    onChange={(e) => setNewDiscountPct(Number(e.target.value))}
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Max Cap</label>
                  <input
                    type="text"
                    value={newMaxDiscount}
                    onChange={(e) => setNewMaxDiscount(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Min Order</label>
                  <input
                    type="text"
                    value={newMinOrder}
                    onChange={(e) => setNewMinOrder(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'linear-gradient(135deg, #F59E0B, #D97706)', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(245,158,11,0.4)' }}
            >
              Publish Promo Code Live
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
