import React, { useState } from 'react';
import { ArrowLeft, UserCheck, Star, ChevronRight, Check } from 'lucide-react';

export default function StaffSelectionScreen({ staffList, onBack, onSelectStaff }) {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const anyStaffOption = {
    id: 'any',
    name: 'Any Available Specialist',
    role: 'Fastest Booking Slot',
    rating: 4.9,
    photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
  };

  const handleContinue = () => {
    onSelectStaff(selectedStaff || anyStaffOption);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Top Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Select Specialist</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Choose who performs your service</p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Any Available Option */}
        <div
          onClick={() => setSelectedStaff(anyStaffOption)}
          style={{
            background: selectedStaff?.id === 'any' ? '#EEF2FF' : '#FFFFFF',
            borderRadius: '20px',
            padding: '16px',
            border: selectedStaff?.id === 'any' ? '2px solid #4F46E5' : '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#4F46E5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              <UserCheck size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{anyStaffOption.name}</h4>
              <p style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700 }}>⚡️ Get earliest available time slot</p>
            </div>
          </div>
          {selectedStaff?.id === 'any' && <Check size={20} color="#4F46E5" />}
        </div>

        {/* Staff Members List */}
        {staffList.map(stf => {
          const isSelected = selectedStaff?.id === stf.id;
          return (
            <div
              key={stf.id}
              onClick={() => setSelectedStaff(stf)}
              style={{
                background: isSelected ? '#EEF2FF' : '#FFFFFF',
                borderRadius: '20px',
                padding: '16px',
                border: isSelected ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={stf.photo} alt={stf.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{stf.name}</h4>
                  <p style={{ fontSize: '0.78rem', color: '#64748B' }}>{stf.role} • {stf.experience}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.75rem', fontWeight: 800, color: '#D97706', marginTop: '2px' }}>
                    <Star size={11} fill="#D97706" /> {stf.rating}
                  </div>
                </div>
              </div>
              {isSelected && <Check size={20} color="#4F46E5" />}
            </div>
          );
        })}
      </div>

      {/* Sticky Continue CTA */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        padding: '14px 20px',
        borderTop: '1px solid #E2E8F0',
        zIndex: 100
      }}>
        <button
          onClick={handleContinue}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.98rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          <span>Select Date & Time</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
