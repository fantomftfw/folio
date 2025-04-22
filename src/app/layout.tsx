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
      <body className="bg-background min-h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
} 