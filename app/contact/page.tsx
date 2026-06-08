"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, Instagram, Facebook, Youtube, Palette } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Fake Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      // Reset form after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses, workshops, or admissions? Drop us a message and we'll get back to you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-2 sm:p-4">
          
          {/* Left Side - Contact Info & Map */}
          <div className="lg:w-1/2 bg-gray-900 text-white rounded-[2rem] p-8 sm:p-12 relative overflow-hidden flex flex-col">
            {/* Decorative blob */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-50"></div>
            
            <h2 className="text-3xl font-bold mb-8 relative z-10">Contact Information</h2>
            
            <div className="space-y-8 relative z-10 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">Studio Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    124, Creative Enclave, Art District,<br />
                    Koramangala, Bengaluru - 560034
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">Call / WhatsApp</h3>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">hello@rainbowpalette.com</p>
                  <p className="text-gray-400">admissions@rainbowpalette.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-gray-700 relative z-10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow our journey</h3>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={20} />} href="#" />
                <SocialIcon icon={<Facebook size={20} />} href="#" />
                <SocialIcon icon={<Youtube size={20} />} href="#" />
                <SocialIcon icon={<Palette size={20} />} href="#" />
              </div>
            </div>
          </div>

          {/* Right Side - Enquiry Form & Google Map */}
          <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
            
            {/* Form */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="+91 xxxxx xxxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message / Query</label>
                  <textarea required rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition resize-none" placeholder="I want to know about the diploma course..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSent}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    isSent ? 'bg-green-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : isSent ? (
                    <><CheckCircle2 size={20} /> Message Sent Successfully!</>
                  ) : (
                    <><Send size={20} /> Send Message</>
                  )}
                </button>
              </form>
            </div>

            {/* Google Map Embed (Point 13) */}
            <div className="h-48 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4735503080517!2d77.61633531482163!3d12.934440090880193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e59074b1b%3A0x6b29eb9361b25055!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689255670809!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Academy Location"
              ></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Social Icons
function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
