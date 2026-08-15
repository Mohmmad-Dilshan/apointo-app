import React, { useState } from "react";
import { ShieldCheck, Check, X, FileText, MapPin, Building, AlertCircle, ChevronDown, ChevronUp, CheckCircle2, XCircle } from "lucide-react";
import { ADMIN_STATS } from "../../../data/sampleData";

export default function MobileAdminVerification() {
  const [queue, setQueue] = useState(ADMIN_STATS.pendingVerifications);
  const [expandedId, setExpandedId] = useState(queue[0]?.id || null);
  const [filter, setFilter] = useState("all");
  const [feedback, setFeedback] = useState(null);

  const handleApprove = (id, name) => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: "Approved ✓" } : item));
    setFeedback(`Approved & Badge granted to ${name}!`);
    setTimeout(() => setFeedback(null), 2500);
  };

  const handleReject = (id, name) => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: "Rejected ✗" } : item));
    setFeedback(`Application rejected for ${name}`);
    setTimeout(() => setFeedback(null), 2500);
  };

  const filtered = queue.filter(item => {
    if (filter === "pending") return !item.status.includes("Approved") && !item.status.includes("Rejected");
    if (filter === "approved") return item.status.includes("Approved");
    if (filter === "rejected") return item.status.includes("Rejected");
    return true;
  });

  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      {/* Header */}
      <div style={{ background: "#131B2E", padding: "16px 16px 14px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <div>
            <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#F8FAFC", display: "flex", alignItems: "center", gap: "6px" }}>
              <ShieldCheck size={18} color="#818CF8" /> KYC Partner Clearance
            </h2>
            <p style={{ fontSize: "0.7rem", color: "#94A3B8" }}>Review documents & grant verification badge</p>
          </div>
        </div>

        {/* Action toast */}
        {feedback && (
          <div style={{ background: "rgba(16, 185, 129, 0.2)", border: "1px solid rgba(52, 211, 153, 0.4)", borderRadius: "10px", padding: "8px 12px", fontSize: "0.75rem", color: "#34D399", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
            <CheckCircle2 size={14} /> {feedback}
          </div>
        )}

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[
            { id: "all", label: `All (${queue.length})` },
            { id: "pending", label: `Pending (${queue.filter(q => !q.status.includes("✓") && !q.status.includes("✗")).length})` },
            { id: "approved", label: "Approved" },
            { id: "rejected", label: "Rejected" },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                fontSize: "0.72rem",
                fontWeight: 700,
                background: filter === f.id ? "linear-gradient(135deg, #6366F1, #4F46E5)" : "rgba(255, 255, 255, 0.06)",
                color: filter === f.id ? "#FFFFFF" : "#94A3B8",
                border: filter === f.id ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: filter === f.id ? "0 2px 10px rgba(99, 102, 241, 0.4)" : "none"
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748B" }}>
            <ShieldCheck size={32} style={{ opacity: 0.3, marginBottom: "8px" }} />
            <p style={{ fontSize: "0.82rem" }}>No applications found in this filter.</p>
          </div>
        )}

        {filtered.map(app => {
          const isExpanded = expandedId === app.id;
          const isApproved = app.status.includes("Approved");
          const isRejected = app.status.includes("Rejected");

          return (
            <div
              key={app.id}
              style={{
                background: "#131B2E",
                borderRadius: "16px",
                border: isApproved ? "1px solid rgba(52, 211, 153, 0.3)" : isRejected ? "1px solid rgba(244, 63, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Card Summary Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : app.id)}
                style={{ padding: "14px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F8FAFC" }}>{app.name}</h3>
                    <span style={{ fontSize: "0.62rem", color: "#818CF8", background: "rgba(99, 102, 241, 0.15)", padding: "2px 6px", borderRadius: "6px" }}>#{app.id}</span>
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "3px" }}>{app.category} • {app.city} (Owner: {app.owner})</p>
                  <p style={{ fontSize: "0.65rem", color: "#64748B", marginTop: "2px" }}>Submitted: {app.date}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                  <span style={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "999px",
                    color: isApproved ? "#34D399" : isRejected ? "#F43F5E" : "#FBBF24",
                    background: isApproved ? "rgba(52, 211, 153, 0.15)" : isRejected ? "rgba(244, 63, 94, 0.15)" : "rgba(251, 191, 36, 0.15)",
                    border: isApproved ? "1px solid rgba(52, 211, 153, 0.3)" : isRejected ? "1px solid rgba(244, 63, 94, 0.3)" : "1px solid rgba(251, 191, 36, 0.3)"
                  }}>
                    {app.status}
                  </span>
                  {isExpanded ? <ChevronUp size={14} color="#94A3B8" /> : <ChevronDown size={14} color="#94A3B8" />}
                </div>
              </div>

              {/* Expandable Document & Action Drawer */}
              {isExpanded && (
                <div style={{ padding: "0 14px 14px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "12px", background: "rgba(15, 23, 42, 0.5)" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "0.05em" }}>
                    Verified Documents Submitted:
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
                    {[
                      { name: "GST Certificate", num: "GST-29AABCU9603R" },
                      { name: "PAN Card", num: "AABCU9603R" },
                      { name: "Municipal Trade License", num: "LIC-BLR-2026" },
                      { name: "Electricity Utility Bill", num: "BESCOM Verified" },
                    ].map((doc, idx) => (
                      <div key={idx} style={{ background: "#1E293B", borderRadius: "10px", padding: "8px 10px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#E2E8F0", display: "flex", alignItems: "center", gap: "4px" }}>
                          <FileText size={12} color="#818CF8" /> {doc.name}
                        </div>
                        <div style={{ fontSize: "0.62rem", color: "#34D399", marginTop: "2px" }}>✓ {doc.num}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  {!isApproved && !isRejected ? (
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => handleReject(app.id, app.name)}
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "12px",
                          background: "rgba(244, 63, 94, 0.15)",
                          border: "1px solid rgba(244, 63, 94, 0.3)",
                          color: "#F43F5E",
                          fontSize: "0.78rem",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px"
                        }}
                      >
                        <X size={14} /> Reject Application
                      </button>

                      <button
                        onClick={() => handleApprove(app.id, app.name)}
                        style={{
                          flex: 1.3,
                          padding: "10px",
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, #10B981, #059669)",
                          color: "#FFFFFF",
                          fontSize: "0.78rem",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                          boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)"
                        }}
                      >
                        <Check size={14} /> Approve & Verify
                      </button>
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", padding: "6px", fontSize: "0.72rem", color: isApproved ? "#34D399" : "#F43F5E", fontWeight: 700 }}>
                      Status finalized as: {app.status}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
