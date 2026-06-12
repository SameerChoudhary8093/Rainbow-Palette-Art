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
    id: "foundation-art",
    title: "Foundation Art Class",
    category: "Regular",
    duration: "Ongoing (Monthly subscription)",
    fees: "₹2,500 / month",
    batchTiming: "4:00 PM - 6:00 PM",
    days: "Mon, Wed, Fri",
    ageEligibility: "7+ Years",
    certificateInfo: "Participation Certificate every 6 months",
    curriculum: ["Basic Sketching & Lines", "Color Wheel & Mixes", "Watercolor Landscapes", "Fun Craft & Origami"]
  },
  {
    id: "kids-creative",
    title: "Kids Creative Art Club",
    category: "Regular",
    duration: "Ongoing (Weekend batch)",
    fees: "₹1,800 / month",
    batchTiming: "11:00 AM - 1:00 PM",
    days: "Sat & Sun",
    ageEligibility: "5-10 Years",
    certificateInfo: "Kids Art Star Certificate",
    curriculum: ["Finger Painting", "Clay Modeling", "Card Making", "Basic Sketching"]
  },
  {
    id: "portrait-3m",
    title: "Watercolors & Portrait Masterclass",
    category: "Monthly",
    duration: "3 Months",
    fees: "₹9,500 total",
    batchTiming: "2:00 PM - 5:00 PM",
    days: "Tue, Thu",
    ageEligibility: "12+ Years",
    certificateInfo: "QR Verified Course Completion Certificate",
    curriculum: ["Facial Proportions", "Water Control & Gradients", "Color Blending", "Live Model Sketching"]
  },
  {
    id: "acrylic-6m",
    title: "Advanced Acrylics & Landscapes",
    category: "Monthly",
    duration: "6 Months",
    fees: "₹16,000 total",
    batchTiming: "10:00 AM - 1:00 PM",
    days: "Sat, Sun",
    ageEligibility: "14+ Years",
    certificateInfo: "QR Verified 6-Month Course Certificate",
    curriculum: ["Texturing Techniques", "Canvas Preparation", "Knife Painting", "Perspective Drawing"]
  },
  {
    id: "fine-arts-diploma",
    title: "Fine Arts Professional Diploma",
    category: "Diploma",
    duration: "1 Year",
    fees: "₹50,000 / year",
    batchTiming: "11:00 AM - 3:00 PM",
    days: "Mon to Fri",
    ageEligibility: "18+ Years (10th Pass)",
    certificateInfo: "Academy Gold Diploma with QR Verification",
    curriculum: ["Art History & Aesthetics", "Digital Illustration", "Mediums Study (Oil, Acrylic, Charcoal)", "Exhibition Curation & Business of Art", "Final Portfolio Project"]
  }
];

