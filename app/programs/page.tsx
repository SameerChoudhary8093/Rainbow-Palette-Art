"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Map, Briefcase, Compass, ChevronRight, CheckCircle2, Image as ImageIcon, ArrowLeft, Play, Sparkles, Send, Calendar, MapPin, Users, BookOpen, Award, FileText, Check, X } from "lucide-react";
import Link from "next/link";

// Mock Data for Intern Showcase (Point 20)
const internsData = [
  { id: "RB-INT-2024", name: "Rohan Das", college: "NIFT Delhi", role: "Portfolio Development & Teaching Assistant", duration: "3 Months", project: "Curated 'Canvas of Dreams' exhibition, guided 15+ students for NIFT prep.", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" },
  { id: "RB-INT-2", name: "Aisha Khan", college: "JJ School of Art", role: "Fine Arts Teaching Intern", duration: "6 Months", project: "Led 12 outdoor sketching tours, developed foundation drawing syllabus.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
  { id: "RB-INT-3", name: "Siddharth Jain", college: "NID Ahmedabad", role: "Design Coordinator", duration: "3 Months", project: "Designed summer art camp logo & materials, hosted clay sculpting workshop.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
];

// Mock Outdoor Gallery (Point 14)
const outdoorArtworks = [
  { id: 1, title: "Lalbagh Lake Reflections", location: "Lalbagh Lake", artist: "Aarav Sharma (Diploma)", image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=400" },
  { id: 2, title: "Hampi Stone Chariot Sketch", location: "Hampi Ruins", artist: "Priya Patel (6M Acrylic)", image: "https://images.unsplash.com/photo-1588612502693-0182650186fc?q=80&w=400" },
  { id: 3, title: "Cubbon Park Greenery", location: "Cubbon Park", artist: "Vivaan (Kids Camp)", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400" },
  { id: 4, title: "Vidhana Soudha Heritage Study", location: "Heritage Site", artist: "Kavya Desai (Diploma)", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400" },
];

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'outdoors' | 'internship'>('portfolio');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Outdoors Register Form State
  const [outdoorReg, setOutdoorReg] = useState({ name: "", phone: "", date: "2026-07-12", location: "Cubbon Park Plein Air" });
  const [outdoorSuccess, setOutdoorSuccess] = useState(false);

  // Internship Apply Form State
  const [internApply, setInternApply] = useState({ name: "", email: "", phone: "", college: "", course: "BFA", duration: "3 Months", portfolioLink: "" });
  const [internSuccess, setInternSuccess] = useState(false);

  const handleOutdoorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutdoorSuccess(true);
    setTimeout(() => setOutdoorSuccess(false), 4000);
  };

  const handleInternSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInternSuccess(true);
    setTimeout(() => setInternSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] py-20 px-6 sm:px-8 lg:px-12 text-stone-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6 font-mono text-xs">
          <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-purple-600 transition">
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-purple-700 font-mono text-xs uppercase tracking-widest font-bold">Academy Portals</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 mt-2 mb-4">
            Specialist & <span className="italic font-light text-purple-700">Auxiliary Programs</span>
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto text-base font-light">
            Providing tailored development schemes spanning portfolio curation, outdoors plein-air drawing, and academy intern schemes.
          </p>
        </div>

        {/* Navigation Tabs (Premium Underlined Minimal Style) */}
        <div className="flex justify-center mb-16 border-b border-stone-200">
          <div className="flex gap-8 md:gap-12 justify-center relative">
            {[
              { id: 'portfolio', label: 'Portfolio Preparation', icon: GraduationCap },
              { id: 'outdoors', label: 'Outdoors & Art Tours', icon: Compass },
              { id: 'internship', label: 'Internship Program', icon: Briefcase }
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 pb-4 font-mono text-xs uppercase tracking-wider font-bold transition-all relative ${
                    isSelected ? "text-stone-950 font-black" : "text-stone-400 hover:text-stone-700"
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeTabBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-950"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* ==================== 1. PORTFOLIO PREPARATION ==================== */}
            {activeTab === 'portfolio' && (
              <div className="space-y-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 bg-white rounded-[2rem] p-8 sm:p-12 border border-stone-200 shadow-sm">
                  <div className="lg:w-1/2 space-y-6">
                    <span className="bg-purple-50 text-purple-700 text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase border border-purple-100">
                      Admissions Mentorship
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 leading-tight">
                      Crack Top Art & Design Entrances
                    </h2>
                    <p className="text-stone-600 font-light leading-relaxed text-base">
                      We offer a custom, highly customized mentorship program to design college applicants. Our syllabus covers creative memory drawing, spatial ability, coloring rendering, and mental aptitude mapping.
                    </p>
                    
                    <div className="space-y-3 pt-2">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 font-bold">Entrance Customizations:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "NID (National Institute of Design)",
                          "NIFT (Fashion Technology)",
                          "UCEED / CEED (IIT Design)",
                          "NATA (Architecture Sketching)",
                          "BFA / MFA (Fine Arts Admission)",
                          "International Art Schools Prep",
                          "UID & Private Design Schools",
                          "Professional Teaching Portfolios"
                        ].map((exam, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm text-stone-700 font-semibold">
                            <CheckCircle2 size={14} className="text-purple-600 flex-shrink-0" />
                            <span>{exam}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link 
                        href="/apply?course=portfolio"
                        className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-8 py-4 rounded-full shadow transition"
                      >
                        Apply for Portfolio Prep Batch <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 relative h-96 w-full rounded-2xl overflow-hidden border border-stone-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800" 
                      alt="Portfolio prep class" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>

                {/* Preparation Guide Milestones */}
                <div>
                  <h3 className="text-3xl font-serif font-black text-stone-900 text-center mb-12">Our Development Milestones</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <MilestoneCard step="01" title="Skill Evaluation" desc="Analyzing the candidate's drawing speed, line quality, rendering abilities, and weak links." />
                    <MilestoneCard step="02" title="Ideation & Concepts" desc="Transitioning from simple drawing to visual thinking, abstract concepts representation, and quick drawings." />
                    <MilestoneCard step="03" title="Mock Studio Tests" desc="Clay models, wireframes, paper sculpture modeling, and timed sketches under examination pressure." />
                    <MilestoneCard step="04" title="Final Compilation" desc="Crafting physical portfolio binding and online digital files aligned with international school guidelines." />
                  </div>
                </div>
              </div>
            )}

            {/* ==================== 2. OUTDOOR PAINTING & ART TOURS ==================== */}
            {activeTab === 'outdoors' && (
              <div className="space-y-20">
                
                {/* Intro and Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6 text-left">
                    <span className="bg-amber-50 text-amber-700 text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase border border-amber-150">
                      Plein Air Sketching
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 leading-tight">Live Outdoors Painting Program</h2>
                    <p className="text-stone-600 font-light leading-relaxed text-base">
                      Nature and history are the ultimate classrooms. Our Live Outdoors Program schedules sketch trips to lakes, heritage structures, and nature reserves to study real-time lighting, perspectives, and colors.
                    </p>
                    
                    <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-150 space-y-4">
                      <h4 className="font-bold font-serif text-amber-900 flex items-center gap-1.5"><MapPin size={16}/> Locations Visited:</h4>
                      <ul className="grid grid-cols-2 gap-3 text-sm text-amber-800 font-semibold">
                        <li>🌲 Cubbon Park Gardens</li>
                        <li>🌊 Lalbagh Botanical Lake</li>
                        <li>🕌 Hampi Ruins sketching</li>
                        <li>🏛️ Bengaluru Palace grounds</li>
                        <li>🎨 National Gallery of Modern Art</li>
                        <li>🏞️ Nandi Hills sunrise painting</li>
                      </ul>
                    </div>
                  </div>

                  {/* Upcoming Schedule & Register */}
                  <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm space-y-6 text-left">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
                      <Calendar className="text-amber-600" size={20}/> Upcoming Outdoor Schedule
                    </h3>
                    <div className="border-l-2 border-amber-500 pl-4 space-y-1">
                      <p className="text-sm font-bold text-stone-800">Lakeside Watercolors & Light</p>
                      <p className="text-xs text-stone-500">Sunday, 14 June 2026 | 7:00 AM - 10:30 AM</p>
                      <p className="text-xs text-amber-700 font-mono font-bold">Venue: Lalbagh Lake Main Gate</p>
                    </div>
                    <div className="border-l-2 border-indigo-500 pl-4 space-y-1">
                      <p className="text-sm font-bold text-stone-800">Heritage Sketching & Architecture Study</p>
                      <p className="text-xs text-stone-500">Sunday, 28 June 2026 | 8:30 AM - 12:00 PM</p>
                      <p className="text-xs text-indigo-700 font-mono font-bold">Venue: Bengaluru Palace Grounds</p>
                    </div>

                    {/* Registration Form */}
                    <div className="pt-6 border-t border-stone-150">
                      <h4 className="font-bold text-stone-800 mb-3 text-xs uppercase tracking-wider font-mono">Register for Next Outdoor Session</h4>
                      {outdoorSuccess ? (
                        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2">
                          <Check size={16} /> Registration Confirmed! Check email for coordinates.
                        </div>
                      ) : (
                        <form onSubmit={handleOutdoorSubmit} className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <input 
                              required 
                              type="text" 
                              placeholder="Name" 
                              value={outdoorReg.name}
                              onChange={(e) => setOutdoorReg({...outdoorReg, name: e.target.value})}
                              className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            <input 
                              required 
                              type="tel" 
                              placeholder="Phone" 
                              value={outdoorReg.phone}
                              onChange={(e) => setOutdoorReg({...outdoorReg, phone: e.target.value})}
                              className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-amber-400"
                            />
                          </div>
                          <div>
                            <select 
                              value={outdoorReg.location}
                              onChange={(e) => setOutdoorReg({...outdoorReg, location: e.target.value})}
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-xs outline-none focus:ring-2 focus:ring-amber-400"
                            >
                              <option>Lalbagh Lake (14 June)</option>
                              <option>Bengaluru Palace (28 June)</option>
                            </select>
                          </div>
                          <button 
                            type="submit" 
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition"
                          >
                            Reserve Slot (Free for Students)
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>

                {/* Outdoor Artwork Gallery */}
                <div>
                  <h3 className="text-3xl font-serif font-black text-stone-900 text-center mb-2">Outdoor Artworks Showcase</h3>
                  <p className="text-stone-500 text-center mb-10 max-w-md mx-auto text-sm font-light">Original sketches and plein-air paintings created on-site by our students.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outdoorArtworks.map((art) => (
                      <div key={art.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 group">
                        <div className="h-48 relative overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                          <span className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1 border border-white/10">
                            <MapPin size={8} /> {art.location}
                          </span>
                        </div>
                        <div className="p-4 text-left">
                          <h4 className="font-bold text-stone-950 text-sm leading-snug">{art.title}</h4>
                          <p className="text-xs text-stone-500 mt-1 font-mono">Artist: {art.artist}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Annual Art Tour */}
                <div className="bg-stone-950 rounded-[2.5rem] p-8 sm:p-14 text-stone-100 relative overflow-hidden text-left border border-stone-800">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                      <span className="bg-purple-950 text-purple-300 text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase border border-purple-800">
                        Annual Educational Trips
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-serif font-black">Annual Heritage Art Tour 2026</h3>
                      <p className="text-stone-400 mb-4 text-base font-light leading-relaxed">
                        Every year, we organize museum visits, visits to national art galleries, and personal artist studio visits. In January 2026, our class took a heritage sketching tour to the historic Hampi ruins.
                      </p>
                      <button 
                        onClick={() => setActiveVideo("https://www.w3schools.com/html/mov_bbb.mp4")}
                        className="bg-white hover:bg-stone-100 text-stone-950 font-bold px-6 py-3 rounded-full transition flex items-center gap-2 text-sm shadow"
                      >
                        <Play size={16} fill="currentColor"/> Watch Art Tour Vlog
                      </button>
                    </div>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="https://images.unsplash.com/photo-1578301978693-85fa9c03fa75?q=80&w=600" 
                        alt="Heritage Sketching" 
                        className="rounded-2xl border border-stone-800 shadow-xl object-cover w-full h-64" 
                      />
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* ==================== 3. INTERNSHIP PROGRAM ==================== */}
            {activeTab === 'internship' && (
              <div className="space-y-20">
                
                {/* Details & Application */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  
                  {/* Benefits */}
                  <div className="space-y-6 text-left">
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase border border-blue-100">
                      BFA, MFA & Design Students
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 leading-tight">Art Curation & Teaching Internship</h2>
                    <p className="text-stone-600 font-light leading-relaxed text-base">
                      Rainbow Palette offers structured 3-month and 6-month internships for fine arts grads and design majors. Interns gain hands-on experience in teaching classes, event logistics, and curation.
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-bold font-mono text-xs uppercase tracking-widest text-stone-400">Internship Benefits:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Art Teaching & Pedagogy Practice",
                          "Workshop Management & Logistics",
                          "Exhibition Curation Experience",
                          "Annual Art Tour Coordination",
                          "Portfolio Preparation Guidance",
                          "Digitally QR-Verified Certificate",
                          "Director's Recommendation Letter"
                        ].map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm text-stone-700 font-semibold">
                            <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-stone-50 border border-stone-200 p-5 rounded-2xl text-xs text-stone-600 font-mono space-y-1">
                      <p><strong>Duration:</strong> 3 Months or 6 Months options</p>
                      <p><strong>Eligibility:</strong> Pursuing / Completed BFA, MFA, Fashion, Interior, or Product Design</p>
                    </div>
                  </div>

                  {/* Apply Form */}
                  <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm text-left">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Apply for Internship</h3>
                    <p className="text-stone-500 mb-6 text-sm">Submit your portfolio to apply for our next quarterly batch.</p>
                    
                    {internSuccess ? (
                      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center text-sm font-bold flex flex-col items-center justify-center gap-2">
                        <Check size={28} className="text-green-600 mb-2" />
                        Application Submitted Successfully!<br />Our team will review your college profile and portfolio link and schedule an interview.
                      </div>
                    ) : (
                      <form onSubmit={handleInternSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 mb-1 font-mono uppercase">Full Name</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Rohan Das" 
                            value={internApply.name}
                            onChange={(e) => setInternApply({...internApply, name: e.target.value})}
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-stone-500 mb-1 font-mono uppercase">Email</label>
                            <input 
                              required 
                              type="email" 
                              placeholder="rohan@nift.com" 
                              value={internApply.email}
                              onChange={(e) => setInternApply({...internApply, email: e.target.value})}
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-stone-500 mb-1 font-mono uppercase">Phone</label>
                            <input 
                              required 
                              type="tel" 
                              placeholder="+91..." 
                              value={internApply.phone}
                              onChange={(e) => setInternApply({...internApply, phone: e.target.value})}
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-stone-500 mb-1 font-mono uppercase">College Name</label>
                            <input 
                              required 
                              type="text" 
                              placeholder="NIFT Delhi" 
                              value={internApply.college}
                              onChange={(e) => setInternApply({...internApply, college: e.target.value})}
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-stone-500 mb-1 font-mono uppercase">Course</label>
                            <select 
                              value={internApply.course}
                              onChange={(e) => setInternApply({...internApply, course: e.target.value})}
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                            >
                              <option>BFA (Fine Arts)</option>
                              <option>MFA (Fine Arts)</option>
                              <option>Fashion Design</option>
                              <option>Communication Design</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 mb-1 font-mono uppercase">Portfolio Link (Behance/Drive)</label>
                          <input 
                            required 
                            type="url" 
                            placeholder="https://behance.net/rohan" 
                            value={internApply.portfolioLink}
                            onChange={(e) => setInternApply({...internApply, portfolioLink: e.target.value})}
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        <button 
                          type="submit" 
                          className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 rounded-xl transition shadow text-sm"
                        >
                          Submit Internship Application
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Internship Showcase (Polaroid Card Style) */}
                <div>
                  <h3 className="text-3xl font-serif font-black text-stone-900 text-center mb-2">Intern Showcase</h3>
                  <p className="text-stone-500 text-center mb-12 max-w-xl mx-auto text-sm font-light">Meet our outstanding interns who contributed to our curation and teaching programs.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {internsData.map((intern) => (
                      <div key={intern.id} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between text-left">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={intern.image} alt={intern.name} className="w-14 h-14 rounded-full object-cover border border-stone-200" />
                            <div>
                              <h4 className="font-extrabold text-stone-900 text-base">{intern.name}</h4>
                              <p className="text-xs font-semibold text-purple-700 font-mono tracking-wide uppercase">{intern.role}</p>
                              <p className="text-[10px] text-stone-400 font-mono">{intern.college}</p>
                            </div>
                          </div>
                          <p className="text-sm text-stone-600 italic leading-relaxed mb-6 font-light">"{intern.project}"</p>
                        </div>
                        
                        <div className="border-t border-stone-100 pt-4 flex justify-between items-center text-xs font-mono">
                          <span className="text-stone-400 font-bold uppercase tracking-wider">Duration: {intern.duration}</span>
                          
                          {intern.id === "RB-INT-2024" ? (
                            <Link 
                              href={`/verify/RB-INT-2024`} 
                              className="text-pink-600 hover:underline font-bold flex items-center gap-1 uppercase tracking-wider font-mono text-[10px]"
                            >
                              <Award size={12} /> Verify Credentials
                            </Link>
                          ) : (
                            <span className="text-emerald-600 font-bold flex items-center gap-1 uppercase tracking-wider text-[10px]">
                              <CheckCircle2 size={12} /> Verified
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-stone-950/85 backdrop-blur-sm">
              <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative shadow-2xl">
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition z-10"
                >
                  <X size={20} />
                </button>
                <div className="relative aspect-video">
                  <video src={activeVideo} controls autoPlay className="w-full h-full object-cover"></video>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// Subcomponents
function MilestoneCard({ step, title, desc }: { step: string, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative group hover:border-purple-300 transition-all duration-300 text-left">
      <span className="absolute top-4 right-6 text-3xl font-mono font-black text-purple-100 group-hover:text-purple-200 transition-colors">
        {step}
      </span>
      <h4 className="font-serif font-black text-stone-900 text-lg mb-2 mt-4">{title}</h4>
      <p className="text-stone-500 text-xs leading-relaxed font-light">{desc}</p>
    </div>
  );
}
