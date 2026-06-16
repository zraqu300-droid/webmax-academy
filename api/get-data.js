import { neon } from '@neondatabase/serverless';

export default async function handler(request, response) {
    // إعدادات CORS للسماح بالوصول من الفرونت إند
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') return response.status(200).end();
    
    // تأكد أن هذا الملف مخصص للجلب فقط
    if (request.method !== 'GET') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const sql = neon(process.env.DATABASE_URL);
        
        // الحصول على الفلتر من الرابط (مثلاً: /api/get-data?section=bouh-display)
        const { section } = request.query;

        let rows;
        if (section) {
            // جلب البيانات بفلتر القسم
            rows = await sql`
                SELECT * FROM posts 
                WHERE section = ${section} 
                ORDER BY id DESC;
            `;
        } else {
            // جلب الكل
            rows = await sql`SELECT * FROM posts ORDER BY id DESC;`;
        }

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
