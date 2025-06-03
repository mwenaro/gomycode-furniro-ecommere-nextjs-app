import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furturo - The home for all your furniture solutions!",
  description: "Web site for selling the best pieces of furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white max-w-7xl mx-auto">
          {/* Header */}
          <Header />
          {/* main */}
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
/**
 * loading
 * error
 * not-found
 * route
 *
 */

/**
 * - server componets
 * - client components - localStorage, location, react hoooks, clicks, evenmts
 */
