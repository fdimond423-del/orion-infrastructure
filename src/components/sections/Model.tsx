import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, Zap, Building2 } from 'lucide-react';
import { Link } from 'wouter';

const modelSteps = [
  { step: '01', title: 'Acquire Businesses' },
  { step: '02', title: 'Generate Cash Flow' },
  { step: '03', title: 'Optimize Operations' },
  { step: '04', title: 'Reinvest Profits' },
  { step: '05', title: 'Diversify Investments' },
  { step: '06', title: 'Build Long-Term Wealth' }
];

export function Model() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: The Infrastructure Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>THE ORION INFRASTRUCTURE MODEL</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                A Continuous <span className="text-blue-600">Wealth Lifecycle.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modelSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-slate-400 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 flex items-center justify-center font-bold text-sm transition-all shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Card Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative perspective-1000 hidden lg:block"
          >
            <div className="relative w-full aspect-square max-h-[500px] rounded-3xl bg-gradient-to-br from-white to-blue-50/50 border border-slate-200 shadow-[0_20px_50px_-15px_rgba(0,124,220,0.1)] overflow-hidden flex flex-col items-center justify-center text-center p-12 group hover:border-blue-300 hover:shadow-[0_20px_50px_-15px_rgba(0,124,220,0.2)] transition-all duration-500">
              
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center border border-blue-100 shadow-[0_0_40px_rgba(0,124,220,0.15)] mb-8"
                >
                  <Building2 className="w-10 h-10 text-blue-600" />
                </motion.div>

                <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-4">
                  ONE TRADE 360 APEX
                </span>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Institutional Flywheel <br /> Compounding
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  Designed by NRI asset management directors to eliminate cross-border friction and execute continuous portfolio expansion.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
