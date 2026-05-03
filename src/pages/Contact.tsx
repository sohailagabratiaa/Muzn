import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.73 8.73 0 0 1-3.53-3.41v10.15c.01 2.14-.52 4.37-1.92 6.01-1.39 1.66-3.5 2.53-5.61 2.39a7.6 7.6 0 0 1-5.12-2.58 8.4 8.4 0 0 1-1.84-5.32c-.06-1.97.57-3.95 1.75-5.52A7.54 7.54 0 0 1 7.67 8.16l.16 4.11a3.54 3.54 0 0 0-3.32 3.12c-.17 1.02.16 2.1.86 2.87.69.78 1.72 1.19 2.76 1.11a3.58 3.58 0 0 0 3.39-3.37c-.01-5.35-.01-10.72-.02-16.08z" />
  </svg>
);

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Get all checked services as an array
    const services = formData.getAll('services');
    
    const finalData = { ...data, services };
    console.log('Form submission data:', finalData);
    
    // Optionally reset form
    e.currentTarget.reset();
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-right">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 text-right md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-muzn-green uppercase tracking-[0.3em] mb-4"
          >
            نَحْنُ هُنَا لِأَجْلِك
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-muzn-navy mb-8"
          >
            دعنا نتحدث عن <span className="text-muzn-green">مشروعك</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            سواء كنت تبحث عن استشارة تسويقية أو ترغب في بدء مشروع جديد، فريقنا مستعد لسماعك وتقديم أفضل الحلول المبتكرة.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
           {/* Contact Info Col */}
           <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
              <div className="p-10 bg-muzn-navy text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-muzn-green/10 rounded-bl-full" />
                 <h3 className="text-2xl font-black mb-10 relative z-10">معلومات التواصل</h3>
                 
                 <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 bg-muzn-green/20 rounded-2xl flex items-center justify-center text-muzn-green shrink-0">
                          <Phone size={24} />
                       </div>
                       <div>
                          <div className="text-gray-400 text-sm mb-1">اتصل بنا</div>
                          <div className="text-xl font-bold font-mono" dir="ltr">+20 106 497 3569</div>
                       </div>
                    </div>

                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 bg-muzn-green/20 rounded-2xl flex items-center justify-center text-muzn-green shrink-0">
                          <Mail size={24} />
                       </div>
                       <div>
                          <div className="text-gray-400 text-sm mb-1">راسلنا</div>
                          <div className="text-xl font-bold transition-colors hover:text-muzn-green cursor-pointer">info@muzn.site</div>
                       </div>
                    </div>

                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 bg-muzn-green/20 rounded-2xl flex items-center justify-center text-muzn-green shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <div className="text-gray-400 text-sm mb-1">موقعنا</div>
                          <div className="text-xl font-bold">الإسكندرية، مصر - خدمة تغطي الشرق الأوسط</div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-20 pt-10 border-t border-white/10">
                    <div className="text-gray-400 text-sm mb-6">تابعنا على منصات التواصل</div>
                    <div className="flex flex-wrap gap-4">
                       {[
                         { icon: <Facebook />, url: 'https://www.facebook.com/share/1NjobWtGkJ/' },
                         { icon: <Instagram />, url: 'https://www.instagram.com/mozn.csr26?igsh=eTdzZWk1Mndmb2U5' },
                         { icon: <XIcon />, url: 'https://x.com/moznami26' },
                         { icon: <TikTokIcon />, url: 'https://www.tiktok.com/@moznn.2026?_r=1&_t=ZS-95VrGLU3uZG' },
                         { icon: <Youtube />, url: 'https://www.youtube.com/@mozncsrAgncy26' },
                         { icon: <Linkedin />, url: 'https://www.linkedin.com/in/mozn-csr-55860b393?utm_source=share_via&utm_content=profile&utm_medium=member_android' }
                       ].map((s, i) => (
                         <a key={i} href={s.url} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-muzn-green transition-all duration-300">
                           {s.icon}
                         </a>
                       ))}
                    </div>
                 </div>
              </div>

              <a href="https://wa.me/201064973569" target="_blank" rel="noreferrer" className="block p-8 bg-green-500 text-white rounded-[2rem] shadow-xl hover:shadow-green-500/20 transition-all group overflow-hidden relative">
                 <div className="absolute right-0 top-0 bottom-0 w-24 bg-white/10 -skew-x-12 translate-x-32 group-hover:translate-x-[-150%] transition-transform duration-1000" />
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <MessageCircle size={32} />
                       <div className="text-xl font-black">دردش معنا عبر واتساب</div>
                    </div>
                    <span className="text-2xl">←</span>
                 </div>
              </a>
           </div>

           {/* Form Col */}
           <div className="lg:col-span-7 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-gray-100 border border-gray-50 h-full"
              >
                  <h3 className="text-3xl font-black text-muzn-navy mb-10">أرسل لنا رسالة</h3>
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-sm font-bold text-muzn-navy px-2">الاسم الكامل</label>
                          <input name="name" type="text" placeholder="اكتب اسمك هنا" className="w-full px-6 py-4 rounded-2xl bg-muzn-grey border border-transparent focus:border-muzn-green focus:bg-white transition-all outline-none text-lg" required />
                       </div>
                       <div className="space-y-3">
                          <label className="text-sm font-bold text-muzn-navy px-2">رقم الجوال</label>
                          <input name="phone" type="tel" placeholder="000 000 000" className="w-full px-6 py-4 rounded-2xl bg-muzn-grey border border-transparent focus:border-muzn-green focus:bg-white transition-all outline-none text-lg" dir="ltr" required />
                       </div>
                    </div>
                    
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-muzn-navy px-2">البريد الإلكتروني</label>
                        <input name="email" type="email" placeholder="example@muzn.site" className="w-full px-6 py-4 rounded-2xl bg-muzn-grey border border-transparent focus:border-muzn-green focus:bg-white transition-all outline-none text-lg" required />
                    </div>

                    <div className="space-y-3">
                       <label className="text-sm font-bold text-muzn-navy px-2">نوع الخدمة المطلوبة</label>
                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {['تسويق رقمي', 'إدارة فعاليات', 'إنتاج مرئي', 'علاقات عامة', 'حلول تقنية', 'أخرى'].map((item) => (
                            <label key={item} className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-50 text-sm font-bold cursor-pointer hover:border-muzn-green/30 transition-all has-[:checked]:bg-muzn-green has-[:checked]:border-muzn-green has-[:checked]:text-white">
                               <input name="services" value={item} type="checkbox" className="hidden" />
                               {item}
                            </label>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-sm font-bold text-muzn-navy px-2">تفاصيل إضافية</label>
                       <textarea name="message" rows={5} placeholder="كيف يمكننا مساعدتك؟ أخبرنا بمزيد من التفاصيل عن رؤيتك..." className="w-full px-6 py-4 rounded-2xl bg-muzn-grey border border-transparent focus:border-muzn-green focus:bg-white transition-all outline-none text-lg resize-none"></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 shadow-muzn-green/30 hover:scale-[1.02]">
                       إرسال الطلب الآن
                       <Send size={24} />
                    </button>
                  </form>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
