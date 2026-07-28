import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2, Clock, Building2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    residence: 'United States (USA)',
    corridor: 'GIFT City & Ahmedabad Commercial',
    investmentAmount: '$100,000 - $300,000 USD Eq.',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        residence: 'United States (USA)',
        corridor: 'GIFT City & Ahmedabad Commercial',
        investmentAmount: '$100,000 - $300,000 USD Eq.',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007CDC] text-xs font-mono font-bold tracking-[0.25em] uppercase shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL CLIENT ADVISORY DESK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1128] tracking-tight">
            Schedule Your Private <span className="text-[#007CDC]">Consultation</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Connect directly with our Executive Directors at our Edison (New Jersey) HQ or Gujarat Institutional Desks. All discussions are protected by strict client fiduciary confidentiality.
          </p>
        </div>

        {/* 2-Column Booking & Contact Matrix */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Desks & Guarantee Banner */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct USA HQ Line */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-400 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#007CDC] flex items-center justify-center border border-blue-100 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#007CDC] uppercase tracking-widest">USA HEADQUARTERS LINE</span>
                <h3 className="text-2xl font-serif font-bold text-[#0A1128] mt-1">Edison, New Jersey</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  1885 Lincoln Highway, Edison, NJ 08817<br />
                  <strong className="text-slate-800">Specialty:</strong> U.S. Gas Station & Franchise Surplus Syndication
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <a href="tel:+16096618318" className="text-base font-mono font-black text-[#007CDC] hover:text-[#0A1128] flex items-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (609) 661-8318</span>
                </a>
              </div>
            </div>

            {/* Direct India Execution Desk */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-400 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-xs">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest">INDIA INSTITUTIONAL DESK</span>
                <h3 className="text-2xl font-serif font-bold text-[#0A1128] mt-1">Gujarat Corporate Office</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Ahmedabad Commercial Apex & GIFT City Node<br />
                  <strong className="text-slate-800">Specialty:</strong> RERA 30-Year Title Vetting & Deed Recording
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <a href="tel:+919512301869" className="text-base font-mono font-black text-emerald-600 hover:text-[#0A1128] flex items-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 95123 01869</span>
                </a>
              </div>
            </div>

            {/* Fiduciary Commitment Box */}
            <div className="p-6 rounded-3xl bg-[#0A1128] text-white border border-slate-800 shadow-xl flex items-start gap-4">
              <Clock className="w-8 h-8 text-[#007CDC] shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-white">24-Hour Executive Callback Guarantee</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every submitted request is directed straight to our Senior Investment Directors. You will receive a direct phone or Zoom appointment confirmation within 24 business hours.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Confidential Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border-2 border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="border-b border-slate-200 pb-6 mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#0A1128]">Confidential Advisory Request</h3>
                <p className="text-xs text-slate-500 mt-1 font-mono">Fill in your portfolio parameters for a tailored RERA dossier.</p>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold uppercase">
                SECURED PORTAL
              </span>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0A1128]">Advisory Request Registered</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you. Your confidential portfolio parameter profile has been received by our USA & Gujarat Executive Desks. An advisor will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">Full Legal Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rajesh Patel" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#007CDC] focus:bg-white text-[#0A1128] text-sm font-medium outline-none transition-all shadow-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. rpatel@enterprisetrade.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#007CDC] focus:bg-white text-[#0A1128] text-sm font-medium outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">Contact Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +1 (732) 555-0199" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#007CDC] focus:bg-white text-[#0A1128] text-sm font-medium font-mono outline-none transition-all shadow-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">Current Residence Location *</label>
                    <select 
                      value={formData.residence}
                      onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#007CDC] focus:bg-white text-[#0A1128] text-sm font-semibold outline-none transition-all shadow-xs"
                    >
                      <option value="United States (USA)">United States (USA)</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                      <option value="Australia">Australia</option>
                      <option value="Other Global NRI">Other Global NRI Region</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">Primary Corridor of Interest</label>
                    <select 
                      value={formData.corridor}
                      onChange={(e) => setFormData({ ...formData, corridor: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#007CDC] focus:bg-white text-[#0A1128] text-sm font-semibold outline-none transition-all shadow-xs"
                    >
                      <option value="GIFT City Fintech & Commercial Node">GIFT City Fintech & Commercial Node</option>
                      <option value="Ahmedabad Commercial & Retail Apex">Ahmedabad Commercial & Retail Apex</option>
                      <option value="Dholera SIR Smart City Plots">Dholera SIR Smart City Industrial Plots</option>
                      <option value="Sanand Industrial & Automotive Warehousing">Sanand Automotive Warehousing</option>
                      <option value="Bespoke Portfolio Syndication">Bespoke Portfolio Syndication</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">Target Investment Allocation</label>
                    <select 
                      value={formData.investmentAmount}
                      onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#007CDC] focus:bg-white text-[#0A1128] text-sm font-semibold outline-none transition-all shadow-xs font-mono"
                    >
                      <option value="$85,000 - $150,000 USD Eq.">$85,000 - $150,000 USD Eq.</option>
                      <option value="$150,000 - $350,000 USD Eq.">$150,000 - $350,000 USD Eq.</option>
                      <option value="$350,000 - $1,000,000+ USD Eq.">$350,000 - $1,000,000+ USD Eq.</option>
                      <option value="$1M+ Institutional Syndication">$1M+ Institutional Syndication</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">Business Portfolio or Consultation Notes</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly mention your active commercial business in the USA or preferred appointment timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#007CDC] focus:bg-white text-[#0A1128] text-sm font-medium outline-none transition-all shadow-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-2xl bg-[#0A1128] hover:bg-[#007CDC] text-white font-mono font-extrabold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>SUBMIT CONFIDENTIAL ADVISORY INQUIRY</span>
                  </button>
                </div>

                <p className="text-[11px] font-mono text-slate-400 text-center uppercase">
                  Protected by Attorney-Client Privacy protocols • Zero Spam Guarantee
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
