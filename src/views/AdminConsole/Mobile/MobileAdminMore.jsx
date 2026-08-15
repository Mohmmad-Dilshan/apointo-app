import React, { useState } from "react";
import { Users, HelpCircle, Shield, Activity, Settings, ChevronRight, Terminal, Server, Key, LogOut } from "lucide-react";
import MobileAdminUsers from "./MobileAdminUsers";
import MobileAdminSupport from "./MobileAdminSupport";

function BackHeader({ title, onBack }) {
  return (
    <div style={{ background: "#131B2E", padding: "16px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={onBack} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ChevronRight size={16} color="#94A3B8" style={{ transform: "rotate(180deg)" }} />
      </button>
      <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#F8FAFC" }}>{title}</h2>
    </div>
  );
}

function SystemLogsSection({ onBack }) {
  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      <BackHeader title="System & API Logs" onBack={onBack} />
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {[
          { level: "INFO", text: "Cron job 'daily_payout_reconciliation' completed successfully in 420ms", time: "18:45:10" },
          { level: "OK", text: "Razorpay webhook verified: TXN_901 payment captured ₹329", time: "18:32:00" },
          { level: "WARN", text: "High traffic detected on Gurugram salon cluster (45 req/s)", time: "18:15:22" },
          { level: "INFO", text: "New merchant KYC document uploaded: BIZ-00192", time: "17:50:11" },
          { level: "AUTH", text: "SuperAdmin login session generated from IP 103.21.24.1", time: "17:30:00" },
        ].map((log, i) => (
          <div key={i} style={{ background: "#131B2E", borderRadius: "10px", padding: "10px 12px", border: "1px solid rgba(255, 255, 255, 0.06)", fontFamily: "monospace", fontSize: "0.72rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{
                fontWeight: 800,
                color: log.level === "OK" ? "#34D399" : log.level === "WARN" ? "#FBBF24" : log.level === "AUTH" ? "#EC4899" : "#818CF8"
              }}>
                [{log.level}]
              </span>
              <span style={{ color: "#64748B" }}>{log.time}</span>
            </div>
            <div style={{ color: "#CBD5E1" }}>{log.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MobileAdminMore() {
  const [section, setSection] = useState(null);

  if (section === "users") return <div style={{ background: "#090D16", minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <BackHeader title="User Directory" onBack={() => setSection(null)} />
    <div style={{ flex: 1, overflowY: "auto" }}><MobileAdminUsers /></div>
  </div>;

  if (section === "support") return <div style={{ background: "#090D16", minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <BackHeader title="Escalated Support Desk" onBack={() => setSection(null)} />
    <div style={{ flex: 1, overflowY: "auto" }}><MobileAdminSupport /></div>
  </div>;

  if (section === "logs") return <SystemLogsSection onBack={() => setSection(null)} />;

  const menuItems = [
    { id: "users", label: "User & Customer Directory", icon: <Users size={18} color="#818CF8" />, bg: "rgba(99, 102, 241, 0.15)", desc: "1,240 registered users & permissions" },
    { id: "support", label: "Escalated Support Desk", icon: <HelpCircle size={18} color="#F43F5E" />, bg: "rgba(244, 63, 94, 0.15)", desc: "2 open customer dispute tickets" },
    { id: "logs", label: "System & API Logs", icon: <Terminal size={18} color="#38BDF8" />, bg: "rgba(56, 189, 248, 0.15)", desc: "Live backend activity & webhooks" },
    { id: "infra", label: "Cloud Infrastructure", icon: <Server size={18} color="#34D399" />, bg: "rgba(52, 211, 153, 0.15)", desc: "Server health & database latency" },
    { id: "security", label: "Security & API Keys", icon: <Key size={18} color="#FBBF24" />, bg: "rgba(251, 191, 36, 0.15)", desc: "Payment gateways & auth tokens" },
  ];

  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      {/* SuperAdmin ID Card */}
      <div style={{
        background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
        padding: "20px 16px",
        margin: "14px",
        borderRadius: "18px",
        border: "1px solid rgba(99, 102, 241, 0.3)",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(99, 102, 241, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(129, 140, 248, 0.4)" }}>
            <Shield size={24} color="#818CF8" />
          </div>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF" }}>Super Admin</div>
            <div style={{ fontSize: "0.72rem", color: "#A5B4FC", marginTop: "2px" }}>admin@apointo.in • Root Access</div>
            <span style={{ fontSize: "0.62rem", color: "#34D399", background: "rgba(16, 185, 129, 0.2)", padding: "2px 6px", borderRadius: "4px", marginTop: "4px", display: "inline-block", fontWeight: 700 }}>
              ● 2FA Secured Session
            </span>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setSection(item.id)}
            style={{
              background: "#131B2E",
              borderRadius: "16px",
              padding: "14px 16px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textAlign: "left",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)"
            }}
          >
            <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#F8FAFC" }}>{item.label}</div>
              <div style={{ fontSize: "0.68rem", color: "#94A3B8", marginTop: "2px" }}>{item.desc}</div>
            </div>
            <ChevronRight size={16} color="#64748B" />
          </button>
        ))}
      </div>
    </div>
  );
}
