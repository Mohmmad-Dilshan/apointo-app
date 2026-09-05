import React, { useState } from 'react';
import { Plus, Tag, Flame, Percent, Copy, Eye, Trash2, ToggleLeft, ToggleRight, TrendingUp, Users, Zap, X, Check } from 'lucide-react';
import { usePlatform } from '../../context/PlatformContext';

export default function ProviderOffers() {
  const { coupons = [], addBusinessCoupon, toggleBusinessCoupon, deleteBusinessCoupon } = usePlatform();
  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCode, setNewCode] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('100');
  const [newMinOrder, setNewMinOrder] = useState('399');

  const campaigns = coupons.map((c, i) => ({
    id: c.id || c.code,
    code: c.code,
    title: c.title || `Flat ₹${c.amount || 100} OFF`,
    type: c.type || 'flat',
    discount: `₹${c.amount || 100}`,
    uses: c.uses || (10 + (i * 12)),
    maxUses: c.maxUses || 200,
    status: c.isActive === false ? 'paused' : 'active',
    expires: '31 Aug 2026',
    color: ['#6366F1', '#10B981', '#F59E0B', '#EC4899'][i % 4],
    bg: ['#EEF2FF', '#ECFDF5', '#FEF3C7', '#FDF2F8'][i % 4],
    revenue: `₹${Math.round((c.uses || 15) * (c.amount || 100) * 1.5).toLocaleString()}`
  }));

  const toggleStatus = (id) => toggleBusinessCoupon(id);
  const deleteCampaign = (id) => deleteBusinessCoupon(id);
  const copyCode = (code) => { setCopied(code); setTimeout(() => setCopied(null), 1500); };

  const handleCreateCoupon = (e) => {
    e.preventDefault();
    if (!newCode.trim()) return;
    addBusinessCoupon({
      code: newCode.trim(),
      title: newTitle.trim() || `Flat ₹${newAmount} OFF`,
      amount: Number(newAmount) || 100,
      minOrder: Number(newMinOrder) || 299
    });
    setNewCode('');
    setNewTitle('');
    setIsModalOpen(false);
  };

  const filtered = activeTab === 'all' ? campaigns : campaigns.filter(c => c.status === activeTab);
  const totalRevenue = campaigns.filter(c => c.status === 'active').reduce((sum, c) => sum + parseInt(c.revenue.replace(/[^0-9]/g, '') || 0), 0);
  const totalUses = campaigns.filter(c => c.status === 'active').reduce((sum, c) => sum + c.uses, 0);

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>🏷️ Marketing & Offers</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>Promo codes & discounts (Live synced to Customer Checkout)</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: '10px 18px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
            color: '#FFFFFF', fontSize: '0.84rem', fontWeight: 800,
            display: 'flex', alignItems: 'center', gap: '6px',
            boxShadow: '0 6px 18px rgba(79,70,229,0.35)',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} /> New Campaign
        </button>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[
          { label: 'Active Campaigns', value: campaigns.filter(c => c.status === 'active').length, color: '#6366F1', bg: '#EEF2FF', icon: <Zap size={16} color="#6366F1" /> },
          { label: 'Total Redemptions', value: totalUses, color: '#10B981', bg: '#ECFDF5', icon: <Users size={16} color="#10B981" /> },
          { label: 'Revenue Driven', value: `₹${(totalRevenue / 1000).toFixed(1)}k`, color: '#F59E0B', bg: '#FEF3C7', icon: <TrendingUp size={16} color="#F59E0B" /> }
        ].map((st, i) => (
          <div key={i} style={{ background: st.bg, borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>{st.icon}</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: st.color }}>{st.value}</div>
            <div style={{ fontSize: '0.62rem', color: '#64748B', fontWeight: 700, marginTop: '1px' }}>{st.label}</div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['active', 'paused', 'expired'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: '8px 18px', borderRadius: '999px',
            background: activeTab === tab ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : '#F1F5F9',
            color: activeTab === tab ? '#FFFFFF' : '#64748B',
            fontSize: '0.8rem', fontWeight: 800,
            boxShadow: activeTab === tab ? '0 4px 12px rgba(79,70,229,0.3)' : 'none',
            transition: 'all 0.2s'
          }}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Campaign Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🏷️</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>No {activeTab} campaigns</div>
            <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>Create a new campaign to boost bookings</div>
          </div>
        ) : filtered.map(c => (
          <div key={c.id} style={{
            background: '#FFFFFF', borderRadius: '22px', padding: '18px',
            border: `1.5px solid ${c.status === 'active' ? c.color + '40' : '#E2E8F0'}`,
            boxShadow: c.status === 'active' ? `0 6px 20px ${c.color}15` : '0 2px 8px rgba(0,0,0,0.03)',
            opacity: c.status === 'expired' ? 0.65 : 1
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  {c.type === 'flat' ? '₹' : c.type === 'percent' ? '%' : '🎁'}
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0F172A' }}>{c.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>Expires {c.expires}</div>
                </div>
              </div>
              <div style={{
                padding: '4px 10px', borderRadius: '999px',
                background: c.status === 'active' ? '#ECFDF5' : c.status === 'paused' ? '#FEF3C7' : '#F1F5F9',
                color: c.status === 'active' ? '#10B981' : c.status === 'paused' ? '#D97706' : '#94A3B8',
                fontSize: '0.65rem', fontWeight: 900
              }}>
                {c.status.toUpperCase()}
              </div>
            </div>

            {/* Code row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: c.bg, borderRadius: '12px', padding: '10px 14px', marginBottom: '12px', border: `1px dashed ${c.color}50` }}>
              <div>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Promo Code</div>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: c.color, letterSpacing: '0.06em' }}>{c.code}</div>
              </div>
              <button onClick={() => copyCode(c.code)} style={{ padding: '6px 12px', borderRadius: '8px', background: '#FFFFFF', color: c.color, fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px', border: `1px solid ${c.color}30` }}>
                <Copy size={11} /> {copied === c.code ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Usage progress */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginBottom: '6px' }}>
                <span>{c.uses} used</span>
                <span>{c.maxUses} max • {Math.round((c.uses / c.maxUses) * 100)}%</span>
              </div>
              <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ width: `${(c.uses / c.maxUses) * 100}%`, height: '100%', background: `linear-gradient(90deg, ${c.color}, ${c.color}CC)`, borderRadius: '999px' }} />
              </div>
            </div>

            {/* Revenue + Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                Revenue: <strong style={{ color: '#10B981' }}>{c.revenue}</strong>
              </div>
              {c.status !== 'expired' && (
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button onClick={() => toggleStatus(c.id)} style={{ padding: '5px 12px', borderRadius: '8px', background: '#F1F5F9', color: '#475569', fontSize: '0.72rem', fontWeight: 800 }}>
                    {c.status === 'active' ? '⏸ Pause' : '▶ Resume'}
                  </button>
                  <button onClick={() => deleteCampaign(c.id)} style={{ padding: '5px 10px', borderRadius: '8px', background: '#FFF1F2', color: '#F43F5E', fontSize: '0.72rem', fontWeight: 800 }}>
                    <Trash2 size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create Promo Campaign Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', width: '100%', maxWidth: '420px' }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Launch Promo Code</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9', border: 'none', cursor: 'pointer' }}>
                <X size={18} color="#64748B" />
              </button>
            </div>

            <form onSubmit={handleCreateCoupon} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Coupon Code</label>
                <input
                  type="text"
                  placeholder="e.g. FESTIVE150"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value.toUpperCase())}
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.05em' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Campaign Title</label>
                <input
                  type="text"
                  placeholder="e.g. Flat ₹150 OFF Monsoon Special"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.88rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Discount (₹)</label>
                  <input
                    type="number"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.88rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Min Order (₹)</label>
                  <input
                    type="number"
                    value={newMinOrder}
                    onChange={(e) => setNewMinOrder(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', color: '#64748B', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ flex: 2, padding: '12px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #6366F1, #4F46E5)', color: '#FFFFFF', fontWeight: 800, cursor: 'pointer' }}
                >
                  Activate Code
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
