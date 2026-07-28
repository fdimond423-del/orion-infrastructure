import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A1128] text-white pt-20 pb-12 border-t border-slate-800 relative overflow-hidden selection:bg-blue-600/30">
      
      {/* Decorative Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Top Executive Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Presentation (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="h-16 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="Orion Infrastructure" 
                  className="h-full w-auto object-contain filter drop-shadow-md" 
                />
              </div>
              <div className="flex flex-col border-l border-slate-700 pl-3.5">
                <span className="font-serif font-bold text-xl text-white tracking-tight leading-none">ORION</span>
                <span className="text-[10px] font-mono font-extrabold tracking-[0.25em] text-[#007CDC] uppercase mt-1">INFRASTRUCTURE</span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-md">
              Premier sovereign cross-border wealth management and real estate advisory platform. We channel surplus profits from active U.S. commercial operations into forensically vetted, multi-generational Gujarat infrastructure assets.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-bold text-emerald-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>100% RERA AUDIT & DIRECT USD REPATRIATION</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-extrabold tracking-widest text-[#007CDC] uppercase">
              INSTITUTIONAL DIRECTORY
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home & Dashboard</Link></li>
              <li><Link to="/strategy" className="text-slate-300 hover:text-white transition-colors">Investment Strategy</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">NRI Services & Advisory</Link></li>
              <li><Link to="/gujarat" className="text-slate-300 hover:text-white transition-colors">Gujarat Growth Nodes</Link></li>
              <li><Link to="/opportunities" className="text-slate-300 hover:text-white transition-colors">Asset Opportunities</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-extrabold tracking-widest text-[#007CDC] uppercase">
              ADVISORY DESKS
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">Executive Leadership</Link></li>
              <li><Link to="/resources" className="text-slate-300 hover:text-white transition-colors">RERA Title Dossiers</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Book Consultation</Link></li>
              <li><a href="tel:+16096618318" className="text-emerald-400 hover:text-emerald-300 font-mono font-bold">USA: +1-609-661-8318</a></li>
              <li><a href="tel:+919512301869" className="text-blue-400 hover:text-blue-300 font-mono font-bold">India: +91-95123-01869</a></li>
            </ul>
          </div>

          {/* Dual HQ Address Column */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-extrabold tracking-widest text-[#007CDC] uppercase">
              TWIN CONTINENT HQ
            </h4>
            
            <div className="space-y-1 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#007CDC]" />
                <span>Edison, NJ (USA HQ)</span>
              </div>
              <p className="text-slate-400 font-light pl-5">
                1885 Lincoln Highway, Edison, NJ 08817 (United States)
              </p>
            </div>

            <div className="space-y-1 text-xs pt-2 border-t border-slate-800/60">
              <div className="font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Gujarat Corporate Office</span>
              </div>
              <p className="text-slate-400 font-light pl-5">
                Ahmedabad Commercial Apex & GIFT City Node (India)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Orion Infrastructure • Global Business Service One Trade 360. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Attorney Vetted Title Protocols</span>
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#007CDC]" />
              <span>Direct RBI / DTAA Compliant</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
