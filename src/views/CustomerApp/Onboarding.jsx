import React, { useState } from 'react';
import { ChevronRight, Sparkles, Calendar, CreditCard, ShieldCheck } from 'lucide-react';

export default function Onboarding({ onFinish }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Discover services near you",
      description: "Explore top-rated salons, spas, fitness centers, doctors & home services around your area.",
      icon: <Sparkles size={40} color="#4F46E5" />,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Book your perfect time",
      description: "Select your favorite staff member, check real-time availability, and pick convenient slots.",
      icon: <Calendar size={40} color="#06B6D4" />,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Pay securely & instant confirmation",
      description: "Pay via UPI, Cards, Netbanking or Cash. Instant QR ticket and automated SMS/WhatsApp reminder.",
      icon: <CreditCard size={40} color="#10B981" />,
      image: "https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Manage everything in one place",
      description: "Reschedule, cancel, earn Apointo reward points, write reviews, and rebook with 1 tap.",
      icon: <ShieldCheck size={40} color="#F59E0B" />,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div style={{
      height: '100%',
      minHeight: '700px',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px',
      position: 'relative'
    }}>
      {/* Top Header Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: idx === currentSlide ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: idx === currentSlide ? '#4F46E5' : '#E2E8F0',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
        <button
          onClick={onFinish}
          style={{ fontSize: '0.88rem', fontWeight: 600, color: '#64748B' }}
        >
          Skip
        </button>
      </div>

      {/* Slide Visual Content */}
      <div style={{ margin: '30px 0', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '100%',
          height: '240px',
          borderRadius: '24px',
          overflow: 'hidden',
          marginBottom: '28px',
          boxShadow: '0 12px 28px rgba(0,0,0,0.1)'
        }}>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
          {slides[currentSlide].title}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, maxWidth: '320px' }}>
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Bottom CTA Button */}
      <div>
        <button
          onClick={handleNext}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '1rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
