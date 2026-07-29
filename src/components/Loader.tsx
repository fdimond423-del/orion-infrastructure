import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant loading simulation
    const duration = 1200; // 1.2 seconds total load time
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle background element */}
          <div className="absolute inset-0 bg-slate-50/50" />
          
          <div className="relative z-10 flex flex-col items-center w-full max-w-[280px] sm:max-w-xs px-6">
            
            {/* Logo Display */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center mb-10"
            >
              <img 
                src="/logo.png" 
                alt="Orion Biz Infrastructure" 
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </motion.div>

            {/* Elegant Progress Bar Container */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner"
            >
              {/* Animated Progress Fill */}
              <motion.div 
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${progress}%` }}
                layout
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]"
            >
              Initializing Portal
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
