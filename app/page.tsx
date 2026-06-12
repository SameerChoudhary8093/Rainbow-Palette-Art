"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Palette, Store, Award, Image as ImageIcon, Sparkles, Star, Users, LayoutDashboard, Calendar, Search, Play, X, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Stats Data
  const stats = [
    { target: 200, title: "Students Trained", suffix: "+", color: "text-amber-400", bg: "bg-amber-400/5" },
    { target: 100, title: "Awards Won", suffix: "+", color: "text-rose-400", bg: "bg-rose-400/5" },
    { target: 50, title: "Workshops Conducted", suffix: "+", color: "text-purple-400", bg: "bg-purple-400/5" },
    { target: 50, title: "Exhibitions Organized", suffix: "+", color: "text-indigo-400", bg: "bg-indigo-400/5" }
  ];

  return (
    <div className="relative overflow-hidden bg-[#FCFBF8] min-h-screen text-stone-800">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>

      {/* ==================== HERO SECTION ==================== */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 pt-6">
          
          {/* Left: Heading & Core CTAs */}
          <div className="lg:w-1/2 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200/80 text-purple-700 font-mono text-xs uppercase tracking-widest shadow-sm"
            >
              <Sparkles size={14} className="text-amber-500 animate-spin" />
              India's Premier Art & Design Academy
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl font-serif font-black tracking-tight text-stone-900 leading-[1.05]">
              Master the Art of <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-orange-600">
                Creative Expression
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 max-w-xl font-light leading-relaxed">
              We train aspiring creators for entrance exams (NID, NIFT, UCEED), classical oil painting, landscapes, and modern digital portfolios in a professional museum-like campus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/apply" 
                className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-[0_12px_24px_-8px_rgba(28,25,23,0.3)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link 
                href="/courses" 
                className="bg-transparent hover:bg-stone-100 text-stone-900 border border-stone-300 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Courses & Fees <Palette size={18} />
              </Link>
            </div>

            {/* Quick Links Dashboard Buttons */}
            <div className="pt-8 border-t border-stone-200 max-w-xl">
              <p className="text-xs uppercase tracking-widest font-mono text-stone-400 mb-4 font-bold">Quick Access Portal</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <QuickPortalCard href="/gallery" icon={<ImageIcon size={18}/>} text="Gallery" />
                <QuickPortalCard href="/marketplace" icon={<Store size={18}/>} text="Marketplace" />
                <QuickPortalCard href="/workshops" icon={<Calendar size={18}/>} text="Workshops" />
                <QuickPortalCard href="/achievements" icon={<Award size={18}/>} text="Awards" />
              </div>
            </div>
          </div>

          {/* Right: Asymmetrical Floating Gallery */}
          <div className="lg:w-1/2 w-full h-[520px] relative flex items-center justify-center">
            {/* Main Picture Card */}
            <div className="absolute w-[65%] h-[75%] top-4 left-4 rounded-[2rem] overflow-hidden border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)] group z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800" 
                alt="Classical Studio Room" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-serif italic text-base">Studio Drawing Class</p>
                  <p className="text-[11px] uppercase tracking-wider text-stone-300">Classroom Setup</p>
                </div>
              </div>
            </div>

            {/* Floating Top Right Card */}
            <div className="absolute w-[45%] h-[55%] top-16 right-0 rounded-[1.5rem] overflow-hidden border border-white/50 shadow-[0_15px_35px_rgba(0,0,0,0.1)] group z-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400" 
                alt="Oil painting" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750" 
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-purple-700 shadow-sm border border-stone-100">
                Alumni Art
              </div>
            </div>

            {/* Floating Bottom Left Video Trigger Card */}
            <div 
              className="absolute w-[50%] h-[40%] bottom-4 right-8 rounded-[1.5rem] overflow-hidden border border-white/50 shadow-[0_20px_45px_rgba(0,0,0,0.15)] group z-30 cursor-pointer"
              onClick={() => setActiveVideo("https://www.w3schools.com/html/mov_bbb.mp4")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=500" 
                alt="Pottery curation video cover" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
              />
              <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center group-hover:bg-stone-900/55 transition">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-700 shadow-lg transform group-hover:scale-110 transition duration-300">
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-xs font-bold flex items-center gap-1"><Sparkles size={10} className="text-amber-400" /> Curation Tour</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==================== PREMIUM STATS BLOCK ==================== */}
      <section className="bg-stone-950 text-stone-100 py-20 px-6 sm:px-8 border-y border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-stone-800">
          {stats.map((stat, idx) => (
            <CounterBlock key={idx} target={stat.target} title={stat.title} suffix={stat.suffix} color={stat.color} bg={stat.bg} />
          ))}
        </div>
      </section>

      {/* ==================== COURSES PREVIEW PROSPECTUS ==================== */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-purple-700 font-mono text-xs uppercase tracking-widest font-bold">Curated Academy Paths</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 mt-2 mb-4">Our Teaching Programs</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base font-light">Explore academic structures formulated to bridge classical techniques with professional design entrances.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CourseProspectusCard 
            title="Regular Fine Arts" 
            desc="Hobby and core skill development for kids, teens, and adults. Includes pencil sketches, water control, and basics."
            timing="₹2,500 / month | Evening/Weekend | Age 5+"
            accentColor="border-l-amber-400"
          />
          <CourseProspectusCard 
            title="Specialty Masterclasses" 
            desc="3-month and 6-month intensive painting masterclasses. Focuses on impasto oil paintings, anatomy portraits, and layouts."
            timing="From ₹9,500 total | Weekday & Weekend | Age 12+"
            accentColor="border-l-rose-400"
          />
          <CourseProspectusCard 
            title="1-Year Professional Diploma" 
            desc="Full academic syllabus spanning historical aesthetics, studio clay, digital illustration, and live exhibition curation."
            timing="₹50,000 / year | Daily 11:00 AM | Age 18+"
            accentColor="border-l-purple-500"
          />
        </div>
      </section>

      {/* ==================== SECURE VERIFICATION BOX ==================== */}
      <section className="bg-stone-900 text-stone-100 py-20 px-6 sm:px-8 relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="space-y-4">
            <span className="bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5">
              <ShieldCheck size={14}/> Immutable QR Credentials Verification
            </span>
            <h3 className="text-3xl font-serif font-black">Digital Certificate Verification Portal</h3>
            <p className="text-stone-400 text-sm max-w-xl font-light leading-relaxed">
              Every course completion diploma, workshop certificate, event participation card, and internship reference issued by our council carries an encrypted verification ID.
            </p>
          </div>
          <Link 
            href="/verify" 
            className="bg-white hover:bg-stone-100 text-stone-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-sm tracking-wide"
          >
            Access Verification Desk
          </Link>
        </div>
      </section>

      {/* ==================== EDITORIAL REVIEWS ==================== */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#FCFBF8]">
        <div className="text-center mb-20">
          <span className="text-rose-500 font-mono text-xs uppercase tracking-widest font-bold">Student Journeys</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 mt-2 mb-4">Verified Alumni Reviews</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base font-light">Read firsthand accounts of students who cleared design intakes and built international portfolios.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EditorialReviewCard 
            name="Rahul Verma" 
            role="Cleared NID Entrance 2025"
            text="The 1-on-1 portfolio prep was life-changing. Tutors mapped my sketches, timed my wireframe sculpting, and organized mocks. Cleared NID on my first attempt!"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200"
            hasVideo={true}
            onClick={() => setActiveVideo("https://www.w3schools.com/html/mov_bbb.mp4")}
          />
          <EditorialReviewCard 
            name="Sunita Deshmukh" 
            role="Parent of Aarush (Age 8)"
            text="My son joined the Kids Art Safari Camp. The electric clay wheel session and the watercolor landscape outdoor tours were brilliant. Highly recommend."
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
            hasVideo={false}
          />
          <EditorialReviewCard 
            name="Kavya Desai" 
            role="National Art Winner 2026"
            text="The Professional Diploma is structured like an international course. The curation models taught me how to exhibit, coordinate, and price my works."
            image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200"
            hasVideo={true}
            onClick={() => setActiveVideo("https://www.w3schools.com/html/movie.mp4")}
          />
        </div>
      </section>

      {/* ==================== VIDEO MODAL ==================== */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-stone-950/80 backdrop-blur-sm">
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
  );
}

// Subcomponents
function QuickPortalCard({ href, icon, text }: { href: string, icon: React.ReactNode, text: string }) {
  return (
    <Link 
      href={href}
      className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-stone-200 hover:border-purple-300 hover:bg-stone-50 transition-all duration-300 group shadow-sm hover:shadow"
    >
      <div className="text-stone-400 group-hover:text-purple-700 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-xs font-bold text-stone-700 group-hover:text-stone-950 font-mono tracking-wider uppercase text-center w-full truncate">
        {text}
      </span>
    </Link>
  );
}

function CounterBlock({ target, title, suffix, color, bg }: { target: number, title: string, suffix: string, color: string, bg: string }) {
  const [count, setCount] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(current));
          }
        }, 40);
      }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className={`mb-4 p-3.5 rounded-full ${bg} ${color}`}>{counterIcon(title)}</div>
      <div className="text-4xl md:text-5xl font-mono font-black text-white mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <span className="text-stone-400 font-mono text-[10px] font-bold uppercase tracking-widest">{title}</span>
    </motion.div>
  );
}

