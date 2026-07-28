import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Shield, Globe, TrendingUp } from 'lucide-react';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Securing Connection to USA East Coast Desk...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + 2;
        if (next >= 30 && next < 70) {
          setStatus('Auditing Sovereign Gujarat Real Estate & GIFT City Nodes...');
        } else if (next >= 70) {
          setStatus('Initializing One Trade 360 Cross-Border Portfolio...');
        }
        return next;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#0A1128] to-slate-950 text-white overflow-hidden select-none"
    >
      {/* Cinematic Deep Ambient Glows */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] translate-y-20 pointer-events-none" />

      {/* Subtle Institutional Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg px-6 text-center">
        
        {/* Orbital Brand Centerpiece */}
        <div className="relative flex items-center justify-center mb-10 w-64 h-64 sm:w-72 sm:h-72">
          {/* Outer Rotating Diamond Radar Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-slate-700/60 p-2 shadow-[0_0_40px_rgba(0,124,220,0.15)]"
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#007CDC] shadow-[0_0_10px_#007CDC]" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981]" />
          </motion.div>

          {/* Inner Counter-Rotating Gauge */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-dashed border-blue-500/40 opacity-70"
          />

          {/* Center Glass Sphere with Transparent Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.98, 1.02, 0.98], opacity: 1 }}
            transition={{ 
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6 } 
            }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/15 flex items-center justify-center p-6 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/5 to-white/10 pointer-events-none" />
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Orion Complete Emblem" 
              className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-[11px] font-mono font-bold tracking-[0.25em] uppercase">
            <Globe className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span>EXECUTIVE ADVISORY PLATFORM</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
            Orion Infrastructure
          </h1>
          <p className="text-xs text-slate-400 font-light tracking-wide max-w-sm mx-auto">
            Channeling U.S. Business Profits into Multi-Generational Gujarat Real Estate
          </p>
        </motion.div>

        {/* High-Precision Synchronized Progress Console */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-sm bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl border border-slate-800 shadow-xl"
        >
          <div className="flex justify-between items-center text-xs mb-3 font-mono">
            <span className="text-slate-300 flex items-center gap-2 truncate pr-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {status}
            </span>
            <span className="text-[#007CDC] font-bold text-sm shrink-0">{progress}%</span>
          </div>
          
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-[2px] shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#007CDC] via-blue-500 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(0,124,220,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono text-left">
            <div className="flex items-center gap-1.5 truncate">
              <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>RERA AUDIT</span>
            </div>
            <div className="flex items-center gap-1.5 truncate justify-center">
              <TrendingUp className="w-3 h-3 text-blue-400 shrink-0" />
              <span>GIFT CITY</span>
            </div>
            <div className="flex items-center gap-1.5 truncate justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span>NJ • GUJARAT</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </motion.div>
  );
}
