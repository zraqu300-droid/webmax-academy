import { Monitor, Phone, MapPin, MessageCircle, Mail } from 'lucide-react';

const branches = [
  { location: 'مطوبس – كفر الشيخ' },
  { location: 'رشيد – البحيرة' },
  { location: 'إدفيـنا – البحيرة' }
];

function Footer() {
  return (
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
            <div className="bg-navy-900/50 rounded-2xl p-6 border border-navy-800/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white">إدارة الأكاديمية</h3>
              </div>
              <a href="tel:01279180008" className="text-2xl font-bold text-gold-400 hover:text-gold-300 transition-colors">
                01279180008
              </a>
            </div>

            <div className="bg-navy-900/50 rounded-2xl p-6 border border-navy-800/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white">الحجز والاستفسار</h3>
              </div>
              <a href="tel:01038961517" className="text-2xl font-bold text-gold-400 hover:text-gold-300 transition-colors">
                01038961517
              </a>
            </div>

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

          {/* Branches */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">الفروع</h3>
            <p className="text-center text-gray-400 mb-8">
              متواجدين فى نادى مطوبس الرياضى - مركز شباب رشيد - مركز شباب إدفينا بالتعاون مع وزارة الشباب والرياضة.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {branches.map((item, idx) => (
                <div key={idx} className="group bg-navy-900/50 rounded-2xl p-6 border border-navy-800/50 hover:border-gold-500/30 transition-all flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center group-hover:from-gold-400 group-hover:to-gold-600 transition-all">
                    <MapPin className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <p className="text-lg font-bold text-white">📍 {item.location}</p>
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
  );
}

export default Footer;
