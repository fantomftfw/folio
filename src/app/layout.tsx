import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sameer\'s Portfolio',
  description: 'Product design portfolio showcasing the best of function and aesthetic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload local fonts with high priority */}
        <link
          rel="preload"
          href="/fonts/SpecialGothicExpandedOne.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/RedHatDisplay-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background min-h-screen overflow-hidden font-red-hat">
        {children}
      </body>
    </html>
  );
} 