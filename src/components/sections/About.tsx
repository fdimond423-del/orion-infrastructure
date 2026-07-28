import { motion } from 'framer-motion';
import { Target, TrendingUp, Building2, Globe } from 'lucide-react';

const stats = [
  { value: '4', label: 'Countries Served', icon: Globe },
  { value: '360°', label: 'NRI Support', icon: Target },
  { value: 'High', label: 'Growth Potential', icon: TrendingUp },
  { value: 'Premium', label: 'Asset Classes', icon: Building2 },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase mb-4">
              VISION & PURPOSE
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#131238] leading-tight mb-8">
              Building Wealth.<br />
              <span className="text-blue-900/60">Building Futures.</span>
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg font-normal leading-relaxed">
              <p>
                Orion Infrastructure is a premier cross-border investment platform dedicated to empowering Non-Resident Indians (NRIs) in the <strong className="text-[#131238] font-bold">USA, Canada, UK, and Australia</strong>.
              </p>
              <p>
                We bridge the gap between global operational cash flows and Indian structural growth, offering institutional access to premium real estate and infrastructure corridors across Gujarat — India's multi-trillion economic engine.
              </p>
              <p className="font-semibold text-[#131238] text-xl border-l-4 border-[#007cdc] pl-4 py-1 bg-blue-50/50 rounded-r-lg">
                Our core advisory philosophy: Earn Globally. Invest Wisely. Build Generational Wealth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="bg-slate-50 p-8 rounded-2xl flex flex-col items-start gap-4 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-[#007cdc] border border-blue-100">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-[#131238] mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
