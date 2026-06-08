import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer"; // Ye add kiya hai
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rainbow Palette Art Academy",
  description: "Unleash your creativity at the finest Art Academy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 pt-20 text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        
        {/* Main Content (flex-grow ensures footer stays at bottom) */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer /> {/* Footer yaha aayega */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
