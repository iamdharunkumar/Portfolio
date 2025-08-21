import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharunkumar - Portfolio",
  description: "Software Engineer Portfolio showcasing skills, projects, and experience",
  icons: {
    icon: '/d.svg',
    shortcut: '/d.svg',
    apple: '/d.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        {children}
      </body>
    </html>
  );
}
