import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Globe2 } from 'lucide-react';
import { useRef } from 'react';
const heroBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border-b border-slate-200">
      {/* Background Architectural Watermarks & Light Grid */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </motion.div>

      {/* Subtle Blue Corporate Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-200 bg-blue-50/80 mb-8 shadow-sm"
          >
            <Globe2 className="w-4 h-4 text-[#007cdc]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide text-[#007cdc] uppercase">Global Real Estate Development & Advisory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] text-[#131238] mb-8"
          >
            Earn Globally.<br />
            <span className="text-gradient-emerald">Invest in Gujarat.</span><br />
            Build Generational Wealth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-12"
          >
            Connecting NRIs across <strong className="text-[#131238] font-bold">USA • Canada • UK • Australia</strong> to India's fastest-growing real estate, commercial towers, and institutional sovereign infrastructure corridors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#opportunities"
              className="px-9 py-4 bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-sm tracking-wide rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 group"
            >
              Explore Opportunities
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-9 py-4 bg-white hover:bg-slate-50 text-[#131238] font-bold text-sm tracking-wide border border-slate-300 hover:border-slate-400 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
      >
        <span className="text-xs text-[#131238]/60 font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-10 bg-gradient-to-b from-[#007cdc] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
