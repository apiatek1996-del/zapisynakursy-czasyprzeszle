import type { Metadata, Viewport } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const merriweather = Merriweather({ 
  subsets: ["latin", "latin-ext"], 
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather" 
});

const openSans = Open_Sans({ 
  subsets: ["latin", "latin-ext"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans" 
});

export const viewport: Viewport = {
  themeColor: "#EE7B30",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kurs Czasów Przeszłych | Lista Oczekujących - Agata Piątek",
  description: "Zapisy na kurs czasów przeszłych są aktualnie zamknięte. Zapisz się na listę oczekujących, aby otrzymać gwarancję najniższej ceny i powiadomienie przed innymi.",
  icons: {
    icon: "/brand-logo.jpg",
    apple: "/brand-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body 
        className={`${merriweather.variable} ${openSans.variable} font-sans bg-[#F8F4ED] text-slate-800 overflow-x-hidden min-h-screen flex flex-col`}
      >
        {/* MailerLite Universal Script */}
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0];n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '973308');
          `}
        </Script>
        <Script 
          src="https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b" 
          strategy="afterInteractive" 
        />
        {children}
      </body>
    </html>
  );
}
