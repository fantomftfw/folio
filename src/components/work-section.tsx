'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface WorkItemProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  index: number;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description, imageUrl, alt, index }) => {
  return (
    <motion.div 
      className="flex flex-col w-full border border-[#F2F4F5] rounded-2xl overflow-hidden bg-white p-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="w-full h-48 relative mb-3 rounded-lg overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        <h3 className="font-special-gothic text-xl text-[#212121] leading-tight">
          {title}
        </h3>
        <p className="font-special-gothic text-base text-[#474747] leading-snug" style={{ fontFamily: 'Special Gothic' }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const workItems = [
    {
      title: 'MentorX - a personal AI mentor',
      description: 'A product design project of StoaMBA sting. Turnred out to be ahusd oahsfa oahsofhaos oahsof oahsfoao',
      imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=500&auto=format&fit=crop',
      alt: 'MentorX project - colorful abstract pattern'
    },
    {
      title: 'MentorX - a personal AI mentor',
      description: 'A product design project of StoaMBA sting. Turnred out to be ahusd oahsfa oahsofhaos oahsof oahsfoao',
      imageUrl: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=500&auto=format&fit=crop',
      alt: 'MentorX project - colorful gradient'
    },
    {
      title: 'MentorX - a personal AI mentor',
      description: 'A product design project of StoaMBA sting. Turnred out to be ahusd oahsfa oahsofhaos oahsof oahsfoao',
      imageUrl: 'https://images.unsplash.com/photo-1575909812264-6902b55846ad?q=80&w=500&auto=format&fit=crop',
      alt: 'MentorX project - abstract pattern'
    },
    {
      title: 'MentorX - a personal AI mentor',
      description: 'A product design project of StoaMBA sting. Turnred out to be ahusd oahsfa oahsofhaos oahsof oahsfoao',
      imageUrl: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=500&auto=format&fit=crop',
      alt: 'MentorX project - colorful fluid pattern'
    }
  ];

  return (
    <motion.section 
      className="w-full flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-special-gothic text-5xl md:text-6xl text-[#474747] leading-tight">
        My work
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workItems.map((item, index) => (
          <WorkItem 
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            alt={item.alt}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default WorkSection; 