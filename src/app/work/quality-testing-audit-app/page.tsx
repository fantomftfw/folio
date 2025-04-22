'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const QualityTestingCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="flex items-center gap-2 text-[#474747] font-special-gothic">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>
      </div>

      {/* Hero Section */}
      <section className="w-full py-20 px-4 md:px-[180px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[#474747] font-special-gothic text-lg">UX CASE STUDY</span>
          <h1 className="font-special-gothic text-4xl md:text-5xl text-[#212121] mt-4">
            Revolutionizing Quality Testing for Nike & Decathlon
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div>
            <h3 className="font-special-gothic text-xl text-[#474747]">CLIENT</h3>
            <p className="font-special-gothic text-lg">Nike, Decathlon footwear</p>
          </div>
          <div>
            <h3 className="font-special-gothic text-xl text-[#474747]">MY ROLE</h3>
            <p className="font-special-gothic text-lg">UX Research & Documentation, Wireframing and prototyping, Usability Testing</p>
          </div>
          <div>
            <h3 className="font-special-gothic text-xl text-[#474747]">TIMELINE</h3>
            <p className="font-special-gothic text-lg">January 2022 - September 2022</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16"
        >
          <Image
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2673&auto=format&fit=crop"
            alt="Before and after screenshots of the Quality Testing Audit App"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 bg-white py-2 px-4 rounded-full">
            <p className="font-special-gothic text-sm">Concept, Design, and Development. All-in-one.</p>
          </div>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="w-full py-12 px-4 md:px-[180px] bg-[#F6F9FC]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">Challenge</h2>
          <p className="font-special-gothic text-lg text-[#474747] max-w-4xl">
            In the world of footwear and apparel manufacturing, brands like Nike and Decathlon outsource production to 
            factories across India, China, Vietnam, and Bangladesh. Before shipping goods to these brands, a pre-shipment 
            audit is conducted to ensure adherence to quality standards. However, this process was manual, time-consuming, 
            and error-prone—relying heavily on pen, paper, and Excel sheets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">Results</h2>
          <p className="font-special-gothic text-lg text-[#474747] max-w-4xl mb-8">
            The Audit App significantly improved the efficiency and accuracy of pre-shipment audits. It reduced inspection 
            time by 40%, minimized re-audits by 25%, and enhanced data accuracy by 30%, leading to fewer errors and stronger 
            trust between brands and factories. With an 85% adoption rate within the first three months, the app quickly 
            became an essential tool for auditors, streamlining their workflows and ensuring 100% digital traceability of 
            audit reports.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#D5EFE5] p-6 rounded-2xl">
              <h3 className="font-special-gothic text-5xl text-[#212121] mb-2">25%</h3>
              <p className="font-special-gothic text-lg">Reduced re-audits</p>
            </div>
            <div className="bg-[#D5EFE5] p-6 rounded-2xl">
              <h3 className="font-special-gothic text-5xl text-[#212121] mb-2">40%</h3>
              <p className="font-special-gothic text-lg">Decrease in audit times</p>
            </div>
            <div className="bg-[#D5EFE5] p-6 rounded-2xl">
              <h3 className="font-special-gothic text-5xl text-[#212121] mb-2">78%</h3>
              <p className="font-special-gothic text-lg">CSAT scores within 2 months</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Understanding the Problem */}
      <section className="w-full py-12 px-4 md:px-[180px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">Understanding the Problem</h2>
          
          <div className="mb-8">
            <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">Challenges for Auditors</h3>
            <p className="font-special-gothic text-lg text-[#474747] max-w-4xl">
              Auditors had to manually extract lot sizes and product types from purchase orders, a process that was 
              tedious and error-prone. Each product required different quality checks, making it difficult to track 
              manually. Since audits were often recorded using pen, paper, or spreadsheets, referencing past inspections 
              was cumbersome. Even though barcodes were printed on product containers, auditors couldn't use them 
              efficiently, increasing their workload. Large sample sizes further exhausted auditors, leading to human 
              errors and inconsistencies in reporting.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">Lack of Transparency for Brands</h3>
            <p className="font-special-gothic text-lg text-[#474747] max-w-4xl">
              Brands faced major challenges in maintaining consistency across audits. Without a standardized digital 
              system, different auditors followed varied procedures, leading to discrepancies in quality reporting. 
              This lack of a single source of truth resulted in trust issues between brands and auditors. Additionally, 
              manual data entry introduced the risk of human errors, making quality control subjective and unreliable.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">Financial Losses for Factories</h3>
            <p className="font-special-gothic text-lg text-[#474747] max-w-4xl">
              Failed audits led to costly re-manufacturing and shipment delays. Without real-time feedback, factories 
              struggled to identify and address quality issues proactively. The absence of traceability made problem-solving 
              reactive rather than preventive, increasing inefficiencies and operational costs.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Design Goals */}
      <section className="w-full py-12 px-4 md:px-[180px] bg-[#F6F9FC]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">Design Goals</h2>
          <p className="font-special-gothic text-lg text-[#474747] max-w-4xl mb-8">
            My main objective was to automate repetitive tasks and make the audit process more efficient. To achieve this, I focused on:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-[#D5EFE5] h-10 w-10 flex items-center justify-center rounded-full text-xl font-bold">1</span>
                <p className="font-special-gothic text-lg text-[#212121]">Creating a centralized database of products, inspection tests, and sampling criteria</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-[#D5EFE5] h-10 w-10 flex items-center justify-center rounded-full text-xl font-bold">2</span>
                <p className="font-special-gothic text-lg text-[#212121]">Integrating purchase orders into the app to auto-suggest relevant tests</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-[#D5EFE5] h-10 w-10 flex items-center justify-center rounded-full text-xl font-bold">3</span>
                <p className="font-special-gothic text-lg text-[#212121]">Enabling barcode scanning to fetch product details instantly</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-[#D5EFE5] h-10 w-10 flex items-center justify-center rounded-full text-xl font-bold">4</span>
                <p className="font-special-gothic text-lg text-[#212121]">Allowing photo and video capture for real-time documentation</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-[#D5EFE5] h-10 w-10 flex items-center justify-center rounded-full text-xl font-bold">5</span>
                <p className="font-special-gothic text-lg text-[#212121]">Generating audit reports automatically and sharing them instantly with all stakeholders</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research & Design Process */}
      <section className="w-full py-12 px-4 md:px-[180px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">Research & Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">1. Research Phase</h3>
              <p className="font-special-gothic text-lg text-[#474747] mb-6">
                Since competitor insights were limited, I focused on primary research:
              </p>
              <ul className="list-disc pl-6 font-special-gothic text-lg text-[#474747] space-y-2">
                <li>Conducted interviews with auditors, factory managers, and brand representatives.</li>
                <li>Studied audit documents to understand process intricacies.</li>
                <li>Shadowed auditors on-site to see real-world challenges firsthand.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">2. Defining User Flows & Wireframing</h3>
              <p className="font-special-gothic text-lg text-[#474747] mb-6">
                Mapped out user journeys for different audit scenarios.
                Designed low-fidelity wireframes, which were tested with actual auditors.
              </p>
            </div>
            <div>
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">3. Usability Testing & Iteration</h3>
              <p className="font-special-gothic text-lg text-[#474747] mb-6">
                Conducted multiple rounds of usability testing, refining UI based on feedback.
                Ensured that auditors could complete an audit with minimal training.
              </p>
            </div>
            <div>
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">4. Writing User Stories & Acceptance Criteria</h3>
              <p className="font-special-gothic text-lg text-[#474747] mb-6">
                To bridge the gap between design and development:
              </p>
              <ul className="list-disc pl-6 font-special-gothic text-lg text-[#474747] space-y-2">
                <li>Defined clear user stories for every feature.</li>
                <li>Created acceptance criteria to ensure proper implementation.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Before/After Comparison */}
      <section className="w-full py-12 px-4 md:px-[180px] bg-[#F6F9FC]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">Before/After the Redesign</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F2E5E4] p-8 rounded-2xl">
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">Before</h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Process before redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="list-disc pl-6 font-special-gothic text-lg text-[#474747] space-y-2">
                <li>Manual data entry</li>
                <li>Paper-based processes</li>
                <li>Time-consuming audits</li>
                <li>High error rates</li>
              </ul>
            </div>
            <div className="bg-[#D5EFE5] p-8 rounded-2xl">
              <h3 className="font-special-gothic text-2xl text-[#212121] mb-4">After</h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                  alt="Process after redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="list-disc pl-6 font-special-gothic text-lg text-[#474747] space-y-2">
                <li>Digital data collection</li>
                <li>Barcode scanning</li>
                <li>Automated report generation</li>
                <li>Real-time photo documentation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Outcome */}
      <section className="w-full py-12 px-4 md:px-[180px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">The Outcome</h2>
          <p className="font-special-gothic text-lg text-[#474747] max-w-4xl mb-8">
            The Audit App significantly improved efficiency and accuracy in the pre-shipment audit process. The inspection 
            time was reduced by 40%, allowing auditors to complete audits faster with fewer errors. The re-audit rate 
            dropped by 25%, saving factories from unnecessary rework and losses.
          </p>
          <p className="font-special-gothic text-lg text-[#474747] max-w-4xl mb-8">
            Additionally, audit report generation became 60% faster, enabling real-time visibility for all stakeholders. 
            The user adoption rate reached 85% within three months, proving its ease of use. Digital traceability 
            strengthened transparency, fostering better collaboration between brands, auditors, and factories.
          </p>
        </motion.div>
      </section>

      {/* Future Improvements */}
      <section className="w-full py-12 px-4 md:px-[180px] bg-[#F6F9FC]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-special-gothic text-3xl md:text-4xl text-[#212121] mb-6">Future Improvements</h2>
          <p className="font-special-gothic text-lg text-[#474747] max-w-4xl mb-8">
            If I had more time and resources, I would enhance the app with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-special-gothic text-lg text-[#212121]">AI-powered anomaly detection to flag potential quality issues automatically</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-special-gothic text-lg text-[#212121]">Voice-to-text input for hands-free note-taking by auditors</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-special-gothic text-lg text-[#212121]">Predictive analytics to help brands identify recurring quality issues</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-special-gothic text-lg text-[#212121]">Multi-language support to accommodate auditors in different countries</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-special-gothic text-lg text-[#212121]">Integration with factory ERP systems for seamless data exchange</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-special-gothic text-lg text-[#212121]">Augmented Reality (AR) tutorials for training new auditors</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="w-full py-12 px-4 md:px-[180px] bg-[#212121] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-special-gothic text-3xl md:text-4xl mb-6">Let's Talk</h2>
          <p className="font-special-gothic text-lg mb-8">
            Have a similar project in mind? I'd love to hear about it.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-[#D5EFE5] text-[#212121] font-special-gothic text-lg py-3 px-8 rounded-full hover:bg-white transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QualityTestingCaseStudy; 