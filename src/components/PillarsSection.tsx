"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function PillarsSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F8FAFC]">
      <div className="container mx-auto max-w-7xl">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 block">Pillars of Excellence</span>
            <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-[#162456] leading-[1.1]">
              Architecting the <span className="text-[#155DFC] relative inline-block">
                AI-First
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="absolute bottom-1 left-0 h-[4px] bg-blue-100 -z-10" 
                />
              </span> Enterprise.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-xs text-slate-500 font-medium leading-relaxed pb-2"
          >
            Our audit framework covers every vector of AI maturity, from raw compute to cultural readiness.
          </motion.p>
        </div>

    
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="md:col-span-7 relative rounded-[3rem] overflow-hidden group shadow-2xl shadow-slate-200/50 min-h-[400px] bg-[#162456]"
          >
            <Image 
              src="/enterprise.png" 
              alt="Enterprise Infrastructure" 
              fill
              className="object-cover inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#162456]/95 via-[#162456]/30 to-transparent" />
            <div className="absolute inset-0 p-10 pb-12 flex flex-col justify-between z-10">
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                </svg>
              </motion.div>
              <div className="max-w-md">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Enterprise Infrastructure</h3>
                <p className="text-white/80 font-medium leading-relaxed text-sm md:text-base">
                  Scaling data pipelines for massive LLM integration and compute-heavy workflows.
                </p>
              </div>
            </div>
          </motion.div>

        
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="md:col-span-5 bg-[#1C398E] rounded-[3rem] p-10 flex flex-col justify-between group hover:bg-[#155DFC] transition-all duration-500 shadow-2xl shadow-blue-900/10 min-h-[400px]"
          >
            <motion.div 
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </motion.div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Governance & Risk</h3>
              <p className="text-white/70 font-medium leading-relaxed text-sm md:text-base">
                Military-grade compliance audit for AI ethics, data privacy, and IP protection.
              </p>
            </div>
          </motion.div>

          
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="md:col-span-4 bg-white border border-slate-100 rounded-[3rem] p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 group min-h-[400px]"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </motion.div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#162456] mb-4 tracking-tight">Talent Density</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                Evaluating your team's ability to ship AI products versus just consuming them.
              </p>
            </div>
          </motion.div>

         
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="md:col-span-8 relative border border-slate-100 rounded-[3rem] overflow-hidden group shadow-2xl shadow-blue-600/20 min-h-[400px]"
          >
            <Image 
              src="/deploymentbg.png" 
              alt="Deployment Velocity Background" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-900/10 transition-colors group-hover:bg-blue-900/0" />
            
            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
              <motion.div 
                animate={{ x: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </motion.div>
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Deployment Velocity</h3>
                <p className="text-white/80 font-medium leading-relaxed text-sm md:text-lg max-w-sm">
                  From concept to production. We measure how fast your organization can turn models into money.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
