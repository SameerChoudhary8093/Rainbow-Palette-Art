import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Palette, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image 
                src="/Logo.jpg" 
                alt="Rainbow Palette Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-750 group-hover:scale-105 transition-transform"
              />
              <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:opacity-90 transition-opacity">
                Rainbow Palette
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premier art academy. We nurture creativity and help artists turn their passion into a professional career.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Youtube size={18} />} href="#" />
              <SocialIcon icon={<Palette size={18} />} href="#" />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-3">
              <FooterLink href="/about" text="About Academy" />
              <FooterLink href="/courses" text="Our Courses" />
              <FooterLink href="/gallery" text="Student Gallery" />
              <FooterLink href="/marketplace" text="Buy Artworks" />
              <FooterLink href="/achievements" text="Achievements & Awards" />
              <FooterLink href="/verify/RB-2024-001" text="Verify Certificate" />
            </ul>
          </div>

          {/* 3. Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <FooterLink href="/workshops" text="Upcoming Workshops" />
              <FooterLink href="/workshops" text="Summer Art Camp" />
              <FooterLink href="/programs" text="Portfolio Preparation" />
              <FooterLink href="/programs" text="Internships" />
              <FooterLink href="/programs" text="Outdoor Painting" />
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">124, Creative Enclave, Art District, Koramangala, Bengaluru - 560034</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-pink-500 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-pink-500 flex-shrink-0" />
                <span className="text-sm">hello@rainbowpalette.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rainbow Palette Art Academy. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-pink-500" /> by <span className="text-white font-medium">A Pro Developer</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

// Small helper components
function FooterLink({ href, text }: { href: string, text: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        {text}
      </Link>
    </li>
  );
}

// Social icon links
function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all duration-300">
      {icon}
    </a>
  );
}
