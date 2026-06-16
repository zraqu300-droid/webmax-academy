import { useState, useEffect } from 'react';
import {
  Monitor,
  Brain,
  GraduationCap,
  Users,
  Globe,
  Award,
  CheckCircle,
  Target,
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  BookOpen,
  Briefcase,
  UserCheck,
  Clock,
  CreditCard,
  Star,
  Rocket,
  Lightbulb,
  Heart,
  Send,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  MessageCircle,
  Languages,
  Calculator,
  Building
} from 'lucide-react';

function App() {
  const [activeCourseTab, setActiveCourseTab] = useState('programming');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    educationLevel: '',
    guardianPhone: '',
    course: '',
    level: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      id: 'programming',
      icon: Monitor,
      emoji: '💻',
      title: 'كورس البرمجة (Programming)',
      duration: '6 شهور | 24 محاضرة | سيشن أسبوعيًا',
      price: '3000',
      content: ['اساسيات البرمجة', 'التفكير المنطقي', 'بناء مواقع', 'تطبيقات عملية', 'مشاريع حقيقية', 'مشروع تخرج'],
      results: ['فهم البرمجة', 'بناء مواقع', 'التفكير كمطور']
    },
    {
      id: 'ai',
      icon: Brain,
      emoji: '🤖',
      title: 'كورس الذكاء الاصطناعي (AI)',
      duration: '6 شهور | 24 محاضرة | سيشن أسبوعيًا',
      price: '3000',
      content: ['مقدمة AI', 'أدوات الذكاء الاصطناعي', 'تطبيقات عملية', 'مشاريع ذكية', 'تحليل بيانات'],
      results: ['استخدام AI', 'تنفيذ مشاريع ذكية']
    },
    {
      id: 'icdl',
      icon: Monitor,
      emoji: '🖥️',
      title: 'ICDL',
      duration: '3 شهور | 12 محاضرة | سيشن أسبوعيا (ساعتان)',
      price: '1500',
      content: ['Word', 'Excel', 'PowerPoint', 'Internet & Email'],
      results: []
    },
    {
      id: 'pfa',
      icon: Calculator,
      emoji: '📊',
      title: 'PFA المحاسبة المالية',
      duration: '4 شهور | 16 محاضرة',
      price: '2500',
      content: ['أساسيات محاسبة', 'قوائم مالية', 'تطبيق عملي (دفاتر يومية فعليه + تدريب على أنظمة البرامج المحاسبية ERP SYSTEM)'],
      results: []
    },
    {
      id: 'business',
      icon: Building,
      emoji: '👥',
      title: 'دبلومة إدارة الأعمال',
      duration: 'شهرين | 8 محاضرة | سيشن أسبوعيا ( ساعتين)',
      price: '1500',
      content: [],
      results: []
    },
    {
      id: 'hr',
      icon: Users,
      emoji: '👥',
      title: 'دورة إدارة الموارد البشرية HR',
      duration: 'شهرين | 8 محاضرات | سيشن أسبوعيا ( ساعتين)',
      price: '1500',
      content: [],
      results: []
    },
    {
      id: 'english',
      icon: Languages,
      emoji: '🇬🇧',
      title: 'اللغة الإنجليزية (English)',
      duration: '6 شهور - 6 مستويات – 24 محاضرة | سيشن أسبوعيا ( ساعتين)',
      price: '3000',
      levels: [
        { name: 'Level 1', desc: 'Beginner 1' },
        { name: 'Level 2', desc: 'Beginner 2' },
        { name: 'Level 3', desc: 'Elementary' },
        { name: 'Level 4', desc: 'Pre-Intermediate' },
        { name: 'Level 5', desc: 'Intermediate' },
        { name: 'Level 6', desc: 'Upper-Intermediate' }
      ],
      professional: {
        duration: '3 شهور 12 محاضرة | سيشن أسبوعيا (ساعتين)',
        price: '1500',
        track: ['Business English', 'Conversation Mastery', 'Interview Preparation']
      },
      content: [],
      results: []
    },
    {
      id: 'german',
      icon: Languages,
      emoji: '🇩🇪',
      title: 'اللغة الألمانية (German)',
      duration: '6 شهور - 6 مستويات – 24 محاضرة | سيشن أسبوعيا ( ساعتين)',
      price: '3000',
      levels: [
        { name: 'A1', desc: 'Beginner 1' },
        { name: 'A2', desc: 'Beginner 2' },
        { name: 'B1', desc: 'Elementary' },
        { name: 'B2', desc: 'Pre-Intermediate' },
        { name: 'C1', desc: 'Intermediate' },
        { name: 'C2', desc: 'Upper Advanced' }
      ],
      professional: {
        duration: '3 شهور - 12 محاضرة | سيشن أسبوعيا ( ساعتين)',
        price: '1500',
        track: ['Business German', 'Conversation', 'Interview Skills']
      },
      content: [],
      results: []
    },
    {
      id: 'italian',
      icon: Languages,
      emoji: '🇮🇹',
      title: 'اللغة الإيطالية (Italian)',
      duration: '6 شهور - 6 مستويات – 24 محاضرة | سيشن أسبوعيا ( ساعتين)',
      price: '3000',
      levels: [
        { name: 'Level 1', desc: 'Beginner' },
        { name: 'Level 2', desc: 'Beginner' },
        { name: 'Level 3', desc: 'Elementary' },
        { name: 'Level 4', desc: 'Pre-Intermediate' },
        { name: 'Level 5', desc: 'Intermediate' },
        { name: 'Level 6', desc: 'Advanced' }
      ],
      professional: {
        duration: '3 شهور - 12 محاضرة | سيشن أسبوعيا ( ساعتين )',
        price: '1500',
        track: ['Business Italian', 'Speaking Fluency', 'Job Interviews']
      },
      content: [],
      results: []
    },
    {
      id: 'spanish',
      icon: Languages,
      emoji: '🇪🇸',
      title: 'اللغة الإسبانية (Spanish)',
      duration: '6 شهور - 6 مستويات – 24 محاضرة | سيشن أسبوعيا ( ساعتين )',
      price: '3000',
      levels: [
        { name: 'Level 1', desc: 'Beginner' },
        { name: 'Level 2', desc: 'Beginner' },
        { name: 'Level 3', desc: 'Elementary' },
        { name: 'Level 4', desc: 'Pre-Intermediate' },
        { name: 'Level 5', desc: 'Intermediate' },
        { name: 'Level 6', desc: 'Advanced' }
      ],
      professional: {
        duration: '3 شهور - 12 محاضرة | سيشن أسبوعيا ( ساعتين )',
        price: '1500',
        track: ['Business Spanish', 'Conversation', 'Professional Communication']
      },
      content: [],
      results: []
    }
  ];

  const whyUsFeatures = [
    { icon: Zap, text: 'تدريب عملي 90%' },
    { icon: Monitor, text: 'جهاز لكل متدرب' },
    { icon: UserCheck, text: 'مدربين متخصصين' },
    { icon: Briefcase, text: 'مشاريع حقيقية' },
    { icon: MessageCircle, text: 'متابعة مستمرة' },
    { icon: Award, text: 'شهادات معتمدة وموثقة' },
    { icon: Shield, text: 'بالتعاون مع وزارة الشباب والرياضة' }
  ];

  const targetAudience = [
    { icon: Users, emoji: '🧑', title: 'الاطفال والشباب' },
    { icon: GraduationCap, emoji: '👨‍💼', title: 'الطلبة والخريجين' },
    { icon: Briefcase, emoji: '💼', title: 'الموظفين وأصحاب الأعمال' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      age: '',
      phone: '',
      address: '',
      educationLevel: '',
      guardianPhone: '',
      course: '',
      level: '',
      notes: ''
    });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-gold-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Monitor className="w-7 h-7 text-navy-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-l from-gold-300 to-gold-500 bg-clip-text text-transparent">WEB MAX ACADEMY</h1>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">نبذة عنا</a>
              <a href="#courses" className="text-gray-300 hover:text-gold-400 transition-colors">الكورسات</a>
              <a href="#features" className="text-gray-300 hover:text-gold-400 transition-colors">المميزات</a>
              <a href="#registration" className="text-gray-300 hover:text-gold-400 transition-colors">التسجيل</a>
              <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors">تواصل معنا</a>
            </div>

            <button
              onClick={scrollToRegistration}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all transform hover:scale-105"
            >
              سجل الآن
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-navy-700/50">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>نبذة عنا</a>
                <a href="#courses" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>الكورسات</a>
                <a href="#features" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>المميزات</a>
                <a href="#registration" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>التسجيل</a>
                <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>تواصل معنا</a>
                <button
                  onClick={() => { scrollToRegistration(); setIsMenuOpen(false); }}
                  className="px-6 py-2.5 bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 font-semibold rounded-xl"
                >
                  سجل الآن
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold-500/10 to-navy-500/10 rounded-full blur-3xl"></div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold-400/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
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

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-gold-400/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                    {[
                      '💻 البرمجة (Programming)',
                      '🤖 الذكاء الاصطناعي (AI)',
                      '🖥️ المهارات الرقمية (ICDL)',
                      '📊 دبلومة المحاسب المالى المحترف PFA',
                      'دبلومة إدارة الأعمال',
                      'دورة الموارد البشرية HR',
                      '🇬🇧 اللغات الأجنبية (English – German – Italian – Spanish)'
                    ].map((item, idx) => (
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

      {/* Why Us Section */}
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
              {whyUsFeatures.map((feature, idx) => (
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

      {/* Target Audience Section */}
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
              {targetAudience.map((item, idx) => (
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

      {/* Courses Section */}
      <section id="courses" className="py-24 relative bg-navy-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 rounded-full border border-navy-600/50 mb-6">
                <GraduationCap className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm">برامجنا التعليمية</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-l from-white to-gold-200 bg-clip-text text-transparent">الكورسات والدبلومات</span>
              </h2>
              <p className="text-xl text-gray-400">اختر الكورس المناسب لأهدافك المهنية</p>
            </div>

            {/* Course Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {courses.map(course => (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseTab(course.id)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCourseTab === course.id
                      ? 'bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 shadow-lg shadow-gold-500/30'
                      : 'bg-navy-800/50 text-gray-300 hover:bg-navy-700/50 hover:text-white border border-navy-700/50'
                  }`}
                >
                  <span className="text-lg">{course.emoji}</span>
                  <span className="hidden sm:inline">{course.title.split('(')[0].trim()}</span>
                </button>
              ))}
            </div>

            {/* Course Details */}
            {courses.map(course => (
              <div
                key={course.id}
                className={`${activeCourseTab === course.id ? 'block' : 'hidden'}`}
              >
                <div className="bg-navy-800/40 backdrop-blur-sm rounded-3xl border border-navy-700/50 overflow-hidden">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-3xl">
                            {course.emoji}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{course.title}</h3>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-navy-700/50 rounded-lg">
                              <Clock className="w-5 h-5 text-gold-400" />
                              <span className="text-gray-300">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-gold-500/20 rounded-lg">
                              <CreditCard className="w-5 h-5 text-gold-400" />
                              <span className="text-gold-300 font-bold">{course.price} جنيه</span>
                            </div>
                          </div>

                          {course.content.length > 0 && (
                            <div className="bg-navy-900/50 rounded-2xl p-6">
                              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-gold-400" />
                                المحتوى:
                              </h4>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {course.content.map((item, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {course.results.length > 0 && (
                            <div className="bg-gradient-to-br from-gold-500/10 to-transparent rounded-2xl p-6">
                              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-gold-400" />
                                النتائج المتوقعة:
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {course.results.map((item, idx) => (
                                  <span key={idx} className="px-4 py-2 bg-navy-800/50 rounded-lg text-gray-300 border border-gold-500/20">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {course.levels && (
                            <div className="bg-navy-900/50 rounded-2xl p-6">
                              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-gold-400" />
                                المستويات:
                              </h4>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {course.levels.map((level, idx) => (
                                  <div key={idx} className="p-4 bg-navy-800/50 rounded-xl border border-navy-700/50 hover:border-gold-500/30 transition-colors">
                                    <div className="font-bold text-gold-400">{level.name}</div>
                                    <div className="text-gray-400 text-sm">{level.desc}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {course.professional && (
                            <div className="bg-gradient-to-br from-gold-500/20 to-navy-900/50 rounded-2xl p-6 border border-gold-500/20">
                              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Star className="w-5 h-5 text-gold-400" />
                                المستوى الإحترافى:
                              </h4>
                              <div className="flex flex-wrap items-center gap-4 mb-4">
                                <div className="flex items-center gap-2 text-gray-300">
                                  <Clock className="w-4 h-4 text-gold-400" />
                                  <span>{course.professional.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gold-300 font-bold">
                                  <CreditCard className="w-4 h-4 text-gold-400" />
                                  <span>{course.professional.price} جنيه</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {course.professional.track.map((item, idx) => (
                                  <span key={idx} className="px-3 py-1.5 bg-navy-800/50 rounded-lg text-gray-300 text-sm border border-gold-500/20">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-navy-700/50">
                      <button
                        onClick={scrollToRegistration}
                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 text-lg font-bold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all flex items-center justify-center gap-3"
                      >
                        سجل الآن في هذا الكورس
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Certificates Section */}
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
                  {[
                    'تعلم عملي مش نظري',
                    'مشاريع لكل متدرب',
                    'متابعة مستمرة',
                    'تأهيل لسوق العمل',
                    'شهادات معتمدة',
                    'شهادات خبرة موثقة ومعتمدة'
                  ].map((feature, idx) => (
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
                  {[
                    'شهادة WEB MAX ACADEMY',
                    'شهادات معتمدة وموثقة',
                    'بالتعاون مع وزارة الشباب والرياضة',
                    'شهادات خبرة عملية معتمده وموثقة'
                  ].map((cert, idx) => (
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

      {/* Payment System Section */}
      <section className="py-24 relative bg-navy-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 rounded-full border border-navy-600/50 mb-6">
                <CreditCard className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm">نظام الدفع</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                💰 <span className="bg-gradient-to-l from-white to-gold-200 bg-clip-text text-transparent">نظام الحجز والدفع</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gold-500/10 via-navy-800/40 to-navy-800/40 backdrop-blur-sm rounded-3xl p-10 border border-gold-500/20">
              <div className="space-y-6">
                {[
                  { icon: CreditCard, text: 'تقسيط مبلغ الكورس على دفعات متعددة' },
                  { icon: Users, text: 'خصومات على الاخوات والأصدقاء' },
                  { icon: Sparkles, text: 'عروض الباقات فى حالة اشتراك فأكثر من كورس معا' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-navy-900/50 rounded-2xl hover:bg-navy-900/70 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                      <span className="text-xl text-white">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 rounded-full border border-navy-600/50 mb-6">
                <Send className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm">انضم إلينا</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-l from-white to-gold-200 bg-clip-text text-transparent">استمارة التسجيل</span>
              </h2>
              <p className="text-xl text-gray-400">ابدأ رحلتك التعليمية معنا الآن</p>
            </div>

            <div className="bg-navy-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-navy-700/50">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">تم إرسال طلبك بنجاح!</h3>
                  <p className="text-gray-400">سنتواصل معك قريباً لإتمام عملية التسجيل</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">الاسم *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">السن *</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="أدخل عمرك"
                        required
                        className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">الهاتف *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="أدخل رقم الهاتف"
                        required
                        className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">العنوان *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="أدخل عنوانك"
                        required
                        className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">المستوى التعليمي *</label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="">اختر المستوى التعليمي</option>
                      <option value="primary">ابتدائي</option>
                      <option value="preparatory">إعدادي</option>
                      <option value="secondary">ثانوي</option>
                      <option value="university">جامعي</option>
                      <option value="graduate">خريج</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">رقم ولي الأمر (للأطفال)</label>
                    <input
                      type="tel"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleInputChange}
                      placeholder="أدخل رقم ولي الأمر (إذا كان المتدرب طفلاً)"
                      className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">اختيار الكورس *</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="">اختر الكورس</option>
                        <option value="programming">💻 كورس البرمجة</option>
                        <option value="ai">🤖 كورس الذكاء الاصطناعي</option>
                        <option value="icdl">🖥️ ICDL</option>
                        <option value="pfa">📊 PFA المحاسبة المالية</option>
                        <option value="business">👥 دبلومة إدارة الأعمال</option>
                        <option value="hr">👥 دورة إدارة الموارد البشرية HR</option>
                        <option value="english">🇬🇧 اللغة الإنجليزية</option>
                        <option value="german">🇩🇪 اللغة الألمانية</option>
                        <option value="italian">🇮🇹 اللغة الإيطالية</option>
                        <option value="spanish">🇪🇸 اللغة الإسبانية</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">المستوى</label>
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        <option value="">اختر المستوى</option>
                        <option value="beginner">مبتدئ</option>
                        <option value="elementary">أساسي</option>
                        <option value="intermediate">متوسط</option>
                        <option value="advanced">متقدم</option>
                        <option value="professional">احترافي</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">ملاحظات</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="أي ملاحظات أو استفسارات إضافية"
                      className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-gold-500/40 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        إرسال الطلب
                        <Send className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="py-24 relative bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Vision Statement */}
            <div className="text-center mb-16 py-12 bg-gradient-to-br from-gold-500/10 via-navy-900/50 to-navy-900/50 rounded-3xl border border-gold-500/20">
              <div className="text-6xl mb-6">🌟</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-l from-gold-300 to-gold-500 bg-clip-text text-transparent">WEB MAX ACADEMY</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                🚀 "نصنع جيلاً قادراً على الإبداع والتطوير ومواكبة تكنولوجيا المستقبل"
              </p>
              <p className="text-lg text-gray-400 mt-4">
                ايمانا منا برؤية مصر الرقمية 2030، وبتوجيهات سيادة الرئيس بضرورة وسرعة التحول الرقمى والتكنولوجي.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Management Contact */}
              <div className="bg-navy-900/50 rounded-2xl p-6 border border-navy-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">إدارة الأكاديمية</h3>
                </div>
                <a href="tel:01279180008" className="text-2xl font-bold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-2">
                  01279180008
                </a>
              </div>

              {/* Booking Contact */}
              <div className="bg-navy-900/50 rounded-2xl p-6 border border-navy-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">الحجز والاستفسار</h3>
                </div>
                <a href="tel:01038961517" className="text-2xl font-bold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-2">
                  01038961517
                </a>
              </div>

              {/* Email */}
              <div className="bg-navy-900/50 rounded-2xl p-6 border border-navy-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">البريد الإلكتروني</h3>
                </div>
                <a href="mailto:info@webmaxacademy.com" className="text-xl font-bold text-gold-400 hover:text-gold-300 transition-colors">
                  info@webmaxacademy.com
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">الفروع</h3>
              <p className="text-center text-gray-400 mb-8">
                متواجدين فى نادى مطوبس الرياضى - مركز شباب رشيد - مركز شباب إدفينا بالتعاون مع وزارة الشباب والرياضة.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { location: 'مطوبس – كفر الشيخ', icon: MapPin },
                  { location: 'رشيد – البحيرة', icon: MapPin },
                  { location: 'إدفيـنا – البحيرة', icon: MapPin }
                ].map((item, idx) => (
                  <div key={idx} className="group bg-navy-900/50 rounded-2xl p-6 border border-navy-800/50 hover:border-gold-500/30 transition-all flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center group-hover:from-gold-400 group-hover:to-gold-600 transition-all">
                      <item.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">📍 {item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 border-t border-navy-800/50 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-navy-900" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-l from-gold-300 to-gold-500 bg-clip-text text-transparent">WEB MAX ACADEMY</span>
              </div>
              <p className="text-gray-500">
                جميع الحقوق محفوظة © {new Date().getFullYear()} WEB MAX ACADEMY
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
