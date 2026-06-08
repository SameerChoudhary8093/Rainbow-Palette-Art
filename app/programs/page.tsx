"use client";

import { motion } from "framer-motion";
import { GraduationCap, Map, Briefcase, Compass, ChevronRight, CheckCircle2, Image as ImageIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Dummy Data for Intern Showcase (Point 20)
const internsData = [
  { id: 1, name: "Siddharth Jain", college: "NID Ahmedabad", role: "Exhibition Coordinator", duration: "3 Months", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Aisha Khan", college: "JJ School of Art", role: "Teaching Assistant", duration: "6 Months", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Rohan Das", college: "NIFT Delhi", role: "Portfolio Development Intern", duration: "3 Months", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-600 transition">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* 1. PORTFOLIO PREPARATION (Point 17) */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-sm">
            <GraduationCap size={18} /> For Future Professionals
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Design College <br/><span className="text-purple-600">Portfolio Prep</span>
          </h2>
          <p className="text-lg text-gray-600">
            Targeting top design and art colleges? Our rigorous portfolio development program is tailored for NID, NIFT, UID, UCEED, NATA, and International Art Schools.
          </p>
          <ul className="space-y-3">
            {["1-on-1 Mentorship", "Creative Thinking Modules", "Mock Interviews & Studio Tests", "Digital & Physical Portfolio Creation"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-purple-500" size={20} /> {item}
              </li>
            ))}
          </ul>
          <Link href="/apply" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg mt-4">
            Enroll for Portfolio Batch <ChevronRight size={18} />
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="lg:w-1/2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop" alt="Portfolio Prep" className="rounded-[2rem] shadow-2xl" />
        </motion.div>
      </section>

      {/* 2. OUTDOOR PAINTING & ART TOURS (Point 14 & 18) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-bold text-sm mb-4">
              <Compass size={18} /> Beyond the Studio
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Outdoor Programs & <span className="text-amber-600">Art Tours</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nature and history are the best teachers. We organize regular trips to parks, heritage monuments, and museums for live sketching sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourCard 
              icon={<Map />} title="Heritage Sketching" 
              desc="Live sketching at historical monuments, temples, and forts to study ancient architecture." 
              image="https://images.unsplash.com/photo-1588612502693-0182650186fc?q=80&w=800&auto=format&fit=crop"
            />
            <TourCard 
              icon={<ImageIcon />} title="Museum Visits" 
              desc="Guided educational visits to national art galleries and artist studios." 
              image="https://images.unsplash.com/photo-1578301978693-85fa9c03fa75?q=80&w=800&auto=format&fit=crop"
            />
            <TourCard 
              icon={<Compass />} title="Lakeside Watercolors" 
              desc="Plein air (outdoor) painting sessions at lakes and nature parks." 
              image="https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* 3. INTERNSHIP PROGRAM (Point 16 & 20) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white border border-gray-800 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Internship Details */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-bold text-sm mb-6 border border-blue-500/30">
                <Briefcase size={18} /> BFA / MFA Graduates
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Professional <span className="text-blue-400">Internships</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Step into the real art world. Our internship program provides hands-on experience in academy operations, exhibition coordination, and teaching assistance.
              </p>
              
              <div className="space-y-4 mb-10">
                <h4 className="text-lg font-bold text-white border-b border-gray-700 pb-2">Internship Benefits:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Teaching Experience", "Event Management", "Exhibition Coordination", "Digital QR Certificate", "Recommendation Letter"].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-blue-400" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition">
                Apply for Internship <ChevronRight size={18} />
              </Link>
            </div>

            {/* Right: Intern Showcase Grid (Point 20) */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                Intern Showcase
              </h3>
              <div className="flex flex-col gap-4">
                {internsData.map((intern) => (
                  <div key={intern.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 flex items-center gap-4 hover:bg-gray-800 transition">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={intern.image} alt={intern.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-white text-lg">{intern.name}</h4>
                      <p className="text-blue-300 text-sm font-medium">{intern.role} • {intern.duration}</p>
                      <p className="text-gray-400 text-xs">{intern.college}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper Component for Outdoor Tours
function TourCard({ icon, title, desc, image }: { icon: React.ReactNode, title: string, desc: string, image: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-md border border-amber-100 group"
    >
      <div className="h-48 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full text-amber-600 shadow-sm">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}
