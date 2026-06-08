"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, IndianRupee, Ruler, Palette, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { marketplaceData, MarketplaceItem } from "@/data/marketplace";
import Link from "next/link";

export default function MarketplacePage() {
  // Payment Modal State
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Razorpay Simulation Logic
  const handleBuyNow = (item: MarketplaceItem) => {
    setSelectedItem(item);
    setPaymentSuccess(false);
  };

  const simulatePayment = () => {
    setIsProcessing(true);
    // Real world me yaha Razorpay ka code aayega
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2500); // 2.5 second ka fake loading (Client ko demo dene ke liye best hai)
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-600 transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Artwork <span className="text-indigo-600">Marketplace</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support our emerging artists. Buy original masterpieces directly from the studio.
          </p>
        </div>

        {/* E-commerce Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketplaceData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {!item.isAvailable && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-wider transform -rotate-12 border-2 border-white shadow-lg">
                      Sold Out
                    </span>
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-4">by {item.studentName}</p>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Palette size={16} className="text-indigo-400" /> {item.medium}
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler size={16} className="text-indigo-400" /> {item.size}
                  </div>
                </div>

                {/* Price and Button */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900 flex items-center">
                    <IndianRupee size={20} /> {item.price.toLocaleString('en-IN')}
                  </div>
                  
                  {item.isAvailable ? (
                    <button 
                      onClick={() => handleBuyNow(item)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <ShoppingCart size={18} /> Buy
                    </button>
                  ) : (
                    <button disabled className="bg-gray-100 text-gray-400 px-4 py-2 rounded-xl font-medium cursor-not-allowed">
                      Unavailable
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CHECKOUT MODAL (For Demo) --- */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/40 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative overflow-hidden"
              >
                {!paymentSuccess ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Checkout Details</h3>
                    <p className="text-gray-500 mb-6">Complete your purchase securely.</p>
                    
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 flex gap-4 items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selectedItem.image} alt="art" className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-bold text-gray-900">{selectedItem.title}</h4>
                        <p className="text-sm text-gray-500">Total: ₹{selectedItem.price.toLocaleString('en-IN')}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button 
                        onClick={simulatePayment}
                        disabled={isProcessing}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition shadow-lg flex items-center justify-center gap-2"
                      >
                        {isProcessing ? (
                          <span className="animate-pulse flex items-center gap-2">Processing Securely...</span>
                        ) : (
                          <>Pay via <span className="font-black tracking-wider">Razorpay</span></>
                        )}
                      </button>
                      <button 
                        onClick={() => setSelectedItem(null)}
                        disabled={isProcessing}
                        className="w-full bg-white border-2 border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
                      >
                        Cancel
                      </button>
                    </div>
                    
                    <p className="text-xs text-center text-gray-400 mt-4 flex justify-center items-center gap-1">
                      <AlertCircle size={12} /> This is a simulated checkout for demo.
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                    <p className="text-gray-500 mb-8">You have successfully purchased "{selectedItem.title}".</p>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                    >
                      Back to Marketplace
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
