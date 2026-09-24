"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface MailerLiteFormProps {
  idSuffix?: string;
  buttonText?: string;
  title?: string;
  subtitle?: string;
}

export default function MailerLiteForm({
  idSuffix = "hero",
  buttonText = "Zapisz mnie na listę oczekujących + odbierz zniżkę",
  title = "Dołącz do listy oczekujących na kurs",
  subtitle = "Odbierz gwarancję najniższej ceny i powiadomienie o starcie przed wszystkimi."
}: MailerLiteFormProps) {
  const formId = "199503207245809654";
  const embedId = `mlb2-${formId}-${idSuffix}`;

  return (
    <div id={embedId} className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${formId} w-full`}>
      <div className="ml-form-embedWrapper embedForm">
        
        {/* Formularz - ukrywany automatycznie po wysłaniu */}
        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
          {title && (
            <div className="mb-6 text-center">
              <h3 className="font-serif text-2xl font-bold text-[#113629] mb-2">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm md:text-base text-slate-600">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <form 
            className="ml-block-form flex flex-col space-y-4" 
            action={`https://assets.mailerlite.com/jsonp/973308/forms/${formId}/subscribe`} 
            data-code="" 
            method="post" 
            target="_blank"
          >
            <div>
              <label htmlFor={`name-${idSuffix}`} className="block text-xs font-semibold text-[#113629] uppercase tracking-wider mb-1.5 ml-1">
                Twoje imię
              </label>
              <input 
                id={`name-${idSuffix}`}
                aria-label="name" 
                type="text" 
                className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white focus:border-[#EE7B30] focus:ring-2 focus:ring-[#EE7B30]/20 outline-none transition-all font-sans text-slate-800 placeholder:text-stone-400 shadow-sm" 
                name="fields[name]" 
                placeholder="np. Anna" 
                autoComplete="given-name" 
                required 
              />
            </div>

            <div>
              <label htmlFor={`email-${idSuffix}`} className="block text-xs font-semibold text-[#113629] uppercase tracking-wider mb-1.5 ml-1">
                Twój adres e-mail
              </label>
              <input 
                id={`email-${idSuffix}`}
                aria-label="email" 
                aria-required="true" 
                type="email" 
                className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white focus:border-[#EE7B30] focus:ring-2 focus:ring-[#EE7B30]/20 outline-none transition-all font-sans text-slate-800 placeholder:text-stone-400 shadow-sm" 
                name="fields[email]" 
                placeholder="np. anna@twojadomena.pl" 
                autoComplete="email" 
                required 
              />
            </div>
            
            <div className="flex items-start gap-2.5 pt-1">
              <input 
                type="checkbox" 
                id={`privacy-${idSuffix}`} 
                className="mt-1 w-4 h-4 text-[#EE7B30] rounded border-stone-300 focus:ring-[#EE7B30] cursor-pointer" 
                required 
              />
              <label htmlFor={`privacy-${idSuffix}`} className="text-xs text-slate-500 font-sans leading-relaxed cursor-pointer select-none">
                Zgadzam się na przetwarzanie moich danych osobowych w celu otrzymywania informacji o kursie i ofertach od Agaty Piątek zgodnie z <a href="https://ohiszpanski.pl" target="_blank" rel="noopener noreferrer" className="text-[#EE7B30] underline hover:text-[#D66A24]">Polityką Prywatności</a>. Możesz wypisać się w każdej chwili.
              </label>
            </div>

            {/* Recaptcha placeholder if required */}
            <div className="ml-form-recaptcha ml-validate-required flex justify-center py-1">
              <div className="g-recaptcha scale-90 origin-center" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
            </div>

            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />

            <button 
              type="submit" 
              className="w-full bg-[#EE7B30] hover:bg-[#D66A24] text-white font-bold text-base md:text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#EE7B30]/30 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5" />
              <span>Szanuję Twoją prywatność. Zero spamu. Wypisujesz się jednym kliknięciem.</span>
            </div>
          </form>
        </div>

        {/* Sukces po wysłaniu */}
        <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
          <div className="ml-form-successContent text-center p-8 bg-[#F8F4ED] border-2 border-[#EE7B30]/30 rounded-2xl shadow-inner space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-[#113629]">
              ¡Excelente! Jesteś na liście oczekujących! 🎉
            </h4>
            <p className="font-sans text-slate-700 text-base leading-relaxed max-w-md mx-auto">
              Twój rabat oraz pierwszeństwo zapisu na kolejną edycję zostały zarezerwowane.
            </p>
            <div className="p-3 bg-white/80 rounded-xl text-xs text-slate-600 border border-stone-200">
              ✉️ Sprawdź za chwilę swoją skrzynkę pocztową i potwierdź swój adres (jeśli nie widzisz maila w ciągu 2 minut, zajrzyj do folderu Oferty lub Spam).
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
