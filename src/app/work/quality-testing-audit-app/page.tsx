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
    <div className="min-h-screen pb-24">
      {/* Navbar */}
      <Navbar />
      
      {/* Back Button */}
      <div className="w-full bg-[#FAFAFA] px-4 md:px-[180px] py-6">
        <div className="max-w-5xl mx-auto">
          <a 
            href="/#work" 
            onClick={handleBackToWork}
            className="inline-flex items-center gap-2 text-[#474747] hover:text-[#FF8A65] transition-colors font-special-gothic bg-white px-4 py-2 rounded-lg border border-[#F2F4F5]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to work
          </a>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="w-full relative bg-[#FAFAFA] pt-6 pb-12 px-4 md:px-[180px]">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto"
        >
          <motion.span 
            {...fadeIn}
            className="inline-block mb-4 px-3 py-1 bg-[#FF8A65]/10 text-[#FF8A65] rounded-full font-special-gothic text-sm"
          >
            UX CASE STUDY
          </motion.span>
          
          <motion.h1 
            {...fadeInStaggered(0.1)}
            className="font-special-gothic text-4xl md:text-6xl text-[#212121] mb-8 leading-tight"
          >
            Revolutionizing Quality Testing for Nike & Decathlon
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div {...fadeInStaggered(0.2)}>
              <h2 className="text-sm text-[#474747] font-special-gothic mb-2">CLIENT</h2>
              <p className="text-lg text-[#212121] font-special-gothic">Nike, Decathlon footwear</p>
            </motion.div>
            <motion.div {...fadeInStaggered(0.3)}>
              <h2 className="text-sm text-[#474747] font-special-gothic mb-2">MY ROLE</h2>
              <p className="text-lg text-[#212121] font-special-gothic">UX Research & Documentation, Wireframing and prototyping, Usability Testing</p>
            </motion.div>
            <motion.div {...fadeInStaggered(0.4)}>
              <h2 className="text-sm text-[#474747] font-special-gothic mb-2">TIMELINE</h2>
              <p className="text-lg text-[#212121] font-special-gothic">January 2022 - September 2022</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Before-After Comparison */}
      <div className="w-full bg-white py-12 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="aspect-video relative bg-gray-100 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="font-special-gothic text-lg text-[#474747]">Before</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="aspect-video relative bg-gray-100 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="font-special-gothic text-lg text-[#474747]">After</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="w-full bg-[#FAFAFA] py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
          >
            Challenge
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-special-gothic mb-8 max-w-3xl"
          >
            In the world of footwear and apparel manufacturing, brands like Nike and Decathlon outsource production to factories across India, China, Vietnam, and Bangladesh. Before shipping goods to these brands, a pre-shipment audit is conducted to ensure adherence to quality standards. However, this process was manual, time-consuming, and error-prone—relying heavily on pen, paper, and Excel sheets.
          </motion.p>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full bg-white py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
          >
            Results
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-special-gothic mb-12 max-w-3xl"
          >
            The Audit App significantly improved the efficiency and accuracy of pre-shipment audits. It reduced inspection time by 40%, minimized re-audits by 25%, and enhanced data accuracy by 30%, leading to fewer errors and stronger trust between brands and factories. With an 85% adoption rate within the first three months, the app quickly became an essential tool for auditors, streamlining their workflows and ensuring 100% digital traceability of audit reports.
          </motion.p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="w-full bg-[#FAFAFA] py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
          >
            Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-[#F2F4F5]"
            >
              <h3 className="font-special-gothic text-[#FF8A65] text-4xl mb-2">25%</h3>
              <p className="font-special-gothic text-[#474747]">Reduced re-audits</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-[#F2F4F5]"
            >
              <h3 className="font-special-gothic text-[#FF8A65] text-4xl mb-2">40%</h3>
              <p className="font-special-gothic text-[#474747]">Decrease in audit times</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-[#F2F4F5]"
            >
              <h3 className="font-special-gothic text-[#FF8A65] text-4xl mb-2">78%</h3>
              <p className="font-special-gothic text-[#474747]">CSAT scores within 2 months</p>
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
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">Challenges for Auditors</h3>
              <p className="text-lg text-[#474747] font-special-gothic mb-4">
                Auditors had to manually extract lot sizes and product types from purchase orders, a process that was tedious and error-prone. Each product required different quality checks, making it difficult to track manually. Since audits were often recorded using pen, paper, or spreadsheets, referencing past inspections was cumbersome. Even though barcodes were printed on product containers, auditors couldn't use them efficiently, increasing their workload. Large sample sizes further exhausted auditors, leading to human errors and inconsistencies in reporting.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">Lack of Transparency for Brands</h3>
              <p className="text-lg text-[#474747] font-special-gothic mb-4">
                Brands faced major challenges in maintaining consistency across audits. Without a standardized digital system, different auditors followed varied procedures, leading to discrepancies in quality reporting. This lack of a single source of truth resulted in trust issues between brands and auditors. Additionally, manual data entry introduced the risk of human errors, making quality control subjective and unreliable.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">Financial Losses for Factories</h3>
              <p className="text-lg text-[#474747] font-special-gothic mb-4">
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
          >
            Design Goals
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-special-gothic mb-8"
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
              <p className="text-lg text-[#474747] font-special-gothic pt-1">
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
              <p className="text-lg text-[#474747] font-special-gothic pt-1">
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
              <p className="text-lg text-[#474747] font-special-gothic pt-1">
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
              <p className="text-lg text-[#474747] font-special-gothic pt-1">
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
              <p className="text-lg text-[#474747] font-special-gothic pt-1">
                Generating audit reports automatically and sharing them instantly with all stakeholders
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Research & Design Process */}
      <div className="w-full bg-white py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-12"
          >
            Research & Design Process
          </motion.h2>
          
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3">
                <h3 className="font-special-gothic text-xl text-[#212121] mb-2">1. Research Phase</h3>
              </div>
              <div className="md:col-span-9">
                <p className="text-lg text-[#474747] font-special-gothic mb-4">
                  Since competitor insights were limited, I focused on primary research:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-special-gothic">
                  <li>Conducted interviews with auditors, factory managers, and brand representatives.</li>
                  <li>Studied audit documents to understand process intricacies.</li>
                  <li>Shadowed auditors on-site to see real-world challenges firsthand.</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3">
                <h3 className="font-special-gothic text-xl text-[#212121] mb-2">2. Defining User Flows & Wireframing</h3>
              </div>
              <div className="md:col-span-9">
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-special-gothic">
                  <li>Mapped out user journeys for different audit scenarios.</li>
                  <li>Designed low-fidelity wireframes, which were tested with actual auditors.</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3">
                <h3 className="font-special-gothic text-xl text-[#212121] mb-2">3. Usability Testing & Iteration</h3>
              </div>
              <div className="md:col-span-9">
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-special-gothic">
                  <li>Conducted multiple rounds of usability testing, refining UI based on feedback.</li>
                  <li>Ensured that auditors could complete an audit with minimal training.</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3">
                <h3 className="font-special-gothic text-xl text-[#212121] mb-2">4. Writing User Stories & Acceptance Criteria</h3>
              </div>
              <div className="md:col-span-9">
                <p className="text-lg text-[#474747] font-special-gothic mb-4">
                  To bridge the gap between design and development:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#474747] font-special-gothic">
                  <li>Defined clear user stories for every feature.</li>
                  <li>Created acceptance criteria to ensure proper implementation.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Outcome */}
      <div className="w-full bg-[#FAFAFA] py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
          >
            The Outcome
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-special-gothic mb-8"
          >
            The Audit App significantly improved efficiency and accuracy in the pre-shipment audit process. The inspection time was reduced by 40%, allowing auditors to complete audits faster with fewer errors. The re-audit rate dropped by 25%, saving factories from unnecessary rework and losses.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-special-gothic mb-8"
          >
            Additionally, audit report generation became 60% faster, enabling real-time visibility for all stakeholders. The user adoption rate reached 85% within three months, proving its ease of use. Digital traceability strengthened transparency, fostering better collaboration between brands, auditors, and factories.
          </motion.p>
        </div>
      </div>

      {/* Future Improvements */}
      <div className="w-full bg-white py-16 px-4 md:px-[180px]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-8"
          >
            Future Improvements
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#474747] font-special-gothic mb-8"
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
              <p className="font-special-gothic text-[#474747]">
                AI-powered anomaly detection to flag potential quality issues automatically
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
              <p className="font-special-gothic text-[#474747]">
                Voice-to-text input for hands-free note-taking by auditors
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
              <p className="font-special-gothic text-[#474747]">
                Predictive analytics to help brands identify recurring quality issues
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
              <p className="font-special-gothic text-[#474747]">
                Multi-language support to accommodate auditors in different countries
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
              <p className="font-special-gothic text-[#474747]">
                Integration with factory ERP systems for seamless data exchange
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
              <p className="font-special-gothic text-[#474747]">
                Augmented Reality (AR) tutorials for training new auditors
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