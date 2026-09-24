import React from 'react';
import Image from 'next/image';

const testimonials = [
  { src: "/opinion1.jpg", alt: "Opinia kursantki o kursie hiszpańskiego" },
  { src: "/opinion2.jpg", alt: "Opinia o nauce hiszpańskiego z Agatą" },
  { src: "/opinion6.jpg", alt: "Opinia o lekcjach hiszpańskiego" },
  { src: "/opinion3.jpg", alt: "Opinia o postępach w hiszpańskim" },
  { src: "/opinion7.jpg", alt: "Opinia o swobodnym mówieniu" },
  { src: "/opinion4.jpg", alt: "Opinia o praktycznym hiszpańskim" }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#F8F4ED]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EE7B30] bg-[#EE7B30]/10 px-3 py-1 rounded-md">
            Opinie i efekty
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#113629] mt-3 mb-4">
            Co o nauce ze mną mówią inni?
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Oto fragmenty wiadomości od osób, które uczyły się ze mną hiszpańskiego:
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid bg-white p-3 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full rounded-xl overflow-hidden">
                <Image 
                  src={t.src} 
                  alt={t.alt} 
                  width={500} 
                  height={300} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
