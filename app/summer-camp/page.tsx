"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, UserCircle2, Award, CheckCircle2, MessageCircle, Heart, Star, Sparkles, X, Play } from "lucide-react";
import Link from "next/link";

export default function SummerCampPage() {
  const [formData, setFormData] = useState({ parentName: "", childName: "", age: "", phone: "", email: "", campType: "Safari" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsRegistered(true);
    }, 2000);
  };

  const scheduleDays = [
    { day: "Day 1-2", topic: "Intro to Forms & Shapes", detail: "Learning foundational volumes, perspective sketching, and lines using graphite and charcoal." },
    { day: "Day 3-5", topic: "Floral Watercolor & Landscapes", detail: "Exploring water control, color blending, gradients, and painting flowers and hills." },
    { day: "Day 6-8", topic: "Clay Sculpting & Pottery", detail: "Working with natural clay to mold animals, pots, and tiles. Excellent for fine motor skills!" },
    { day: "Day 9-11", topic: "Dyeing & Craft Magic", detail: "Fascinating tie-dye workshop on fabric, paper folding origami, and multi-media collage." },
    { day: "Day 12-14", topic: "Acrylic Canvas & Framing", detail: "Painting a final 12x12 canvas. Preparing artworks for the annual Summer Art Exhibition." },
    { day: "Day 15", topic: "Grand Exhibition & Awards", detail: "Parents are invited to view the student gallery. QR Verified certificates are awarded!" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 via-white to-orange-50/40 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900 transition">
            &larr; Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 flex justify-center text-amber-500 animate-bounce">
            <Sparkles size={32} />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Rainbow Summer <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">Art Camp 2026</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Spark your child's creativity this summer! A 15-day immersive program combining painting, clay molding, crafts, and interactive art tours.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-orange-100 rounded-2xl text-orange-600"><CalendarDays size={24}/></div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Camp Duration</p>
              <p className="font-extrabold text-gray-800 text-lg">15 Days (15 Apr - 30 Apr)</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-pink-100 rounded-2xl text-pink-600"><UserCircle2 size={24}/></div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Age Eligibility</p>
              <p className="font-extrabold text-gray-800 text-lg">5-10 Yrs & 11-15 Yrs</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-2xl text-purple-600"><Award size={24}/></div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certification</p>
              <p className="font-extrabold text-gray-800 text-lg">QR-Verified Certificate</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          {/* Left Column: Camp Details & Activities */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Camp Highlights & Activities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Clay Modeling & Sculpting",
                  "Floral Watercolors",
                  "Canvas Acrylic Painting",
                  "Origami & Papercrafts",
                  "Fabric Tie-Dye Workshop",
                  "Air-conditioned Studio",
                  "All Art Materials Provided",
                  "Grand Exhibition Entry"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span className="font-semibold text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Schedule Breakdown */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Schedule</h3>
              <div className="space-y-4">
                {scheduleDays.map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-orange-100 text-orange-700 text-xs font-black px-2.5 py-1 rounded-full uppercase">{item.day}</span>
                      <span className="text-sm font-bold text-gray-800">{item.topic}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Registration Card */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-amber-100 p-8 sm:p-10 sticky top-24">
            {!isRegistered ? (
              <>
                <h2 className="text-3xl font-black text-gray-900 mb-2">Register for Camp</h2>
                <p className="text-gray-500 mb-6">Register your child today to reserve a seat. Seats are filling fast!</p>

                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-6 text-sm text-orange-800">
                  <p className="font-bold flex items-center gap-1.5"><Sparkles size={16}/> Package Deal: ₹4,500 (All material included)</p>
                  <p className="text-xs text-orange-700 mt-1">Batch Timings: 9:00 AM - 12:00 PM Daily (Monday to Saturday)</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Parent's Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Shalini Sharma" 
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Child's Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Aarav" 
                        value={formData.childName}
                        onChange={(e) => setFormData({...formData, childName: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Child's Age</label>
                      <input 
                        required 
                        type="number" 
                        placeholder="e.g. 8" 
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Contact Phone</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+91 98..." 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="shalini@gmail.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Choose Group Batch</label>
                    <select 
                      value={formData.campType}
                      onChange={(e) => setFormData({...formData, campType: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                    >
                      <option value="Safari">Kids Art Safari (Age 5 - 10)</option>
                      <option value="Sculpting">Teen Clay & Sculpting (Age 11 - 15)</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-4 rounded-xl hover:from-orange-600 hover:to-pink-600 hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Reserving Seat..." : "Register & Pay Fees"}
                  </button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
                  Secure checkout simulation. WhatsApp support available.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you, {formData.parentName}. We have reserved a seat for {formData.childName} in the Summer Camp! A confirmation receipt has been sent to {formData.email}.
                </p>
                <div className="p-4 bg-gray-50 rounded-xl mb-8 border border-gray-100 text-left text-sm text-gray-600 space-y-1">
                  <p><strong>Student:</strong> {formData.childName} (Age {formData.age})</p>
                  <p><strong>Camp Batch:</strong> {formData.campType === "Safari" ? "Kids Art Safari" : "Teen Clay & Sculpting"}</p>
                  <p><strong>Timing:</strong> 9:00 AM - 12:00 PM Daily</p>
                  <p><strong>Status:</strong> Confirmed & Paid</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setIsRegistered(false)} className="flex-1 bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-bold transition">
                    Register Another
                  </button>
                  <a 
                    href={`https://wa.me/919876543210?text=Hi, I just registered ${formData.childName} for the Summer Camp.`}
                    target="_blank"
                    className="flex-grow flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-600 transition"
                  >
                    <MessageCircle size={18} /> WhatsApp Inquiry
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Media Gallery (Point 15 - Previous camp photos and videos) */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Previous Camp Memories</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">Take a peek at the smiles and beautiful creations from our past camps.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhotoCard src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=400" title="Kids painting" />
            <PhotoCard src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400" title="Sketching basics" />
            
            {/* Video Placeholder Cards with Play overlay */}
            <div 
              className="relative h-64 rounded-3xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100"
              onClick={() => setActiveVideo("https://www.w3schools.com/html/mov_bbb.mp4")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=400" alt="Video cover" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/45 transition">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-orange-600 shadow-md group-hover:scale-110 transition">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-extrabold text-sm flex items-center gap-1"><Sparkles size={14}/> Clay Modeling Reel</p>
                <p className="text-gray-300 text-xs">Video Tour • 1:20 min</p>
              </div>
            </div>

            <div 
              className="relative h-64 rounded-3xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100"
              onClick={() => setActiveVideo("https://www.w3schools.com/html/movie.mp4")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=400" alt="Video cover" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/45 transition">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-orange-600 shadow-md group-hover:scale-110 transition">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-extrabold text-sm flex items-center gap-1"><Sparkles size={14}/> Painting Highlights</p>
                <p className="text-gray-300 text-xs">Video Tour • 0:45 min</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Testimonials (Point 15) */}
        <section className="bg-white rounded-[3rem] p-12 border border-amber-100 shadow-sm mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">What Parents Say</h2>
          <p className="text-gray-500 text-center mb-12">Hear directly from parents who sent their children to our previous editions.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              parent="Sunita Deshmukh" 
              child="Aarush (Age 7)"
              review="My son Aarush used to sit with screens all day. Rainbow Palette Summer Camp got him obsessed with water colors and sculpting. He paints every weekend now!"
            />
            <TestimonialCard 
              parent="Rajesh Nair" 
              child="Ananya (Age 12)"
              review="Loved the exhibition organized on the last day. The QR certified certificate is a great addition, and she built some beautiful acrylic canvas projects!"
            />
            <TestimonialCard 
              parent="Pooja Sen" 
              child="Karan (Age 9)"
              review="Very organized, professional tutors, and premium materials provided. He loved the tie-dye session particularly. Highly recommend sending your kids here."
            />
          </div>
        </section>

        {/* Dynamic Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/80 backdrop-blur-sm">
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

      </div>
    </div>
  );
}

// Subcomponents
function PhotoCard({ src, title }: { src: string, title: string }) {
  return (
    <div className="h-64 rounded-3xl overflow-hidden shadow-sm group border border-gray-100 relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
        <p className="text-white font-extrabold text-lg flex items-center gap-1"><Heart size={16} fill="currentColor" className="text-pink-500" /> {title}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ parent, child, review }: { parent: string, child: string, review: string }) {
  return (
    <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50 flex flex-col justify-between">
      <div>
        <div className="flex gap-0.5 text-yellow-400 mb-4">
          <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
        </div>
        <p className="text-gray-600 italic text-sm leading-relaxed mb-6">"{review}"</p>
      </div>
      <div className="border-t border-amber-100 pt-4">
        <p className="font-bold text-gray-800 text-sm">{parent}</p>
        <p className="text-xs text-gray-500 font-medium">Parent of {child}</p>
      </div>
    </div>
  );
}
