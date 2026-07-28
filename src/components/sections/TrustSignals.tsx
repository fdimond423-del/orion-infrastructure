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
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Why Choose Orion</h3>
            <p className="text-xl text-white/80 font-light mb-8">
              Trust is the currency of global investment. We build it through transparency, performance, and dedicated NRI support.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {signals.map((signal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                <span className="text-white/90 font-medium">{signal}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
