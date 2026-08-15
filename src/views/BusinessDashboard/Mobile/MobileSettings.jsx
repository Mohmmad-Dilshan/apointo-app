import React, { useState } from "react";
import { Save, Building, MapPin, Clock, Camera, Phone, Globe, Share2, ShieldCheck, ChevronRight, Check, Bell, Moon } from "lucide-react";

const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export default function MobileSettings() {
  const [section, setSection] = useState("main");
  const [hours, setHours] = useState({
    Mon:{open:true,from:"09:00",to:"20:00"}, Tue:{open:true,from:"09:00",to:"20:00"},
    Wed:{open:true,from:"09:00",to:"20:00"}, Thu:{open:true,from:"09:00",to:"20:00"},
    Fri:{open:true,from:"09:00",to:"21:00"}, Sat:{open:true,from:"08:00",to:"21:00"},
    Sun:{open:false,from:"10:00",to:"18:00"}
  });
  const [notifications, setNotifications] = useState({ newBooking: true, cancellation: true, reminder: true, payouts: true, reviews: false });
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const menuItems = [
    { id: "profile", label: "Business Profile", icon: <Building size={18} color="#4F46E5" />, bg: "#EEF2FF", desc: "Name, category, photos" },
    { id: "hours", label: "Working Hours", icon: <Clock size={18} color="#10B981" />, bg: "#ECFDF5", desc: "Opening & closing times" },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} color="#F59E0B" />, bg: "#FFFBEB", desc: "Alerts & reminders" },
    { id: "location", label: "Location & Address", icon: <MapPin size={18} color="#F43F5E" />, bg: "#FFF1F2", desc: "Salon address & map" },
    { id: "social", label: "Social & Website", icon: <Share2 size={18} color="#06B6D4" />, bg: "#ECFEFF", desc: "Links & online presence" },
    { id: "security", label: "Security & Verify", icon: <ShieldCheck size={18} color="#8B5CF6" />, bg: "#F5F3FF", desc: "KYC & partner status" },
  ];

  if (section === "hours") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      <div style={{ background: "#FFFFFF", padding: "16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setSection("main")} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>Working Hours</h2>
      </div>
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {DAYS.map(day => (
          <div key={day} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px 16px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A", width: "34px" }}>{day}</span>
            <div onClick={() => setHours(h => ({...h, [day]: {...h[day], open: !h[day].open}}))} style={{ width: "38px", height: "21px", borderRadius: "999px", background: hours[day].open ? "#4F46E5" : "#E2E8F0", position: "relative", cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }}>
              <div style={{ position: "absolute", top: "2.5px", left: hours[day].open ? "19px" : "2.5px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", transition: "left 0.2s" }} />
            </div>
            {hours[day].open ? (
              <div style={{ flex: 1, display: "flex", gap: "8px", alignItems: "center" }}>
                <input type="time" value={hours[day].from} onChange={e => setHours(h => ({...h, [day]: {...h[day], from: e.target.value}}))} style={{ flex: 1, padding: "6px 8px", borderRadius: "8px", border: "1px solid #E2E8F0", fontSize: "0.78rem", fontWeight: 700, color: "#0F172A", outline: "none" }} />
                <span style={{ fontSize: "0.7rem", color: "#94A3B8" }}>to</span>
                <input type="time" value={hours[day].to} onChange={e => setHours(h => ({...h, [day]: {...h[day], to: e.target.value}}))} style={{ flex: 1, padding: "6px 8px", borderRadius: "8px", border: "1px solid #E2E8F0", fontSize: "0.78rem", fontWeight: 700, color: "#0F172A", outline: "none" }} />
              </div>
            ) : (
              <span style={{ fontSize: "0.78rem", color: "#94A3B8", fontWeight: 600 }}>Closed</span>
            )}
          </div>
        ))}
        <button onClick={save} style={{ width: "100%", padding: "13px", borderRadius: "14px", background: saved ? "linear-gradient(135deg, #059669, #10B981)" : "linear-gradient(135deg, #6366F1, #4F46E5)", color: "#FFFFFF", fontSize: "0.88rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "6px", boxShadow: "0 6px 18px rgba(79,70,229,0.3)" }}>
          {saved ? <><Check size={18} /> Saved!</> : <><Save size={18} /> Save Hours</>}
        </button>
      </div>
    </div>
  );

  if (section === "notifications") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      <div style={{ background: "#FFFFFF", padding: "16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setSection("main")} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>Notifications</h2>
      </div>
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {Object.entries(notifications).map(([key, val]) => {
          const labels = { newBooking: "New Booking Alert", cancellation: "Cancellation Notice", reminder: "Appointment Reminder", payouts: "Payout Notifications", reviews: "New Customer Review" };
          const descs = { newBooking: "When a new booking is confirmed", cancellation: "When a booking is cancelled", reminder: "30 min before appointment", payouts: "When money is transferred", reviews: "When a review is posted" };
          return (
            <div key={key} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px 16px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A" }}>{labels[key]}</div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "2px" }}>{descs[key]}</div>
              </div>
              <div onClick={() => setNotifications(n => ({...n, [key]: !n[key]}))} style={{ width: "40px", height: "22px", borderRadius: "999px", background: val ? "#4F46E5" : "#E2E8F0", position: "relative", cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }}>
                <div style={{ position: "absolute", top: "3px", left: val ? "21px" : "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", transition: "left 0.2s" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Profile Banner */}
      <div style={{ background: "linear-gradient(135deg, #1E1B4B, #4F46E5)", padding: "20px 16px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: "100px", height: "100px", borderRadius: "50%", background: "rgba(99,102,241,0.25)", filter: "blur(20px)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed rgba(255,255,255,0.4)" }}>
            <Camera size={22} color="#FFFFFF" />
          </div>
          <div>
            <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#FFFFFF" }}>Urban Cut Studio</h2>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.65)", marginTop: "3px" }}>Sector 14, Gurugram • Hair Salon</div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "5px" }}>
              <ShieldCheck size={11} color="#10B981" />
              <span style={{ fontSize: "0.65rem", color: "#10B981", fontWeight: 700 }}>Verified Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map(item => (
          <button key={item.id} onClick={() => setSection(item.id)} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px 16px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "14px", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A" }}>{item.label}</div>
              <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "2px" }}>{item.desc}</div>
            </div>
            <ChevronRight size={16} color="#CBD5E1" />
          </button>
        ))}
      </div>
    </div>
  );
}
