import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Orion", path: "/about" },
    { name: "Investment Opportunities", path: "/opportunities" },
    { name: "Gujarat Growth", path: "/gujarat-growth" },
    { name: "NRI Services", path: "/nri-services" },
    { name: "Resources", path: "/resources" }
  ];

  const NavItem = ({ name, path }: { name: string, path: string }) => {
    const isActive = location === path || (path !== '/' && location.startsWith(path));
    return (
      <Link 
        href={path}
        className={`relative text-sm font-semibold transition-colors px-2 py-1 ${
          isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
        }`}
      >
        {name}
        {isActive && (
          <span className="absolute -bottom-1.5 left-2 right-2 h-[2px] bg-blue-600 rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 font-sans ${
          isScrolled 
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' 
            : 'py-5 bg-white/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="z-50 relative group flex items-center">
            <img src="/logo.png" alt="Orion Biz Infrastructure" className="h-20 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <NavItem key={link.name} name={link.name} path={link.path} />
            ))}
          </div>

          {/* Desktop CTA (Simplified) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/contact"
              className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-sm hover:shadow transition-all flex items-center gap-2"
            >
              <span>Contact Desk</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-slate-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden font-sans ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-28 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-4 border-b border-slate-100 flex items-center justify-between font-bold text-lg ${
                  location === link.path ? 'text-blue-600' : 'text-slate-900'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pt-8">
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm text-center block shadow-sm"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
