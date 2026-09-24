import React from 'react';
import Image from 'next/image';

export default function AboutAgata() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white border-y border-stone-200/70">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 items-center">
        
        {/* Zdjęcie */}
        <div className="w-full md:w-5/12 max-w-sm">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-300">
            <Image 
              src="/photo_mug.jpg" 
              alt="Agata Piątek" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Opis */}
        <div className="w-full md:w-7/12 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EE7B30] bg-[#EE7B30]/10 px-3 py-1 rounded-md">
            Prowadząca kurs
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#113629]">
            ¡Hola! Jestem Agata Piątek
          </h2>

          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
            <p className="font-semibold text-slate-900 text-base md:text-lg">
              Jestem magistrą filologii hiszpańskiej i od ponad 9 lat pomagam Polakom mówić po hiszpańsku lekko, płynnie i bez kompleksów.
            </p>

            <p>
              Dziś mieszkam w słonecznej Hiszpanii i korzystam z języka na co dzień. Ale doskonale pamiętam czasy, kiedy mimo lat nauki i wkuwania tabelek gramatycznych na studiach... bałam się odezwać do Hiszpana w kawiarni, bo panicznie bałam się pomylić czas.
            </p>

            <p>
              Dlatego moje kursy nie są nudnym odtwarzaniem podręczników szkolnych. Skupiam się na <strong>konkretnych schematach, żywym języku i natychmiastowym przełożeniu teorii na praktykę</strong>.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <div className="bg-[#F8F4ED] border border-stone-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#113629]">
              🎓 Magistra Filologii Hiszpańskiej
            </div>
            <div className="bg-[#F8F4ED] border border-stone-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#113629]">
              🇪🇸 Na stałe w Hiszpanii
            </div>
            <div className="bg-[#F8F4ED] border border-stone-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#113629]">
              👥 Ponad 400 zadowolonych kursantów
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
