import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Building2, Globe2, CheckCircle2, ShieldAlert, Zap, Layers, ArrowRight, Plane, Anchor, Train, Landmark, Activity, BarChart2 } from 'lucide-react';
import { Link } from 'wouter';

export default function GujaratGrowthPage() {
  const corridors = [
    {
      id: "gift",
      name: "GIFT City IFSC",
      subtitle: "India's Operational International Financial Services Centre",
      desc: "An ultra-modern sovereign financial district rivaling Singapore and Dubai. GIFT City features automated vacuum waste collection, underground district cooling systems, and exceptional tax incentives that attract global banks, asset managers, and IT titans.",
      icon: <Building2 className="w-7 h-7 text-[#007cdc]" />,
      metrics: ["100% Tax Holiday for 10 Years", "Zero Capital Gains Tax on Specified Securities", "Over $60+ Billion in Banking Asset Registration"],
      status: "Operational & Rapid Expansion Phase"
    },
    {
      id: "dholera",
      name: "Dholera SIR (Special Investment Region)",
      subtitle: "India's Premier Greenfield Smart Industrial City",
      desc: "Encompassing over 920 sq km (larger than Singapore), Dholera SIR is engineered as India's global manufacturing center. Equipped with an international cargo airport, solar mega-park, and dedicated semiconductor manufacturing nodes (Tata-PSMC chip fab).",
      icon: <Layers className="w-7 h-7 text-[#007cdc]" />,
      metrics: ["Tata-PSMC $11 Billion Semiconductor Fab Node", "Dholera International Cargo Airport Linkage", "Direct Expressway & Freight Rail to Ahmedabad"],
      status: "High-Growth Land & Industrial Node Setup"
    },
    {
      id: "sanand",
      name: "Sanand Automobile & Semiconductor Node",
      subtitle: "The Automated Industrial & Manufacturing Capital",
      desc: "Located just 20 km from Ahmedabad, Sanand has rapidly established itself as one of the world's dense automotive and precision manufacturing hubs—home to manufacturing facilities of Tata Motors, Ford (Tata), Micron Technology, and hundreds of Tier-1 ancillary suppliers.",
      icon: <Zap className="w-7 h-7 text-[#007cdc]" />,
      metrics: ["Micron Technology $2.75 Billion ATMP Facility", "Over 200+ Operational Multinational Manufacturing Plants", "High Demand for Executive Corporate Housing & Hotels"],
      status: "Maturing Industrial & Commercial Rental Yield Hub"
    },
    {
      id: "ahmedabad",
      name: "Ahmedabad-Gandhinagar Twin City",
      subtitle: "The World-Class Civic & Commercial Metropolitan Center",
      desc: "Connected by world-class expressways and the upcoming Mumbai-Ahmedabad High-Speed Bullet Train, this twin metropolitan corridor represents Gujarat's primary economic, educational, and cultural powerhouse.",
      icon: <Train className="w-7 h-7 text-[#007cdc]" />,
      metrics: ["Mumbai-Ahmedabad High-Speed Bullet Train Terminus", "Premier Retail & Grade-A Corporate Office Showrooms", "Consistent Double-Digit Residential Villa Demand"],
      status: "Prime Metropolitan Equity Appreciation"
    },
    {
      id: "kandla",
      name: "Kandla & Mundra Maritime Port Corridor",
      subtitle: "Western India's Deep-Water Global Logistics Gateway",
      desc: "Handling the highest cargo volume in India, Mundra and Kandla ports serve as the essential maritime commercial gateways linking Northern and Western India to global trade routes across the Middle East, Europe, and Americas.",
      icon: <Anchor className="w-7 h-7 text-[#007cdc]" />,
      metrics: ["India's #1 Commercial Port Cargo Processing Zone", "Dedicated Western Freight Corridor (DFCC) Connectivity", "Prime Target for Ultra-Large Warehousing & Cold Storage"],
      status: "Institutional Logistics & Warehousing Expansion"
    },
    {
      id: "surat",
      name: "Surat Diamond & Textile High-Growth Node",
      subtitle: "Home to the World's Largest Office Complex (Surat Diamond Bourse)",
      desc: "Surat combines record-breaking economic vitality with rapid civic urbanization. Handling over 90% of the globe's diamond polishing and immense textile exports, Surat's commercial infrastructure represents an undepleted growth frontier.",
      icon: <Globe2 className="w-7 h-7 text-[#007cdc]" />,
      metrics: ["Surat Diamond Bourse (World's Largest Office Complex)", "Top 3 Fastest-Growing Commercial Cities in Asia", "Rapid Expansion of Commercial Retail & Towers"],
      status: "Commercial & Office Leasing Momentum"
    }
  ];

  const macroIndicators = [
    { label: "Gujarat National Export Share", val: "33%+", note: "#1 Exporting State in India" },
    { label: "National Industrial Output", val: "18%+", note: "Powering Manufacturing Growth" },
    { label: "Automated Bullet Train Speed", val: "320 km/h", note: "Mumbai-Ahmedabad Corridor Link" },
    { label: "State Annual GDP Growth", val: "10.5%+", note: "Consistently Outpacing Global Averages" }
  ];

  const megaProjects = [
    {
      title: "Mumbai-Ahmedabad High-Speed Bullet Train (MAHSR)",
      investment: "$15 Billion USD (E.38,000 Crore+)",
      completion: "Target Phase Operational 2026",
      impact: "Reduces transit between Mumbai, Surat, Vadodara, and Ahmedabad to under 2 hours. Real estate nodes within 10 km of bullet train transit terminals are projected to experience exponential land revaluation and densification."
    },
    {
      title: "Dholera International Cargo Airport (DXR)",
      investment: "$1.2 Billion USD Greenfield Aviation Gateway",
      completion: "Runway & Terminal Expansion In Progress",
      impact: "Engineered to relieve aviation congestion and function as Western India's global freight & semiconductor export logistics hub. Adjacent commercial NA parcels act as secure sovereign land banking anchors."
    },
    {
      title: "Ahmedabad-Dholera 4-Lane High-Speed Expressway",
      investment: "$550 Million USD Super-Corridor",
      completion: "Fully Operational Linkage",
      impact: "Connects Ahmedabad directly to Dholera SIR within 45 minutes. Industrial parks along this arterial freeway offer immediate pre-leased warehouse yield potential for offshore family offices."
    },
    {
      title: "GIFT City Phase II Institutional Expansions",
      investment: "Multi-Billion Sovereign Capital Injection",
      completion: "Continuous Tower Erection & Riverfront Link",
      impact: "Adds over 25 Million sq. ft. of commercial Grade-A office space and expatriate residential clusters. Offers 100% foreign asset ownership with complete zero-tax dividend repatriation under IFSC statutory mandates."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-24 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase bg-blue-50 px-5 py-2 rounded-full border border-blue-200 inline-block mb-6 shadow-xs">
              THE TRILLION-DOLLAR ENGINE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#131238] mb-6 tracking-tight">
              Gujarat High-Growth <span className="text-[#007cdc]">Infrastructure Corridors</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed mb-12">
              Gujarat stands as India's undisputable economic, logistical, and industrial sovereign powerhouse. Explore the six institutional corridors where U.S. capital reinvestment experiences maximum compounding velocity.
            </p>

            {/* Macro Indicator Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 max-w-5xl mx-auto">
              {macroIndicators.map((ind, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 text-center shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#007cdc] block mb-1">{ind.val}</span>
                  <span className="text-sm font-bold font-serif text-[#131238] block">{ind.label}</span>
                  <span className="text-[11px] text-slate-500 font-sans mt-0.5 block">{ind.note}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Sovereign Government Megaprojects & Capital Commitment Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              SOVEREIGN CAPITAL CATALYSTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-4">
              Mega-Infrastructure Projects Shaping Land Valuations
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Our real estate asset selections are explicitly tethered to government-approved mega-projects. When sovereign capital develops expressways, transit corridors, and financial hubs, private property equity compounds directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {megaProjects.map((proj, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono font-bold text-[#007cdc] bg-blue-100/60 px-3 py-1 rounded-full">
                      {proj.completion}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-700">
                      {proj.investment}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#131238] mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6">
                    {proj.impact}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#007cdc] pt-3 border-t border-slate-200">
                  <Activity className="w-4 h-4 text-[#007cdc]" />
                  <span>High-Impact Orion Investment Catchment Zone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Profiles of the 6 Mega-Corridors */}
      <section className="py-28 relative bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              TARGET INVESTABLE ZONES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-4">
              Detailed Strategic Profiles
            </h2>
            <p className="text-slate-600 text-base font-normal">
              We focus exclusively on locations supported by state-backed sovereign master planning, bullet train integration, and multi-billion dollar foreign corporate investments.
            </p>
          </div>

          <div className="space-y-12">
            {corridors.map((corr, index) => (
              <motion.div
                key={corr.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-2.5 h-full bg-[#007cdc] opacity-80 group-hover:w-3.5 transition-all" />

                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Corridor Details */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        {corr.icon}
                      </div>
                      <div>
                        <span className="text-xs font-mono tracking-widest text-[#007cdc] font-bold uppercase block mb-1">{corr.status}</span>
                        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#131238] group-hover:text-[#007cdc] transition-colors">
                          {corr.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base font-serif font-bold text-slate-800">
                      {corr.subtitle}
                    </p>

                    <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                      {corr.desc}
                    </p>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#007cdc] hover:text-[#131238] transition-colors"
                      >
                        <span>View Vetted Properties in {corr.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Metrics & Institutional Catalysts */}
                  <div className="lg:col-span-4 p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#007cdc] uppercase block border-b border-slate-200 pb-2.5">
                      INSTITUTIONAL CATALYSTS
                    </span>
                    <div className="space-y-3.5">
                      {corr.metrics.map((m, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#007cdc] shrink-0 mt-0.5" />
                          <span className="leading-snug">{m}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-200 text-center">
                      <Link
                        href="/contact"
                        className="w-full py-3.5 bg-[#007cdc] hover:bg-[#131238] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all block text-center shadow-sm hover:shadow-md"
                      >
                        Request Corridor Dossier
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Strategic Summary Banner */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-6">
            Align Your Capital with Gujarat's Industrial Velocity
          </h2>
          <p className="text-slate-600 text-base font-normal mb-8 leading-relaxed">
            Don't let timezones or geographical distance prevent you from participating in India's decade of sovereign transformation. Partner with Global Business Service One Trade 360 for verified access.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
          >
            <span>Speak With Our New Jersey Executive Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
