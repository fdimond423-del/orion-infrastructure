import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, Globe, MessageSquare, ShieldCheck, Sparkles, Building2, Clock } from 'lucide-react';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userLocation: 'USA',
    assetInterest: 'GIFT City Commercial',
    investmentBudget: '$250K - $500K',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden text-slate-700 selection:bg-blue-500/20 selection:text-blue-900 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#007cdc] uppercase bg-blue-50 px-5 py-2 rounded-full border border-blue-200 inline-block mb-4 shadow-xs">
              GLOBAL BUSINESS SERVICE | ONE TRADE 360
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#131238] mb-6">
              Connect With Our <span className="text-gradient-emerald">Investment Advisory</span>
            </h2>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              Whether you own U.S. gas stations, convenience stores, or operate global enterprise cash flows, our dedicated desks in Edison (NJ) and Gujarat are ready to architect your portfolio.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Global Contact Desks & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg relative overflow-hidden group hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#007cdc] font-bold shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#131238] group-hover:text-[#007cdc] transition-colors">One Trade 360 Desks</h3>
                  <span className="text-[11px] text-[#007cdc] font-mono font-bold uppercase tracking-widest block">SYNCHRONOUS USA & INDIA SUPPORT</span>
                </div>
              </div>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#007cdc] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#131238] text-base">USA Headquarters Desk</h4>
                    <p className="text-slate-600 font-medium mt-1">1885 Lincoln Highway, Edison, NJ 08817</p>
                    <p className="text-xs text-slate-500 mt-1">Serving U.S. Business Owners across Pennsylvania, New Jersey, New York, Texas, & California.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-slate-200">
                  <Phone className="w-5 h-5 text-[#007cdc] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 block font-mono font-semibold uppercase">Direct USA Consultation Line</span>
                    <a href="tel:+16096618318" className="text-lg font-mono font-bold text-[#131238] hover:text-[#007cdc] transition-colors">
                      +1-609-661-8318
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-slate-200">
                  <Building2 className="w-5 h-5 text-[#007cdc] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 block font-mono font-semibold uppercase">Gujarat Corporate Executive Desk</span>
                    <a href="tel:+919512301869" className="text-lg font-mono font-bold text-[#131238] hover:text-[#007cdc] transition-colors">
                      +91-95123-01869
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-slate-200">
                  <Mail className="w-5 h-5 text-[#007cdc] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 block font-mono font-semibold uppercase">Official Communications</span>
                    <a href="mailto:info@onetrade360.com" className="text-base font-mono font-bold text-[#007cdc] hover:underline">
                      info@onetrade360.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Chat Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a
                  href="https://wa.me/16096618318?text=Hello%20Orion%20Infrastructure%20%26%20One%20Trade%20360,%20I%20would%20like%20to%20consult%20regarding%20reinvesting%20my%20business%20profits%20in%20Gujarat%20real%20estate."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-sm tracking-wide uppercase"
                >
                  <MessageSquare className="w-5 h-5 fill-white" /> Connect Direct via WhatsApp
                </a>
              </div>
            </div>

            {/* Trust Badges Box */}
            <div className="p-6 rounded-3xl bg-blue-50/80 border border-blue-200 flex items-center gap-4 shadow-md">
              <ShieldCheck className="w-10 h-10 text-[#007cdc] shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-[#131238] font-serif">100% RERA & Legal Title Protection</h4>
                <p className="text-xs text-slate-600 font-medium mt-0.5">Every real estate opportunity undergoes rigorous institutional scrutiny before presentation to our clients.</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Strategic Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#131238]">Schedule Strategic Advisory</h3>
                  <p className="text-slate-500 text-sm font-normal mt-1">Receive tailored RERA property dossiers and NRE/NRO fund routing plans.</p>
                </div>
                <Sparkles className="w-7 h-7 text-[#007cdc] shrink-0" />
              </div>

              {formSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#007cdc] mx-auto" />
                  <h4 className="text-3xl font-serif font-bold text-[#131238]">Inquiry Successfully Recorded!</h4>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Thank you, <span className="text-[#007cdc] font-bold">{formData.name || 'Investor'}</span>. Our Executive Director at One Trade 360 will contact you via phone/email within 24 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold tracking-widest text-[#007cdc] uppercase mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Rajesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#007cdc] focus:bg-white text-[#131238] placeholder:text-slate-400 outline-none transition-all text-sm font-medium shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold tracking-widest text-[#007cdc] uppercase mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. rajesh@patelfranchise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#007cdc] focus:bg-white text-[#131238] placeholder:text-slate-400 outline-none transition-all text-sm font-medium shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold tracking-widest text-[#007cdc] uppercase mb-2">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. +1 (609) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#007cdc] focus:bg-white text-[#131238] placeholder:text-slate-400 outline-none transition-all text-sm font-medium font-mono shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold tracking-widest text-[#007cdc] uppercase mb-2">Current Residence Location</label>
                      <select 
                        value={formData.userLocation}
                        onChange={(e) => setFormData({...formData, userLocation: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 focus:border-[#007cdc] text-[#131238] font-medium outline-none transition-all text-sm cursor-pointer shadow-xs"
                      >
                        <option value="USA" className="bg-white text-[#131238] py-1">USA (PA, NJ, NY, TX, CA, etc.)</option>
                        <option value="UK" className="bg-white text-[#131238] py-1">United Kingdom & Europe</option>
                        <option value="Canada" className="bg-white text-[#131238] py-1">Canada</option>
                        <option value="Australia" className="bg-white text-[#131238] py-1">Australia & NZ</option>
                        <option value="India" className="bg-white text-[#131238] py-1">India (Local / NRI Returning)</option>
                        <option value="Other" className="bg-white text-[#131238] py-1">Other Global Jurisdiction</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold tracking-widest text-[#007cdc] uppercase mb-2">Target Asset Class</label>
                      <select 
                        value={formData.assetInterest}
                        onChange={(e) => setFormData({...formData, assetInterest: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 focus:border-[#007cdc] text-[#131238] font-medium outline-none transition-all text-sm cursor-pointer shadow-xs"
                      >
                        <option value="GIFT City Commercial" className="bg-white text-[#131238] py-1">GIFT City IFSC Commercial & Towers</option>
                        <option value="Luxury Residential Villas" className="bg-white text-[#131238] py-1">Luxury Residential Villas (Ahmedabad/Gandhinagar)</option>
                        <option value="Recurring Rental Income" className="bg-white text-[#131238] py-1">Recurring Cash Flow Rental Assets</option>
                        <option value="Dholera / Sanand Industrial" className="bg-white text-[#131238] py-1">Dholera SIR & Sanand Industrial Land</option>
                        <option value="Custom Wealth Strategy" className="bg-white text-[#131238] py-1">Comprehensive Portfolio Diversification</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold tracking-widest text-[#007cdc] uppercase mb-2">Planned Investment Budget</label>
                      <select 
                        value={formData.investmentBudget}
                        onChange={(e) => setFormData({...formData, investmentBudget: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 focus:border-[#007cdc] text-[#131238] font-medium font-mono outline-none transition-all text-sm cursor-pointer shadow-xs"
                      >
                        <option value="$100K - $250K" className="bg-white text-[#131238] py-1">$100,000 - $250,000 USD</option>
                        <option value="$250K - $500K" className="bg-white text-[#131238] py-1">$250,000 - $500,000 USD</option>
                        <option value="$500K - $1M" className="bg-white text-[#131238] py-1">$500,000 - $1,000,000 USD</option>
                        <option value="$1M+" className="bg-white text-[#131238] py-1">$1,000,000+ USD (Institutional Scale)</option>
                        <option value="Advisory Only" className="bg-white text-[#131238] py-1">Initial Advisory & Strategy Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold tracking-widest text-[#007cdc] uppercase mb-2">Strategic Notes / U.S. Business Background</label>
                    <textarea 
                      rows={4}
                      placeholder="Share details about your cash flow goals, preferred timeline, or questions about FEMA / RERA guidelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#007cdc] focus:bg-white text-[#131238] placeholder:text-slate-400 outline-none transition-all text-sm font-medium resize-none shadow-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#007cdc] hover:bg-[#131238] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Confidential Advisory Request
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-medium">
                    Your details are fully safeguarded by attorney-level client privacy protocols and will never be shared with unverified parties.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
