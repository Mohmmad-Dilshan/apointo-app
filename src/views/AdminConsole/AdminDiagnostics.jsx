import React, { useState } from 'react';
import { Terminal, Server, Cpu, Database, Activity, RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function AdminDiagnostics() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [logFilter, setLogFilter] = useState('all');

  const [logs, setLogs] = useState([
    { id: 1, level: 'OK', text: "Cron job 'daily_payout_reconciliation' executed in 412ms", time: "18:45:10", service: "Payout-Worker-1" },
    { id: 2, level: 'INFO', text: "Razorpay webhook verified: TXN_98241 payment captured ₹329", time: "18:42:00", service: "Gateway-Webhook" },
    { id: 3, level: 'WARN', text: "High concurrency detected on Bengaluru salon cluster (48 req/s)", time: "18:35:22", service: "API-Gateway" },
    { id: 4, level: 'OK', text: "Merchant KYC documents encrypted and stored on GCS bucket", time: "18:20:11", service: "Storage-S3" },
    { id: 5, level: 'AUTH', text: "SuperAdmin session generated from IP 103.21.24.1 (2FA Verified)", time: "17:30:00", service: "Auth-Service" },
    { id: 6, level: 'OK', text: "SMS OTP delivery confirmed via Twilio (latency 1.2s)", time: "17:15:45", service: "Notification-SMS" },
  ]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLogs(prev => [
        { id: Date.now(), level: 'OK', text: `Heartbeat ping: All 14 microservices reporting healthy at ${new Date().toLocaleTimeString()}`, time: new Date().toLocaleTimeString(), service: "Health-Monitor" },
        ...prev
      ]);
    }, 600);
  };

  const filteredLogs = logs.filter(l => {
    if (logFilter === 'all') return true;
    return l.level.toLowerCase() === logFilter.toLowerCase();
  });

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        borderRadius: '20px',
        padding: '22px 24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              System Health & Microservices Diagnostics
            </h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
            Real-time latency, webhook queues, database health & live server telemetry
          </p>
        </div>

        <button
          onClick={handleRefresh}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.82rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(79,70,229,0.4)'
          }}
        >
          <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
          <span>{isRefreshing ? 'Pinging...' : 'Refresh Metrics'}</span>
        </button>
      </div>

      {/* 4 Health KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {[
          { label: 'API Gateway Latency', value: '42 ms', status: 'Optimal', sub: '99.98% Uptime', icon: <Activity size={18} color="#10B981" />, bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.3)' },
          { label: 'Database IOPS', value: '1,420 /s', status: 'Healthy', sub: 'PostgreSQL Primary', icon: <Database size={18} color="#38BDF8" />, bg: 'rgba(56, 189, 248, 0.12)', border: 'rgba(56, 189, 248, 0.3)' },
          { label: 'CPU Cluster Load', value: '28.4%', status: 'Low Load', sub: '8 Pods Active', icon: <Cpu size={18} color="#A78BFA" />, bg: 'rgba(167, 139, 250, 0.12)', border: 'rgba(167, 139, 250, 0.3)' },
          { label: 'Payment Webhook Queue', value: '0 Backlog', status: 'Clean', sub: 'Razorpay / UPI Live', icon: <Zap size={18} color="#F59E0B" />, bg: 'rgba(245, 158, 11, 0.12)', border: 'rgba(245, 158, 11, 0.3)' },
        ].map((c, i) => (
          <div key={i} style={{ background: '#131B2E', borderRadius: '18px', padding: '18px', border: `1px solid ${c.border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8' }}>{c.label}</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {c.icon}
              </div>
            </div>
            <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>{c.value}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
              <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 700 }}>● {c.status}</span>
              <span style={{ fontSize: '0.68rem', color: '#64748B' }}>{c.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Terminal Log Stream */}
      <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={18} color="#818CF8" />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>Real-time Server Activity Stream</h3>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {['all', 'OK', 'INFO', 'WARN', 'AUTH'].map(f => (
              <button
                key={f}
                onClick={() => setLogFilter(f)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  background: logFilter === f ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : '#0F172A',
                  color: logFilter === f ? '#FFFFFF' : '#94A3B8',
                  border: logFilter === f ? 'none' : '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer'
                }}
              >
                {f === 'all' ? 'All Streams' : f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '420px', overflowY: 'auto' }} className="no-scrollbar">
          {filteredLogs.map(log => (
            <div
              key={log.id}
              style={{
                background: '#0F172A',
                borderRadius: '12px',
                padding: '12px 14px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                <span style={{
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  color: log.level === 'OK' ? '#34D399' : log.level === 'WARN' ? '#FBBF24' : log.level === 'AUTH' ? '#EC4899' : '#818CF8',
                  background: log.level === 'OK' ? 'rgba(52,211,153,0.15)' : log.level === 'WARN' ? 'rgba(251,191,36,0.15)' : 'rgba(129,140,248,0.15)'
                }}>
                  [{log.level}]
                </span>
                <span style={{ color: '#E2E8F0' }}>{log.text}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                <span style={{ fontSize: '0.7rem', color: '#64748B' }}>{log.service}</span>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600 }}>{log.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
