import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Contact as ContactSection } from '@/components/sections/Contact';
import { motion } from 'framer-motion';
import { Globe, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-16 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#007cdc] uppercase bg-blue-50 px-5 py-2 rounded-full border border-blue-200 inline-block mb-6 shadow-xs">
              SYNCHRONOUS DUAL-CONTINENT NETWORK
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#131238] mb-6 tracking-tight">
              Global Business Service <span className="text-[#007cdc]">One Trade 360</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
              Connect directly with our executive leadership in Edison, New Jersey (USA) or our regional investment desks in Gujarat. We guarantee confidential, attorney-vetted guidance tailored for U.S. business cash flow compounding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dual Headquarters Summary Banner */}
      <section className="py-16 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-[#007cdc] shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#007cdc] font-bold uppercase tracking-widest">USA HEADQUARTERS & EAST COAST DESK</span>
                <h3 className="text-2xl font-serif font-bold text-[#131238]">Edison, New Jersey</h3>
                <p className="text-sm text-slate-700 font-semibold">1885 Lincoln Highway, Edison, NJ 08817</p>
                <p className="text-xs text-slate-600 font-normal">Dedicated focus on U.S. gas station, convenience store, and franchise owners across PA, NJ, NY, TX, & CA.</p>
                <div className="pt-2">
                  <a href="tel:+16096618318" className="text-base font-mono font-bold text-[#007cdc] hover:text-[#131238] transition-colors">
                    USA Line: +1-609-661-8318
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-[#007cdc] shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#007cdc] font-bold uppercase tracking-widest">INDIA INSTITUTIONAL EXECUTION DESK</span>
                <h3 className="text-2xl font-serif font-bold text-[#131238]">Gujarat Corporate Office</h3>
                <p className="text-sm text-slate-700 font-semibold">Ahmedabad Twin City & GIFT City Regional Node</p>
                <p className="text-xs text-slate-600 font-normal">On-the-ground project scouting, RERA 30-year title audits, Sub-Registrar deed recording, & tenancy management.</p>
                <div className="pt-2">
                  <a href="tel:+919512301869" className="text-base font-mono font-bold text-[#007cdc] hover:text-[#131238] transition-colors">
                    India Line: +91-95123-01869
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded High-End Strategic Consultation Section */}
      <ContactSection />

      {/* Fiduciary Commitment Guarantee Box */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mx-auto flex items-center justify-center text-[#007cdc] shadow-xs">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#131238]">
            Attorney-Level Privacy & 24-Hour Callback Guarantee
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            All inquiries submitted to Global Business Service One Trade 360 are subject to strictly maintained client fiduciary confidentiality. An Executive Director from our Edison (NJ) or Gujarat desk will connect with you within 24 business hours.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs font-mono text-slate-700 font-bold pt-2">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#007cdc]" /> Encumbrance-Free Auditing</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#007cdc]" /> Direct NRE/NRO Repatriation</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
