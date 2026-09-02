import React, { useState } from "react";
import {
  Download,
  ArrowUpRight,
  CreditCard,
  TrendingUp,
  Clock,
  CheckCircle2,
  Building,
  DollarSign,
  AlertCircle,
  FileText,
  X,
  Sparkles,
  Zap,
  ChevronRight
} from "lucide-react";

export default function MobilePayments() {
  const [transactions, setTransactions] = useState([
    { id: "TXN-98241", date: "Today, 02:30 PM", customer: "Dilshan Perera", service: "Classic Haircut & Styling", gross: "₹329", commission: "₹39", gst: "₹29", net: "₹290", paymentMethod: "UPI (Google Pay)", status: "Settled" },
    { id: "TXN-87120", date: "Today, 10:30 AM", customer: "Arjun Kapoor", service: "Beard Crafting Combo", gross: "₹499", commission: "₹59", gst: "₹45", net: "₹440", paymentMethod: "Cash at Counter", status: "Settled" },
    { id: "TXN-76510", date: "Yesterday, 05:00 PM", customer: "Rohan Malhotra", service: "Royal Deluxe Grooming", gross: "₹899", commission: "₹107", gst: "₹81", net: "₹792", paymentMethod: "Card (POS)", status: "Payout Queued" },
    { id: "TXN-65430", date: "12 Aug 2026", customer: "Siddharth Nair", service: "Head Spa & Massage", gross: "₹399", commission: "₹47", gst: "₹36", net: "₹352", paymentMethod: "UPI (PhonePe)", status: "Settled" }
  ]);

  const [filter, setFilter] = useState("all");
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState("28,400");
  const [selectedBank, setSelectedBank] = useState("HDFC Bank •••• 4892");
  const [isProcessing, setIsProcessing] = useState(false);
  const [payoutSuccess, setPayoutSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleExecutePayout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPayoutSuccess(true);
      showToast("Instant Bank Payout of ₹28,400 transferred to HDFC Bank!");
    }, 1500);
  };

  const filtered = transactions.filter(t => filter === "all" || t.status === filter);

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

      {/* Hero Financial Banner */}
      <div style={{
        background: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #059669 100%)",
        padding: "20px 16px 36px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: "140px", height: "140px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, marginBottom: "2px" }}>Available for Instant Withdrawal</p>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>₹28,400</h2>
              <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.75)", marginTop: "4px" }}>Auto-clearing schedule: Daily at 11:59 PM</p>
            </div>
            <button
              onClick={() => { setPayoutSuccess(false); setIsPayoutModalOpen(true); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "8px 14px",
                borderRadius: "12px",
                background: "#FFFFFF",
                color: "#065F46",
                fontSize: "0.78rem",
                fontWeight: 900,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)"
              }}
            >
              <Zap size={14} color="#059669" /> Payout Now
            </button>
          </div>
        </div>
      </div>

      {/* Financial KPIs Grid */}
      <div style={{ padding: "0 14px", marginTop: "-18px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            { label: "This Month Gross", value: "₹1,42,850", sub: "+24% vs last month", color: "#10B981", bg: "#ECFDF5", icon: <TrendingUp size={16} color="#10B981" /> },
            { label: "Platform Fee", value: "10%", sub: "Standard Merchant Tier", color: "#4F46E5", bg: "#EEF2FF", icon: <CreditCard size={16} color="#4F46E5" /> },
          ].map((s, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                {s.icon}
              </div>
              <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A" }}>{s.value}</div>
              <div style={{ fontSize: "0.68rem", color: "#64748B", marginTop: "2px" }}>{s.label}</div>
              <div style={{ fontSize: "0.66rem", color: s.color, fontWeight: 700, marginTop: "3px" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GST / Tax Summary Box */}
      <div style={{ padding: "14px 14px 0" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px 16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FileText size={15} color="#4F46E5" />
              <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#0F172A" }}>GST & Tax Compliance</span>
            </div>
            <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#10B981", background: "#ECFDF5", padding: "2px 8px", borderRadius: "6px" }}>
              GSTIN: 07AABCU9603R1ZM
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B", marginBottom: "4px" }}>
            <span>Total CGST Collected (9%):</span>
            <strong style={{ color: "#0F172A" }}>₹6,428</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B" }}>
            <span>Total SGST Collected (9%):</span>
            <strong style={{ color: "#0F172A" }}>₹6,428</strong>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div style={{ padding: "16px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A" }}>Settlement Ledger</h3>
            <p style={{ fontSize: "0.68rem", color: "#64748B" }}>Real-time payment breakdown</p>
          </div>
          <button
            onClick={() => showToast("Downloading GST Reconciliation Statement (CSV)...")}
            style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", fontWeight: 800, color: "#4F46E5", background: "#EEF2FF", padding: "6px 11px", borderRadius: "9px", border: "none", cursor: "pointer" }}
          >
            <Download size={13} /> Export CSV
          </button>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          {["all", "Settled", "Payout Queued"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                fontSize: "0.72rem",
                fontWeight: 800,
                whiteSpace: "nowrap",
                border: filter === f ? "none" : "1px solid #E2E8F0",
                background: filter === f ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF",
                color: filter === f ? "#FFFFFF" : "#64748B",
                cursor: "pointer"
              }}
            >
              {f === "all" ? "All Transactions" : f}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {filtered.map(t => (
            <div
              key={t.id}
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 900, color: "#0F172A" }}>{t.customer}</div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>{t.service}</div>
                  <div style={{ fontSize: "0.68rem", color: "#94A3B8", marginTop: "2px" }}>#{t.id} • {t.date}</div>
                </div>
                <span style={{
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  color: t.status === "Settled" ? "#059669" : "#D97706",
                  background: t.status === "Settled" ? "#ECFDF5" : "#FFFBEB",
                  padding: "3px 9px",
                  borderRadius: "999px"
                }}>
                  {t.status === "Settled" ? <CheckCircle2 size={10} style={{ marginRight: "3px", display: "inline" }} /> : <Clock size={10} style={{ marginRight: "3px", display: "inline" }} />}
                  {t.status}
                </span>
              </div>

              {/* Breakdown Row */}
              <div style={{ display: "flex", justifyContent: "space-between", background: "#F8FAFC", borderRadius: "12px", padding: "10px 14px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 900, color: "#0F172A" }}>{t.gross}</div>
                  <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Gross Bill</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 900, color: "#F43F5E" }}>-{t.commission}</div>
                  <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Platform Fee</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 900, color: "#64748B" }}>-{t.gst}</div>
                  <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>GST Tax</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "#10B981" }}>{t.net}</div>
                  <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Net Payout</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Modal */}
      {isPayoutModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(6px)",
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
            {!payoutSuccess ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Zap size={18} color="#059669" />
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A" }}>Instant Bank Payout</h3>
                  </div>
                  <button
                    onClick={() => setIsPayoutModalOpen(false)}
                    style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                  >
                    <X size={16} color="#64748B" />
                  </button>
                </div>

                <div style={{ background: "#ECFDF5", borderRadius: "14px", padding: "14px", marginBottom: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.72rem", color: "#065F46", fontWeight: 700 }}>Transfer Amount</div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#065F46", marginTop: "2px" }}>₹{payoutAmount}</div>
                  <div style={{ fontSize: "0.68rem", color: "#047857", marginTop: "2px" }}>Zero transfer fee • 24x7 IMPS Instant Credit</div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "6px" }}>Deposit Destination</label>
                  <div style={{ background: "#F8FAFC", borderRadius: "12px", padding: "12px", border: "1px solid #CBD5E1", display: "flex", alignItems: "center", gap: "10px" }}>
                    <Building size={18} color="#4F46E5" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>HDFC Bank Account</div>
                      <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Acc: •••• 4892 • IFSC: HDFC0001241</div>
                    </div>
                    <CheckCircle2 size={16} color="#10B981" />
                  </div>
                </div>

                <button
                  onClick={handleExecutePayout}
                  disabled={isProcessing}
                  style={{
                    width: "100%",
                    padding: "13px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #059669, #10B981)",
                    color: "#FFFFFF",
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    border: "none",
                    cursor: isProcessing ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 14px rgba(16,185,129,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}
                >
                  {isProcessing ? "Processing Transfer with Bank..." : "Transfer ₹28,400 to Bank Now"}
                </button>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <CheckCircle2 size={32} color="#10B981" />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#0F172A" }}>Payout Successful!</h3>
                <p style={{ fontSize: "0.78rem", color: "#64748B", marginTop: "4px", marginBottom: "18px" }}>
                  ₹28,400 has been credited to your HDFC Bank account. Reference: <strong>IMPS-98421098</strong>
                </p>
                <button
                  onClick={() => setIsPayoutModalOpen(false)}
                  style={{ width: "100%", padding: "12px", borderRadius: "12px", background: "#4F46E5", color: "#FFFFFF", fontSize: "0.85rem", fontWeight: 800, border: "none", cursor: "pointer" }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
