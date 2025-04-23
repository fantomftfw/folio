import React from 'react';

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main 
      className="case-study-page font-special-gothic-regular fixed inset-0 h-screen w-full overflow-auto bg-[#FAFAFA]"
    >
      {children}
    </main>
  );
} 