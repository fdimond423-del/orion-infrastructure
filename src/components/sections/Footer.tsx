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
            <div className="space-y-3 pt-2 text-sm font-semibold text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                <p>680, Hazel St, Wilkes-Barre,<br />PA-18702 (USA)</p>
              </div>
              <a href="tel:+12722679492" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>USA: +1 272-267-9492</span>
              </a>
              <a href="tel:+917984171515" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>India: +91 7984171515</span>
              </a>
              <a href="mailto:Globalservicejjp4@gmail.com" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="break-all">Globalservicejjp4@gmail.com</span>
              </a>
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

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-slate-200">
          <div className="bg-slate-100 p-6 rounded-xl text-xs text-slate-500 font-medium leading-relaxed">
            <strong className="text-slate-700">LEGAL DISCLAIMER:</strong> Orion Biz Infrastructure, Global Business Service, and One Trade 360 serve as advisory and consulting platforms. Real estate investments involve inherent risks, including market fluctuations and illiquidity. We are not registered broker-dealers, financial advisors, or legal counsels. Past performance does not guarantee future results. All properties are subject to local RERA regulations and verification.
          </div>
          
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
