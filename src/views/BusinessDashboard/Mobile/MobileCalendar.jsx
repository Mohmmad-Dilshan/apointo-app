import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  User,
  Scissors,
  CheckCircle2,
  Lock,
  X,
  Calendar as CalendarIcon,
  Sparkles,
  Users
} from "lucide-react";

export default function MobileCalendar({ onOpenPOS }) {
  const [viewMode, setViewMode] = useState("Day"); // 'Day' | 'Staff' | 'Week'
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [10, 11, 12, 13, 14, 15, 16];
  const [activeDayIndex, setActiveDayIndex] = useState(4); // 14 Aug (Thu)

  const [specialists] = useState([
    { id: "stf_1", name: "Rahul Sharma", role: "Senior Barber", color: "#4F46E5", bg: "#EEF2FF" },
    { id: "stf_2", name: "Priya Verma", role: "Color & Spa", color: "#EC4899", bg: "#FDF2F8" },
    { id: "stf_3", name: "Vikram Singh", role: "Beard Master", color: "#06B6D4", bg: "#ECFEFF" }
  ]);

  const [appointments, setAppointments] = useState([
    { id: "cal_1", hour: "09:00", customer: "Vikram Malhotra", service: "Classic Haircut", staff: "Rahul Sharma", staffId: "stf_1", color: "#4F46E5", duration: "45 min", status: "Completed" },
    { id: "cal_2", hour: "10:00", customer: "Arjun Kapoor", service: "Beard Crafting Combo", staff: "Vikram Singh", staffId: "stf_3", color: "#06B6D4", duration: "30 min", status: "In Service" },
    { id: "cal_3", hour: "12:00", customer: "Blocked", service: "Staff Lunch & Sanitization", staff: "All Staff", staffId: "all", color: "#64748B", duration: "60 min", isBlocked: true },
    { id: "cal_4", hour: "14:00", customer: "Dilshan Perera", service: "Haircut & Styling", staff: "Rahul Sharma", staffId: "stf_1", color: "#10B981", duration: "45 min", status: "Waiting" },
    { id: "cal_5", hour: "16:00", customer: "Rohan Malhotra", service: "Hair Highlights", staff: "Priya Verma", staffId: "stf_2", color: "#EC4899", duration: "90 min", status: "Confirmed" },
    { id: "cal_6", hour: "18:00", customer: "Siddharth Nair", service: "Royal Deluxe Package", staff: "Priya Verma", staffId: "stf_2", color: "#F59E0B", duration: "90 min", status: "Confirmed" }
  ]);

  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [blockReason, setBlockReason] = useState("Lunch Break");
  const [blockHour, setBlockHour] = useState("13:00");
  const [selectedStaffForBlock, setSelectedStaffForBlock] = useState("all");

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const hours = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ];

  const handleAddBlockSlot = () => {
    const newBlock = {
      id: "block_" + Date.now(),
      hour: blockHour,
      customer: "Blocked Window",
      service: blockReason,
      staff: selectedStaffForBlock === "all" ? "All Specialists" : specialists.find(s => s.id === selectedStaffForBlock)?.name || "Specialist",
      staffId: selectedStaffForBlock,
      color: "#64748B",
      duration: "60 min",
      isBlocked: true
    };
    setAppointments([...appointments, newBlock]);
    setIsBlockModalOpen(false);
    showToast(`Blocked ${blockHour} slot for "${blockReason}"`);
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px", position: "relative" }}>
      {/* Toast Alert */}
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

      {/* Header with Date Navigator & View Switcher */}
      <div style={{ background: "#FFFFFF", padding: "16px 14px 12px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => setActiveDayIndex(Math.max(0, activeDayIndex - 1))}
              style={{ width: "32px", height: "32px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <ChevronLeft size={16} color="#475569" />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CalendarIcon size={16} color="#4F46E5" />
              <span style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A" }}>August 2026</span>
            </div>
            <button
              onClick={() => setActiveDayIndex(Math.min(dates.length - 1, activeDayIndex + 1))}
              style={{ width: "32px", height: "32px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <ChevronRight size={16} color="#475569" />
            </button>
          </div>

          {/* View Switcher Pills */}
          <div style={{ display: "flex", background: "#F1F5F9", padding: "3px", borderRadius: "10px" }}>
            {[
              { id: "Day", label: "Day" },
              { id: "Staff", label: "Staff" }
            ].map(v => (
              <button
                key={v.id}
                onClick={() => setViewMode(v.id)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  border: "none",
                  background: viewMode === v.id ? "#FFFFFF" : "transparent",
                  color: viewMode === v.id ? "#4F46E5" : "#64748B",
                  boxShadow: viewMode === v.id ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                  cursor: "pointer"
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Days Horizontal Ribbon */}
        <div style={{ display: "flex", gap: "6px", overflowX: "auto" }} className="no-scrollbar">
          {days.map((d, i) => {
            const isSelected = activeDayIndex === i;
            return (
              <button
                key={i}
                onClick={() => setActiveDayIndex(i)}
                style={{
                  flex: 1,
                  minWidth: "44px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 4px",
                  borderRadius: "14px",
                  border: isSelected ? "none" : "1px solid #F1F5F9",
                  background: isSelected ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF",
                  boxShadow: isSelected ? "0 4px 12px rgba(79,70,229,0.35)" : "none",
                  cursor: "pointer"
                }}
              >
                <span style={{ fontSize: "0.62rem", fontWeight: 700, color: isSelected ? "rgba(255,255,255,0.8)" : "#94A3B8" }}>{d}</span>
                <span style={{ fontSize: "0.95rem", fontWeight: 900, color: isSelected ? "#FFFFFF" : "#0F172A" }}>{dates[i]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Sub-bar */}
      <div style={{ padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>
          {viewMode === "Day" ? "Time Slots Schedule" : "Specialist Columns Roster"}
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={() => setIsBlockModalOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 10px",
              borderRadius: "8px",
              background: "#F1F5F9",
              color: "#475569",
              fontSize: "0.72rem",
              fontWeight: 700,
              border: "1px solid #E2E8F0",
              cursor: "pointer"
            }}
          >
            <Lock size={12} /> Block Slot
          </button>
          <button
            onClick={onOpenPOS}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 12px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #4F46E5, #6366F1)",
              color: "#FFFFFF",
              fontSize: "0.72rem",
              fontWeight: 800,
              border: "none",
              cursor: "pointer"
            }}
          >
            <Plus size={13} /> + Book Slot
          </button>
        </div>
      </div>

      {/* VIEW 1: DAY TIMELINE VIEW */}
      {viewMode === "Day" && (
        <div style={{ padding: "0 14px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {hours.map(hour => {
              const matchedApts = appointments.filter(a => a.hour === hour);
              return (
                <div key={hour} style={{ display: "flex", gap: "10px", minHeight: "72px" }}>
                  <div style={{ width: "46px", paddingTop: "8px", fontSize: "0.74rem", fontWeight: 800, color: "#64748B", flexShrink: 0 }}>
                    {hour}
                  </div>
                  <div style={{ flex: 1, borderLeft: "2px solid #E2E8F0", paddingLeft: "12px", paddingBottom: "8px", position: "relative" }}>
                    {matchedApts.length > 0 ? (
                      matchedApts.map(apt => (
                        <div
                          key={apt.id}
                          style={{
                            background: apt.isBlocked ? "#F1F5F9" : "#FFFFFF",
                            border: `1px solid ${apt.isBlocked ? "#CBD5E1" : "#E2E8F0"}`,
                            borderLeft: `4px solid ${apt.color}`,
                            borderRadius: "12px",
                            padding: "10px 12px",
                            marginBottom: "6px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div>
                              <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#0F172A" }}>
                                {apt.customer}
                              </div>
                              <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                                {apt.service}
                              </div>
                            </div>
                            <span style={{ fontSize: "0.65rem", fontWeight: 800, color: apt.color, background: `${apt.color}15`, padding: "2px 6px", borderRadius: "6px" }}>
                              {apt.isBlocked ? "BLOCKED" : apt.status}
                            </span>
                          </div>

                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px", fontSize: "0.68rem", color: "#64748B" }}>
                            <span>Specialist: <strong style={{ color: "#0F172A" }}>{apt.staff}</strong></span>
                            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                              <Clock size={11} color="#64748B" />
                              <span>{apt.duration}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div
                        onClick={onOpenPOS}
                        style={{
                          height: "44px",
                          borderRadius: "10px",
                          border: "1px dashed #E2E8F0",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "12px",
                          gap: "6px",
                          color: "#94A3B8",
                          fontSize: "0.72rem",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      >
                        <Plus size={13} /> Click to book this slot
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: STAFF SPECIALIST COLUMNS VIEW */}
      {viewMode === "Staff" && (
        <div style={{ padding: "0 10px", overflowX: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${specialists.length}, 180px)`, gap: "10px", minWidth: "100%" }}>
            {specialists.map(stf => {
              const staffApts = appointments.filter(a => a.staffId === stf.id || a.staffId === "all");
              return (
                <div key={stf.id} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "12px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  {/* Specialist Column Header */}
                  <div style={{ textAlign: "center", paddingBottom: "10px", borderBottom: "1px solid #F1F5F9", marginBottom: "10px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: stf.bg, color: stf.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", fontWeight: 800, fontSize: "0.9rem" }}>
                      {stf.name[0]}
                    </div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#0F172A" }}>{stf.name}</div>
                    <div style={{ fontSize: "0.68rem", color: "#64748B" }}>{stf.role}</div>
                  </div>

                  {/* Appointments in Column */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {staffApts.length === 0 ? (
                      <div style={{ textAlign: "center", padding: "20px 0", color: "#94A3B8", fontSize: "0.72rem" }}>
                        No appointments assigned today
                      </div>
                    ) : (
                      staffApts.map(apt => (
                        <div
                          key={apt.id}
                          style={{
                            background: apt.isBlocked ? "#F1F5F9" : "#F8FAFC",
                            borderRadius: "10px",
                            padding: "10px",
                            borderLeft: `3px solid ${apt.color}`
                          }}
                        >
                          <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#4F46E5" }}>{apt.hour} ({apt.duration})</div>
                          <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A", marginTop: "2px" }}>{apt.customer}</div>
                          <div style={{ fontSize: "0.68rem", color: "#64748B" }}>{apt.service}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Block Slot Modal */}
      {isBlockModalOpen && (
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
            boxShadow: "0 -10px 40px rgba(0,0,0,0.2)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Lock size={18} color="#4F46E5" />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A" }}>Block Time Slot</h3>
              </div>
              <button
                onClick={() => setIsBlockModalOpen(false)}
                style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={16} color="#64748B" />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
              <div>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Reason for Blocking</label>
                <input
                  type="text"
                  value={blockReason}
                  onChange={e => setBlockReason(e.target.value)}
                  placeholder="e.g. Lunch Break, Sanitization, Staff Training"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Select Time Slot</label>
                <select
                  value={blockHour}
                  onChange={e => setBlockHour(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                >
                  {hours.map(h => (
                    <option key={h} value={h}>{h} (1 Hour Window)</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Apply To Specialist</label>
                <select
                  value={selectedStaffForBlock}
                  onChange={e => setSelectedStaffForBlock(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                >
                  <option value="all">All Specialists (Whole Salon)</option>
                  {specialists.map(s => (
                    <option key={s.id} value={s.id}>{s.name} ({s.role})</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleAddBlockSlot}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #4F46E5, #6366F1)",
                color: "#FFFFFF",
                fontSize: "0.85rem",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(79,70,229,0.3)"
              }}
            >
              Confirm Block Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
