"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, useScroll, useTransform } from "framer-motion";
import BenchmarkSection from "@/components/BenchmarkSection";
import PillarsSection from "@/components/PillarsSection";
import AuditFlowSection from "@/components/AuditFlowSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden scroll-smooth">
      
     
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100"
      >
        <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-8 md:px-16">
         
         
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30"
            >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 9H10C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 20V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15H4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9H4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 15H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 9H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 2V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 20V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </motion.div>
            <span className="text-sm md:text-base tracking-tight text-slate-900 uppercase font-black">
              MAXTRON <span className="text-[#2B7FFF]">AI AUDIT</span>
            </span>
          </div>

          
          <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-[12px] font-black text-slate-400 uppercase tracking-[0.15em]">
            <a href="#audit" className="relative transition-all hover:text-blue-600 group">
              The Audit
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </a>
            <a href="#dimensions" className="relative transition-all hover:text-blue-600 group">
              Dimensions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </a>
            <a href="#insights" className="relative transition-all hover:text-blue-600 group">
              Insights
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </a>
            <a href="#pricing" className="relative transition-all hover:text-blue-600 group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </a>
          </div>

      
          <div className="flex items-center gap-6 md:gap-10">
            {/* <button className="hidden xl:block text-[13px] font-bold text-[#1C398E] transition-colors hover:text-blue-600">
              Login
            </button> */}
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(21,93,252,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block rounded-xl bg-[#155DFC] px-5 md:px-8 py-2.5 md:py-3 text-[12px] font-black text-white uppercase tracking-wider"
            >
              Get Started
            </motion.button>
            

            <button 
              className="lg:hidden p-2 text-slate-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 w-full h-screen bg-white z-[100] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-20 md:h-24 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 9H10C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-lg tracking-tighter text-slate-900 uppercase font-black">
                    MAXTRON <span className="text-[#2B7FFF]">AI AUDIT</span>
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-900"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center px-8 gap-12">
                <div className="flex flex-col items-center gap-10">
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 * 0.1, duration: 0.5 }}
                    href="#audit" 
                    className="text-[16px] font-black text-slate-400 hover:text-blue-600 transition-all uppercase tracking-[0.4em]" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    The Audit
                  </motion.a>
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * 0.1, duration: 0.5 }}
                    href="#dimensions" 
                    className="text-[16px] font-black text-slate-400 hover:text-blue-600 transition-all uppercase tracking-[0.4em]" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dimensions
                  </motion.a>
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * 0.1, duration: 0.5 }}
                    href="#insights" 
                    className="text-[16px] font-black text-slate-400 hover:text-blue-600 transition-all uppercase tracking-[0.4em]" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Insights
                  </motion.a>
                  <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * 0.1, duration: 0.5 }}
                    href="#pricing" 
                    className="text-[16px] font-black text-slate-400 hover:text-blue-600 transition-all uppercase tracking-[0.4em]" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </motion.a>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full flex flex-col items-center gap-4 pt-12 border-t border-slate-100"
                >
                  {/* <button className="w-64 py-4 text-[12px] font-black text-[#1C398E] uppercase tracking-[0.2em] border border-slate-200 rounded-xl">
                    Login
                  </button> */}
                  <button className="w-64 py-4 text-[12px] font-black text-white bg-blue-600 uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-600/30">
                    Get Started
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      
      <main className="relative pt-40 pb-20 md:pt-72 md:pb-60 text-center">
        {/* Animated Background Blobs */}
        <motion.div 
          style={{ y: blobY1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[500px] md:w-[800px] md:h-[800px] rounded-full bg-blue-600/5 blur-[120px]" 
        />
        <motion.div 
          style={{ y: blobY2 }}
          className="absolute bottom-0 right-1/2 translate-x-1/2 -z-10 h-[600px] w-[600px] md:w-[900px] md:h-[900px] rounded-full bg-blue-400/5 blur-[150px]" 
        />
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 md:px-12"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
           
          
            <motion.div 
              variants={itemVariants}
              className="mb-10 md:mb-16 inline-flex items-center gap-3 rounded-full border border-blue-200/30 bg-blue-50/50 px-6 py-3 text-[11px] md:text-[12px] font-black text-blue-600 backdrop-blur-md uppercase tracking-[0.3em] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
             Audit v4.2 Now Live
            </motion.div>
            
        
            <motion.h1 
              variants={itemVariants}
              className="mb-8 md:mb-16 w-full max-w-7xl text-5xl sm:text-7xl md:text-[100px] lg:text-[130px] xl:text-[150px] font-black tracking-[-0.05em] text-[#162456] leading-[0.95] md:leading-[0.85] text-center"
            >
              Master Your <br className="hidden md:block" />
              <span className="text-blue-600 relative inline-block">
                AI Frontier
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-1 md:bottom-4 left-0 h-[6px] md:h-[12px] bg-blue-100/60 -z-10 rounded-full"
                />
              </span>
            </motion.h1>
            
          
            <motion.p 
              variants={itemVariants}
              className="mb-12 md:mb-20 max-w-3xl text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-relaxed text-slate-500/80 px-4 tracking-tight text-center mx-auto"
            >
             The definitive enterprise benchmark for AI readiness. Maxtron
provides a surgical audit of your infrastructure, culture, and ROI
potential.
            </motion.p>
            
        
            <motion.div variants={itemVariants}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 rounded-2xl bg-[#155DFC] px-10 md:px-16 py-5 md:py-7 text-lg md:text-xl font-black text-white shadow-[0_30px_60px_-15px_rgba(22,36,86,0.4)] transition-all hover:bg-blue-600 group"
              >
                Begin Audit
                <svg 
                  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-2"
                >
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

    
      <motion.div
        id="audit"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <BenchmarkSection />
      </motion.div>
      <motion.div
        id="dimensions"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <PillarsSection />
      </motion.div>
      <motion.div
        id="flow"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <AuditFlowSection />
      </motion.div>
      <motion.div
        id="insights"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <StatsSection />
      </motion.div>
      <motion.div
        id="pricing"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <CTASection />
      </motion.div>

      <Footer />
    </div>
  );
}
