import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronRight, Sparkles, Star, Zap, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../../data/sampleData';

export default function AllCategoriesScreen({ onBack, onSelectCategory }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categoryGroups = [
    {
      title: "Beauty & Personal Care",
      icon: "💇‍♂️",
      tagline: "Salons, Haircuts, Spa & Skincare",
      accent: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
      categories: [
        { id: 'haircut', name: 'Haircut & Styling', icon: '✂️', count: '18 Studios near you', offer: 'Flat 25% OFF', desc: 'Men & Women haircut, beard styling & scalp care', bgGradient: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)', borderColor: 'rgba(99,102,241,0.25)' },
        { id: 'salon', name: 'Salon & Makeover', icon: '✨', count: '24 Salons near you', offer: 'Combos @ ₹499', desc: 'Facial, waxing, manicure, pedicure & party makeup', bgGradient: 'linear-gradient(135deg, #F3E8FF 0%, #F5D0FE 100%)', borderColor: 'rgba(168,85,247,0.25)' },
        { id: 'spa', name: 'Luxury Spa & Massage', icon: '🌿', count: '12 Retreats near you', offer: 'Up to 30% OFF', desc: 'Aroma therapy, deep tissue & body reflexology', bgGradient: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)', borderColor: 'rgba(16,185,129,0.25)' }
      ]
    },
    {
      title: "Health & Medical Care",
      icon: "🩺",
      tagline: "Doctors, Dentists & Health Checks",
      accent: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
      categories: [
        { id: 'doctor', name: 'Doctor Consultation', icon: '🩺', count: '15 Clinics near you', offer: 'Instant Slot', desc: 'General physician, dermatologist & specialists', bgGradient: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)', borderColor: 'rgba(14,165,233,0.25)' },
        { id: 'dental', name: 'Dental Scan & Care', icon: '🦷', count: '9 Clinics near you', offer: 'Free Dental Scan', desc: 'Teeth scaling, whitening, braces & root canal', bgGradient: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)', borderColor: 'rgba(56,189,248,0.25)' }
      ]
    },
    {
      title: "Fitness & Wellness",
      icon: "🏋️",
      tagline: "Gyms, Yoga, Trainers & Day Pass",
      accent: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      categories: [
        { id: 'gym', name: 'Gym & Fitness Clubs', icon: '🏋️', count: '14 Gyms near you', offer: 'Day Pass @ ₹99', desc: 'Fitness clubs, personal training & crossfit', bgGradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', borderColor: 'rgba(245,158,11,0.25)' }
      ]
    },
    {
      title: "Vehicle & Home Services",
      icon: "🚗",
      tagline: "Car Wash, Repairs & House Cleaning",
      accent: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      categories: [
        { id: 'carservice', name: 'Car & Bike Service', icon: '🚗', count: '11 Centers near you', offer: 'Foam Wash @ ₹199', desc: 'Periodic car service, detailing & foam washing', bgGradient: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)', borderColor: 'rgba(99,102,241,0.25)' },
        { id: 'homeservice', name: 'Deep Home Cleaning', icon: '🧹', count: '16 Experts near you', offer: '10% Cashback', desc: 'AC repair, plumbing, electrical & home cleaning', bgGradient: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)', borderColor: 'rgba(239,68,68,0.25)' }
      ]
    }
  ];

  const filteredGroups = categoryGroups.map(group => {
    const matchingCats = group.categories.filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...group, categories: matchingCats };
  }).filter(group => group.categories.length > 0);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '30px' }} className="animate-fade-in">
      {/* Top Header: Dark Midnight Mesh Container */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '20px 20px 24px',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 16px 40px rgba(15,23,42,0.38)',
        color: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
          <button
            onClick={onBack}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
            }}
          >
            <ArrowLeft size={20} color="#FFFFFF" />
          </button>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.25)', padding: '2px 8px', borderRadius: '999px', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#A5B4FC', marginBottom: '3px' }}>
              <Sparkles size={10} color="#A5B4FC" />
              <span>Full Service Directory</span>
            </div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>All Categories</h1>
          </div>
        </div>

        {/* Translucent Glass Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '12px 16px',
          borderRadius: '18px',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
        }}>
          <Search size={18} color="#A5B4FC" />
          <input
            type="text"
            placeholder="Search 30+ services (e.g. Haircut, Spa, Dental)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              background: 'transparent',
              fontSize: '0.88rem',
              color: '#FFFFFF',
              fontWeight: 500,
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Category Groups Directory (Apple HIG Card Grid) */}
      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {filteredGroups.map((group, gIdx) => (
          <div key={gIdx}>
            {/* Section Badge Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: group.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
              }}>
                {group.icon}
              </div>

              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>{group.title}</h2>
                <p style={{ fontSize: '0.78rem', color: '#64748B' }}>{group.tagline}</p>
              </div>
            </div>

            {/* Apple HIG Glassmorphic Category Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {group.categories.map(cat => (
                <div
                  key={cat.id}
                  onClick={() => onSelectCategory(cat)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '16px 18px',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* 3D Glass Squircle Icon Badge */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '20px',
                      background: cat.bgGradient,
                      border: `1px solid ${cat.borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      boxShadow: '0 8px 20px rgba(15,23,42,0.06)'
                    }}>
                      {cat.icon}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                        <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>{cat.name}</h3>
                        {cat.offer && (
                          <span style={{
                            fontSize: '0.65rem',
                            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                            color: '#FFFFFF',
                            padding: '3px 8px',
                            borderRadius: '999px',
                            fontWeight: 800,
                            boxShadow: '0 2px 6px rgba(245,158,11,0.3)'
                          }}>
                            {cat.offer}
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.3, marginBottom: '6px', maxWidth: '92%' }}>
                        {cat.desc}
                      </p>

                      <span style={{ fontSize: '0.74rem', color: '#4F46E5', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Zap size={12} color="#4F46E5" fill="#4F46E5" />
                        <span>{cat.count}</span>
                      </span>
                    </div>
                  </div>

                  {/* Apple HIG Action Capsule Button */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                    border: '1px solid #C7D2FE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(79,70,229,0.15)'
                  }}>
                    <ChevronRight size={18} color="#4F46E5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

