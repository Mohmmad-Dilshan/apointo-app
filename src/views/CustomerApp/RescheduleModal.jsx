import React, { useState } from 'react';
import { X, Calendar, Clock, RefreshCw } from 'lucide-react';

export default function RescheduleModal({ isOpen, onClose, onConfirm }) {
  const [newDate, setNewDate] = useState('16 Aug 2026');
  const [newTime, setNewTime] = useState('04:30 PM');

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,0.6)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        background: '#FFFFFF',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
        padding: '24px'
      }} className="animate-slide-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Reschedule Appointment</h3>
          <button onClick={onClose} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <X size={18} color="#64748B" />
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
          Select a new date and time slot for your service appointment.
        </p>

        {/* Date Select */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>New Date</label>
          <select
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.9rem', fontWeight: 700 }}
          >
            <option value="15 Aug 2026">Tomorrow, 15 Aug 2026</option>
            <option value="16 Aug 2026">Friday, 16 Aug 2026</option>
            <option value="17 Aug 2026">Saturday, 17 Aug 2026</option>
          </select>
        </div>

        {/* Time Select */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>New Time Slot</label>
          <select
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.9rem', fontWeight: 700 }}
          >
            <option value="10:00 AM">10:00 AM</option>
            <option value="02:30 PM">02:30 PM</option>
            <option value="04:30 PM">04:30 PM</option>
            <option value="06:00 PM">06:00 PM</option>
          </select>
        </div>

        <button
          onClick={() => onConfirm(newDate, newTime)}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <RefreshCw size={18} /> Confirm Reschedule
        </button>
      </div>
    </div>
  );
}
