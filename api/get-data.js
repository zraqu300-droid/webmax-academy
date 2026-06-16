import { neon } from '@neondatabase/serverless';

export default async function handler(request, response) {
    // إعدادات CORS للسماح بالوصول من الفرونت إند (React)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // التعامل مع طلبات الـ OPTIONS المسبقة
    if (request.method === 'OPTIONS') return response.status(200).end();
    
    // التأكد من أن نوع الطلب هو GET فقط
    if (request.method !== 'GET') {
        return response.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    try {
        // الاتصال بقاعدة بيانات Neon
        const sql = neon(process.env.DATABASE_URL);
        
        // جلب جميع بيانات الطلاب من جدول students وترتيبهم من الأحدث للتسجيل (id DESC)
        const rows = await sql`
            SELECT 
                id, 
                name, 
                age, 
                phone, 
                address, 
                education_level AS "educationLevel", 
                guardian_phone AS "guardianPhone", 
                course, 
                level, 
                notes,
                created_at AS "createdAt"
            FROM students 
            ORDER BY id DESC;
        `;

        // إرجاع البيانات بنجاح للفرونت إيند
        return response.status(200).json({ 
            success: true, 
            data: rows 
        });

    } catch (error) {
        console.error('CRITICAL DATABASE ERROR:', error);
        return response.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
}
