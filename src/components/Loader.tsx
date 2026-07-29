import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant loading simulation set to 3 seconds exactly as requested
    const duration = 3000; // 3 seconds total load time
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
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle background element */}
          <div className="absolute inset-0 bg-slate-50/50" />
          
          <div className="relative z-10 flex flex-col items-center w-full max-w-[280px] sm:max-w-xs px-6">
            
            {/* Animated Logo Display */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ 
                scale: [0.9, 1.05, 1], 
                opacity: 1, 
                y: [10, -5, 0],
                filter: ['drop-shadow(0px 0px 0px rgba(0,124,220,0))', 'drop-shadow(0px 10px 20px rgba(0,124,220,0.2))', 'drop-shadow(0px 5px 10px rgba(0,124,220,0.1))']
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center mb-10"
            >
              <motion.img 
                animate={{ rotateY: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                src="/logo.png" 
                alt="Orion Biz Infrastructure" 
                className="w-full h-full object-contain"
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
               className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2"
            >
              <span>Initializing Portal</span>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
