import { Users, GraduationCap, Briefcase } from 'lucide-react';

const audience = [
  { icon: Users, emoji: '🧑', title: 'الاطفال والشباب' },
  { icon: GraduationCap, emoji: '👨‍💼', title: 'الطلبة والخريجين' },
  { icon: Briefcase, emoji: '💼', title: 'الموظفين وأصحاب الأعمال' }
];

function TargetAudience() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 rounded-full border border-navy-600/50 mb-6">
              <Users className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm">من نخدم</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              🎯 <span className="bg-gradient-to-l from-white to-gold-200 bg-clip-text text-transparent">الفئات المستهدفة</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audience.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-navy-800/30 backdrop-blur-sm rounded-3xl p-8 border border-navy-700/50 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6">{item.emoji}</div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-gold-400 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetAudience;
