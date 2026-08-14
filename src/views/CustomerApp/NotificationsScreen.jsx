import React, { useState } from 'react';
import { ArrowLeft, Bell, Clock, Award, Tag, CheckCheck, Zap, Gift, Calendar, AlertCircle, X } from 'lucide-react';
import { NOTIFICATIONS } from '../../data/sampleData';

const TYPE_CONFIG = {
  reminder: { icon: <Clock size={20} color="#4F46E5" />, bg: '#EEF2FF', dot: '#4F46E5', label: 'Reminder' },
  reward: { icon: <Award size={20} color="#D97706" />, bg: '#FEF3C7', dot: '#F59E0B', label: 'Reward' },
  offer: { icon: <Tag size={20} color="#10B981" />, bg: '#ECFDF5', dot: '#10B981', label: 'Offer' },
  alert: { icon: <AlertCircle size={20} color="#F43F5E" />, bg: '#FFF1F2', dot: '#F43F5E', label: 'Alert' },
};

export default function NotificationsScreen({ onBack }) {
  const [notifications, setNotifications] = useState(
    (NOTIFICATIONS || [
      { id: 1, type: 'reminder', title: 'Appointment Tomorrow!', message: 'Your Classic Haircut at Urban Cut Studio is tomorrow at 2:30 PM. Don\'t forget!', time: '2h ago', unread: true },
      { id: 2, type: 'reward', title: 'Points Credited 🏆', message: 'You earned 33 reward points from your last booking. Redeem them for discounts!', time: '1d ago', unread: true },
      { id: 3, type: 'offer', title: '50% OFF Hair Spa Today Only!', message: 'Exclusive flash deal at LuxeGlow Spa. Valid for next 4 hours only. Book now!', time: '3h ago', unread: false },
      { id: 4, type: 'reminder', title: 'Rate Your Experience', message: 'How was your visit to Urban Cut Studio? Your feedback helps others. Tap to rate!', time: '2d ago', unread: false },
      { id: 5, type: 'reward', title: 'Referral Bonus! 🎁', message: 'Rahul Verma signed up using your code DILSHAN50. ₹500 cashback has been added to your wallet.', time: '3d ago', unread: false },
    ]).map(n => ({ ...n, unread: n.unread !== undefined ? n.unread : true })
  ));

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  const dismissNotif = (id) => setNotifications(prev => prev.filter(n => n.id !== id));

  return (
    <div style={{ background: '#F0F4FF', minHeight: '100%', paddingBottom: '90px' }} className="animate-fade-in">

      {/* ── HEADER ── */}
      <div style={{
        background: 'linear-gradient(145deg, #0F172A 0%, #1E1B4B 60%, #3730A3 100%)',
        padding: '24px 20px 28px',
        color: '#FFFFFF',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        boxShadow: '0 12px 32px rgba(15,23,42,0.35)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(99,102,241,0.15)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button onClick={onBack} style={{
              width: '40px', height: '40px', borderRadius: '14px',
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF'
            }}>
              <ArrowLeft size={20} />
            </button>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#A5B4FC', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Inbox</div>
              <h1 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                Notifications {unreadCount > 0 && (
                  <span style={{ fontSize: '0.9rem', background: '#F43F5E', color: '#FFFFFF', padding: '1px 8px', borderRadius: '999px', marginLeft: '8px', verticalAlign: 'middle' }}>
                    {unreadCount}
                  </span>
                )}
              </h1>
            </div>
          </div>

          {unreadCount > 0 && (
            <button onClick={markAllRead} style={{
              fontSize: '0.76rem', fontWeight: 800, color: '#FFFFFF',
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '6px 14px', borderRadius: '999px',
              display: 'flex', alignItems: 'center', gap: '5px'
            }}>
              <CheckCheck size={14} />
              Mark All Read
            </button>
          )}
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
          {['All', 'Unread', 'Rewards', 'Offers', 'Reminders'].map((label, i) => (
            <button key={i} style={{
              padding: '6px 14px', borderRadius: '999px', flexShrink: 0,
              background: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.12)',
              color: i === 0 ? '#4F46E5' : '#C7D2FE',
              fontSize: '0.76rem', fontWeight: 800,
              border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)'
            }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── NOTIFICATION LIST ── */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notifications.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🔔</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>You're all caught up!</div>
            <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>No new notifications</div>
          </div>
        ) : notifications.map(n => {
          const cfg = TYPE_CONFIG[n.type] || TYPE_CONFIG.reminder;
          return (
            <div key={n.id} style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '16px',
              border: n.unread ? '1.5px solid #C7D2FE' : '1px solid #E2E8F0',
              display: 'flex', gap: '12px', alignItems: 'flex-start',
              boxShadow: n.unread ? '0 4px 20px rgba(99,102,241,0.1)' : '0 2px 8px rgba(0,0,0,0.03)',
              position: 'relative', overflow: 'hidden'
            }}>
              {/* Unread left accent */}
              {n.unread && (
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: `linear-gradient(to bottom, ${cfg.dot}, transparent)`, borderRadius: '4px 0 0 4px' }} />
              )}

              <div style={{
                width: '44px', height: '44px', borderRadius: '14px',
                background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                {cfg.icon}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.3 }}>{n.title}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                    {n.unread && <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: cfg.dot }} />}
                    <span style={{ fontSize: '0.68rem', color: '#94A3B8', whiteSpace: 'nowrap' }}>{n.time}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px', lineHeight: 1.5 }}>{n.message}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 800, color: cfg.dot,
                    background: cfg.bg, padding: '2px 8px', borderRadius: '999px'
                  }}>
                    {cfg.label}
                  </span>
                  <button onClick={() => dismissNotif(n.id)} style={{
                    padding: '4px', borderRadius: '8px', background: '#F1F5F9', color: '#94A3B8'
                  }}>
                    <X size={12} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
