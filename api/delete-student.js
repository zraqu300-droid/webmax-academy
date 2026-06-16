import { neon } from '@neondatabase/serverless';

export default async function handler(request, response) {
    // إعدادات CORS للسماح بالوصول من الفرونت إند
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // التعامل مع طلبات الـ OPTIONS المسبقة
    if (request.method === 'OPTIONS') return response.status(200).end();
    
    // التأكد من أن نوع الطلب هو DELETE فقط
    if (request.method !== 'DELETE') {
        return response.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    try {
        // الحصول على الـ id الخاص بالطالب المراد حذفه من الرابط
        const { id } = request.query;

        // التحقق من إرسال الـ id لتفادي أخطاء الاستعلام
        if (!id) {
            return response.status(400).json({ success: false, error: 'برجاء تحديد معرف الطالب (id) المطلوب حذفه' });
        }

        // الاتصال بقاعدة بيانات Neon
        const sql = neon(process.env.DATABASE_URL);
        
        // تنفيذ أمر الحذف من جدول students بناءً على الـ id
        const result = await sql`
            DELETE FROM students 
            WHERE id = ${parseInt(id, 10)}
            RETURNING id;
        `;

        // التحقق مما إذا كان الطالب موجوداً بالفعل وتم حذفه أم لا
        if (result.length === 0) {
            return response.status(404).json({ success: false, error: 'لم يتم العثور على طالب بهذا المعرف' });
        }

        // إرجاع استجابة النجاح بنفس أسلوب الأكواد السابقة
        return response.status(200).json({ 
            success: true, 
            message: "تم حذف بيانات الطالب بنجاح من قاعدة البيانات"
        });

    } catch (error) {
        console.error('CRITICAL DATABASE ERROR:', error);
        return response.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
}
