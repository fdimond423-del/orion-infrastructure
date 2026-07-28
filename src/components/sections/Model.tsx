import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cycle = [
  'Acquire Businesses',
  'Generate Cash Flow',
  'Optimize Operations',
  'Reinvest Profits',
  'Diversify Investments',
  'Build Long-Term Wealth'
];

export function Model() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase mb-3">PHILOSOPHY</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#131238] mb-6">The Orion Model</h3>
            <p className="text-lg text-slate-600 mb-8 font-normal leading-relaxed">
              A proven, continuous cycle designed to accelerate cross-border wealth creation. We turn active U.S. commercial income into high-compounding, passive sovereign assets in Gujarat.
            </p>
            
            <div className="space-y-3.5">
              {cycle.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-4 bg-slate-50 hover:bg-blue-50/40 border border-slate-200 hover:border-blue-300 rounded-2xl p-4 transition-all shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#007cdc] text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs">
                    {idx + 1}
                  </div>
                  <span className="text-[#131238] font-bold text-sm sm:text-base">{item}</span>
                  {idx !== cycle.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#007cdc] ml-auto" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-dashed border-[#007cdc]/40 animate-[spin_40s_linear_infinite_reverse]" />
            
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-12 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 rounded-full border border-slate-200 shadow-xl m-10">
              <div className="w-20 h-20 rounded-2xl bg-[#007cdc] flex items-center justify-center mb-6 shadow-md">
                <span className="font-serif font-bold text-3xl text-white">O</span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#131238] mb-2">Compound Growth</h4>
              <p className="text-slate-600 text-xs font-normal">The proven engine of generational wealth.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
