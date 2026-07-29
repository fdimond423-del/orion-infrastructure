import { motion } from 'framer-motion';
import { ArrowRight, Globe, Sparkles, Building2, Briefcase } from 'lucide-react';
import { Link } from 'wouter';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-48 lg:pt-56 pb-24 overflow-hidden bg-slate-50 text-slate-900 font-sans flex items-center border-b border-slate-200">
      
      {/* Very subtle ambient glows for a premium white feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* VIP Brand Strip */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm text-xs font-bold text-blue-600 uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>ORION BIZ INFRASTRUCTURE™</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm text-xs font-bold text-emerald-600 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>ONE TRADE 360</span>
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Earn Globally. <br />
              <span className="text-blue-600">
                Invest in Gujarat.
              </span> <br />
              <span className="text-emerald-600">
                Build Wealth.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Orion Biz Infrastructure is a premier cross-border platform. We convert highly demanding active income in North America into passive, institutional assets in India.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link 
                href="/strategy"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-[0_10px_30px_-10px_rgba(0,124,220,0.4)] hover:shadow-[0_10px_40px_-10px_rgba(0,124,220,0.6)] hover:-translate-y-0.5 transition-all"
              >
                <span>EXPLORE THE ENGINE MODEL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Briefcase className="w-4 h-4 text-slate-400" />
                <span>CONTACT ADVISORY DESK</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3D Floating Concept Card (Matches Model.tsx Design) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
            className="lg:col-span-5 relative perspective-1000 hidden lg:block"
          >
            {/* Soft backdrop blur card */}
            <div className="relative w-full aspect-[4/5] max-h-[600px] rounded-3xl bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,124,220,0.1)] overflow-hidden flex flex-col items-center justify-center text-center p-12 group hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(0,124,220,0.2)] transition-all duration-500">
              
              {/* Subtle grid background inside the card */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Center Animated Icon */}
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center border border-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.15)] mb-8"
                >
                  <Building2 className="w-10 h-10 text-emerald-500" />
                </motion.div>

                <span className="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-4">
                  ONE TRADE 360 APEX
                </span>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Cross-Border <br /> Asset Structuring
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  Designed by NRI asset management directors to eliminate cross-border friction and ensure strict RERA compliance for your portfolio.
                </p>
              </div>

              {/* Decorative side lines */}
              <div className="absolute top-0 bottom-0 left-6 border-l border-dashed border-slate-100" />
              <div className="absolute top-0 bottom-0 right-6 border-l border-dashed border-slate-100" />
            </div>
            
            {/* Floating Mini Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-8 px-6 py-4 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-200 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-bold uppercase">USA & India</p>
                <p className="text-sm text-slate-900 font-bold">Direct Corridors</p>
              </div>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
