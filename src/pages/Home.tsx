import React from 'react';
import { Link } from 'react-router-dom';
import { StatCounter } from '../components/StatCounter';
import { motion } from 'motion/react';
import { 
  Users, 
  Lightbulb, 
  Target, 
  Cpu, 
  Camera, 
  BarChart3, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Award, 
  ChevronDown,
  Send,
  MessageCircle
} from 'lucide-react';

const servicesShort = [
  { 
    title: "حلول مبنية على المؤثرين", 
    desc: "ترشيح المؤثرين وبناء محتوى وحملات تصنع أثر ونتائج قابلة للقياس.",
    icon: <Users className="w-8 h-8 text-muzn-green" />
  },
  { 
    title: "حلول مبنية على التجارب", 
    desc: "تصميم تجربة تلامس الجمهور (فعالية، إطلاق، مشاركة في فعالية) تصنع أثر يشعر به العميل.",
    icon: <Lightbulb className="w-8 h-8 text-muzn-green" />
  },
  { 
    title: "حلول مبنية على التخطيط", 
    desc: "تصميم استراتيجيات واضحة تُبنى عليها القرارات وتقاس من خلالها النتائج.",
    icon: <Target className="w-8 h-8 text-muzn-green" />
  },
];

const values = [
  { name: "إبداع بلا حدود", desc: "نبتكر حلولاً تسويقية فريدة.", icon: <Zap className="w-6 h-6 text-muzn-green" /> },
  { name: "سرعة التنفيذ", desc: "نلتزم بالجداول الزمنية.", icon: <Clock className="w-6 h-6 text-muzn-green" /> },
  { name: "خبرة موثوقة", desc: "+8 سنوات في السوق.", icon: <Award className="w-6 h-6 text-muzn-green" /> },
  { name: "شغف بالتميز", desc: "نضع شغفنا في كل مشروع.", icon: <Heart className="w-6 h-6 text-muzn-green" /> },
  { name: "نتائج ملموسة", desc: "نحقق أهدافك بكفاءة عالية.", icon: <Target className="w-6 h-6 text-muzn-green" /> },
  { name: "موثوقية تامة", desc: "شراكة طويلة الأمد.", icon: <ShieldCheck className="w-6 h-6 text-muzn-green" /> },
];

