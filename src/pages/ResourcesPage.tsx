import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, HelpCircle, FileText, Download, ChevronDown, CheckCircle2, Search, ArrowRight, Bookmark, Lock, ShieldCheck, FileCheck, Eye } from 'lucide-react';
import { Link } from 'wouter';

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activePubPreview, setActivePubPreview] = useState<number | null>(null);

  const publications = [
    {
      title: "GIFT City IFSC Comprehensive Tax Holiday & Investor Guide (2026 Edition)",
      desc: "An exhaustive technical analysis of the 100% 10-year corporate tax exemption rules, zero capital gains implications, and Grade-A floor-plate leasing yields within India's sole operational International Financial Services Centre.",
      category: "SOVEREIGN TAX & LEGAL DOSSIER",
      pages: "48 Pages | Interactive PDF",
      excerpt: "Executive Summary Excerpt: Companies licensed under the IFSCA Act enjoy 100% corporate tax deduction for 10 out of 15 years. Furthermore, offshore dividends transferred to U.S. domestic holding entities incur 0% withholding tax under expanded financial treaties, creating an unmitigated global competitive yield multiplier."
    },
    {
      title: "The U.S. Franchise & Gas Station Asset Diversification Playbook",
      desc: "Designed specifically for U.S. enterprises operating convenience stores, gas stations, hospitality motels, and restaurant franchises. Learn how to systematically transition operating profits into high-compounding Gujarat sovereign real estate.",
      category: "U.S. WEALTH STRATEGY GUIDE",
      pages: "36 Pages | Case Studies Included",
      excerpt: "Executive Summary Excerpt: While U.S. commercial strip centers currently trade at compressed 5.5% to 6.5% cap rates with stagnant appreciation, pre-leased corporate floor-plates in Ahmedabad and GIFT City generate 7.8%+ rental yields accompanied by proven double-digit land value compounding."
    },
    {
      title: "FEMA & RBI Statutory Compliance Guide for American NRIs and OCIs",
      desc: "Complete statutory breakdown of NRE vs. NRO fund routing, Reserve Bank of India immovable property acquisition regulations, consular Special Power of Attorney execution, and capital repatriation protocols.",
      category: "STATUTORY & REGULATORY GUIDE",
      pages: "42 Pages | Legal Checklists",
      excerpt: "Executive Summary Excerpt: Section 6(5) of FEMA legally entitles NRIs and OCI cardholders to purchase unlimited Indian real property without pre-clearance from the RBI. Repatriation of rental proceeds via Form 15CA/CB is completely unrestricted up to $1 Million USD annually per individual."
    },
    {
      title: "Dholera SIR & Sanand Industrial Mega-Corridor Market Evaluation",
      desc: "Deep economic and infrastructural survey tracking semiconductor mega-plants (Tata-PSMC chip fab, Micron Technology), bullet train terminals, freight corridors, and multi-fold appreciation models.",
      category: "INFRASTRUCTURE MARKET SURVEY",
      pages: "54 Pages | Maps & Projections",
      excerpt: "Executive Summary Excerpt: The $11 Billion Tata-PSMC chip fabrication plant in Dholera SIR is triggering massive corporate logistics demands. Industrial land values within 5 kilometers of arterial expressway linkages have climbed 22% year-over-year."
    }
  ];

  const faqs = [
    {
      q: "How does Orion Infrastructure safely channel U.S. business operating profits into Indian real estate?",
      a: "We work directly with owners of U.S. gas stations, convenience stores, and franchised enterprises to evaluate excess operating liquidity. Rather than leaving profits in low-yield fiat bank accounts subject to U.S. inflation, we utilize lawful NRE (Non-Resident External) and NRO (Non-Resident Ordinary) banking pathways to deploy surplus cash flow into high-yield, institutionally vetted sovereign property in Gujarat (GIFT City, Dholera SIR, Ahmedabad)."
    },
    {
      q: "What is Global Business Service | One Trade 360, and where are your executive desks located?",
      a: "Global Business Service | One Trade 360 serves as our core operational and advisory corporate partnership. Our USA Headquarters Desk is situated at 1885 Lincoln Highway, Edison, NJ 08817 (+1-609-661-8318), servicing American business owners across Pennsylvania, New Jersey, New York, Texas, and California. Our synchronous India Executive Desk is headquartered in Gujarat (+91-95123-01869), managing on-the-ground property vetting, RERA audits, and physical developer negotiations."
    },
    {
      q: "Can U.S. citizens holding Overseas Citizen of India (OCI) cards lawfully buy commercial property in Gujarat?",
      a: "Yes, under Reserve Bank of India (RBI) and Foreign Exchange Management Act (FEMA) directives, OCI cardholders and Non-Resident Indians (NRIs) have complete statutory freedom to acquire independent commercial, industrial, and residential real estate throughout India without requiring specific RBI prior approval (excluding agricultural/plantation property)."
    },
    {
      q: "What are the specific tax exemption benefits of investing inside GIFT City IFSC?",
      a: "Entities registered and operating within the GIFT City International Financial Services Centre (IFSC) benefit from a 100% corporate tax exemption for any 10 consecutive years out of a 15-year block under Indian Income Tax provisions. Furthermore, specified capital gains, stamp duty waivers, and GST concessions make GIFT City one of the most globally competitive real estate investment zones."
    },
    {
      q: "How does capital and profit repatriation back to U.S. bank accounts operate under FEMA rules?",
      a: "Repatriation of initial capital and subsequent rental lease revenues is completely legal and standardized under FEMA. Funds remitted from the U.S. via NRE accounts can be freely repatriated back in US Dollars along with capital gains and rental surplus upon adherence to basic tax filing requirements in India, subject to authorized limits."
    },
    {
      q: "Do I need to physically travel to Ahmedabad or GIFT City to sign deed deeds or lease contracts?",
      a: "No physical international travel is mandatory. Through our specialized legal concierge team, we structure crisp Special Powers of Attorney (PoA) specifically tailored for real estate representation, which can be notarized and apostille-attested through the Indian Consulate in New York, Washington D.C., Chicago, or San Francisco."
    },
    {
      q: "What is Orion Infrastructure's Zero Title-Risk Vetting Protocol?",
      a: "Unlike traditional unregulated brokers, our institutional legal and real estate engineering teams enforce strict governance. Before any opportunity is listed on our platform, our real estate attorneys perform a 30-year property title antecedent search, verify encumbrance-free Sub-Registrar Index-II certificates, and audit developer financial solvency under RERA statutes."
    },
    {
      q: "Who manages daily property maintenance, tenant acquisition, and rent collection once I purchase an asset?",
      a: "Through our turnkey property management division and One Trade 360’s local Gujarat operations desk, we take full responsibility for post-acquisition asset custody. We market your property to verified multinational corporate executives, manage leasing agreements, supervise scheduled maintenance, and direct net rental remittances directly into your banking accounts."
    },
    {
      q: "Why is Gujarat outperforming other Indian states in commercial property appreciation multiples?",
      a: "Gujarat currently accounts for over 33% of India's entire national export volume and is powered by state-backed master planned infrastructure projects including the Mumbai-Ahmedabad High-Speed Bullet Train, the Delhi-Mumbai Industrial Corridor (DMIC), Dholera SIR greenfield airport, and multi-billion-dollar foreign direct investments from corporate giants such as Micron, Tata, Ford, and international banking titans."
    },
    {
      q: "How can I schedule a confidential consultation with an Orion & One Trade 360 executive director today?",
      a: "You can reach out instantly via our dedicated Contact Us page, call our Edison, New Jersey Headquarters line directly at +1-609-661-8318, connect via our WhatsApp Executive Desk button, or email our support desk at info@onetrade360.com to receive immediate synchronous advisory."
    }
  ];

  const glossaryTerms = [
    { term: "IFSC", full: "International Financial Services Centre", desc: "A sovereign financial jurisdiction inside India offering global offshore tax treatments, automated urban infrastructure, and regulatory parity with Singapore and London." },
    { term: "SIR", full: "Special Investment Region", desc: "A statutorily enacted urban and industrial zone (such as Dholera SIR) endowed with self-governing municipal authority and expedited foreign direct investment approvals." },
    { term: "RERA", full: "Real Estate Regulatory Authority", desc: "India's uncompromising institutional regulator that mandates full financial escrow transparency, structural warranties, and delivery guarantees on all licensed property developments." },
    { term: "NRE / NRO", full: "Non-Resident External / Ordinary Accounts", desc: "Authorized banking protocols enabling U.S. and global NRIs to maintain Rupee funds with guaranteed conversion and repatriation privileges back into foreign currencies." },
    { term: "Index-II", full: "Official Sub-Registrar Property Deed Summary", desc: "The government-issued legal instrument verifying title registration, property boundaries, and unencumbered ownership rights within public municipal land archives." },
    { term: "FCNR", full: "Foreign Currency Non-Resident Account", desc: "A term deposit banking instrument enabling NRIs to hold capital in US Dollars within Indian banks without exposure to currency depreciation or local income tax." }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-24 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase bg-blue-50 px-5 py-2 rounded-full border border-blue-200 inline-block mb-6 shadow-xs">
              STRATEGIC KNOWLEDGE & DOSSIERS
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#131238] mb-6 tracking-tight">
              Investor Resources & <span className="text-[#007cdc]">Technical FAQ</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed mb-12">
              Empower your U.S. operational reinvestment decisions with institutional analytical publications, comprehensive FEMA tax guidance, and detailed answers to cross-border real estate questions.
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="w-5 h-5 text-[#007cdc] absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search FAQs (e.g., tax holidays, FEMA rules, One Trade 360 desks, PoA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full bg-white border border-slate-300 focus:border-[#007cdc] text-slate-800 placeholder:text-slate-400 outline-none transition-all shadow-md hover:shadow-lg text-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-500 hover:text-[#007cdc] transition-colors"
                >
                  CLEAR
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Strategic Publications with Interactive Previews */}
      <section className="py-28 bg-white relative border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-2">
                DOWNLOADABLE STRATEGIC DOSSIERS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238]">
                Institutional Publications
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm font-normal leading-relaxed">
              Our research team continuously publishes technical analysis examining economic compounding rates, commercial floor-plate absorptions, and tax exemption laws in Gujarat. Click any dossier to inspect executive summary previews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub, idx) => {
              const isPreview = activePubPreview === idx;
              return (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#007cdc] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
                        {pub.category}
                      </span>
                      <span className="text-xs text-slate-500 font-mono font-bold">{pub.pages}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#131238] mb-4 group-hover:text-[#007cdc] transition-colors leading-snug">
                      {pub.title}
                    </h3>

                    <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6">
                      {pub.desc}
                    </p>

                    {/* Interactive Preview Excerpt Box */}
                    <AnimatePresence>
                      {isPreview && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mb-6"
                        >
                          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl text-xs text-slate-700 font-normal leading-relaxed shadow-inner">
                            <span className="font-bold text-[#007cdc] block mb-1 font-mono uppercase tracking-wider">Verified Analytical Excerpt:</span>
                            {pub.excerpt}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setActivePubPreview(isPreview ? null : idx)}
                      className="text-xs font-mono text-[#007cdc] font-bold flex items-center gap-2 hover:underline focus:outline-none"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{isPreview ? "Hide Executive Excerpt" : "Read Executive Excerpt"}</span>
                    </button>

                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-xl bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
                    >
                      <span>Request Full Dossier</span>
                      <Download className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Comprehensive FAQ Accordion */}
      <section className="py-28 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-3">
              KNOWLEDGE BASE & TECHNICAL ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base font-normal">
              We provide transparent, unvarnished technical answers regarding cross-border banking, title laws, RERA safety protocols, and One Trade 360 operations.
            </p>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl shadow-sm">
                <p className="text-slate-600 font-normal mb-4">No specific questions matched your search query "{searchQuery}".</p>
                <button onClick={() => setSearchQuery("")} className="px-6 py-2 bg-[#007cdc] text-white font-bold text-xs uppercase rounded-full shadow-sm hover:bg-[#131238] transition-colors">Reset Search</button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={index}
                    className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                      isOpen ? 'bg-white border-[#007cdc] shadow-lg' : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-7 py-6 text-left flex items-center justify-between gap-4 font-serif text-lg md:text-xl font-bold text-[#131238] group"
                    >
                      <span className="group-hover:text-[#007cdc] transition-colors leading-snug">{faq.q}</span>
                      <div className={`w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#007cdc] text-white' : 'text-[#007cdc]'}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-7 pb-7 pt-2 text-slate-600 text-sm sm:text-base font-normal leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>

        </div>
      </section>

      {/* Cross-Border Investment Glossary */}
      <section className="py-28 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase block mb-2">
              TECHNICAL DICTIONARY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#131238] mb-4">
              Cross-Border Investment Glossary
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Essential Indian real estate and financial market statutory terminology translated clearly for U.S. and overseas investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms.map((g, i) => (
              <div key={i} className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-mono font-bold text-[#007cdc] block mb-1">{g.term}</span>
                  <span className="text-sm font-serif font-bold text-[#131238] block mb-3">{g.full}</span>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{g.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400 font-bold uppercase mt-4">
                  Statutory Terminology
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
            >
              <span>Have Additional Questions? Ask Our Desks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
