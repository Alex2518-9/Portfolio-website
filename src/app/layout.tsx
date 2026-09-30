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

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": new URL("#person", SITE_URL).toString(),
    name: "Alex Téringer",
    url: SITE_URL.toString(),
    image: new URL("/images/smallProfile.jpg", SITE_URL).toString(),
    jobTitle: "Frontend and Mobile Developer",
    homeLocation: {
      "@type": "Place",
      name: "Tokyo, Japan",
    },
    sameAs: [
      "https://www.linkedin.com/in/alex-t%C3%A9ringer-535b76236",
      "https://github.com/Alex2518-9",
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: "Alex Téringer | Frontend & Mobile Developer in Tokyo",
  description:
    "Frontend and mobile developer in Tokyo, Japan, with 3.5 years of experience building healthcare web apps using React, Next.js, and TypeScript.",
  alternates: {
    canonical: "/",
  },
  icons: {
    apple: "/apple-touch-icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileStructuredData),
          }}
        />
        <PortfolioPreferences>{children}</PortfolioPreferences>
      </body>
    </html>
  );
}
