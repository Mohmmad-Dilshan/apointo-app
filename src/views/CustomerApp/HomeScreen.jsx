import React, { useState, useEffect } from 'react';
import { MapPin, Bell, Search, Mic, Star, Clock, ChevronRight, Tag, Heart, ShieldCheck, RotateCcw, Zap, Filter, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/sampleData';
import { usePlatform } from '../../context/PlatformContext';

export default function HomeScreen({ user, onOpenLocation, onOpenNotifications, onNavigateScreen, onSelectCategory, onSelectBusiness, favorites, onToggleFavorite, onQuickRebook, onOpenVoiceSearch }) {
  const { businesses, bookings } = usePlatform();
  const [activeFilterPill, setActiveFilterPill] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeBooking = (bookings || []).find(
    (b) => b.status === 'Confirmed' || b.status === 'Waiting in Lounge' || b.status === 'In Service'
  );

  const heroBanners = [
    {
      id: 'b1',
      title: "Flat 25% OFF Spa & Beauty",
      sub: "Use code GLOW50 on your first booking",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      tag: "SPECIAL OFFER",
      icon: "💆‍♀️"
    },
    {
      id: 'b2',
      title: "Premium Men's Styling Combo",
      sub: "Haircut + Hot Towel Beard Trim at ₹499",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      tag: "BEST SELLER",
      icon: "💇‍♂️"
    },
    {
      id: 'b3',
      title: "Free Intraoral Dental Scan",
      sub: "Complimentary checkup with scaling",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      tag: "LIMITED TIME",
      icon: "🦷"
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroBanners.length);
    }, 3500);
    return () => clearInterval(slideTimer);
  }, []);

  const filterPills = [
    { id: 'all', label: 'All Providers' },
    { id: 'open', label: '⚡ Open Now' },
    { id: 'under500', label: '🏷️ Under ₹500' },
    { id: 'top_rated', label: '⭐ 4.5+ Rating' },
    { id: 'verified', label: '🛡️ Verified Only' }
  ];

  const handleCategoryClick = (cat) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    } else {
      if (selectedCategory === cat.id) {
        setSelectedCategory(null);
      } else {
        setSelectedCategory(cat.id);
      }
    }
  };

  const displayedBusinesses = (businesses || []).filter(biz => {
    if (selectedCategory && biz.categoryId !== selectedCategory && !biz.category.toLowerCase().includes(selectedCategory)) {
      return false;
    }
    if (activeFilterPill === 'open') return biz.isOpen;
    if (activeFilterPill === 'under500') return biz.services.some(s => s.price <= 500);
    if (activeFilterPill === 'top_rated') return biz.rating >= 4.5;
    if (activeFilterPill === 'verified') return biz.verified;
    return true;
  });

  return (
    <div style={{ background: '#F8FAFC', paddingBottom: '20px' }} className="animate-fade-in">
      {/* Top Header: Dark Midnight Gradient Mesh Container */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '18px 20px 22px',
        borderBottomLeftRadius: '28px',
        borderBottomRightRadius: '28px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        borderBottom: '1px solid rgba(255,255,255,0.12)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          {/* Location Selector */}
          <button
            onClick={onOpenLocation}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left' }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MapPin size={18} color="#A5B4FC" />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#A5B4FC', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>{user.location}</span>
                <ChevronRight size={14} color="#C7D2FE" />
              </div>
            </div>
          </button>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onOpenNotifications}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <Bell size={18} color="#FFFFFF" />
              <span style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#F43F5E',
                boxShadow: '0 0 8px #F43F5E'
              }} />
            </button>

            <button
              onClick={() => onNavigateScreen('profile')}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '2px solid #8B5CF6',
                boxShadow: '0 0 12px rgba(139,92,246,0.5)'
              }}
            >
              <img src={user.avatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          </div>
        </div>

        {/* Greeting Banner */}
        <div style={{ marginBottom: activeBooking ? '12px' : '18px' }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Good morning, {user.firstName} 👋
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#C7D2FE' }}>Book trusted services near you in seconds</p>
        </div>

        {/* Live Active Booking Tracker Card */}
        {activeBooking && (
          <div
            onClick={() => onNavigateScreen('bookings')}
            style={{
              marginBottom: '16px',
              background: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '18px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={18} color="#A5B4FC" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{
                    fontSize: '0.64rem',
                    background: activeBooking.status === 'In Service' ? '#10B981' : activeBooking.status === 'Waiting in Lounge' ? '#F59E0B' : '#6366F1',
                    color: '#FFFFFF',
                    padding: '1px 6px',
                    borderRadius: '4px',
                    fontWeight: 800
                  }}>
                    {activeBooking.status}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: '#C7D2FE', fontWeight: 700 }}>
                    {activeBooking.time} Today
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
                  {activeBooking.serviceName} • {activeBooking.businessName}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C7D2FE', fontSize: '0.74rem', fontWeight: 800 }}>
              <span>Pass</span>
              <ChevronRight size={14} />
            </div>
          </div>
        )}

        {/* Translucent Glass Search Bar Input with Voice Trigger */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          <button
            onClick={() => onNavigateScreen('search')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '12px 16px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#C7D2FE' }}>
              <Search size={18} color="#A5B4FC" />
              <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)' }}>Search salons, gyms, doctors...</span>
            </div>
          </button>

          <button
            onClick={onOpenVoiceSearch}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px rgba(99,102,241,0.4)'
            }}
          >
            <Mic size={20} color="#FFFFFF" />
          </button>
        </div>

        {/* Instant Filter Chips Bar */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }} className="no-scrollbar">
          {filterPills.map(pill => {
            const isActive = activeFilterPill === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setActiveFilterPill(pill.id)}
                style={{
                  flexShrink: 0,
                  padding: '7px 14px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: isActive ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' : 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isActive ? '0 6px 18px rgba(99,102,241,0.45)' : 'none',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Real Image Hero Promotional Banner Carousel */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          height: '200px',
          borderRadius: '26px',
          padding: '22px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 14px 32px rgba(15,23,42,0.18)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          {/* Real Background Image */}
          <img
            src={heroBanners[currentSlide].image}
            alt={heroBanners[currentSlide].title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          />

          {/* Dark Glass Scrim Gradient Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.88) 100%)',
            backdropFilter: 'blur(1px)',
            zIndex: 2
          }} />

          {/* Floating 3D Graphic Glass Badge */}
          <div style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '52px',
            height: '52px',
            borderRadius: '18px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.7rem',
            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
            zIndex: 3
          }}>
            {heroBanners[currentSlide].icon}
          </div>

          {/* Top Tag & Title Content */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '4px 10px',
              borderRadius: '999px',
              fontSize: '0.66rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              <Sparkles size={12} color="#FFFFFF" />
              <span>{heroBanners[currentSlide].tag}</span>
            </div>

            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '4px',
              maxWidth: '78%',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}>
              {heroBanners[currentSlide].title}
            </h3>
            <p style={{ fontSize: '0.8rem', opacity: 0.95, textShadow: '0 1px 6px rgba(0,0,0,0.4)', maxWidth: '80%' }}>
              {heroBanners[currentSlide].sub}
            </p>
          </div>

          {/* Bottom Action & Controls */}
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button
              onClick={() => onNavigateScreen('search')}
              style={{
                padding: '9px 18px',
                borderRadius: '999px',
                background: '#FFFFFF',
                color: '#0F172A',
                fontSize: '0.8rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
              }}
            >
              <span>Claim Offer</span>
              <ChevronRight size={14} color="#0F172A" />
            </button>

            {/* Dots Indicator */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {heroBanners.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '999px',
                    background: currentSlide === idx ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Categories Bar with 3D Gradient Badges */}
      <div style={{ padding: '24px 0 0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>Quick Categories</h2>
          <button onClick={() => onNavigateScreen('all-categories')} style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5' }}>See All →</button>
        </div>

        <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingRight: '20px', paddingBottom: '6px' }} className="no-scrollbar">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '22px',
                  background: isSelected ? 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)' : '#FFFFFF',
                  border: isSelected ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isSelected ? '0 8px 20px rgba(79,70,229,0.25)' : '0 4px 14px rgba(15,23,42,0.04)',
                  fontSize: '1.5rem',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: isSelected ? 'scale(1.06)' : 'scale(1)'
                }}>
                  {cat.emoji || '✨'}
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: isSelected ? 800 : 700, color: isSelected ? '#4F46E5' : '#334155', whiteSpace: 'nowrap' }}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rebook Section */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
          borderRadius: '20px',
          padding: '16px',
          border: '1px solid #C7D2FE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4338CA', textTransform: 'uppercase', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RotateCcw size={12} />
              <span>Quick Repeat Booking</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>Urban Cut Studio</div>
            <p style={{ fontSize: '0.78rem', color: '#475569' }}>Classic Haircut • Rahul Sharma</p>
          </div>
          <button
            onClick={() => onQuickRebook(BUSINESSES[0])}
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              background: '#4F46E5',
              color: '#FFFFFF',
              fontSize: '0.82rem',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(79,70,229,0.3)'
            }}
          >
            Book Again
          </button>
        </div>
      </div>

      {/* Nearby Businesses */}
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
              {activeFilterPill === 'all' ? 'Nearby Businesses' : `Filtered Results (${displayedBusinesses.length})`}
            </h2>
            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Verified providers within 3 km</p>
          </div>
          <button onClick={() => onNavigateScreen('map')} style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5' }}>Map View</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {displayedBusinesses.length === 0 ? (
            <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '32px', textAlign: 'center', border: '1px dashed #CBD5E1' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>No providers found</h4>
              <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '4px 0 16px' }}>Try resetting your category or filter selection</p>
              <button
                onClick={() => { setActiveFilterPill('all'); setSelectedCategory(null); }}
                style={{ padding: '8px 16px', borderRadius: '999px', background: '#4F46E5', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700 }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            displayedBusinesses.map(biz => (
              <div
                key={biz.id}
                onClick={() => onSelectBusiness(biz)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  cursor: 'pointer'
                }}
              >
                {/* Image & Badges */}
                <div style={{ height: '150px', position: 'relative' }}>
                  <img src={biz.heroImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    gap: '6px'
                  }}>
                    {biz.verified && (
                      <span className="badge badge-success" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                        <ShieldCheck size={12} /> Verified
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleFavorite(biz.id); }}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <Heart size={18} color={favorites.includes(biz.id) ? '#EF4444' : '#64748B'} fill={favorites.includes(biz.id) ? '#EF4444' : 'none'} />
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

                {/* Business Info Details */}
                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#FEF3C7', padding: '2px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, color: '#D97706' }}>
                      <Star size={12} fill="#D97706" />
                      <span>{biz.rating}</span>
                      <span style={{ color: '#92400E', fontWeight: 500 }}>({biz.reviewCount})</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '10px' }}>{biz.category} • {biz.distance}</p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Starts at</span>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#4F46E5' }}>{biz.priceRange}</div>
                    </div>

                    <button style={{
                      padding: '8px 16px',
                      borderRadius: '999px',
                      background: '#4F46E5',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 700
                    }}>
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Brand Trust Footer (Rapido / Blinkit Style with Sparkles Logo Mark - NO LETTER A) */}
        <div style={{
          marginTop: '32px',
          marginBottom: '16px',
          padding: '20px 16px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          background: 'linear-gradient(180deg, rgba(241,245,249,0) 0%, rgba(238,242,255,0.6) 100%)',
          borderRadius: '20px',
          border: '1px solid #E0E7FF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 10px rgba(99,102,241,0.3)'
            }}>
              <Sparkles size={16} color="#FFFFFF" />
            </div>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>Apo</span>
          </div>

          <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4338CA' }}>
            ⚡ India's #1 On-Demand Service & Appointment Platform
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.7rem', color: '#64748B', fontWeight: 600, marginTop: '2px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>🛡️ 100% Verified Partners</span>
            <span>•</span>
            <span>⚡ Instant Confirmation</span>
            <span>•</span>
            <span>✨ Zero Wait Time</span>
          </div>
        </div>
      </div>
    </div>
  );
}
