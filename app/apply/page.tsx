"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, BookOpen, UploadCloud, CreditCard, ArrowRight, ArrowLeft, CheckCircle2, Search, ClipboardList, ShieldCheck, Clock, FileText } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, name: "Student Details", icon: User },
  { id: 2, name: "Course Selection", icon: BookOpen },
  { id: 3, name: "Documents", icon: UploadCloud },
  { id: 4, name: "Payment & Finish", icon: CreditCard },
];

// Mock Applications Database for Status Tracking (Point 11)
const applicationsDB: Record<string, any> = {
  "APP-2026-9912": {
    studentName: "Aarav Sharma",
    course: "Fine Arts Professional Diploma (1 Year)",
    batch: "Morning (10:00 AM - 1:00 PM)",
    submissionDate: "10 May 2026",
    status: "Admitted", // "Submitted" | "Verified" | "Fees Pending" | "Admitted"
    documents: "Verified",
    fees: "Paid (₹50,500)",
    remarks: "Welcome! Your batch starts from 1st July 2026. Please collect your physical identity card from the main desk on Day 1."
  },
  "APP-2026-8849": {
    studentName: "Priya Patel",
    course: "Watercolors & Portrait Masterclass (3 Months)",
    batch: "Afternoon (2:00 PM - 5:00 PM)",
    submissionDate: "02 June 2026",
    status: "Verified",
    documents: "Verified",
    fees: "Paid (₹9,500)",
    remarks: "Documents verified. Verification of bank clearance is in progress. The final admission letter will be issued shortly."
  },
  "APP-2026-7731": {
    studentName: "Kavya Desai",
    course: "Advanced Acrylics & Landscapes (6 Months)",
    batch: "Evening (4:00 PM - 6:00 PM)",
    submissionDate: "11 June 2026",
    status: "Fees Pending",
    documents: "Verified",
    fees: "Pending (₹16,000)",
    remarks: "Application and portfolios verified. Please complete your fee payment in the next 48 hours to secure your seat."
  }
};

