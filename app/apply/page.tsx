"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, BookOpen, UploadCloud, CreditCard, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase"; // Supabase import kiya!
import Link from "next/link";

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

  // Form ka Asli Data State
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", age: "",
    course: "", batch: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleNext = () => { if (currentStep < 4) setCurrentStep(currentStep + 1); };
  const handleBack = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  // ASLI DATABASE SUBMISSION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Supabase me data bhejna
      const { error } = await supabase
        .from('admission_applications')
        .insert([
          { 
            first_name: formData.firstName, 
            last_name: formData.lastName, 
            email: formData.email, 
            age: parseInt(formData.age) || 18,
            course: formData.course,
            batch_timing: formData.batch,
            payment_status: 'Pending' // Jab razorpay lagega tab isko 'Paid' karenge
          }
        ]);

      if (error) throw error;

      // Success
      setIsSuccess(true);
      
    } catch (error: any) {
      console.error("Error submitting application:", error);
      if (error && typeof error === 'object') {
        console.error("Error Message:", error.message);
        console.error("Error Details:", error.details);
        console.error("Error Hint:", error.hint);
        console.error("Error Code:", error.code);
        alert(`Something went wrong! ${error.message || "Please try again."}`);
      } else {
        alert("Something went wrong! Please try again.");
      }
    } finally {
      setIsProcessing(false);
    }
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
            Welcome to Rainbow Palette Academy, <strong>{formData.firstName}</strong>! Your details have been safely stored in our database.
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
      <div className="max-w-3xl w-full mb-4 mt-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-purple-650 transition">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Join the Academy</h1>
        <p className="text-gray-500">Complete your admission in 4 easy steps.</p>
      </div>

      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Progress Bar */}
        <div className="bg-gray-50 border-b border-gray-100 p-6 flex justify-between items-center relative">
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/2 left-10 h-1 bg-purple-500 -translate-y-1/2 z-0 transition-all duration-500" style={{ width: `${((currentStep - 1) / 3) * 100}%`, maxWidth: 'calc(100% - 5rem)' }}></div>

          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-colors duration-300 ${isActive ? "bg-purple-600 border-purple-200 text-white" : isCompleted ? "bg-green-500 border-green-200 text-white" : "bg-white border-gray-200 text-gray-400"}`}>
                  {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Content */}
        <div className="p-8 sm:p-12 mt-4">
          <AnimatePresence mode="wait">
            <motion.div key={currentStep} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.3 }}>
              
              {/* STEP 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="18" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Program</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Choose Course</label>
                    <select value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none">
                      <option value="">Select a course...</option>
                      <option value="Foundation Art Class">Foundation Art Class (Regular)</option>
                      <option value="Advanced Portrait">Advanced Portrait & Acrylics (Monthly)</option>
                      <option value="Fine Arts Diploma">Fine Arts Professional Diploma (1 Year)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Batch Timing</label>
                    <select value={formData.batch} onChange={(e) => setFormData({...formData, batch: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none">
                      <option value="">Select timing...</option>
                      <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening">Evening (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3 (Interactive Document Upload) */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h3>
                  <div 
                    onClick={() => document.getElementById("file-upload")?.click()}
                    className="border-2 border-dashed border-purple-300 hover:border-purple-500 rounded-2xl p-8 text-center bg-purple-50/30 hover:bg-purple-50/70 transition cursor-pointer"
                  >
                    <input 
                      id="file-upload" 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSelectedFile(e.target.files[0]);
                        }
                      }}
                    />
                    <UploadCloud size={40} className="mx-auto text-purple-500 mb-3 animate-pulse" />
                    {selectedFile ? (
                      <div className="space-y-2">
                        <p className="font-semibold text-purple-700 text-base">File Selected Successfully!</p>
                        <p className="text-sm text-gray-800 font-medium break-all max-w-md mx-auto bg-white py-2 px-4 rounded-xl border border-purple-100 shadow-sm inline-block">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Size: {(selectedFile.size / 1024).toFixed(1)} KB
                        </p>
                        <p className="text-xs text-purple-600 font-semibold underline mt-2 hover:text-purple-700">Click to change file</p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-semibold text-gray-800 text-base">Click to upload ID Proof (Aadhar/Passport)</p>
                        <p className="text-xs text-gray-500 mt-2">Supports PDF, PNG, JPG, or JPEG up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Review & Submit</h3>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                    <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Course:</strong> {formData.course || "Not Selected"}</p>
                    <p><strong>Batch:</strong> {formData.batch || "Not Selected"}</p>
                    <p><strong>Document:</strong> {selectedFile ? selectedFile.name : "Not Uploaded"}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="font-bold text-lg text-gray-900">Total Amount</span>
                      <span className="font-black text-2xl text-purple-600">₹15,500</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="bg-gray-50 border-t border-gray-100 p-6 flex justify-between items-center">
          {currentStep > 1 ? (
            <button onClick={handleBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-4 py-2 transition"><ArrowLeft size={18} /> Back</button>
          ) : <div></div>}

          {currentStep < 4 ? (
            <button onClick={handleNext} className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition shadow-md">Next Step <ArrowRight size={18} /></button>
          ) : (
            <button onClick={handleSubmit} disabled={isProcessing} className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-lg">
              {isProcessing ? "Saving to Database..." : "Save Application"}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
