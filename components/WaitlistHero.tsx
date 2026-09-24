import React from 'react';
import Image from 'next/image';
import { Sparkles, Tag, BellRing, Gift } from 'lucide-react';
import MailerLiteForm from './MailerLiteForm';

export default function WaitlistHero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 px-4 overflow-hidden" id="lista-oczekujacych">
      {/* Delikatne tło dekoracyjne */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Banner informacyjny na samej górze sekcji */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200/80 text-orange-900 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EE7B30] animate-ping"></span>
            <span>Obecna edycja kursu dobiegła końca • Zapisy są zamknięte</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lewa kolumna: Treść i korzyści */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EE7B30] bg-[#EE7B30]/10 px-3 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lista oczekujących na kolejną edycję</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#113629] leading-tight md:leading-[1.15]">
              Hiszpańskie czasy przeszłe <span className="text-[#EE7B30] underline decoration-[#EE7B30]/30 decoration-wavy">bez wiecznego chaosu</span> i blokady w głowie
            </h1>

            <p className="font-sans text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
              Indefinido czy Imperfecto? Przestań zgadywać w połowie zdania i bać się odezwać. Dołącz do listy oczekujących i zyskaj <strong>najlepsze warunki startu</strong>, gdy tylko otworzymy zapisy do kolejnej grupy!
            </p>

            {/* Pudełko z korzyściami z bycia na liście */}
            <div className="bg-white/90 border border-stone-200/80 rounded-2xl p-5 md:p-6 shadow-sm space-y-3.5">
              <p className="font-serif font-bold text-[#113629] text-base md:text-lg flex items-center gap-2">
                Dlaczego warto wpisać się na listę już teraz?
              </p>
              
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#EE7B30] flex items-center justify-center shrink-0 mt-0.5">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Gwarancja najniższej ceny:</strong> osoby z listy otrzymają specjalny kod rabatowy niedostępny nigdzie indziej.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Pierwszeństwo zapisu:</strong> dowiesz się o otwarciu drzwi 24h przed wszystkimi (miejsca w grupach są ograniczone).
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Ekskluzywny bonus:</strong> dodatkowe materiały i schematy gramatyczne ułatwiające start.
                  </div>
                </li>
              </ul>
            </div>

            {/* Mały social proof pod korzyściami */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                  <Image src="/photo_mug.jpg" alt="Uczestnik kursu" width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                  <Image src="/agata.png" alt="Agata Piątek" width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-[#113629] text-white text-xs font-bold flex items-center justify-center">
                  +400
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Już ponad <strong className="text-[#113629]">400 osób</strong> przełamało barierę mówienia w moich programach.
              </p>
            </div>

          </div>

          {/* Prawa kolumna: Karta z formularzem zapisu MailerLite */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#EE7B30]/30 relative">
              <div className="absolute -top-3.5 right-6 bg-[#EE7B30] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Zapisz się bez zobowiązań
              </div>
              <MailerLiteForm 
                idSuffix="hero"
                title="Dołącz do listy oczekujących"
                subtitle="Wpisz swoje dane poniżej – nic nie płacisz, zyskujesz gwarancję zniżki."
                buttonText="Chcę zniżkę i powiadomienie o starcie"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
