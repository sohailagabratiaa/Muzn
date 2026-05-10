import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, 
  Lightbulb, 
  Target, 
  Cpu, 
  Camera, 
  BarChart3,
  Layers,
  Search,
  PenTool,
  Globe
} from 'lucide-react';

const allServices = [
  { 
    title: "حلول مبنية على المؤثرين", 
    desc: "ترشيح المؤثرين وبناء محتوى وحملات تصنع أثر ونتائج قابلة للقياس نساعدك في الوصول لجمهورك المستهدف من خلال الشخصيات الأكثر تأثيراً.",
    icon: <Users className="w-10 h-10 text-muzn-green" />
  },
  { 
    title: "حلول مبنية على التجارب", 
    desc: "تصميم تجربة تلامس الجمهور (فعالية، إطلاق، مشاركة في فعالية) تصنع أثر يشعر به العميل ونحرص على بناء ذكرى تدوم طويلاً.",
    icon: <Lightbulb className="w-10 h-10 text-muzn-green" />
  },
  { 
    title: "حلول مبنية على التخطيط", 
    desc: "تصميم استراتيجيات واضحة تُبنى عليها القرارات وتقاس من خلالها النتائج نوفر لك خارطة طريق للنجاح والنمو المستدام.",
    icon: <Target className="w-10 h-10 text-muzn-green" />
  },
  { 
    title: "حلول مبنية على التقنية", 
    desc: "تطوير حلول رقمية تدعم النمو، وتحسن التجربة، وتعزز الأثر التسويقي باستخدام أحدث الأدوات التقنية والذكاء الاصطناعي.",
    icon: <Cpu className="w-10 h-10 text-muzn-green" />
  },
  { 
    title: "حلول مبنية على الإنتاج", 
    desc: "إنتاج محتوى بصري عالي الجودة يجسد الهوية ويصنع أثراً مستداماً من خلال التصوير، المونتاج، والإنتاج الفني المبدع.",
    icon: <Camera className="w-10 h-10 text-muzn-green" />
  },
  { 
    title: "حلول مبنية على التحليل والقياس", 
    desc: "تحليل الأداء ونقيس النتائج بدقة، ونحوّل البيانات إلى رؤى تساعد على تحسين القرارات وتعظيم العائد على الاستثمار.",
    icon: <BarChart3 className="w-10 h-10 text-muzn-green" />
  },
  {
    title: "إدارة العلامات التجارية",
    desc: "بناء وتطوير شخصية العلامة التجارية لضمان تميزها في السوق وبناء ولاء حقيقي مع العملاء.",
    icon: <Layers className="w-10 h-10 text-muzn-green" />
  },
  {
    title: "تحسين محركات البحث SEO",
    desc: "نضمن ظهور مشروعك في الصفحات الأولى لنتائج البحث لزيادة الوصول الطبيعي والثقة.",
    icon: <Search className="w-10 h-10 text-muzn-green" />
  },
  {
    title: "كتابة المحتوى الإبداعي",
    desc: "صياغة رسائل تسويقية جذابة تخاطب العقل والعاطفة وتحقق أهدافك الاتصالية بذكاء.",
    icon: <PenTool className="w-10 h-10 text-muzn-green" />
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-right">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-muzn-green uppercase tracking-[0.3em] mb-4"
          >
            خِدْمَاتُنَا الشَّامِلَة
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-muzn-navy mb-8"
          >
            نبتكر الحلول لنصنع <span className="text-muzn-green">الأثر</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            في مُزن، لا نقدم مجرد خدمات تقليدية، بل نصمم حلولاً استراتيجية متكاملة تهدف إلى تعزيز هويتك وتحقيق نتائج ملموسة في عالم التسويق والعلاقات العامة.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-muzn-grey to-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-muzn-green/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
              
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-gray-200 group-hover:bg-gradient-to-br group-hover:from-muzn-navy group-hover:to-[#1a3a5a] group-hover:text-muzn-green transition-all duration-500 transform group-hover:scale-110">
                 {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-muzn-navy mb-6 group-hover:text-muzn-green transition-colors">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg mb-8">
                {service.desc}
              </p>
              
              <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-muzn-navy font-bold group-hover:gap-4 transition-all">
                 <span className="text-sm">اكتشف المزيد</span>
                 <span className="text-muzn-green">←</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-32 bg-muzn-navy rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muzn-green/10 to-transparent" />
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">هل تبحث عن حل تسويقي مخصص؟</h2>
              <p className="text-gray-300 text-xl mb-12 leading-relaxed">
                دعنا نجلس معاً ونناقش احتياجات عملك لنصمم لك استراتيجية تحقق أهدافك وتتجاوز توقعاتك.
              </p>
              <Link to="/contact" className="btn-primary px-12 py-5 text-xl inline-block">تواصل معنا الآن</Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
