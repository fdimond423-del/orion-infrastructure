import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building, Briefcase } from 'lucide-react';
const residentialImg = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop";
const commercialImg = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop";

const categories = [
  {
    id: 'residential',
    label: 'Residential',
    icon: Home,
    image: residentialImg,
    items: [
      'Luxury Apartments',
      'Villas & Independent Houses',
      'Farmhouses',
      'Weekend Homes',
      'Gated Communities'
    ]
  },
  {
    id: 'rental',
    label: 'Rental Income',
    icon: Building,
    image: residentialImg, // Using same for now, or fallback
    items: [
      'NRI Apartment Projects',
      'Serviced Apartments',
      'Rental Housing',
      'Student Housing',
      'Senior Living Projects'
    ]
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: Briefcase,
    image: commercialImg,
    items: [
      'Shopping Centers',
      'Retail Shops',
      'Office Spaces',
      'Commercial Buildings',
      'Warehouses',
      'Industrial Sheds'
    ]
  }
];

export function Opportunities() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find(c => c.id === activeTab);

  return (
    <section id="opportunities" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase mb-3"
          >
            ASSET CLASSES
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#131238] mb-6"
          >
            Investment Opportunities
          </motion.h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id 
                  ? 'bg-[#007cdc] text-white shadow-md font-bold scale-105' 
                  : 'bg-white text-slate-700 hover:bg-blue-50/50 hover:text-[#007cdc] border border-slate-200 shadow-xs'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[520px] group shadow-xl border border-slate-200">
                  <img 
                    src={activeCategory.image} 
                    alt={activeCategory.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image not generated yet
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10" />
                  <div className="absolute bottom-8 left-8 z-20">
                    <h4 className="text-3xl font-serif font-bold text-white mb-2">{activeCategory.label}</h4>
                    <p className="text-blue-200 text-sm font-medium">Premium institutional grade assets in Gujarat</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {activeCategory.items.map((item, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      key={idx}
                      className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#007cdc] border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-[#007cdc] group-hover:text-white transition-colors">
                        <div className="w-2.5 h-2.5 rounded-full bg-current" />
                      </div>
                      <h5 className="text-lg font-bold text-[#131238] leading-snug">{item}</h5>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
