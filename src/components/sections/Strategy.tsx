import { motion } from 'framer-motion';
import { Shield, TrendingUp, RefreshCw, CheckCircle2, ArrowUpRight, Lock, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    num: 'PILLAR I',
    title: 'Capital Preservation & Title Indemnity',
    desc: 'We prioritize capital safety above all else. Every Gujarat real estate asset undergoes an exhaustive 30-year backward RERA title search and physical encumbrance audit before presentation.',
    icon: Shield,
    color: 'border-blue-200 bg-blue-50 text-[#007CDC]',
    bullets: [
      '30-Year non-encumbrance verification',
      'Direct government RERA registration',
      'Attorney-vetted tenancy agreements'
    ]
  },
  {
    num: 'PILLAR II',
    title: 'High-Yield Compounding & Growth Apex',
    desc: 'We focus exclusively on Grade-A commercial corridors in Gandhinagar GIFT City, Dholera SIR, and Ahmedabad where institutional investments generate reliable cash yields and superior appreciation.',
    icon: TrendingUp,
    color: 'border-emerald-200 bg-emerald-50 text-emerald-600',
    bullets: [
      '8.5% to 12.5% pre-leased commercial yields',
      'Triple-net corporate lease structures',
      'Infrastructure-led land appreciation'
    ]
  },
  {
    num: 'PILLAR III',
    title: 'Fiduciary Repatriation & USD Liquidity',
    desc: 'Cross-border investments must remain fully liquid. Our dedicated accounting and banking desks establish compliant NRE/NRO remittance routes for unimpeded capital and profit repatriation to USA bank accounts.',
    icon: RefreshCw,
    color: 'border-amber-200 bg-amber-50 text-amber-600',
    bullets: [
      'Direct RBI compliant repatriation protocols',
      'Double taxation avoidance advisory (DTAA)',
      'Seamless NRE/NRO banking administration'
    ]
  }
];

export function Strategy() {
  return (
    <section id="strategy" className="py-28 bg-white relative overflow-hidden border-b border-slate-200">
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
              <Briefcase className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL STRATEGIC FRAMEWORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1128] tracking-tight">
              Our Core Investment <span className="text-[#007CDC]">Strategy</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-lg md:text-right font-normal leading-relaxed">
            Engineered specifically to bridge operational American cash flows into secure, inflation-proof Indian infrastructural assets without legal ambiguity.
          </p>
        </div>

        {/* 3-Pillar Institutional Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,124,220,0.12)] hover:border-blue-400 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0A1128] font-mono font-extrabold text-xs tracking-wider shadow-xs">
                    {pillar.num}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform ${pillar.color}`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-4 group-hover:text-[#007CDC] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-sm font-normal leading-relaxed mb-8">
                  {pillar.desc}
                </p>
              </div>

              <div>
                <div className="pt-6 border-t border-slate-200 space-y-3">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    KEY STRATEGIC ADVANTAGES:
                  </div>
                  {pillar.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#007CDC] shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-extrabold text-[#007CDC] group-hover:text-[#0A1128] transition-colors">
                  <span>LEARN AUDIT PROTOCOLS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <Link
            to="/strategy"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1128] text-white font-mono font-extrabold text-xs uppercase tracking-widest hover:bg-[#007CDC] transition-all shadow-lg duration-300"
          >
            <span>REVIEW DETAILED RERA & LEGAL COMPLIANCE DOSSIER</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
