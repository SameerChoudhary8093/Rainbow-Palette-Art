"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <Image 
              src="/Logo.jpg" 
              alt="Rainbow Palette Logo" 
              width={44} 
              height={44} 
              className="w-11 h-11 rounded-full object-cover border-2 border-purple-100 group-hover:scale-105 transition-transform"
              priority
            />
            <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:opacity-90 transition-opacity">
              Rainbow Palette
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            <Link href="/about" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">About</Link>
            <Link href="/courses" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">Courses</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">Gallery</Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">Marketplace</Link>
            <Link href="/achievements" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">Achievements</Link>
            <Link href="/workshops" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">Workshops</Link>
            <Link href="/programs" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">Special Programs</Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600 font-medium transition text-sm xl:text-base">Contact</Link>
            
            {/* CTA Button */}
            <Link 
              href="/apply" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 text-sm xl:text-base"
            >
              Enroll Now
            </Link>
          </div>

          {/* Hamburger Icon for Mobile & Tablets (lg:hidden) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg overflow-hidden z-40"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">About</Link>
              <Link href="/courses" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">Courses</Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">Gallery</Link>
              <Link href="/marketplace" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">Marketplace</Link>
              <Link href="/achievements" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">Achievements</Link>
              <Link href="/workshops" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">Workshops</Link>
              <Link href="/programs" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">Special Programs</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition">Contact</Link>
              
              <Link 
                href="/apply" 
                onClick={() => setIsOpen(false)}
                className="bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-semibold text-center mt-4 transition shadow-md"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
