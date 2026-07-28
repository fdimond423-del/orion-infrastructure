import { motion } from 'framer-motion';

const services = [
  'Property Search',
  'Investment Consultation',
  'Project Evaluation',
  'Builder Verification',
  'NRI Property Assistance',
  'Commercial Property Advisory',
  'Rental Property Planning',
  'Property Management Coordination',
  'Legal & Documentation Guidance',
  'Financing Referrals',
  'Investment Portfolio Planning'
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase mb-3"
            >
              END-TO-END SUPPORT
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-[#131238]"
            >
              NRI Services & Advisory
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 md:w-1/3 md:text-right font-normal text-sm sm:text-base leading-relaxed"
          >
            Navigating cross-border investments requires statutory precision. We handle every legal, banking, and leasing complexity so you can focus on passive returns.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="px-6 py-3.5 rounded-full border border-slate-300 bg-white text-[#131238] font-bold text-xs uppercase tracking-wide hover:bg-[#007cdc] hover:border-[#007cdc] hover:text-white hover:shadow-md transition-all cursor-default shadow-xs"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
