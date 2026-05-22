import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Academic Website`,
  description: `Personal academic website of ${profile.name}. ${profile.title} at ${profile.institution}.`,
  openGraph: {
    title: `${profile.name}`,
    description: `${profile.title} at ${profile.institution}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-slate-700 bg-white">
        {children}
      </body>
    </html>
  );
}
