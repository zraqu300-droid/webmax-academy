import { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Clock,
  CreditCard,
  TrendingUp,
  Star,
  Send,
  CheckCircle,
  Monitor,
  Brain,
  Calculator,
  Building,
  Users,
  Languages
} from 'lucide-react';

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

function Courses({ scrollToRegistration }) {
  const [activeTab, setActiveTab] = useState('programming');
  const activeCourse = courses.find(c => c.id === activeTab);

  return (
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
                onClick={() => setActiveTab(course.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === course.id
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
          {activeCourse && (
            <div className="bg-navy-800/40 backdrop-blur-sm rounded-3xl border border-navy-700/50 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-3xl">
                    {activeCourse.emoji}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{activeCourse.title}</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-navy-700/50 rounded-lg">
                      <Clock className="w-5 h-5 text-gold-400" />
                      <span className="text-gray-300">{activeCourse.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gold-500/20 rounded-lg">
                      <CreditCard className="w-5 h-5 text-gold-400" />
                      <span className="text-gold-300 font-bold">{activeCourse.price} جنيه</span>
                    </div>
                  </div>

                  {activeCourse.content.length > 0 && (
                    <div className="bg-navy-900/50 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-gold-400" />
                        المحتوى:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {activeCourse.content.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCourse.results.length > 0 && (
                    <div className="bg-gradient-to-br from-gold-500/10 to-transparent rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-gold-400" />
                        النتائج المتوقعة:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeCourse.results.map((item, idx) => (
                          <span key={idx} className="px-4 py-2 bg-navy-800/50 rounded-lg text-gray-300 border border-gold-500/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCourse.levels && (
                    <div className="bg-navy-900/50 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-gold-400" />
                        المستويات:
                      </h4>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {activeCourse.levels.map((level, idx) => (
                          <div key={idx} className="p-4 bg-navy-800/50 rounded-xl border border-navy-700/50 hover:border-gold-500/30 transition-colors">
                            <div className="font-bold text-gold-400">{level.name}</div>
                            <div className="text-gray-400 text-sm">{level.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCourse.professional && (
                    <div className="bg-gradient-to-br from-gold-500/20 to-navy-900/50 rounded-2xl p-6 border border-gold-500/20">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-gold-400" />
                        المستوى الإحترافى:
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock className="w-4 h-4 text-gold-400" />
                          <span>{activeCourse.professional.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gold-300 font-bold">
                          <CreditCard className="w-4 h-4 text-gold-400" />
                          <span>{activeCourse.professional.price} جنيه</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeCourse.professional.track.map((item, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-navy-800/50 rounded-lg text-gray-300 text-sm border border-gold-500/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
          )}
        </div>
      </div>
    </section>
  );
}

export default Courses;
