import { useState, useEffect } from 'react';
import { Monitor, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import TargetAudience from './components/TargetAudience';
import Courses from './components/Courses';
import Features from './components/Features';
import Payment from './components/Payment';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-gold-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Monitor className="w-7 h-7 text-navy-900" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-l from-gold-300 to-gold-500 bg-clip-text text-transparent">
                WEB MAX ACADEMY
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">نبذة عنا</a>
              <a href="#courses" className="text-gray-300 hover:text-gold-400 transition-colors">الكورسات</a>
              <a href="#features" className="text-gray-300 hover:text-gold-400 transition-colors">المميزات</a>
              <a href="#registration" className="text-gray-300 hover:text-gold-400 transition-colors">التسجيل</a>
              <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors">تواصل معنا</a>
            </div>

            <button
              onClick={scrollToRegistration}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all transform hover:scale-105"
            >
              سجل الآن
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-navy-700/50">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>نبذة عنا</a>
                <a href="#courses" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>الكورسات</a>
                <a href="#features" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>المميزات</a>
                <a href="#registration" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>التسجيل</a>
                <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => setIsMenuOpen(false)}>تواصل معنا</a>
                <button
                  onClick={scrollToRegistration}
                  className="px-6 py-2.5 bg-gradient-to-l from-gold-400 to-gold-600 text-navy-900 font-semibold rounded-xl"
                >
                  سجل الآن
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        <Hero scrollToRegistration={scrollToRegistration} />
        <About />
        <WhyUs />
        <TargetAudience />
        <Courses scrollToRegistration={scrollToRegistration} />
        <Features />
        <Payment />
        <RegistrationForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
