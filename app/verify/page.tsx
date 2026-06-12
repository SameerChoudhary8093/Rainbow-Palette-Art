"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Search, Award, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function VerifySearchPage() {
  const [certId, setCertId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) {
      setError("Please enter a valid certificate ID");
      return;
    }
    // Navigate to verify/[id] page
    router.push(`/verify/${certId.trim().toUpperCase()}`);
  };

  const sampleCerts = [
    { id: "RB-DIP-2024", name: "Aarav Sharma (Diploma)", type: "Diploma" },
    { id: "RB-INT-2024", name: "Rohan Das (Internship)", type: "Internship" },
    { id: "RB-CRS-2024", name: "Siddharth Jain (Course)", type: "Course" },
    { id: "RB-WRK-2024", name: "Priya Patel (Workshop)", type: "Workshop" },
    { id: "RB-CMP-2024", name: "Vivaan (Summer Camp)", type: "Camp" },
    { id: "RB-AWD-2024", name: "Kavya Desai (Award)", type: "Award" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-15"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[120px] opacity-15"></div>

      <div className="max-w-2xl w-full relative z-10 text-center">
        
        {/* Header Logo & Title */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl border border-indigo-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            <ShieldCheck size={44} className="text-indigo-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Digital Certificate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Verification</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mx-auto">
            Verify the authenticity of diplomas, internship certificates, workshops, and student awards issued by Rainbow Palette Academy.
          </p>
        </motion.div>

        {/* Search Input Box */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 p-6 sm:p-8 rounded-[2rem] shadow-2xl mb-10 text-left"
        >
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                Enter Certificate ID / Serial Number
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-4 text-slate-500" size={20} />
                <input 
                  type="text" 
                  placeholder="e.g., RB-INT-2024" 
                  value={certId}
                  onChange={(e) => {
                    setCertId(e.target.value);
                    setError("");
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-white font-mono placeholder-slate-600 transition"
                />
              </div>
              {error && <p className="text-red-400 text-xs mt-2 font-mono">{error}</p>}
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-0.5 transition flex items-center justify-center gap-2"
            >
              Verify Credentials <ChevronRight size={18} />
            </button>
          </form>
        </motion.div>

        {/* Quick Demo Credentials */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-left bg-slate-800/30 border border-slate-800 rounded-2xl p-6"
        >
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5 font-mono">
            <HelpCircle size={16}/> Click to Test Demo Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sampleCerts.map((cert) => (
              <button
                key={cert.id}
                onClick={() => {
                  setCertId(cert.id);
                  setError("");
                }}
                className="bg-slate-800/40 hover:bg-slate-800/90 hover:border-slate-600 border border-slate-700/50 rounded-xl p-3 text-left transition flex items-center justify-between group"
              >
                <div className="truncate pr-2">
                  <p className="text-xs text-indigo-300 font-mono font-bold group-hover:text-indigo-400">{cert.id}</p>
                  <p className="text-xs text-slate-400 truncate mt-0.5">{cert.name}</p>
                </div>
                <span className="bg-slate-900 text-[10px] text-slate-400 font-bold px-2 py-1 rounded border border-slate-700 uppercase">
                  {cert.type}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Return to Home link */}
        <div className="mt-8">
          <Link href="/" className="text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors">
            Return to Academy Home Page
          </Link>
        </div>

      </div>
    </div>
  );
}
