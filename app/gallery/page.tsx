"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, X, ArrowLeft } from "lucide-react";
import { galleryData, galleryCategories } from "@/data/gallery";
import Link from "next/link";

export default function GalleryPage() {
  // States for filters
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [studentFilter, setStudentFilter] = useState("");

  // Filter Logic
  const filteredArtworks = galleryData.filter((art) => {
    const matchCategory = activeCategory === "All" || art.category === activeCategory;
    const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStudent = art.studentName.toLowerCase().includes(studentFilter.toLowerCase());
    
    return matchCategory && matchSearch && matchStudent;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-600 transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Student <span className="text-pink-500">Artwork Gallery</span>
          </h1>
          <p className="text-xl text-gray-600">Discover the masterpiece creations by our talented students.</p>
        </div>

        {/* Filters Section (Client Point 5) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10 space-y-6">
          
          {/* Search & Student Filter Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search artwork title..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div className="relative flex-1">
              <User className="absolute left-4 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Filter by Student Name..." 
                value={studentFilter}
                onChange={(e) => setStudentFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            
            {/* Clear Filters Button (Dikhata hai jab koi filter active ho) */}
            {(searchQuery || studentFilter || activeCategory !== "All") && (
              <button 
                onClick={() => { setSearchQuery(""); setStudentFilter(""); setActiveCategory("All"); }}
                className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors whitespace-nowrap"
              >
                <X size={18} /> Clear
              </button>
            )}
          </div>

          {/* Categories Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? "bg-gray-900 text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-style Masonry Grid */}
        {filteredArtworks.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            <AnimatePresence>
              {filteredArtworks.map((art) => (
                <motion.div
                  key={art.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">{art.category}</span>
                    <h3 className="text-white text-lg font-bold leading-tight">{art.title}</h3>
                    <p className="text-gray-300 text-sm mt-1 flex items-center gap-1">
                      <User size={14} /> {art.studentName}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No artworks found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
          </div>
        )}

      </div>
    </div>
  );
}
