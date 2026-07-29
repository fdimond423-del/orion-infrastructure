import { motion } from 'framer-motion';
import { ArrowDown, DollarSign, Building, Globe, Zap, LineChart } from 'lucide-react';

const strategySteps = [
  { step: 'STEP 1', title: 'Build Income Overseas', desc: 'Generate income through employment, entrepreneurship, or business ownership.' },
  { step: 'STEP 2', title: 'Save & Diversify', desc: 'Build capital through disciplined financial planning.' },
  { step: 'STEP 3', title: 'Invest in Gujarat', desc: 'Evaluate residential, commercial, industrial, or infrastructure opportunities that align with your goals and risk tolerance.' },
  { step: 'STEP 4', title: 'Generate Income', desc: 'Where appropriate, consider rental or commercial leasing strategies.' },
  { step: 'STEP 5', title: 'Build Generational Wealth', desc: 'Create a diversified portfolio designed to support long-term family financial objectives.' }
];

export function Strategy() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Our Philosophy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase block mb-3">
            OUR PHILOSOPHY
          </span>
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-bold text-xl md:text-2xl text-slate-900 mb-10">
              <span className="flex flex-col items-center gap-2"><DollarSign className="w-8 h-8 text-emerald-500" /> Cash Flow Creates Capital</span>
              <ArrowDown className="w-5 h-5 text-slate-300 md:-rotate-90 block" />
              <span className="flex flex-col items-center gap-2"><Zap className="w-8 h-8 text-blue-500" /> Capital Builds Assets</span>
              <ArrowDown className="w-5 h-5 text-slate-300 md:-rotate-90 block" />
              <span className="flex flex-col items-center gap-2"><Globe className="w-8 h-8 text-amber-500" /> Assets Build Generational Wealth</span>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              Our mission is to help investors create diversified portfolios through business ownership, commercial real estate, residential property, and infrastructure opportunities.
            </p>
          </div>
        </motion.div>

        {/* Our Investment Strategy Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3">
            OUR INVESTMENT STRATEGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            The 5-Step Strategic Pathway
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {strategySteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col h-full relative"
            >
              <div className="w-full flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 uppercase tracking-widest border border-slate-200">
                  {item.step}
                </span>
                {idx < strategySteps.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-slate-300 md:-rotate-90 block absolute right-[-14px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full hidden md:block" />
                )}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
