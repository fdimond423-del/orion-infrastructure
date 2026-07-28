import { motion } from 'framer-motion';
import { Target, TrendingUp, Building2, Globe, CheckCircle2, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '4 Continents', label: 'Global NRI Network', desc: 'USA, Canada, UK & Australia Desks', icon: Globe },
  { value: '$500M+', label: 'Target Allocation', desc: 'Institutional Gujarat commercial syndicates', icon: TrendingUp },
  { value: '30-Year', label: 'RERA Title Vetting', desc: 'Zero encumbrance forensic legal auditing', icon: Shield },
  { value: '100%', label: 'Direct Repatriation', desc: 'Seamless NRE/NRO currency pathways', icon: Award },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Gentle Decorative Atmosphere */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Vision & Authority */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase shadow-xs">
              <span>EXECUTIVE VISION & AUTHORITY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0A1128] leading-[1.12] tracking-tight">
              Bridging Global Trade With <span className="text-[#007CDC]">Sovereign Indian Assets.</span>
            </h2>

            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
              Orion Infrastructure is a premier institutional cross-border wealth platform engineered exclusively for Non-Resident Indians (NRIs) running commercial enterprises in the <strong className="text-[#0A1128] font-bold">USA, Canada, UK, and Australia</strong>.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#0A1128] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#007CDC]" />
                <span>Our Advisory Creed: Earn Globally. Invest Wisely. Compound Forever.</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Active business cash flow in the USA (gas stations, c-stores, hospitality, franchises) requires protection from domestic market saturation. We channel those active profits into hard, inflation-proof real estate and structural infrastructure corridors across Gujarat—India's multi-trillion economic apex.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs font-mono text-slate-700 font-extrabold uppercase">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                <CheckCircle2 className="w-4 h-4 text-[#007CDC]" />
                <span>Dual USA & India Leadership</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Attorney Vetted Conveyance</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1128] text-white font-mono font-extrabold text-xs uppercase tracking-widest hover:bg-[#007CDC] transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_rgba(0,124,220,0.3)]"
              >
                <span>READ COMPLETE INSTITUTIONAL PROFILE</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Authority Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(0,124,220,0.12)] hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#007CDC] mb-6 group-hover:scale-110 group-hover:bg-[#007CDC] group-hover:text-white transition-all shadow-xs">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-[#0A1128] mb-1">{stat.value}</div>
                  <div className="text-sm font-extrabold text-[#007CDC] tracking-wide mb-2 font-mono uppercase">{stat.label}</div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
