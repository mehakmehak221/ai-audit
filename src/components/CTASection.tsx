"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] bg-[#162456] overflow-hidden p-12 md:p-24 text-center shadow-2xl"
        >
         
          <Image 
            src="/images/contactbg.png" 
            alt="Contact Background" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0" />

          
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-blue-400/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Are you ready for the <br />
              <span className="text-blue-400 italic">next cycle?</span>
            </h2>
            
            <p className="text-blue-100/70 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ enterprises who have decoded their AI future with Maxtron. Get your board-ready report in under 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#162456] font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-black/20">
                Begin Free Audit
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all duration-300">
                Consult Experts
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
