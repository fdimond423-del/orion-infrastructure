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
    <section className="py-24 bg-muted relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4"
          >
            Economic Engine
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
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
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
            >
              <ind.icon className="w-10 h-10 text-white/50 mb-4 group-hover:text-primary transition-colors" />
              <h4 className="text-sm md:text-base font-medium text-white">{ind.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
