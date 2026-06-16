const SAVE_API_URL = 'https://academyoi.vercel.app/api/save-student';

/**
 * خدمة إرسال وحفظ بيانات الطالب في قاعدة البيانات
 * @param {Object} studentData - البيانات القادمة من استمارة التسجيل (formData)
 * @returns {Promise<Object>} - نتيجة العملية القادمة من السيرفر (success & id)
 */
export const saveStudentData = async (studentData) => {
  try {
    const response = await fetch(SAVE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error(`خطأ في السيرفر: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("خطأ أثناء إرسال بيانات الطالب:", error);
    throw error;
  }
};
