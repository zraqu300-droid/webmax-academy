import { Star, CheckCircle, Zap, Monitor, UserCheck, Briefcase, MessageCircle, Award, Shield } from 'lucide-react';

const features = [
  { icon: Zap, text: 'تدريب عملي 90%' },
  { icon: Monitor, text: 'جهاز لكل متدرب' },
  { icon: UserCheck, text: 'مدربين متخصصين' },
  { icon: Briefcase, text: 'مشاريع حقيقية' },
  { icon: MessageCircle, text: 'متابعة مستمرة' },
  { icon: Award, text: 'شهادات معتمدة وموثقة' },
  { icon: Shield, text: 'بالتعاون مع وزارة الشباب والرياضة' }
];

function WhyUs() {
  return (
    <section className="py-24 relative bg-navy-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 rounded-full border border-navy-600/50 mb-6">
              <Star className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm">مميزاتنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              ⭐ <span className="bg-gradient-to-l from-white to-gold-200 bg-clip-text text-transparent">لماذا WEB MAX ACADEMY؟</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-navy-800/40 backdrop-blur-sm rounded-2xl p-6 border border-navy-700/50 hover:border-gold-500/50 hover:bg-navy-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center mb-4 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-gold-400 group-hover:text-navy-900 transition-colors" />
                </div>
                <p className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-400" />
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
