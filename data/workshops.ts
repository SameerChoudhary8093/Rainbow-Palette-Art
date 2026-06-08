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
    date: "25 Oct, 2024",
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
    title: "Kids Summer Art Safari 2024",
    type: "Summer Camp",
    date: "10 Nov - 20 Nov, 2024",
    time: "9:00 AM - 12:00 PM Daily",
    instructor: "Neha & Team",
    fees: 4500,
    totalSeats: 50,
    bookedSeats: 48, // Almost full
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop",
    status: "Upcoming"
  },
  {
    id: "w2",
    title: "Charcoal Portrait Masterclass",
    type: "Workshop",
    date: "05 Dec, 2024",
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
    date: "12 Aug, 2024",
    time: "2:00 PM - 5:00 PM",
    instructor: "Priya Patel",
    fees: 2500,
    totalSeats: 25,
    bookedSeats: 25,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
    status: "Past"
  }
];
