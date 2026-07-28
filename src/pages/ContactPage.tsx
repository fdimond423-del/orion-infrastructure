import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Contact as ContactSection } from '@/components/sections/Contact';
import { motion } from 'framer-motion';
import { Globe, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen text-white overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-16 border-b border-white/10 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono font-bold tracking-[0.35em] text-primary uppercase bg-primary/10 px-5 py-2 rounded-full border border-primary/30 inline-block mb-6 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
              SYNCHRONOUS DUAL-CONTINENT NETWORK
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
              Global Business Service <span className="text-gradient-emerald">One Trade 360</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 font-light max-w-3xl mx-auto leading-relaxed">
              Connect directly with our executive leadership in Edison, New Jersey (USA) or our regional investment desks in Gujarat. We guarantee confidential, attorney-vetted guidance tailored for U.S. business cash flow compounding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dual Headquarters Summary Banner */}
      <section className="py-16 bg-background relative border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-card to-background border border-white/10 shadow-2xl flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 text-primary shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">USA HEADQUARTERS & EAST COAST DESK</span>
                <h3 className="text-2xl font-serif font-bold text-white">Edison, New Jersey</h3>
                <p className="text-sm text-white/75 font-light">1885 Lincoln Highway, Edison, NJ 08817</p>
                <p className="text-xs text-white/50 font-light">Dedicated focus on U.S. gas station, convenience store, and franchise owners across PA, NJ, NY, TX, & CA.</p>
                <div className="pt-2">
                  <a href="tel:+16096618318" className="text-base font-mono font-bold text-white hover:text-primary transition-colors">
                    USA Line: +1-609-661-8318
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-card to-background border border-white/10 shadow-2xl flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">INDIA INSTITUTIONAL EXECUTION DESK</span>
                <h3 className="text-2xl font-serif font-bold text-white">Gujarat Corporate Office</h3>
                <p className="text-sm text-white/75 font-light">Ahmedabad Twin City & GIFT City Regional Node</p>
                <p className="text-xs text-white/50 font-light">On-the-ground project scouting, RERA 30-year title audits, Sub-Registrar deed recording, & tenancy management.</p>
                <div className="pt-2">
                  <a href="tel:+919512301869" className="text-base font-mono font-bold text-white hover:text-primary transition-colors">
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
      <section className="py-20 bg-gradient-to-b from-slate-950 via-background to-background border-t border-white/10 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mx-auto flex items-center justify-center text-primary shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Attorney-Level Privacy & 24-Hour Callback Guarantee
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            All inquiries submitted to Global Business Service One Trade 360 are subject to strictly maintained client fiduciary confidentiality. An Executive Director from our Edison (NJ) or Gujarat desk will connect with you within 24 business hours.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs font-mono text-white/50 pt-2">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Encumbrance-Free Auditing</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Direct NRE/NRO Repatriation</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
