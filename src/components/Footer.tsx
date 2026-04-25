"use client";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 9H10C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 20V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 15H4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 9H4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 15H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 9H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 2V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 20V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <span className="text-xl font-black tracking-tighter text-[#162456]">
                MAXTRON <span className="text-blue-600">AI AUDIT</span>
              </span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              The global standard for enterprise AI readiness auditing and strategic benchmarking.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row lg:justify-end gap-12 md:gap-24">
       
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-400 text-sm font-medium">
            © 2026 Maxtron AI Systems. All rights reserved.
          </div>
          
          <div className="flex items-center gap-10 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Linkedin</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
