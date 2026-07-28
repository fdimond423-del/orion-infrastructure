import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Globe, ArrowUp, ShieldCheck, ExternalLink, Clock } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 text-slate-700 border-t border-slate-200 overflow-hidden pt-20 pb-12 selection:bg-blue-500/20 selection:text-blue-900">
      {/* Background glow effects */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & Strategic Identity */}
          <div className="lg:col-span-4 space-y-6">
            {/* Standalone Logo Emblem Without Typed Text */}
            <Link href="/" className="flex items-center group w-fit -mt-2" onClick={scrollToTop}>
              <div className="h-28 md:h-36 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="Orion Infrastructure" 
                  className="h-full w-auto object-contain filter drop-shadow-md" 
                />
              </div>
            </Link>

            <p className="text-lg font-serif text-[#131238] leading-snug font-medium">
              Earn in the USA & Globally.<br />
              <span className="text-[#007cdc] font-semibold">Invest in Sovereign Gujarat Real Estate.</span>
            </p>

            <p className="text-sm text-slate-600 font-light leading-relaxed max-w-sm">
              The premier cross-border platform channeling U.S. business operating profits (Gas Stations, Convenience Stores, Motels & Restaurants) into multi-generational Gujarat infrastructure assets.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#007cdc] font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#007cdc]" />
              <span className="text-[#131238] font-semibold">RERA Vetted & Zero Title-Risk Advisory Protocol</span>
            </div>
          </div>

          {/* Col 2: Standalone Page Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-mono tracking-widest text-[#007cdc] uppercase font-bold border-l-2 border-[#007cdc] pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link href="/" onClick={scrollToTop} className="text-slate-600 hover:text-[#007cdc] transition-colors">Home</Link></li>
              <li><Link href="/about" onClick={scrollToTop} className="text-slate-600 hover:text-[#007cdc] transition-colors">About Orion</Link></li>
              <li><Link href="/opportunities" onClick={scrollToTop} className="text-slate-600 hover:text-[#007cdc] transition-colors">Opportunities</Link></li>
              <li><Link href="/gujarat-growth" onClick={scrollToTop} className="text-slate-600 hover:text-[#007cdc] transition-colors">Gujarat Growth</Link></li>
              <li><Link href="/nri-services" onClick={scrollToTop} className="text-slate-600 hover:text-[#007cdc] transition-colors">NRI Services</Link></li>
              <li><Link href="/resources" onClick={scrollToTop} className="text-slate-600 hover:text-[#007cdc] transition-colors">Resources & FAQs</Link></li>
              <li><Link href="/contact" onClick={scrollToTop} className="text-slate-600 hover:text-[#007cdc] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Target Investment Corridors */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-mono tracking-widest text-[#007cdc] uppercase font-bold border-l-2 border-[#007cdc] pl-3">
              Corridors
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li className="hover:text-[#007cdc] transition-colors cursor-pointer">GIFT City IFSC</li>
              <li className="hover:text-[#007cdc] transition-colors cursor-pointer">Dholera SIR</li>
              <li className="hover:text-[#007cdc] transition-colors cursor-pointer">Sanand Industrial</li>
              <li className="hover:text-[#007cdc] transition-colors cursor-pointer">Ahmedabad Twin City</li>
              <li className="hover:text-[#007cdc] transition-colors cursor-pointer">Kandla & Mundra Port</li>
              <li className="hover:text-[#007cdc] transition-colors cursor-pointer">Surat Diamond Node</li>
            </ul>
          </div>

          {/* Col 4: Global Business Service | One Trade 360 Contact Desks */}
          <div className="lg:col-span-4 space-y-5 bg-white p-7 rounded-3xl border border-slate-200 shadow-lg">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3.5">
              <Globe className="w-5 h-5 text-[#007cdc] shrink-0" />
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#007cdc] font-bold uppercase block">GLOBAL BUSINESS SERVICE</span>
                <h5 className="font-serif text-lg font-bold text-[#131238] tracking-wide">One Trade 360</h5>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#007cdc] shrink-0 mt-1" />
                <span>
                  <strong className="text-[#131238] font-medium block">USA Headquarters Desk:</strong>
                  1885 Lincoln Highway, Edison, NJ 08817 (Pennsylvania & New Jersey Network)
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#007cdc] shrink-0" />
                <span>
                  <strong className="text-[#131238] font-medium">USA Phone: </strong>
                  <a href="tel:+16096618318" className="hover:text-[#007cdc] transition-colors text-[#007cdc] font-mono font-semibold">+1-609-661-8318</a>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#007cdc] shrink-0" />
                <span>
                  <strong className="text-[#131238] font-medium">India (Gujarat) Desk: </strong>
                  <a href="tel:+919512301869" className="hover:text-[#007cdc] transition-colors text-[#007cdc] font-mono font-semibold">+91-95123-01869</a>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#007cdc] shrink-0" />
                <span>
                  <strong className="text-[#131238] font-medium">Email Support: </strong>
                  <a href="mailto:info@onetrade360.com" className="hover:text-[#007cdc] transition-colors font-mono text-slate-800">info@onetrade360.com</a>
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <Clock className="w-3.5 h-3.5 text-[#007cdc]" />
                <span>Synchronous support across US EST and India IST timezones.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Orion Infrastructure & Global Business Service One Trade 360. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-[#007cdc] transition-colors cursor-pointer">FEMA & RBI Compliance</span>
            <span className="hover:text-[#007cdc] transition-colors cursor-pointer">RERA Verification Protocol</span>
            <span className="hover:text-[#007cdc] transition-colors cursor-pointer">Privacy Policy</span>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-200 hover:bg-[#007cdc] hover:text-white border border-slate-300 hover:border-transparent text-[#131238] transition-all duration-300 shadow-sm flex items-center justify-center group"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
