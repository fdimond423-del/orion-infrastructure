import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/ScrollReveal';

const usBusinesses = [
  { name: 'Gas Stations & Travel Plazas', tag: 'High Liquid Surplus' },
  { name: 'Convenience Store Chains', tag: 'Constant Cash Flow' },
  { name: 'Hospitality & Motels', tag: 'Long-Term Equity' },
  { name: 'Franchise Retail Networks', tag: 'Commercial Multiples' },
  { name: 'Enterprise Trade Syndicates', tag: 'Portfolio Diversification' }
];

const steps = [
  { step: '01', title: 'Compile US Surplus Cash Flow', desc: 'Identify operational surpluses from active American enterprises for high-yield foreign placement.' },
  { step: '02', title: 'Vetted Commercial Syndication', desc: 'Allocate funds directly into Grade-A pre-leased corporate towers and smart commercial nodes in Gujarat.' },
  { step: '03', title: 'Zero Encumbrance Recording', desc: 'Senior Indian High Court property attorneys ensure clean titles, clear RERA deeds, and direct banking integration.' },
  { step: '04', title: 'Direct NRE/NRO Dollar Flow', desc: 'Effortless foreign currency profit repatriation back to American institutions with complete DTAA compliance.' }
];

export function BusinessServices() {
  return (
    <ScrollReveal>
<section className="py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Luxury Outer Presentation Console - Pure White Theme */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          
          {/* Ambient Radial Lights for subtle warmth/coolness */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Column: Business Focus & Niche Demographics */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-sans font-bold tracking-[0.25em] uppercase mb-6 shadow-sm"
                >
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  <span>GLOBAL BUSINESS SERVICE | ONE TRADE 360</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-5xl font-sans font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                  Channel U.S. Commercial Trade Into <span className="text-blue-600">Sovereign Gujarat Growth</span>
                </h3>
                
                <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                  We specialize in serving Non-Resident Indians operating demanding commercial enterprises in the United States. We eliminate cross-border friction, connecting active dollar cash flows into secure, passive multi-generational property suites in Gujarat.
                </p>
              </div>

              {/* USA Business Niche Tags */}
              <div className="space-y-3">
                <div className="text-xs font-sans text-emerald-600 font-extrabold tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>SPECIALIZED AMERICAN NRI ENTERPRISE FOCUS:</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {usBusinesses.map((biz, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all shadow-sm cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">{biz.name}</div>
                        <div className="text-[10px] font-sans text-slate-500 mt-0.5">{biz.tag}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-widest shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] transition-all transform hover:-translate-y-1"
                >
                  <span>BOOK ONE TRADE 360 ADVISORY SESSION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Column: Interactive Flywheel Steps */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="text-xs font-sans text-slate-500 font-bold tracking-widest pb-2 border-b border-slate-200">
                ONE TRADE 360 EXECUTION PROTOCOL
              </div>
              
              {steps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: -5 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm group cursor-pointer"
                >
                  <div className="text-2xl font-sans font-black text-blue-500 group-hover:text-emerald-500 w-10 shrink-0 pt-0.5 transition-colors">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-900 font-sans font-bold text-lg group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-blue-600 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="text-xs font-normal text-slate-500 leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
</ScrollReveal>
  );
}
