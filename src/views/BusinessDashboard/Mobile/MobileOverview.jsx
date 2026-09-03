import React, { useState } from "react";
import {
  Calendar,
  TrendingUp,
  Users,
  Star,
  ChevronRight,
  Bell,
  Plus,
  QrCode,
  CreditCard,
  Clock,
  CheckCircle2,
  Play,
  ArrowUpRight,
  ShieldCheck,
  UserCheck,
  Scissors,
  DollarSign,
  AlertCircle,
  Phone,
  Sparkles,
  Layers,
  X,
  Zap,
  Bot
} from "lucide-react";
import { usePlatform } from "../../../context/PlatformContext";

export default function MobileOverview({ onNavigateTab, onOpenPOS, onOpenScanner, onOpenAutomations }) {
  const {
    bookings,
    computedStats,
    updateBookingStatus,
    callNextInQueue,
    automationSettings
  } = usePlatform();

  const [greeting] = useState(() => {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning";
    if (h < 17) return "Good Afternoon";
    return "Good Evening";
  });

  const schedule = bookings.map(b => ({
    id: b.id,
    time: b.time || "02:30 PM",
    customer: b.customer || b.customerName || "Customer",
    phone: b.customerPhone || "+91 98765 43210",
    service: b.serviceName || b.service || "Classic Haircut",
    staff: b.staffName || b.staff || "Rahul Sharma",
    status: b.status || "Confirmed",
    paid: `₹${b.totalPaid || b.price || 329}`,
    duration: b.duration || "45 min",
    otp: b.otp || "4892"
  }));

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [onlineBookingsEnabled, setOnlineBookingsEnabled] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleUpdateStatus = (aptId, newStatus) => {
    updateBookingStatus(aptId, newStatus);
    if (selectedAppointment && selectedAppointment.id === aptId) {
      setSelectedAppointment({ ...selectedAppointment, status: newStatus });
    }
    showToast(`Status updated to "${newStatus}"`);
  };

  const metrics = [
    { label: "Today Appts", value: String(computedStats.totalBookingsCount), sub: "+4 vs yesterday", icon: <Calendar size={18} color="#4F46E5" />, bg: "#EEF2FF", color: "#4F46E5" },
    { label: "Today Revenue", value: `₹${computedStats.providerTodayRevenue.toLocaleString('en-IN')}`, sub: "94% of daily target", icon: <TrendingUp size={18} color="#10B981" />, bg: "#ECFDF5", color: "#10B981" },
    { label: "Active Queue", value: String(computedStats.activeBookingsCount), sub: `${computedStats.waitingCount || 0} in lounge`, icon: <Users size={18} color="#06B6D4" />, bg: "#ECFEFF", color: "#06B6D4" },
    { label: "Rating & Reviews", value: "4.9 ★", sub: "342 verified reviews", icon: <Star size={18} color="#F59E0B" />, bg: "#FFFBEB", color: "#F59E0B" },
  ];

  const statusBadge = (st) => {
    if (st === "In Service") return { color: "#4F46E5", bg: "#EEF2FF", label: "In Service" };
    if (st === "Waiting" || st === "Waiting in Lounge") return { color: "#D97706", bg: "#FFFBEB", label: "In Lounge" };
    if (st === "Completed") return { color: "#059669", bg: "#ECFDF5", label: "Completed" };
    return { color: "#6366F1", bg: "#F1F5F9", label: "Confirmed" };
  };

  return (
    <div style={{ paddingBottom: "30px", background: "#F8FAFC", minHeight: "100%", position: "relative" }}>
      {/* Toast popup */}
      {toastMessage && (
        <div style={{
          position: "absolute",
          top: "16px",
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
        padding: "18px 16px 36px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -20, left: -20, width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Top Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{greeting}, Manager</span>
                <span style={{ fontSize: "0.6rem", background: "rgba(16,185,129,0.2)", color: "#34D399", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>PRO SAAS</span>
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em" }}>Urban Cut Studio</h2>
              
              {/* Online / Offline switch */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                <button
                  onClick={() => {
                    const next = !onlineBookingsEnabled;
                    setOnlineBookingsEnabled(next);
                    showToast(next ? "Online Bookings is now LIVE" : "Online Bookings are now PAUSED");
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: onlineBookingsEnabled ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
                    border: onlineBookingsEnabled ? "1px solid rgba(16, 185, 129, 0.4)" : "1px solid rgba(239, 68, 68, 0.4)",
                    padding: "3px 8px",
                    borderRadius: "999px",
                    cursor: "pointer"
                  }}
                >
                  <div style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: onlineBookingsEnabled ? "#10B981" : "#EF4444",
                    boxShadow: onlineBookingsEnabled ? "0 0 8px #10B981" : "0 0 8px #EF4444"
                  }} />
                  <span style={{ fontSize: "0.68rem", color: "#FFFFFF", fontWeight: 700 }}>
                    {onlineBookingsEnabled ? "Accepting Online Bookings" : "Online Bookings Paused"}
                  </span>
                </button>
              </div>
            </div>

            {/* Notification Bell */}
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => showToast("3 pending client notifications")}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}
              >
                <Bell size={17} color="#FFFFFF" />
                <span style={{ position: "absolute", top: "7px", right: "7px", width: "8px", height: "8px", borderRadius: "50%", background: "#F43F5E", border: "2px solid #0F172A" }} />
              </button>
            </div>
          </div>

          {/* Quick Action Matrix Banner (3 Columns) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "6px",
            marginTop: "12px"
          }}>
            {/* Walk-in POS Button */}
            <button
              onClick={onOpenPOS}
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "14px",
                padding: "8px 6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                color: "#FFFFFF",
                boxShadow: "0 4px 14px rgba(79,70,229,0.4)",
                cursor: "pointer"
              }}
            >
              <div style={{ width: "26px", height: "26px", borderRadius: "8px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Plus size={15} color="#FFFFFF" />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 800 }}>Walk-in POS</div>
                <div style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.8)" }}>Quick Bill</div>
              </div>
            </button>

            {/* Check-in QR & OTP Scanner */}
            <button
              onClick={onOpenScanner}
              style={{
                background: "rgba(255, 255, 255, 0.14)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "14px",
                padding: "8px 6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                color: "#FFFFFF",
                backdropFilter: "blur(10px)",
                cursor: "pointer"
              }}
            >
              <div style={{ width: "26px", height: "26px", borderRadius: "8px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <QrCode size={15} color="#FFFFFF" />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 800 }}>Check-in</div>
                <div style={{ fontSize: "0.56rem", color: "rgba(255,255,255,0.8)" }}>Scan Pass</div>
              </div>
            </button>

            {/* Smart Automations AI Button */}
            <button
              onClick={onOpenAutomations}
              style={{
                background: "rgba(255, 255, 255, 0.14)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "14px",
                padding: "8px 6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                color: "#FFFFFF",
                backdropFilter: "blur(10px)",
                cursor: "pointer"
              }}
            >
              <div style={{ width: "26px", height: "26px", borderRadius: "8px", background: "rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={15} color="#FBBF24" />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 800 }}>Auto AI</div>
                <div style={{ fontSize: "0.56rem", color: "#FDE68A" }}>{Object.values(automationSettings).filter(Boolean).length}/6 Active</div>
              </div>
            </button>
          </div>

          {/* Smart Queue Dispatcher Alert Bar */}
          <div style={{
            marginTop: "10px",
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "14px",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }} />
              <div>
                <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "#FFFFFF" }}>
                  {computedStats.waitingCount > 0 ? `${computedStats.waitingCount} Waiting in Lounge` : "Smart Queue Active"}
                </div>
                <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.7)" }}>
                  Auto-dispatch & chair caller
                </div>
              </div>
            </div>

            <button
              onClick={callNextInQueue}
              style={{
                background: "#10B981",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                padding: "5px 10px",
                fontSize: "0.72rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Bot size={13} />
              <span>Call Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{ padding: "0 14px", marginTop: "-18px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 14px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {m.icon}
                </div>
                <ArrowUpRight size={14} color="#94A3B8" />
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>{m.value}</div>
              <div style={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 600, marginTop: "2px" }}>{m.label}</div>
              <div style={{ fontSize: "0.65rem", color: m.color, fontWeight: 700, marginTop: "3px" }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Target & Occupancy Meter */}
      <div style={{ padding: "14px 14px 0" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px 16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Sparkles size={14} color="#F59E0B" />
              <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A" }}>Today's Revenue Goal</span>
            </div>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#10B981" }}>₹42,850 / ₹45,000</span>
          </div>
          <div style={{ width: "100%", height: "8px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden", marginBottom: "6px" }}>
            <div style={{ width: "95%", height: "100%", background: "linear-gradient(90deg, #4F46E5 0%, #10B981 100%)", borderRadius: "999px" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.68rem", color: "#64748B", fontWeight: 600 }}>
            <span>95.2% Achieved</span>
            <span>Salon Occupancy: 84% Peak</span>
          </div>
        </div>
      </div>

      {/* Live Waiting Lounge & Queue Controller */}
      <div style={{ padding: "14px 14px 0" }}>
        <div style={{
          background: "linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 100%)",
          borderRadius: "16px",
          padding: "14px 16px",
          border: "1px solid #A7F3D0",
          boxShadow: "0 2px 10px rgba(16,185,129,0.08)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#065F46" }}>Live Waiting Lounge</span>
            </div>
            <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#059669", background: "#D1FAE5", padding: "3px 8px", borderRadius: "999px" }}>
              2 Clients in Queue
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>Next in Line: Arjun Kapoor</div>
              <div style={{ fontSize: "0.68rem", color: "#047857" }}>Desk OTP: #1923 • Est. Wait: 8 mins</div>
            </div>
            <button
              onClick={() => showToast("🔔 Notification sound sent to Arjun Kapoor (Token #2)")}
              style={{
                padding: "7px 12px",
                borderRadius: "10px",
                background: "#059669",
                color: "#FFFFFF",
                fontSize: "0.72rem",
                fontWeight: 800,
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(5,150,105,0.3)"
              }}
            >
              <span>Call Next</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Today Schedule Timeline */}
      <div style={{ padding: "18px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A" }}>Live Appointments Feed</h3>
            <p style={{ fontSize: "0.68rem", color: "#64748B" }}>Real-time chair & specialist status</p>
          </div>
          <button
            onClick={() => onNavigateTab("appointments")}
            style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4F46E5", display: "flex", alignItems: "center", gap: "2px", background: "none", border: "none", cursor: "pointer" }}
          >
            All Bookings <ChevronRight size={13} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {schedule.map((item) => {
            const badge = statusBadge(item.status);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedAppointment(item)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "14px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div style={{
                      minWidth: "56px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#4F46E5",
                      textAlign: "center",
                      background: "#EEF2FF",
                      borderRadius: "10px",
                      padding: "6px 4px"
                    }}>
                      {item.time}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{item.customer}</div>
                      <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "1px" }}>{item.service}</div>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "0.66rem", fontWeight: 800, color: badge.color, background: badge.bg, padding: "3px 8px", borderRadius: "999px" }}>
                      {badge.label}
                    </span>
                    <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A", marginTop: "4px" }}>{item.paid}</div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "8px", borderTop: "1px solid #F1F5F9", fontSize: "0.7rem", color: "#64748B" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Scissors size={12} color="#4F46E5" />
                    <span>Specialist: <strong style={{ color: "#0F172A" }}>{item.staff}</strong></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ background: "#F1F5F9", padding: "2px 6px", borderRadius: "6px", fontWeight: 700, color: "#0F172A" }}>OTP: {item.otp}</span>
                    <ChevronRight size={14} color="#94A3B8" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Staff Real-time Shift Overview */}
      <div style={{ padding: "18px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A" }}>Specialists on Duty</h3>
          <button onClick={() => onNavigateTab("more")} style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4F46E5", background: "none", border: "none", cursor: "pointer" }}>Manage Rosters</button>
        </div>
        <div style={{ display: "flex", gap: "10px", overflowX: "auto" }} className="no-scrollbar">
          {[
            { name: "Rahul Sharma", role: "Senior Barber", status: "In Service (20m left)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", duty: "busy", clientsToday: 6 },
            { name: "Priya Verma", role: "Spa & Colorist", status: "Available for Next", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", duty: "free", clientsToday: 4 },
            { name: "Vikram Singh", role: "Beard Specialist", status: "In Service (10m left)", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120", duty: "busy", clientsToday: 5 }
          ].map((stf, idx) => (
            <div key={idx} style={{ minWidth: "160px", background: "#FFFFFF", borderRadius: "16px", padding: "12px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <img src={stf.avatar} alt={stf.name} style={{ width: "36px", height: "36px", borderRadius: "10px", objectFit: "cover" }} />
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A" }}>{stf.name}</div>
                  <div style={{ fontSize: "0.65rem", color: "#64748B" }}>{stf.role}</div>
                </div>
              </div>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, color: stf.duty === "free" ? "#059669" : "#4F46E5", background: stf.duty === "free" ? "#ECFDF5" : "#EEF2FF", padding: "3px 6px", borderRadius: "6px", textAlign: "center" }}>
                {stf.status}
              </div>
              <div style={{ fontSize: "0.65rem", color: "#94A3B8", marginTop: "6px", textAlign: "center" }}>
                {stf.clientsToday} appointments completed
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Detail Bottom Sheet Modal */}
      {selectedAppointment && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 9990,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center"
        }}>
          <div style={{
            width: "100%",
            maxWidth: "440px",
            background: "#FFFFFF",
            borderRadius: "24px 24px 0 0",
            padding: "20px 18px 24px",
            boxShadow: "0 -10px 40px rgba(0,0,0,0.2)",
            maxHeight: "85vh",
            overflowY: "auto"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748B" }}>Appointment Details</span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>{selectedAppointment.customer}</h3>
              </div>
              <button
                onClick={() => setSelectedAppointment(null)}
                style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={16} color="#64748B" />
              </button>
            </div>

            {/* Status Selector */}
            <div style={{ background: "#F8FAFC", borderRadius: "14px", padding: "12px", marginBottom: "14px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", marginBottom: "8px" }}>Change Live Service Status:</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {["Waiting", "In Service", "Completed", "Cancelled"].map(st => (
                  <button
                    key={st}
                    onClick={() => handleUpdateStatus(selectedAppointment.id, st)}
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      border: selectedAppointment.status === st ? "none" : "1px solid #E2E8F0",
                      background: selectedAppointment.status === st ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF",
                      color: selectedAppointment.status === st ? "#FFFFFF" : "#475569",
                      cursor: "pointer"
                    }}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#F8FAFC", borderRadius: "10px" }}>
                <span style={{ fontSize: "0.78rem", color: "#64748B" }}>Service</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A" }}>{selectedAppointment.service}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#F8FAFC", borderRadius: "10px" }}>
                <span style={{ fontSize: "0.78rem", color: "#64748B" }}>Assigned Specialist</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#4F46E5" }}>{selectedAppointment.staff}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#F8FAFC", borderRadius: "10px" }}>
                <span style={{ fontSize: "0.78rem", color: "#64748B" }}>Scheduled Time</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A" }}>{selectedAppointment.time} ({selectedAppointment.duration})</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#F8FAFC", borderRadius: "10px" }}>
                <span style={{ fontSize: "0.78rem", color: "#64748B" }}>Desk Check-in OTP</span>
                <span style={{ fontSize: "0.95rem", fontWeight: 900, color: "#10B981", letterSpacing: "0.05em" }}>{selectedAppointment.otp}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "8px" }}>
              <a
                href={`tel:${selectedAppointment.phone}`}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "12px",
                  background: "#EEF2FF",
                  color: "#4F46E5",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                }}
              >
                <Phone size={15} /> Call Client
              </a>
              <button
                onClick={() => {
                  handleUpdateStatus(selectedAppointment.id, "Completed");
                  setSelectedAppointment(null);
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #10B981, #059669)",
                  color: "#FFFFFF",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  cursor: "pointer"
                }}
              >
                <CheckCircle2 size={15} /> Collect Bill & Finish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
