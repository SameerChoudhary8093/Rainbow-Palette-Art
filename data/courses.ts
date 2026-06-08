export type CourseType = {
  id: string;
  title: string;
  category: 'Regular' | 'Monthly' | 'Diploma';
  duration: string;
  fees: string;
  batchTiming: string;
  days: string;
  ageEligibility: string;
  certificateInfo: string;
  curriculum: string[];
};

export const coursesData: CourseType[] = [
  {
    id: "1",
    title: "Foundation Art Class",
    category: "Regular",
    duration: "Ongoing",
    fees: "₹2,500 / month",
    batchTiming: "4:00 PM - 6:00 PM",
    days: "Mon, Wed, Fri",
    ageEligibility: "7+ Years",
    certificateInfo: "Participation Certificate every 6 months",
    curriculum: ["Basic Sketching", "Color Theory", "Watercolors basics"]
  },
  {
    id: "2",
    title: "Advanced Portrait & Acrylics",
    category: "Monthly",
    duration: "6 Months",
    fees: "₹15,000 total",
    batchTiming: "10:00 AM - 1:00 PM",
    days: "Weekends (Sat - Sun)",
    ageEligibility: "15+ Years",
    certificateInfo: "QR Verified Completion Certificate",
    curriculum: ["Human Anatomy", "Oil Painting", "Hyper-realism"]
  },
  {
    id: "3",
    title: "Fine Arts Professional Diploma",
    category: "Diploma",
    duration: "1 Year",
    fees: "₹50,000 / year",
    batchTiming: "11:00 AM - 3:00 PM",
    days: "Mon to Fri",
    ageEligibility: "18+ Years (10th Pass)",
    certificateInfo: "Govt. Recognized Diploma with QR Verification",
    curriculum: ["Art History", "Digital Art", "Exhibition Curation", "Portfolio Building"]
  }
];
