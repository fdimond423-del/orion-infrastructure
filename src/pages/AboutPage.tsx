import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Target, Globe, Shield, Award, CheckCircle2, MapPin, Phone, Mail, Sparkles, Briefcase, Users, Building2 } from 'lucide-react';
import { Link } from 'wouter';

const imgBoardroom = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600/20 font-sans">
      <Navbar />

      {/* About Page Header */}
      <section className="relative pt-48 lg:pt-56 pb-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>ORION BIZ INFRASTRUCTURE™ • GLOBAL BUSINESS SERVICE</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Building Wealth Across <br />
                <span className="text-blue-600">
                  USA • Canada • UK • Australia • India
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
                Orion Biz Infrastructure is a dedicated cross-border investment platform engineered to connect North American and global enterprise capital with high-grade real estate and industrial infrastructure developments across Gujarat, India.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/opportunities"
                  className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
                >
                  EXPLORE INVESTMENT OPPORTUNITIES
                </Link>
                <a 
                  href="tel:+12722679492"
                  className="px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  CALL USA HQ: +1 272-267-9492
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src={imgBoardroom} alt="Orion Executive Boardroom" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-blue-600 uppercase">ONE TRADE 360 DIVISION</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Cross-Border Portfolio Structuring</h4>
                  <p className="text-xs text-slate-600 mt-1">Direct coordination from Wilkes-Barre, PA to GIFT City, Ahmedabad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values Section */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block">OUR VISION</span>
              <h3 className="text-2xl font-bold text-slate-900">Connecting Continents & Disciplined Wealth</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To connect investors, businesses, and infrastructure across North America and India while helping families build sustainable, long-term wealth through disciplined investing and multi-generational real estate allocation.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase block">OUR MISSION</span>
              <h3 className="text-2xl font-bold text-slate-900">Trusted Cross-Border Advisory</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To become a trusted cross-border investment platform that supports global investors through education, professional guidance, commercial business opportunities, and carefully evaluated property opportunities across Gujarat.
              </p>
            </div>
          </div>

          {/* 6 Core Values Grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">THE ORION PILLARS</span>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Transparency", icon: CheckCircle2, color: "text-blue-600 bg-blue-50" },
              { name: "Professionalism", icon: Award, color: "text-emerald-600 bg-emerald-50" },
              { name: "Long-Term Thinking", icon: Globe, color: "text-amber-600 bg-amber-50" },
              { name: "Strategic Partnerships", icon: Users, color: "text-indigo-600 bg-indigo-50" },
              { name: "Responsible Growth", icon: Building2, color: "text-purple-600 bg-purple-50" },
              { name: "Client-First Approach", icon: Shield, color: "text-cyan-600 bg-cyan-50" }
            ].map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-sm">
                <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center ${val.color}`}>
                  <val.icon className="w-6 h-6" />
                </div>
                <h5 className="font-semibold text-xs uppercase text-slate-900">{val.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Leadership & USA Headquarters Desk */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          <div>
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-2">
              VERIFIED INTERNATIONAL ADVISORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Twin Continent Advisory Desks
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto mt-3">
              We provide seamless cross-border communication, legal due diligence, and builder verification across our offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">🇺🇸 USA HEADQUARTERS</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-[10px] font-bold">ONE TRADE 360</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Global Business Service</h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                680, Hazel St, Wilkes-Barre,<br />
                PA-18702 (United States of America)
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-200 text-sm font-semibold">
                <a href="tel:+12722679492" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>USA: +1 272-267-9492</span>
                </a>
                <a href="mailto:Globalservicejjp4@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors break-all">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>Globalservicejjp4@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">🇮🇳 INDIA ADVISORY DESK</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold">GUJARAT CORRIDOR</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Orion Gujarat Corporate Apex</h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Ahmedabad Commercial Apex & GIFT City Node<br />
                Gujarat, India
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-200 text-sm font-semibold">
                <a href="tel:+917984171515" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>India: +91 7984171515</span>
                </a>
                <Link href="/contact" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <span>Schedule Online Meeting Desk →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
