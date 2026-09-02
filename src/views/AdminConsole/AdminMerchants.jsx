import React, { useState } from 'react';
import { Building2, Search, Star, Zap, ShieldCheck, AlertTriangle, Lock, Unlock, Sliders, CheckCircle2, TrendingUp, Plus, X, Phone, MapPin, DollarSign, Percent } from 'lucide-react';
import { BUSINESSES } from '../../data/sampleData';

export default function AdminMerchants() {
  const [merchants, setMerchants] = useState(
    BUSINESSES.map((b, idx) => ({
      ...b,
      commissionRate: idx % 2 === 0 ? 12 : 15,
      isFeatured: idx === 0 || idx === 2,
      isFrozen: false,
      totalEarned: idx === 0 ? "₹14,20,000" : idx === 1 ? "₹8,90,000" : idx === 2 ? "₹11,40,000" : "₹6,15,000",
      activeSpecialists: idx === 0 ? 8 : idx === 1 ? 4 : idx === 2 ? 6 : 3,
      bankVerified: true
    }))
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [editCommission, setEditCommission] = useState(12);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  // New Merchant Form State
  const [newBizName, setNewBizName] = useState('');
  const [newBizCategory, setNewBizCategory] = useState('Salon & Hair');
  const [newBizCity, setNewBizCity] = useState('Bengaluru');
  const [newBizOwner, setNewBizOwner] = useState('');
  const [newBizPhone, setNewBizPhone] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const toggleFeatured = (id) => {
    setMerchants(merchants.map(m => {
      if (m.id === id) {
        const nextState = !m.isFeatured;
        showToast(`${m.name} is now ${nextState ? 'Boosted & Featured on Customer App ★' : 'Removed from Featured'}`);
        return { ...m, isFeatured: nextState };
      }
      return m;
    }));
  };

  const toggleFreeze = (id) => {
    setMerchants(merchants.map(m => {
      if (m.id === id) {
        const nextState = !m.isFrozen;
        showToast(`${m.name} account ${nextState ? 'Frozen & Payouts Locked 🔒' : 'Reactivated & Unlocked 🔓'}`);
        return { ...m, isFrozen: nextState };
      }
      return m;
    }));
  };

  const handleSaveCommission = () => {
    if (!selectedMerchant) return;
    setMerchants(merchants.map(m => {
      if (m.id === selectedMerchant.id) {
        return { ...m, commissionRate: editCommission };
      }
      return m;
    }));
    showToast(`Commission rate for ${selectedMerchant.name} updated to ${editCommission}%`);
    setSelectedMerchant(null);
  };

  const handleAddMerchant = (e) => {
    e.preventDefault();
    if (!newBizName.trim()) return;

    const newEntry = {
      id: `biz_${Date.now()}`,
      name: newBizName,
      category: newBizCategory,
      city: newBizCity,
      rating: 4.8,
      reviewsCount: 1,
      commissionRate: 12,
      isFeatured: false,
      isFrozen: false,
      totalEarned: "₹0",
      activeSpecialists: 1,
      bankVerified: true,
      address: `${newBizCity}, India`,
      heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
    };

    setMerchants([newEntry, ...merchants]);
    setIsAddModalOpen(false);
    setNewBizName('');
    setNewBizOwner('');
    setNewBizPhone('');
    showToast(`New Merchant '${newBizName}' successfully registered!`);
  };

  const filtered = merchants.filter(m => {
    const matchQuery = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       m.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCity = cityFilter === 'all' || m.city.toLowerCase().includes(cityFilter.toLowerCase());
    return matchQuery && matchCity;
  });

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Top Banner Header */}
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
            <Building2 size={22} color="#818CF8" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Master Merchant Management & Commission Engine</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Control merchant visibility, custom platform commission overrides, payouts freeze & discoverability
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)'
          }}
        >
          <Plus size={16} /> Add New Merchant
        </button>
      </div>

      {/* Toast Alert */}
      {toastMsg && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '14px', padding: '12px 18px', color: '#34D399', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['all', 'Bengaluru', 'Mumbai', 'New Delhi', 'Gurugram'].map(c => (
            <button
              key={c}
              onClick={() => setCityFilter(c)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                background: cityFilter === c ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : '#131B2E',
                color: cityFilter === c ? '#FFFFFF' : '#94A3B8',
                border: cityFilter === c ? 'none' : '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer'
              }}
            >
              {c === 'all' ? `All Cities (${merchants.length})` : c}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#131B2E', padding: '8px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', width: '320px' }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search merchant name, category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', width: '100%', fontSize: '0.82rem', outline: 'none' }}
          />
        </div>
      </div>

      {/* Merchants Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {filtered.map(biz => (
          <div
            key={biz.id}
            style={{
              background: '#131B2E',
              borderRadius: '20px',
              padding: '20px',
              border: biz.isFrozen ? '1px solid rgba(244, 63, 94, 0.4)' : biz.isFeatured ? '1px solid rgba(251, 191, 36, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '16px',
              position: 'relative'
            }}
          >
            {/* Top Row: Business Details */}
            <div style={{ display: 'flex', gap: '14px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={biz.heroImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>{biz.name}</h3>
                    <p style={{ fontSize: '0.74rem', color: '#94A3B8', marginTop: '2px' }}>
                      {biz.category} • {biz.city}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    {biz.isFeatured && (
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '2px 8px', borderRadius: '999px' }}>
                        ★ Featured
                      </span>
                    )}
                    {biz.isFrozen && (
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', border: '1px solid rgba(244, 63, 94, 0.3)', padding: '2px 8px', borderRadius: '999px' }}>
                        🔒 Frozen
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', fontSize: '0.72rem', color: '#CBD5E1' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#FBBF24', fontWeight: 700 }}>
                    <Star size={12} fill="#FBBF24" /> {biz.rating} ({biz.reviewsCount})
                  </span>
                  <span>👥 {biz.activeSpecialists} Specialists</span>
                  <span style={{ color: '#34D399', fontWeight: 700 }}>💰 {biz.totalEarned} Earned</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Commission Control & Toggles */}
            <div style={{
              background: '#0F172A',
              borderRadius: '14px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {/* Commission Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Platform Cut:</span>
                <button
                  onClick={() => {
                    setSelectedMerchant(biz);
                    setEditCommission(biz.commissionRate);
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.2)',
                    color: '#A5B4FC',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <Percent size={12} /> {biz.commissionRate}% (Edit)
                </button>
              </div>

              {/* Action Toggles */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => toggleFeatured(biz.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: biz.isFeatured ? '#F59E0B' : 'rgba(251, 191, 36, 0.15)',
                    color: biz.isFeatured ? '#0F172A' : '#FBBF24',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Zap size={12} /> {biz.isFeatured ? 'Boosted' : 'Boost Salon'}
                </button>

                <button
                  onClick={() => toggleFreeze(biz.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: biz.isFrozen ? 'rgba(52, 211, 153, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                    color: biz.isFrozen ? '#34D399' : '#F43F5E',
                    border: biz.isFrozen ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(244, 63, 94, 0.3)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {biz.isFrozen ? <><Unlock size={12} /> Unfreeze</> : <><Lock size={12} /> Freeze</>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Commission Modal */}
      {selectedMerchant && (
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
          <div style={{
            background: '#1E293B',
            borderRadius: '24px',
            padding: '26px',
            maxWidth: '440px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF' }}>Commission Rate Override</h3>
              <button onClick={() => setSelectedMerchant(null)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '16px', marginBottom: '18px' }}>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Target Merchant</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>{selectedMerchant.name}</div>
              <p style={{ fontSize: '0.75rem', color: '#CBD5E1', marginTop: '2px' }}>{selectedMerchant.category} • {selectedMerchant.city}</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Custom Platform Take-Rate (%)</label>
                <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#818CF8' }}>{editCommission}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={editCommission}
                onChange={(e) => setEditCommission(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#6366F1', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#64748B', marginTop: '4px' }}>
                <span>5% (Discounted)</span>
                <span>12% (Standard)</span>
                <span>30% (Premium)</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setSelectedMerchant(null)}
                style={{ flex: 1, padding: '12px', borderRadius: '12px', background: '#0F172A', color: '#94A3B8', fontWeight: 700, border: 'none', cursor: 'pointer' }}
              >
                Cancel
              </button>

              <button
                onClick={handleSaveCommission}
                style={{
                  flex: 1.5,
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.4)'
                }}
              >
                Save Rate Override
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Merchant Modal */}
      {isAddModalOpen && (
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
          <form onSubmit={handleAddMerchant} style={{
            background: '#1E293B',
            borderRadius: '24px',
            padding: '26px',
            maxWidth: '500px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFFFFF' }}>Register New Merchant Partner</h3>
              <button type="button" onClick={() => setIsAddModalOpen(false)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div>
                <label style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Business / Salon Name</label>
                <input
                  type="text"
                  placeholder="e.g. Toni & Guy Deluxe"
                  value={newBizName}
                  onChange={(e) => setNewBizName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Category</label>
                  <select
                    value={newBizCategory}
                    onChange={(e) => setNewBizCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.82rem', outline: 'none' }}
                  >
                    <option value="Salon & Hair">Salon & Hair</option>
                    <option value="Spa & Massage">Spa & Massage</option>
                    <option value="Dental Clinic">Dental Clinic</option>
                    <option value="Aesthetic Doctor">Aesthetic Doctor</option>
                    <option value="Fitness Studio">Fitness Studio</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Operating City</label>
                  <select
                    value={newBizCity}
                    onChange={(e) => setNewBizCity(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.82rem', outline: 'none' }}
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Owner / Manager Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={newBizOwner}
                  onChange={(e) => setNewBizOwner(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.85rem', outline: 'none' }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366F1, #4F46E5)', color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(99,102,241,0.4)' }}
            >
              Complete Merchant Onboarding
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
