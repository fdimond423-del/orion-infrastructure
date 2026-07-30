import { Link } from 'wouter';
import { Globe, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-20 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center mb-2">
              <img src={logo} alt="Orion Biz Infrastructure" className="h-16 w-auto object-contain drop-shadow-sm" />
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Connecting North American operational cash flow to premier Indian institutional assets through One Trade 360 and Global Business Service.
            </p>
            {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Contact Desk</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                <p className="text-sm">680, Hazel St, Wilkes-Barre,<br />PA-18702 (USA)</p>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">USA - Global Business Service</span>
                  <a href="tel:+12722679492" className="text-sm hover:text-blue-600 transition-colors">Help desk - +1 272-267-9492 (USA)</a>
                  
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-3">India</span>
                  <p className="text-xs text-slate-600 font-medium">Mayur Gadhvi (Marketing Pro) - Real Estate Agent</p>
                  <a href="tel:+917984171515" className="text-sm hover:text-blue-600 transition-colors">+91 7984171515</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:Globalservicejjp4@gmail.com" className="text-sm hover:text-blue-600 transition-colors truncate">Globalservicejjp4@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                <Globe className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="https://www.orioninfraworld.com" target="_blank" rel="noreferrer" className="text-sm hover:text-blue-600 transition-colors truncate">www.orioninfraworld.com</a>
              </div>
            </div>
          </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About Orion", path: "/about" },
                { name: "Investment Opportunities", path: "/opportunities" },
                { name: "Gujarat Growth", path: "/gujarat-growth" },
                { name: "NRI Services", path: "/nri-services" },
                { name: "Resources", path: "/resources" },
                { name: "Contact", path: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="hover:text-blue-600 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Corridors */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Corridors</h4>
            <ul className="space-y-3 text-sm font-medium">
              {["GIFT City", "Dholera SIR", "Sanand Industrial", "Ahmedabad", "Gandhinagar", "Kandla Port"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Asset Classes</h4>
            <ul className="space-y-3 text-sm font-medium">
              {["Luxury Residential", "Commercial Office Towers", "Industrial Logistics & Warehousing", "Rental Yield Housing", "Strategic Land Plots"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-200">
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
            <p>© {new Date().getFullYear()} Orion Biz Infrastructure™ • All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Compliance</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
