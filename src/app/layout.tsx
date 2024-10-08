import type { Metadata } from "next";
import React from 'react';
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from '@/context/themecontext';
import ThemeWrapper from '@/components/theme/wrapper';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Showcase Inge Pedersen",
  description: "Some Hooks and stuff..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <ThemeProvider>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
              <ThemeWrapper>
                  {children}
              </ThemeWrapper>
            </body>
          </ThemeProvider>
      </html>

  );
}