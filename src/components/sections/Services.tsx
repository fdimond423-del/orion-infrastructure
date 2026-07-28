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
    <section id="services" className="py-24 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4"
            >
              End-to-End Support
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white"
            >
              NRI Services
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/60 md:w-1/3 md:text-right font-light"
          >
            Navigating cross-border investments requires precision. We handle the complexity so you can focus on the returns.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all cursor-default"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
