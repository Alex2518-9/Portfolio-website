import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { PortfolioPreferences } from "@/components/PortfolioPreferences";
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
  title: "Alex Téringer — Frontend & Mobile Developer",
  description:
    "Frontend and mobile developer based in Japan, building with React, TypeScript, Next.js, and Tailwind CSS.",
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
