import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const bgColors = {
    success: '#10B981',
    error: '#F43F5E',
    info: '#4F46E5'
  };

  const icons = {
    success: <CheckCircle2 size={18} color="#FFFFFF" />,
    error: <AlertCircle size={18} color="#FFFFFF" />,
    info: <Info size={18} color="#FFFFFF" />
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: bgColors[toast.type] || bgColors.info,
      color: '#FFFFFF',
      padding: '12px 20px',
      borderRadius: '999px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      zIndex: 2000,
      fontSize: '0.85rem',
      fontWeight: 600,
      maxWidth: '90%',
      whiteSpace: 'nowrap'
    }} className="animate-slide-up">
      {icons[toast.type] || icons.info}
      <span>{toast.message}</span>
      <button onClick={onClose} style={{ marginLeft: '4px', opacity: 0.8, color: '#FFFFFF' }}>
        <X size={14} />
      </button>
    </div>
  );
}
