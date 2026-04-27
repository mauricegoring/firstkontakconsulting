import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firstkontak Consulting | Turo Business Coaching for High-Income W-2 Earners",
  description:
    "We help high-income W-2 employees build tax-strategic Turo car rental businesses that generate passive income and reduce their tax burden — legally. Built by someone who ran a 22-car fleet.",
  keywords:
    "Turo business coaching, W-2 tax strategy, car rental business, passive income, Turo fleet, tax deductions, MACRS depreciation, bonus depreciation, Section 168k, fleet management",
  authors: [{ name: "Maurice Goring", url: "https://firstkontakconsulting.com" }],
  creator: "Firstkontak Consulting Inc.",
  metadataBase: new URL("https://firstkontakconsulting.com"),
  openGraph: {
    title: "Firstkontak Consulting | Turo Business for W-2 Earners",
    description:
      "Turn your W-2 income into a tax-strategic Turo business. Get coached by someone who built a 22-car fleet.",
    url: "https://firstkontakconsulting.com",
    siteName: "Firstkontak Consulting",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Firstkontak Consulting — Turo Business Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firstkontak Consulting | Turo Business for W-2 Earners",
    description:
      "Turn your W-2 income into a tax-strategic Turo business. Built by someone who ran a 22-car fleet.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://firstkontakconsulting.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="syne">{children}</body>
    </html>
  );
}