const Home: React.FC = () => {
  return (
    <div className="selection:bg-muzn-green selection:text-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-muzn-navy">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/4 -right-20 w-96 h-96 bg-muzn-green/20 rounded-full blur-[120px]" />
           <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-muzn-light-green/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-gradient-to-b from-muzn-navy/50 via-muzn-navy to-muzn-navy" />
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center py-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-right order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muzn-green/10 border border-muzn-green/20 text-muzn-green font-bold text-xs sm:text-sm mb-6 lg:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muzn-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-muzn-green"></span>
              </span>
              قِيمٌ تُسَوَّق.. وَأَثَرٌ يَبْقَىٰ
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] lg:leading-[1.1] mb-6 text-white font-serif hover:scale-[1.01] transition-transform duration-300 cursor-default">
              مُزن للحلول التسويقية <br className="hidden md:block" /> والعلاقات العامة
            </h1>
            
            <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl lg:max-w-none font-serif opacity-90">
              تشكلت في عام 2025 تحمل معها مجموعة من الحلول التسويقية والإعلامية التي تحقق الأثر المستدام للمنتجات والمبادرات وتعزز مفهوم الإبداع في الحملات التسويقية والاتصالية والظهور المميز.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-2xl lg:max-w-none">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-3 text-lg font-bold h-[60px] sm:h-[64px] transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-muzn-green/20 px-6">
                ابدأ مشروعك
                <Send size={20} />
              </Link>
              <a href="https://wa.me/201064973569" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg font-bold h-[60px] sm:h-[64px] bg-white border border-muzn-green text-muzn-green hover:bg-muzn-green hover:text-white transition-all hover:scale-[1.02] active:scale-95 rounded-full px-6">
                تواصل معنا
                <MessageCircle size={20} />
              </a>
              <Link to="/services" className="btn-secondary border-white/20 text-white hover:bg-white hover:text-muzn-navy flex items-center justify-center gap-3 text-lg font-bold h-[60px] sm:h-[64px] transition-all hover:scale-[1.02] active:scale-95 px-6 sm:col-span-2 lg:col-span-1">
                استكشف خدماتنا
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none mx-auto"
          >
            <div className="relative z-10 flex items-center justify-center p-4 sm:p-12">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Decorative background element for the logo */}
                <div className="absolute inset-0 bg-muzn-green/5 rounded-full scale-110 blur-3xl animate-pulse" />
                <img 
                  src="/regenerated_image_1777383559734.png" 
                  alt="Marketing and Charity Team working in office" 
                  className="w-full h-full relative z-10 object-cover rounded-3xl shadow-2xl drop-shadow-[0_0_50px_rgba(16,185,129,0.1)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-white/20"
            >
              <div className="p-2 bg-gradient-to-br from-muzn-green/20 to-muzn-light-green/10 rounded-lg text-muzn-green"><Target /></div>
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">معدل التأثير</div>
                <div className="font-black text-muzn-navy text-lg">%98+</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-white/20"
            >
              <div className="p-2 bg-gradient-to-br from-muzn-green/20 to-muzn-light-green/10 rounded-lg text-muzn-green"><Users /></div>
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">عملاء سعداء</div>
                <div className="font-black text-muzn-navy text-lg">+400</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <a href="#services-preview" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce cursor-pointer flex flex-col items-center hover:text-white transition-colors">
           <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">اكتشف المزيد</span>
           <ChevronDown size={20} />
        </a>
      </section>

      {/* Stats Section */}
      <section className="bg-muzn-navy py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter value={2025} label="عام التأسيس" />
            <StatCounter value={20} label="خبير في فريق عملنا" prefix="+" />
            <StatCounter value={100} label="مؤثر عملنا معهم" prefix="+" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services-preview" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-right">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-muzn-green uppercase tracking-widest mb-3">✨ تميزنا</h2>
            <h3 className="text-4xl md:text-5xl font-black text-muzn-navy mb-6">نظرة على خدماتنا</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">نقدم لك باقة متكاملة من الخدمات الإبداعية والتسويقية المصممة خصيصاً لتحقيق أهدافك.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesShort.map((service, idx) => (
                <div 
                  key={idx}
                  className="group service-card bg-gradient-to-br from-white to-muzn-grey hover:from-white hover:to-muzn-green/5 flex flex-col items-start text-right transition-all duration-300 hover:-translate-y-3 hover:border-muzn-green hover:shadow-xl hover:shadow-muzn-green/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-muzn-navy to-[#1a3a5a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-muzn-navy/10 group-hover:shadow-muzn-green/20 transition-all duration-300">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 text-muzn-green" })}
                  </div>
                  <h4 className="text-[19px] font-bold text-muzn-navy mb-4">{service.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-[13px]">
                    {service.desc}
                  </p>
                </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="font-bold text-muzn-green hover:underline flex items-center justify-center gap-2">
              شاهد جميع خدماتنا
              <span className="text-xl">←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muzn-grey">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 text-right">
                 <h2 className="text-sm font-bold text-muzn-green uppercase tracking-widest mb-3">قيمنا</h2>
                 <h3 className="text-4xl md:text-5xl font-black text-muzn-navy mb-8">لماذا تختار مُزن؟</h3>
                 <p className="text-gray-500 mb-12 leading-relaxed text-lg">
                    تشكلت في عام 2025 تحمل معها مجموعة من الحلول التسويقية والإعلامية التي تحقق الأثر المستدام للمنتجات والمبادرات وتعزز مفهوم الإبداع في الحملات التسويقية والاتصالية والظهور المميز.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {values.map((v, idx) => (
                      <div key={idx} className="flex flex-col gap-2 p-5 bg-gradient-to-br from-white to-muzn-grey rounded-xl shadow-sm border border-gray-100 hover:border-muzn-green/30 transition-all hover:shadow-md group">
                         <div className="flex items-center gap-3">
                            <div className="shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-gradient-to-br group-hover:from-muzn-navy group-hover:to-[#1a3a5a] group-hover:text-muzn-green transition-all">{v.icon}</div>
                            <span className="font-bold text-muzn-navy">{v.name}</span>
                         </div>
                         <p className="text-xs text-gray-500 mr-13">{v.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
             <div className="lg:w-1/2 relative mt-16 lg:mt-0">
                <div className="relative aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl group">
                   <img 
                     src="/regenerated_image_1777383563093.png" 
                     alt="فريق مزن الإحترافي" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     referrerPolicy="no-referrer" 
                     loading="lazy"
                   />
                   <div className="absolute inset-0 bg-muzn-navy/10 group-hover:bg-muzn-navy/0 transition-all duration-500" />
                </div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-[138px] h-[138px] bg-muzn-green rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-white p-[15px] shadow-xl rotate-6 z-10">
                   <div className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2">+8</div>
                   <div className="text-[10px] sm:text-xs font-bold text-center opacity-80 leading-tight">سنوات من الخبرة الموثوقة</div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Initiative Section (Muzn × Shift) */}
      <section id="initiative" className="py-24 bg-white overflow-hidden text-right">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-muzn-navy via-[#1a3a5a] to-muzn-navy rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muzn-green/5 to-transparent" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-muzn-green/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-muzn-green/10 rounded-full blur-[80px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 text-center">
                <div className="p-8 rounded-3xl inline-block">
                   <img 
                    src="/regenerated_image_1777383565144.png" 
                    alt="جرّب تفشل - مبادرة مزن" 
                    className="w-64 h-64 object-cover rounded-3xl mx-auto transition-transform hover:scale-105 duration-500 shadow-2xl border-4 border-white/10"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="inline-block px-4 py-1 bg-muzn-green text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">مبادرة Muzn × Shift</div>
                  <h3 className="text-[28px] sm:text-[31px] font-black text-white mb-6 text-center lg:text-right font-serif">مبادرة "جرّب تفشل"</h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-center lg:text-right">
                    تهدف لتغيير فكرة الخوف من الفشل. المبادرة توفر ورش عمل، وتوجيه مباشر، وتطبيق عملي لمساعدة المشارك على فهم نفسه، والبدء بخطوة، وتحويل فكرته لتجربة حقيقية.
                  </p>
                  <blockquote className="border-r-4 border-muzn-green pr-6 py-2 mb-8 text-right">
                    <p className="text-xl sm:text-2xl font-bold text-white italic">"لأن الحقيقة البسيطة: اللي بيجرب هو بس اللي بيوصل."</p>
                  </blockquote>
                  <div className="text-center lg:text-right">
                    <Link to="/contact" className="btn-primary inline-block">سجل اهتمامك الآن</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
