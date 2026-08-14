import React, { useState } from 'react';
import { ArrowLeft, Bell, MessageSquare, Mail, Smartphone, ShieldCheck, Check } from 'lucide-react';

export default function NotificationPreferencesScreen({ onBack }) {
  const [prefs, setPrefs] = useState({
    appointmentReminders: true,
    whatsappUpdates: true,
    promotionalOffers: true,
    smsNotifications: true,
    emailInvoices: true
  });

  const [saved, setSaved] = useState(false);

  const toggle = (key) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onBack();
    }, 1200);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Dark Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #311B92 100%)',
        padding: '24px 20px 24px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '28px',
        borderBottomRightRadius: '28px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        display: 'flex',
        alignItems: 'center',
        gap: '14px'
      }}>
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
            Rewards & Support
          </span>
          <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Notification Preferences 🔔
          </h1>
        </div>
      </div>

      {/* Preferences List */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 16px rgba(15,23,42,0.03)' }}>
          {[
            { key: 'appointmentReminders', title: 'Appointment Reminders', desc: 'Get SMS & push alerts 1 hour before your slot', icon: <Bell size={20} color="#4F46E5" /> },
            { key: 'whatsappUpdates', title: 'WhatsApp Instant Updates', desc: 'Receive booking confirmation & OTP on WhatsApp', icon: <MessageSquare size={20} color="#10B981" /> },
            { key: 'promotionalOffers', title: 'Special Offers & Cashback', desc: 'Alerts for 50% OFF flash sales & coupon codes', icon: <Smartphone size={20} color="#F59E0B" /> },
            { key: 'emailInvoices', title: 'Email Invoices & Receipts', desc: 'Automated PDF bills sent after service completion', icon: <Mail size={20} color="#06B6D4" /> }
          ].map((item, idx, arr) => (
            <div
              key={item.key}
              onClick={() => toggle(item.key)}
              style={{
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #F1F5F9',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px' }}>{item.desc}</p>
                </div>
              </div>

              {/* iOS Switch Toggle */}
              <div style={{
                width: '46px',
                height: '26px',
                borderRadius: '999px',
                background: prefs[item.key] ? '#4F46E5' : '#CBD5E1',
                padding: '3px',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  transform: prefs[item.key] ? 'translateX(20px)' : 'translateX(0)',
                  transition: 'transform 0.25s ease'
                }} />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: saved ? '#10B981' : '#4F46E5',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            fontWeight: 800,
            boxShadow: '0 8px 24px rgba(79,70,229,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.3s ease'
          }}
        >
          {saved ? <Check size={20} /> : null}
          <span>{saved ? 'Preferences Saved!' : 'Save Notification Preferences'}</span>
        </button>
      </div>
    </div>
  );
}
