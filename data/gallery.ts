export type ArtworkType = {
  id: string;
  title: string;
  category: string;
  studentName: string;
  image: string;
};

export const galleryCategories = [
  "All", "Pencil Sketches", "Watercolor", "Acrylic", "Oil", "Portrait", "Kids Artwork", "Diploma Projects"
];

export const galleryData: ArtworkType[] = [
  { id: "1", title: "Morning Serenity", category: "Watercolor", studentName: "Aarav Sharma", image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop" },
  { id: "2", title: "Old Man Portrait", category: "Pencil Sketches", studentName: "Priya Patel", image: "https://images.unsplash.com/photo-1594155160917-09d666795f92?q=80&w=800&auto=format&fit=crop" },
  { id: "3", title: "Abstract Thoughts", category: "Acrylic", studentName: "Rohan Gupta", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop" },
  { id: "4", title: "Sunset Boulevard", category: "Oil", studentName: "Neha Singh", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" },
  { id: "5", title: "Little Picasso", category: "Kids Artwork", studentName: "Vivaan (Age 8)", image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop" },
  { id: "6", title: "Final Masterpiece", category: "Diploma Projects", studentName: "Kavya Desai", image: "https://images.unsplash.com/photo-1578301978693-85fa9c03fa75?q=80&w=800&auto=format&fit=crop" },
  { id: "7", title: "Eyes that speak", category: "Portrait", studentName: "Priya Patel", image: "https://images.unsplash.com/photo-1588612502693-0182650186fc?q=80&w=800&auto=format&fit=crop" },
  { id: "8", title: "City in Rain", category: "Watercolor", studentName: "Aarav Sharma", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop" },
];
