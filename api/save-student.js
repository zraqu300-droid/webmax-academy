import { neon } from '@neondatabase/serverless';

export default async function handler(request, response) {
    // إعدادات CORS للسماح بالاتصال من الواجهة الأمامية
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // التعامل مع طلبات الـ OPTIONS المسبقة
    if (request.method === 'OPTIONS') return response.status(200).end();

    // التحقق من نوع الطلب
    if (request.method !== 'POST') {
        return response.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    try {
        // الاتصال بقاعدة بيانات Neon
        const sql = neon(process.env.DATABASE_URL);
        
        // استخراج البيانات القادمة من جسم الطلب (Request Body)
        const { 
            name, 
            age, 
            phone, 
            address, 
            educationLevel, 
            guardianPhone, 
            course, 
            level, 
            notes 
        } = request.body;

        // التحقق من وجود الحقول الإجبارية لتفادي أخطاء قاعدة البيانات
        if (!name || !age || !phone || !address || !educationLevel || !course) {
            return response.status(400).json({ 
                success: false, 
                error: 'الرجاء ملء كافة الحقول الإجبارية المطلوبة (*)' 
            });
        }

        // تحويل السن إلى رقم صحيح متوافق مع نوع الحقل INT في SQL
        const parsedAge = parseInt(age, 10);

        // تنفيذ استعلام الإدخال داخل جدول students المتوافق مع حقول الـ SQL بدقة
        const result = await sql`
            INSERT INTO students (
                name, 
                age, 
                phone, 
                address, 
                education_level, 
                guardian_phone, 
                course, 
                level, 
                notes
            ) VALUES (
                ${String(name)}, 
                ${parsedAge}, 
                ${String(phone)}, 
                ${String(address)}, 
                ${String(educationLevel)}, 
                ${guardianPhone ? String(guardianPhone) : null}, 
                ${String(course)}, 
                ${level ? String(level) : null}, 
                ${notes ? String(notes) : null}
            ) RETURNING id;
        `;

        // إرجاع استجابة النجاح مع المعرف الفريد للطالب الجديد
        return response.status(200).json({ 
            success: true, 
            message: "تم تسجيل بيانات الطالب بنجاح عبر Neon",
            inserted_id: result[0].id
        });

    } catch (error) {
        console.error('CRITICAL DATABASE ERROR:', error);
        return response.status(500).json({ 
            success: false, 
            error: error.message
        });
    }
}
