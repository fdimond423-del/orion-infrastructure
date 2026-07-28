import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Luxury Outer Presentation Console */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0A1128] to-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Radial Lights */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
          
          {/* Subtle Texture Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Column: Business Focus & Niche Demographics */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-mono font-bold tracking-[0.25em] uppercase mb-6 shadow-sm"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#007CDC]" />
                  <span>GLOBAL BUSINESS SERVICE | ONE TRADE 360</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Channel U.S. Commercial Trade Into <span className="text-[#007CDC]">Sovereign Gujarat Growth</span>
                </h3>
                
                <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
                  We specialize in serving Non-Resident Indians operating demanding commercial enterprises in the United States. We eliminate cross-border friction, connecting active dollar cash flows into secure, passive multi-generational property suites in Gujarat.
                </p>
              </div>

              {/* USA Business Niche Tags */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>SPECIALIZED AMERICAN NRI ENTERPRISE FOCUS:</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {usBusinesses.map((biz, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-400 hover:bg-slate-800 transition-all shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#007CDC] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">{biz.name}</div>
                        <div className="text-[10px] font-mono text-slate-400">{biz.tag}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#007CDC] to-blue-600 hover:from-blue-600 hover:to-[#007CDC] text-white font-mono font-extrabold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(0,124,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>BOOK ONE TRADE 360 ADVISORY SESSION</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-300" />
                </Link>
              </div>

            </div>

            {/* Right Column: Interactive Flywheel Steps */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest pb-2 border-b border-slate-800">
                ONE TRADE 360 EXECUTION PROTOCOL
              </div>
              
              {steps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-blue-400/50 transition-all shadow-sm group cursor-pointer"
                >
                  <div className="text-2xl font-mono font-black text-[#007CDC] group-hover:text-emerald-400 w-10 shrink-0 pt-0.5 transition-colors">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <div className="text-white font-serif font-bold text-lg group-hover:text-blue-200 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#007CDC] transition-all" />
                    </div>
                    <div className="text-xs font-normal text-slate-400 leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
