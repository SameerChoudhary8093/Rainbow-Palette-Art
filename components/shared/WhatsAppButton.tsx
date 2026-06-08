import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Client ka WhatsApp number yaha daalna hoga (format: countrycode + number, e.g., 919876543210)
  const waNumber = "919876543210"; 
  const message = "Hello Rainbow Palette Academy, I want to inquire about...";

  return (
    <a
      href={`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      {/* Hover karne pe text dikhega */}
      <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
