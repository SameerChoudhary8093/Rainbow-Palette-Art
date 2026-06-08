import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/Logo.jpg" 
              alt="Rainbow Palette Logo" 
              width={44} 
              height={44} 
              className="w-11 h-11 rounded-full object-cover border-2 border-purple-100 group-hover:scale-105 transition-transform"
              priority
            />
            <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:opacity-90 transition-opacity">
              Rainbow Palette
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="text-gray-600 hover:text-purple-600 font-medium transition">About</Link>
            <Link href="/courses" className="text-gray-600 hover:text-purple-600 font-medium transition">Courses</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-purple-600 font-medium transition">Gallery</Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-purple-600 font-medium transition">Marketplace</Link>
            <Link href="/workshops" className="text-gray-600 hover:text-purple-600 font-medium transition">Workshops</Link>
            <Link href="/programs" className="text-gray-600 hover:text-purple-600 font-medium transition">Special Programs</Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600 font-medium transition">Contact</Link>
            
            {/* CTA Button */}
            <Link 
              href="/apply" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
