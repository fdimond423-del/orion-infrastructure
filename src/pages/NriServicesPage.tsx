import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Search, FileCheck, Building, Plane, Building2, Briefcase, Handshake, CheckCircle2, PhoneCall, Sparkles, ShieldCheck, Landmark, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

const orionServices = [
  {
    title: "Investment Consultation",
    desc: "Understand available opportunities, discuss your long-term investment goals, and review structured portfolio strategies.",
    iconComponent: Briefcase,
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    title: "Property Search",
    desc: "Targeted sourcing of Residential, Commercial, Industrial, Rental, and Mixed-use properties that align with your criteria.",
    iconComponent: Search,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200"
  },
  {
    title: "Project Evaluation",
    desc: "Comprehensive developer background checks, location assessment, market research, and deep project viability reviews.",
    iconComponent: Building2,
    color: "bg-amber-50 text-amber-600 border-amber-200"
  },
  {
    title: "Builder Verification",
    desc: "Review publicly available information about developers and projects to support confident, informed decision-making.",
    iconComponent: ShieldCheck,
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    title: "NRI Support",
    desc: "Seamless documentation guidance, purchase process overview, coordination support, and constant communication assistance.",
    iconComponent: Plane,
    color: "bg-cyan-50 text-cyan-600 border-cyan-200"
  },
  {
    title: "Financing Referrals",
    desc: "Connect investors with financing professionals where appropriate. Loan approval remains subject to lender requirements.",
    iconComponent: Landmark,
    color: "bg-rose-50 text-rose-600 border-rose-200"
  },
  {
    title: "Portfolio Planning",
    desc: "Advanced diversification strategies, asset allocation discussions, and multi-generational long-term investment planning.",
    iconComponent: TrendingUp,
    color: "bg-slate-100 text-slate-700 border-slate-300"
  },
  {
    title: "Property Management",
    desc: "Assist with referrals for professional rental management, maintenance, tenant coordination, and active asset monitoring.",
    iconComponent: Handshake,
    color: "bg-indigo-50 text-indigo-600 border-indigo-200"
  }
];

export default function NriServicesPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600/20 font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-48 lg:pt-56 pb-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>ORION SERVICES & NRI SUPPORT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            End-To-End <br />
            <span className="text-blue-600">
              Cross-Border Coordination.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
            From initial strategy consultation and builder verification to final title conveyance and ongoing property management referrals, Orion Biz Infrastructure provides a structured, fully-managed investment process for global investors.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-sm transition-colors"
            >
              SCHEDULE INVESTMENT CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* The 8 Core Services Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orionServices.map((srv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md flex flex-col transition-all"
              >
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 ${srv.color}`}>
                  <srv.iconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Investors Choose Orion & Our Promise */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="p-10 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Investors Choose Orion</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Cross-border experience</span></div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>NRI-focused guidance</span></div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Residential & commercial</span></div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Professional partner ecosystem</span></div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Long-term planning approach</span></div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Transparent communication</span></div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Structured investment process</span></div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>End-to-end coordination</span></div>
              </div>
            </div>

            <div className="p-10 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col justify-center text-center">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-4 block">OUR PROMISE</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-relaxed">
                "We believe wealth is built through patience, planning, disciplined investing, and diversification."
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg mx-auto">
                Our goal is to help clients make informed decisions by connecting them with opportunities and professional resources that support their long-term financial objectives.
              </p>
              <a href="tel:+12722679492" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm mx-auto transition-colors">
                <PhoneCall className="w-4 h-4" />
                <span>Call One Trade 360 USA Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
