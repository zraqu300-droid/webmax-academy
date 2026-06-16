import { Lightbulb, Award, CheckCircle, Star } from 'lucide-react';

const educationalFeatures = [
  'تعلم عملي مش نظري',
  'مشاريع لكل متدرب',
  'متابعة مستمرة',
  'تأهيل لسوق العمل',
  'شهادات معتمدة',
  'شهادات خبرة موثقة ومعتمدة'
];

const certificates = [
  'شهادة WEB MAX ACADEMY',
  'شهادات معتمدة وموثقة',
  'بالتعاون مع وزارة الشباب والرياضة',
  'شهادات خبرة عملية معتمده وموثقة'
];

function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 rounded-full border border-navy-600/50 mb-6">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm">شهاداتنا ومميزاتنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-l from-white to-gold-200 bg-clip-text text-transparent">المميزات والشهادات</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Educational Features */}
            <div className="bg-navy-800/30 backdrop-blur-sm rounded-3xl p-8 border border-navy-700/50 hover:border-gold-500/30 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">المميزات التعليمية</h3>
              </div>
              <div className="space-y-4">
                {educationalFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-navy-900/50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-gold-400" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-gradient-to-br from-gold-500/10 to-navy-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gold-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Award className="w-7 h-7 text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">🏆 الشهادات</h3>
              </div>
              <div className="space-y-4">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-navy-900/50 rounded-xl border border-gold-500/10">
                    <Star className="w-5 h-5 text-gold-400" />
                    <span className="text-gray-200 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
