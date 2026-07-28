import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Building2, Lock, Award, CheckCircle, Phone } from 'lucide-react';

const guarantees = [
  {
    title: '30-Year Backward Title Auditing',
    desc: 'Senior High Court legal counsel performs rigorous forensic searches across historical deed records to guarantee absolute zero encumbrance.',
    icon: ShieldCheck,
    badge: 'LEGAL CLEARANCE'
  },
  {
    title: 'Direct RBI NRE/NRO Repatriation',
    desc: 'Fully compliant banking administrative setup ensuring uninterrupted profit, rental flow, and property liquidation remittance to USA accounts.',
    icon: Lock,
    badge: 'LIQUIDITY GUARANTEE'
  },
  {
    title: 'Strict RERA Regulatory Compliance',
    desc: 'We list and syndicate only 100% government-approved RERA registered projects across GIFT City, Dholera SIR, Sanand, and Ahmedabad.',
    icon: Award,
    badge: 'GOVERNMENT APPROVED'
  }
];

export function TrustSignals() {
  return (
    <section className="py-28 bg-slate-50 relative border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold tracking-[0.25em] uppercase shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>FIDUCIARY COMMITMENT & LEGAL SECURITY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1128] tracking-tight">
            Uncompromising <span className="text-[#007CDC]">Client Protection</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            We eliminate traditional cross-border investment risks by backing every transaction with exhaustive legal indemnity, dual-continent supervision, and regulatory transparency.
          </p>
        </div>

        {/* Guarantee Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {guarantees.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#007CDC] font-mono font-extrabold text-[11px] tracking-wider uppercase border border-blue-100">
                    {item.badge}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 text-[#007CDC] group-hover:bg-[#0A1128] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-3 group-hover:text-[#007CDC] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ATTORNEY VERIFIED & ENFORCED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dual Headquarters Twin Presentation Banner */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* USA HQ Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-slate-200 hover:border-[#007CDC] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#007CDC] text-xs font-mono font-bold uppercase border border-blue-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>USA EAST COAST HEADQUARTERS</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#0A1128] group-hover:text-[#007CDC] transition-colors">
                Edison, New Jersey
              </h3>
              <p className="text-slate-700 font-bold text-sm">
                1885 Lincoln Highway, Edison, NJ 08817 (United States)
              </p>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Dedicated advisory consultation desk for American business owners, gas station networks, franchisees, and commercial operators across PA, NJ, NY, TX, and CA.
              </p>
            </div>
            
            <div className="pt-6 mt-8 border-t border-slate-200 flex items-center justify-between">
              <a 
                href="tel:+16096618318" 
                className="inline-flex items-center gap-2 text-base font-mono font-bold text-[#007CDC] hover:text-[#0A1128] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>USA Line: +1-609-661-8318</span>
              </a>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-extrabold uppercase">
                ACTIVE DESK
              </span>
            </div>
          </div>

          {/* India Execution Node Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-slate-200 hover:border-[#007CDC] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase border border-emerald-200">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>INDIA INSTITUTIONAL EXECUTION DESK</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#0A1128] group-hover:text-[#007CDC] transition-colors">
                Ahmedabad Corporate Tower
              </h3>
              <p className="text-slate-700 font-bold text-sm">
                GIFT City & Ahmedabad Commercial Growth Node (Gujarat, India)
              </p>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                On-the-ground project scouting, RERA 30-year backward title searches, Sub-Registrar deed recording, and end-to-end commercial tenancy management.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-200 flex items-center justify-between">
              <a 
                href="tel:+919512301869" 
                className="inline-flex items-center gap-2 text-base font-mono font-bold text-[#007CDC] hover:text-[#0A1128] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>India Line: +91-95123-01869</span>
              </a>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-extrabold uppercase">
                GIFT CITY DESK
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
