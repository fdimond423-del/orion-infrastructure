import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, RefreshCw, Zap, TrendingUp, DollarSign, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const cycle = [
  {
    step: '01',
    title: 'Active U.S. Business Operations',
    desc: 'Generate strong liquidity and operating surplus from American commercial trade (Gas stations, C-stores, motels, franchise networks).'
  },
  {
    step: '02',
    title: 'Strategic Capital Allocation',
    desc: 'Protect active dollars from domestic inflation and saturated US markets by reserving surplus capital for high-growth structural equity.'
  },
  {
    step: '03',
    title: 'Forensic RERA Title Vetting in Gujarat',
    desc: 'Our on-the-ground Indian legal desks conduct thorough 30-year RERA title audits, zoning checks, and tenancy vetting across GIFT City & Ahmedabad.'
  },
  {
    step: '04',
    title: 'Sovereign Deed Execution & NRE/NRO Setup',
    desc: 'Attorney-assisted direct deed recording via clear foreign currency banking pathways ensuring 0% legal ambiguity.'
  },
  {
    step: '05',
    title: 'Perpetual Compounding & Dollar Repatriation',
    desc: 'Receive reliable, high-yield rental returns and capitalized multi-x property equity with uninterrupted repatriation back to US accounts.'
  }
];

export function Model() {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Progressive Flywheel Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>SOVEREIGN COMPOUNDING PHILOSOPHY</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1128] tracking-tight mb-6">
                The Orion Wealth <span className="text-[#007CDC]">Engine Model</span>
              </h2>
              <p className="text-lg text-slate-600 font-normal leading-relaxed">
                A systematically engineered continuous wealth lifecycle. We convert highly demanding active income in America into passive, sovereign institutional assets in India—building multi-generational financial freedom.
              </p>
            </div>
            
            <div className="space-y-4">
              {cycle.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex items-start gap-5 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#007CDC] group-hover:bg-[#0A1128] group-hover:text-white flex items-center justify-center font-mono font-black text-base shrink-0 transition-colors shadow-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#0A1128] mb-1.5 group-hover:text-[#007CDC] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#007CDC] group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/strategy"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1128] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#007CDC] transition-all shadow-md"
              >
                <span>EXPLORE TECHNICAL STRATEGY FRAMEWORK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Luxury Obsidian Command Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-[#0A1128] rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-[0_25px_60px_-15px_rgba(10,17,40,0.4)] text-white relative overflow-hidden">
              
              {/* Radial Interior Light */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/20 rounded-full blur-[90px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                
                {/* Orbital Badge */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#007CDC] via-blue-600 to-emerald-500 p-[2px] shadow-2xl">
                  <div className="w-full h-full bg-[#0A1128] rounded-3xl flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-emerald-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.3em]">
                    ONE TRADE 360 APEX
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Institutional Flywheel Compounding
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    Designed by NRI asset management directors to eliminate cross-border friction, real estate scams, and currency devaluation risks.
                  </p>
                </div>

                <div className="w-full h-px bg-slate-800/80" />

                {/* Key Metrics Grid */}
                <div className="w-full grid grid-cols-2 gap-4 text-left font-mono">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                    <div className="text-[11px] text-slate-400 uppercase font-bold mb-1">LIQUIDITY SOURCE</div>
                    <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>USA Commercial</span>
                    </div>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                    <div className="text-[11px] text-slate-400 uppercase font-bold mb-1">TARGET YIELD</div>
                    <div className="text-sm font-extrabold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>8.5% - 12.5% p.a.</span>
                    </div>
                  </div>
                </div>

                {/* Trust Seal Footer */}
                <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 to-emerald-900/40 border border-blue-400/20 text-left flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#007CDC] shrink-0" />
                  <p className="text-[11px] text-slate-300 font-mono leading-snug">
                    <strong className="text-white font-bold">Attorney Guarantee:</strong> Complete title indemnity and encumbrance-free deed transfer.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
