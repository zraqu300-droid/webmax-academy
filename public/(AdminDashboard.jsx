import { useEffect, useState } from 'react';
import { Shield, Download, RefreshCw, Search } from 'lucide-react';
import * as XLSX from 'xlsx'; // تأكد من تثبيت هذه المكتبة عبر الأمر: npm i xlsx

const GET_DATA_URL = 'https://academyoi.vercel.app/api/get-data';

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // دالة جلب البيانات من السيرفر
  const fetchStudentsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(GET_DATA_URL);
      const result = await response.json();
      if (result.success) {
        setStudents(result.data);
      } else {
        alert('حدث خطأ أثناء جلب البيانات من السيرفر');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('تعذر الاتصال بالسيرفر، تحقق من الإنترنت');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentsData();
  }, []);

  // دالة تصدير البيانات إلى ملف Excel واحتساب التنسيق للطباعة
  const exportToExcel = () => {
    if (students.length === 0) {
      alert('لا توجد بيانات لتصديرها!');
      return;
    }

    // تجهيز البيانات وتسمية الأعمدة بالعربية لتكون جاهزة للطباعة
    const formattedData = students.map((student, index) => ({
      'م': index + 1,
      'الاسم الكامل': student.name,
      'السن': student.age,
      'رقم الهاتف': student.phone,
      'العنوان': student.address,
      'المستوى التعليمي': student.educationLevel,
      'رقم ولي الأمر': student.guardianPhone || 'لا يوجد',
      'الكورس': student.course,
      'المستوى': student.level || 'غير محدد',
      'ملاحظات': student.notes || 'لا يوجد',
      'تاريخ التسجيل': student.createdAt ? new Date(student.createdAt).toLocaleDateString('ar-EG') : ''
    }));

    // إنشاء كتاب العمل (Workbook) والورقة (Worksheet)
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    
    // ضبط اتجاه الورقة من اليمين لليسار ليناسب اللغة العربية عند الطباعة
    worksheet['!dir'] = 'rtl';

    XLSX.utils.book_append_sheet(workbook, worksheet, 'الطلاب المسجلين');
    
    // تحميل الملف باسم احترافي يحتوي على التاريخ الحالي
    const fileName = `تاريخ_التسجيل_${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  // فلترة الطلاب بناءً على البحث بالاسم أو الهاتف أو الكورس
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.phone.includes(searchTerm) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-navy-950 text-gray-100 p-6 md:p-12 font-sans" dir="rtl">
      {/* رأس الصفحة والهيدر */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-navy-800 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-white">لوحة تحكم الإدارة</h1>
          </div>
          <p className="text-gray-400">مراقبة الطلاب المسجلين وتصدير البيانات للطباعة</p>
        </div>

        {/* أزرار التحكم */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={fetchStudentsData}
            className="px-4 py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-xl border border-navy-600 transition-colors flex items-center gap-2"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            تحديث
          </button>
          
          <button 
            onClick={exportToExcel}
            className="px-5 py-3 bg-gradient-to-l from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-900 font-bold rounded-xl shadow-lg shadow-gold-500/10 transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            تحميل Excel للطباعة
          </button>
        </div>
      </div>

      {/* شريط البحث وإحصائيات سريعة */}
      <div className="max-w-7xl mx-auto mb-6 grid md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2 relative">
          <Search className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            placeholder="ابحث باسم الطالب، رقم الهاتف، أو الكورس..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-12 py-3 bg-navy-900 border border-navy-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
          />
        </div>
        <div className="bg-navy-900 border border-navy-800 rounded-xl p-3.5 text-center">
          <span className="text-gray-400 text-sm pl-2">إجمالي المسجلين:</span>
          <span className="text-2xl font-bold text-gold-400">{filteredStudents.length}</span>
        </div>
      </div>

      {/* جدول البيانات الكامل */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-navy-900/60 backdrop-blur-sm border border-navy-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center py-20">
                <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-400">جاري تحميل بيانات الطلاب من قاعدة البيانات...</p>
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                لا توجد بيانات طلاب مسجلة حالياً تطابق البحث.
              </div>
            ) : (
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-navy-800/80 text-gray-300 font-medium text-sm border-b border-navy-700">
                    <th className="p-4 w-12 text-center">م</th>
                    <th className="p-4">الاسم الكامل</th>
                    <th className="p-4 w-16 text-center">السن</th>
                    <th className="p-4">رقم الهاتف</th>
                    <th className="p-4">العنوان</th>
                    <th className="p-4">المستوى التعليمي</th>
                    <th className="p-4">رقم ولي الأمر</th>
                    <th className="p-4">الكورس المطلوب</th>
                    <th className="p-4">المستوى</th>
                    <th className="p-4 max-w-xs truncate">ملاحظات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800/50 text-sm">
                  {filteredStudents.map((student, index) => (
                    <tr key={student.id} className="hover:bg-navy-800/30 transition-colors text-gray-300">
                      <td className="p-4 text-center text-gray-500 font-mono">{index + 1}</td>
                      <td className="p-4 font-bold text-white">{student.name}</td>
                      <td className="p-4 text-center">{student.age}</td>
                      <td className="p-4 font-mono select-all text-gold-200">{student.phone}</td>
                      <td className="p-4 text-gray-400">{student.address}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-navy-800 border border-navy-700 rounded-md text-xs">
                          {student.educationLevel}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-gray-400">{student.guardianPhone || '—'}</td>
                      <td className="p-4 text-emerald-400 font-medium">{student.course}</td>
                      <td className="p-4">
                        {student.level ? (
                          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs">
                            {student.level}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="p-4 text-gray-400 max-w-xs whitespace-pre-wrap break-words text-xs leading-relaxed">
                        {student.notes || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
