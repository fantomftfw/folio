import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Portfolio',
  description: 'View my portfolio of work and case studies',
};

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 md:px-[180px] py-12">
      <h1 className="font-special-gothic text-5xl md:text-6xl text-[#474747] mb-8">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/work/quality-testing-audit-app" className="block hover:opacity-90 transition-opacity">
          <div className="border border-[#F2F4F5] rounded-2xl overflow-hidden bg-white p-4">
            <h2 className="font-special-gothic text-2xl text-[#212121] mb-2">
              Revolutionizing Quality Testing for Nike & Decathlon
            </h2>
            <p className="font-special-gothic text-[#474747]">
              UX Case Study exploring the redesign of pre-shipment audit processes
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
} 