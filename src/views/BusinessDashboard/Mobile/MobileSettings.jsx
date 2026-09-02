import React, { useState } from "react";
import {
  Save,
  Building,
  MapPin,
  Clock,
  Camera,
  Phone,
  Globe,
  Share2,
  ShieldCheck,
  ChevronRight,
  Check,
  Bell,
  CheckCircle2,
  X,
  Lock,
  QrCode,
  Image as ImageIcon
} from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function MobileSettings() {
  const [section, setSection] = useState("main");
  const [hours, setHours] = useState({
    Mon: { open: true, from: "09:00", to: "20:00" },
    Tue: { open: true, from: "09:00", to: "20:00" },
    Wed: { open: true, from: "09:00", to: "20:00" },
    Thu: { open: true, from: "09:00", to: "20:00" },
    Fri: { open: true, from: "09:00", to: "21:00" },
    Sat: { open: true, from: "08:00", to: "21:00" },
    Sun: { open: false, from: "10:00", to: "18:00" }
  });

  const [businessName, setBusinessName] = useState("Urban Cut Studio");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [address, setAddress] = useState("100 Feet Rd, Indiranagar, Bengaluru");
  const [gstin, setGstin] = useState("07AABCU9603R1ZM");
  const [upiId, setUpiId] = useState("urbancut@okaxis");

  const [notifications, setNotifications] = useState({
    newBooking: true,
    cancellation: true,
    reminder: true,
    payouts: true,
    reviews: true,
    smsAlerts: false
  });

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleSaveHours = () => {
    showToast("Operating hours updated successfully!");
    setTimeout(() => setSection("main"), 1000);
  };

  const handleSaveProfile = () => {
    showToast("Business profile updated successfully!");
    setTimeout(() => setSection("main"), 1000);
  };

  const menuItems = [
    { id: "profile", label: "Business Profile & Branding", icon: <Building size={18} color="#4F46E5" />, bg: "#EEF2FF", desc: "Name, address, GSTIN & banner photo" },
    { id: "hours", label: "Operating Hours & Holidays", icon: <Clock size={18} color="#10B981" />, bg: "#ECFDF5", desc: "Day-wise opening & closing timings" },
    { id: "payments_qr", label: "UPI QR Code & Bank Account", icon: <QrCode size={18} color="#06B6D4" />, bg: "#ECFEFF", desc: "Direct customer billing QR settings" },
    { id: "notifications", label: "Notification Preferences", icon: <Bell size={18} color="#F59E0B" />, bg: "#FFFBEB", desc: "Sound alerts, push & SMS triggers" },
    { id: "security", label: "KYC & Merchant Verification", icon: <ShieldCheck size={18} color="#8B5CF6" />, bg: "#F5F3FF", desc: "Apointo verified partner status" },
  ];

  /* 1. HOURS SUBPAGE */
  if (section === "hours") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      <div style={{ background: "#FFFFFF", padding: "16px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setSection("main")} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 900, color: "#0F172A" }}>Operating Hours</h2>
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {DAYS.map(day => (
          <div key={day} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "12px 14px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 900, color: "#0F172A", width: "36px" }}>{day}</span>
            <div
              onClick={() => setHours(h => ({ ...h, [day]: { ...h[day], open: !h[day].open } }))}
              style={{ width: "38px", height: "21px", borderRadius: "999px", background: hours[day].open ? "#4F46E5" : "#E2E8F0", position: "relative", cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }}
            >
              <div style={{ position: "absolute", top: "2.5px", left: hours[day].open ? "19px" : "2.5px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", transition: "left 0.2s" }} />
            </div>

            {hours[day].open ? (
              <div style={{ flex: 1, display: "flex", gap: "6px", alignItems: "center" }}>
                <input
                  type="time"
                  value={hours[day].from}
                  onChange={e => setHours(h => ({ ...h, [day]: { ...h[day], from: e.target.value } }))}
                  style={{ flex: 1, padding: "6px", borderRadius: "8px", border: "1px solid #E2E8F0", fontSize: "0.75rem", fontWeight: 700, color: "#0F172A", outline: "none" }}
                />
                <span style={{ fontSize: "0.68rem", color: "#94A3B8" }}>to</span>
                <input
                  type="time"
                  value={hours[day].to}
                  onChange={e => setHours(h => ({ ...h, [day]: { ...h[day], to: e.target.value } }))}
                  style={{ flex: 1, padding: "6px", borderRadius: "8px", border: "1px solid #E2E8F0", fontSize: "0.75rem", fontWeight: 700, color: "#0F172A", outline: "none" }}
                />
              </div>
            ) : (
              <span style={{ fontSize: "0.78rem", color: "#94A3B8", fontWeight: 700 }}>Closed</span>
            )}
          </div>
        ))}

        <button
          onClick={handleSaveHours}
          style={{ width: "100%", padding: "13px", borderRadius: "14px", background: "linear-gradient(135deg, #4F46E5, #6366F1)", color: "#FFFFFF", fontSize: "0.88rem", fontWeight: 800, border: "none", cursor: "pointer", marginTop: "8px", boxShadow: "0 4px 14px rgba(79,70,229,0.3)" }}
        >
          Save Operating Timings
        </button>
      </div>
    </div>
  );

  /* 2. PROFILE SUBPAGE */
  if (section === "profile") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      <div style={{ background: "#FFFFFF", padding: "16px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setSection("main")} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 900, color: "#0F172A" }}>Business Profile</h2>
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Salon / Business Name</label>
          <input type="text" value={businessName} onChange={e => setBusinessName(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }} />
        </div>
        <div>
          <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Reception Phone</label>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }} />
        </div>
        <div>
          <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Full Street Address</label>
          <textarea rows={2} value={address} onChange={e => setAddress(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", resize: "none" }} />
        </div>
        <div>
          <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>GSTIN Tax Identification Number</label>
          <input type="text" value={gstin} onChange={e => setGstin(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }} />
        </div>

        <button
          onClick={handleSaveProfile}
          style={{ width: "100%", padding: "13px", borderRadius: "14px", background: "linear-gradient(135deg, #4F46E5, #6366F1)", color: "#FFFFFF", fontSize: "0.88rem", fontWeight: 800, border: "none", cursor: "pointer", marginTop: "8px" }}
        >
          Save Business Profile
        </button>
      </div>
    </div>
  );

  /* 3. NOTIFICATIONS SUBPAGE */
  if (section === "notifications") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      <div style={{ background: "#FFFFFF", padding: "16px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setSection("main")} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 900, color: "#0F172A" }}>Notification Preferences</h2>
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {Object.entries(notifications).map(([key, val]) => {
          const labels = {
            newBooking: "New Booking Instant Sound Alert",
            cancellation: "Cancellation & Reschedule Notices",
            reminder: "Client Arrival & Waiting Lounge Alert",
            payouts: "Bank Deposit & Payout Clearances",
            reviews: "Customer 5-Star Reviews",
            smsAlerts: "SMS Backup Notifications"
          };
          return (
            <div key={key} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px 16px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>{labels[key]}</div>
              </div>
              <div
                onClick={() => setNotifications(n => ({ ...n, [key]: !n[key] }))}
                style={{ width: "38px", height: "21px", borderRadius: "999px", background: val ? "#4F46E5" : "#E2E8F0", position: "relative", cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }}
              >
                <div style={{ position: "absolute", top: "2.5px", left: val ? "19px" : "2.5px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", transition: "left 0.2s" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  /* 4. MAIN SETTINGS OVERVIEW */
  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px", position: "relative" }}>
      {/* Toast Alert */}
      {toastMessage && (
        <div style={{
          position: "fixed",
          top: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#0F172A",
          color: "#FFFFFF",
          padding: "10px 18px",
          borderRadius: "999px",
          fontSize: "0.78rem",
          fontWeight: 700,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <CheckCircle2 size={14} color="#10B981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Header */}
      <div style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)",
        padding: "20px 16px 30px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative", zIndex: 1 }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.4)" }}>
            <Camera size={24} color="#FFFFFF" />
          </div>
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#FFFFFF" }}>{businessName}</h2>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>Sector 14, Gurugram • Premium Salon</p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "4px" }}>
              <ShieldCheck size={12} color="#10B981" />
              <span style={{ fontSize: "0.68rem", color: "#34D399", fontWeight: 800 }}>Verified Partner (KYC Passed)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Settings */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setSection(item.id)}
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "14px 16px",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textAlign: "left",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              cursor: "pointer"
            }}
          >
            <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{item.label}</div>
              <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "2px" }}>{item.desc}</div>
            </div>
            <ChevronRight size={16} color="#CBD5E1" />
          </button>
        ))}
      </div>
    </div>
  );
}
