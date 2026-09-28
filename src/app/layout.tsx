import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { PortfolioPreferences } from "@/components/PortfolioPreferences";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: "Alex Téringer | Frontend & Mobile Developer in Tokyo",
  description:
    "Frontend and mobile developer in Tokyo, Japan, with 3.5 years of experience building healthcare web apps using React, Next.js, and TypeScript.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Alex Téringer | Frontend & Mobile Developer in Tokyo",
    description:
      "Frontend and mobile developer in Tokyo, Japan, with 3.5 years of experience building healthcare web apps using React, Next.js, and TypeScript.",
    siteName: "Alex Téringer",
    locale: "en_US",
    images: [
      {
        url: "/images/smallProfile.jpg",
        width: 640,
        height: 960,
        alt: "Portrait of Alex Téringer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Téringer | Frontend & Mobile Developer in Tokyo",
    description:
      "Frontend and mobile developer in Tokyo, Japan, with 3.5 years of experience building healthcare web apps using React, Next.js, and TypeScript.",
    images: ["/images/smallProfile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-text">
        <PortfolioPreferences>{children}</PortfolioPreferences>
      </body>
    </html>
  );
}
