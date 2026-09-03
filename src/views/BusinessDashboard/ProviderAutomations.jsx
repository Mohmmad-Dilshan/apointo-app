import React from 'react';
import {
  Zap,
  CheckCircle2,
  Bell,
  Users,
  TrendingUp,
  Award,
  Star,
  Clock,
  Trash2,
  Sparkles,
  Bot,
  Sliders,
  ShieldCheck,
  ChevronRight,
  Send
} from 'lucide-react';
import { usePlatform } from '../../context/PlatformContext';

export default function ProviderAutomations() {
  const {
    automationSettings,
    automationLogs,
    toggleAutomation,
    callNextInQueue,
    clearAutomationLogs,
    computedStats,
    bookings
  } = usePlatform();

  const rules = [
    {
      key: 'autoConfirm',
      title: 'Instant Booking Auto-Confirm',
      desc: 'Automatically accept customer bookings immediately without requiring manual manager approval.',
      icon: <CheckCircle2 size={20} color="#10B981" />,
      bg: '#ECFDF5',
      badge: 'Zero Latency',
      impact: 'Reduces booking drop-off by 28%'
    },
    {
      key: 'whatsappReminders',
      title: 'WhatsApp & SMS Pre-Arrival Reminders',
      desc: 'Auto-sends interactive WhatsApp reminders 24 hrs and 2 hrs before scheduled appointment time.',
      icon: <Bell size={20} color="#6366F1" />,
      bg: '#EEF2FF',
      badge: 'No-Show Killer',
      impact: 'Cuts appointment no-shows by 42%'
    },
    {
      key: 'smartStaffDispatch',
      title: 'Smart Queue & Specialist Auto-Dispatcher',
      desc: 'Automatically load-balances "Any Specialist" requests and walk-ins to the least-utilized staff member.',
      icon: <Users size={20} color="#06B6D4" />,
      bg: '#ECFEFF',
      badge: 'Workload Balance',
      impact: 'Maximizes chair utilization to 94%'
    },
    {
      key: 'offPeakDynamicYield',
      title: 'Off-Peak Dynamic Yield Engine',
      desc: 'Automatically activates a 15% discount on the customer app whenever upcoming 2-hour slots are <30% booked.',
      icon: <TrendingUp size={20} color="#F59E0B" />,
      bg: '#FFFBEB',
      badge: 'Revenue Optimizer',
      impact: 'Generates +₹18,400 monthly on slow days'
    },
    {
      key: 'autoLoyaltyCashback',
      title: 'Instant Loyalty Rewards Engine',
      desc: 'Automatically deposits 5% cashback (+150 points) into customer wallet upon marking appointment completed.',
      icon: <Award size={20} color="#EC4899" />,
      bg: '#FDF2F8',
      badge: 'Customer Retention',
      impact: 'Boosts repeat visit rate to 78%'
    },
    {
      key: 'autoReviewCollector',
      title: 'Auto Review Harvester',
      desc: 'Triggers Google & In-App review request 30 minutes after checkout when client experience is fresh.',
      icon: <Star size={20} color="#EAB308" />,
      bg: '#FEFCE8',
      badge: 'Reputation AI',
      impact: 'Averages 4.9★ rating with 340+ reviews'
    }
  ];

  const activeRulesCount = Object.values(automationSettings).filter(Boolean).length;
  const waitingCustomers = bookings.filter(b => b.status === "Waiting in Lounge" || b.status === "Waiting");

  return (
    <div style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* ── HEADER ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, background: '#EEF2FF', color: '#4F46E5', padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.04em' }}>
              ⚡ PRO AUTOMATIONS
            </span>
            <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981' }} />
              Automation Engine Active
            </span>
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>
            Smart Business Automations & AI Rules
          </h1>
          <p style={{ fontSize: '0.86rem', color: '#64748B', marginTop: '2px' }}>
            Autonomous workflows that run your salon on autopilot — from instant confirmations to smart queue dispatching.
          </p>
        </div>

        {/* 1-Click Queue Call Button */}
        <button
          onClick={callNextInQueue}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #4F46E5 0%, #3730A3 100%)',
            color: '#FFFFFF',
            padding: '12px 22px',
            borderRadius: '14px',
            border: 'none',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(79,70,229,0.3)',
            transition: 'all 0.2s transform'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Bot size={20} />
          <span>Call Next Client in Queue</span>
          {waitingCustomers.length > 0 && (
            <span style={{
              background: '#EF4444',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 900,
              padding: '2px 8px',
              borderRadius: '999px'
            }}>
              {waitingCustomers.length} Waiting
            </span>
          )}
        </button>
      </div>

      {/* ── TELEMETRY STATS GRID ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
        <div style={{ background: '#FFFFFF', padding: '18px 20px', borderRadius: '18px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#64748B' }}>Active Rules</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sliders size={16} color="#4F46E5" />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>{activeRulesCount} / 6</div>
          <div style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>● 83% automation coverage</div>
        </div>

        <div style={{ background: '#FFFFFF', padding: '18px 20px', borderRadius: '18px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#64748B' }}>Triggers Fired Today</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={16} color="#10B981" />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>148 Triggers</div>
          <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>+34 vs yesterday</div>
        </div>

        <div style={{ background: '#FFFFFF', padding: '18px 20px', borderRadius: '18px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#64748B' }}>Staff Hours Saved</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#ECFEFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={16} color="#06B6D4" />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>3.8 hrs / day</div>
          <div style={{ fontSize: '0.72rem', color: '#06B6D4', fontWeight: 700, marginTop: '2px' }}>Zero front-desk manual calls</div>
        </div>

        <div style={{ background: '#FFFFFF', padding: '18px 20px', borderRadius: '18px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#64748B' }}>Auto-Revenue Lift</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={16} color="#D97706" />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>₹18,450</div>
          <div style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>Via automated fill-rate</div>
        </div>
      </div>

      {/* ── TWO COLUMN LAYOUT: RULES GRID & LIVE FEED ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Left Column: Rules Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Active Smart Rules</h2>
            <span style={{ fontSize: '0.74rem', color: '#64748B' }}>Click toggle to configure instantly</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
            {rules.map((rule) => {
              const isEnabled = automationSettings[rule.key];
              return (
                <div
                  key={rule.key}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '18px',
                    padding: '20px',
                    border: isEnabled ? '1.5px solid #4F46E5' : '1px solid #E2E8F0',
                    boxShadow: isEnabled ? '0 6px 20px rgba(79,70,229,0.08)' : '0 2px 6px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    {/* Header: Icon + Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: rule.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {rule.icon}
                      </div>

                      {/* Custom Modern Switch */}
                      <button
                        onClick={() => toggleAutomation(rule.key)}
                        style={{
                          width: '46px',
                          height: '26px',
                          borderRadius: '999px',
                          background: isEnabled ? '#4F46E5' : '#CBD5E1',
                          border: 'none',
                          cursor: 'pointer',
                          position: 'relative',
                          transition: 'background 0.25s ease'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          position: 'absolute',
                          top: '3px',
                          left: isEnabled ? '23px' : '3px',
                          transition: 'left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.66rem', fontWeight: 800, background: '#F1F5F9', color: '#475569', padding: '2px 8px', borderRadius: '999px' }}>
                        {rule.badge}
                      </span>
                      {isEnabled ? (
                        <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#10B981' }}>ACTIVE</span>
                      ) : (
                        <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#94A3B8' }}>PAUSED</span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px', lineHeight: 1.3 }}>
                      {rule.title}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.4, marginBottom: '14px' }}>
                      {rule.desc}
                    </p>
                  </div>

                  <div style={{
                    paddingTop: '12px',
                    borderTop: '1px solid #F1F5F9',
                    fontSize: '0.74rem',
                    color: isEnabled ? '#4F46E5' : '#94A3B8',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Sparkles size={13} />
                    <span>{rule.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Automation Activity Feed */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '22px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 20px',
            borderBottom: '1px solid #F1F5F9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#F8FAFC'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', animation: 'pulse 1.5s infinite' }} />
              <h2 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A' }}>Streaming Activity Feed</h2>
            </div>
            
            {automationLogs.length > 0 && (
              <button
                onClick={clearAutomationLogs}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Trash2 size={13} />
                <span>Clear</span>
              </button>
            )}
          </div>

          {/* Activity Log List */}
          <div style={{ maxHeight: '520px', overflowY: 'auto', padding: '12px 16px' }}>
            {automationLogs.length === 0 ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94A3B8' }}>
                <Bot size={36} style={{ margin: '0 auto 8px', opacity: 0.4 }} />
                <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>No recent automation activity</div>
                <p style={{ fontSize: '0.74rem', marginTop: '4px' }}>Logs will stream here when auto-rules trigger.</p>
              </div>
            ) : (
              automationLogs.map((log) => (
                <div
                  key={log.id}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '14px',
                    background: '#F8FAFC',
                    marginBottom: '10px',
                    border: '1px solid #F1F5F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '1rem' }}>{log.icon || '🤖'}</span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0F172A' }}>{log.rule}</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#94A3B8', fontWeight: 600 }}>{log.time}</span>
                  </div>

                  <div style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.35, paddingLeft: '24px' }}>
                    {log.action}
                  </div>

                  <div style={{ paddingLeft: '24px', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <span style={{
                      fontSize: '0.64rem',
                      fontWeight: 800,
                      color: log.status === 'Active' || log.status === 'Delivered' || log.status === 'Success' || log.status === 'Confirmed' ? '#059669' : '#4F46E5',
                      background: log.status === 'Active' || log.status === 'Delivered' || log.status === 'Success' || log.status === 'Confirmed' ? '#ECFDF5' : '#EEF2FF',
                      padding: '1px 6px',
                      borderRadius: '4px'
                    }}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
