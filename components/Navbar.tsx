import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F4ED]/90 backdrop-blur-md border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#EE7B30] shadow-sm">
            <Image 
              src="/brand-logo.jpg" 
              alt="Agata Piątek - Hiszpański" 
              width={40} 
              height={40} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base md:text-lg text-[#113629] leading-tight">
              Agata Piątek
            </span>
            <span className="text-xs text-[#EE7B30] font-semibold tracking-wide">
              Hiszpański w praktyce
            </span>
          </div>
        </Link>

        {/* Status + CTA */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200/60">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Zapisy zamknięte
          </span>
          <a 
            href="#lista-oczekujacych" 
            className="bg-[#113629] hover:bg-[#1b4b39] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm"
          >
            Dołącz do listy
          </a>
        </div>

      </div>
    </header>
  );
}
