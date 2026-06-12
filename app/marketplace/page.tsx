"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, IndianRupee, Ruler, Palette, AlertCircle, CheckCircle2, ArrowLeft, CreditCard, ShieldCheck, X } from "lucide-react";
import { marketplaceData, MarketplaceItem } from "@/data/marketplace";
import Link from "next/link";

export default function MarketplacePage() {
  // Payment Modal State
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  const [paymentGateway, setPaymentGateway] = useState<'razorpay' | 'stripe' | 'paypal'>('razorpay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Form states for simulation
  const [cardNo, setCardNo] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const handleBuyNow = (item: MarketplaceItem) => {
    setSelectedItem(item);
    setPaymentSuccess(false);
    setPaymentGateway('razorpay');
  };

  const simulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] py-20 px-6 sm:px-8 lg:px-12 text-stone-850">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6 font-mono text-xs">
          <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-purple-650 transition">
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="text-purple-700 font-mono text-xs uppercase tracking-widest font-bold">Acquisitions & Sales</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 mt-2 mb-4">
            Artwork <span className="italic font-light text-purple-750">Marketplace</span>
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto text-base font-light">
            Acquire original paintings and canvas illustrations directly from the academy studios. 100% of proceeds support emerging student artists.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {marketplaceData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-stone-200 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-stone-50 border-b border-stone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                {!item.isAvailable && (
                  <div className="absolute inset-0 bg-stone-950/45 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="bg-red-600 text-white px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest border border-white/20 shadow-lg transform -rotate-6">
                      Sold Out
                    </span>
                  </div>
                )}
              </div>

              {/* Details & Specs */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <span className="text-[10px] font-mono tracking-widest font-bold text-purple-700 uppercase mb-1">{item.medium}</span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-1 leading-snug">{item.title}</h2>
                <p className="text-xs text-stone-500 mb-4 font-semibold">by {item.studentName}</p>

                <div className="space-y-2 mb-6 text-xs text-stone-600 font-medium pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-2">
                    <Palette size={14} className="text-stone-400" /> 
                    <span>Medium: {item.medium}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler size={14} className="text-stone-400" /> 
                    <span>Dimensions: {item.size}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block font-bold">Inquiries / Acquisition</span>
                    <div className="text-xl font-bold font-mono text-stone-950 flex items-center mt-0.5">
                      <IndianRupee size={16} /> {item.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  
                  {item.isAvailable ? (
                    <button 
                      onClick={() => handleBuyNow(item)}
                      className="bg-stone-950 hover:bg-stone-850 text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition shadow-sm"
                    >
                      Acquire Art
                    </button>
                  ) : (
                    <button disabled className="bg-stone-100 text-stone-400 px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase cursor-not-allowed">
                      Acquired
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================== PREMIUM CHECKOUT MODAL ==================== */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-stone-950/70 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full relative overflow-hidden border border-stone-200"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedItem(null)}
                  disabled={isProcessing}
                  className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-600 p-1.5 rounded-full transition z-20"
                >
                  <X size={16} />
                </button>

                {!paymentSuccess ? (
                  <>
                    <h3 className="text-2xl font-serif font-black text-stone-900 mb-2">Secure Acquisition Portal</h3>
                    <p className="text-xs text-stone-500 mb-6">Complete secure purchase of original student painting.</p>
                    
                    {/* Item Details */}
                    <div className="bg-stone-50 p-4 rounded-2xl mb-6 flex gap-4 items-center border border-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selectedItem.image} alt="Acquiring artwork" className="w-16 h-16 rounded-xl object-cover" />
                      <div className="text-left">
                        <h4 className="font-serif font-bold text-stone-900 leading-snug">{selectedItem.title}</h4>
                        <p className="text-xs text-stone-500">Artist: {selectedItem.studentName}</p>
                        <p className="text-xs text-purple-705 font-bold font-mono mt-0.5">Total Value: ₹{selectedItem.price.toLocaleString('en-IN')}</p>
                      </div>
                    </div>

                    {/* Selector for payment gateways */}
                    <div className="mb-6">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2 font-mono">Select Payment Gateway</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'razorpay', name: 'Razorpay' },
                          { id: 'stripe', name: 'Stripe Card' },
                          { id: 'paypal', name: 'PayPal Hub' }
                        ].map((gw) => (
                          <button
                            key={gw.id}
                            type="button"
                            onClick={() => setPaymentGateway(gw.id as any)}
                            className={`py-2 px-3 text-xs font-mono font-bold rounded-xl border text-center transition-all ${
                              paymentGateway === gw.id 
                                ? "bg-stone-900 text-white border-stone-900 shadow-sm" 
                                : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                            }`}
                          >
                            {gw.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic checkout panels based on selected gateway */}
                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-150 mb-6 min-h-[170px] flex flex-col justify-center">
                      
                      {/* RAZORPAY METHOD */}
                      {paymentGateway === 'razorpay' && (
                        <div className="space-y-4 text-left">
                          <div className="flex justify-between items-center bg-blue-50 border border-blue-100 p-3 rounded-xl">
                            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest font-mono">Razorpay Express Checkout</span>
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                          </div>
                          <p className="text-xs text-stone-600 leading-relaxed font-light">
                            Razorpay supports instant transactions using UPI apps (GooglePay, PhonePe, Paytm), local NetBanking, and credit/debit cards across Indian banks.
                          </p>
                        </div>
                      )}

                      {/* STRIPE METHOD */}
                      {paymentGateway === 'stripe' && (
                        <div className="space-y-3 text-left">
                          <span className="text-[10px] font-bold text-purple-700 uppercase tracking-widest font-mono block">Stripe Card Billing</span>
                          <div>
                            <input 
                              type="text" 
                              placeholder="Card Number (4000 1234 5678 9010)" 
                              value={cardNo}
                              onChange={(e) => setCardNo(e.target.value)}
                              className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-purple-400 font-mono"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input 
                              type="text" 
                              placeholder="MM/YY" 
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-purple-400 font-mono"
                            />
                            <input 
                              type="password" 
                              placeholder="CVV" 
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value)}
                              className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-purple-400 font-mono"
                            />
                          </div>
                        </div>
                      )}

                      {/* PAYPAL METHOD */}
                      {paymentGateway === 'paypal' && (
                        <div className="space-y-4 text-center">
                          <div className="bg-yellow-50 border border-yellow-200 py-3 px-4 rounded-xl inline-block font-black text-yellow-700 italic font-serif text-sm">
                            PayPal Express
                          </div>
                          <p className="text-xs text-stone-600 leading-relaxed font-light">
                            Login securely to your international PayPal account. PayPal handles automated conversion from USD/EUR/GBP transactions.
                          </p>
                        </div>
                      )}

                    </div>

                    {/* Action buttons */}
                    <div className="space-y-3">
                      <button 
                        onClick={simulatePayment}
                        disabled={isProcessing}
                        className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3.5 rounded-xl font-bold transition shadow-md flex items-center justify-center gap-2 text-sm"
                      >
                        {isProcessing ? (
                          <span className="animate-pulse flex items-center gap-2">Authenticating Credentials...</span>
                        ) : (
                          <>Pay via {paymentGateway === 'razorpay' ? 'Razorpay Gateway' : paymentGateway === 'stripe' ? 'Stripe Widget' : 'PayPal Wallet'}</>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-[10px] text-center text-stone-400 mt-4 flex justify-center items-center gap-1.5 font-mono">
                      <ShieldCheck size={12} className="text-emerald-500" /> Simulated test checkout. Encrypted transmission.
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={36} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-black text-stone-900 mb-2">Acquisition Complete!</h3>
                    <p className="text-sm text-stone-500 mb-8 leading-relaxed">
                      You have successfully cleared the payment of ₹{selectedItem.price.toLocaleString('en-IN')} via {paymentGateway.toUpperCase()} for "{selectedItem.title}". A certificate of authentication will be dispatched with the painting.
                    </p>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full font-bold text-sm transition"
                    >
                      Back to Catalog
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}
