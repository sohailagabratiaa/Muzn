import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X as CloseIcon, Facebook, Instagram } from 'lucide-react';

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'أعمالنا', path: '/portfolio' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const navColor = !isScrolled && isHome ? 'text-white' : 'text-muzn-navy';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-auto flex items-center justify-center">
                <img 
                  src="/regenerated_image_1777383551292.png" 
                  alt="Muzn Logo" 
                  className="h-full w-auto object-contain" 
                />
              </div>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`font-medium transition-colors hover:text-muzn-green ${navColor} ${location.pathname === link.path ? 'text-muzn-green' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:block btn-primary text-sm py-2 px-6">
              ابدأ مشروعك
            </Link>
            <button 
              className={`lg:hidden p-2 rounded-lg shadow-sm ${!isScrolled && isHome ? 'bg-white/10 text-white' : 'bg-white text-muzn-navy'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col lg:hidden text-right"
          >
            <div className="flex justify-between items-center mb-16">
              <img 
                src="/regenerated_image_1777383551292.png" 
                alt="Muzn Logo" 
                className="h-10 w-auto object-contain" 
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-muzn-grey text-muzn-navy rounded-full hover:bg-red-50 hover:text-red-500 transition-all active:scale-90"
              >
                <CloseIcon size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-3xl font-bold transition-all pb-4 border-b border-gray-50 flex justify-between items-center group ${location.pathname === link.path ? 'text-muzn-green' : 'text-muzn-navy'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">←</span>
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-12 space-y-8">
              <Link to="/contact" className="btn-primary w-full text-center block py-5 text-xl shadow-xl shadow-muzn-green/20" onClick={() => setIsMobileMenuOpen(false)}>
                ابدأ مشروعك
              </Link>
              
              <div className="flex justify-center gap-6">
                {[
                  { icon: <Facebook />, url: 'https://www.facebook.com/share/1NjobWtGkJ/' },
                  { icon: <Instagram />, url: 'https://www.instagram.com/mozn.csr26?igsh=eTdzZWk1Mndmb2U5' },
                  { icon: <XIcon />, url: 'https://x.com/moznami26' }
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-muzn-grey flex items-center justify-center text-muzn-navy hover:bg-muzn-green hover:text-white transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
