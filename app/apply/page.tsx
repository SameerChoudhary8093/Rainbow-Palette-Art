"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, BookOpen, UploadCloud, CreditCard, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Form ke 4 steps define kiye hain
const steps = [
  { id: 1, name: "Student Details", icon: User },
  { id: 2, name: "Course Selection", icon: BookOpen },
  { id: 3, name: "Documents", icon: UploadCloud },
  { id: 4, name: "Payment & Finish", icon: CreditCard },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form ka dummy data state
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", age: "",
    course: "", batch: "",
  });

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Fake payment processing simulation
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  // Agar success ho gaya toh final screen dikhegi
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={50} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Your payment was successful. Welcome to Rainbow Palette Academy, {formData.firstName || "Student"}! You can now track your admission status on your dashboard.
          </p>
          <button onClick={() => window.location.href = "/"} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition">
            Go to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      {/* Back to Home Link */}
      <div className="max-w-3xl w-full mb-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-600 transition">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-10 mt-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Join the Academy</h1>
        <p className="text-gray-500">Complete your admission in 4 easy steps.</p>
      </div>

      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Progress Bar (Top) */}
        <div className="bg-gray-50 border-b border-gray-100 p-6 flex justify-between items-center relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-10 h-1 bg-purple-500 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 3) * 100}%`, maxWidth: 'calc(100% - 5rem)' }}
          ></div>

          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-colors duration-300 ${isActive ? "bg-purple-600 border-purple-200 text-white" : isCompleted ? "bg-green-500 border-green-200 text-white" : "bg-white border-gray-200 text-gray-400"}`}>
                  {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                </div>
                <span className={`text-xs font-bold mt-2 absolute -bottom-6 whitespace-nowrap ${isActive ? "text-purple-600" : "text-gray-400"}`}>
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Content */}
        <div className="p-8 sm:p-12 mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* STEP 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="John" onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="18" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Course Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Program</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Choose Course</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none">
                      <option>Select a course...</option>
                      <option>Foundation Art Class (Regular)</option>
                      <option>Advanced Portrait & Acrylics (Monthly)</option>
                      <option>Fine Arts Professional Diploma (1 Year)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Batch Timing</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none">
                      <option>Morning (10:00 AM - 1:00 PM)</option>
                      <option>Afternoon (2:00 PM - 5:00 PM)</option>
                      <option>Evening (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: Document Upload */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:bg-gray-50 transition cursor-pointer group">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                      <UploadCloud size={30} />
                    </div>
                    <p className="font-medium text-gray-900 mb-1">Upload ID Proof (Aadhar/Passport)</p>
                    <p className="text-sm text-gray-500">PDF, JPG or PNG (Max 5MB)</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:bg-gray-50 transition cursor-pointer group">
                    <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                      <UploadCloud size={30} />
                    </div>
                    <p className="font-medium text-gray-900 mb-1">Previous Artwork Portfolio (Optional)</p>
                    <p className="text-sm text-gray-500">Only for Diploma courses</p>
                  </div>
                </div>
              )}

              {/* STEP 4: Review & Payment */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Review & Pay Fees</h3>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="text-gray-500">Course Fee</span>
                      <span className="font-bold text-gray-900">₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="text-gray-500">Registration Charge</span>
                      <span className="font-bold text-gray-900">₹500</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-lg text-gray-900">Total Amount</span>
                      <span className="font-black text-2xl text-purple-600">₹15,500</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons (Bottom) */}
        <div className="bg-gray-50 border-t border-gray-100 p-6 flex justify-between items-center">
          {currentStep > 1 ? (
            <button onClick={handleBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-4 py-2 transition">
              <ArrowLeft size={18} /> Back
            </button>
          ) : <div></div>} {/* Empty div to keep 'Next' button on the right */}

          {currentStep < 4 ? (
            <button onClick={handleNext} className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition shadow-md">
              Next Step <ArrowRight size={18} />
            </button>
          ) : (
            <button 
              onClick={handleSubmit} 
              disabled={isProcessing}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-lg w-full sm:w-auto justify-center"
            >
              {isProcessing ? "Processing Payment..." : "Pay Fees & Submit"}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
