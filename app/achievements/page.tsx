"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Newspaper, Image as ImageIcon, MapPin, Award, ArrowLeft, Users, Palette, LayoutDashboard, Play, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AchievementsPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-600 transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Trophy size={40} className="text-yellow-500" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Awards & <span className="text-yellow-500">Milestones</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the academic accolades, contest winnings, and global exhibitions of our talented art student community.
          </p>
        </div>

        {/* 1. STATS COUNTERS SECTION (Client Point 9) */}
        <section className="bg-gray-900 py-16 px-4 rounded-[2.5rem] mb-20 shadow-xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <Counter target={200} title="Students Trained" suffix="+" icon={<Users className="text-pink-500" />} />
            <Counter target={100} title="Awards Won" suffix="+" icon={<Award className="text-yellow-500" />} />
            <Counter target={50} title="Workshops Conducted" suffix="+" icon={<Palette className="text-purple-500" />} />
            <Counter target={50} title="Exhibitions Organized" suffix="+" icon={<LayoutDashboard className="text-blue-500" />} />
          </div>
        </section>

        {/* 2. ACADEMIC ACHIEVEMENTS & PRESS (Point 9) */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <Newspaper className="text-purple-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Media Coverage & Recognition</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PressCard 
              source="The Daily Art News" date="Oct 2025"
              title="Rainbow Palette Wins Best Art Academy Award 2025"
              desc="Recognized for outstanding contribution to fine arts education and modern portfolio development."
            />
            <PressCard 
              source="National Creator Magazine" date="Aug 2025"
              title="Student Kavya Desai's Artwork Fetches Record Price"
              desc="A proud moment as our diploma student's abstract painting was sold at the National Art Auction."
            />
            <PressCard 
              source="Education Times" date="Jan 2026"
              title="Dr. Meera Rajput Honored by State Government"
              desc="Academy director receives the 'Kala Ratna' award for empowering youth through art."
            />
          </div>
        </div>

        {/* 2.5. STUDENT COMPETITION WINNERS (Client Point 9) */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="text-yellow-500" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Competition Winners</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <WinnerCard 
              name="Kavya Desai"
              award="1st Prize, National Art Competition 2026"
              work="Abstract Thoughts (Acrylic)"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"
            />
            <WinnerCard 
              name="Aarav Sharma"
              award="Gold Medalist, State Portrait Exhibition 2025"
              work="Old Man Study (Charcoal)"
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"
            />
            <WinnerCard 
              name="Vivaan (Age 8)"
              award="Best Child Artist, Krayon Fest 2026"
              work="Under the Sea (Crayons)"
              image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400"
            />
          </div>
        </div>

        {/* 3. EXHIBITIONS & EVENTS (Point 8) */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <ImageIcon className="text-pink-500" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Exhibitions & Venues</h2>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-150 overflow-hidden">
            {/* Featured Event Hero */}
            <div className="relative h-80 sm:h-96 w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1000&auto=format&fit=crop" alt="Art Exhibition" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="text-white">
                  <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Latest Event</span>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2">"Canvas of Dreams" Annual Show</h3>
                  <p className="flex items-center gap-2 text-gray-300"><MapPin size={16}/> National Art Gallery, Bengaluru</p>
                </div>
                
                {/* Certificate Verification Trigger */}
                <div className="flex flex-col gap-2">
                  <Link 
                    href="/verify/RB-PAR-2024"
                    className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 text-white flex items-center gap-3 hover:bg-white/30 transition text-sm font-semibold"
                  >
                    <Award className="text-yellow-400" />
                    <div>
                      <p className="text-xs text-gray-300">Show Certificate</p>
                      <p className="font-bold">Verify Participation</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Photo & Video Gallery */}
            <div className="p-8">
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Event Highlights (Click to Watch Video)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <GalleryImg src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=400&auto=format&fit=crop" />
                <GalleryImg src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=400&auto=format&fit=crop" />
                
                {/* Clickable video cards */}
                <div 
                  className="rounded-xl overflow-hidden h-32 sm:h-48 cursor-pointer relative group border border-gray-200"
                  onClick={() => setActiveVideo("https://www.w3schools.com/html/mov_bbb.mp4")}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop" alt="Exhibition video cover" className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/55 transition">
                    <Play size={24} className="text-white" fill="currentColor" />
                  </div>
                </div>

                <div 
                  className="rounded-xl overflow-hidden h-32 sm:h-48 cursor-pointer relative group border border-gray-200"
                  onClick={() => setActiveVideo("https://www.w3schools.com/html/movie.mp4")}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=400&auto=format&fit=crop" alt="Exhibition video cover" className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/55 transition">
                    <Play size={24} className="text-white" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-55 flex items-center justify-center px-4 bg-gray-900/80 backdrop-blur-sm">
              <div className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full relative shadow-2xl">
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

        {/* CTA */}
        <div className="mt-20 text-center bg-purple-900 rounded-[2.5rem] p-10 sm:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Be part of our next exhibition!</h2>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto relative z-10">Enroll in our diploma or workshop programs to get a chance to showcase your artwork to the world.</p>
          <Link href="/courses" className="inline-block bg-white text-purple-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition relative z-10">
            Explore Courses
          </Link>
        </div>

      </div>
    </div>
  );
}

// ---------------- Helper Components ----------------
function PressCard({ source, date, title, desc }: { source: string, date: string, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
        <span className="text-purple-600">{source}</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 flex text-yellow-400 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
    </motion.div>
  );
}

function WinnerCard({ name, award, work, image }: { name: string, award: string, work: string, image: string }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
      <div className="h-44 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        <span className="absolute top-3 right-3 bg-yellow-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow">
          <Star size={10} fill="currentColor" /> Winner
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-extrabold text-gray-900 text-base">{name}</h4>
        <p className="text-xs font-semibold text-yellow-600 mt-1">{award}</p>
        <p className="text-xs text-gray-500 mt-2 font-mono">Art: {work}</p>
      </div>
    </div>
  );
}

function GalleryImg({ src }: { src: string }) {
  return (
    <div className="rounded-xl overflow-hidden h-32 sm:h-48 cursor-pointer group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
  );
}

// Live Animated Counter
function Counter({ target, title, suffix, icon }: { target: number, title: string, suffix: string, icon: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
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
      <div className="mb-4 bg-gray-800 p-4 rounded-full">{icon}</div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 font-mono">
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-semibold tracking-wide uppercase text-xs">{title}</div>
    </motion.div>
  );
}