export default function ApplyPage() {
  const [activeMode, setActiveMode] = useState<'apply' | 'track'>('apply');
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Status Tracking States
  const [trackId, setTrackId] = useState("");
  const [trackResult, setTrackResult] = useState<any>(null);
  const [trackError, setTrackError] = useState("");
  const [trackSearching, setTrackSearching] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", age: "",
    course: "Foundation Art Class (Regular)", batch: "Evening (4:00 PM - 6:00 PM)",
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
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackId.trim()) {
      setTrackError("Please enter an Application ID");
      return;
    }
    setTrackSearching(true);
    setTrackResult(null);
    setTrackError("");

    setTimeout(() => {
      const searchId = trackId.trim().toUpperCase();
      if (applicationsDB[searchId]) {
        setTrackResult(applicationsDB[searchId]);
      } else {
        setTrackError(`Application ID ${searchId} not found in our records.`);
      }
      setTrackSearching(false);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={50} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Your admission application and payment were simulated successfully. Welcome to Rainbow Palette Academy, {formData.firstName || "Student"}! <br/>
            Your temporary application reference code is <strong className="font-mono text-purple-600">APP-2026-7731</strong>. You can use this code to track your status.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                setTrackId("APP-2026-7731");
                setIsSuccess(false);
                setActiveMode("track");
                // Trigger search simulation
                setTrackSearching(true);
                setTimeout(() => {
                  setTrackResult(applicationsDB["APP-2026-7731"]);
                  setTrackSearching(false);
                }, 1000);
              }}
              className="flex-1 bg-white border border-gray-250 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-bold transition text-sm"
            >
              Track Application
            </button>
            <button onClick={() => window.location.href = "/"} className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition text-sm">
              Go to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      {/* Back to Home Link */}
      <div className="max-w-3xl w-full mb-6 mt-12 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-600 transition">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        {/* Toggle Mode Switcher */}
        <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm flex text-xs font-bold">
          <button 
            onClick={() => { setActiveMode('apply'); setTrackResult(null); }}
            className={`px-4 py-2 rounded-full transition-colors ${activeMode === 'apply' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-950'}`}
          >
            Apply Online
          </button>
          <button 
            onClick={() => setActiveMode('track')}
            className={`px-4 py-2 rounded-full transition-colors ${activeMode === 'track' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-950'}`}
          >
            Track Status
          </button>
        </div>
      </div>

      {activeMode === 'apply' ? (
        <>
          {/* Apply Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Academy Enrollment Form</h1>
            <p className="text-gray-500">Submit details, upload ID, and securely register for courses.</p>
          </div>

          <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Progress Bar (Top) */}
            <div className="bg-gray-50 border-b border-gray-100 p-6 flex justify-between items-center relative">
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
                          <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                          <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="John" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                          <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="Doe" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                          <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                          <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="+91..." value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                          <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="18" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Course Selection */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Program</h3>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Course</label>
                        <select 
                          value={formData.course}
                          onChange={(e) => setFormData({...formData, course: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
                        >
                          <option value="Foundation Art Class">Foundation Art Class (Regular - Ongoing)</option>
                          <option value="Kids Creative Art Club">Kids Creative Art Club (Regular - Weekend)</option>
                          <option value="Watercolors Masterclass">Watercolors & Portrait Masterclass (Monthly - 3 Months)</option>
                          <option value="Advanced Acrylics Landscapes">Advanced Acrylics & Landscapes (Monthly - 6 Months)</option>
                          <option value="Professional Diploma">Fine Arts Professional Diploma (Diploma - 1 Year)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Batch Timing</label>
                        <select 
                          value={formData.batch}
                          onChange={(e) => setFormData({...formData, batch: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                          <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
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
                        <p className="font-semibold text-gray-900 mb-1">Upload ID Proof (Aadhar / Passport / School ID)</p>
                        <p className="text-sm text-gray-500">PDF, JPG or PNG (Max 5MB)</p>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:bg-gray-50 transition cursor-pointer group">
                        <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                          <UploadCloud size={30} />
                        </div>
                        <p className="font-semibold text-gray-900 mb-1">Previous Artworks Portfolio (Optional)</p>
                        <p className="text-sm text-gray-500">Recommended for Diploma program curation</p>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Review & Payment */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Review & Complete Payment</h3>
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-4 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-gray-500 font-semibold">Course selected</span>
                          <span className="font-extrabold text-gray-900 max-w-[200px] text-right truncate">{formData.course}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-gray-500 font-semibold">Batch selected</span>
                          <span className="font-extrabold text-gray-900">{formData.batch}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-gray-500 font-semibold">Admission Registration Fee</span>
                          <span className="font-extrabold text-gray-900">₹500</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="font-black text-gray-900 text-base">Total Amount to Pay</span>
                          <span className="font-black text-2xl text-purple-600">
                            {formData.course.includes("Diploma") ? "₹50,500" : formData.course.includes("Acrylics") ? "₹16,500" : formData.course.includes("Portrait") ? "₹10,000" : "₹3,000"}
                          </span>
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
                <button onClick={handleBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-bold px-4 py-2 transition text-sm">
                  <ArrowLeft size={18} /> Back
                </button>
              ) : <div></div>}

              {currentStep < 4 ? (
                <button onClick={handleNext} className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-bold transition shadow-md text-sm">
                  Next Step <ArrowRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit} 
                  disabled={isProcessing}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl font-bold transition shadow-lg w-full sm:w-auto justify-center text-sm"
                >
                  {isProcessing ? "Processing Secure Payment..." : "Pay Fees & Register Admission"}
                </button>
              )}
            </div>

          </div>
        </>
      ) : (
        /* ==================== ADMISSION STATUS TRACKER (Point 11) ==================== */
        <div className="max-w-2xl w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Track Admission Status</h1>
            <p className="text-gray-500">Enter your Application ID reference code to look up live status details.</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-150 mb-8">
            <form onSubmit={handleTrackSearch} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide font-mono">
                  Enter Application ID (RP-APP-XXXX)
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 text-gray-450" size={20} />
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. APP-2026-9912" 
                    value={trackId}
                    onChange={(e) => {
                      setTrackId(e.target.value);
                      setTrackError("");
                      setTrackResult(null);
                    }}
                    className="w-full bg-gray-50 border border-gray-250 rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-purple-500 outline-none text-gray-800 font-mono transition"
                  />
                </div>
                {trackError && <p className="text-red-500 text-xs mt-2 font-semibold font-mono">{trackError}</p>}
              </div>
              <button 
                type="submit" 
                disabled={trackSearching}
                className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                {trackSearching ? "Connecting database..." : <><ClipboardList size={18}/> Look Up Status</>}
              </button>
            </form>
          </div>

          {/* Quick lookup codes for testing */}
          {!trackResult && !trackError && (
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 font-mono">Test Reference Codes:</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(applicationsDB).map((appCode) => (
                  <button
                    key={appCode}
                    onClick={() => { setTrackId(appCode); setTrackError(""); }}
                    className="bg-gray-100 hover:bg-purple-100 border border-gray-200 text-gray-700 hover:text-purple-800 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition"
                  >
                    {appCode} ({applicationsDB[appCode].status})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tracker Results */}
          <AnimatePresence>
            {trackResult && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-[2rem] border border-gray-150 shadow-xl overflow-hidden"
              >
                <div className="bg-purple-900 p-6 text-white flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-bold opacity-70 font-mono">Application Reference</h3>
                    <p className="text-2xl font-black font-mono tracking-wide">{trackId.toUpperCase()}</p>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs font-mono font-bold">
                    Submitted: {trackResult.submissionDate}
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Student & Course Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-gray-100 pb-6">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Applicant Student</p>
                      <p className="font-extrabold text-gray-800 text-base">{trackResult.studentName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Program Enrolled</p>
                      <p className="font-extrabold text-gray-800 text-base">{trackResult.course}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{trackResult.batch}</p>
                    </div>
                  </div>

                  {/* Status Steps Stepper */}
                  <div className="space-y-6">
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide font-mono">Admission Milestones</h4>
                    
                    <div className="relative pl-8 border-l-2 border-gray-200 ml-4 space-y-8">
                      {/* Step 1: Submission */}
                      <div className="relative">
                        <span className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shadow-inner">
                          <CheckCircle2 size={16} />
                        </span>
                        <h5 className="font-bold text-gray-800 text-sm">Application Submitted</h5>
                        <p className="text-xs text-gray-500">Record successfully created on {trackResult.submissionDate}.</p>
                      </div>

                      {/* Step 2: Verification */}
                      <div className="relative">
                        <span className={`absolute -left-12 top-0.5 w-8 h-8 rounded-full flex items-center justify-center text-xs shadow-inner ${
                          trackResult.documents === "Verified" ? "bg-green-500 text-white" : "bg-orange-500 text-white animate-pulse"
                        }`}>
                          {trackResult.documents === "Verified" ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                        </span>
                        <h5 className="font-bold text-gray-800 text-sm">Document Verification</h5>
                        <p className="text-xs text-gray-500">ID proof and portfolio assets matching: {trackResult.documents}.</p>
                      </div>

                      {/* Step 3: Fee Payment */}
                      <div className="relative">
                        <span className={`absolute -left-12 top-0.5 w-8 h-8 rounded-full flex items-center justify-center text-xs shadow-inner ${
                          trackResult.fees.includes("Paid") ? "bg-green-500 text-white" : trackResult.status === "Fees Pending" ? "bg-orange-500 text-white animate-pulse" : "bg-gray-200 text-gray-400"
                        }`}>
                          {trackResult.fees.includes("Paid") ? <CheckCircle2 size={16} /> : <CreditCard size={16} />}
                        </span>
                        <h5 className="font-bold text-gray-800 text-sm">Fee Payment Status</h5>
                        <p className="text-xs text-gray-500">{trackResult.fees}.</p>
                      </div>

                      {/* Step 4: Final Admission */}
                      <div className="relative">
                        <span className={`absolute -left-12 top-0.5 w-8 h-8 rounded-full flex items-center justify-center text-xs shadow-inner ${
                          trackResult.status === "Admitted" ? "bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)]" : "bg-gray-200 text-gray-400"
                        }`}>
                          <ShieldCheck size={16} />
                        </span>
                        <h5 className="font-bold text-gray-800 text-sm">Final Admission Status</h5>
                        <p className="text-xs text-gray-500">
                          Current Status: <strong className="text-purple-700 uppercase">{trackResult.status}</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remarks Box */}
                  <div className="bg-purple-50 border border-purple-100 p-5 rounded-2xl text-purple-950 text-sm">
                    <p className="font-bold flex items-center gap-1.5"><FileText size={16}/> Coordinator Remarks:</p>
                    <p className="text-xs text-purple-800 mt-1 leading-relaxed">{trackResult.remarks}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

    </div>
  );
}
