import { motion } from 'framer-motion';
import { Briefcase, Search, Building2, ShieldCheck, Plane, Landmark, TrendingUp, Handshake } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Investment Consultation',
    items: ['Understand available opportunities', 'Discuss investment goals', 'Review strategy']
  },
  {
    icon: Search,
    title: 'Property Search',
    items: ['Residential', 'Commercial', 'Industrial', 'Rental', 'Mixed-use']
  },
  {
    icon: Building2,
    title: 'Project Evaluation',
    items: ['Developer background', 'Location assessment', 'Market research', 'Project review']
  },
  {
    icon: ShieldCheck,
    title: 'Builder Verification',
    items: ['Review publicly available information about developers and projects to support informed decision-making.']
  },
  {
    icon: Plane,
    title: 'NRI Support',
    items: ['Documentation guidance', 'Purchase process overview', 'Coordination support', 'Communication assistance']
  },
  {
    icon: Landmark,
    title: 'Financing Referrals',
    items: ['Connect investors with financing professionals where appropriate. Loan approval remains subject to lender requirements.']
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Planning',
    items: ['Diversification strategies', 'Asset allocation discussions', 'Long-term investment planning']
  },
  {
    icon: Handshake,
    title: 'Property Management Coordination',
    items: ['Assist with referrals for:', 'Rental management', 'Maintenance', 'Tenant coordination', 'Asset monitoring']
  }
];

export function Services() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3"
          >
            ORION SERVICES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            End-to-End Coordination
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <srv.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{srv.title}</h3>
              <ul className="space-y-2 mt-auto">
                {srv.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 font-medium leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2 block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
