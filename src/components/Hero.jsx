import { Monitor, Target, Heart, Send, ChevronDown, Sparkles } from 'lucide-react';

function Hero({ scrollToRegistration }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold-500/10 to-navy-500/10 rounded-full blur-3xl"></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/30 rounded-full animate-float"
            style={{
              top: `${(i * 37 + 5) % 100}%`,
              left: `${(i * 53 + 10) % 100}%`,
              animationDelay: `${(i * 0.3) % 3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 backdrop-blur-sm rounded-full border border-navy-600/50 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm">بالتعاون مع وزارة الشباب والرياضة</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-l from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">WEB MAX ACADEMY</span>
            <span className="inline-block mr-4">💻</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            🚀 نُعلّم، ننمّي، نبني أجيالًا قادرة على مواكبة التطور الرقمي الكبير ورؤية مصر الرقمية 2030
          </p>

          <div className="flex flex-col gap-4 items-center mb-12">
            <div className="flex items-center gap-3 text-gray-300 text-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Target className="w-5 h-5 text-gold-400" />
              <span>🎯 تعليم عملي حديث يواكب المستقبل ويصنع مهارات حقيقية لسوق العمل</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Heart className="w-5 h-5 text-gold-400" />
              <span>🤝 بالتعاون مع وزارة الشباب والرياضة</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={scrollToRegistration}
              className="group px-10 py-4 bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 text-xl font-bold rounded-2xl hover:shadow-2xl hover:shadow-gold-500/40 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              سجل الآن
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#courses"
              className="px-10 py-4 bg-transparent border-2 border-gold-400/50 text-gold-400 text-xl font-bold rounded-2xl hover:bg-gold-400/10 transition-all flex items-center justify-center gap-3"
            >
              استكشف الكورسات
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-gold-400/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
