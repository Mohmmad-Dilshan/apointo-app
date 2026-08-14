import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, Calendar, ShieldCheck, Check } from 'lucide-react';

export default function PersonalInfoScreen({ user, onBack, onSaveUser }) {
  const [formData, setFormData] = useState({
    name: user?.name || "Dilshan Perera",
    phone: user?.phone || "+91 98765 43210",
    email: user?.email || "dilshan.p@example.com",
    gender: "Male",
    dob: "1996-08-24",
    emergencyContact: "+91 98765 00000"
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSaveUser) {
      onSaveUser(formData);
    }
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onBack();
    }, 1200);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Dark Midnight Header */}
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
            Account Settings
          </span>
          <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Personal Information 👤
          </h1>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '22px', padding: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(15,23,42,0.03)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Full Name */}
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
              Full Name
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '14px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  outline: 'none',
                  background: '#F8FAFC'
                }}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
              Phone Number
            </label>
            <div style={{ position: 'relative' }}>
              <Phone size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '14px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  outline: 'none',
                  background: '#F8FAFC'
                }}
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '14px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  outline: 'none',
                  background: '#F8FAFC'
                }}
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
              Date of Birth
            </label>
            <div style={{ position: 'relative' }}>
              <Calendar size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="date"
                value={formData.dob}
                onChange={e => setFormData({ ...formData, dob: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '14px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  outline: 'none',
                  background: '#F8FAFC'
                }}
              />
            </div>
          </div>

        </div>

        {/* Save Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: isSaved ? '#10B981' : '#4F46E5',
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
          {isSaved ? <Check size={20} /> : null}
          <span>{isSaved ? 'Changes Saved!' : 'Save Personal Info'}</span>
        </button>
      </form>
    </div>
  );
}
