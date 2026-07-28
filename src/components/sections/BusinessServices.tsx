import { motion } from 'framer-motion';

const usBusinesses = [
  'Gas Stations',
  'Convenience Stores',
  'Motels',
  'Restaurants',
  'Truck Stops'
];

export function BusinessServices() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="p-8 md:p-12 lg:p-16 rounded-3xl bg-white border border-slate-200 relative overflow-hidden shadow-xl">
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-[#007cdc] text-xs sm:text-sm font-bold tracking-wide uppercase mb-8 shadow-xs"
              >
                GLOBAL BUSINESS SERVICE | ONE TRADE 360
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-[#131238] mb-6 leading-tight"
              >
                From U.S. Business Profits to Long-Term Global Growth
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-slate-600 mb-8 text-base leading-relaxed"
              >
                We help you channel operating profits from active US-based businesses into secure, high-yield Indian structural real estate assets across Gujarat's booming investment corridors.
              </motion.p>

              <div className="flex flex-wrap gap-3">
                {usBusinesses.map((biz, idx) => (
                  <span key={idx} className="text-sm font-semibold text-[#131238] bg-slate-100/80 hover:bg-blue-50 hover:text-[#007cdc] px-4 py-2 rounded-lg border border-slate-200 transition-colors">
                    {biz}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              {[
                { step: '1', title: 'Build Cash Flow', desc: 'From US commercial operations' },
                { step: '2', title: 'Reinvest Profits', desc: 'Disciplined capital allocation' },
                { step: '3', title: 'Diversify into Gujarat', desc: 'Cross-border real estate corridors' },
                { step: '4', title: 'Build Long-Term Assets', desc: 'Sovereign generational portfolio' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-5 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 hover:shadow-xs"
                >
                  <div className="text-3xl font-serif font-bold text-[#007cdc] w-10">0{item.step}</div>
                  <div>
                    <div className="text-[#131238] font-bold text-lg">{item.title}</div>
                    <div className="text-sm font-medium text-slate-500">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
