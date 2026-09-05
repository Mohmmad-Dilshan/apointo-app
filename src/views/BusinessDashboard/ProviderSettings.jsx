import React, { useState } from 'react';
import { Save, Building, MapPin, Clock, ShieldCheck, Camera, Phone, Globe, Share2, Star, ChevronRight, Check } from 'lucide-react';
import { usePlatform } from '../../context/PlatformContext';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const OPEN_HOURS = { Mon: '9:00 AM', Tue: '9:00 AM', Wed: '9:00 AM', Thu: '9:00 AM', Fri: '9:00 AM', Sat: '10:00 AM', Sun: null };
const CLOSE_HOURS = { Mon: '8:00 PM', Tue: '8:00 PM', Wed: '8:00 PM', Thu: '8:00 PM', Fri: '8:00 PM', Sat: '6:00 PM', Sun: null };

export default function ProviderSettings() {
  const { businesses, updateBusinessProfile } = usePlatform();
  const biz = businesses.find(b => b.id === 'biz_1') || businesses[0] || {};
  const [saved, setSaved] = useState(false);
  const [bizName, setBizName] = useState(biz.name || 'Urban Cut Studio');
  const [bizAddress, setBizAddress] = useState(biz.address || '100 Feet Rd, Indiranagar, Bengaluru');
  const [bizPhone, setBizPhone] = useState(biz.phone || '+91 80001 00000');
  const [schedule, setSchedule] = useState(
    DAYS.reduce((acc, d) => ({ ...acc, [d]: OPEN_HOURS[d] !== null }), {})
  );
  const [activeSection, setActiveSection] = useState('profile');

  const handleSave = () => {
    updateBusinessProfile(biz.id, {
      name: bizName,
      address: bizAddress,
      phone: bizPhone
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const SECTIONS = [
    { id: 'profile', label: 'Business Profile', icon: '🏢' },
    { id: 'hours', label: 'Working Hours', icon: '🕐' },
    { id: 'policies', label: 'Policies', icon: '📋' },
    { id: 'social', label: 'Social & SEO', icon: '🌐' }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>⚙️ Business Settings</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>Profile, hours, policies & integrations</p>
        </div>
        <button onClick={handleSave} style={{
          padding: '10px 20px', borderRadius: '14px',
          background: saved ? 'linear-gradient(135deg, #10B981, #059669)' : 'linear-gradient(135deg, #6366F1, #4F46E5)',
          color: '#FFFFFF', fontSize: '0.84rem', fontWeight: 800,
          display: 'flex', alignItems: 'center', gap: '6px',
          boxShadow: saved ? '0 6px 18px rgba(16,185,129,0.35)' : '0 6px 18px rgba(79,70,229,0.35)',
          transition: 'all 0.3s'
        }}>
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save Changes</>}
        </button>
      </div>

      {/* Section tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        {SECTIONS.map(sec => (
          <button key={sec.id} onClick={() => setActiveSection(sec.id)} style={{
            padding: '10px 8px', borderRadius: '14px', textAlign: 'center',
            background: activeSection === sec.id ? 'linear-gradient(135deg, #EEF2FF, #E0E7FF)' : '#F8FAFC',
            border: activeSection === sec.id ? '1.5px solid #818CF8' : '1px solid #E2E8F0',
            fontSize: '0.7rem', fontWeight: 800, color: activeSection === sec.id ? '#4F46E5' : '#64748B',
            transition: 'all 0.2s'
          }}>
            <div style={{ fontSize: '1.1rem', marginBottom: '3px' }}>{sec.icon}</div>
            {sec.label}
          </button>
        ))}
      </div>

      {/* ── PROFILE SECTION ── */}
      {activeSection === 'profile' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Photo upload */}
          <div style={{
            background: '#FFFFFF', borderRadius: '22px', padding: '20px',
            border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '16px'
          }}>
            <div style={{ position: 'relative' }}>
              <img src={biz.image || 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200'} alt="" style={{ width: '80px', height: '80px', borderRadius: '20px', objectFit: 'cover', border: '3px solid #E0E7FF' }} />
              <button style={{ position: 'absolute', bottom: '-6px', right: '-6px', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #4F46E5)', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={13} color="#FFFFFF" />
              </button>
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{biz.name}</div>
              <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={11} color="#F59E0B" fill="#F59E0B" /> {biz.rating} • {biz.reviewCount} reviews
              </div>
              <button style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6366F1', marginTop: '4px' }}>Change Cover Photo →</button>
            </div>
          </div>

          {/* Form Fields */}
          <div style={{ background: '#FFFFFF', borderRadius: '22px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: '🏢 Business Name', value: biz.name, type: 'text' },
              { label: '📍 Full Address', value: biz.address, type: 'text' },
              { label: '📞 Contact Number', value: biz.phone || '+91 80001 00000', type: 'tel' },
              { label: '🌐 Website URL', value: 'www.urbancutstudio.in', type: 'url' }
            ].map((field, i) => (
              <div key={i}>
                <label style={{ fontSize: '0.76rem', fontWeight: 800, color: '#475569', marginBottom: '6px', display: 'block' }}>{field.label}</label>
                <input type={field.type} defaultValue={field.value} style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.88rem', fontWeight: 600, color: '#0F172A', boxSizing: 'border-box', outline: 'none' }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── HOURS SECTION ── */}
      {activeSection === 'hours' && (
        <div style={{ background: '#FFFFFF', borderRadius: '22px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>Weekly Schedule</div>
          {DAYS.map((day, i) => (
            <div key={day} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 4px',
              borderBottom: i < DAYS.length - 1 ? '1px solid #F1F5F9' : 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Toggle */}
                <button onClick={() => setSchedule(prev => ({ ...prev, [day]: !prev[day] }))} style={{
                  width: '38px', height: '22px', borderRadius: '999px',
                  background: schedule[day] ? '#6366F1' : '#E2E8F0', position: 'relative', transition: 'background 0.2s'
                }}>
                  <div style={{ position: 'absolute', top: '3px', left: schedule[day] ? '19px' : '3px', width: '16px', height: '16px', borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', transition: 'left 0.2s' }} />
                </button>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: schedule[day] ? '#0F172A' : '#94A3B8', width: '32px' }}>{day}</span>
              </div>
              {schedule[day] ? (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input type="time" defaultValue="09:00" style={{ padding: '4px 8px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.78rem', fontWeight: 700, color: '#0F172A', background: '#F8FAFC' }} />
                  <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>to</span>
                  <input type="time" defaultValue={day === 'Sat' ? '18:00' : '20:00'} style={{ padding: '4px 8px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.78rem', fontWeight: 700, color: '#0F172A', background: '#F8FAFC' }} />
                </div>
              ) : (
                <span style={{ fontSize: '0.76rem', color: '#94A3B8', fontWeight: 700 }}>Closed</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── POLICIES SECTION ── */}
      {activeSection === 'policies' && (
        <div style={{ background: '#FFFFFF', borderRadius: '22px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { label: '🚫 Cancellation Policy', value: biz.cancellationPolicy || 'Free cancellation up to 2 hours before appointment. Late cancellations may incur a 20% fee.', rows: 3 },
            { label: '💰 Deposit Policy', value: 'No deposit required for bookings under ₹500. Premium services require 30% advance.', rows: 3 },
            { label: '⏱️ Appointment Buffer (minutes)', value: '15', rows: 1, type: 'number' }
          ].map((field, i) => (
            <div key={i}>
              <label style={{ fontSize: '0.76rem', fontWeight: 800, color: '#475569', marginBottom: '6px', display: 'block' }}>{field.label}</label>
              {field.rows > 1 ? (
                <textarea rows={field.rows} defaultValue={field.value} style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.88rem', resize: 'none', color: '#0F172A', boxSizing: 'border-box' }} />
              ) : (
                <input type={field.type || 'text'} defaultValue={field.value} style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.88rem', fontWeight: 600, color: '#0F172A', boxSizing: 'border-box' }} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── SOCIAL SECTION ── */}
      {activeSection === 'social' && (
        <div style={{ background: '#FFFFFF', borderRadius: '22px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { label: '📸 Instagram Handle', placeholder: '@urbancutstudio' },
            { label: '📘 Facebook Page URL', placeholder: 'facebook.com/urbancutstudio' },
            { label: '🔍 SEO Meta Description', placeholder: 'Best hair salon in Indiranagar Bangalore...', rows: 3 },
            { label: '🏷️ Google Business Tags', placeholder: 'hair salon, barber, hair color, indiranagar' }
          ].map((field, i) => (
            <div key={i}>
              <label style={{ fontSize: '0.76rem', fontWeight: 800, color: '#475569', marginBottom: '6px', display: 'block' }}>{field.label}</label>
              {field.rows ? (
                <textarea rows={field.rows} placeholder={field.placeholder} style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.88rem', resize: 'none', boxSizing: 'border-box' }} />
              ) : (
                <input placeholder={field.placeholder} style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1.5px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.88rem', fontWeight: 600, boxSizing: 'border-box' }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
