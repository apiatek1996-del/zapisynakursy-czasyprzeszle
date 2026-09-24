export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-6 text-center">
      <div className="max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 mb-6">
          Zapisy chwilowo zamknięte
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#113629] leading-tight mb-4">
          Kurs Czasów Przeszłych
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Aktualna edycja dobiegła końca, ale kolejna wystartuje już wkrótce! Zapisz się na listę oczekujących, aby otrzymać informację o starcie jako pierwszy oraz odebrać specjalną zniżkę na start.
        </p>
        <div className="p-6 bg-[#F8F4ED] rounded-2xl border border-[#F0EAE1]">
          <p className="font-semibold text-[#113629] mb-2">Formularz zapisu</p>
          <p className="text-sm text-slate-500">Zaraz podepniemy Twój formularz z MailerLite!</p>
        </div>
      </div>
    </main>
  );
}
