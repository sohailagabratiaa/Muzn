import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X as CloseIcon } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const content = {
    privacy: {
      title: 'سياسة الخصوصية',
      sections: [
        {
          heading: 'مقدمة',
          text: 'نحن في مُزن نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية المعلومات التي تقدمها لنا.'
        },
        {
          heading: 'المعلومات التي نجمعها',
          text: 'نقوم بجمع المعلومات التي تقدمها لنا طواعية عند التواصل معنا، مثل الاسم والبريد الإلكتروني وتفاصيل المشروع، لغرض تقديم خدماتنا وتحسين تجربة المستخدم.'
        },
        {
          heading: 'كيفية استخدام المعلومات',
          text: 'نستخدم معلوماتك لتقديم الخدمات التسويقية، والرد على استفساراتك، وإرسال تحديثات حول خدماتنا (إذا كنت قد وافقت على ذلك)، ولأغراض التحليلات الداخلية.'
        },
        {
          heading: 'أمن البيانات',
          text: 'نتخذ تدابير أمنية تقنية وإدارية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف.'
        },
        {
          heading: 'ملفات تعريف الارتباط (Cookies)',
          text: 'قد نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك ضبط متصفحك لرفض جميع ملفات تعريف الارتباط أو لتنبيهك عند إرسال ملف تعريف ارتباط.'
        },
        {
          heading: 'تحديثات السياسة',
          text: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ المراجعة.'
        }
      ]
    },
    terms: {
      title: 'الشروط والأحكام',
      sections: [
        {
          heading: 'الموافقة على الشروط',
          text: 'باستخدامك لموقع مُزن، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، فيجب عليك عدم استخدام الموقع.'
        },
        {
          heading: 'الخدمات',
          text: 'تُقدم مُزن مجموعة من الحلول التسويقية والإعلامية. نحن نحتفظ بالحق في تعديل أو تعليق أو إيقاف أي جزء من الخدمة في أي وقت.'
        },
        {
          heading: 'الملكية الفكرية',
          text: 'جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملك لمُزن ومحمية بموجب قوانين الملكية الفكرية.'
        },
        {
          heading: 'مسؤولية المستخدم',
          text: 'أنت مسؤول عن ضمان دقة المعلومات التي تقدمها لنا وعن الحفاظ على سرية أي حسابات أو بيانات وصول خاصة بك.'
        },
        {
          heading: 'إخلاء المسؤولية',
          text: 'يتم تقديم خدماتنا "كما هي" دون أي ضمانات صريحة أو ضمنية. نحن لا نضمن أن الخدمة ستكون خالية من الأخطاء أو الانقطاعات.'
        },
        {
          heading: 'القانون الواجب التطبيق',
          text: 'تخضع هذه الشروط والأحكام وتُفسر وفقاً للقوانين والأنظمة السارية في المواقع التي نقدم فيها خدماتنا.'
        }
      ]
    }
  };

  if (!type) return null;

  const activeContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-muzn-navy/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-muzn-grey">
              <h3 className="text-2xl font-black text-muzn-navy">{activeContent.title}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white rounded-full transition-colors text-muzn-navy"
              >
                <CloseIcon size={24} />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto text-right" dir="rtl">
              <div className="space-y-8">
                {activeContent.sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-bold text-muzn-navy mb-3 flex items-center gap-2">
                       <span className="w-2 h-2 bg-muzn-green rounded-full"></span>
                       {section.heading}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                 <p className="text-sm text-gray-400">آخر تحديث: أبريل 2026</p>
              </div>
            </div>
            
            <div className="p-6 bg-muzn-grey flex justify-center">
               <button 
                onClick={onClose}
                className="btn-primary"
               >
                 إغلاق
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
