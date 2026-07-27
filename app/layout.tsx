import type { Metadata } from "next";
import { arvo, lato ,mont} from "./fonts";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import JsonLd from "@/components/JsonLd/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rna-ksa.com"),
  title: {
    default: "RNA Traders | Trusted Business Group in Jeddah, KSA",
    template: "%s | RNA Traders",
  },
  description:
    "RNA Traders is a trusted business group in Jeddah, Saudi Arabia, offering travel, hospitality, media production, and business support services. We deliver reliable, customer-focused solutions with a commitment to quality, professionalism, and excellence.",
  keywords: [
    "RNA Traders",
    "RNA Condotels",
    "RNA Production",
    "RNA Services",
    "RNA Travels",
    "Business Group Jeddah",
    "Saudi Arabia",
  ],
  openGraph: {
    title: "RNA Traders",
    description:
      "RNA Traders is a trusted business group in Jeddah, Saudi Arabia, offering travel, hospitality, media production, and business support services.",
    url: "https://www.rna-ksa.com",
    siteName: "RNA Traders",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RNA Traders",
    description:
      "RNA Traders is a trusted business group in Jeddah, Saudi Arabia, offering travel, hospitality, media production, and business support services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${arvo.variable} ${lato.variable} ${mont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
