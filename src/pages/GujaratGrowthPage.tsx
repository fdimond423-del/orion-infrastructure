import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Building2, Factory, Zap, ShieldCheck, CheckCircle2, TrendingUp, Landmark, Anchor, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const imgGiftCity = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop";
const imgDholera = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop";
const imgSanand = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop";
const imgAhmedabad = "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop";
const imgGandhinagar = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop";
const imgKandla = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop";

const growthCorridors = [
  {
    id: "gift",
    title: "GIFT City",
    subtitle: "India’s International Financial Services Hub",
    img: imgGiftCity,
    icon: Landmark,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    sectors: ["Financial Services", "Commercial Offices", "Residential Developments", "Hospitality"],
    desc: "A globally benchmarked international financial services center offering unprecedented corporate leasing demand and premium expatriate residential opportunities."
  },
  {
    id: "dholera",
    title: "Dholera SIR",
    subtitle: "Master-Planned Industrial & Smart City",
    img: imgDholera,
    icon: Building2,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    sectors: ["Manufacturing", "Logistics", "Warehousing", "Industrial Development"],
    desc: "India's largest greenfield smart city project, engineered to attract global gigafactories, defense manufacturing, and massive logistics hubs."
  },
  {
    id: "sanand",
    title: "Sanand Industrial Corridor",
    subtitle: "Gujarat’s Major Manufacturing Hub",
    img: imgSanand,
    icon: Factory,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    sectors: ["Automotive", "Electronics", "Engineering", "Industrial Supply Chains"],
    desc: "The automotive and semiconductor epicenter of Western India. Exceptional opportunities in high-bay warehousing and industrial supply chain sheds."
  },
  {
    id: "ahmedabad",
    title: "Ahmedabad",
    subtitle: "The Commercial Capital",
    img: imgAhmedabad,
    icon: TrendingUp,
    color: "text-purple-600 bg-purple-50 border-purple-200",
    sectors: ["Residential", "Commercial", "Office", "Retail", "Mixed-Use Developments"],
    desc: "The primary commercial and consumption engine. Target prime retail centers, Grade-A commercial spaces, and luxury residential real estate."
  },
  {
    id: "gandhinagar",
    title: "Gandhinagar",
    subtitle: "Government, Education & Technology",
    img: imgGandhinagar,
    icon: ShieldCheck,
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    sectors: ["Residential", "Commercial", "Institutional", "Technology"],
    desc: "The administrative and institutional brain trust. Strong yield potential in student housing, tech parks, and serene residential gated communities."
  },
  {
    id: "kandla",
    title: "Kandla Port Region",
    subtitle: "Strategic Logistics & Export Corridor",
    img: imgKandla,
    icon: Anchor,
    color: "text-slate-700 bg-slate-100 border-slate-300",
    sectors: ["Warehousing", "Ports", "Logistics", "Industrial Development"],
    desc: "A crucial coastal node for international trade. High demand for cold storage facilities, export processing zones, and massive transit warehousing."
  }
];

const keySectors = [
  { name: "Manufacturing", emoji: "🏭" },
  { name: "Logistics & Ports", emoji: "🚢" },
  { name: "Renewable Energy", emoji: "⚡" },
  { name: "Semiconductors & Electronics", emoji: "🧪" },
  { name: "Automotive", emoji: "🚗" },
  { name: "Pharmaceuticals", emoji: "💊" },
  { name: "Financial Services", emoji: "🏦" },
  { name: "Biotechnology", emoji: "🧬" },
  { name: "Infrastructure Development", emoji: "🏗" },
  { name: "Warehousing", emoji: "📦" },
  { name: "Commercial Real Estate", emoji: "🏢" },
];

export default function GujaratGrowthPage() {
  const [activeCorridor, setActiveCorridor] = useState(growthCorridors[0]);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600/20 font-sans">
      <Navbar />

      {/* Hero Section */}
      <ScrollReveal>
<section className="relative pt-48 lg:pt-56 pb-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>ORION BIZ INFRASTRUCTURE™ • ECONOMIC ZONES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Why Gujarat? <br />
            <span className="text-emerald-600">
              India's Leading Economic Engine.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
            Gujarat continues to be one of India’s leading economic regions due to its strong industrial base, advanced infrastructure, global ports, and proactive business ecosystem. It is the premier destination for NRIs channeling capital into hard assets.
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
            {keySectors.map((sector, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                <span>{sector.emoji}</span>
                <span>{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
</ScrollReveal>

      {/* Interactive Corridors Showcase */}
      <ScrollReveal>
<section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3">
              THE 6 GROWTH NODES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Gujarat Growth Corridors
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Sidebar: Selectors */}
            <div className="lg:col-span-4 space-y-3">
              {growthCorridors.map((corridor) => (
                <button
                  key={corridor.id}
                  onClick={() => setActiveCorridor(corridor)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                    activeCorridor.id === corridor.id
                      ? 'bg-white border border-blue-300 shadow-sm'
                      : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    activeCorridor.id === corridor.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <corridor.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-base ${activeCorridor.id === corridor.id ? 'text-slate-900' : 'text-slate-700'}`}>{corridor.title}</h4>
                    <span className="text-[11px] uppercase tracking-wide truncate block w-48 text-slate-500">{corridor.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Side: Detailed Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCorridor.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm"
                >
                  <div className="h-[300px] overflow-hidden relative">
                    <img src={activeCorridor.img} alt={activeCorridor.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-widest mb-3 inline-block shadow-sm">
                        STRATEGIC CORRIDOR
                      </span>
                      <h3 className="text-3xl font-bold text-white">{activeCorridor.title}</h3>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 space-y-8">
                    <p className="text-base text-slate-600 leading-relaxed">
                      {activeCorridor.desc}
                    </p>

                    <div>
                      <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Potential Focus Areas & Sectors:</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeCorridor.sectors.map((sector, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span className="text-sm font-semibold text-slate-700">{sector}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-semibold">Available via One Trade 360 Portfolios</span>
                      <Link href="/opportunities" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                        <span>View Corridor Opportunities</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
</ScrollReveal>

<ScrollReveal>
  <section className="py-24 bg-slate-50 border-b border-slate-200">
    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      <div className="text-center mb-16">
        <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 uppercase tracking-widest inline-block mb-4">
          EXCLUSIVE GALLERY
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">GIFT City Showcase</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Take an exclusive look into India's premier international financial services center and smart city development. High-quality infrastructure supporting global banking, IT, and premium residential spaces.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="overflow-hidden rounded-2xl shadow-sm border border-slate-200 bg-white group">
            <img 
              src={`/gift-city/gift-${num}.jpeg`} 
              alt={`GIFT City View ${num}`} 
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        ))}
        {/* 7th image spans full width */}
        <div className="overflow-hidden rounded-2xl shadow-sm border border-slate-200 bg-white group md:col-span-2 lg:col-span-3">
          <img 
            src={`/gift-city/gift-7.jpeg`} 
            alt={`GIFT City Panorama`} 
            className="w-full aspect-video md:aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  </section>
</ScrollReveal>

      <Footer />
    </div>
  );
}
