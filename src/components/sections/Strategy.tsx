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
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Investment Strategy</h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="w-16 h-16 rounded-full bg-background border border-white/20 flex items-center justify-center text-xl font-serif text-white mx-auto mb-6 relative z-10 group-hover:border-primary group-hover:text-primary transition-colors">
                  {step.num}
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-medium text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
