"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, XCircle, Download, Share2, FileText, ArrowLeft } from "lucide-react";
import QRCode from "react-qr-code";
import Link from "next/link";
import Image from "next/image";

// Extended Fake Database
const certificatesDB: Record<string, any> = {
  "RB-DIP-2024": {
    studentName: "Aarav Sharma",
    course: "Fine Arts Professional Diploma",
    issueDate: "15 August 2024",
    grade: "A+",
    type: "Diploma Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-DIP-884920",
    status: "Valid"
  },
  "RB-INT-2024": {
    studentName: "Rohan Das",
    course: "Fine Arts & Teaching Assistantship",
    issueDate: "05 September 2024",
    grade: "Excellent (Grade A)",
    type: "Internship Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-INT-773821",
    status: "Valid",
    isInternship: true, // Helper to show recommendation letter button
    college: "NIFT Delhi",
    role: "Portfolio Development & Teaching Assistant",
    duration: "3 Months"
  },
  "RB-CRS-2024": {
    studentName: "Siddharth Jain",
    course: "Advanced Portrait & Acrylics",
    issueDate: "10 October 2024",
    grade: "Completed",
    type: "Courses Completion Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-CRS-662912",
    status: "Valid"
  },
  "RB-WRK-2024": {
    studentName: "Priya Patel",
    course: "Mastering Watercolors: Floral Magic",
    issueDate: "25 October 2026",
    grade: "Completed",
    type: "Workshops Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-WRK-554810",
    status: "Valid"
  },
  "RB-CMP-2024": {
    studentName: "Vivaan",
    course: "Kids Summer Art Safari 2026",
    issueDate: "30 April 2026",
    grade: "Completed with Distinction",
    type: "Summer Camp Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-CMP-443918",
    status: "Valid"
  },
  "RB-PAR-2024": {
    studentName: "Aisha Khan",
    course: "\"Canvas of Dreams\" Annual Exhibition",
    issueDate: "12 January 2026",
    grade: "Participant",
    type: "Completion Participation Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-PAR-221804",
    status: "Valid"
  },
  "RB-AWD-2024": {
    studentName: "Kavya Desai",
    course: "National Youth Art Competition",
    issueDate: "05 January 2026",
    grade: "1st Prize - Abstract Art Category",
    type: "Award Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-AWD-331902",
    status: "Valid"
  },
  // Older IDs fallback support
  "RB-2024-001": {
    studentName: "Aarav Sharma",
    course: "Fine Arts Professional Diploma",
    issueDate: "15 August 2024",
    grade: "A+",
    type: "Diploma Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-DIP-884920",
    status: "Valid"
  },
  "RB-2024-002": {
    studentName: "Priya Patel",
    course: "Advanced Portrait Workshop",
    issueDate: "10 September 2024",
    grade: "Completed",
    type: "Workshop Certificate",
    directorName: "Dr. Meera Rajput",
    serialNo: "RB-WRK-992103",
    status: "Valid"
  }
};