function counterIcon(title: string) {
  if (title.includes("Students")) return <Users size={18} />;
  if (title.includes("Awards")) return <Award size={18} />;
  if (title.includes("Workshops")) return <Palette size={18} />;
  return <LayoutDashboard size={18} />;
}

function CourseProspectusCard({ title, desc, timing, accentColor }: { title: string, desc: string, timing: string, accentColor: string }) {
  return (
    <div className={`bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between group border-l-4 ${accentColor}`}>
      <div>
        <h3 className="text-2xl font-serif font-black text-stone-900 mb-4 group-hover:text-stone-800 transition-colors">{title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">{desc}</p>
      </div>
      <div>
        <div className="bg-stone-50 border border-stone-100 p-3 rounded-xl mb-6 text-xs text-stone-500 font-mono font-semibold">
          {timing}
        </div>
        <Link 
          href="/courses"
          className="text-stone-950 font-bold hover:underline flex items-center gap-1 text-sm tracking-wide"
        >
          Explore Curriculum & Schedules <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

function EditorialReviewCard({ name, role, text, image, hasVideo, onClick }: { name: string, role: string, text: string, image: string, hasVideo: boolean, onClick?: () => void }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow duration-300">
      <div>
        <div className="flex gap-0.5 text-amber-500 mb-5">
          <Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/>
        </div>
        <p className="text-stone-600 italic text-sm leading-relaxed mb-8 font-light">"{text}"</p>
      </div>

      <div className="border-t border-stone-100 pt-5 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border border-stone-200 shadow-sm" />
          <div>
            <h4 className="font-bold text-stone-900 text-sm">{name}</h4>
            <span className="text-[10px] font-mono text-purple-700 tracking-wider uppercase font-bold">{role}</span>
          </div>
        </div>

        {hasVideo && onClick && (
          <button 
            onClick={onClick}
            className="w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center hover:bg-purple-800 shadow transition-transform duration-300 hover:scale-105"
            title="Watch Video Review"
          >
            <Play size={16} fill="currentColor" className="ml-0.5" />
          </button>
        )}
      </div>
    </div>
  );
}
