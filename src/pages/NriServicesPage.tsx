import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CheckCircle2, Globe2, Briefcase, Landmark, Building, Lock, ArrowRight, UserCheck, Scale, PhoneCall, DollarSign, HelpCircle, AlertCircle, FileCheck } from 'lucide-react';
import { Link } from 'wouter';

export default function NriServicesPage() {
  const servicePillars = [
    {
      title: "RERA & 30-Year Legal Title Audits",
      desc: "Zero Title-Risk Guarantee. Before presenting any real estate opportunity, our legal teams conduct comprehensive 30-year antecedent property title searches, verified Sub-Registrar records checking, and active RERA solvency auditing.",
      icon: <ShieldCheck className="w-7 h-7 text-[#007cdc]" />,
      badge: "TITLE DEFENSE"
    },
    {
      title: "FEMA & RBI Statutory Navigation",
      desc: "Complete statutory compliance for US Citizens, OCIs, and NRIs under the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) directives, ensuring lawful real estate acquisition and hassle-free capital ownership.",
      icon: <Scale className="w-7 h-7 text-[#007cdc]" />,
      badge: "STATUTORY SAFETY"
    },
    {
      title: "NRE / NRO Banking & Repatriation",
      desc: "We establish clean financial conduits linking your American operating accounts with designated NRE (Non-Resident External) and NRO (Non-Resident Ordinary) banking infrastructures in India for seamless funds transfer and profit repatriation.",
      icon: <Landmark className="w-7 h-7 text-[#007cdc]" />,
      badge: "LIQUIDITY ACCESS"
    },
    {
      title: "Power of Attorney (PoA) Coordination",
      desc: "Acquire sovereign physical property in GIFT City or Ahmedabad without leaving New Jersey or Pennsylvania. We structure legally robust Special Powers of Attorney executed via Indian Consulates in New York, Washington D.C., or San Francisco.",
      icon: <FileText className="w-7 h-7 text-[#007cdc]" />,
      badge: "REMOTE EXECUTION"
    },
    {
      title: "Turnkey Tenancy & Lease Matchmaking",
      desc: "Once your commercial tech floor or luxury residential villa is acquired, our Gujarat corporate teams coordinate physical handover, interior setup, multinational executive tenant acquisition, and routine quarterly maintenance inspections.",
      icon: <UserCheck className="w-7 h-7 text-[#007cdc]" />,
      badge: "PASSIVE REVENUE"
    },
    {
      title: "One Trade 360 Synchronous Desk",
      desc: "With direct point-of-contact at our Edison, New Jersey corporate offices (1885 Lincoln Highway), you communicate directly with U.S. executive directors during American working hours without international time lag.",
      icon: <PhoneCall className="w-7 h-7 text-[#007cdc]" />,
      badge: "USA DIRECT CONTACT"
    }
  ];

  const executionSteps = [
    {
      phase: "Phase 1: U.S. Portfolio Consultation",
      detail: "Meet with our executive directors in Edison, New Jersey (or via synchronous Zoom/WhatsApp) to discuss your U.S. business operating surplus, cash flow liquidity, and target Gujarat asset diversification goals."
    },
    {
      phase: "Phase 2: Curated Property Dossier Delivery",
      detail: "Receive bespoke RERA-vetted analytical dossiers highlighting verified properties across GIFT City IFSC, Dholera SIR, or Ahmedabad with precise rental net yields and projected compounding metrics."
    },
    {
      phase: "Phase 3: Statutory NRE/NRO Alignment",
      detail: "Our cross-border finance specialists assist in verifying NRE/NRO fund routing compliance, ensuring all dollar-to-rupee remittances strictly fulfill FEMA guidelines for future repatriation flexibility."
    },
    {
      phase: "Phase 4: Remote Title & Consular PoA Execution",
      detail: "Execute Special Power of Attorney documents through the Indian Consulate in the US if you prefer not to travel, while our attorneys conduct final Sub-Registrar title verification on site in Gujarat."
    },
    {
      phase: "Phase 5: Deed Registration & Key Handover",
      detail: "Official property sale deed registration is completed in your legal name at the government sub-registrar office, followed by physical inspection and custodial asset key handover."
    },
    {
      phase: "Phase 6: Turnkey Lease & Remittance Supervision",
      detail: "Our property management division acquires corporate multinational tenants, manages leasing agreements, and directs recurring rental yields straight into your NRE/NRO wealth account."
    }
  ];

  const legalProtocols = [
    {
      question: "What is the US-India DTAA Tax Treaty benefit?",
      answer: "Under Article 6 and Article 13 of the Double Taxation Avoidance Agreement (DTAA) between the USA and India, any property taxes or capital gains taxes paid in India can be claimed as a Foreign Tax Credit against your U.S. federal income tax liabilities (IRS Form 1116), entirely eliminating double taxation on asset appreciation and commercial rental yields.",
      icon: <DollarSign className="w-6 h-6 text-[#007cdc]" />
    },
    {
      question: "Can Overseas Citizens of India (OCI) inherit or purchase property?",
      answer: "Yes. Under Section 6(5) of FEMA regulations, NRIs and OCI cardholders hold statutory authorization to purchase unlimited commercial and residential property in India without prior RBI approval. Agricultural property required for land banking can be legally structured through designated industrial corporate vehicles or commercial conversion trusts.",
      icon: <Globe2 className="w-6 h-6 text-[#007cdc]" />
    },
    {
      question: "How does capital repatriation back to U.S. bank accounts operate?",
      answer: "Through an authorized NRE (Non-Resident External) or NRO (Non-Resident Ordinary) account, investors can repatriate up to $1,000,000 USD per financial year per individual under the RBI under Form 15CA and Chartered Accountant certified Form 15CB without friction or regulatory lockups.",
      icon: <FileCheck className="w-6 h-6 text-[#007cdc]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-24 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase bg-blue-50 px-5 py-2 rounded-full border border-blue-200 inline-block mb-6 shadow-xs">
              CROSS-BORDER CONCIERGE ADVISORY
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#131238] mb-6 tracking-tight">
              Specialized <span className="text-[#007cdc]">NRI Wealth Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed mb-12">
              Navigating Indian real estate from North America, Europe, or Australia should be entirely frictionless, transparent, and institutionally secure. Explore our complete end-to-end legal and execution architecture.
            </p>
            
            <div className="p-8 rounded-3xl bg-white border border-slate-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-md hover:shadow-lg transition-shadow text-left">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#007cdc] font-bold uppercase tracking-widest block mb-1">SYNCHRONOUS US & INDIA PARTNERSHIP</span>
                <h3 className="text-2xl font-serif font-bold text-[#131238]">Global Business Service | One Trade 360</h3>
                <p className="text-slate-600 text-xs sm:text-sm">Headquarters: 1885 Lincoln Highway, Edison, NJ 08817 | USA Line: <a href="tel:+16096618318" className="font-mono text-[#007cdc] font-bold hover:underline">+1-609-661-8318</a></p>
              </div>
              <Link
                href="/contact"
                className="px-9 py-4 rounded-full bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md hover:shadow-xl transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Statutory FEMA, DTAA Tax Treaty & Legal Protocol Guide */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              STATUTORY CERTAINTY & IRS COMPLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#131238] mb-4">
              Cross-Border Tax Treaties & FEMA Legal Framework
            </h2>
            <p className="text-slate-600 text-base font-normal">
              We eliminate ambiguity by structuring every property transaction directly in accordance with Reserve Bank of India mandates and U.S. IRS foreign tax credit procedures.
            </p>
          </div>

          <div className="space-y-6">
            {legalProtocols.map((proto, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs mt-1">
                  {proto.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#131238]">
                    {proto.question}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {proto.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Institutional Pillars of NRI Concierge Services */}
      <section className="py-28 bg-white relative border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              END-TO-END FIDUCIARY SHIELD
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-4">
              Comprehensive Cross-Border Architecture
            </h2>
            <p className="text-slate-600 text-base font-normal">
              We eliminate the common risks of informal brokers, untracked construction schedules, and ambiguous documentation. Our platform provides attorney-vetted certainty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePillars.map((serv, index) => (
              <motion.div
                key={serv.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                      {serv.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#007cdc] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                      {serv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#131238] mb-3 group-hover:text-[#007cdc] transition-colors">
                    {serv.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6">
                    {serv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-[#007cdc] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#007cdc]" />
                  <span>Institutional Fiduciary Guarantee</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* The 6-Phase NRI Buying Roadmap */}
      <section className="py-28 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              STREAMLINED ACQUISITION WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-4">
              Your 6-Phase Execution Roadmap
            </h2>
            <p className="text-slate-600 text-base font-normal">
              How U.S. and global investors safely transit capital into physical Indian sovereign real estate step by step without friction or operational distraction.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-300 ml-4 md:ml-20 space-y-12 pl-6 md:pl-12">
            {executionSteps.map((step, idx) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-6 h-6 rounded-full bg-white border-4 border-[#007cdc] group-hover:scale-125 transition-all duration-300 shadow-md" />

                <div className="p-8 rounded-3xl bg-white border border-slate-200 group-hover:border-blue-400 transition-all shadow-md group-hover:shadow-xl">
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#131238] group-hover:text-[#007cdc] transition-colors mb-3">
                    {step.phase}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
            >
              <span>Begin Phase 1 Advisory Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
