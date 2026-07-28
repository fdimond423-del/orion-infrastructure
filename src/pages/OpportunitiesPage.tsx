import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Home, Briefcase, TrendingUp, ArrowRight, ShieldCheck, CheckCircle2, DollarSign, MapPin, Layers, Map } from 'lucide-react';
import { Link } from 'wouter';

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState('residential');

  const categories = [
    {
      id: 'residential',
      label: 'Luxury Residential & Villas',
      icon: <Home className="w-5 h-5 text-[#007cdc]" />,
      tagline: 'HIGH-APPRECIATION SOVEREIGN LIVING',
      desc: 'Institutional Grade-A luxury villas, independent bungalows, and sky-rise residences across Ahmedabad Twin City, Gandhinagar, and Dholera peripheries tailored for NRIs seeking secure family heritage and premium capital growth.',
      avgYield: '12% - 18% Annual Value Compounding',
      minTicket: '$150,000 USD (INR 1.25 Cr+)',
      properties: [
        {
          title: "Ahmedabad Twin-City Luxury Villas",
          loc: "Shilaj & SG Highway Extension",
          type: "Independent 4 & 5 BHK Smart Villas",
          yield: "15% Est. Annual Compounding",
          features: ["RERA Approved & Clear Index-II Title", "Gated Ultra-Luxury Clubhouse & Civic Security", "Direct NRE/NRO Repatriation Compatible"]
        },
        {
          title: "Gandhinagar Green Pavilion Residences",
          loc: "Near GIFT City Outer Ring",
          type: "Ultra-High-Rise Panoramic Sky Villas",
          yield: "14% Est. Annual Compounding",
          features: ["Adjacent to International Financial Hub", "Automated Smart Home & Solar Infrastructure", "High Demand for Expatriate Corporate Rental"]
        },
        {
          title: "Dholera SIR Greenfield Bungalow Nodes",
          loc: "Dholera Town Planning Scheme 1 & 2",
          type: "Sovereign Residential Plot & Construction",
          yield: "18% Est. High-Growth Appreciation",
          features: ["Connected to India's First Greenfield Smart City", "Zero Flood Risk & Underground Utility Tunnels", "Government Vetted Master Town Planning"]
        }
      ]
    },
    {
      id: 'commercial',
      label: 'Commercial & IFSC Tech Towers',
      icon: <Building className="w-5 h-5 text-[#007cdc]" />,
      tagline: 'SOVEREIGN FINANCIAL & TECH HUB LEASING',
      desc: 'Prime floor-plates, flagship office suites, and corporate headquarters within GIFT City SEZ and Non-SEZ zones, offering 100% tax exemption benefits and stable dollar-pegged or corporate long-term leasing yields.',
      avgYield: '8% - 11% Net Rental Yield + Capital Growth',
      minTicket: '$250,000 USD (INR 2.10 Cr+)',
      properties: [
        {
          title: "GIFT City IFSC Corporate Tower Floors",
          loc: "GIFT International Financial SEZ Zone",
          type: "Grade-A Institutional Office Spaces",
          yield: "9.5% Net Lease + 15% Appreciation",
          features: ["100% Tax Holiday Benefit Under IFSC Rules", "Pre-Leased & Vacant Institutional Suites Available", "Tenants Include Global Banks, Tech Titans & FinTech"]
        },
        {
          title: "Ahmedabad SG Highway Commercial Gateway",
          loc: "Sarkhej-Gandhinagar Primary Highway",
          type: "Flagship Retail & Corporate Showroom Hub",
          yield: "8.8% Recurring Rental Yield",
          features: ["Maximum Traffic Exposure & Frontage", "Long-Term Corporate Anchor Tenancy Agreements", "Zero Debt & Full Encumbrance-Free Title"]
        },
        {
          title: "Sanand Automobile Tech Plaza",
          loc: "Sanand GIDC Industrial Entrance",
          type: "Business Hotel & Commercial Arcade",
          yield: "10.2% Composite Cash Flow Yield",
          features: ["Servicing Tata, Ford, & Micron Executive Traffic", "Turnkey Property Management Available", "High Daily Footfall & Hospitality Yield"]
        }
      ]
    },
    {
      id: 'income',
      label: 'Recurring Cash Flow & Industrial',
      icon: <Briefcase className="w-5 h-5 text-[#007cdc]" />,
      tagline: 'TURNKEY PASSIVE LEASING ENGINES',
      desc: 'Pre-leased logistics warehouses, student housing nodes, and automated industrial warehousing facilities designed specifically to absorb U.S. gas station and convenience store operating cash flow into inflation-proof physical assets.',
      avgYield: '10% - 14% Annual Recurring Dividend Equivalent',
      minTicket: '$200,000 USD (INR 1.65 Cr+)',
      properties: [
        {
          title: "Sanand & Viramgam Logistics Warehouse Park",
          loc: "Delhi-Mumbai Industrial Corridor (DMIC) Node",
          type: "Automated Grade-A Industrial Warehouse",
          yield: "11.5% Guaranteed Net Lease Yield",
          features: ["Long-Term Corporate Logistics Tenant Leases", "Direct Access to Western Freight Corridor", "Full Turnkey Property Maintenance Supervision"]
        },
        {
          title: "Kandla Maritime Freight Port Logistics Hub",
          loc: "Kandla & Mundra Port Expressway Link",
          type: "Export-Import Warehousing & Container Node",
          yield: "13.2% Composite Return on Investment",
          features: ["High Capacity Customs & SEZ Storage Facility", "Dollar-Pegged & International Trade Exposure", "Institutionally Insured & Governed"]
        },
        {
          title: "GIFT City University Executive Housing",
          loc: "GIFT City Educational & Residential Sector",
          type: "Turnkey Expatriate Serviced Apartments",
          yield: "10.0% Recurring Passive Rental Income",
          features: ["Dedicated Management by Orion & One Trade 360", "Zero Maintenance Stress for Overseas Landlords", "Quarterly Direct Remittance into NRE Account"]
        }
      ]
    },
    {
      id: 'landbanking',
      label: 'Strategic Land Banking & Parcels',
      icon: <Map className="w-5 h-5 text-[#007cdc]" />,
      tagline: 'LONG-TERM SOVEREIGN WEALTH PRESERVATION',
      desc: 'Large-scale verified clear-title agricultural and non-agricultural (NA) land parcels adjacent to future infrastructure super-highways, bullet train transit stations, and planned greenfield airports across Gujarat.',
      avgYield: '15% - 22% Multi-Year Land Value Appreciation',
      minTicket: '$300,000 USD (INR 2.50 Cr+)',
      properties: [
        {
          title: "Dholera International Airport Corridor Land",
          loc: "Navagam & Dholera SIR Aviation Zone",
          type: "Prime Commercial & Industrial NA Land",
          yield: "20%+ Est. Long-Term Appreciation",
          features: ["Direct Adjacency to upcoming Greenfield Airport", "100% Clear Title Verified by Senior Advocates", "Ideal for Institutional Consortiums & Land Trusts"]
        },
        {
          title: "Mumbai-Ahmedabad High Speed Rail Transit Plot",
          loc: "Sabarmati to Bilimora High-Speed Link",
          type: "Strategic Transit-Oriented Development Parcel",
          yield: "16.5% Annual Value Enhancement",
          features: ["Located near Bullet Train Regional Feeders", "High Future Density Zoning Conversion Potential", "Zero Encumbrances & Clean Revenue Record"]
        },
        {
          title: "Sanand Semiconductor Ecosystem Expansion Park",
          loc: "Near Micron & Tata Semiconductor Fabrication Plant",
          type: "Industrial Ancillary Feeder Land",
          yield: "18.0% Strategic Industrial Growth",
          features: ["Direct Supply-Chain Ecosystem Positioning", "Rapid Municipal Infrastructure Integration", "Turnkey Fencing and Physical Site Guardianship"]
        }
      ]
    }
  ];

  const activeCategoryData = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase bg-blue-50 px-5 py-2 rounded-full border border-blue-200 inline-block mb-6 shadow-xs">
              DISCIPLINED ASSET DIVERSIFICATION
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#131238] mb-6 tracking-tight">
              Institutional <span className="text-[#007cdc]">Property Opportunities</span>
            </h1>
            <p className="text-lg text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
              We scout, perform attorney-grade title audits, and negotiate premier sovereign real estate acquisitions across Gujarat's trillion-dollar industrial transformation. Explore verified institutional asset portfolios below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Property Portfolio Section */}
      <section className="py-24 bg-white relative border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          {/* Tab Selection Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-slate-200 pb-8">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-3 px-7 py-4 rounded-2xl text-sm md:text-base font-bold transition-all duration-300 border ${
                    isActive 
                      ? 'bg-[#007cdc] border-[#007cdc] text-white shadow-md scale-105' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-[#007cdc] hover:bg-white hover:border-blue-300 shadow-xs'
                  }`}
                >
                  <div className={isActive ? "text-white" : "text-[#007cdc]"}>
                    {cat.icon}
                  </div>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Header & Metrics Box */}
          <motion.div
            key={activeCategoryData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 mb-12 shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-bl-full pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block">
                  {activeCategoryData.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#131238]">
                  {activeCategoryData.label}
                </h2>
                <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
                  {activeCategoryData.desc}
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block mb-1">Target Compounding & Yield</span>
                  <span className="text-lg sm:text-xl font-bold text-[#007cdc] font-mono">{activeCategoryData.avgYield}</span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block mb-1">Typical Capital Entry Ticket</span>
                  <span className="text-base sm:text-lg font-bold text-[#131238] font-mono">{activeCategoryData.minTicket}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Property Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {activeCategoryData.properties.map((prop, idx) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                      <span className="text-xs font-mono font-bold text-[#007cdc] flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 shrink-0" /> {prop.loc}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#131238] mb-3 group-hover:text-[#007cdc] transition-colors leading-snug">
                      {prop.title}
                    </h3>
                    
                    <span className="text-xs font-mono font-semibold bg-slate-100 text-slate-700 px-3.5 py-1 rounded-full border border-slate-200 block w-fit mb-6">
                      {prop.type}
                    </span>

                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-mono tracking-widest text-[#007cdc] uppercase font-bold block">
                        VETTED ASSET HIGHLIGHTS:
                      </span>
                      {prop.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#007cdc] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 text-center">
                      <span className="text-[11px] font-bold text-slate-500 block uppercase font-mono mb-1">Projected Growth Profile</span>
                      <span className="text-base sm:text-lg font-bold font-mono text-[#131238]">{prop.yield}</span>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full py-4 rounded-2xl bg-[#007cdc] hover:bg-[#131238] text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md hover:shadow-lg"
                    >
                      <span>Request Full Evaluation Dossier</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Why Gujarat Real Estate Over Other Global Assets */}
      <section className="py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              MACROECONOMIC MOMENTUM & FISCAL POLICY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-6">
              Why Sovereign Real Estate Outperforms Stagnant Cash
            </h2>
            <p className="text-slate-600 text-base font-normal leading-relaxed">
              Holding operating surplus in low-yield deposit accounts risks continuous inflationary devaluation. Tangible institutional Grade-A property offers sovereign protection: steady principal appreciation, recurrent leasing yields, and optimized statutory tax exemptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mx-auto flex items-center justify-center text-[#007cdc] text-2xl font-bold font-mono shadow-xs">
                100%
              </div>
              <h4 className="text-xl font-serif font-bold text-[#131238]">10-Year Tax Exemption</h4>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Entities operating and leasing commercial property within GIFT City IFSC benefit from a full 100% corporate tax holiday for any 10 consecutive years out of a 15-year statutory block under Indian Income Tax Act regulations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mx-auto flex items-center justify-center text-[#007cdc] text-2xl font-bold font-mono shadow-xs">
                3.5x
              </div>
              <h4 className="text-xl font-serif font-bold text-[#131238]">Corridor Valuation Multiples</h4>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Greenfield infrastructure corridors adjacent to Dholera Special Investment Region (SIR) and Sanand EV manufacturing hubs historically demonstrate 3x to 4x appreciation multiples upon highway and rail completion.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mx-auto flex items-center justify-center text-[#007cdc] text-2xl font-bold font-mono shadow-xs">
                NRE
              </div>
              <h4 className="text-xl font-serif font-bold text-[#131238]">Seamless Repatriation</h4>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                All capital gains, dividends, and rental lease proceeds earned across verified Gujarat asset portfolios can be lawfully repatriated back to U.S. and overseas commercial bank accounts under RBI approved NRE/NRO pathways.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
