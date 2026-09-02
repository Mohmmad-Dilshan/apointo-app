import React, { useState } from 'react';
import { ShieldCheck, Check, X, FileText, MapPin, Building, AlertCircle, Eye, CheckCircle2, XCircle } from 'lucide-react';
import { ADMIN_STATS } from '../../data/sampleData';

export default function BusinessVerification() {
  const [queue, setQueue] = useState(ADMIN_STATS.pendingVerifications);
  const [selectedApp, setSelectedApp] = useState(queue[0]);
  const [filter, setFilter] = useState('all');
  const [feedback, setFeedback] = useState(null);
  const [previewDoc, setPreviewDoc] = useState(null);

  const handleApprove = (id, name) => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: 'Approved ✓' } : item));
    if (selectedApp?.id === id) {
      setSelectedApp(prev => ({ ...prev, status: 'Approved ✓' }));
    }
    setFeedback({ message: `Verified Badge successfully granted to ${name}!`, type: 'success' });
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleReject = (id, name) => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: 'Rejected ✗' } : item));
    if (selectedApp?.id === id) {
      setSelectedApp(prev => ({ ...prev, status: 'Rejected ✗' }));
    }
    setFeedback({ message: `Application rejected for ${name}. Notification sent to merchant.`, type: 'error' });
    setTimeout(() => setFeedback(null), 3000);
  };

  const filteredQueue = queue.filter(item => {
    if (filter === 'pending') return !item.status.includes('Approved') && !item.status.includes('Rejected');
    if (filter === 'approved') return item.status.includes('Approved');
    if (filter === 'rejected') return item.status.includes('Rejected');
    return true;
  });

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Top Header */}
      <div style={{
        background: '#131B2E',
        borderRadius: '20px',
        padding: '20px 24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="#818CF8" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Business Partner KYC Clearance</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Inspect legal certificates, trade licenses & GST records before granting verified merchant badge
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'all', label: `All (${queue.length})` },
            { id: 'pending', label: `Pending (${queue.filter(q => !q.status.includes('✓') && !q.status.includes('✗')).length})` },
            { id: 'approved', label: 'Approved' },
            { id: 'rejected', label: 'Rejected' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                background: filter === f.id ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : '#0F172A',
                color: filter === f.id ? '#FFFFFF' : '#94A3B8',
                border: filter === f.id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                boxShadow: filter === f.id ? '0 2px 10px rgba(99, 102, 241, 0.4)' : 'none'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Action Toast */}
      {feedback && (
        <div style={{
          background: feedback.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)',
          border: `1px solid ${feedback.type === 'success' ? '#10B981' : '#F43F5E'}`,
          borderRadius: '14px',
          padding: '12px 18px',
          color: '#FFFFFF',
          fontSize: '0.85rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }} className="animate-fade-in">
          {feedback.type === 'success' ? <CheckCircle2 size={18} color="#34D399" /> : <XCircle size={18} color="#F43F5E" />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Main Split Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        {/* Left Queue List */}
        <div style={{ background: '#131B2E', borderRadius: '24px', padding: '18px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '4px 6px' }}>
            Submitted Applications
          </div>

          {filteredQueue.map(app => {
            const isSelected = selectedApp?.id === app.id;
            const isApproved = app.status.includes('Approved');
            const isRejected = app.status.includes('Rejected');

            return (
              <div
                key={app.id}
                onClick={() => setSelectedApp(app)}
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  background: isSelected ? 'rgba(99, 102, 241, 0.2)' : '#0F172A',
                  border: isSelected ? '2px solid #6366F1' : '1px solid rgba(255, 255, 255, 0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: isSelected ? '0 4px 18px rgba(99, 102, 241, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>{app.name}</h4>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '999px',
                    color: isApproved ? '#34D399' : isRejected ? '#F43F5E' : '#FBBF24',
                    background: isApproved ? 'rgba(52, 211, 153, 0.15)' : isRejected ? 'rgba(244, 63, 94, 0.15)' : 'rgba(251, 191, 36, 0.15)',
                    border: isApproved ? '1px solid rgba(52, 211, 153, 0.3)' : isRejected ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid rgba(251, 191, 36, 0.3)'
                  }}>
                    {app.status}
                  </span>
                </div>

                <p style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  {app.category} • {app.city} (Owner: {app.owner})
                </p>

                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Submitted: {app.date}</span>
                  <span style={{ fontSize: '0.68rem', color: '#818CF8', fontWeight: 700 }}>#{app.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Details Inspector Panel */}
        {selectedApp && (
          <div style={{ background: '#131B2E', borderRadius: '24px', padding: '26px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FFFFFF' }}>{selectedApp.name}</h3>
                    <span style={{ fontSize: '0.7rem', color: '#818CF8', background: 'rgba(99, 102, 241, 0.2)', padding: '2px 8px', borderRadius: '6px' }}>#{selectedApp.id}</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>
                    Category: {selectedApp.category} • Application Submitted: {selectedApp.date}
                  </p>
                </div>

                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  padding: '6px 14px',
                  borderRadius: '999px',
                  color: selectedApp.status.includes('Approved') ? '#34D399' : selectedApp.status.includes('Rejected') ? '#F43F5E' : '#FBBF24',
                  background: selectedApp.status.includes('Approved') ? 'rgba(52, 211, 153, 0.15)' : selectedApp.status.includes('Rejected') ? 'rgba(244, 63, 94, 0.15)' : 'rgba(251, 191, 36, 0.15)',
                  border: selectedApp.status.includes('Approved') ? '1px solid rgba(52, 211, 153, 0.3)' : selectedApp.status.includes('Rejected') ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid rgba(251, 191, 36, 0.3)'
                }}>
                  {selectedApp.status}
                </span>
              </div>

              {/* Information Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }}>
                <div style={{ background: '#0F172A', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Authorized Owner</span>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginTop: '3px' }}>{selectedApp.owner}</div>
                </div>
                <div style={{ background: '#0F172A', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Operating City</span>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginTop: '3px' }}>{selectedApp.city}</div>
                </div>
                <div style={{ background: '#0F172A', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Compliance Score</span>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#34D399', marginTop: '3px' }}>98/100 (Pass)</div>
                </div>
              </div>

              {/* Submitted Legal Documents */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
                  Submitted Verification Documents & Licenses:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[
                    { name: 'GSTIN Registration Document', file: 'GST-29AABCU9603R.pdf', verified: true },
                    { name: 'Municipal Trade License', file: 'LIC-BLR-2026.pdf', verified: true },
                    { name: 'Salon Premises Electricity Bill', file: 'BESCOM-UTILITY-2026.pdf', verified: true },
                    { name: 'Proprietor PAN Identification', file: 'PAN-AABCU9603R.pdf', verified: true },
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#0F172A',
                        padding: '12px 14px',
                        borderRadius: '14px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FileText size={16} color="#818CF8" />
                        <div>
                          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF' }}>{doc.name}</div>
                          <div style={{ fontSize: '0.68rem', color: '#34D399' }}>✓ Verified: {doc.file}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => setPreviewDoc(doc.name)}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '8px',
                          background: 'rgba(99, 102, 241, 0.15)',
                          color: '#818CF8',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Eye size={12} /> Preview
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              {!selectedApp.status.includes('Approved') && (
                <button
                  onClick={() => handleApprove(selectedApp.id, selectedApp.name)}
                  style={{
                    flex: 1.4,
                    padding: '14px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  <Check size={18} /> Approve & Grant Verified Badge
                </button>
              )}

              {!selectedApp.status.includes('Rejected') && (
                <button
                  onClick={() => handleReject(selectedApp.id, selectedApp.name)}
                  style={{
                    flex: 1,
                    padding: '14px',
                    borderRadius: '14px',
                    background: 'rgba(244, 63, 94, 0.15)',
                    border: '1px solid rgba(244, 63, 94, 0.3)',
                    color: '#F43F5E',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} /> Reject Application
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#1E293B',
            borderRadius: '24px',
            padding: '24px',
            maxWidth: '520px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>Document Preview</h3>
              <button onClick={() => setPreviewDoc(null)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '30px', textAlign: 'center', marginBottom: '18px', border: '1px dashed rgba(255,255,255,0.1)' }}>
              <FileText size={48} color="#818CF8" style={{ margin: '0 auto 12px' }} />
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>{previewDoc}</div>
              <p style={{ fontSize: '0.78rem', color: '#34D399', marginTop: '6px' }}>● Digitally Cryptographically Verified & Tamper-Proof</p>
            </div>
            <button
              onClick={() => setPreviewDoc(null)}
              style={{ width: '100%', padding: '12px', borderRadius: '12px', background: '#4F46E5', color: '#FFFFFF', fontWeight: 800, border: 'none', cursor: 'pointer' }}
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
