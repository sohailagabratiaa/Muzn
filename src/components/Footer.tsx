import React, { useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';

const LegalModal = lazy(() => import('./LegalModal').then(m => ({ default: m.LegalModal })));

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-1.07.32-2.01 1.03-2.58 1.92-.12.44-.22.9-.22 1.34V16.71c.02.73.23 1.47.61 2.08.71 1.15 1.94 1.83 3.26 1.85 1.54.01 3.01-.9 3.63-2.3.26-.58.33-1.22.32-1.85-.02-3.52-.02-7.04-.02-10.56.02-2.72.01-5.43.01-8.15z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <footer className="bg-muzn-navy pt-20 pb-10 text-white text-right">
      <div className="container mx-auto px-6">
         <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
               <div className="mb-6">
                  <img 
                    src="/regenerated_image_1777383551292.png" 
                    alt="Muzn Logo" 
                    className="h-14 w-auto object-contain" 
                  />
               </div>
               <p className="text-gray-400 max-w-sm leading-relaxed">
                 نصنع حلولاً تسويقية استثنائية تحقق الأثر المستدام وتعزز مفهوم الإبداع في كل ما نقدمه. شركاؤكم في صناعة الأثر الذي يبقى.
               </p>
            </div>
            <div>
               <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
               <ul className="space-y-4">
                  {navLinks.map(l => (
                    <li key={l.name}><Link to={l.href} className="text-gray-400 hover:text-muzn-green transition-colors">{l.name}</Link></li>
                  ))}
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
               <ul className="space-y-4 text-gray-400">
                  <li><a href="mailto:info@muzn.site" className="hover:text-muzn-green transition-colors">info@muzn.site</a></li>
                  <li dir="ltr"><a href="https://wa.me/201064973569" target="_blank" rel="noreferrer" className="hover:text-muzn-green transition-colors">+20 106 497 3569</a></li>
                  <li>الإسكندرية، مصر</li>
               </ul>
               <div className="flex gap-4 mt-8 justify-end flex-wrap">
                  {[
                    { name: 'WhatsApp', icon: <MessageCircle size={18} />, url: 'https://wa.me/201064973569' },
                    { name: 'X', icon: <XIcon />, url: 'https://x.com/moznami26' },
                    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://www.instagram.com/mozn.csr26?igsh=eTdzZWk1Mndmb2U5' },
                    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/company/moznami' },
                    { name: 'TikTok', icon: <TikTokIcon />, url: 'https://www.tiktok.com/@moznami' },
                    { name: 'Facebook', icon: <Facebook size={18} />, url: 'https://www.facebook.com/moznami' },
                  ].map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-muzn-green hover:to-muzn-light-green transition-all hover:border-transparent hover:scale-110 active:scale-95 shadow-lg hover:shadow-muzn-green/20">
                      {social.icon}
                    </a>
                  ))}
               </div>
            </div>
         </div>
         
         <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row-reverse justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 مزن. جميع الحقوق محفوظة. صُنع بـ <span className="text-muzn-green">💚</span> في مزن
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
               <button 
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
               >
                 سياسة الخصوصية
               </button>
               <button 
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
               >
                 الشروط والأحكام
               </button>
            </div>
         </div>
      </div>

      <Suspense fallback={null}>
        <LegalModal 
          isOpen={activeLegalModal !== null} 
          onClose={() => setActiveLegalModal(null)} 
          type={activeLegalModal} 
        />
      </Suspense>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/201064973569" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-muzn-navy px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-100 pointer-events-none">تحدث معنا الآن</span>
      </a>
    </footer>
  );
};
