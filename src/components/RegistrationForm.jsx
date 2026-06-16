import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const initialFormData = {
  name: '',
  age: '',
  phone: '',
  address: '',
  educationLevel: '',
  guardianPhone: '',
  course: '',
  level: '',
  notes: ''
};

function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData(initialFormData);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
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
  );
}

export default RegistrationForm;
