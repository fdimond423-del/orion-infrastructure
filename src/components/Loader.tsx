import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 4;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden select-none"
    >
      {/* Background radial glow matching Home page sapphire & emerald theme */}
      <div className="absolute w-[550px] h-[550px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-secondary/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Orbital ring container with HUGE Cropped, Zero-Background Logo Emblem */}
        <div className="relative flex items-center justify-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-primary/50 opacity-80"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-primary/40 opacity-60 border-t-transparent border-l-transparent"
          />

          {/* Complete un-cut logo graphic with zero background via mix-blend-screen */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [0.97, 1.03, 0.97], opacity: 1 }}
            transition={{ 
              scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 } 
            }}
            className="relative w-56 h-64 sm:w-64 sm:h-72 flex items-center justify-center pointer-events-none"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Orion Complete Logo" 
              className="w-full h-full object-contain mix-blend-screen filter drop-shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-transform"
            />
          </motion.div>
        </div>

        {/* Crisp Progress Bar in Signature Home Page Emerald / Accent Theme */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center space-y-3 w-56 sm:w-64"
        >
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px] shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-emerald-400 to-accent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.9)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between w-full text-[11px] font-mono text-white/70 tracking-[0.25em] uppercase font-semibold">
            <span>Platform Sync</span>
            <span className="text-primary font-bold">{progress}%</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
