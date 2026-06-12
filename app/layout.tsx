import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marquis Overhead | Overhead Doors & Dock Equipment — Alberta",
  description:
    "Professional overhead door installation, repairs, and dock equipment in Alberta. Commercial & industrial specialists. Call (403) 617-9797.",
  keywords: "overhead doors, garage doors, dock equipment, dock levelers, door repair, Alberta, Calgary",
  openGraph: {
    title: "Marquis Overhead | Overhead Doors & Dock Equipment",
    description: "Commercial & industrial overhead door installation, repairs, and dock equipment in Alberta.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google Analytics — G-YD7GMTDRPD */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YD7GMTDRPD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YD7GMTDRPD');
          `}
        </Script>
      </head>
      <body className={`${geist.className} min-h-full antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
