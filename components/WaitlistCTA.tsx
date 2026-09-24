import React from 'react';
import Image from 'next/image';
import MailerLiteForm from './MailerLiteForm';

export default function WaitlistCTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#F8F4ED] border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-[#113629] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Ozdobny akcent świetlny */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EE7B30]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4 mb-8">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-orange-200 border border-white/15">
              Gwarancja najniższej ceny
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              Nie przegap startu kolejnej edycji kursu!
            </h2>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed">
              Zapisz się na bezpłatną listę oczekujących już teraz. Otrzymasz informację o otwarciu naboru jako pierwszy(a) wraz ze specjalnym kodem rabatowym.
            </p>
          </div>

          <div className="relative z-10 max-w-xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-slate-800">
            <MailerLiteForm 
              idSuffix="footer"
              title=""
              subtitle=""
              buttonText="Dołącz do listy oczekujących i odbierz zniżkę"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
