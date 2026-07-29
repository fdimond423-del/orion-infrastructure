import { motion } from 'framer-motion';
import { Landmark, Building2, Factory, TrendingUp, ShieldCheck, Anchor, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const corridors = [
  {
    title: "GIFT City",
    subtitle: "India’s international financial services hub.",
    icon: Landmark,
    items: ["Financial Services", "Commercial Offices", "Residential Developments", "Hospitality"]
  },
  {
    title: "Dholera SIR",
    subtitle: "Master-planned industrial and smart city development.",
    icon: Building2,
    items: ["Manufacturing", "Logistics", "Warehousing", "Industrial Development"]
  },
  {
    title: "Sanand Industrial",
    subtitle: "One of Gujarat’s major manufacturing hubs.",
    icon: Factory,
    items: ["Automotive", "Electronics", "Engineering", "Industrial Supply Chains"]
  },
  {
    title: "Ahmedabad",
    subtitle: "Gujarat’s commercial capital.",
    icon: TrendingUp,
    items: ["Residential", "Commercial", "Office", "Retail", "Mixed-use"]
  },
  {
    title: "Gandhinagar",
    subtitle: "Government, education, and technology center.",
    icon: ShieldCheck,
    items: ["Residential", "Commercial", "Institutional", "Technology"]
  },
  {
    title: "Kandla Port Region",
    subtitle: "Strategic logistics and export corridor.",
    icon: Anchor,
    items: ["Warehousing", "Ports", "Logistics", "Industrial Development"]
  }
];

export function Corridors() {
  return (
    <ScrollReveal>
<section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3"
          >
            STRATEGIC REGIONS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Gujarat Growth Corridors
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corridors.map((corridor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col h-full group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <corridor.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{corridor.title}</h3>
              <p className="text-sm text-slate-500 font-semibold mb-6 h-10">
                {corridor.subtitle}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block">
                  FOCUS SECTORS
                </span>
                <ul className="space-y-3">
                  {corridor.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
</ScrollReveal>
  );
}
