"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Printer, ArrowLeft, ShieldAlert, FileText, CheckCircle } from "lucide-react";
import QRCode from "react-qr-code";
import Link from "next/link";
import Image from "next/image";

// Internship records mock database
const internsDB: Record<string, any> = {
  "RB-INT-2024": {
    studentName: "Rohan Das",
    role: "Portfolio Development & Teaching Assistant",
    college: "NIFT Delhi",
    duration: "3 Months (June 2024 - August 2024)",
    serialNo: "RB-INT-773821",
    issueDate: "05 September 2024",
    skills: ["Teaching assistance", "Workshop coordination", "Exhibition management", "Portfolio guidance"],
    performance: "Outstanding. Rohan demonstrated immense passion, strong design sensibilities, and excellent coordination skills during our annual 'Canvas of Dreams' exhibition."
  }
};

export default function RecommendationPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const certId = unwrappedParams.id.toUpperCase();
  const [internData, setInternData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated Load
    const timer = setTimeout(() => {
      if (internsDB[certId]) {
        setInternData(internsDB[certId]);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [certId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0c0b] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-amber-950/40 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-radial-at-t from-[#161513] via-[#0c0b0a] to-[#040404] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans relative overflow-hidden print:bg-white print:py-0 print:px-0 print:block">
      
      {/* Background Glows (Screen Mode Only) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none print:hidden"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none print:hidden"></div>

      <div className="max-w-4xl w-full relative z-10 print:max-w-none print:w-full">
        
        {/* Back Link & Print Action Bar (Hidden during printing) */}
        <div className="mb-6 print:hidden flex flex-col sm:flex-row justify-between items-center w-full gap-4">
          <Link href={`/verify/${certId}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gray-400 hover:text-amber-400 transition">
            <ArrowLeft size={14} /> Back to Verification Portal
          </Link>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-5 py-2.5 rounded-full font-semibold transition text-xs uppercase tracking-wider shadow-md"
          >
            <Printer size={14} /> Print Letter / Save PDF
          </button>
        </div>

        {internData ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 sm:p-16 rounded-3xl shadow-2xl border border-amber-900/15 relative overflow-hidden print:shadow-none print:border-none print:p-0 print:rounded-none"
          >
            {/* Fine Ruled Stationery Accent Line */}
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-600/30 print:hidden"></div>
            
            {/* OFFICIAL LETTERHEAD */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between border-b-2 border-amber-900/15 pb-6 mb-8 w-full gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-amber-900/15 bg-white">
                  <Image 
                    src="/Logo.jpg" 
                    alt="Rainbow Palette Logo" 
                    fill
                    className="object-cover scale-110" 
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-xl font-serif font-black tracking-[0.2em] text-amber-950 uppercase">RAINBOW PALETTE</h1>
                  <p className="text-[9px] text-gray-400 font-mono tracking-widest uppercase font-semibold">ACADEMY OF FINE ARTS & DESIGN</p>
                </div>
              </div>
              <div className="text-center sm:text-right text-[10px] text-gray-500 font-mono leading-relaxed">
                <p>124, Creative Enclave, Koramangala, Bengaluru</p>
                <p>Phone: +91 98765 43210 | hello@rainbowpalette.com</p>
                <p>Web: www.rainbowpalette.com</p>
              </div>
            </div>

            {/* Letter Reference Metadata */}
            <div className="flex justify-between text-xs text-gray-500 font-mono mb-8">
              <p>REF NO: <span className="font-bold text-gray-800">RP/INT-REC/{certId}</span></p>
              <p>DATE: <span className="text-gray-800">{internData.issueDate}</span></p>
            </div>

            {/* Formal Title */}
            <div className="text-center mb-10">
              <h2 className="text-base sm:text-lg font-serif font-bold uppercase tracking-[0.25em] text-gray-800 border-b border-amber-900/10 pb-2 inline-block px-12">
                To Whom It May Concern
              </h2>
            </div>

            {/* Letter Body - Elegant Editorial Layout */}
            <div className="text-gray-700 font-serif leading-relaxed text-sm sm:text-base text-justify space-y-6">
              <p>
                This letter is to formally recommend and verify the internship performance of <strong>{internData.studentName}</strong>, 
                a student of <strong>{internData.college}</strong>, who successfully completed a <strong>{internData.duration}</strong> internship program at Rainbow Palette Academy.
              </p>
              <p>
                During their tenure as a <strong>{internData.role}</strong>, Rohan was actively involved in assisting our senior mentors with portfolio development guidance for students preparing for design entrance examinations like NID, NIFT, and UCEED. Additionally, Rohan took key responsibilities in managing logistics and student coordination for our annual art exhibition <em>"Canvas of Dreams"</em> and live lakeside painting programs.
              </p>
              <p>
                Rohan's performance was <strong>{internData.performance}</strong>. They exhibit a high level of creative maturity, outstanding leadership qualities, and a dedicated work ethic. Rohan proved to be an asset to our team, demonstrating excellent communication skills and an ability to inspire young students.
              </p>
              <p>
                We wish Rohan the very best in all their future academic and professional pursuits. We strongly recommend them for any design roles, teaching assistantships, or creative event management opportunities they choose to pursue.
              </p>
            </div>

            {/* SIGNATURE & QR CODE FOOTER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end mt-16 border-t border-amber-900/10 pt-8">
              
              {/* Director Signature with Gold Seal Overlay */}
              <div className="text-left relative">
                {/* Visual Stamp Watermark behind signature */}
                <div className="absolute -top-6 left-6 w-20 h-20 bg-amber-500/5 border border-amber-500/10 rounded-full flex items-center justify-center -z-10 rotate-12 pointer-events-none">
                  <span className="text-[6px] font-mono tracking-widest text-[#9c7d3a] uppercase font-bold text-center">VERIFIED<br/>OFFICIAL</span>
                </div>
                
                <div className="text-3xl font-serif italic text-blue-900/70 mb-2 border-b border-gray-200 pb-2 w-48 text-center print:border-gray-200">
                  M. Rajput
                </div>
                <p className="font-bold text-gray-900 text-xs tracking-wide">Dr. Meera Rajput</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Academy Director & Founder</p>
                <p className="text-[9px] text-gray-400 tracking-wider">Rainbow Palette Academy</p>
              </div>

              {/* Secure QR Seal Verification */}
              <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                <div className="bg-white p-2 rounded-xl border border-amber-900/10 shadow-sm mb-2">
                  <QRCode value={`https://rainbowpalette.com/verify/${certId}`} size={75} />
                </div>
                <p className="text-[9px] font-mono text-gray-400 leading-tight">
                  QR Verified Official Record<br/>
                  Serial ID: <span className="font-bold text-gray-700">{internData.serialNo}</span>
                </p>
                <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50 mt-1.5 uppercase">
                  <CheckCircle size={8} /> Integrity Checked
                </span>
              </div>

            </div>

          </motion.div>
        ) : (
          /* NOT INTERN OR FAIL */
          <div className="bg-[#141312] rounded-3xl p-10 text-center shadow-lg border border-red-500/30 max-w-md mx-auto">
            <div className="w-16 h-16 bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
              <ShieldAlert size={32} className="text-red-500" />
            </div>
            <h2 className="text-xl font-serif text-white tracking-wide mb-2">No Recommendation Found</h2>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed">
              Only verified Internship Credentials generate letters of recommendation. The certificate ID: {certId} is either not an internship certificate or is invalid.
            </p>
            <Link href={`/verify/${certId}`} className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-2.5 rounded-xl hover:from-amber-500 hover:to-amber-600 transition block text-xs uppercase tracking-widest">
              Back to Verification Page
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
