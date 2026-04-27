"use client";

import Image from "next/image";
import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function BenchmarkSection() {
  const [count, setCount] = useState(0);
  const [particles, setParticles] = useState<Array<{left: number; top: number; duration: number; delay: number}>>([]);
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Mouse Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  useEffect(() => {
    setIsClient(true);
    
    // Generate deterministic particles
    const newParticles = [...Array(6)].map((_, i) => ({
      left: (i * 16.66) % 100,
      top: ((i * 20) + 10) % 100,
      duration: 5 + (i % 3) * 2,
      delay: i * 0.8
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      let start = 0;
      const end = 72;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const counter = setInterval(() => {
        start += 1;
        if (start > end) {
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, stepTime);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section ref={sectionRef} className="pb-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: "preserve-3d"
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] border border-slate-100 bg-white/80 backdrop-blur-3xl overflow-hidden p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row gap-12 lg:gap-24 group/card cursor-default"
        >
          {/* Advanced Background Decorations */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -45, 0],
              x: [0, -30, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
          />
          
          {/* Floating Particles */}
          {isClient && particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full pointer-events-none"
              animate={{
                y: [0, -100, 0],
                x: [0, (i % 3) * 20 - 20, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
            />
          ))}
          
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute top-0 right-0 w-1/2 h-full -z-10 pointer-events-none opacity-20"
          >
             <Image 
              src="/benchmark.png" 
              alt="" 
              fill 
              className="object-contain object-right" 
              priority
            />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center lg:items-start flex-1">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-600 mb-10"
            >
              Current Benchmark
            </motion.span>
            
            <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 mb-10 group">
               {/* Pulsing Outer Glow */}
               <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl"
              />

              <svg className="w-full h-full -rotate-90 transform relative z-10" viewBox="0 0 160 160">
                <circle
                  cx="80" cy="80" r="70"
                  fill="transparent"
                  stroke="#F1F5F9"
                  strokeWidth="12"
                />
                <motion.circle
                  cx="80" cy="80" r="70"
                  fill="transparent"
                  stroke="#2563EB"
                  strokeWidth="12"
                  strokeDasharray="440"
                  initial={{ strokeDashoffset: 440 }}
                  whileInView={{ strokeDashoffset: 440 - (440 * 0.72) }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
                  viewport={{ once: true }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-8xl md:text-9xl font-black text-[#162456] tracking-tighter leading-none"
                >
                  {count}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-sm font-black uppercase tracking-widest text-blue-600 mt-[-5px]"
                >
                  Score
                </motion.span>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-50/50 border border-blue-100 px-6 py-4 text-sm font-bold text-blue-700 shadow-sm"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </motion.div>
              +12% Above Industry Average
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-[1.2] flex flex-col gap-6 justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Data Integrity", value: "88%", color: "#2563EB", delay: 0.1 },
                { label: "Compute Logic", value: "64%", color: "#3B82F6", delay: 0.2 },
                { label: "Talent Density", value: "92%", color: "#4F46E5", delay: 0.3 },
                { label: "Compliance", value: "76%", color: "#0EA5E9", delay: 0.4 }
              ].map((metric, i) => (
                <motion.div 
                  key={metric.label} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white/50 backdrop-blur-sm border border-slate-100 p-6 rounded-3xl transition-all duration-300 shadow-sm"
                >
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{metric.label}</span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 + (i * 0.2) }}
                      className="text-2xl font-black text-[#162456] tabular-nums"
                    >
                      {metric.value}
                    </motion.span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: metric.value }}
                      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 + metric.delay }}
                      viewport={{ once: true }}
                      className="h-full rounded-full relative overflow-hidden" 
                      style={{ backgroundColor: metric.color }}
                    >
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 bg-[#162456] p-8 rounded-[2.5rem] text-white flex justify-between items-center group cursor-pointer hover:bg-[#1A367F] transition-all shadow-xl shadow-blue-900/10 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#1C398E] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="flex flex-col gap-1.5 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-300/80">Recommendation</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight">Scaling Infrastructure Phase 2</span>
              </div>
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
