import { motion } from 'framer-motion';
import { Shield, FileCheck, RefreshCcw, Building, Briefcase, Key, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

const serviceCards = [
  {
    title: '30-Year Forensic Title & RERA Auditing',
    desc: 'Exhaustive backward non-encumbrance searches conducted by senior Gujarat High Court real estate attorneys before any deposit is committed.',
    icon: Shield,
    badge: 'LEGAL SECURITY'
  },
  {
    title: 'Cross-Border Dollar & INR Repatriation',
    desc: 'Compliant NRE and NRO structural remittance pathways designed to repatriate high rental proceeds and property liquidation equity back to USA banks.',
    icon: RefreshCcw,
    badge: 'CURRENCY FLOW'
  },
  {
    title: 'GIFT City SEZ Tax Holiday Structuring',
    desc: 'Specialized institutional structures to leverage sovereign zero-tax periods, offshore business exemptions, and international financial node privileges.',
    icon: Building,
    badge: 'SOVEREIGN ADVISORY'
  },
  {
    title: 'Triple-Net Lease & Tenancy Management',
    desc: 'Turnkey real estate management including tenant sourcing, lease renewals, property facility inspections, and direct automated bank rental deposits.',
    icon: FileCheck,
    badge: 'PASSIVE MANAGEMENT'
  },
  {
    title: 'USA Business Surplus Allocation',
    desc: 'Bespoke syndication models specifically structured for American gas station, convenience store, hospitality, and franchise enterprise owners.',
    icon: Briefcase,
    badge: 'CAPITAL GROWTH'
  },
  {
    title: 'Remote Deed & Power of Attorney Execution',
    desc: 'Seamless legal representation enabling USA and global NRIs to execute official Sub-Registrar property deeds in Ahmedabad and GIFT City without traveling to India.',
    icon: Key,
    badge: 'CONVEYANCE DESK'
  }
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>END-TO-END NRI ADVISORY PLATFORM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1128] tracking-tight">
              360° Institutional <span className="text-[#007CDC]">Services</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-lg md:text-right font-normal leading-relaxed">
            Navigating cross-border investments requires forensic statutory precision. We handle every legal, banking, and structural leasing complexity so you enjoy uninterrupted passive yields.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,124,220,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#007CDC] font-mono font-extrabold text-[10px] tracking-wider uppercase">
                    {service.badge}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#0A1128] group-hover:bg-[#007CDC] group-hover:text-white group-hover:border-[#007CDC] flex items-center justify-center transition-all shadow-xs">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-4 group-hover:text-[#007CDC] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm font-normal leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono font-extrabold text-[#0A1128] group-hover:text-[#007CDC] transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>DESK VETTED & COVERED</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1128] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#007CDC] transition-all duration-300 shadow-lg"
          >
            <span>VIEW COMPLETE NRI SERVICES PROTOCOL DIRECTORY</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
