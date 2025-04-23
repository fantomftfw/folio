'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';

export default function QualityTestingCaseStudy() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInStaggered = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  });

  // Function to handle back button click - scroll to work section
  const handleBackToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navigate to the home page
    window.location.href = '/#work';
  };

  return (
    <div className="min-h-screen pb-24 font-red-hat" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
      {/* Navbar */}
      <Navbar />
      
      {/* Back Button */}
      <div className="w-full bg-gradient-to-r from-[#FAFAFA] to-[#F5F5F5] px-4 md:px-[180px] py-6">
        <div className="max-w-6xl mx-auto">
          <a 
            href="/#work" 
            onClick={handleBackToWork}
            className="inline-flex items-center gap-2 text-[#474747] hover:text-[#FF8A65] transition-colors font-special-gothic bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-[#F2F4F5] shadow-sm"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to work
          </a>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        {/* Background Gradient with Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#F0F4F8] to-[#EDF2F7] opacity-80 z-0"></div>
        <div className="absolute inset-0 bg-[url('/public/grid-pattern.svg')] bg-repeat opacity-5 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-gradient-to-br from-[#8BDEDA]/20 to-[#43ADD0]/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 bg-gradient-to-tr from-[#E17DC2]/10 to-[#998EE0]/10 rounded-full blur-3xl z-0"></div>
        
        {/* Content Container */}
        <div className="relative z-10 pt-12 pb-20 px-4 md:px-[180px]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-7 z-10">
                <motion.span 
                  {...fadeIn}
                  className="inline-block mb-6 px-4 py-1.5 bg-gradient-to-r from-[#FF8A65]/20 to-[#FF8A65]/10 text-[#FF8A65] rounded-full font-special-gothic text-sm shadow-sm"
                  style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
                >
                  UX CASE STUDY
                </motion.span>
                
                <motion.h1 
                  {...fadeInStaggered(0.1)}
                  className="font-special-gothic text-4xl md:text-6xl text-[#212121] mb-8 leading-tight"
                  style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
                >
                  Revolutionizing Quality Testing for Nike & Decathlon
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-[#474747] font-red-hat mb-10 max-w-xl"
                >
                  Concept, Design, and Development. All-in-one.
                </motion.p>
              </div>
              
              {/* Right Column - Metadata & Visual */}
              <div className="lg:col-span-5 z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50"
                >
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h2 className="text-sm text-[#474747] font-special-gothic mb-2" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>CLIENT</h2>
                      <p className="text-lg text-[#212121] font-red-hat">Nike, Decathlon footwear</p>
                    </div>
                    
                    <div>
                      <h2 className="text-sm text-[#474747] font-special-gothic mb-2" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>MY ROLE</h2>
                      <p className="text-lg text-[#212121] font-red-hat">UX Research & Documentation, Wireframing and prototyping, Usability Testing</p>
                    </div>
                    
                    <div>
                      <h2 className="text-sm text-[#474747] font-special-gothic mb-2" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>TIMELINE</h2>
                      <p className="text-lg text-[#212121] font-red-hat">January 2022 - September 2022</p>
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FF8A65] to-[#FF5722] rounded-full opacity-20"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="w-full bg-white py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Challenge
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-red-hat mb-8"
          >
            In the world of footwear and apparel manufacturing, brands like Nike and Decathlon outsource production to factories across India, China, Vietnam, and Bangladesh. Before shipping goods to these brands, a pre-shipment audit is conducted to ensure adherence to quality standards. However, this process was manual, time-consuming, and error-prone—relying heavily on pen, paper, and Excel sheets.
          </motion.p>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full bg-[#F9FAFB] py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Results
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-red-hat mb-8"
          >
            The Audit App significantly improved the efficiency and accuracy of pre-shipment audits. It reduced inspection time by 40%, minimized re-audits by 25%, and enhanced data accuracy by 30%, leading to fewer errors and stronger trust between brands and factories. With an 85% adoption rate within the first three months, the app quickly became an essential tool for auditors, streamlining their workflows and ensuring 100% digital traceability of audit reports.
          </motion.p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="w-full bg-gradient-to-br from-[#FAFAFA] to-[#F5F8FA] py-24 px-4 md:px-[180px]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-5xl text-[#212121] mb-16 text-center"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Impact
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
            {/* Metric 1 - Circular Progress */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-8">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                
                {/* Progress Circle - 25% */}
                <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none" stroke="#F0F0F0" strokeWidth="8"
                  />
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none" stroke="#FF8A65" strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset={282.7 * (1 - 0.25)} // 25% progress
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-special-gothic text-[#FF8A65] text-5xl" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>25%</h3>
                </div>
              </div>
              <span className="text-center font-red-hat text-lg text-[#474747] max-w-[12rem]">Reduced re-audits</span>
            </motion.div>
            
            {/* Metric 2 - Circular Progress */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-8">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                
                {/* Progress Circle - 40% */}
                <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none" stroke="#F0F0F0" strokeWidth="8"
                  />
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none" stroke="#43ADD0" strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset={282.7 * (1 - 0.40)} // 40% progress
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-special-gothic text-[#43ADD0] text-5xl" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>40%</h3>
                </div>
              </div>
              <span className="text-center font-red-hat text-lg text-[#474747] max-w-[12rem]">Decrease in audit times</span>
            </motion.div>
            
            {/* Metric 3 - Circular Progress */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-8">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                
                {/* Progress Circle - 78% */}
                <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none" stroke="#F0F0F0" strokeWidth="8"
                  />
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none" stroke="#998EE0" strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset={282.7 * (1 - 0.78)} // 78% progress
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-special-gothic text-[#998EE0] text-5xl" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>78%</h3>
                </div>
              </div>
              <span className="text-center font-red-hat text-lg text-[#474747] max-w-[12rem]">CSAT scores within 2 months</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Understanding the Problem */}
      <div className="w-full bg-white py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Understanding the Problem
          </motion.h2>
          
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>Challenges for Auditors</h3>
              <p className="text-lg text-[#474747] font-red-hat mb-4">
                Auditors had to manually extract lot sizes and product types from purchase orders, a process that was tedious and error-prone. Each product required different quality checks, making it difficult to track manually. Since audits were often recorded using pen, paper, or spreadsheets, referencing past inspections was cumbersome. Even though barcodes were printed on product containers, auditors couldn't use them efficiently, increasing their workload. Large sample sizes further exhausted auditors, leading to human errors and inconsistencies in reporting.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>Lack of Transparency for Brands</h3>
              <p className="text-lg text-[#474747] font-red-hat mb-4">
                Brands faced major challenges in maintaining consistency across audits. Without a standardized digital system, different auditors followed varied procedures, leading to discrepancies in quality reporting. This lack of a single source of truth resulted in trust issues between brands and auditors. Additionally, manual data entry introduced the risk of human errors, making quality control subjective and unreliable.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>Financial Losses for Factories</h3>
              <p className="text-lg text-[#474747] font-red-hat mb-4">
                Failed audits led to costly re-manufacturing and shipment delays. Without real-time feedback, factories struggled to identify and address quality issues proactively. The absence of traceability made problem-solving reactive rather than preventive, increasing inefficiencies and operational costs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Design Goals */}
      <div className="w-full bg-[#FAFAFA] py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Design Goals
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-red-hat mb-8"
          >
            My main objective was to automate repetitive tasks and make the audit process more efficient. To achieve this, I focused on:
          </motion.p>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] font-special-gothic">
                1
              </div>
              <p className="text-lg text-[#474747] font-red-hat pt-1">
                Creating a centralized database of products, inspection tests, and sampling criteria
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] font-special-gothic">
                2
              </div>
              <p className="text-lg text-[#474747] font-red-hat pt-1">
                Integrating purchase orders into the app to auto-suggest relevant tests
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] font-special-gothic">
                3
              </div>
              <p className="text-lg text-[#474747] font-red-hat pt-1">
                Enabling barcode scanning to fetch product details instantly
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] font-special-gothic">
                4
              </div>
              <p className="text-lg text-[#474747] font-red-hat pt-1">
                Allowing photo and video capture for real-time documentation
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] font-special-gothic">
                5
              </div>
              <p className="text-lg text-[#474747] font-red-hat pt-1">
                Generating audit reports automatically and sharing them instantly with all stakeholders
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Understanding the Audit Industry Section */}
      <div className="w-full bg-white py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Understanding the Audit Industry
          </motion.h2>
          
          <div className="space-y-16">
            {/* Introduction Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#43ADD0]"
            >
              <h3 className="font-bold text-xl text-[#212121] mb-4">Research & Observation</h3>
              
              <p className="text-[#474747] font-red-hat leading-relaxed mb-8">
                Conducted extensive research, including stakeholder interviews, contextual inquiries, and factory visits to observe auditors in action. I gathered insights into their daily challenges, workflows, and decision-making processes, which helped shape the design of the app.
              </p>

              {/* Space for image */}
              <div className="aspect-[16/9] rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400">Tablet screenshot: Research & Observation</span>
              </div>
            </motion.div>
            
            {/* Strategy Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#43ADD0]"
            >
              <h3 className="font-bold text-xl text-[#212121] mb-4">Handling Complex Product Standards</h3>
              
              <p className="text-[#474747] font-red-hat leading-relaxed mb-8">
                Designed a dynamic system where each product type had a pre-configured set of tests and criteria, eliminating the need for auditors to remember them manually. This ensured audits were standardized, accurate, and easy to conduct.
              </p>

              {/* Space for image */}
              <div className="aspect-[16/9] rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400">Tablet screenshot: Product Standards Interface</span>
              </div>
            </motion.div>
            
            {/* Strategy Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#43ADD0]"
            >
              <h3 className="font-bold text-xl text-[#212121] mb-4">Ensuring Transparency in the Audit Process</h3>
              
              <p className="text-[#474747] font-red-hat leading-relaxed mb-8">
                Introduced real-time photo/video capture and standardized digital reports, creating a verifiable audit trail. This increased accountability, improved trust, and reduced disputes between factories, auditors, and brands.
              </p>

              {/* Space for image */}
              <div className="aspect-[16/9] rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400">Tablet screenshot: Documentation & Reporting</span>
              </div>
            </motion.div>
            
            {/* Strategy Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#43ADD0]"
            >
              <h3 className="font-bold text-xl text-[#212121] mb-4">Simplifying the UI Despite a Complex Backend</h3>
              
              <p className="text-[#474747] font-red-hat leading-relaxed mb-8">
                Followed an intuitive, step-by-step process flow, reducing cognitive load for auditors. By structuring tasks logically and minimizing unnecessary actions, the app ensured a smooth and effortless user experience.
              </p>

              {/* Space for image */}
              <div className="aspect-[16/9] rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400">Tablet screenshot: Simplified UI Workflow</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Research & Design Process */}
      <div className="w-full bg-[#F9FAFB] py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Research & Design Process
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <h3 className="font-bold text-xl text-[#212121] mb-4">1. Research Phase</h3>
                <p className="text-[#474747] font-red-hat mb-3">
                  Since competitor insights were limited, I focused on primary research:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-red-hat">
                  <li>Conducted interviews with auditors, factory managers, and brand representatives.</li>
                  <li>Studied audit documents to understand process intricacies.</li>
                  <li>Shadowed auditors on-site to see real-world challenges firsthand.</li>
                </ul>
              </div>
              
              {/* Step 2 */}
              <div>
                <h3 className="font-bold text-xl text-[#212121] mb-4">2. Defining User Flows & Wireframing</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-red-hat">
                  <li>Mapped out user journeys for different audit scenarios.</li>
                  <li>Designed low-fidelity wireframes, which were tested with actual auditors.</li>
                </ul>
              </div>
              
              {/* Step 3 */}
              <div>
                <h3 className="font-bold text-xl text-[#212121] mb-4">3. Usability Testing & Iteration</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-red-hat">
                  <li>Conducted multiple rounds of usability testing, refining UI based on feedback.</li>
                  <li>Ensured that auditors could complete an audit with minimal training.</li>
                </ul>
              </div>
              
              {/* Step 4 */}
              <div>
                <h3 className="font-bold text-xl text-[#212121] mb-4">4. Writing User Stories & Acceptance Criteria</h3>
                <p className="text-[#474747] font-red-hat mb-3">
                  To bridge the gap between design and development:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-red-hat">
                  <li>Defined clear user stories for every feature.</li>
                  <li>Created acceptance criteria to ensure proper implementation.</li>
                </ul>
              </div>
            </div>
            
            {/* Single image placeholder for all content */}
            <div className="mt-10 aspect-[16/9] rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              <span className="text-gray-400">Design Process Documentation & Artifacts</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* The Outcome Section */}
      <div className="w-full bg-white py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            The Outcome
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-red-hat mb-8"
          >
            The Audit App significantly improved efficiency and accuracy in the pre-shipment audit process. The inspection time was reduced by 40%, allowing auditors to complete audits faster with fewer errors. The re-audit rate dropped by 25%, saving factories from unnecessary rework and losses.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-red-hat mb-8"
          >
            Additionally, audit report generation became 60% faster, enabling real-time visibility for all stakeholders. The user adoption rate reached 85% within three months, proving its ease of use. Digital traceability strengthened transparency, fostering better collaboration between brands, auditors, and factories.
          </motion.p>
        </div>
      </div>

      {/* Future Improvements */}
      <div className="w-full bg-[#FAFAFA] py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Future Improvements
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-red-hat mb-8"
          >
            If I had more time and resources, I would enhance the app with:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-red-hat text-[#474747]">
                AI-powered anomaly detection to flag potential quality issues automatically.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-red-hat text-[#474747]">
                Voice-to-text input for hands-free note-taking by auditors.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-red-hat text-[#474747]">
                Predictive analytics to help brands identify recurring quality issues.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-red-hat text-[#474747]">
                Multi-language support to accommodate auditors in different countries.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-red-hat text-[#474747]">
                Integration with factory ERP systems for seamless data exchange.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF8A65]/10 flex items-center justify-center text-[#FF8A65] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-red-hat text-[#474747]">
                Augmented Reality (AR) tutorials for training new auditors.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Back to Work */}
      <div className="w-full bg-[#FAFAFA] py-16 px-4 md:px-[180px] border-t border-[#F2F4F5]">
        <div className="max-w-5xl mx-auto">
          <a 
            href="/#work" 
            onClick={handleBackToWork}
            className="flex items-center gap-2 text-[#474747] hover:text-[#FF8A65] transition-colors font-special-gothic"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to work
          </a>
        </div>
      </div>
    </div>
  );
} 