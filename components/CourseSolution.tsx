import React from 'react';
import { CheckCircle, Zap, Brain, MessageCircle, FileText } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Prosty schemat myślenia",
    desc: "Zrozumiesz raz na zawsze, co decyduje o wyborze czasu w hiszpańskiej głowie – bez wkuwania niekończących się wyjątków."
  },
  {
    icon: Zap,
    title: "Triki na formy nieregularne",
    desc: "Poznasz sprytne grupy skojarzeniowe, dzięki którym odmiany nieregularne same wpadają do głowy w ułamku sekundy."
  },
  {
    icon: MessageCircle,
    title: "Trening mówienia i naturalność",
    desc: "Zamiast suchych ćwiczeń z luki nauczysz się opowiadać historie, anegdoty i relacjonować swój dzień tak, jak robią to rodowici Hiszpanie."
  },
  {
    icon: FileText,
    title: "Ściągi, notatki wizualne i audio",
    desc: "Wszystko podane w czytelnej formie do druku i na telefon, żebyś w każdej chwili mógł/mogła odświeżyć wiedzę."
  }
];

export default function CourseSolution() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#F8F4ED]">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
            Rozwiązanie
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#113629] mt-3 mb-4">
            Co zyskasz dzięki udziałowi w kolejnej edycji kursu?
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Ten kurs powstał po to, aby przejść od niepewności i dukania do pełnej swobody opowiadania o przeszłości.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200/80 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EE7B30]/10 text-[#EE7B30] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#113629] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sekcja z wezwaniem do zapisania się na listę */}
        <div className="mt-14 p-8 bg-white rounded-3xl border-2 border-[#EE7B30]/30 text-center max-w-2xl mx-auto shadow-sm">
          <h4 className="font-serif font-bold text-xl md:text-2xl text-[#113629] mb-3">
            Chcesz dołączyć w pierwszej kolejności z rabatem?
          </h4>
          <p className="text-slate-600 text-sm md:text-base mb-6">
            Zapisz się na listę oczekujących poniżej – nie przegapisz otwarcia i odbierzesz gwarantowaną niższą cenę.
          </p>
          <a 
            href="#lista-oczekujacych" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#EE7B30] hover:bg-[#D66A24] text-white font-bold rounded-xl transition-all shadow-md shadow-[#EE7B30]/20"
          >
            Dołącz do listy oczekujących
          </a>
        </div>

      </div>
    </section>
  );
}
