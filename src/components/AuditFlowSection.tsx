"use client";

import { useState } from "react";

export default function AuditFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Architecture",
      description: "Deep analysis of your data pipelines and compute hierarchy.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      status: "SYSTEM_CHECK_INITIALIZED",
      previewTitle: "Architecture Analysis",
      previewSub: "Simulating real-time audit protocols across enterprise data centers.",
      progress: 88
    },
    {
      title: "Human Capital",
      description: "Skill mapping across engineering, product, and leadership.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      status: "TALENT_MAPPING_ACTIVE",
      previewTitle: "Human Capital Audit",
      previewSub: "Analyzing organizational velocity and skill redundancy.",
      progress: 45
    },
    {
      title: "Strategic Velocity",
      description: "Benchmarking deployment cycles and ROI potential.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      status: "VELOCITY_METRICS_SYNC",
      previewTitle: "ROI Simulation",
      previewSub: "Forecasting competitive advantage and market capture.",
      progress: 62
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-32">
          
          
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#162456] mb-6">
              Maxtron <span className="text-[#155DFC]">Audit Flow</span>
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 md:mb-12 lg:mb-16 max-w-md">
              A multi-stage diagnostic process designed to uncover hidden bottlenecks and amplify your competitive edge.
            </p>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div 
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-500 flex items-center gap-4 sm:gap-6 group ${
                    activeStep === idx 
                      ? "bg-blue-50/50 border-blue-600 shadow-xl shadow-blue-600/5" 
                      : "bg-white border-slate-100 hover:border-blue-200"
                  }`}
                >
                  <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all ${
                    activeStep === idx ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-400"
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold transition-colors ${activeStep === idx ? "text-[#162456]" : "text-slate-400"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm font-medium transition-colors ${activeStep === idx ? "text-slate-500" : "text-slate-300"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard Preview */}
          <div className="flex-1 w-full relative">
            {/* Window Container */}
            <div className="bg-[#0A1022] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-1 shadow-[0_50px_100px_rgba(10,16,34,0.3)] border border-white/5 relative overflow-hidden">
              
              {/* Traffic Lights */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-10 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>

            
              <div className="absolute top-6 right-6 sm:top-8 sm:right-10">
                <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/20">MAXTRON_ENGINE_V4.0</span>
              </div>

          
              <div className="pt-20 pb-16 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center">
                
             
                <div className="relative mb-12">
                  <div className="absolute inset-0 bg-blue-600 blur-[60px] opacity-20 scale-150" />
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 text-blue-500">
                    <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-400 mb-4 sm:mb-6">{steps[activeStep].status}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                  {steps[activeStep].previewTitle}
                </h3>
                <p className="text-white/40 font-medium leading-relaxed max-w-xs sm:max-w-sm text-sm sm:text-base">
                  {steps[activeStep].previewSub}
                </p>

              
                <div className="mt-12 sm:mt-16 md:mt-20 w-full">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/20">PROCESSING</span>
                    <span className="text-[10px] sm:text-xs font-black text-white/40">{steps[activeStep].progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                      style={{ width: `${steps[activeStep].progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

           
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] bg-blue-600/10 blur-[100px] sm:blur-[120px] rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
