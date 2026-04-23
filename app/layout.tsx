import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firstkontak Consulting | Turo Business Coaching for High-Income W-2 Earners",
  description: "We help high-income W-2 employees build tax-strategic Turo car rental businesses that generate passive income and reduce their tax burden — legally.",
  keywords: "Turo business coaching, W-2 tax strategy, car rental business, passive income, Turo fleet, tax deductions",
  openGraph: {
    title: "Firstkontak Consulting | Turo Business for W-2 Earners",
    description: "Turn your W-2 income into a tax-strategic Turo business. Get coached by someone who built a 22-car fleet.",
    url: "https://firstkontakconsulting.com",
    siteName: "Firstkontak Consulting",
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
      <body className="noise">{children}</body>
    </html>
  );
}
