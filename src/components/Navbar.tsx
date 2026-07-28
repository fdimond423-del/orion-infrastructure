import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [location] = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 15);
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Gujarat Growth', href: '/gujarat-growth' },
    { name: 'NRI Services', href: '/nri-services' },
    { name: 'Resources', href: '/resources' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm' 
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-3'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between relative">
          
          {/* Centered Logo + Menu Bar Assembly ("logo ke sath middle mein") */}
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 mx-auto">
            <Link href="/" onClick={handleNavClick} className="flex items-center group shrink-0 -my-4">
              <div className="h-20 md:h-24 lg:h-28 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Orion Infrastructure" 
                  className="h-full w-auto object-contain filter drop-shadow-md" 
                />
              </div>
            </Link>

            {/* Navigation Links Right Next to the Logo */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="relative py-1 text-sm md:text-[15px] font-medium tracking-wide transition-colors duration-200 group"
                  >
                    <span className={`relative z-10 ${isActive ? 'text-[#007cdc] font-bold' : 'text-[#131238]/85 hover:text-[#007cdc]'}`}>
                      {link.name}
                    </span>
                    
                    {/* Blue/Navy Underline for Active/Hover */}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#007cdc] rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                    }`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact Us Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-[#007cdc] hover:bg-[#131238] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] items-center gap-1.5"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 -mr-0.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-[#131238] p-2 rounded-lg bg-slate-100 border border-slate-300 hover:border-blue-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#007cdc]" /> : <Menu className="w-6 h-6 text-[#131238]" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sleek Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 pt-20 pb-8 px-6 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center gap-3 lg:hidden border-b border-slate-200 shadow-xl"
          >
            <div className="flex flex-col items-center gap-2 w-full max-w-sm">
              {[...navLinks, { name: 'Contact Us', href: '/contact' }].map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block w-full py-2.5 text-center text-sm font-semibold rounded-xl transition-all duration-200 border ${
                      isActive 
                        ? 'text-[#007cdc] bg-blue-50 border-blue-200 font-bold' 
                        : 'text-[#131238]/80 border-transparent hover:text-[#131238] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
