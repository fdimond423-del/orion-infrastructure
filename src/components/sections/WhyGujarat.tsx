import { motion } from 'framer-motion';
import { Factory, Truck, Ship, Zap, Pill, FlaskConical, Landmark, Car } from 'lucide-react';

const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Logistics', icon: Truck },
  { name: 'Ports & Shipping', icon: Ship },
  { name: 'Renewable Energy', icon: Zap },
  { name: 'Pharmaceuticals', icon: Pill },
  { name: 'Chemicals', icon: FlaskConical },
  { name: 'Financial Services', icon: Landmark },
  { name: 'Automotive', icon: Car },
];

export function WhyGujarat() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase mb-4"
          >
            ECONOMIC ENGINE
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#131238]"
          >
            Why Gujarat?
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 flex flex-col items-center justify-center text-center group transition-all shadow-sm hover:shadow-md"
            >
              <ind.icon className="w-10 h-10 text-[#007cdc] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm md:text-base font-bold text-[#131238]">{ind.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
