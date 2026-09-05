import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Scissors, Clock, X, Check } from 'lucide-react';
import { usePlatform } from '../../context/PlatformContext';

export default function ProviderServices() {
  const { businesses, addBusinessService, deleteBusinessService } = usePlatform();
  const currentBiz = businesses.find(b => b.id === 'biz_1') || businesses[0];
  const services = currentBiz?.services || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSrv, setNewSrv] = useState({ name: '', description: '', duration: '45 min', price: 399, image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=400' });

  const handleAddService = (e) => {
    e.preventDefault();
    if (!newSrv.name) return;

    addBusinessService(currentBiz.id, {
      name: newSrv.name,
      description: newSrv.description || "Professional grooming service tailored for your needs.",
      duration: newSrv.duration,
      price: Number(newSrv.price),
      image: newSrv.image
    });

    setNewSrv({ name: '', description: '', duration: '45 min', price: 399, image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=400' });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    deleteBusinessService(currentBiz.id, id);
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="animate-fade-in">
      <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Services Catalog</h2>
          <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Add, edit or disable business offerings</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Plus size={16} /> Add New Service
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {services.map(srv => (
          <div key={srv.id} style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', gap: '16px' }}>
            <img src={srv.image} alt={srv.name} style={{ width: '100px', height: '100px', borderRadius: '16px', objectFit: 'cover' }} />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>{srv.name}</h4>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button onClick={() => handleDelete(srv.id)} style={{ padding: '4px', color: '#F43F5E' }} title="Delete service"><Trash2 size={16} /></button>
                  </div>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748B', margin: '4px 0' }}>{srv.duration} • {srv.description.substring(0, 60)}...</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #F1F5F9' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>₹{srv.price}</div>
                <span className="badge badge-success">Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Service Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', width: '100%', maxWidth: '450px' }} className="animate-pop">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Create New Service</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}><X size={18} color="#64748B" /></button>
            </div>

            <form onSubmit={handleAddService} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Service Name</label>
                <input
                  type="text"
                  placeholder="e.g. Organic Keratin Treatment"
                  value={newSrv.name}
                  onChange={(e) => setNewSrv({ ...newSrv, name: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.88rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Price (₹)</label>
                  <input
                    type="number"
                    value={newSrv.price}
                    onChange={(e) => setNewSrv({ ...newSrv, price: e.target.value })}
                    required
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.88rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Duration</label>
                  <input
                    type="text"
                    value={newSrv.duration}
                    onChange={(e) => setNewSrv({ ...newSrv, duration: e.target.value })}
                    required
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Description</label>
                <textarea
                  rows="3"
                  placeholder="Service description and benefits..."
                  value={newSrv.description}
                  onChange={(e) => setNewSrv({ ...newSrv, description: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.88rem', fontFamily: 'inherit' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  marginTop: '8px'
                }}
              >
                Save & Publish Offering
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

