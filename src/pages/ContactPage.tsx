import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { MapPin, Phone, Mail, Building2, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600/20 font-sans">
      <Navbar />

      <ScrollReveal>
<section className="relative pt-48 lg:pt-56 pb-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>ORION BIZ INFRASTRUCTURE™ • ADVISORY DESK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Get in <span className="text-blue-600">Touch.</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8">
            Schedule an Investment Consultation, Request Property Information, Book an Online Meeting, or Explore Partnership Opportunities.
          </p>
        </div>
      </section>
</ScrollReveal>

      <ScrollReveal>
<section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2 block">TWIN CONTINENT HQ</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Official Corporate Desks</h2>
                
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 relative overflow-hidden">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 uppercase tracking-widest border border-blue-200 inline-block mb-2">USA HEADQUARTERS</span>
                  <h3 className="text-xl font-bold text-slate-900">Global Business Service & One Trade 360</h3>
                  <div className="flex items-start gap-3 mt-4 text-slate-600 text-sm">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">680, Hazel St, Wilkes-Barre,<br />PA-18702 (USA)</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 text-slate-600 text-sm">
                    <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                    <a href="tel:+12722679492" className="font-semibold hover:text-blue-600 transition-colors">USA: +1 272-267-9492</a>
                  </div>
                  <div className="flex items-center gap-3 mt-4 text-slate-600 text-sm">
                    <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                    <a href="tel:+917984171515" className="font-semibold hover:text-blue-600 transition-colors">India: +91 7984171515</a>
                  </div>
                  <div className="flex items-center gap-3 mt-4 text-slate-600 text-sm">
                    <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                    <a href="mailto:Globalservicejjp4@gmail.com" className="font-semibold hover:text-blue-600 transition-colors break-all">Globalservicejjp4@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-900">Submit Investor Inquiry</h4>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                  <Building2 className="w-6 h-6 text-blue-600 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-900">Request Market Reports</h4>
                </div>
              </div>
            </div>

            {/* Premium Inquiry Form */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule an Investment Consultation</h3>
              <p className="text-sm text-slate-500 mb-8">Fill out the form below to book an online meeting or request property information.</p>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you. Inquiry Sent to Global Business Service HQ."); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Area of Interest</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                    <option>Residential Properties</option>
                    <option>Commercial Real Estate</option>
                    <option>Industrial & Logistics</option>
                    <option>Rental Income & Leases</option>
                    <option>Partnership Opportunities</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Message / Inquiry Details</label>
                  <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="Tell us about your investment goals..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <span>SEND INQUIRY TO DESK</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
</ScrollReveal>

      <Footer />
    </div>
  );
}
