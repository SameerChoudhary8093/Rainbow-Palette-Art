"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Calendar, User, BookOpen, XCircle, CheckCircle, Download, Share2 } from "lucide-react";
import QRCode from "react-qr-code";
import Link from "next/link";
import Image from "next/image";

// Fake Database - Added more realistic details
const certificatesDB: Record<string, any> = {
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

    // Fake Blockchain/DB verification delay
    setTimeout(() => {
      if (certificatesDB[certId]) {
        setCertData(certificatesDB[certId]);
      }
      setLoading(false);
    }, 2000); // Thoda jyada delay kiya for dramatic effect
  }, [certId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0F1C] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Grid for Tech/Cyber feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 border-4 border-indigo-900 border-t-indigo-500 rounded-full animate-spin mb-6 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Authenticating Document</h2>
          <p className="text-indigo-300 font-mono text-sm animate-pulse">Connecting to Rainbow Palette Secure Server...</p>
          <p className="text-gray-600 font-mono text-xs mt-2">ID: {certId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans">
      <div className="max-w-4xl w-full">
        
        {certData ? (
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* TOP BAR - Government/Secure Portal Vibe */}
            <div className="bg-emerald-700 text-white p-4 rounded-t-2xl flex flex-col sm:flex-row items-center justify-between shadow-lg relative z-10 border-b-4 border-emerald-900">
              <div className="flex items-center gap-3">
                <ShieldCheck size={28} className="text-emerald-300" />
                <div>
                  <h2 className="font-bold tracking-wider uppercase text-sm">Verified Official Record</h2>
                  <p className="text-emerald-200 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> 
                    Live Status: Active & Valid
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:mt-0 text-right">
                <p className="text-xs text-emerald-200 font-mono">Verification Timestamp</p>
                <p className="text-sm font-semibold">{verifyTime} IST</p>
              </div>
            </div>

            {/* MAIN CERTIFICATE BODY - Premium Paper Look */}
            <div className="bg-[#FCFBF8] p-8 sm:p-14 rounded-b-2xl shadow-2xl relative overflow-hidden border border-gray-200">
              
              {/* Background Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <Award size={400} />
              </div>

              {/* Ornate Border (Using CSS) */}
              <div className="absolute inset-4 border-2 border-double border-gray-300 opacity-50 pointer-events-none"></div>
              <div className="absolute inset-5 border border-gray-200 opacity-50 pointer-events-none"></div>

              {/* Certificate Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                
                <Image 
                  src="/Logo.jpg" 
                  alt="Rainbow Palette Logo" 
                  width={180} 
                  height={64} 
                  className="h-16 w-auto object-contain mb-6" 
                />
                <h1 className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Rainbow Palette Academy</h1>
                <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-8 border-b border-gray-300 pb-4 inline-block px-8">
                  {certData.type}
                </h2>

                <p className="text-gray-500 italic mb-4">This is to securely verify and certify that</p>
                
                {/* Student Name */}
                <h3 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6 text-shadow-sm">
                  {certData.studentName}
                </h3>

                <p className="text-gray-500 italic mb-4">has successfully completed the program</p>

                {/* Course Name */}
                <h4 className="text-2xl font-bold text-indigo-900 mb-10">
                  {certData.course}
                </h4>

                {/* Bottom Details Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-8">
                  
                  {/* Left: Dynamic QR & Serial */}
                  <div className="flex flex-col items-center md:items-start text-left">
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm mb-3">
                      <QRCode value={`https://rainbowpalette.com/verify/${certId}`} size={90} />
                    </div>
                    <div className="text-xs text-gray-500 font-mono space-y-1">
                      <p>CERT ID: <span className="font-bold text-gray-800">{certId}</span></p>
                      <p>SERIAL: <span className="text-gray-800">{certData.serialNo}</span></p>
                      <p>DATE: <span className="text-gray-800">{certData.issueDate}</span></p>
                    </div>
                  </div>

                  {/* Center: Digital Gold Seal */}
                  <div className="flex justify-center relative">
                    <div className="w-28 h-28 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.4)] relative">
                      {/* Ribbon tails */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-4 w-4 h-12 bg-red-600 border-x border-red-800 skew-y-12 -z-10"></div>
                      <div className="absolute -bottom-6 right-1/2 translate-x-4 w-4 h-12 bg-red-600 border-x border-red-800 -skew-y-12 -z-10"></div>
                      
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-full border border-yellow-200 flex flex-col items-center justify-center text-yellow-800 shadow-inner">
                        <Award size={24} className="mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">Official<br/>Seal</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Signature */}
                  <div className="flex flex-col items-center md:items-end text-right">
                    {/* Fake handwritten font using cursive styled span */}
                    <div className="text-3xl font-serif italic text-blue-900 opacity-80 mb-2 border-b border-gray-300 pb-2 w-48 text-center">
                      M. Rajput
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{certData.directorName}</p>
                    <p className="text-xs text-gray-500">Academy Director</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 hover:text-indigo-600 transition shadow-sm border border-gray-200">
                <Download size={18} /> Download PDF
              </button>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition shadow-md">
                <Share2 size={18} /> Share Verified Link
              </button>
            </div>
          </motion.div>
        ) : (
          /* FAILED STATE - Dark & Serious */
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-10 text-center shadow-2xl border-t-8 border-red-600 max-w-md mx-auto"
          >
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle size={60} className="text-red-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Verification Failed</h2>
            <div className="bg-red-50 text-red-800 p-3 rounded-lg mb-6 font-mono text-sm border border-red-100">
              Invalid ID: {certId}
            </div>
            <p className="text-gray-600 mb-8">
              This document could not be verified. It may be forged, expired, or not issued by Rainbow Palette Academy.
            </p>
            <Link href="/" className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition block w-full">
              Return to Homepage
            </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
}
