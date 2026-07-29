import React, { useState } from 'react';
import { X, Printer, Share2, Download, CheckCircle, MapPin, Phone, Mail, Globe, ShieldCheck, ArrowRight, FileText, Sparkles, Building2, Briefcase, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform: string) => {
    const shareText = `Explore ORION BIZ INFRASTRUCTURE™ | Global Business Service & One Trade 360.\nBuilding Wealth Across USA • Canada • UK • Australia • India.\nContact: USA +1 272-267-9492 | India +91 7984171515 | Globalservicejjp4@gmail.com`;
    const shareUrl = window.location.href;
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
    } else if (platform === 'email') {
      window.open(`mailto:?subject=ORION BIZ INFRASTRUCTURE - Investment Portfolio & Brochure&body=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 md:p-6 overflow-y-auto print:p-0 print:bg-white print:static">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white text-[#0A1128] rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] border border-slate-200/80 max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden relative print:max-h-none print:shadow-none print:border-none print:w-full"
        >
          
          {/* Header Bar - Hidden on Print */}
          <div className="bg-[#0A1128] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 print:hidden shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-[#007CDC]">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-serif font-bold text-white tracking-wide flex items-center gap-2">
                  ORION BIZ INFRASTRUCTURE™ <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40 font-mono font-bold">VIP BROCHURE</span>
                </h3>
                <p className="text-xs text-slate-400 font-sans">Global Business Service • One Trade 360</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-[#007CDC] hover:bg-blue-600 text-white text-xs font-mono font-bold flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT / DOWNLOAD PDF</span>
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                title="Share on WhatsApp"
              >
                <span>WhatsApp Share</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content - Scrollable area (Print Friendly) */}
          <div className="overflow-y-auto p-8 md:p-14 space-y-12 print:p-0 print:overflow-visible font-sans">
            
            {/* Brochure Title Page */}
            <div className="border-[3px] border-[#0A1128] rounded-3xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 print:border-2 print:rounded-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-300 pb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#007CDC] text-xs font-mono font-extrabold mb-3 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Global Wealth & Property Platform</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-serif font-black text-[#0A1128] tracking-tight mb-2">
                    ORION BIZ INFRASTRUCTURE™
                  </h1>
                  <p className="text-base md:text-xl font-medium text-[#007CDC] max-w-2xl">
                    Building Wealth Across USA • Canada • UK • Australia • India
                  </p>
                </div>

                <div className="text-right flex flex-col items-start md:items-end bg-slate-100/90 p-5 rounded-2xl border border-slate-200 min-w-[240px]">
                  <span className="text-[11px] font-mono font-black text-[#0A1128] tracking-widest uppercase">DIVISION OF</span>
                  <span className="text-lg font-serif font-black text-[#007CDC]">GLOBAL BUSINESS SERVICE</span>
                  <span className="text-sm font-bold text-slate-800 tracking-wide">ONE TRADE 360</span>
                  <span className="text-xs text-emerald-700 font-bold mt-2 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Investment Advisory
                  </span>
                </div>
              </div>

              <div className="mt-8 text-center bg-[#0A1128] text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-xl md:text-2xl font-serif font-extrabold tracking-wide text-amber-400 mb-3">
                  "Earn Globally. Invest in Gujarat. Build Generational Wealth."
                </h2>
                <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Orion Biz Infrastructure is a sovereign cross-border investment platform created to help NRIs, entrepreneurs, business owners, and global investors build lasting wealth through strategic business ownership, real estate, and industrial infrastructure investments in Gujarat, India.
                </p>
              </div>

              {/* Core Philosophy Banner */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">PHASE 01</span>
                  <h4 className="text-lg font-serif font-bold text-[#0A1128] mt-1">Cash Flow Creates Capital</h4>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative">
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">PHASE 02</span>
                  <h4 className="text-lg font-serif font-bold text-[#007CDC] mt-1">Capital Builds Assets</h4>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-bold">PHASE 03</span>
                  <h4 className="text-lg font-serif font-bold text-emerald-700 mt-1">Assets Build Generational Wealth</h4>
                </div>
              </div>
            </div>

            {/* Strategy & Business Profits Integration */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#007CDC] pl-4">
                <span className="text-xs font-mono font-black tracking-widest text-[#007CDC] uppercase">CROSS-BORDER MASTER STRATEGY</span>
                <h3 className="text-2xl font-serif font-bold text-[#0A1128]">How U.S. Business Profits Support Long-Term Asset Growth</h3>
              </div>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                The objective is not simply to earn short-term operational profits. Our strategic framework guides U.S. entrepreneurs (owners of Gas Stations, Convenience Stores, Motels, Restaurants, and Truck Stops) to systematically reinvest surplus income into prime Gujarat industrial and commercial corridors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <h4 className="font-serif font-bold text-[#0A1128] text-base mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#007CDC]" />
                    <span>Step-by-Step Investment Pathway</span>
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[#007CDC] font-bold">01.</span>
                      <span><strong>Build Cash Flow Overseas:</strong> Operate high-yield U.S. commercial businesses.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[#007CDC] font-bold">02.</span>
                      <span><strong>Reinvest & Optimize:</strong> Upgrade stores, add food service, and streamline debt.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[#007CDC] font-bold">03.</span>
                      <span><strong>Invest in Gujarat Corridors:</strong> Channel capital into GIFT City, Dholera SIR, Sanand, Ahmedabad, Gandhinagar, and Kandla Port.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[#007CDC] font-bold">04.</span>
                      <span><strong>Generate Recurring Income:</strong> Secure commercial leases and high-yield rental returns.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-serif font-bold text-[#0A1128] text-base mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                    <span>Prime Gujarat Growth Corridors</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <strong className="block text-[#0A1128]">🏙 GIFT City</strong>
                      <span>India's premier international finance & IT hub.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <strong className="block text-[#0A1128]">🏗 Dholera SIR</strong>
                      <span>Smart green industrial city & manufacturing node.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <strong className="block text-[#0A1128]">🏭 Sanand Corridor</strong>
                      <span>Automotive, semiconductors & engineering capital.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <strong className="block text-[#0A1128]">🚢 Kandla Port Region</strong>
                      <span>Strategic export facility & massive logistics corridor.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Asset Opportunities Matrix */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="border-l-4 border-emerald-600 pl-4">
                <span className="text-xs font-mono font-black tracking-widest text-emerald-700 uppercase">PORTFOLIO DIVERSIFICATION</span>
                <h3 className="text-2xl font-serif font-bold text-[#0A1128]">Comprehensive Investment Opportunities</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h5 className="font-serif font-bold text-[#007CDC] text-base mb-2">Residential Real Estate</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>• Luxury High-Rise Apartments</li>
                    <li>• Premium Gated Villas</li>
                    <li>• Independent Townhouses</li>
                    <li>• Weekend Farmhouses</li>
                    <li>• Senior Living Communities</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h5 className="font-serif font-bold text-emerald-600 text-base mb-2">Commercial & Retail</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>• Shopping Centers & Retail Hubs</li>
                    <li>• Grade-A Office Towers</li>
                    <li>• Business Parks & Tech Spaces</li>
                    <li>• Medical Centers & Hotels</li>
                    <li>• Mixed-Use Developments</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h5 className="font-serif font-bold text-[#0A1128] text-base mb-2">Industrial & Logistics</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>• Warehouses & Logistics Parks</li>
                    <li>• Industrial Sheds & Factories</li>
                    <li>• Cold Storage Hubs</li>
                    <li>• Export Processing Units</li>
                    <li>• Supply Chain Centers</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h5 className="font-serif font-bold text-amber-600 text-base mb-2">Rental & Land Assets</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>• NRI Dedicated Apartment Units</li>
                    <li>• Serviced Corporate Leasing</li>
                    <li>• Student & Holiday Rentals</li>
                    <li>• Commercial & Industrial Plots</li>
                    <li>• Strategic Development Land</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Official Contact Directory - Exactly as requested by user */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl space-y-8 print:bg-white print:text-[#0A1128] print:border-2 print:border-[#0A1128]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-6 print:border-slate-300">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">OFFICIAL CORPORATE HEADQUARTERS</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1 print:text-[#0A1128]">Get in Touch with Orion Executive Advisors</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono text-xs font-extrabold print:bg-slate-100 print:text-[#0A1128]">
                  VERIFIED INTERNATIONAL ADVISORY DESK
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#007CDC] font-mono font-bold text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>USA HEADQUARTERS</span>
                  </div>
                  <p className="text-base font-bold text-white print:text-slate-900">One Trade 360 & Global Business Service</p>
                  <p className="text-sm text-slate-300 font-light print:text-slate-700">
                    680, Hazel St, Wilkes-Barre,<br />
                    PA-18702 (United States of America)
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm">
                    <Phone className="w-4 h-4" />
                    <span>DIRECT TELEPHONE DESKS</span>
                  </div>
                  <div className="text-sm font-bold text-white space-y-1 print:text-slate-900">
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400 font-light print:text-slate-600">USA Phone:</span>
                      <a href="tel:+12722679492" className="hover:underline text-blue-300 print:text-blue-700">+1 272-267-9492</a>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400 font-light print:text-slate-600">India Phone:</span>
                      <a href="tel:+917984171515" className="hover:underline text-emerald-300 print:text-emerald-700">+91 7984171515</a>
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-sm">
                    <Mail className="w-4 h-4" />
                    <span>OFFICIAL CORRESPONDENCE</span>
                  </div>
                  <p className="text-sm text-slate-300 print:text-slate-700">For confidential NRI portfolio structuring and legal verification:</p>
                  <a href="mailto:Globalservicejjp4@gmail.com" className="inline-block font-mono text-sm font-bold text-[#007CDC] hover:underline print:text-blue-700">
                    Globalservicejjp4@gmail.com
                  </a>
                </div>
              </div>

              {/* Legal Disclaimer Footer */}
              <div className="pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono leading-normal print:text-slate-600 print:border-slate-300">
                <strong>LEGAL DISCLAIMER:</strong> The information contained in this brochure and website is for general educational and informational purposes only and should not be considered financial, legal, tax, or investment advice. All investments, including real estate and business acquisitions, involve risk, and values or returns may fluctuate. Investors should obtain independent legal, financial, and tax advice and perform their own due diligence before making any investment decisions. ORION BIZ INFRASTRUCTURE™ • GLOBAL BUSINESS SERVICE • ONE TRADE 360.
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
