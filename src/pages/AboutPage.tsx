import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, TrendingUp, Building2, Award, Users, ArrowRight, CheckCircle2, Landmark, BarChart3, Briefcase, Zap, MapPin, Scale, FileText } from 'lucide-react';
import { Link } from 'wouter';

export default function AboutPage() {
  const strategySteps = [
    {
      step: "01",
      title: "Build U.S. Cash Flow Engines",
      desc: "Own and operate dependable, high-turnover U.S. enterprises such as Gas Stations, Convenience Stores, Hospitality Motels, Franchised Restaurants, and Logistics Truck Stops that generate recurring daily liquid surplus.",
      icon: <Briefcase className="w-7 h-7 text-[#007cdc]" />
    },
    {
      step: "02",
      title: "Disciplined Reinvestment Channeling",
      desc: "Rather than allowing operating profits to stagnate in low-yielding cash accounts subject to inflationary erosion, systematically channel surplus through legally cleared NRE/NRO pathways into institutionally vetted infrastructure.",
      icon: <TrendingUp className="w-7 h-7 text-[#007cdc]" />
    },
    {
      step: "03",
      title: "Scale Gujarat Infrastructure Assets",
      desc: "Acquire Grade-A commercial towers in GIFT City IFSC, smart industrial plots in Dholera SIR and Sanand, and prime luxury residential villas across Ahmedabad during unprecedented economic expansion.",
      icon: <Building2 className="w-7 h-7 text-[#007cdc]" />
    },
    {
      step: "04",
      title: "Generational Sovereign Compounding",
      desc: "Enjoy long-term capital appreciation, structured multinational tenant rental yields, optimal FEMA compliance, and enduring multi-generational family wealth across dual continents.",
      icon: <Landmark className="w-7 h-7 text-[#007cdc]" />
    }
  ];

  const corePillars = [
    {
      title: "Zero-Risk Title Vetting Protocol",
      desc: "We enforce rigorous institutional governance. Before any property development is approved for our clientele, specialized real estate attorneys perform exhaustive 30-year title searches, complete RERA encumbrance verifications, and physical developer solvency audits.",
      badge: "FIDUCIARY SAFETY"
    },
    {
      title: "Synchronous Dual-Continent Desks",
      desc: "With Global Business Service One Trade 360 headquartered at 1885 Lincoln Highway in Edison, New Jersey (USA), and active executive desks across Gujarat (India), our investors experience real-time assistance in both EST and IST timezones.",
      badge: "BORDERLESS ADVISORY"
    },
    {
      title: "FEMA & RBI Legal Alignment",
      desc: "Navigating cross-border real estate compliance made seamless. We guide US Citizens, Overseas Citizens of India (OCI), and Non-Resident Indians (NRIs) through every statutory requirement of the Foreign Exchange Management Act and RBI repatriation pathways.",
      badge: "STATUTORY PRECISION"
    },
    {
      title: "Turnkey Passive Asset Governance",
      desc: "You operate your U.S. business without distraction while our executive teams coordinate on-site property inspections, municipal tax assessments, corporate tenant leasing matchmaking, and annual compliance reporting thousands of miles away.",
      badge: "COMPLETE PEACE OF MIND"
    }
  ];

  const leadershipDesks = [
    {
      title: "USA Strategic Advisory Headquarters",
      location: "Edison, New Jersey & Pennsylvania Node",
      role: "U.S. Enterprise Profit Transition & Wealth Planning",
      details: "Our American desks focus on understanding U.S. business operating cycles (gas station fuel margins, retail convenience turnover, motel seasonal occupancy) to formulate structured capital deployment schedules.",
      contact: "+1-609-661-8318 | 1885 Lincoln Hwy, Edison NJ 08817"
    },
    {
      title: "Gujarat Institutional Execution Desk",
      location: "Ahmedabad & GIFT City Regional Headquarters",
      role: "On-the-Ground Project Scouting & RERA Execution",
      details: "Our Gujarat executive teams manage developer institutional pricing negotiations, on-site structural construction audits, sub-registrar official deed registration, and corporate lease facilitation.",
      contact: "+91-95123-01869 | Ahmedabad Twin City & GIFT City Corridor"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase bg-blue-50 px-5 py-2 rounded-full border border-blue-200 inline-block mb-6 shadow-xs">
              CORPORATE PROFILE & GOVERNANCE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#131238] mb-8 tracking-tight leading-[1.15]">
              Transforming U.S. Business Profits into <span className="text-[#007cdc]">Sovereign Indian Infrastructure</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed mb-10">
              The true objective of U.S. enterprise operation is not merely generating active business profits, but systematically deploying surplus operating capital from gas stations, convenience stores, and franchised retail to construct permanent, high-yielding tangible real estate assets across Gujarat's economic transformation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/opportunities"
                className="px-9 py-4 rounded-full bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2"
              >
                <span>Explore Verified Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-9 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-[#131238] font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                Schedule Executive Advisory
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 4-Stage Orion Infrastructure Strategy */}
      <section className="py-28 relative bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              STRATEGIC REINVESTMENT FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-6">
              How U.S. Enterprise Cash Flows Fuel Long-Term Compounding
            </h2>
            <p className="text-slate-600 text-base font-normal leading-relaxed">
              We bridge two of the world's most robust economic landscapes: harvesting active liquid cash flow in North America and seeding institutional high-yield real estate capital across industrializing Gujarat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategySteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group relative overflow-hidden bg-white"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none group-hover:bg-blue-100/60 transition-all" />
                
                <div>
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-serif font-bold text-slate-300 group-hover:text-[#007cdc] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#131238] mb-4 group-hover:text-[#007cdc] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-[#007cdc] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#007cdc]" />
                  <span>Verified Orion Blueprint</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW: Institutional Comparative Analysis & Market Reality Table */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              ECONOMIC ARCHETYPE & YIELD DIFFERENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#131238] mb-4">
              Why U.S. Entrepreneurs Pivot Capital Into Gujarat Real Estate
            </h2>
            <p className="text-slate-600 text-base font-normal">
              A detailed comparative assessment illustrating why capital diversification from Western operating cash flows into Indian physical infrastructure offers superior risk-adjusted growth.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl bg-white border border-slate-200 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-50/80 border-b border-slate-200 text-[#131238] text-xs uppercase tracking-wider font-bold">
                  <th className="py-5 px-6 font-mono">Strategic Financial Metric</th>
                  <th className="py-5 px-6 font-mono">Standard U.S. Real Estate / Cash Reserve</th>
                  <th className="py-5 px-6 font-mono bg-blue-100/60 text-[#007cdc]">Orion Gujarat Corridor Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-[#131238] flex items-center gap-2.5">
                    <BarChart3 className="w-4 h-4 text-[#007cdc] shrink-0" />
                    Capital Appreciation Velocity
                  </td>
                  <td className="py-5 px-6 text-slate-600">3% to 5% annualized across saturated metropolitan zones with compressed capitalization rates.</td>
                  <td className="py-5 px-6 font-bold text-[#131238] bg-blue-50/20">12% to 18% annualized in sovereign economic nodes (GIFT City, Dholera SIR, Sanand EV Corridor).</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-[#131238] flex items-center gap-2.5">
                    <Landmark className="w-4 h-4 text-[#007cdc] shrink-0" />
                    Tax Efficiency & Repatriation
                  </td>
                  <td className="py-5 px-6 text-slate-600">High State/Federal capital gains & estate taxes upon generational transfer or disposal.</td>
                  <td className="py-5 px-6 font-bold text-[#131238] bg-blue-50/20">Structured NRE/NRO banking paths under FEMA with clear RBI tax treaty (DTAA) provisions & zero inheritance tax in India.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-[#131238] flex items-center gap-2.5">
                    <Scale className="w-4 h-4 text-[#007cdc] shrink-0" />
                    Asset Protection & Governance
                  </td>
                  <td className="py-5 px-6 text-slate-600">Vulnerable to high operational litigation exposure and fluctuating domestic interest rates.</td>
                  <td className="py-5 px-6 font-bold text-[#131238] bg-blue-50/20">100% RERA verified title deeds, clean multi-decade solvency checking, and hard physical collateral ownership.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-[#131238] flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#007cdc] shrink-0" />
                    Management Overhead
                  </td>
                  <td className="py-5 px-6 text-slate-600">Intensive property maintenance, contractor disputes, and local zoning delays.</td>
                  <td className="py-5 px-6 font-bold text-[#131238] bg-blue-50/20">Turnkey asset stewardship via One Trade 360 desks handling leasing, municipal oversight, and quarterly audit dossiers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Core Institutional Pillars */}
      <section className="py-28 relative bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
                WHY CHOOSE ORION & ONE TRADE 360
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238]">
                Fiduciary Excellence & Institutional Shield
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm font-normal leading-relaxed">
              We distinguish ourselves from retail marketing platforms by enforcing strict institutional legal diligence, safeguarding investor principal through architectural oversight and proactive risk mitigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-9 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-xs hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#007cdc] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 inline-block mb-5 shadow-xs">
                    {pillar.badge}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#131238] mb-4 group-hover:text-[#007cdc] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-base font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#131238]/70">
                  <span>Guaranteed Client Protection</span>
                  <ShieldCheck className="w-4 h-4 text-[#007cdc]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Executive Desks Section */}
      <section className="py-28 relative bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              DUAL-CONTINENT OPERATIONAL PRESENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-6">
              One Trusted USA & India Leadership Network
            </h2>
            <p className="text-slate-600 text-base font-normal leading-relaxed">
              Through Global Business Service One Trade 360, our dual-headquarters structure eliminates international communication latency, guarantees real-time banking coordination, and assures physical on-site project evaluation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {leadershipDesks.map((desk, idx) => (
              <motion.div
                key={desk.title}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-[#007cdc] shadow-xs">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-[#131238]">{desk.title}</h4>
                      <span className="text-xs font-mono text-[#007cdc] font-bold">{desk.location}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                    <span className="text-xs font-mono text-slate-500 font-semibold uppercase block mb-1">STRATEGIC FOCUS</span>
                    <p className="text-sm font-bold text-[#131238]">{desk.role}</p>
                  </div>

                  <p className="text-slate-600 text-sm font-normal leading-relaxed mb-8">
                    {desk.details}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200 font-mono text-xs text-[#007cdc] font-bold">
                  {desk.contact}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Box */}
          <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-slate-50 border border-slate-200 text-center relative overflow-hidden shadow-xl">
            <h3 className="text-3xl font-serif font-bold text-[#131238] mb-4">Ready to Put Your Operating Cash Flow to Work?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-base font-normal mb-8">
              Connect with our Edison, New Jersey executive desk today to request confidential RERA property dossiers across GIFT City, Ahmedabad, and Dholera SIR.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
            >
              <span>Initiate Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
