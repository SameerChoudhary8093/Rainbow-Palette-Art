"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Palette, Users, LayoutDashboard, Quote, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO STORY SECTION */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Nurturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Creativity</span> Since 2010.
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Rainbow Palette is more than just an art academy. It's a sanctuary for dreamers, creators, and visionaries. We started with a small room and a big dream: to make professional art education accessible to everyone.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Today, our infrastructure includes state-of-the-art studios, digital labs, and an open-air painting heritage gallery.
          </p>
          <div className="flex gap-4">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex-1 text-center">
              <Palette size={24} className="mx-auto text-purple-500 mb-2" />
              <h3 className="font-bold text-gray-900">Modern Studios</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex-1 text-center">
              <LayoutDashboard size={24} className="mx-auto text-pink-500 mb-2" />
              <h3 className="font-bold text-gray-900">Digital Labs</h3>
            </div>
          </div>
        </motion.div>
        
        {/* Abstract Image Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=800&auto=format&fit=crop" alt="Art Studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white">
              <Quote size={30} className="text-white/50 mb-2" />
              <p className="text-lg font-medium italic">"Every artist was first an amateur. We give you the canvas to find your masterpiece."</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. LIVE COUNTERS (Client Point 9) */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
          <Counter target={200} title="Students Trained" suffix="+" icon={<Users className="text-pink-500" />} />
          <Counter target={100} title="Awards Won" suffix="+" icon={<Award className="text-yellow-500" />} />
          <Counter target={50} title="Workshops" suffix="+" icon={<Palette className="text-purple-500" />} />
          <Counter target={50} title="Exhibitions" suffix="+" icon={<LayoutDashboard className="text-blue-500" />} />
        </div>
      </section>

      {/* 3. FOUNDER PROFILE (Client Point 2) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-purple-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-purple-100">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto md:w-full md:h-80 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Meet The Founder</span>
            <h2 className="text-4xl font-black text-gray-900">Dr. Meera Rajput</h2>
            <p className="text-xl text-gray-700 font-medium italic">MFA Gold Medalist, Renowned Contemporary Artist</p>
            <p className="text-gray-600 leading-relaxed">
              With over 15 years of experience in the international art scene, Dr. Meera founded Rainbow Palette to bridge the gap between traditional techniques and modern creative expression. Her works have been exhibited in Paris, New York, and Mumbai. She personally mentors students for NID, NIFT, and international college portfolios.
            </p>
            {/* Fake Signature */}
            <div className="text-4xl font-serif text-gray-400 opacity-70 pt-4">Meera Rajput</div>
          </div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES & TESTIMONIALS (Client Point 10 & 12) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Hall of <span className="text-pink-500">Fame</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Our students don't just learn art; they make careers out of it. See where they are now.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessCard 
            name="Rahul Verma" 
            achievement="Admitted to NID Ahmedabad"
            story="The portfolio development program here completely changed my perspective. I cleared my NID entrance on the first attempt!"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
          />
          <SuccessCard 
            name="Kavya Desai" 
            achievement="Won National Art Academy Award"
            story="From a regular hobbyist to a professional exhibition artist, Rainbow Palette gave me the confidence and techniques I needed."
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
          />
          <SuccessCard 
            name="Arjun Singh" 
            achievement="Lead Designer at Creative Studio"
            story="The digital art and fine arts diploma helped me build a solid foundation. The internship program was the cherry on top."
            image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
          />
        </div>

        <div className="mt-16 text-center">
          <Link href="/courses" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">
            Start Your Journey Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}

// ---------------- Helper Components ----------------

// 1. Live Animated Counter Component
function Counter({ target, title, suffix, icon }: { target: number, title: string, suffix: string, icon: React.ReactNode }) {
  const [count, setCount] = useState(0);

  // Jab element screen pe aayega tabhi count start hoga (using framer motion whileInView trigger)
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let current = 0;
        const increment = target / 50; // speed
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(current));
          }
        }, 30);
      }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="mb-4 bg-gray-800 p-4 rounded-full">{icon}</div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 font-mono">
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{title}</div>
    </motion.div>
  );
}

// 2. Success Story Card Component
function SuccessCard({ name, achievement, story, image }: { name: string, achievement: string, story: string, image: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative"
    >
      <div className="flex gap-1 text-yellow-400 mb-6">
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
      </div>
      <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">"{story}"</p>
      
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-xs font-bold text-pink-500 uppercase tracking-wide">{achievement}</p>
        </div>
      </div>
    </motion.div>
  );
}
