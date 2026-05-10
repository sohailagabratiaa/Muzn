import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Palette, 
  Video, 
  Stethoscope, 
  CheckCircle2, 
  ArrowLeft,
  Users,
  MessageCircle,
  ShoppingBag,
  Code2,
  Camera,
  Star
} from 'lucide-react';

const CaseStudyCard = ({ title, description, items, icon: Icon, colorClass = "muzn-green" }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-[3rem] p-10 shadow-xl shadow-gray-100 border border-gray-50 hover:shadow-2xl transition-all duration-500 text-right h-full flex flex-col"
  >
    <div className={`w-16 h-16 rounded-2xl bg-muzn-green/10 flex items-center justify-center mb-8`}>
      <Icon className="text-muzn-green" size={32} />
    </div>
    <h3 className="text-2xl font-black text-muzn-navy mb-6">{title}</h3>
    <p className="text-gray-500 mb-8 leading-relaxed font-medium">
      {description}
    </p>
    <div className="space-y-4 mt-auto">
      {items.map((item: string, idx: number) => (
        <div key={idx} className="flex items-start gap-3 justify-start text-right">
          <CheckCircle2 size={18} className="text-muzn-green mt-1 shrink-0" />
          <span className="text-sm font-bold text-muzn-navy/80">{item}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Portfolio: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-muzn-grey min-h-screen text-right font-sans">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muzn-green/10 border border-muzn-green/20 text-muzn-green font-bold text-sm mb-8"
          >
            <Star size={16} />
            بَصْمَتُنَا فِي السُّوق
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px] sm:text-[48px] leading-[51px] font-[Georgia] font-black text-muzn-navy mb-8 max-w-[355px] mx-auto text-center"
          >
            أعمالنا: <span className="text-muzn-green">أرقام</span> و <span className="text-muzn-green">أثر</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium"
          >
            في "مُزن"، نحن لا نعرض لك مجرد "صور جميلة"؛ بل نعرض لك قصص نجاح ونتائج ملموسة على أرض الواقع. نحن نفخر بأن نكون شركاء النمو لكل علامة تجارية وثقت بنا.
          </motion.p>
        </div>

        {/* Featured Case Study: Agriculture */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-muzn-navy/10 flex-grow" />
            <h2 className="text-3xl font-black text-muzn-navy flex items-center gap-3">
              <TrendingUp className="text-muzn-green" />
              1. الإطلاق الرقمي المتكامل وإدارة المبيعات
            </h2>
            <div className="h-px bg-muzn-navy/10 flex-grow" />
          </div>

          <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl shadow-gray-100 border border-gray-50 text-right">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-16 order-2 lg:order-1">
                <div className="mb-10">
                  <span className="text-muzn-green font-bold text-sm tracking-widest uppercase mb-4 block">دراسة حالة</span>
                  <h3 className="text-4xl font-black text-muzn-navy mb-6 text-right">شركة الزراعة (إطلاق دورة الموالح)</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    تولينا إدارة هذا المشروع من الصفر وحتى إغلاق المبيعات، وصنعنا رحلة عميل متكاملة حققت نتائج استثنائية في وقت قياسي.
                  </p>
                </div>

                <div className="grid gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-muzn-navy flex items-center gap-2 justify-start">
                      <TrendingUp size={24} className="text-muzn-green" />
                      التسويق والأرقام
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-muzn-grey p-6 rounded-3xl border border-gray-100">
                        <div className="text-3xl font-black text-muzn-green mb-1">+900</div>
                        <div className="text-sm font-bold text-gray-500">متابع مهتم جديد</div>
                      </div>
                      <div className="bg-muzn-grey p-6 rounded-3xl border border-gray-100">
                        <div className="text-3xl font-black text-muzn-green mb-1">140</div>
                        <div className="text-sm font-bold text-gray-500">رسالة استفسار</div>
                      </div>
                      <div className="bg-muzn-grey p-6 rounded-3xl border border-gray-100">
                        <div className="text-3xl font-black text-muzn-green mb-1">6</div>
                        <div className="text-sm font-bold text-gray-500">مبيعات في أول 4 أيام</div>
                      </div>
                      <div className="bg-muzn-grey p-6 rounded-3xl border border-gray-100">
                        <div className="text-3xl font-black text-muzn-green mb-1">30</div>
                        <div className="text-sm font-bold text-gray-500">متدرب مشترك</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-muzn-navy flex items-center gap-2 justify-start">
                      <Code2 size={24} className="text-muzn-green" />
                      التطوير التقني والمحتوى
                    </h4>
                    <div className="space-y-4">
                      {['تصميم وتطوير صفحة هبوط (Landing Page) مخصصة للبيع.', 'تأسيس منصة تعليمية متكاملة لرفع الكورسات.', 'تصوير ومونتاج فيديوهات الدورة، وتجهيز المادة العلمية.'].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 justify-start">
                          <CheckCircle2 size={18} className="text-muzn-green mt-1 shrink-0" />
                          <span className="font-bold text-muzn-navy/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-muzn-navy flex items-center gap-2 justify-start">
                      <Users size={24} className="text-muzn-green" />
                      خدمة العملاء والمتابعة (Call Center)
                    </h4>
                    <ul className="space-y-3 text-gray-500 font-medium list-disc list-inside pr-2 text-right">
                      <li>إدارة كاملة للردود والتواصل الهاتفي مع العملاء.</li>
                      <li>تصميم سلسلة رسائل متابعة ذكية لتصنيف العملاء.</li>
                      <li>تأسيس وإدارة "جروب" خاص لمتابعة المتدربين لضمان الجودة.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-muzn-navy relative min-h-[400px] flex items-center justify-center p-12 overflow-hidden order-1 lg:order-2">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <div className="w-full max-w-[400px] aspect-square bg-gradient-to-br from-muzn-green/20 to-transparent rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl p-8 sm:p-12">
                    <img 
                      src="/regenerated_image_1777383756794.png" 
                      alt="Growth Analytics and Strategy" 
                      className="w-full h-full object-contain rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections 2 & 3: Branding and Visuals */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <section className="space-y-12">
            <h2 className="text-3xl font-black text-muzn-navy flex items-center gap-3">
              <Palette className="text-muzn-green" />
              2. بناء الهوية البصرية وسرد القصص
            </h2>
            <div className="grid gap-8">
              <CaseStudyCard 
                title="S.K CARE - العناية بالبشرة"
                description="بناء هوية تجارية وبصرية كاملة لمنتجات التجميل."
                items={['ابتكار الشعار (اللوجو)', 'تصميم عبوات المنتجات باحترافية', 'تصميمات السوشيال ميديا والحملات']}
                icon={ShoppingBag}
              />
              <CaseStudyCard 
                title="سباركل (Sparkle) - الأدوات المكتبية"
                description="خلق هوية بصرية مبهجة تناسب روح البراند والمطبوعات."
                items={['تصميم الصندوق الخارجي', 'تصميم التغليف والعبوات', 'كوبونات الخصم والكارنيهات']}
                icon={Palette}
              />
              <CaseStudyCard 
                title="Manmona"
                description="إعادة إحياء البراند (Rebranding) وربطه عاطفياً بالجمهور."
                items={['تصميم لوجو جديد', 'صياغة "قصة البراند"', 'إدارة محتوى السوشيال ميديا بالكامل']}
                icon={Star}
              />
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-black text-muzn-navy flex items-center gap-3">
              <Video className="text-muzn-green" />
              3. الإنتاج المرئي وإدارة المطاعم
            </h2>
            <div className="grid gap-8">
              <CaseStudyCard 
                title="مطعم بافانا (Bavana)"
                description="تولينا الإدارة الشاملة للسوشيال ميديا والإنتاج المرئي."
                items={['تنفيذ جلسات تصوير احترافية', 'أعمال المونتاج الإبداعية', 'إنتاج فيديوهات إعلانية جذابة', 'تحقيق مبيعات فعلية ومباشرة']}
                icon={Camera}
              />
              <div className="bg-muzn-navy rounded-[3rem] p-12 text-white h-full flex flex-col justify-center border border-white/5 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-muzn-green/10 blur-3xl" />
                 <h3 className="text-3xl font-black mb-6 italic leading-relaxed text-right">"البراند ليس مجرد شعار، إنه الشعور الذي تتركه لدى عميلك"</h3>
                 <p className="text-muzn-green font-bold text-lg text-left">— فريق مُزن للإبداع</p>
              </div>
            </div>
          </section>
        </div>

        {/* Section 4: Medical & Food */}
        <section className="mb-32">
          <h2 className="text-3xl font-black text-muzn-navy flex items-center justify-center gap-3 mb-16">
            <Stethoscope className="text-muzn-green" />
            4. التسويق في القطاع الطبي والغذائي
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 hover:border-muzn-green/20 transition-all shadow-xl shadow-gray-100/50">
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                 <Stethoscope className="text-blue-500" size={32} />
               </div>
               <h3 className="text-xl font-black text-muzn-navy mb-4">معمل الأزهر ودكتور الجرّاح</h3>
               <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">تأسيس وإدارة الحضور الرقمي (Instagram) مع التركيز على المصداقية والجاذبية.</p>
               <ul className="space-y-3">
                  {['تصوير ومونتاج فيديوهات طبية', 'تنفيذ 15 تصميماً احترافياً متنوعاً', 'تعزيز وعي وثقة المرضى'].map((item, id) => (
                    <li key={id} className="flex items-center gap-2 text-xs font-bold text-muzn-navy/70">
                      <CheckCircle2 size={14} className="text-muzn-green shrink-0" />
                      {item}
                    </li>
                  ))}
               </ul>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 hover:border-muzn-green/20 transition-all shadow-xl shadow-gray-100/50">
               <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                 <ShoppingBag className="text-orange-500" size={32} />
               </div>
               <h3 className="text-xl font-black text-muzn-navy mb-4">رحاب جروب للتغذية</h3>
               <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">دعم الحملات التوعوية والبيعية من خلال محتوى جرافيكي مخصص.</p>
               <ul className="space-y-3">
                  {['تنفيذ 25 تصميماً جرافيكياً مخصصاً', 'إدارة حملات توعوية مكثفة', 'دعم الهوية الرقمية للمجموعة'].map((item, id) => (
                    <li key={id} className="flex items-center gap-2 text-xs font-bold text-muzn-navy/70">
                      <CheckCircle2 size={14} className="text-muzn-green shrink-0" />
                      {item}
                    </li>
                  ))}
               </ul>
            </div>

            <div className="bg-muzn-navy rounded-[3rem] p-10 text-white flex flex-col items-center justify-center text-center border border-white/5">
               <div className="mb-6 bg-white/5 p-6 rounded-full">
                 <MessageCircle size={48} className="text-muzn-green" />
               </div>
               <h3 className="text-2xl font-black mb-4">السرعة، الجاذبية، والمصداقية</h3>
               <p className="text-gray-400 font-medium">هي مفاتيح قطاع الصحة والغذاء التي نتقنها.</p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center bg-muzn-navy rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl shadow-muzn-navy/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-muzn-green/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">🤝 هل أنت مستعد لتكون "قصة النجاح" القادمة؟</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              دعنا نحول أهدافك إلى أرقام، وعلامتك التجارية إلى أيقونة لا تُنسى. ابدأ رحلتك مع مُزن اليوم.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-3 text-xl px-12 py-5 h-auto transition-all hover:scale-105 active:scale-95">
                ابدأ مشروعك الآن
                <ArrowLeft size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
