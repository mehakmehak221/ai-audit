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
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
     
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100"
      >
        <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-6 md:px-12">
         
         
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 9H10C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <span className="text-lg md:text-xl tracking-tighter text-slate-900 uppercase font-black">
              MAXTRON <span className="text-[#2B7FFF]">AI AUDIT</span>
            </span>
          </div>

          
          <div className="hidden lg:flex items-center gap-10 xl:gap-12 text-[13px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {["The Audit", "Dimensions", "Insights", "Pricing"].map((item) => (
              <a key={item} href="#" className="relative transition-all hover:text-blue-600 group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

      
          <div className="flex items-center gap-4 md:gap-8">
            <button className="hidden text-[15px] font-bold text-[#1C398E] transition-colors hover:text-blue-600 sm:block">
              Login
            </button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(21,93,252,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block rounded-xl bg-[#155DFC] px-6 md:px-10 py-3 md:py-4 text-[14px] font-black text-white uppercase tracking-widest"
            >
              Get Started
            </motion.button>
            

            <button 
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
            >
              <div className="py-10 px-6 flex flex-col gap-8">
                {["The Audit", "Dimensions", "Insights", "Pricing"].map((item) => (
                  <a key={item} href="#" className="text-2xl font-black text-slate-900 uppercase tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>{item}</a>
                ))}
                <hr className="border-slate-100" />
                <div className="flex flex-col gap-4">
                  <button className="w-full py-5 text-lg font-black text-[#1C398E] border-2 border-[#1C398E]/10 rounded-2xl">Login</button>
                  <button className="w-full py-5 text-lg font-black text-white bg-[#155DFC] rounded-2xl shadow-xl shadow-blue-600/20">Get Started</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      
      <main className="relative pt-40 pb-20 md:pt-72 md:pb-60 text-center">
        {/* Animated Background Blobs */}
        <motion.div 
          style={{ y: blobY1 }}
          className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" 
        />
        <motion.div 
          style={{ y: blobY2 }}
          className="absolute bottom-0 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-blue-400/5 blur-[150px]" 
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
              className="mb-8 md:mb-16 max-w-7xl text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-[-0.05em] text-[#162456] leading-[0.9] md:leading-[0.85]"
            >
              Master Your <br className="hidden md:block" />
              <span className="text-blue-600 relative inline-block">
                AI Frontier
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-4 left-0 h-[8px] md:h-[12px] bg-blue-100/50 -z-10 rounded-full"
                />
              </span>
            </motion.h1>
            
          
            <motion.p 
              variants={itemVariants}
              className="mb-12 md:mb-20 max-w-4xl text-[18px] sm:text-[22px] md:text-[28px] font-medium leading-relaxed text-slate-400 px-4 tracking-tight"
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

      {/* Sections with enhanced reveals */}
      {[
        { comp: BenchmarkSection, key: "benchmark" },
        { comp: PillarsSection, key: "pillars" },
        { comp: AuditFlowSection, key: "flow" },
        { comp: StatsSection, key: "stats" },
        { comp: CTASection, key: "cta" }
      ].map(({ comp: Comp, key }) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Comp />
        </motion.div>
      ))}

      <Footer />
    </div>
  );
}
