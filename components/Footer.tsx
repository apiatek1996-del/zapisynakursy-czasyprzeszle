import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-12 pb-8 px-4 border-t border-slate-900 text-xs">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p className="font-serif font-bold text-base text-white mb-1">
              Agata Piątek – Hiszpański
            </p>
            <p className="text-slate-400">
              Ucz się hiszpańskiego życiowo, skutecznie i bez wstydu.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="https://ohiszpanski.pl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Strona główna
            </a>
            <a href="mailto:kontakt@ohiszpanski.pl" className="hover:text-white transition-colors">
              kontakt@ohiszpanski.pl
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <p>© {currentYear} Agata Piątek. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <a href="https://ohiszpanski.pl" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">
              Polityka prywatności
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
