import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Home as HomeIcon, Landmark, Factory, Trees, ArrowRight, ShieldCheck, CheckCircle2, MapPin, Sparkles, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/ScrollReveal';

// Distinct Professional Real Estate Unsplash Images
const images = {
  resLuxuryApt: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
  resVillas: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
  resTownhouse: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  resFarmhouse: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  
  rentNriProjects: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  rentServiced: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
  rentCorporate: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  
  commOfficeTower: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  commShopping: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop",
  commBusinessPark: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  
  indWarehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  indLogistics: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  indColdStorage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
  
  landPlots: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
  landCommercial: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop"
};

const assetCategories = [
  {
    id: "residential",
    title: "Residential Properties",
    subtitle: "Luxury Habitats & Weekend Refuges",
    icon: HomeIcon,
    color: "bg-blue-50 text-blue-600",
    desc: "Acquire prime RERA-verified residential property engineered for superior quality of life and multi-generational family legacy across Ahmedabad, Gandhinagar, and scenic Gujarat weekend nodes.",
    items: [
      { title: "Luxury High-Rise Apartments", location: "Ahmedabad Apex & GIFT City View", img: images.resLuxuryApt, tags: ["3 & 4 BHK Ultra-Luxury", "Smart Automation"] },
      { title: "Premium Gated Villas", location: "Sanand & Gandhinagar Greenbelt", img: images.resVillas, tags: ["Private Pool", "Gated Security"] },
      { title: "Independent Homes & Townhouses", location: "Prime Ahmedabad Sectors", img: images.resTownhouse, tags: ["Freehold Title", "Custom Plans"] },
      { title: "Farmhouses & Weekend Homes", location: "Nalsarovar & Thol Weekend Corridor", img: images.resFarmhouse, tags: ["Eco-Friendly Living", "Quiet Sanctuary"] }
    ],
    list: ["Luxury Apartments", "Premium Villas", "Independent Homes", "Townhouses", "Farmhouses", "Weekend Homes", "Gated Communities", "Senior Living Communities", "Vacation Homes"]
  },
  {
    id: "rental",
    title: "Rental Income",
    subtitle: "High-Yield Recurring Cash Flow Assets",
    icon: DollarSign,
    color: "bg-emerald-50 text-emerald-600",
    desc: "Target steady passive cash flow by deploying US business operational earnings into high-occupancy corporate leasing, NRI dedicated apartment complexes, and institutional student accommodations.",
    items: [
      { title: "NRI Dedicated Apartment Projects", location: "GIFT City Financial Zone", img: images.rentNriProjects, tags: ["Guaranteed Rental", "High Expatriate Demand"] },
      { title: "Serviced Corporate Apartments", location: "Ahmedabad Tech & Financial Districts", img: images.rentServiced, tags: ["Long-Term Leases", "Fully Furnished"] },
      { title: "Student Housing & Rental Housing", location: "Gandhinagar Education Hub", img: images.rentCorporate, tags: ["High Yield Potential", "Institutional Tenants"] }
    ],
    list: ["NRI Apartment Projects", "Rental Housing", "Student Housing", "Serviced Apartments", "Corporate Leasing", "Holiday Rentals", "Multi-Family Housing"]
  },
  {
    id: "commercial",
    title: "Commercial Real Estate",
    subtitle: "Institutional Office Towers & Retail Hubs",
    icon: Building,
    color: "bg-amber-50 text-amber-600",
    desc: "Own physical commercial real estate inside India's fastest expanding commercial engine. From Grade-A office buildings in GIFT City to prime shopping centers and mixed-use towers.",
    items: [
      { title: "Grade-A Commercial Office Towers", location: "GIFT City Special Economic Zone (SEZ)", img: images.commOfficeTower, tags: ["Global Banking Tenants", "LEED Gold Certified"] },
      { title: "Shopping Centers & Retail Shops", location: "Ahmedabad SG Highway", img: images.commShopping, tags: ["Maximum Footfall", "Premium Retail"] },
      { title: "Business Parks & Medical Buildings", location: "Gandhinagar & Ahmedabad Biotech Nodes", img: images.commBusinessPark, tags: ["Institutional Infra", "Scalable Space"] }
    ],
    list: ["Shopping Centers", "Retail Shops", "Office Buildings", "Commercial Towers", "Business Parks", "Medical Buildings", "Hotels", "Mixed-Use Developments"]
  },
  {
    id: "industrial",
    title: "Industrial & Warehousing",
    subtitle: "Logistics Parks, Cold Storage & Sheds",
    icon: Factory,
    color: "bg-purple-50 text-purple-600",
    desc: "Capitalize on global supply chain realignment and manufacturing growth across Sanand, Dholera SIR, and Kandla Port with modern logistics warehousing and high-spec industrial sheds.",
    items: [
      { title: "Large-Scale Logistics Warehouses", location: "Sanand Industrial Corridor & NH-48", img: images.indWarehouse, tags: ["High Ceiling Bays", "Multi-Modal Connect"] },
      { title: "Dholera SIR Manufacturing Facilities", location: "Dholera Smart Industrial City", img: images.indLogistics, tags: ["Gigafactory Proximity", "Strategic Export"] },
      { title: "Cold Storage & Distribution Centers", location: "Kandla Port Export Node", img: images.indColdStorage, tags: ["Temperature Controlled", "Direct Port Access"] }
    ],
    list: ["Warehouses", "Industrial Sheds", "Manufacturing Facilities", "Logistics Parks", "Cold Storage", "Distribution Centers", "Export Facilities"]
  },
  {
    id: "land",
    title: "Land Opportunities",
    subtitle: "Strategic Investment & Development Plots",
    icon: Trees,
    color: "bg-cyan-50 text-cyan-600",
    desc: "Secure raw or plotted development land in rapid urban expansion trajectories. Ideal for capital preservation, long-term appreciation, and customized infrastructure development.",
    items: [
      { title: "Strategic Commercial Development Plots", location: "GIFT City Extension", img: images.landPlots, tags: ["Clear RERA Title", "High FAR"] },
      { title: "Industrial & Investment Plots", location: "Dholera SIR & Sanand", img: images.landCommercial, tags: ["Govt Approved Zoning", "Long-Term Hold"] }
    ],
    list: ["Residential Land", "Commercial Land", "Industrial Land", "Investment Plots", "Development Land", "Agricultural Land"]
  }
];

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState("residential");
  const currentCategory = assetCategories.find(cat => cat.id === activeTab) || assetCategories[0];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600/20 font-sans">
      <Navbar />

      {/* Monumental Header */}
      <ScrollReveal>
