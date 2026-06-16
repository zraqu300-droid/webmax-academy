import { BookOpen, CheckCircle, Lightbulb } from 'lucide-react';

function About() {
  const specializations = [
    '💻 البرمجة (Programming)',
    '🤖 الذكاء الاصطناعي (AI)',
    '🖥️ المهارات الرقمية (ICDL)',
    '📊 دبلومة المحاسب المالى المحترف PFA',
    'دبلومة إدارة الأعمال',
    'دورة الموارد البشرية HR',
    '🇬🇧 اللغات الأجنبية (English – German – Italian – Spanish)'
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 rounded-full border border-navy-600/50 mb-6">
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm">من نحن</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🧠 <span className="bg-gradient-to-l from-white to-gold-200 bg-clip-text text-transparent">نبذة عن الأكاديمية</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-navy-800/30 backdrop-blur-sm rounded-3xl p-8 border border-navy-700/50 hover:border-gold-500/30 transition-all group">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  WEB MAX ACADEMY هي أكاديمية متخصصة في تعليم وتدريب:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {specializations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-navy-900/50 rounded-xl hover:bg-navy-900/70 transition-colors">
                      <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500/20 to-navy-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gold-500/20 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Lightbulb className="w-10 h-10 text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">منهجيتنا في التعليم</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  📌 تدريب عملي قائم على المشاريع الحقيقية وليس الحفظ النظري، باقوى الشاشات التفاعلية المرئية والسمعية والعملية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
