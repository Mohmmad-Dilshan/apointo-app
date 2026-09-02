import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import CouponBottomSheet from './CouponBottomSheet';

export default function BookingSummary({ bookingDraft, onBack, onProceedToPayment }) {
  const [coupon, setCoupon] = useState({ code: 'APOINTO100', amount: 100, description: 'Flat ₹100 OFF' });
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [useRewards, setUseRewards] = useState(true);

  const servicePrice = bookingDraft?.service?.price || 299;
  const addonsPrice = (bookingDraft?.addons || []).reduce((sum, a) => sum + a.price, 0);
  const subtotal = servicePrice + addonsPrice;
  const platformFee = 20;
  const taxes = Math.round(subtotal * 0.05);
  const couponDiscount = coupon ? coupon.amount : 0;
  const rewardsDiscount = useRewards ? 50 : 0;
  const total = Math.max(0, subtotal + platformFee + taxes - couponDiscount - rewardsDiscount);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100%', paddingBottom: '100px' }} className="animate-fade-in">
      {/* Header */}
      <div style={{ background: '#FFFFFF', padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ padding: '6px', borderRadius: '50%', background: '#F1F5F9' }}>
          <ArrowLeft size={20} color="#0F172A" />
        </button>
        <div>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Booking Checkout</h2>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>Review details & proceed to pay</p>
        </div>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Business & Appointment Card */}
        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
            {bookingDraft?.business?.name || "Urban Cut Studio"}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '12px' }}>
            {bookingDraft?.business?.address || "Indiranagar, Bengaluru"}
          </p>

          <div style={{ background: '#F8FAFC', borderRadius: '14px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
              <Sparkles size={14} color="#4F46E5" />
              <span>Service: {bookingDraft?.service?.name || "Classic Haircut & Styling"}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
              <User size={14} color="#06B6D4" />
              <span>Specialist: {bookingDraft?.staff?.name || "Rahul Sharma"}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
              <Calendar size={14} color="#10B981" />
              <span>Slot: {bookingDraft?.dateTime?.date || "Today, 14 Aug 2026"} at {bookingDraft?.dateTime?.time || "02:30 PM"}</span>
            </div>
          </div>
        </div>

        {/* Selected Addons Summary */}
        {bookingDraft?.addons && bookingDraft.addons.length > 0 && (
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Selected Add-ons</div>
            {bookingDraft.addons.map(a => (
              <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#475569', margin: '4px 0' }}>
                <span>• {a.name}</span>
                <span style={{ fontWeight: 700 }}>+₹{a.price}</span>
              </div>
            ))}
          </div>
        )}

        {/* Coupon Selector Row */}
        <button
          onClick={() => setIsCouponModalOpen(true)}
          style={{
            background: coupon ? '#ECFDF5' : '#FFFFFF',
            borderRadius: '20px',
            padding: '16px',
            border: coupon ? '1px solid #10B981' : '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Tag size={20} color={coupon ? '#10B981' : '#4F46E5'} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                {coupon ? `Code: ${coupon.code}` : 'Apply Coupon Code'}
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748B' }}>
                {coupon ? `Saving ₹${coupon.amount} on this order` : 'View available discounts & promos'}
              </p>
            </div>
          </div>

          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4F46E5' }}>
            {coupon ? 'Change' : 'Select'}
          </span>
        </button>

        {/* Rewards Toggle */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '16px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Use Apointo Points</div>
            <p style={{ fontSize: '0.75rem', color: '#64748B' }}>Balance: 2,450 pts (Redeem 50 pts for ₹50 OFF)</p>
          </div>
          <button
            onClick={() => setUseRewards(!useRewards)}
            style={{
              width: '44px',
              height: '24px',
              borderRadius: '999px',
              background: useRewards ? '#10B981' : '#CBD5E1',
              position: 'relative'
            }}
          >
            <div style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: '#FFFFFF',
              position: 'absolute',
              top: '3px',
              left: useRewards ? '23px' : '3px',
              transition: 'all 0.2s'
            }} />
          </button>
        </div>

        {/* Itemized Price Breakdown */}
        <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', border: '1px solid #E2E8F0' }}>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Payment Summary</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#475569' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Item Subtotal</span>
              <span style={{ fontWeight: 700, color: '#0F172A' }}>₹{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Platform Conveneience Fee</span>
              <span style={{ fontWeight: 700, color: '#0F172A' }}>₹{platformFee}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Taxes & GST (5%)</span>
              <span style={{ fontWeight: 700, color: '#0F172A' }}>₹{taxes}</span>
            </div>

            {coupon && (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 700 }}>
                <span>Coupon Discount ({coupon.code})</span>
                <span>-₹{couponDiscount}</span>
              </div>
            )}

            {useRewards && (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 700 }}>
                <span>Apointo Points Discount</span>
                <span>-₹{rewardsDiscount}</span>
              </div>
            )}

            <div style={{ height: '1px', background: '#E2E8F0', margin: '6px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>
              <span>To Pay</span>
              <span style={{ color: '#4F46E5' }}>₹{total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '14px 20px',
        borderTop: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
        boxShadow: '0 -4px 16px rgba(0,0,0,0.05)'
      }}>
        <div>
          <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Grand Total</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#4F46E5' }}>₹{total}</div>
        </div>

        <button
          onClick={() => onProceedToPayment({ ...bookingDraft, totalAmount: total })}
          style={{
            padding: '14px 26px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            color: '#FFFFFF',
            fontSize: '0.92rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(79,70,229,0.35)'
          }}
        >
          <span>Confirm & Pay</span>
          <ChevronRight size={18} />
        </button>
      </div>

      <CouponBottomSheet
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
        onApplyCoupon={(c) => setCoupon(c)}
        appliedCoupon={coupon}
      />
    </div>
  );
}
