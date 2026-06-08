import Link from "next/link";
import { ArrowRight, Palette, Store, Award, Image as ImageIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            Master the Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Creative Expression
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-600 mb-10">
            Join India's premier art academy. Learn from masters, build your portfolio, and turn your passion into a profession.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/apply" 
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
            >
              Enroll Now <ArrowRight size={20} />
            </Link>
            <Link 
              href="/courses" 
              className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-900 hover:bg-gray-50 transition flex items-center justify-center gap-2"
            >
              View Courses <Palette size={20} />
            </Link>
          </div>

          {/* Quick Links / Secondary CTAs (As per Client Point 1) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <QuickLink href="/gallery" icon={<ImageIcon size={20}/>} text="Student Gallery" />
            <QuickLink href="/marketplace" icon={<Store size={20}/>} text="Buy Artworks" />
            <QuickLink href="/workshops" icon={<Palette size={20}/>} text="Workshops" />
            <QuickLink href="/achievements" icon={<Award size={20}/>} text="Achievements" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Chhota helper component quick links ke liye
function QuickLink({ href, icon, text }: { href: string, icon: React.ReactNode, text: string }) {
  return (
    <Link 
      href={href}
      className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all group"
    >
      <div className="text-gray-500 group-hover:text-purple-600 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
        {text}
      </span>
    </Link>
  );
}
