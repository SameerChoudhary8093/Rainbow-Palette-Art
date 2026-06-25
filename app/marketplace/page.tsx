"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, IndianRupee, Ruler, Palette, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase"; 
import Link from "next/link";

export type DbMarketplaceItem = {
  id: string;
  title: string;
  student_name: string;
  medium: string;
  size: string;
  price: number;
  is_available: boolean;
  image_url: string;
};

// Razorpay Script load karne ka function (Kyunki ye external service hai)
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export default function MarketplacePage() {
  const [artworks, setArtworks] = useState<DbMarketplaceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState<DbMarketplaceItem | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Database se data lana
  useEffect(() => {
    async function fetchArtworks() {
      try {
        const { data, error } = await supabase.from('marketplace_artworks').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        if (data) setArtworks(data);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArtworks();
  }, []);

  const handleBuyNow = (item: DbMarketplaceItem) => {
    setSelectedItem(item);
    setPaymentSuccess(false);
  };

  // ASLI RAZORPAY PAYMENT LOGIC
  const processRealPayment = async () => {
    if (!selectedItem) return;
    setIsProcessing(true);

    // 1. Script Load karo
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setIsProcessing(false);
      return;
    }

    try {
      // 2. Apne backend API se Order create karwao
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedItem.price }),
      });

      const data = await response.json();

      if (!response.ok || !data.order) {
        alert("Client Keys are missing! Wait for client to provide Razorpay keys.");
        setIsProcessing(false);
        return;
      }

      // 3. Razorpay Popup open karne ka option
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Client ki Public Key
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Rainbow Palette Academy",
        description: `Purchase Artwork: ${selectedItem.title}`,
        order_id: data.order.id, // Backend se aaya hua order ID
        handler: async function (response: any) {
          // JAB PAYMENT SUCCESS HO JAYE
          console.log("Payment Success ID:", response.razorpay_payment_id);
          
          try {
            // Update database availability
            const { error } = await supabase
              .from('marketplace_artworks')
              .update({ is_available: false })
              .eq('id', selectedItem.id);

            if (error) throw error;

            // Local state ko live update karo
            setArtworks((prev) =>
              prev.map((art) =>
                art.id === selectedItem.id ? { ...art, is_available: false } : art
              )
            );
          } catch (dbErr: any) {
            console.error("Failed to update artwork status:", dbErr);
          }

          setPaymentSuccess(true);
          setIsProcessing(false);
        },
        prefill: {
          name: "Art Lover",
          email: "buyer@example.com",
        },
        theme: {
          color: "#9333ea", // Website theme matching purple color
        },
      };

      // Popup open karo
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

      paymentObject.on('payment.failed', function (response: any) {
        alert("Payment Failed! " + response.error.description);
        setIsProcessing(false);
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-650 transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Artwork <span className="text-indigo-600">Marketplace</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Support our emerging artists. Buy original masterpieces directly from the studio.</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
             <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {artworks.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col">
                <div className="relative h-64 overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {!item.is_available && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-wider transform -rotate-12 border-2 border-white shadow-lg">Sold Out</span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">by {item.student_name}</p>
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><Palette size={16} className="text-indigo-400" /> {item.medium}</div>
                    <div className="flex items-center gap-2"><Ruler size={16} className="text-indigo-400" /> {item.size}</div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900 flex items-center"><IndianRupee size={20} /> {item.price.toLocaleString('en-IN')}</div>
                    {item.is_available ? (
                      <button onClick={() => handleBuyNow(item)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition flex items-center gap-2 shadow-md hover:shadow-lg">
                        <ShoppingCart size={18} /> Buy
                      </button>
                    ) : (
                      <button disabled className="bg-gray-100 text-gray-400 px-4 py-2 rounded-xl font-medium cursor-not-allowed">Unavailable</button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* MODAL */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/40 backdrop-blur-sm">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative overflow-hidden">
                {!paymentSuccess ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Checkout Details</h3>
                    <p className="text-gray-500 mb-6">Complete your purchase securely.</p>
                    
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 flex gap-4 items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selectedItem.image_url} alt="art" className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-bold text-gray-900">{selectedItem.title}</h4>
                        <p className="text-sm text-gray-500">Total: ₹{selectedItem.price.toLocaleString('en-IN')}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button onClick={processRealPayment} disabled={isProcessing} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition shadow-lg flex items-center justify-center gap-2">
                        {isProcessing ? <span className="animate-pulse">Loading Razorpay...</span> : <>Pay via <span className="font-black tracking-wider">Razorpay</span></>}
                      </button>
                      <button onClick={() => {setSelectedItem(null); setIsProcessing(false);}} disabled={isProcessing} className="w-full bg-white border-2 border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-green-500" /></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                    <p className="text-gray-500 mb-8">You have successfully purchased "{selectedItem.title}".</p>
                    <button onClick={() => setSelectedItem(null)} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition">Back to Marketplace</button>
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
