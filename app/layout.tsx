import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opti Realty | Cashback & Rental Return Real Estate Investments",
  description: "Invest smarter with Opti Realty's unique cashback and rental return model. Explore projects and own property with just 10% down payment.",
  keywords: "Opti Realty, Opti, real estate investment, cashback, rental returns, property Hyderabad",
  openGraph: {
    title: "Opti Realty | Cashback & Rental Return Real Estate Investments",
    description: "Invest smarter with Opti Realty's unique cashback and rental return model. Explore projects and own property with just 10% down payment.",
    url: "https://opti-realty.com/",
    siteName: "Opti Realty",
    images: [
      {
        url: "https://opti-realty.com/OG%20logo.png",
        width: 1200,
        height: 630,
        alt: "Opti Realty",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-montserrat), var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
