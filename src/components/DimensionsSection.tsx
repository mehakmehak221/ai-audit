"use client";

import { motion } from "framer-motion";

const dimensions = [
  {
    id: "01",
    title: "Data Integrity",
    description: "Deep-dive analysis of training data quality, bias detection, and lineage tracking for deterministic outcomes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "bg-blue-500",
  },
  {
    id: "02",
    title: "Model Security",
    description: "Stress-testing LLM endpoints against prompt injection, data exfiltration, and adversarial attacks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    color: "bg-indigo-500",
  },
  {
    id: "03",
    title: "Process Automation",
    description: "Measuring the efficiency gains from agentic workflows and identifying bottlenecks in human-in-the-loop systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    color: "bg-sky-500",
  },
  {
    id: "04",
    title: "Ethical Compliance",
    description: "Aligning AI deployments with global standards like EU AI Act and NIST frameworks for responsible innovation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    color: "bg-blue-600",
  }
];

export default function DimensionsSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F8FAFC]">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 block">The Audit Vectors</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#162456] mb-8 leading-[1.1]">
            Multi-Dimensional <br />
            <span className="text-[#155DFC]">Analysis Framework</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            We go beyond surface-level checks. Our proprietary audit engine evaluates your AI ecosystem across four critical vectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dimensions.map((dim, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
             
              <div className="absolute top-8 right-10 text-5xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500">
                {dim.id}
              </div>

              
              <div className={`h-16 w-16 rounded-2xl ${dim.color} flex items-center justify-center text-white mb-10 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500`}>
                {dim.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#162456] mb-6 tracking-tight">
                {dim.title}
              </h3>
              
              <p className="text-slate-500 font-medium leading-relaxed relative z-10">
                {dim.description}
              </p>

             
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 text-[#155DFC] font-bold text-lg group">
            Explore our methodology
            <svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
