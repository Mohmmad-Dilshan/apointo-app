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
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: bgColors[toast.type] || bgColors.info,
      color: '#FFFFFF',
      padding: '10px 18px',
      borderRadius: '999px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      zIndex: 3000,
      fontSize: '0.82rem',
      fontWeight: 700,
      maxWidth: '92%',
      whiteSpace: 'nowrap'
    }} className="animate-fade-in">
      {icons[toast.type] || icons.info}
      <span>{toast.message}</span>
      <button onClick={onClose} style={{ marginLeft: '4px', opacity: 0.8, color: '#FFFFFF' }}>
        <X size={14} />
      </button>
    </div>
  );
}
