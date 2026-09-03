import React, { useState } from 'react';
import { ArrowLeft, Search, Star, Clock, Heart, ShieldCheck, Filter, ChevronRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/sampleData';
import { usePlatform } from '../../context/PlatformContext';

export default function CategoryDetailScreen({ category, onBack, onSelectBusiness, favorites, onToggleFavorite }) {
  const { businesses } = usePlatform();
  const [activeSubCategory, setActiveSubCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPill, setFilterPill] = useState('all');

  const catObj = CATEGORIES.find(c => c.id === (category?.id || category)) || CATEGORIES[0];

  const categoryIcons = {
    haircut: '✂️',
    salon: '✨',
    spa: '🌿',
    hotel: '🏨',
    dining: '🍽️',
    gym: '🏋️',
    yoga: '🧘',
    photography: '📸',
    petcare: '🐾',
    doctor: '🩺',
    dental: '🦷',
    tattoo: '🎨',
    carservice: '🚗',
    rentals: '🚙',
    homeservice: '🧹',
    fitness: '🏃'
  };

  const categoryEmoji = categoryIcons[catObj.id] || (typeof category?.icon === 'string' && category.icon.length <= 4 ? category.icon : '✨');
  const categoryTitleName = category?.name || catObj.name;

  const subCategoriesMap = {
    haircut: [
      { id: 'all', label: 'All Services' },
      { id: 'fade', label: 'Fade & Crop Cut' },
      { id: 'beard', label: 'Beard Grooming' },
      { id: 'spa', label: 'Hair Spa & Scalp' },
      { id: 'color', label: 'Hair Color' }
    ],
    salon: [
      { id: 'all', label: 'All Salon Services' },
      { id: 'facial', label: 'Facials & Cleanup' },
      { id: 'waxing', label: 'Waxing & Threading' },
      { id: 'makeup', label: 'Party Makeup' },
      { id: 'manicure', label: 'Nails & Pedicure' }
    ],
    spa: [
      { id: 'all', label: 'All Massages' },
      { id: 'aroma', label: 'Aroma Therapy' },
      { id: 'deep_tissue', label: 'Deep Tissue' },
      { id: 'swedish', label: 'Swedish Massage' },
      { id: 'foot', label: 'Reflexology' }
    ],
    hotel: [
      { id: 'all', label: 'All Stays' },
      { id: 'day_use', label: 'Day-Use Rooms' },
      { id: 'suites', label: 'Luxury Suites' },
      { id: 'pool_villa', label: 'Pool Villas' },
      { id: 'resorts', label: 'Weekend Getaway' }
    ],
    dining: [
      { id: 'all', label: 'All Dining' },
      { id: 'table', label: 'VIP Table Booking' },
      { id: 'rooftop', label: 'Rooftop Lounges' },
      { id: 'tasting', label: 'Chef Tasting Menu' },
      { id: 'brunch', label: 'Sunday Brunch' }
    ],
    gym: [
      { id: 'all', label: 'All Fitness' },
      { id: 'pass', label: 'Day Pass' },
      { id: 'trainer', label: 'Personal Trainer' },
      { id: 'crossfit', label: 'Crossfit & HIIT' },
      { id: 'yoga', label: 'Strength Training' }
    ],
    yoga: [
      { id: 'all', label: 'All Mind & Body' },
      { id: 'pilates', label: 'Reformer Pilates' },
      { id: 'sound', label: 'Sound Meditation' },
      { id: 'ashtanga', label: 'Ashtanga Yoga' },
      { id: 'breathwork', label: 'Breathwork Healing' }
    ],
    photography: [
      { id: 'all', label: 'All Studios' },
      { id: 'podcast', label: 'Podcast Studio' },
      { id: 'portraits', label: 'Fashion Portraits' },
      { id: 'prewedding', label: 'Pre-Wedding Shoot' },
      { id: 'commercial', label: 'Product & Ad Shoots' }
    ],
    petcare: [
      { id: 'all', label: 'All Pet Care' },
      { id: 'grooming', label: 'Royal Bath & Groom' },
      { id: 'vet', label: 'Vet Checkup' },
      { id: 'daycare', label: 'Dog Daycare & Pool' },
      { id: 'boarding', label: 'Luxury Boarding' }
    ],
    doctor: [
      { id: 'all', label: 'All Doctors' },
      { id: 'general', label: 'General Physician' },
      { id: 'dermatologist', label: 'Dermatologist' },
      { id: 'pediatrician', label: 'Pediatrician' },
      { id: 'ortho', label: 'Orthopedic' }
    ],
    dental: [
      { id: 'all', label: 'All Treatments' },
      { id: 'scaling', label: 'Teeth Scaling' },
      { id: 'whitening', label: 'Laser Whitening' },
      { id: 'braces', label: 'Aligners & Braces' },
      { id: 'root_canal', label: 'Root Canal' }
    ],
    tattoo: [
      { id: 'all', label: 'All Body Art' },
      { id: 'fineline', label: 'Fine-Line Tattoo' },
      { id: 'custom', label: 'Custom Minimalist' },
      { id: 'piercing', label: 'Titanium Piercing' },
      { id: 'touchup', label: 'Touch-up & Cover' }
    ],
    carservice: [
      { id: 'all', label: 'All Auto Care' },
      { id: 'wash', label: 'Foam Car Wash' },
      { id: 'service', label: 'Full Periodic Service' },
      { id: 'detailing', label: 'Ceramic Coating' },
      { id: 'bike', label: 'Bike Washing' }
    ],
    rentals: [
      { id: 'all', label: 'All Rentals' },
      { id: 'chauffeur', label: 'Mercedes VIP Drop' },
      { id: 'selfdrive', label: 'Self-Drive Thar 4x4' },
      { id: 'ev', label: 'EV Hyper-Charge Slot' },
      { id: 'luxury', label: 'Luxury Sedans' }
    ],
    homeservice: [
      { id: 'all', label: 'All Home Care' },
      { id: 'cleaning', label: 'Deep Home Cleaning' },
      { id: 'plumbing', label: 'Plumbing Repair' },
      { id: 'electrician', label: 'Electrical Work' },
      { id: 'appliance', label: 'AC Repair & Service' }
    ]
  };

  const subCategories = subCategoriesMap[catObj.id] || subCategoriesMap.haircut;

  const categoryBusinesses = (businesses || []).filter(biz => {
    const targetId = (catObj?.id || category?.id || category || '').toLowerCase();
    const targetName = (categoryTitleName || '').toLowerCase();

    const matchesId = biz.categoryId && biz.categoryId.toLowerCase() === targetId;
    const matchesCategoryName = biz.category && (
      biz.category.toLowerCase() === targetId ||
      biz.category.toLowerCase() === targetName ||
      biz.category.toLowerCase().includes(targetId)
    );

    if (!matchesId && !matchesCategoryName) return false;
    if (searchQuery && !biz.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (filterPill === 'open') return biz.isOpen;
    if (filterPill === 'under500') return biz.services.some(s => s.price <= 500);
    if (filterPill === 'top_rated') return biz.rating >= 4.5;
    return true;
  });

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '30px' }} className="animate-fade-in">
      {/* Top Header Bar: Midnight Gradient Mesh Container */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '20px 20px 24px',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 16px 40px rgba(15,23,42,0.38)',
        color: '#FFFFFF'
      }}>
        {/* Navigation & Title Header */}
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
            <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.01em' }}>
              <span>{categoryEmoji}</span>
              <span>{categoryTitleName} Studios & Services</span>
            </h1>
            <p style={{ fontSize: '0.78rem', color: '#C7D2FE' }}>
              {categoryBusinesses.length} verified providers near you
            </p>
          </div>
        </div>

        {/* In-Category Search Bar */}
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
          marginBottom: '16px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
        }}>
          <Search size={18} color="#A5B4FC" />
          <input
            type="text"
            placeholder={`Search ${categoryTitleName} services or studios...`}
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

        {/* Sub-Category Filter Pills Bar */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }} className="no-scrollbar">
          {subCategories.map(sub => {
            const isSelected = activeSubCategory === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setActiveSubCategory(sub.id)}
                style={{
                  flexShrink: 0,
                  padding: '7px 14px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: isSelected ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' : 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: isSelected ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isSelected ? '0 6px 18px rgba(99,102,241,0.45)' : 'none',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {sub.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Promotional Banner */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
          borderRadius: '24px',
          padding: '18px 20px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(79,70,229,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{ fontSize: '0.68rem', background: 'rgba(255,255,255,0.24)', backdropFilter: 'blur(8px)', padding: '3px 8px', borderRadius: '6px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px', display: 'inline-block' }}>
              Category Offer
            </span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Flat ₹150 OFF on {categoryTitleName}</h3>
            <p style={{ fontSize: '0.78rem', opacity: 0.9 }}>Use code APO150 at checkout</p>
          </div>

          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '18px',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
          }}>
            {categoryEmoji}
          </div>
        </div>
      </div>

      {/* Quick Filter Controls */}
      <div style={{ padding: '20px 20px 0', display: 'flex', gap: '8px' }}>
        {[
          { id: 'all', label: 'All Salons' },
          { id: 'open', label: '⚡ Open Now' },
          { id: 'under500', label: '🏷️ Under ₹500' },
          { id: 'top_rated', label: '⭐ 4.5+ Rating' }
        ].map(p => (
          <button
            key={p.id}
            onClick={() => setFilterPill(p.id)}
            style={{
              padding: '6px 12px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              background: filterPill === p.id ? '#4F46E5' : '#FFFFFF',
              color: filterPill === p.id ? '#FFFFFF' : '#475569',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Providers Listings Grid */}
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {categoryBusinesses.length === 0 ? (
          <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '32px', textAlign: 'center', border: '1px dashed #CBD5E1' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>No {catObj.name} studios found</h4>
            <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '4px 0 16px' }}>Try resetting your sub-category or search query</p>
            <button
              onClick={() => { setSearchQuery(''); setFilterPill('all'); setActiveSubCategory('all'); }}
              style={{ padding: '10px 20px', borderRadius: '999px', background: '#4F46E5', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700 }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          categoryBusinesses.map(biz => (
            <div
              key={biz.id}
              onClick={() => onSelectBusiness(biz)}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                boxShadow: '0 6px 20px rgba(15,23,42,0.04)',
                cursor: 'pointer'
              }}
            >
              {/* Image & Badges */}
              <div style={{ height: '150px', position: 'relative' }}>
                <img src={biz.heroImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleFavorite(biz.id); }}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <Heart size={18} color={favorites?.includes(biz.id) ? '#EF4444' : '#64748B'} fill={favorites?.includes(biz.id) ? '#EF4444' : 'none'} />
                </button>

                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Clock size={12} />
                  <span>Next: {biz.nextSlot}</span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#FEF3C7', padding: '2px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, color: '#D97706' }}>
                    <Star size={12} fill="#D97706" />
                    <span>{biz.rating}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '12px' }}>{biz.address} • {biz.distance}</p>

                {/* Popular Services Chips */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {biz.services.slice(0, 3).map(s => (
                    <span key={s.id} style={{ fontSize: '0.72rem', background: '#F1F5F9', color: '#475569', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                      {s.name} (₹{s.price})
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Starts at</span>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</div>
                  </div>

                  <button style={{
                    padding: '8px 18px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(79,70,229,0.25)'
                  }}>
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
