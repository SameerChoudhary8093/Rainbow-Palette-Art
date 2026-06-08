"use client";

import { motion } from "framer-motion";
import { Clock, CalendarDays, IndianRupee, UserCircle, Award, CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { coursesData } from "@/data/courses"; // Jo data file abhi banayi

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-600 transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Our <span className="text-purple-600">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            From regular hobby classes to professional diplomas, find the perfect course to ignite your creativity.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }} // Ek-ek karke card aayenge
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              {/* Decorative background shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>

              {/* Category Badge */}
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 mb-6 inline-block">
                {course.category}
              </span>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">{course.title}</h2>

              {/* Course Details List */}
              <div className="space-y-4 mb-8">
                <DetailRow icon={<Clock size={18}/>} text={`Duration: ${course.duration}`} />
                <DetailRow icon={<CalendarDays size={18}/>} text={`${course.days} (${course.batchTiming})`} />
                <DetailRow icon={<IndianRupee size={18}/>} text={`Fees: ${course.fees}`} />
                <DetailRow icon={<UserCircle size={18}/>} text={`Eligibility: ${course.ageEligibility}`} />
                <DetailRow icon={<Award size={18}/>} text={course.certificateInfo} className="text-green-700 bg-green-50 p-2 rounded-lg" />
              </div>

              {/* Curriculum section */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Curriculum Includes:</h3>
                <ul className="space-y-2">
                  {course.curriculum.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-purple-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons (Client points 3 & 4) */}
              <div className="flex flex-col gap-3 mt-auto">
                <Link 
                  href={`/apply?course=${course.id}`}
                  className="w-full text-center bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                >
                  Enroll Now
                </Link>
                
                {/* Specific WhatsApp Inquiry Button */}
                <a 
                  href={`https://wa.me/919876543210?text=Hi, I want to know more about the ${course.title} course.`}
                  target="_blank"
                  className="w-full text-center flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 py-3 rounded-xl font-medium hover:bg-green-50 transition"
                >
                  <MessageCircle size={18} /> Ask on WhatsApp
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Chhota helper component design clean rakhne ke liye
function DetailRow({ icon, text, className = "text-gray-600" }: { icon: React.ReactNode, text: string, className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-gray-400">{icon}</span>
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
}
