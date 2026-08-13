import React from 'react';
import { ArrowLeft, Bell, Clock, Award, Tag, CheckCheck } from 'lucide-react';
import { NOTIFICATIONS } from '../../data/sampleData';

export default function NotificationsScreen({ onBack }) {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
            <ArrowLeft size={20} color="#0F172A" />
          </button>
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Notifications</h2>
            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Reminders & offers</p>
          </div>
        </div>
        <button style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5' }}>Mark All Read</button>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {NOTIFICATIONS.map(n => (
          <div
            key={n.id}
            style={{
              background: '#FFFFFF',
              borderRadius: '18px',
              padding: '16px',
              border: '1px solid #E2E8F0',
              display: 'flex',
              gap: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: n.type === 'reminder' ? '#EEF2FF' : n.type === 'reward' ? '#FEF3C7' : '#ECFDF5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {n.type === 'reminder' ? <Clock size={20} color="#4F46E5" /> : n.type === 'reward' ? <Award size={20} color="#D97706" /> : <Tag size={20} color="#10B981" />}
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{n.title}</h4>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{n.time}</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>{n.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
