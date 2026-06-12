export type EventType = {
  id: string;
  title: string;
  type: 'Workshop' | 'Summer Camp' | 'Outdoor';
  date: string;
  time: string;
  instructor: string;
  fees: number;
  totalSeats: number;
  bookedSeats: number;
  image: string;
  status: 'Upcoming' | 'Past';
};

export const eventsData: EventType[] = [
  {
    id: "w1",
    title: "Mastering Watercolors: Floral Magic",
    type: "Workshop",
    date: "25 Oct, 2026",
    time: "10:00 AM - 2:00 PM",
    instructor: "Aditi Rao",
    fees: 1500,
    totalSeats: 30,
    bookedSeats: 24,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    status: "Upcoming"
  },
  {
    id: "c1",
    title: "Kids Summer Art Safari 2026",
    type: "Summer Camp",
    date: "15 Apr - 30 Apr, 2026",
    time: "9:00 AM - 12:00 PM Daily",
    instructor: "Neha & Team",
    fees: 4500,
    totalSeats: 50,
    bookedSeats: 48,
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop",
    status: "Upcoming"
  },
  {
    id: "w2",
    title: "Charcoal Portrait Masterclass",
    type: "Workshop",
    date: "05 Dec, 2026",
    time: "11:00 AM - 4:00 PM",
    instructor: "Rahul Verma",
    fees: 2000,
    totalSeats: 20,
    bookedSeats: 5,
    image: "https://images.unsplash.com/photo-1594155160917-09d666795f92?q=80&w=800&auto=format&fit=crop",
    status: "Upcoming"
  },
  {
    id: "w3",
    title: "Resin Art for Beginners",
    type: "Workshop",
    date: "12 Aug, 2025",
    time: "2:00 PM - 5:00 PM",
    instructor: "Priya Patel",
    fees: 2500,
    totalSeats: 25,
    bookedSeats: 25,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
    status: "Past"
  },
  {
    id: "c2",
    title: "Teen Sculpting & Clay Camp 2025",
    type: "Summer Camp",
    date: "20 May - 30 May, 2025",
    time: "10:00 AM - 1:00 PM Daily",
    instructor: "Siddharth Jain",
    fees: 5500,
    totalSeats: 35,
    bookedSeats: 35,
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=800&auto=format&fit=crop",
    status: "Past"
  },
  {
    id: "w4",
    title: "Impasto Oil Painting Knife Class",
    type: "Workshop",
    date: "18 Sep, 2025",
    time: "11:00 AM - 3:00 PM",
    instructor: "Dr. Meera Rajput",
    fees: 3200,
    totalSeats: 15,
    bookedSeats: 15,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
    status: "Past"
  }
];