<section className="relative pt-48 lg:pt-56 pb-20 bg-white overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>ORION BIZ INFRASTRUCTURE™ • DIVERSIFIED ASSET PORTFOLIO</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Comprehensive Investment <br />
              <span className="text-blue-600">
                Opportunities in Gujarat
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
              Explore forensically vetted residential estates, commercial office towers, logistics warehouses, and high-yield rental housing across GIFT City, Dholera SIR, Ahmedabad, Sanand, Gandhinagar, and Kandla Port.
            </p>
          </div>

          {/* Category Selector Strip */}
          <div className="mt-12 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6">
            {assetCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-sm ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
</ScrollReveal>

      {/* Dynamic Selected Category Content */}
      <ScrollReveal>
<section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-12"
            >
              {/* Category Overview Bar */}
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-3 max-w-3xl">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    CATEGORY REVIEW: {currentCategory.title.toUpperCase()}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {currentCategory.subtitle}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {currentCategory.desc}
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shrink-0 min-w-[280px]">
                  <span className="text-xs font-bold text-slate-900 block mb-3 uppercase">ELIGIBLE ASSET SUB-CLASSES</span>
                  <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                    {currentCategory.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Property Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory.items.map((prop, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-64 overflow-hidden relative">
                        <img src={prop.img} alt={prop.title} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-white/90 text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                          <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{prop.location}</span>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">{prop.title}</h3>
                        
                        <div className="flex flex-wrap gap-2">
                          {prop.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4" /> <span>RERA Title Approved</span>
                        </span>
                        <Link
                          href="/contact"
                          className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1"
                        >
                          <span>Inquire</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
</ScrollReveal>

      {/* Advisory Desk Banner */}
      <ScrollReveal>
<section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Need Customized Asset Verification?</h3>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Contact One Trade 360 & Global Business Service in Wilkes-Barre, PA (USA) or our direct Gujarat Advisory Desk for tailored property evaluations and RERA legal title dossiers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="tel:+12722679492" className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-sm transition-colors">
              🇺🇸 USA Direct Desk: +1 272-267-9492
            </a>
            <a href="tel:+917984171515" className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-sm transition-colors">
              🇮🇳 India Advisory Desk: +91 7984171515
            </a>
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors">
              BOOK ONLINE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
</ScrollReveal>

      <Footer />
    </div>
  );
}
