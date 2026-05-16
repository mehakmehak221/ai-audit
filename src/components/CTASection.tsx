"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContactForm } from "@/context/ContactFormContext";
import { CALENDLY_URL } from "@/lib/constants";

export default function CTASection() {
  const { openForm } = useContactForm();
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-[#162456] overflow-hidden p-8 sm:p-12 md:p-24 text-center shadow-2xl"
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
            <motion.div 
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-[-20%] left-[-10%] w-[60%] sm:w-[50%] h-[100%] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px]" 
            />
            <motion.div 
              animate={{ 
                x: [0, -30, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute bottom-[-20%] right-[-10%] w-[60%] sm:w-[50%] h-[100%] bg-blue-400/10 rounded-full blur-[100px] sm:blur-[120px]" 
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-[1.1]"
            >
              Are you ready for the <br />
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-blue-400 italic"
              >
                next cycle?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-blue-100/70 text-base sm:text-lg md:text-xl font-medium mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join 500+ enterprises who have decoded their AI future with Maxtron. Get your board-ready report in under 15 minutes.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openForm}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#162456] font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-black/20"
              >
                Begin Free Audit
              </motion.button>
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all duration-300 text-center"
              >
                Book a Consultation
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
