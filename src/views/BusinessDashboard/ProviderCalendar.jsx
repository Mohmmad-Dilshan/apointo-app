import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Filter, UserCheck, Clock } from 'lucide-react';

export default function ProviderCalendar() {
  const [viewMode, setViewMode] = useState('Day'); // 'Day' | 'Week' | 'Month'
  const [selectedStaff, setSelectedStaff] = useState('all');

  const hours = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"];

  const appointments = [
    { hour: "09:00 AM", customer: "Vikram R.", service: "Classic Haircut", staff: "Rahul S.", color: "#4F46E5", duration: "45m" },
    { hour: "10:00 AM", customer: "Arjun K.", service: "Beard Crafting", staff: "Vikram S.", color: "#06B6D4", duration: "30m" },
    { hour: "02:00 PM", customer: "Dilshan P.", service: "Classic Haircut & Styling", staff: "Rahul S.", color: "#10B981", duration: "45m" },
    { hour: "05:00 PM", customer: "Siddharth N.", service: "Royal Deluxe Package", staff: "Priya V.", color: "#F59E0B", duration: "90m" }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      {/* Calendar Header Controls */}
      <div style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        padding: '16px 20px',
        border: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button style={{ padding: '6px', borderRadius: '8px', border: '1px solid #E2E8F0' }}><ChevronLeft size={16} /></button>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>Wednesday, 14 Aug 2026</h3>
            <button style={{ padding: '6px', borderRadius: '8px', border: '1px solid #E2E8F0' }}><ChevronRight size={16} /></button>
          </div>

          <span style={{ fontSize: '0.78rem', background: '#EEF2FF', color: '#4F46E5', padding: '4px 10px', borderRadius: '999px', fontWeight: 700 }}>
            Today
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Staff Filter */}
          <select
            value={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
            style={{ padding: '8px 14px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.85rem', fontWeight: 700, background: '#FFFFFF' }}
          >
            <option value="all">All Specialists</option>
            <option value="rahul">Rahul Sharma</option>
            <option value="priya">Priya Verma</option>
            <option value="vikram">Vikram Singh</option>
          </select>

          {/* View Mode */}
          <div style={{ display: 'flex', background: '#F1F5F9', padding: '3px', borderRadius: '10px' }}>
            {['Day', 'Week', 'Month'].map(m => (
              <button
                key={m}
                onClick={() => setViewMode(m)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  background: viewMode === m ? '#FFFFFF' : 'transparent',
                  color: viewMode === m ? '#4F46E5' : '#64748B',
                  boxShadow: viewMode === m ? '0 2px 6px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Grid */}
      <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '20px', border: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {hours.map(hour => {
            const match = appointments.find(a => a.hour === hour);
            return (
              <div key={hour} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', minHeight: '60px', borderBottom: '1px solid #F1F5F9', paddingBottom: '12px' }}>
                <div style={{ width: '80px', fontSize: '0.82rem', fontWeight: 700, color: '#64748B', paddingTop: '6px' }}>
                  {hour}
                </div>

                <div style={{ flex: 1 }}>
                  {match ? (
                    <div style={{
                      background: `${match.color}15`,
                      borderLeft: `4px solid ${match.color}`,
                      borderRadius: '12px',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>{match.customer}</div>
                        <p style={{ fontSize: '0.78rem', color: '#64748B' }}>{match.service} • Specialist: {match.staff}</p>
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: match.color, background: '#FFFFFF', padding: '4px 10px', borderRadius: '999px' }}>
                        {match.duration}
                      </span>
                    </div>
                  ) : (
                    <div style={{
                      height: '40px',
                      borderRadius: '10px',
                      border: '1px dashed #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '14px',
                      fontSize: '0.78rem',
                      color: '#CBD5E1'
                    }}>
                      + Available for booking
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
