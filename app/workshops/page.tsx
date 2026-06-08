"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, User, IndianRupee, MapPin, Users, Ticket } from "lucide-react";
import { eventsData } from "@/data/workshops";
import Link from "next/link";

export default function WorkshopsPage() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');

  const filteredEvents = eventsData.filter(event => event.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Creative <span className="text-pink-500">Workshops & Camps</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Short-term immersive experiences to learn new skills, meet artists, and have fun.
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full border border-gray-200 inline-flex shadow-sm relative">
            <button
              onClick={() => setActiveTab('Upcoming')}
              className={`relative z-10 px-8 py-2.5 text-sm font-bold rounded-full transition-colors ${activeTab === 'Upcoming' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('Past')}
              className={`relative z-10 px-8 py-2.5 text-sm font-bold rounded-full transition-colors ${activeTab === 'Past' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Past Events
            </button>
            
            {/* Animated Tab Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-1/2 bg-gray-900 rounded-full transition-transform duration-300 ease-out z-0 ${activeTab === 'Upcoming' ? 'translate-x-0' : 'translate-x-full'}`}
              style={{ width: 'calc(50% - 3px)' }}
            ></div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => {
              
              // Seat calculation logic
              const seatsLeft = event.totalSeats - event.bookedSeats;
              const fillPercentage = (event.bookedSeats / event.totalSeats) * 100;
              const isAlmostFull = seatsLeft > 0 && seatsLeft <= 5;
              const isSoldOut = seatsLeft === 0;

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col sm:flex-row group"
                >
                  {/* Poster Image Section */}
                  <div className="relative sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm">
                      {event.type}
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h2>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-600 gap-2">
                          <CalendarDays size={16} className="text-pink-500" /> {event.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 gap-2">
                          <Clock size={16} className="text-pink-500" /> {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 gap-2">
                          <User size={16} className="text-pink-500" /> Instructor: <span className="font-medium text-gray-900">{event.instructor}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer of Card: Price & CTA */}
                    <div>
                      {activeTab === 'Upcoming' ? (
                        <>
                          {/* Progress Bar for Seats */}
                          <div className="mb-4">
                            <div className="flex justify-between text-xs font-bold mb-1">
                              <span className="text-gray-500 flex items-center gap-1"><Users size={14}/> Seats Booked</span>
                              <span className={isAlmostFull ? "text-red-500 animate-pulse" : isSoldOut ? "text-red-600" : "text-green-600"}>
                                {isSoldOut ? "SOLD OUT" : isAlmostFull ? `Only ${seatsLeft} left!` : `${event.bookedSeats}/${event.totalSeats}`}
                              </span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ${isSoldOut ? 'bg-red-500' : isAlmostFull ? 'bg-orange-500' : 'bg-green-500'}`}
                                style={{ width: `${fillPercentage}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="text-xl font-black text-gray-900 flex items-center">
                              <IndianRupee size={20} /> {event.fees}
                            </div>
                            <Link 
                              href={isSoldOut ? "#" : `/apply?workshop=${event.id}`}
                              className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition ${
                                isSoldOut 
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                  : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                              }`}
                            >
                              <Ticket size={18} />
                              {isSoldOut ? "Full" : "Book Seat"}
                            </Link>
                          </div>
                        </>
                      ) : (
                        /* Past Events View */
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                          <p className="text-sm font-medium text-gray-600 mb-2">This event has successfully concluded.</p>
                          <Link href="/gallery" className="text-purple-600 text-sm font-bold hover:underline">
                            View Event Gallery & Artworks &rarr;
                          </Link>
                        </div>
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
