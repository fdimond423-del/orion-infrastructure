import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'HOME', path: '/', isHash: false },
  { name: 'INVESTMENT STRATEGY', path: '/strategy', isHash: false },
  { name: 'NRI SERVICES', path: '/services', isHash: false },
  { name: 'GUJARAT GROWTH', path: '/gujarat', isHash: false },
  { name: 'OPPORTUNITIES', path: '/opportunities', isHash: false },
  { name: 'RESOURCES', path: '/resources', isHash: false },
  { name: 'ABOUT US', path: '/about', isHash: false },
  { name: 'CONTACT', path: '/contact', isHash: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm' 
          : 'py-5 bg-gradient-to-b from-white/95 via-white/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <nav className="flex items-center justify-between gap-4">
          
          {/* Brand Logo - Enlarged and Centered Align */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-14 w-auto sm:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Orion Infrastructure" 
                className="h-full w-auto object-contain filter drop-shadow-sm" 
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-slate-200 pl-3.5">
              <span className="font-serif font-bold text-base text-[#0A1128] tracking-tight leading-tight">ORION</span>
              <span className="text-[10px] font-mono font-extrabold tracking-[0.2em] text-[#007CDC] uppercase">INFRASTRUCTURE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-white text-[#007CDC] shadow-sm font-black' 
                      : 'text-slate-600 hover:text-[#0A1128] hover:bg-white/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#007CDC]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Executive Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a 
              href="tel:+16096618318" 
              className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-50 hover:bg-blue-100 text-[#007CDC] text-xs font-mono font-bold border border-blue-200 transition-colors"
              title="USA Direct Headquarters Desk"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1-609-661-8318</span>
            </a>
            <Link 
              href="/contact" 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0A1128] via-[#007CDC] to-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider hover:shadow-[0_4px_20px_rgba(0,124,220,0.35)] hover:scale-105 transition-all duration-300 flex items-center gap-1.5 shadow-sm"
            >
              <span>ONE TRADE 360</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-[#0A1128] hover:bg-blue-50 hover:text-[#007CDC] transition-colors focus:outline-none shadow-xs"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-3">
              <div className="text-xs font-mono text-[#007CDC] font-bold tracking-[0.2em] uppercase pb-2 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>NRI INVESTMENT NAVIGATION</span>
              </div>
              {navLinks.map((link) => {
                const isActive = location === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-5 py-3 rounded-2xl font-mono text-xs font-extrabold tracking-wider transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-blue-50 text-[#007CDC] border border-blue-200 shadow-xs' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#007CDC]" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    )}
                  </Link>
                );
              })}
              
              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3">
                <a 
                  href="tel:+16096618318" 
                  className="w-full py-3 px-4 rounded-2xl bg-slate-100 text-[#0A1128] font-mono text-xs font-bold flex items-center justify-center gap-2 border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-[#007CDC]" />
                  <span>USA HQ: +1-609-661-8318 (EDISON, NJ)</span>
                </a>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#0A1128] text-white text-center font-mono text-xs font-extrabold uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
                >
                  <span>ACCESS CLIENT DESK (ONE TRADE 360)</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
