export type MarketplaceItem = {
  id: string;
  title: string;
  studentName: string;
  medium: string;
  size: string;
  price: number;
  isAvailable: boolean;
  image: string;
};

export const marketplaceData: MarketplaceItem[] = [
  {
    id: "m1",
    title: "The Silent Valley",
    studentName: "Aarav Sharma",
    medium: "Oil on Canvas",
    size: "24 x 36 inches",
    price: 15000,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m2",
    title: "Urban Chaos",
    studentName: "Rohan Gupta",
    medium: "Acrylic on Board",
    size: "18 x 24 inches",
    price: 8500,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m3",
    title: "Serenity in Blue",
    studentName: "Priya Patel",
    medium: "Watercolor on Paper",
    size: "12 x 16 inches",
    price: 4000,
    isAvailable: false,
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m4",
    title: "Golden Hour Portrait",
    studentName: "Kavya Desai",
    medium: "Charcoal & Gold Leaf",
    size: "20 x 20 inches",
    price: 12000,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1594155160917-09d666795f92?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m5",
    title: "Aura of Himalayas",
    studentName: "Siddharth Jain",
    medium: "Acrylic on Canvas",
    size: "30 x 40 inches",
    price: 22000,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c03fa75?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m6",
    title: "Dancing Peacock",
    studentName: "Ananya Mehta (Age 12)",
    medium: "Kids Acrylic Painting",
    size: "12 x 12 inches",
    price: 2500,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop"
  }
];