export default function VerifyCertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const [certData, setCertData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [verifyTime, setVerifyTime] = useState<string>("");

  const certId = unwrappedParams.id.toUpperCase();

  useEffect(() => {
    // Client-side real-time clock generation
    const now = new Date();
    setVerifyTime(now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'long', timeStyle: 'medium' }));

    // Fake Verification Delay
    const timer = setTimeout(() => {
      if (certificatesDB[certId]) {
        setCertData(certificatesDB[certId]);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [certId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0c0b] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Fine background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-amber-900/40 border-t-amber-500 rounded-full animate-spin mb-6"></div>
          <h2 className="text-xl font-serif text-white tracking-widest uppercase mb-1">Authenticating Document</h2>
          <p className="text-amber-500/80 font-mono text-xs animate-pulse tracking-wide">Connecting to Academy Ledger...</p>
          <p className="text-gray-500 font-mono text-[10px] mt-3 uppercase tracking-widest">ID: {certId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-radial-at-t from-[#161513] via-[#0c0b0a] to-[#040404] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl w-full relative z-10">
        
        {certData ? (
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* TOP BAR - High-End Digital Verification Status */}
            <div className="bg-gradient-to-r from-[#14231b] via-[#0b1610] to-[#14231b] text-emerald-100 px-6 py-4 rounded-t-2xl flex flex-col sm:flex-row items-center justify-between shadow-xl border border-emerald-900/30 border-b-0">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/10 p-2 rounded-full border border-emerald-500/20">
                  <ShieldCheck size={20} className="text-emerald-400" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="font-serif tracking-widest uppercase text-xs text-emerald-400 font-bold">SECURE DIGITAL RECORD VERIFIED</h2>
                  <p className="text-gray-400 text-[10px] sm:text-xs flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 
                    Status: Valid & Cryptographically Signed
                  </p>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 text-center sm:text-right font-mono">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Verification Time</p>
                <p className="text-xs font-semibold text-emerald-300">{verifyTime}</p>
              </div>
            </div>

            {/* MAIN CERTIFICATE BODY - Premium Textured Paper */}
            <div className="bg-gradient-to-br from-[#FCFBF8] via-[#FAF8F5] to-[#F5F2EB] p-8 sm:p-16 rounded-b-2xl shadow-2xl relative overflow-hidden border border-amber-900/15">
              
              {/* Classical Ornate Double Border */}
              <div className="absolute inset-4 border border-[#c5a880]/30 pointer-events-none"></div>
              <div className="absolute inset-5 border-2 border-double border-[#c5a880]/40 pointer-events-none"></div>
              <div className="absolute inset-8 border border-[#c5a880]/15 pointer-events-none"></div>
              
              {/* Corner flourishes */}
              <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-[#c5a880] pointer-events-none"></div>
              <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-[#c5a880] pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-[#c5a880] pointer-events-none"></div>
              <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-[#c5a880] pointer-events-none"></div>

              {/* Watermark Crest */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <Award size={420} className="text-[#c5a880]" />
              </div>

              {/* Certificate Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Academy Logo Header */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden mb-3 border border-amber-900/20 shadow-sm bg-white">
                  <Image 
                    src="/Logo.jpg" 
                    alt="Rainbow Palette Logo" 
                    fill
                    className="object-cover scale-110" 
                  />
                </div>
                
                <h1 className="text-xs sm:text-sm font-serif tracking-[0.25em] text-gray-500 uppercase font-light mb-1">
                  Rainbow Palette Academy
                </h1>
                <p className="text-[9px] tracking-[0.15em] text-gray-400 uppercase font-mono mb-6">
                  Bangalore, India • Established 2018
                </p>

                <h2 className="text-2xl sm:text-3.5xl font-serif text-gray-900 mb-6 border-b border-amber-900/10 pb-3 inline-block px-10 tracking-wide font-semibold">
                  {certData.type}
                </h2>

                <p className="text-gray-500 italic font-serif text-xs sm:text-sm mb-3">
                  This is to securely verify and certify that
                </p>
                
                {/* Student Name */}
                <h3 className="text-3xl sm:text-5xl font-serif font-black tracking-wide text-[#23201a] my-2">
                  {certData.studentName}
                </h3>

                <p className="text-gray-500 italic font-serif text-xs sm:text-sm my-3">
                  has successfully completed all requirements for the credential
                </p>

                {/* Course Name */}
                <h4 className="text-lg sm:text-2xl font-serif font-bold text-amber-950 tracking-wide mt-2 mb-8 px-4 py-1.5 bg-[#ebdcb9]/20 rounded-md border border-[#ebdcb9]/30">
                  {certData.course}
                </h4>

                {/* Bottom Details Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-12 pt-8 border-t border-[#c5a880]/20">
                  
                  {/* Left: Dynamic QR & Serial */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="bg-white p-2.5 rounded-xl border border-amber-900/10 shadow-sm mb-3">
                      <QRCode value={`https://rainbowpalette.com/verify/${certId}`} size={85} />
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono space-y-1">
                      <p className="tracking-wider">CERT ID: <span className="font-bold text-gray-800">{certId}</span></p>
                      <p>SERIAL: <span className="text-gray-800">{certData.serialNo}</span></p>
                      <p>DATE: <span className="text-gray-800">{certData.issueDate}</span></p>
                      <p>GRADE: <span className="text-amber-900 font-bold">{certData.grade}</span></p>
                    </div>
                  </div>

                  {/* Center: Holographic Gold Seal */}
                  <div className="flex justify-center relative">
                    {/* Ribbon tails */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-5 w-5 h-16 bg-[#8b1e22] border-r border-[#691114] skew-y-12 shadow-md z-0" 
                         style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%)" }}></div>
                    <div className="absolute -bottom-8 right-1/2 translate-x-5 w-5 h-16 bg-[#9c2428] border-l border-[#691114] -skew-y-12 shadow-md z-0"
                         style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%)" }}></div>
                    
                    <div className="w-28 h-28 bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-100 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(180,120,40,0.35)] relative border-4 border-double border-[#b39556] z-10 overflow-hidden group">
                      {/* Holographic shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
                      
                      <div className="w-22 h-22 bg-gradient-to-br from-[#2c2014] to-[#40301d] rounded-full border border-[#d3be8d]/40 flex flex-col items-center justify-center text-[#e8d2a3] shadow-inner p-2">
                        <Award size={22} className="mb-0.5 text-amber-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                        <span className="text-[7.5px] font-mono tracking-widest text-center leading-none text-amber-200/90 font-semibold uppercase">
                          OFFICIAL SEAL
                        </span>
                        <span className="text-[6.5px] font-sans tracking-widest text-center text-amber-400/70 mt-1 uppercase">
                          RAINBOW PALETTE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Signature */}
                  <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <div className="text-3xl font-serif italic text-blue-900/80 mb-2 border-b border-[#c5a880]/30 pb-2 w-48 text-center">
                      M. Rajput
                    </div>
                    <p className="font-bold text-gray-800 text-xs tracking-wide">{certData.directorName}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Academy Director & Founder</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 print:hidden">
              <Link 
                href="/verify"
                className="flex items-center justify-center gap-2 bg-[#1a1917] text-gray-300 hover:text-white hover:bg-[#252422] px-6 py-3 rounded-full font-semibold transition border border-gray-800 text-xs uppercase tracking-wider shadow-md"
              >
                <ArrowLeft size={14} /> Verify Another Code
              </Link>
              <button 
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 bg-[#1a1917] text-amber-400/95 hover:text-amber-300 hover:bg-[#252422] px-6 py-3 rounded-full font-semibold transition border border-amber-900/30 text-xs uppercase tracking-wider shadow-md"
              >
                <Download size={14} /> Print / Save PDF
              </button>
              
              {certData.isInternship && (
                <Link 
                  href={`/verify/${certId}/recommendation`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition text-xs uppercase tracking-wider shadow-md"
                >
                  <FileText size={14} /> Recommendation Letter
                </Link>
              )}

              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Verified certificate link copied to clipboard!");
                }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-650 text-white px-6 py-3 rounded-full font-semibold transition text-xs uppercase tracking-wider shadow-md"
              >
                <Share2 size={14} /> Share Verified Link
              </button>
            </div>
          </motion.div>
        ) : (
          /* FAILED STATE */
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#141312] rounded-3xl p-10 text-center shadow-2xl border border-red-500/30 max-w-md mx-auto"
          >
            <div className="w-20 h-20 bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
              <XCircle size={48} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-serif text-white tracking-wide mb-2">Verification Failed</h2>
            <div className="bg-red-950/45 text-red-300 p-2.5 rounded-lg mb-6 font-mono text-xs border border-red-900/30">
              Invalid ID: {certId}
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              This credential code could not be verified. It may be forged, expired, or not issued by the Rainbow Palette Art Academy ledger.
            </p>
            <div className="space-y-3">
              <Link href="/verify" className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-xl font-bold transition block w-full text-xs uppercase tracking-widest">
                Try Different Code
              </Link>
              <Link href="/" className="bg-[#1c1b19] text-gray-300 hover:text-white px-8 py-3 rounded-xl font-bold transition block w-full text-xs uppercase tracking-widest border border-gray-800">
                Return to Homepage
              </Link>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
