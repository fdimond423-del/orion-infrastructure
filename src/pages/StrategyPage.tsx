import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, CheckCircle2, Building2, Briefcase, Zap, DollarSign, Globe, Award, Sparkles, PieChart } from 'lucide-react';
import { Link } from 'wouter';

const imgGasStation = "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1200&auto=format&fit=crop";
const imgRetailStore = "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop";
const imgHospitalityMotel = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop";
const imgRestaurant = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop";
const imgTruckStopLogistics = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop";
const imgGiftCityTower = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop";
const imgDholeraIndustrial = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop";

export default function StrategyPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600/20 font-sans">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-48 lg:pt-56 pb-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>ORION BIZ INFRASTRUCTURE™ • MASTER STRATEGY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Build. Scale. Grow. <br />
            <span className="text-blue-600">
              How U.S. Business Profits Support Long-Term Growth
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
            The idea is not simply to earn short-term profits. The objective is to use operational earnings from North American business ventures to build additional, high-grade physical assets over time through disciplined reinvestment and geographic diversification in Gujarat, India.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <Link
              href="/opportunities"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition-all"
            >
              EXPLORE ELIGIBLE PROPERTIES
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              BOOK ADVISORY SESSION
            </Link>
          </div>
        </div>
      </section>

      {/* 5-Step Strategic Timeline */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase block mb-2">
              DISCIPLINED INVESTING
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900">
              The 5-Step Cross-Border Pathway
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              From operating income in North America to legacy wealth generation in Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "STEP 1", title: "Build Income Overseas", desc: "Generate recurring active income through employment, entrepreneurship, or U.S. business ownership.", color: "text-blue-600 bg-blue-50 border-blue-200" },
              { step: "STEP 2", title: "Save & Diversify", desc: "Build capital reserves through disciplined financial planning and tax-efficient profit allocation.", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
              { step: "STEP 3", title: "Invest in Gujarat", desc: "Evaluate prime residential, commercial, industrial, or land opportunities aligning with risk tolerance.", color: "text-amber-600 bg-amber-50 border-amber-200" },
              { step: "STEP 4", title: "Generate Income", desc: "Where appropriate, deploy high-yield corporate rental or commercial leasing strategies.", color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
              { step: "STEP 5", title: "Generational Wealth", desc: "Create a resilient, diversified portfolio designed to support family financial objectives across generations.", color: "text-cyan-600 bg-cyan-50 border-cyan-200" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.color} block w-fit mb-4`}>
                    {item.step}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>PHASE {index + 1} OF 5</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 1 & STEP 2 DEEP DIVE */}
      <section className="py-24 bg-white relative border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3">
              🇺🇸 STEP 1 & 2: OPERATING CASH FLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Optimize Active U.S. Business Profits
            </h2>
            <p className="text-slate-600 mt-4 text-base leading-relaxed">
              Many NRIs and U.S. entrepreneurs own and operate high-turnover commercial enterprises. When managed effectively, these generate recurring operating income. Rather than spending all profits, disciplined investors systematically strengthen their foundation and allocate surplus capital into real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Gas Stations & Energy Hubs", desc: "High-frequency recurring cash flow operations across highway and suburban locations.", img: imgGasStation, tag: "HIGH CASH FLOW" },
              { title: "Convenience & Retail Stores", desc: "Daily consumer necessaries, retail franchises, and well-located neighborhood centers.", img: imgRetailStore, tag: "RECUPERATING LEASES" },
              { title: "Motels & Hospitality Suites", desc: "Real estate backed operations generating attractive nightly yield and operational equity.", img: imgHospitalityMotel, tag: "ASSET BACKED" },
              { title: "Restaurants & Food Service", desc: "High-turnover dining franchises, QSR locations, and culinary operations.", img: imgRestaurant, tag: "HIGH TURNOVER" },
              { title: "Truck Stops & Highway Centers", desc: "Multi-acre fueling, diesel parking, food service, and driver facility complexes.", img: imgTruckStopLogistics, tag: "STRATEGIC HUB" },
              { title: "Enterprise Trade & Commerce", desc: "One Trade 360 & Global Business Service facilitating international trade flows.", img: imgGiftCityTower, tag: "ONE TRADE 360" }
            ].map((biz, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={biz.img} alt={biz.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-blue-700 text-xs font-bold uppercase shadow-sm">
                    {biz.tag}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">{biz.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{biz.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ORION INFRASTRUCTURE MODEL */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 text-center relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="text-xs font-bold tracking-wider text-amber-600 uppercase block mb-3">
            🔄 THE ORION INFRASTRUCTURE MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Acquire • Diversify • Build • Grow
          </h2>

          <div className="mt-16 p-8 rounded-2xl bg-white border border-slate-200 text-left grid grid-cols-1 md:grid-cols-3 gap-8 shadow-sm">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase block mb-2">🇺🇸 USA DIVISION</span>
              <p className="text-sm font-bold text-slate-900">Build operating cash flow</p>
              <p className="text-sm text-slate-600 mt-1">Optimize gas stations, retail, and commercial operations across North America.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase block mb-2">🇨🇦 CANADA & UK DIVISION</span>
              <p className="text-sm font-bold text-slate-900">Connect investors & partnerships</p>
              <p className="text-sm text-slate-600 mt-1">Foster strategic cross-border business opportunities and advisory networking.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase block mb-2">🇮🇳 INDIA (GUJARAT) DIVISION</span>
              <p className="text-sm font-bold text-slate-900">Invest in long-term developments</p>
              <p className="text-sm text-slate-600 mt-1">Acquire physical real estate and industrial infrastructure in rapid growth nodes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with exact Wilkes Barre HQ */}
      <section className="py-16 bg-white text-center border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ready to Structure Your Cross-Border Portfolio?
          </h3>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Get in touch with our Wilkes-Barre, PA Headquarters or direct advisory desks in USA and India for a confidential investment consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="tel:+12722679492" className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors">
              🇺🇸 USA Direct: +1 272-267-9492
            </a>
            <a href="tel:+917984171515" className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors">
              🇮🇳 India Direct: +91 7984171515
            </a>
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm hover:bg-slate-200 transition-colors">
              ONE TRADE 360 INQUIRY
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
