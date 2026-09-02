import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Lock, ShieldCheck, CheckCircle2, UserX, Ban, RefreshCw, Activity, Terminal } from 'lucide-react';

export default function AdminFraudSecurity() {
  const [incidents, setIncidents] = useState([
    { id: "SEC-901", type: "Abnormal Cancellation Spurt", target: "Urban Cut Studio (#biz_1)", risk: "High", score: 88, detail: "14 consecutive booking cancellations within 12 minutes triggering automated UPI chargebacks.", time: "18 min ago", status: "Active Alert" },
    { id: "SEC-902", type: "Multiple Card Retry Velocity", target: "IP: 103.21.14.88 (Mumbai)", risk: "Critical", score: 94, detail: "18 failed card payment attempts across 6 different BIN numbers in 5 minutes.", time: "42 min ago", status: "Active Alert" },
    { id: "SEC-903", type: "Referral Ring Collusion", target: "Customer: @rohan_v_99", risk: "Medium", score: 62, detail: "Device MAC address cloned across 12 newly created referral claim accounts.", time: "2 hrs ago", status: "Mitigated ✓" },
    { id: "SEC-904", type: "GPS Spoofing Check-in", target: "Urban Cut Studio (#APT-98241)", risk: "Low", score: 35, detail: "QR code check-in location delta variance > 500 meters from registered coordinates.", time: "4 hrs ago", status: "Mitigated ✓" },
  ]);

  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleMitigate = (id, target) => {
    setIncidents(incidents.map(inc => inc.id === id ? { ...inc, status: "Mitigated ✓" } : inc));
    showToast(`Security mitigation applied for ${target}. IP / Account rate-limited.`);
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Header */}
      <div style={{
        background: '#131B2E',
        borderRadius: '20px',
        padding: '22px 24px',
        border: '1px solid rgba(244, 63, 94, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldAlert size={22} color="#F43F5E" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>AI Fraud Detection & Security Sentinel</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Real-time biometric anomaly monitoring, payment gateway risk scoring & suspicious ring mitigations
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.3)', padding: '6px 14px', borderRadius: '999px', fontSize: '0.78rem', color: '#F43F5E', fontWeight: 800 }}>
          <Activity size={14} /> AI Risk Sentinel Engine: ACTIVE
        </div>
      </div>

      {/* Toast Alert */}
      {toastMsg && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '14px', padding: '12px 18px', color: '#34D399', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 3 Threat Level Tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(244, 63, 94, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Active Threats</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F43F5E', marginTop: '4px' }}>
            {incidents.filter(i => i.status.includes('Active')).length} Incidents
          </div>
          <p style={{ fontSize: '0.72rem', color: '#F43F5E', fontWeight: 700, marginTop: '4px' }}>Immediate Admin Action Advised</p>
        </div>

        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(52, 211, 153, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Neutralized Attacks (24h)</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34D399', marginTop: '4px' }}>148 Blocks</div>
          <p style={{ fontSize: '0.72rem', color: '#34D399', fontWeight: 700, marginTop: '4px' }}>100% False chargeback prevention</p>
        </div>

        <div style={{ background: '#131B2E', borderRadius: '20px', padding: '20px', border: '1px solid rgba(99, 102, 241, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700 }}>Platform Security Score</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#818CF8', marginTop: '4px' }}>99.2 / 100</div>
          <p style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '4px' }}>PCI-DSS Level 1 Compliant</p>
        </div>
      </div>

      {/* Incidents Queue */}
      <div style={{ background: '#131B2E', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
          Real-Time Anomaly & Attack Feed
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {incidents.map(inc => {
            const isCritical = inc.risk === 'Critical' || inc.risk === 'High';
            const isMitigated = inc.status.includes('Mitigated');

            return (
              <div
                key={inc.id}
                style={{
                  background: '#0F172A',
                  borderRadius: '18px',
                  padding: '18px 22px',
                  border: isMitigated ? '1px solid rgba(52, 211, 153, 0.2)' : '1px solid rgba(244, 63, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '14px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#818CF8', background: 'rgba(99, 102, 241, 0.2)', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>#{inc.id}</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>{inc.type}</h4>
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      color: isCritical ? '#F43F5E' : '#FBBF24',
                      background: isCritical ? 'rgba(244, 63, 94, 0.15)' : 'rgba(251, 191, 36, 0.15)',
                      border: isCritical ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid rgba(251, 191, 36, 0.3)'
                    }}>
                      Risk Score: {inc.score}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.78rem', color: '#E2E8F0', marginTop: '6px', lineHeight: 1.4 }}>
                    {inc.detail}
                  </p>
                  <p style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '4px' }}>
                    Target Entity: <strong style={{ color: '#CBD5E1' }}>{inc.target}</strong> • Detected {inc.time}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    color: isMitigated ? '#34D399' : '#F43F5E',
                    background: isMitigated ? 'rgba(52, 211, 153, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                    border: isMitigated ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(244, 63, 94, 0.3)'
                  }}>
                    {inc.status}
                  </span>

                  {!isMitigated && (
                    <button
                      onClick={() => handleMitigate(inc.id, inc.target)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
                        color: '#FFFFFF',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 14px rgba(244, 63, 94, 0.4)'
                      }}
                    >
                      <Ban size={14} /> Mitigate & Freeze Target
                    </button>
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
