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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">The Orion Model</h3>
            <p className="text-lg text-white/60 mb-8 font-light">
              A proven, continuous cycle designed to accelerate wealth creation. We believe in taking active steps to turn active income into passive, generational assets.
            </p>
            
            <div className="space-y-4">
              {cycle.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-white/80 font-medium">{item}</span>
                  {idx !== cycle.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/20 ml-auto" />
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
            <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-dashed border-primary/30 animate-[spin_40s_linear_infinite_reverse]" />
            
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-12">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6 backdrop-blur-md">
                <span className="font-serif text-3xl text-white">O</span>
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">Compound Growth</h4>
              <p className="text-white/50 text-sm">The engine of generational wealth.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
