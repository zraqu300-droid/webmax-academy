import { CreditCard, Users, Sparkles, CheckCircle } from 'lucide-react';

const paymentOptions = [
  { icon: CreditCard, text: 'تقسيط مبلغ الكورس على دفعات متعددة' },
  { icon: Users, text: 'خصومات على الاخوات والأصدقاء' },
  { icon: Sparkles, text: 'عروض الباقات فى حالة اشتراك فأكثر من كورس معا' }
];

function Payment() {
  return (
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
              {paymentOptions.map((item, idx) => (
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
  );
}

export default Payment;
