import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, TrendingUp, Building2, MapPin, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { Link } from 'wouter';

const categories = ['ALL CORRIDORS', 'GIFT CITY', 'AHMEDABAD APEX', 'DHOLERA SIR', 'SANAND INDUSTRIAL'];

const opportunities = [
  {
    title: 'GIFT City International Fintech Corporate Tower',
    category: 'GIFT CITY',
    location: 'GIFT SEZ & Domestic Zone, Gandhinagar',
    yield: '9.2% - 11.5% p.a.',
    multiple: '3.5x Horizon',
    minInvestment: '$150,000 USD Eq.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    desc: 'Pre-leased Grade-A corporate office floorplates backed by sovereign tax holidays and international financial institution tenants. Complete USD currency repatriation.',
    tags: ['RERA Vetted', '100% Tax Holiday', 'Foreign Currency Repatriable'],
    badge: 'FLAGSHIP INSTITUTIONAL ASSET'
  },
  {
    title: 'Ahmedabad SG Highway Commercial High-Rise & Retail',
    category: 'AHMEDABAD APEX',
    location: 'SG Highway & Sindhu Bhavan Road, Ahmedabad',
    yield: '8.5% - 10.2% p.a.',
    multiple: '4.0x Horizon',
    minInvestment: '$100,000 USD Eq.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    desc: 'Prime high-footfall luxury commercial suites along Gujarat’s most prestigious business boulevard. Assured rental income agreements with blue-chip corporate covenants.',
    tags: ['Grade-A Title', 'Triple-Net Leases', 'Immediate Rental Flow'],
    badge: 'HIGH YIELD GENERATOR'
  },
  {
    title: 'Dholera SIR Smart City Manufacturing & Technology Park',
    category: 'DHOLERA SIR',
    location: 'Special Investment Region, Dholera',
    yield: 'Capital Multiplier',
    multiple: '5.0x - 7.0x Horizon',
    minInvestment: '$85,000 USD Eq.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop',
    desc: 'Early-stage institutional land consolidation and smart logistics warehousing parcels adjacent to the international airport and semiconductor manufacturing corridors.',
    tags: ['Sovereign Smart City', 'Multi-Modal Node', 'High Capital Growth'],
    badge: 'HIGH GROWTH MULTIPLIER'
  },
  {
    title: 'Sanand Corporate Warehousing & Automotive Logistics Apex',
    category: 'SANAND INDUSTRIAL',
    location: 'Sanand Industrial Belt, Ahmedabad West',
    yield: '10.5% - 12.8% p.a.',
    multiple: '3.2x Horizon',
    minInvestment: '$120,000 USD Eq.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    desc: 'Custom-built logistics centers and industrial warehousing complexes long-leased to multinational automotive and electronics manufacturing giants.',
    tags: ['Long-Term Corporate Covenants', 'High Cash Yield', 'Zero Vacancy Risk'],
    badge: 'STABLE INCOME ENGINE'
  }
];

export function Opportunities() {
  const [activeCategory, setActiveCategory] = useState('ALL CORRIDORS');

  const filteredOpportunities = activeCategory === 'ALL CORRIDORS' 
    ? opportunities 
    : opportunities.filter(op => op.category === activeCategory);

  return (
    <section id="opportunities" className="py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
              <span>CURATED GUJARAT ASSET DIRECTORY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1128] tracking-tight">
              Institutional Investment <span className="text-[#007CDC]">Corridors</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md md:text-right font-normal leading-relaxed">
            Forensically audited real estate and infrastructure suites engineered specifically for USA & global NRI portfolio diversification and currency repatriation.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 pr-3 text-slate-400 text-xs font-mono font-bold uppercase">
            <Filter className="w-4 h-4 text-[#007CDC]" />
            <span>FILTER CORRIDORS:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A1128] text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-[#007CDC] border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Opportunities Card Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredOpportunities.map((op, idx) => (
              <motion.div
                key={op.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,124,220,0.14)] hover:border-blue-400 transition-all duration-500 flex flex-col group"
              >
                {/* Image Container with Floating Badge */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={op.image} 
                    alt={op.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-extrabold text-white uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{op.badge}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-mono font-bold uppercase tracking-wide shadow-md">
                      {op.category}
                    </span>
                  </div>

                  {/* Bottom Location Label */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white font-mono text-xs font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">{op.location}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-3 group-hover:text-[#007CDC] transition-colors leading-tight">
                      {op.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {op.desc}
                    </p>
                  </div>

                  {/* Financial Metrics Console */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 font-mono text-center">
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase mb-1">TARGET YIELD</div>
                      <div className="text-sm font-extrabold text-emerald-600">{op.yield}</div>
                    </div>
                    <div className="border-x border-slate-200 px-1">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-1">HORIZON</div>
                      <div className="text-sm font-extrabold text-[#007CDC]">{op.multiple}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase mb-1">MIN TICKET</div>
                      <div className="text-sm font-extrabold text-[#0A1128]">{op.minInvestment}</div>
                    </div>
                  </div>

                  {/* Trust Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                    {op.tags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200/60">
                        <CheckCircle className="w-3 h-3 text-[#007CDC]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full py-4 px-6 rounded-2xl bg-[#0A1128] hover:bg-[#007CDC] text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-between group/btn shadow-md transition-all duration-300"
                    >
                      <span>REQUEST CONFIDENTIAL DOSSIER & RERA AUDIT</span>
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#0A1128] transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0A1128] via-slate-900 to-[#0A1128] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white">Seeking Custom Portfolio Syndication or Bespoke Corridors?</h3>
            <p className="text-sm text-slate-400 font-light max-w-xl">
              Our Executive Directors in Edison, NJ provide private 1-on-1 consultations for syndicating $500K+ U.S. capital structures into customized Gujarat commercial property trusts.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#007CDC] hover:bg-blue-600 text-white font-mono font-extrabold text-xs uppercase tracking-widest shrink-0 shadow-[0_0_25px_rgba(0,124,220,0.5)] transition-all"
          >
            BOOK PRIVATE SYNDICATION CHAT
          </Link>
        </div>

      </div>
    </section>
  );
}
