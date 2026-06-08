"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Newspaper, Image as ImageIcon, MapPin, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AchievementsPage() {
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
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Awards & <span className="text-yellow-500">Exhibitions</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the artistic milestones, media recognition, and grand exhibitions of our talented students and academy.
          </p>
        </div>

        {/* 1. ACADEMIC ACHIEVEMENTS & PRESS (Point 9) */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <Newspaper className="text-purple-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Media & Recognition</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PressCard 
              source="The Daily Art News" date="Oct 2023"
              title="Rainbow Palette Wins Best Art Academy Award 2023"
              desc="Recognized for outstanding contribution to fine arts education and modern portfolio development."
            />
            <PressCard 
              source="National Creator Magazine" date="Aug 2023"
              title="Student Kavya Desai's Artwork Fetches Record Price"
              desc="A proud moment as our diploma student's abstract painting was sold at the National Art Auction."
            />
            <PressCard 
              source="Education Times" date="Jan 2024"
              title="Dr. Meera Rajput Honored by State Government"
              desc="Academy director receives the 'Kala Ratna' award for empowering youth through art."
            />
          </div>
        </div>

        {/* 2. EXHIBITIONS & EVENTS (Point 8) */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <ImageIcon className="text-pink-500" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Annual Exhibitions</h2>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
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
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 text-white flex items-center gap-3">
                  <Award className="text-yellow-400" />
                  <div>
                    <p className="text-xs text-gray-300">Participants Received</p>
                    <p className="font-bold">Digital Certificates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Photo Gallery */}
            <div className="p-8">
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Event Highlights</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <GalleryImg src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=400&auto=format&fit=crop" />
                <GalleryImg src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=400&auto=format&fit=crop" />
                <GalleryImg src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop" />
                <GalleryImg src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=400&auto=format&fit=crop" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-purple-900 rounded-[2rem] p-10 sm:p-16 text-white relative overflow-hidden">
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

// Helper Components
function PressCard({ source, date, title, desc }: { source: string, date: string, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
        <span className="text-purple-600">{source}</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
      <div className="mt-4 flex text-yellow-400 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
    </motion.div>
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
