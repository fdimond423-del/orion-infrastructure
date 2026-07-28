import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, MapPin, Building2, Globe, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const giftCityImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-950 text-white flex flex-col justify-between selection:bg-blue-500/30 selection:text-white">
      
      {/* Deep Space & Architectural Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0A1128]/80 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Modern High-Tech Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
          backgroundSize: '48px 48px' 
        }} 
      />

      {/* Main Content Area */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 my-auto py-8">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Powerful Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Dual Headquarters Badge Stream */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-300 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>USA HQ: EDISON, NEW JERSEY</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>GUJARAT CORRIDOR DESK</span>
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]"
            >
              Turn Active U.S. Profits Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-[#007CDC]">Sovereign Gujarat Wealth.</span>
            </motion.h1>

            {/* Compelling Value Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We empower USA, Canadian, UK, and Australian NRIs to channel commercial operations—from gas stations, franchises, and enterprise trade—into secure, high-compounding commercial real estate across India's fastest-growing institutional state.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                to="/opportunities"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#007CDC] via-blue-600 to-emerald-500 text-white font-mono font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,124,220,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>EXPLORE GUJARAT ASSETS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-sm uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 hover:border-blue-400"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>BOOK EXECUTIVE DESK ADVISORY</span>
              </Link>
            </motion.div>

            {/* Micro Trust Bullet Points */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-left text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-Year RERA Title Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#007CDC] shrink-0" />
                <span>Direct NRE/NRO Repatriation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Encumbrance Registry</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Sovereign Asset Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Glow Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-3 bg-gradient-to-br from-white/20 via-blue-500/20 to-emerald-500/20 backdrop-blur-2xl border border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
              
              {/* Image Container */}
              <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-inner group">
                <img 
                  src={giftCityImage} 
                  alt="GIFT City Infrastructure Hub" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Overlay Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LIVE ASSET CORRIDOR</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#007CDC]/90 text-white text-[10px] font-mono font-bold uppercase tracking-wide shadow-md">
                    GIFT CITY NODE
                  </span>
                </div>

                {/* Overlay Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1 font-extrabold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>INSTITUTIONAL ACCESS</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                    Ahmedabad & GIFT City Multi-Trillion Apex
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-2">
                    India’s global business and financial nerve center. Vetted Grade-A commercial spaces with assured rental compounding and foreign currency repatriation.
                  </p>

                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/15 text-center font-mono">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                      <div className="text-emerald-400 font-bold text-xs sm:text-sm">RERA-30</div>
                      <div className="text-[9px] text-slate-300 font-semibold uppercase">TITLE VETTED</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                      <div className="text-blue-300 font-bold text-xs sm:text-sm">NRE / NRO</div>
                      <div className="text-[9px] text-slate-300 font-semibold uppercase">SECURED ROUTE</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                      <div className="text-amber-300 font-bold text-xs sm:text-sm">HIGH YIELD</div>
                      <div className="text-[9px] text-slate-300 font-semibold uppercase">COMPOUNDING</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-900 to-[#0A1128] border border-slate-700 p-4 rounded-2xl shadow-2xl backdrop-blur-xl hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                <Globe className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-serif font-bold text-white">4 Continents Connected</div>
                <div className="text-[11px] text-slate-400 font-mono">USA • Canada • UK • Australia</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Executive Statistical Banner Bottom Footer */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl pt-12 pb-8 mt-12">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/60 text-center">
            
            <div className="px-4">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight mb-1">
                $500M+
              </div>
              <div className="text-xs font-mono font-semibold text-[#007CDC] uppercase tracking-wider">
                TARGET ASSET OVERFLOW
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-light hidden sm:block">
                Dedicated institutional syndicates in Gujarat
              </div>
            </div>

            <div className="px-4">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight mb-1">
                100%
              </div>
              <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                ATTORNEY TITLE CLEARANCE
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-light hidden sm:block">
                30-Year non-encumbrance verification
              </div>
            </div>

            <div className="px-4">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight mb-1">
                6+ Nodes
              </div>
              <div className="text-xs font-mono font-semibold text-blue-300 uppercase tracking-wider">
                GUJARAT GROWTH APEX
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-light hidden sm:block">
                GIFT City, Dholera SIR, Ahmedabad, Sanand
              </div>
            </div>

            <div className="px-4">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight mb-1">
                24-Hour
              </div>
              <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                DIRECTOR SYNC GUARANTEE
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-light hidden sm:block">
                Edison (NJ) & GIFT City direct callback
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
