import React from 'react';
import {
  X,
  Zap,
  CheckCircle2,
  Bell,
  Users,
  TrendingUp,
  Award,
  Star,
  Clock,
  Trash2,
  Bot,
  Sparkles
} from 'lucide-react';
import { usePlatform } from '../../../context/PlatformContext';

export default function MobileAutomationsModal({ isOpen, onClose }) {
  const {
    automationSettings,
    automationLogs,
    toggleAutomation,
    callNextInQueue,
    clearAutomationLogs,
    bookings
  } = usePlatform();

  if (!isOpen) return null;

  const rules = [
    {
      key: 'autoConfirm',
      title: 'Instant Auto-Confirm',
      desc: 'Accept online bookings instantly without manual tap.',
      icon: <CheckCircle2 size={18} color="#10B981" />,
      bg: '#ECFDF5'
    },
    {
      key: 'whatsappReminders',
      title: 'WhatsApp 2h & 24h Reminders',
      desc: 'Auto-send WhatsApp alerts to slash no-shows by 42%.',
      icon: <Bell size={18} color="#6366F1" />,
      bg: '#EEF2FF'
    },
    {
      key: 'smartStaffDispatch',
      title: 'Smart Specialist Dispatcher',
      desc: 'Auto-assign walk-ins to least-loaded specialist.',
      icon: <Users size={18} color="#06B6D4" />,
      bg: '#ECFEFF'
    },
    {
      key: 'offPeakDynamicYield',
      title: 'Off-Peak 15% Dynamic Yield',
      desc: 'Auto-discount slow hours to fill empty chairs.',
      icon: <TrendingUp size={18} color="#F59E0B" />,
      bg: '#FFFBEB'
    },
    {
      key: 'autoLoyaltyCashback',
      title: 'Instant 5% Loyalty Cashback',
      desc: 'Auto-reward points to customer wallet on completion.',
      icon: <Award size={18} color="#EC4899" />,
      bg: '#FDF2F8'
    },
    {
      key: 'autoReviewCollector',
      title: 'Auto Review Harvester',
      desc: 'Prompt clients for 5-star review 30m post service.',
      icon: <Star size={18} color="#EAB308" />,
      bg: '#FEFCE8'
    }
  ];

  const waitingCustomers = bookings.filter(b => b.status === "Waiting in Lounge" || b.status === "Waiting");

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,0.65)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        maxHeight: '90%',
        background: '#FFFFFF',
        borderTopLeftRadius: '28px',
        borderTopRightRadius: '28px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.25)',
        overflow: 'hidden'
      }} className="animate-slide-up">

        {/* Modal Header */}
        <div style={{
          padding: '18px 20px',
          borderBottom: '1px solid #F1F5F9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="#A5B4FC" />
            </div>
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>Salon Automations AI</h2>
              <p style={{ fontSize: '0.68rem', color: '#A5B4FC' }}>Autonomous rules running in background</p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              border: 'none',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: '16px 20px 30px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Quick 1-Click Action */}
          <div style={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)',
            borderRadius: '18px',
            padding: '16px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 20px rgba(79,70,229,0.25)'
          }}>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800 }}>Queue Dispatcher</div>
              <div style={{ fontSize: '0.72rem', color: '#C7D2FE', marginTop: '2px' }}>
                {waitingCustomers.length} customer(s) waiting in lounge
              </div>
            </div>

            <button
              onClick={callNextInQueue}
              style={{
                background: '#FFFFFF',
                color: '#4F46E5',
                padding: '8px 14px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Bot size={15} />
              <span>Call Next</span>
            </button>
          </div>

          {/* Rules List */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Active Smart Rules
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {rules.map((rule) => {
                const isEnabled = automationSettings[rule.key];
                return (
                  <div
                    key={rule.key}
                    style={{
                      background: '#F8FAFC',
                      borderRadius: '14px',
                      padding: '12px 14px',
                      border: isEnabled ? '1px solid #C7D2FE' : '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: rule.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {rule.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A' }}>{rule.title}</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '1px' }}>{rule.desc}</div>
                      </div>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => toggleAutomation(rule.key)}
                      style={{
                        width: '42px',
                        height: '24px',
                        borderRadius: '999px',
                        background: isEnabled ? '#4F46E5' : '#CBD5E1',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative',
                        flexShrink: 0,
                        marginLeft: '12px',
                        transition: 'background 0.2s'
                      }}
                    >
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        position: 'absolute',
                        top: '3px',
                        left: isEnabled ? '21px' : '3px',
                        transition: 'left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activity Log Mini Feed */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A' }}>Live Trigger Log</span>
              {automationLogs.length > 0 && (
                <button
                  onClick={clearAutomationLogs}
                  style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}
                >
                  <Trash2 size={12} />
                  <span>Clear</span>
                </button>
              )}
            </div>

            <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {automationLogs.slice(0, 5).map((log) => (
                <div
                  key={log.id}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '10px',
                    background: '#F1F5F9',
                    fontSize: '0.72rem',
                    color: '#334155'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                    <span>{log.icon} {log.rule}</span>
                    <span style={{ fontSize: '0.64rem', color: '#94A3B8' }}>{log.time}</span>
                  </div>
                  <div>{log.action}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
