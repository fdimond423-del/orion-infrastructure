import { motion } from 'framer-motion';
import { TrendingUp, Building2, ShieldCheck, MapPin, ArrowUpRight, Zap, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    title: '$350 Billion+ Economic Engine',
    desc: 'Gujarat accounts for nearly 20% of India’s overall industrial exports while representing less than 5% of its geographic landmass—creating unparalleled real estate absorption.',
    stat: '20% of India Exports',
    icon: TrendingUp
  },
  {
    title: 'GIFT City Sovereign Exemption',
    desc: 'India’s only financial services center offering 100% tax holidays, foreign currency corporate structuring, and exemption from domestic foreign Exchange regulation.',
    stat: 'Zero Tax Corridor',
    icon: Building2
  },
  {
    title: 'Flawless Infrastructure Velocity',
    desc: 'Continuous multi-billion-dollar investments in bullet trains, international airports, highways, and logistics ports (Kandla & Mundra) driving compounding land appreciation.',
    stat: '#1 Logistics Speed',
    icon: Zap
  },
  {
    title: 'Robust RERA & Legal Transparency',
    desc: 'Gujarat maintains India’s most streamlined digital land record registry and rigorous RERA real estate regulatory enforcement, eliminating traditional property title disputes.',
    stat: 'Digital Clean Title',
    icon: ShieldCheck
  }
];

export function WhyGujarat() {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>THE GLOBAL CAPITAL MAGNATE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1128] tracking-tight">
              Why Invest In <span className="text-[#007CDC]">Gujarat?</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-md md:text-right font-normal leading-relaxed">
            India’s fastest-growing multi-trillion economic hub offers American NRIs unmatched structural appreciation, regulatory safety, and sovereign rental demand.
          </p>
        </div>

        {/* Reasons Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,124,220,0.12)] hover:border-blue-400 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono font-extrabold text-xs tracking-wider uppercase shadow-xs">
                    {item.stat}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#007CDC] border border-blue-100 group-hover:bg-[#0A1128] group-hover:text-white flex items-center justify-center transition-all shadow-xs">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1128] mb-4 group-hover:text-[#007CDC] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-base font-normal leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#0A1128] group-hover:text-[#007CDC]">
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#007CDC]" />
                  <span>RERA GUARANTEED CORRIDOR</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#007CDC] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#007CDC] font-bold uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span>DEDICATED EAST COAST & INDIA SYNDICATION</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0A1128]">
              Ready to diversify U.S. capital into sovereign Gujarat commercial projects?
            </h3>
          </div>
          <Link
            to="/gujarat"
            className="px-8 py-4 rounded-full bg-[#007CDC] hover:bg-[#0A1128] text-white font-mono font-bold text-xs uppercase tracking-widest shrink-0 transition-all duration-300 shadow-md"
          >
            DISCOVER GUJARAT APEX
          </Link>
        </div>

      </div>
    </section>
  );
}
