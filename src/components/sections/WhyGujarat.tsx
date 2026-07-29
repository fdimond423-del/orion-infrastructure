import { motion } from 'framer-motion';
import { Factory, Anchor, Zap, Cpu, Car, Pill, Landmark, Dna, HardHat, Box, Building } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const sectors = [
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics & Ports", icon: Anchor },
  { name: "Renewable Energy", icon: Zap },
  { name: "Semiconductors & Electronics", icon: Cpu },
  { name: "Automotive", icon: Car },
  { name: "Pharmaceuticals", icon: Pill },
  { name: "Financial Services", icon: Landmark },
  { name: "Biotechnology", icon: Dna },
  { name: "Infrastructure", icon: HardHat },
  { name: "Warehousing", icon: Box },
  { name: "Commercial Real Estate", icon: Building }
];

export function WhyGujarat() {
  return (
    <ScrollReveal>
<section className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase block">
              ECONOMIC ENGINE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Why <span className="text-emerald-600">Gujarat?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Gujarat continues to be one of India’s leading economic regions due to its strong industrial base, infrastructure, ports, and business ecosystem.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed p-5 bg-slate-50 rounded-xl border border-slate-200">
              * Investment outcomes depend on many factors, and investors should conduct appropriate due diligence before making decisions.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sectors.map((sector, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-3 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer group"
                >
                  <sector.icon className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  <span className="text-xs font-bold text-slate-700 uppercase">{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
</ScrollReveal>
  );
}
