import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Build Cash Flow', desc: 'Generate capital overseas through business and employment.' },
  { num: '02', title: 'Save & Diversify', desc: 'Protect capital and seek high-growth emerging markets.' },
  { num: '03', title: 'Acquire Assets', desc: 'Invest in premium Gujarat real estate and infrastructure.' },
  { num: '04', title: 'Generate Income', desc: 'Create recurring rental and lease income streams.' },
  { num: '05', title: 'Generational Wealth', desc: 'Build a robust, long-term portfolio for your family.' }
];

export function Strategy() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase mb-3">THE JOURNEY</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#131238]">Investment Strategy</h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-px bg-blue-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover:shadow-lg flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#007cdc] text-white flex items-center justify-center text-xl font-mono font-bold mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#131238] mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
