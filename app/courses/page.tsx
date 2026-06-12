"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CalendarDays, IndianRupee, UserCircle, Award, CheckCircle2, MessageCircle, ArrowLeft, Send, Sparkles, X, Info } from "lucide-react";
import Link from "next/link";
import { coursesData } from "@/data/courses";

export default function CoursesPage() {
  const [inquiryCourse, setInquiryCourse] = useState<string | null>(null);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryCourse(null);
      setInquiryName("");
      setInquiryPhone("");
      setInquiryMsg("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] py-20 px-6 sm:px-8 lg:px-12 text-stone-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-purple-600 transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="text-purple-700 font-mono text-xs uppercase tracking-widest font-bold">Prospectus 2026</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 mt-2 mb-4">
            Curriculums & <span className="italic font-light text-purple-700">Programs</span>
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto text-base font-light">
            An overview of structural programs curated by senior artists, outlining durations, batch timings, age policies, and certification tracks.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28">
          {coursesData.map((course, index) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-200/80 hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                {/* Category Pill */}
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-50 text-purple-700 border border-purple-100">
                    {course.category}
                  </span>
                  <span className="text-stone-400 font-mono text-xs font-semibold">{course.duration}</span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-stone-950 mb-6 group-hover:text-purple-900 transition-colors">{course.title}</h2>

                {/* Course Details List */}
                <div className="space-y-3 mb-8 border-b border-stone-100 pb-6">
                  <DetailRow icon={<Clock size={16}/>} text={`Duration: ${course.duration}`} />
                  <DetailRow icon={<CalendarDays size={16}/>} text={`${course.days}`} />
                  <DetailRow icon={<UserCircle size={16}/>} text={`Eligibility: ${course.ageEligibility}`} />
                  <DetailRow icon={<Award size={16}/>} text={course.certificateInfo} className="text-emerald-700 font-bold" />
                </div>

                {/* Curriculum section */}
                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-widest font-mono text-stone-400 mb-3 font-bold">Curriculum Outline</h3>
                  <ul className="space-y-2.5">
                    {course.curriculum.map((item, i) => (
                      <li key={i} className="flex items-start text-stone-600 text-sm leading-relaxed">
                        <CheckCircle2 size={14} className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-stone-100 mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-stone-400 font-mono uppercase tracking-wider font-bold">Program Fee</span>
                  <span className="text-xl font-bold font-mono text-stone-900 flex items-center">
                    <IndianRupee size={16} /> {course.fees.split(" ")[0]} <span className="text-xs text-stone-400 font-normal ml-1">{course.fees.includes("month") ? "/ mo" : "total"}</span>
                  </span>
                </div>
                
                <Link 
                  href={`/apply?course=${course.id}`}
                  className="w-full text-center bg-stone-900 hover:bg-stone-800 text-white py-3 rounded-xl font-bold text-sm transition-all"
                >
                  Apply Online
                </Link>
                
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setInquiryCourse(course.title)}
                    className="flex items-center justify-center gap-1.5 border border-stone-300 text-stone-700 py-2.5 rounded-xl font-bold text-xs hover:bg-stone-50 transition"
                  >
                    <Info size={14} /> Inquiry Form
                  </button>
                  <a 
                    href={`https://wa.me/919876543210?text=Hi, I want to inquire about the ${course.title} program.`}
                    target="_blank"
                    className="flex items-center justify-center gap-1.5 border border-emerald-500 text-emerald-600 py-2.5 rounded-xl font-bold text-xs hover:bg-emerald-50 transition"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ==================== BATCH TIMING & FEE TIMELINE DASHBOARD (Point 4) ==================== */}
        <div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-sm p-8 sm:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-serif font-black text-stone-900">Batch Timing & Fee Dashboard</h2>
              <p className="text-sm text-stone-500 mt-1">Check open slots, days, and pricing matrices.</p>
            </div>
            <a 
              href="https://wa.me/919876543210?text=Hi, I want to know about the current open batches."
              target="_blank"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition shadow-sm"
            >
              <MessageCircle size={16} /> WhatsApp Inquiry Desk
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-stone-400 font-mono text-xs uppercase tracking-wider font-bold">
                  <th className="pb-4 font-bold">Course / Program</th>
                  <th className="pb-4 font-bold">Category</th>
                  <th className="pb-4 font-bold">Days</th>
                  <th className="pb-4 font-bold">Timings</th>
                  <th className="pb-4 font-bold">Eligibility</th>
                  <th className="pb-4 font-bold text-right font-bold">Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-semibold text-stone-800">
                {coursesData.map((course) => (
                  <tr key={course.id} className="hover:bg-stone-50/50 transition">
                    <td className="py-5 font-serif font-bold text-stone-900">{course.title}</td>
                    <td className="py-5">
                      <span className="text-[10px] font-mono tracking-wider font-black px-2 py-0.5 rounded uppercase border border-purple-100 bg-purple-50 text-purple-700">
                        {course.category}
                      </span>
                    </td>
                    <td className="py-5 text-stone-600">{course.days}</td>
                    <td className="py-5 font-mono text-xs">{course.batchTiming}</td>
                    <td className="py-5 text-stone-600">{course.ageEligibility}</td>
                    <td className="py-5 text-right font-mono text-stone-900 font-bold">{course.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ==================== ONLINE INQUIRY MODAL (Point 4) ==================== */}
      <AnimatePresence>
        {inquiryCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-stone-950/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative border border-stone-150"
            >
              <button 
                onClick={() => setInquiryCourse(null)}
                className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-600 p-2 rounded-full transition"
              >
                <X size={16} />
              </button>

              {!inquirySuccess ? (
                <>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 border border-purple-100 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                    <Sparkles size={12}/> Program Inquiry
                  </div>
                  <h3 className="text-2xl font-serif font-black text-stone-900 mb-2">Online Inquiry Form</h3>
                  <p className="text-xs text-stone-500 mb-6">Inquiring for: <strong className="text-stone-800 font-bold">{inquiryCourse}</strong></p>

                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1.5">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Shalini Sharma" 
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1.5">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="e.g. +91 98765 43210" 
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1.5">Query Message</label>
                      <textarea 
                        required
                        rows={3} 
                        placeholder="Tell us about your background or requirements..." 
                        value={inquiryMsg}
                        onChange={(e) => setInquiryMsg(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-stone-950 hover:bg-stone-800 text-white font-bold py-3.5 rounded-xl transition shadow flex items-center justify-center gap-2 text-sm"
                    >
                      <Send size={16} /> Submit Inquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-black text-stone-900 mb-2">Inquiry Submitted!</h3>
                  <p className="text-sm text-stone-500">
                    Thank you {inquiryName}. We will call or WhatsApp you within the next 4 working hours.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Helper DetailRow
function DetailRow({ icon, text, className = "text-stone-600" }: { icon: React.ReactNode, text: string, className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 text-xs font-semibold ${className}`}>
      <span className="text-stone-400 flex-shrink-0">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}
