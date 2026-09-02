import React, { useState } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, Clock, ChevronRight } from 'lucide-react';

export default function DateTimePicker({ service, staff, onBack, onConfirmDateTime }) {
  const dates = [
    { label: 'Today', date: '14 Aug', day: 'Wed' },
    { label: 'Tomorrow', date: '15 Aug', day: 'Thu' },
    { label: 'Fri', date: '16 Aug', day: 'Fri' },
    { label: 'Sat', date: '17 Aug', day: 'Sat' },
    { label: 'Sun', date: '18 Aug', day: 'Sun' }
  ];

  const timeSlots = {
    morning: [
      { time: '09:00 AM', available: true },
      { time: '09:30 AM', available: true },
      { time: '10:00 AM', available: false },
      { time: '10:30 AM', available: true },
      { time: '11:00 AM', available: true }
    ],
    afternoon: [
      { time: '12:00 PM', available: true },
      { time: '12:30 PM', available: false },
      { time: '01:00 PM', available: true },
      { time: '02:30 PM', available: true },
      { time: '03:30 PM', available: true }
    ],
    evening: [
      { time: '05:00 PM', available: true },
      { time: '05:30 PM', available: true },
      { time: '06:30 PM', available: true },
      { time: '07:00 PM', available: false },
      { time: '07:30 PM', available: true }
    ]
  };

  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState('02:30 PM');

  const handleContinue = () => {
    onConfirmDateTime({ date: `${selectedDate.date} 2026`, time: selectedTime });
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      {/* Top Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Select Date & Time</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>{service?.name} • {staff?.name}</p>
        </div>
      </div>

      {/* Date Picker Horizontal Bar */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CalendarIcon size={14} color="#4F46E5" />
          <span>Available Dates</span>
        </div>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }} className="no-scrollbar">
          {dates.map((d, idx) => {
            const isSelected = selectedDate.date === d.date;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(d)}
                style={{
                  flexShrink: 0,
                  width: '74px',
                  padding: '12px 8px',
                  borderRadius: '16px',
                  background: isSelected ? '#4F46E5' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#0F172A',
                  border: isSelected ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                  boxShadow: isSelected ? '0 6px 16px rgba(79,70,229,0.3)' : '0 2px 6px rgba(0,0,0,0.03)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '0.72rem', opacity: 0.8, textTransform: 'uppercase', fontWeight: 700 }}>{d.label}</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, margin: '2px 0' }}>{d.date.split(' ')[0]}</div>
                <div style={{ fontSize: '0.72rem', opacity: 0.8 }}>{d.day}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots Section */}
      <div style={{ padding: '24px 20px 0' }}>
        {Object.entries(timeSlots).map(([period, slots]) => (
          <div key={period} style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} color="#06B6D4" />
              <span>{period} Slots</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(88px, 1fr))', gap: '8px' }}>
              {slots.map((slot, idx) => {
                const isSelected = selectedTime === slot.time;
                return (
                  <button
                    key={idx}
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    style={{
                      padding: '10px 4px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      background: !slot.available ? '#F1F5F9' : isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: !slot.available ? '#94A3B8' : isSelected ? '#4F46E5' : '#0F172A',
                      border: !slot.available ? '1px dashed #CBD5E1' : isSelected ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                      opacity: !slot.available ? 0.6 : 1,
                      textDecoration: !slot.available ? 'line-through' : 'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {slot.time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Bottom CTA */}
      <div style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '14px 20px',
        borderTop: '1px solid #E2E8F0',
        zIndex: 100,
        boxShadow: '0 -4px 16px rgba(0,0,0,0.05)'
      }}>
        <button
          onClick={handleContinue}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          <span>Continue to Add-ons</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
