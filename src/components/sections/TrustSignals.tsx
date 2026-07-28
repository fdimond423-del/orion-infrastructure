import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const signals = [
  'One trusted point of contact',
  'USA to India investment guidance',
  'Commercial and residential opportunities',
  'NRI-focused support',
  'Long-term wealth planning',
  'Transparent process',
  'Professional partner network'
];

export function TrustSignals() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              INSTITUTIONAL CONFIDENCE
            </span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#131238] mb-6">Why Choose Orion</h3>
            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8">
              Trust is the currency of global investment. We build it through transparency, performance, and dedicated synchronous NRI support across our USA and India desks.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {signals.map((signal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex items-start gap-4"
              >
                <div className="p-2 rounded-xl bg-blue-50 text-[#007cdc] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[#131238] font-bold text-sm leading-snug">{signal}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
