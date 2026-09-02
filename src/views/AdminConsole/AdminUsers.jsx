import React, { useState } from 'react';
import { Users, Search, ShieldCheck, AlertTriangle, CheckCircle2, UserCheck, UserX, Award, Plus, Minus, X } from 'lucide-react';

export default function AdminUsers() {
  const [users, setUsers] = useState([
    { id: "u_1", name: "Dilshan Perera", phone: "+91 98765 43210", email: "dilshan.p@example.com", city: "Bengaluru", points: 2450, bookingsCount: 8, status: "Active" },
    { id: "u_2", name: "Sneha Nair", phone: "+91 98123 45678", email: "sneha.n@example.com", city: "Bengaluru", points: 1200, bookingsCount: 5, status: "Active" },
    { id: "u_3", name: "Karan Mehta", phone: "+91 99887 76655", email: "karan.m@example.com", city: "Mumbai", points: 3800, bookingsCount: 12, status: "Active" },
    { id: "u_4", name: "Rohan Verma", phone: "+91 97766 55443", email: "rohan.v@example.com", city: "Delhi", points: 450, bookingsCount: 1, status: "Suspended" }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserForPoints, setSelectedUserForPoints] = useState(null);
  const [pointsDelta, setPointsDelta] = useState(100);
  const [toastMsg, setToastMsg] = useState(null);

  const toggleUserStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'Active' ? 'Suspended' : 'Active';
        setToastMsg(`User ${u.name} is now marked as ${nextStatus}.`);
        setTimeout(() => setToastMsg(null), 3000);
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  const handleAdjustPoints = (isAdd) => {
    if (!selectedUserForPoints) return;
    const delta = isAdd ? pointsDelta : -pointsDelta;
    setUsers(users.map(u => {
      if (u.id === selectedUserForPoints.id) {
        const newPts = Math.max(0, u.points + delta);
        return { ...u, points: newPts };
      }
      return u;
    }));
    setToastMsg(`${isAdd ? '+' : '-'}${pointsDelta} loyalty points adjusted for ${selectedUserForPoints.name}!`);
    setSelectedUserForPoints(null);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.phone.includes(searchQuery) ||
    u.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#F8FAFC' }} className="animate-fade-in">
      {/* Header */}
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
            <Users size={20} color="#818CF8" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Consumer Account Directory</h2>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
            Inspect user profiles, reward wallet balances, activity history & permissions
          </p>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#0F172A', padding: '8px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', width: '320px' }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#FFFFFF', width: '100%', fontSize: '0.82rem', outline: 'none' }}
          />
        </div>
      </div>

      {/* Toast Alert */}
      {toastMsg && (
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', borderRadius: '14px', padding: '12px 18px', color: '#34D399', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Users Table */}
      <div style={{ background: '#131B2E', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '16px 20px' }}>User Name</th>
              <th style={{ padding: '16px 20px' }}>Contact Details</th>
              <th style={{ padding: '16px 20px' }}>Operating City</th>
              <th style={{ padding: '16px 20px' }}>Reward Balance</th>
              <th style={{ padding: '16px 20px' }}>Status</th>
              <th style={{ padding: '16px 20px', textAlign: 'right' }}>Administrative Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(u => {
              const isActive = u.status === 'Active';

              return (
                <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 800, color: '#FFFFFF' }}>
                    <div>{u.name}</div>
                    <span style={{ fontSize: '0.68rem', color: '#818CF8' }}>#{u.id} • {u.bookingsCount} bookings</span>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#CBD5E1' }}>
                    <div>{u.phone}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{u.email}</div>
                  </td>
                  <td style={{ padding: '16px 20px', fontWeight: 600, color: '#94A3B8' }}>{u.city}</td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 900, color: '#FBBF24', fontSize: '1rem' }}>★ {u.points.toLocaleString()} PTS</span>
                      <button
                        onClick={() => setSelectedUserForPoints(u)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: '6px',
                          background: 'rgba(251, 191, 36, 0.15)',
                          border: '1px solid rgba(251, 191, 36, 0.3)',
                          color: '#FBBF24',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        Adjust
                      </button>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      color: isActive ? '#34D399' : '#F43F5E',
                      background: isActive ? 'rgba(52, 211, 153, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                      border: isActive ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(244, 63, 94, 0.3)'
                    }}>
                      {u.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <button
                      onClick={() => toggleUserStatus(u.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '10px',
                        background: isActive ? 'rgba(244, 63, 94, 0.15)' : 'rgba(52, 211, 153, 0.15)',
                        border: isActive ? '1px solid rgba(244, 63, 94, 0.3)' : '1px solid rgba(52, 211, 153, 0.3)',
                        color: isActive ? '#F43F5E' : '#34D399',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      {isActive ? <UserX size={14} /> : <UserCheck size={14} />}
                      <span>{isActive ? 'Suspend' : 'Reactivate'}</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Adjust Points Modal */}
      {selectedUserForPoints && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
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
            padding: '26px',
            maxWidth: '440px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF' }}>Adjust Loyalty Points</h3>
              <button onClick={() => setSelectedUserForPoints(null)} style={{ background: '#0F172A', border: 'none', color: '#94A3B8', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '16px', marginBottom: '18px' }}>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Target Customer</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>{selectedUserForPoints.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#FBBF24', fontWeight: 800, marginTop: '4px' }}>
                Current Points: {selectedUserForPoints.points} PTS
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Points Amount</label>
              <input
                type="number"
                value={pointsDelta}
                onChange={(e) => setPointsDelta(Number(e.target.value))}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '12px', background: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '1rem', fontWeight: 800, outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => handleAdjustPoints(false)}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  color: '#F43F5E',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Minus size={14} /> Deduct Points
              </button>

              <button
                onClick={() => handleAdjustPoints(true)}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)'
                }}
              >
                <Plus size={14} /> Add Points
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
