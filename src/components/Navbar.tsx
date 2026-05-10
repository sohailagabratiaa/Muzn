import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X as CloseIcon, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-1.07.32-2.01 1.03-2.58 1.92-.12.44-.22.9-.22 1.34V16.71c.02.73.23 1.47.61 2.08.71 1.15 1.94 1.83 3.26 1.85 1.54.01 3.01-.9 3.63-2.3.26-.58.33-1.22.32-1.85-.02-3.52-.02-7.04-.02-10.56.02-2.72.01-5.43.01-8.15z" />
  </svg>
);

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
                  { icon: <Facebook />, url: 'https://www.facebook.com/share/1J9rSrpZ79/' },
                  { icon: <Instagram />, url: 'https://www.instagram.com/mozn.csr26?igsh=dW1veDMxcGIwbm54' },
                  { icon: <Linkedin />, url: 'https://www.linkedin.com/in/mozn-csr-55860b393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                  { icon: <TikTokIcon />, url: 'https://www.tiktok.com/@moznn.2026?_r=1&_t=ZS-96FcudvkXDg' },
                  { icon: <Youtube />, url: 'https://youtube.com/@mozncsragncy26?si=6JtMMC5y6JxJkZ4q' },
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
