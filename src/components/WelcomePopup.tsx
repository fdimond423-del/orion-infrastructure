import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, Sparkles } from 'lucide-react';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup exactly as the loading screen finishes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 font-sans">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-blue-600 to-emerald-500 opacity-10 pointer-events-none" />
            
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors z-[100] shadow-sm cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="p-6 sm:p-10 md:p-14 relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 sm:mb-8 shadow-sm border border-blue-100">
                <Target className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
                Build Your Future in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Gujarat</span>
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8 sm:mb-12 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
                Orion Biz Infrastructure helps NRIs and global investors explore residential, commercial, and business investment opportunities across Gujarat. Whether you're looking for rental apartments, luxury villas, independent homes, land, commercial properties, office spaces, or income-generating investments, our team provides guidance to help you make informed decisions aligned with your long-term goals.
              </p>

              <div className="w-full max-w-3xl bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3 uppercase tracking-wide text-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 shrink-0" />
                  <span>Earn Globally. Invest in Gujarat.<br className="md:hidden" /> Build Generational Wealth.</span>
                </p>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors hover:shadow-xl w-full sm:w-auto cursor-pointer"
              >
                Explore Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
