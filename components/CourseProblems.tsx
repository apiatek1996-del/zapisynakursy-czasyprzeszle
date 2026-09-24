import React from 'react';
import { AlertCircle, HelpCircle, MessageSquareOff, Shuffle } from 'lucide-react';

const problems = [
  {
    icon: Shuffle,
    title: "Indefinido czy Imperfecto?",
    description: "W teorii znasz definicje, ale gdy przychodzi do ułożenia zdania, zastanawiasz się 2 minuty nad każdym czasownikiem."
  },
  {
    icon: HelpCircle,
    title: "Ayer fui czy ayer he ido?",
    description: "Ciągle mylą Ci się niuanse między Perfecto a Indefinido i nie wiesz, co brzmi naturalnie dla Hiszpanów."
  },
  {
    icon: MessageSquareOff,
    title: "Blokada w trakcie rozmowy",
    description: "Zamiast cieszyć się konwersacją z sąsiadem, kelnerem czy znajomymi z pracy, w głowie analizujesz końcówki i czasy."
  },
  {
    icon: AlertCircle,
    title: "Nieregularne potworki",
    description: "Długie listy nieregularnych odmian (fui, supe, traje, puse...) zniechęcają Cię i sprawiają, że wracasz do punktu wyjścia."
  }
];

export default function CourseProblems() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white border-y border-stone-200/70">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EE7B30] bg-[#EE7B30]/10 px-3 py-1 rounded-md">
            Skąd to znamy?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#113629] mt-3 mb-4">
            Dlaczego hiszpańskie czasy przeszłe spędzają sen z powiek?
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Nie jesteś w tym sam(a). To najczęstsza ściana, na którą trafiają osoby uczące się hiszpańskiego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#F8F4ED]/60 border border-stone-200 hover:border-[#EE7B30]/40 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EE7B30] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#113629] mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-[#113629] text-white rounded-2xl max-w-3xl mx-auto">
          <p className="font-serif text-lg md:text-xl font-medium leading-relaxed">
            💡 <span className="text-[#FFC510] font-bold">Dobra wiadomość:</span> Czasy przeszłe to nie czarna magia ani setki stron regułek. Wystarczy jeden logiczny, życiowy system myślenia.
          </p>
        </div>

      </div>
    </section>
  );
}
