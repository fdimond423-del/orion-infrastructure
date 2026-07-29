import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, DollarSign, Building, Factory, Trees, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const buildWealthMethods = [
  "Employment", "Entrepreneurship", "Small Businesses", "Retail Businesses", "Hospitality", "Commercial Investments"
];

const categories = [
  {
    id: "residential",
    title: "Residential Properties",
    icon: HomeIcon,
    items: ["Luxury Apartments", "Premium Villas", "Independent Homes", "Townhouses", "Farmhouses", "Weekend Homes", "Gated Communities", "Senior Living Communities", "Vacation Homes"]
  },
  {
    id: "rental",
    title: "Rental Income",
    icon: DollarSign,
    items: ["NRI Apartment Projects", "Rental Housing", "Student Housing", "Serviced Apartments", "Corporate Leasing", "Holiday Rentals", "Multi-Family Housing"]
  },
  {
    id: "commercial",
    title: "Commercial Real Estate",
    icon: Building,
    items: ["Shopping Centers", "Retail Shops", "Office Buildings", "Commercial Towers", "Business Parks", "Medical Buildings", "Hotels", "Mixed-Use Developments"]
  },
  {
    id: "industrial",
    title: "Industrial Properties",
    icon: Factory,
    items: ["Warehouses", "Industrial Sheds", "Manufacturing Facilities", "Logistics Parks", "Cold Storage", "Distribution Centers", "Export Facilities"]
  },
  {
    id: "land",
    title: "Land Opportunities",
    icon: Trees,
    items: ["Residential Land", "Commercial Land", "Industrial Land", "Investment Plots", "Development Land", "Agricultural Land*"]
  }
];

export function Opportunities() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <ScrollReveal>
<section className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Build Wealth Abroad Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-14 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-center max-w-5xl mx-auto mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-4">
              BUILD WEALTH ABROAD
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Many NRIs earn excellent incomes through:
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {buildWealthMethods.map((method, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">
                  {method}
                </span>
              ))}
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Rather than leaving savings idle, Orion Infrastructure helps investors evaluate opportunities to diversify into long-term assets in Gujarat.
            </p>
          </div>
        </motion.div>

        {/* Investment Opportunities Tabs */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase block mb-3">
            INVESTMENT OPPORTUNITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Diversify Your Asset Portfolio
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all shadow-sm ${
                  activeTab === cat.id 
                    ? 'bg-blue-600 text-white shadow-[0_10px_20px_-10px_rgba(0,124,220,0.4)]' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.05)]">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <currentCategory.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{currentCategory.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {currentCategory.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-700 text-sm leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                {activeTab === 'land' && (
                  <p className="mt-8 text-xs text-slate-400 font-medium">
                    *Agricultural Land purchase is subject to applicable state laws and NRI eligibility requirements.
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
</ScrollReveal>
  );
}
