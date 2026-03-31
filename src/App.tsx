/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  Star, 
  ArrowRight, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Mail,
  ShieldCheck,
  EyeOff,
  Navigation,
  Sparkles,
  ChevronLeft,
  Clock
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const translations = {
  en: {
    nav: {
      experience: "The Experience",
      treatments: "Treatments",
      sanctuary: "Sanctuary",
      reservations: "Reservations",
    },
    hero: {
      rating: "4.6/5 Google Rating",
      title: "A Sanctuary of Calm, Beauty, and Renewal",
      subtitle: "Discover a refined spa experience in Al Khobar, designed for comfort, elegance, and deep relaxation.",
      book: "Book Your Ritual",
      whatsapp: "Chat on WhatsApp",
    },
    story: {
      label: "The Desert Sanctuary",
      title: "Redefining Modern Arab Luxury.",
      desc: "Inspired by the timeless grace of the Arabian Peninsula, Manam Spa is an invitation to exhale. We blend ancient healing rituals with contemporary minimalist aesthetics to create a space that nourishes both body and soul.",
      rituals: "Signature Rituals",
      reviews: "Google Reviews",
    },
    services: {
      title: "Curated Rituals",
      subtitle: "Experience the art of wellbeing",
      book: "Book Ritual",
      all: "Discover All our Services",
    },
    sanctuary: {
      title: "Inside the Sanctuary",
      subtitle: "An editorial look at our desert retreat",
    },
    why: {
      title: "Why our sanctuary?",
      skilled: "Skilled & Caring Team",
      skilledDesc: "Our specialists are trained in the finest international and local wellness techniques.",
      privacy: "Total Privacy",
      privacyDesc: "Enjoy secluded treatment suites designed for absolute discretion and comfort.",
      ratingLabel: "Based on 288+ Google Reviews",
      viewAll: "View All Google Reviews",
    },
    booking: {
      title: "Book Your Session",
      desc: "Begin your journey to serenity. Our concierge will contact you shortly to confirm your reservation.",
      help: "Need instant help?",
      fullName: "Full Name",
      mobile: "Mobile Number",
      service: "Preferred Service",
      date: "Date",
      time: "Time",
      submit: "Book Your Session",
    },
    location: {
      title: "Find your way to peace.",
      desc: "Located in the heart of Al Khobar's vibrant Corniche area, our spa offers a peaceful retreat from the city's energy.",
      hours: "Opening Hours",
      contact: "Direct Contact",
      directions: "Get Directions",
    },
    footer: {
      label: "The Desert Sanctuary.",
      privacy: "Privacy Policy",
      terms: "Terms of Ritual",
      location: "Location",
      contact: "Contact Us",
      copyright: "© 2026 Manam Spa | منام سبا. The Desert Sanctuary.",
    }
  },
  ar: {
    nav: {
      experience: "التجربة",
      treatments: "العلاجات",
      sanctuary: "الملاذ",
      reservations: "الحجوزات",
    },
    hero: {
      rating: "4.6/5 تقييم قوقل",
      title: "ملاذ من الهدوء والجمال والتجدد",
      subtitle: "اكتشفي تجربة سبا راقية في الخبر، صُممت لتمنحكِ الاسترخاء والراحة والأناقة في كل تفصيلة.",
      book: "احجزي طقسكِ الخاص",
      whatsapp: "تحدثي معنا عبر واتساب",
    },
    story: {
      label: "ملاذ الصحراء",
      title: "إعادة تعريف الفخامة العربية الحديثة.",
      desc: "مستوحى من الأناقة الخالدة للجزيرة العربية، منام سبا هو دعوة للتنفس بعمق. نمزج بين طقوس الاستشفاء القديمة والجماليات الحديثة لنخلق مساحة تغذي الجسد والروح.",
      rituals: "طقوس مميزة",
      reviews: "تقييمات قوقل",
    },
    services: {
      title: "طقوس مختارة",
      subtitle: "اكتشفي فن الرفاهية",
      book: "احجزي الطقس",
      all: "اكتشفي جميع خدماتنا",
    },
    sanctuary: {
      title: "داخل الملاذ",
      subtitle: "نظرة افتتاحية على ملاذنا الصحراوي",
    },
    why: {
      title: "لماذا ملاذنا؟",
      skilled: "فريق ماهر ومهتم",
      skilledDesc: "أخصائياتنا مدربات على أرقى تقنيات العافية العالمية والمحلية.",
      privacy: "خصوصية تامة",
      privacyDesc: "استمتعي بأجنحة علاجية منعزلة مصممة للخصوصية والراحة المطلقة.",
      ratingLabel: "بناءً على 288+ تقييم قوقل",
      viewAll: "مشاهدة جميع تقييمات قوقل",
    },
    booking: {
      title: "احجزي جلستكِ",
      desc: "ابدئي رحلتكِ نحو الصفاء. سيتواصل معكِ فريقنا قريباً لتأكيد حجزكِ.",
      help: "هل تحتاجين مساعدة فورية؟",
      fullName: "الاسم الكامل",
      mobile: "رقم الجوال",
      service: "الخدمة المفضلة",
      date: "التاريخ",
      time: "الوقت",
      submit: "احجزي جلستكِ الآن",
    },
    location: {
      title: "ابحثي عن طريقكِ للسلام.",
      desc: "يقع سبا منام في قلب منطقة الكورنيش النابضة بالحياة في الخبر، ويوفر ملاذاً هادئاً بعيداً عن صخب المدينة.",
      hours: "ساعات العمل",
      contact: "الاتصال المباشر",
      directions: "احصلي على الاتجاهات",
    },
    footer: {
      label: "ملاذ الصحراء.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الطقوس",
      location: "الموقع",
      contact: "اتصلي بنا",
      copyright: "© 2026 منام سبا. ملاذ الصحراء.",
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = translations[lang];
  const isAr = lang === 'ar';

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["experience", "treatments", "sanctuary", "reservations"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    service: "Moroccan Bath",
    date: "",
    time: ""
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert(isAr ? "شكراً لكِ! سيتواصل معكِ فريقنا قريباً." : "Thank you! Our concierge will contact you shortly.");
  };

  return (
    <div className={`min-h-screen selection:bg-primary-container selection:text-on-primary-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <header className={`w-full z-50 sticky top-0 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm' : 'bg-white border-b border-stone-100'}`}>
        <nav className="flex justify-between items-center px-8 py-3 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center">
            <a href="#" className="block hover:opacity-90 transition-opacity">
              <div className="flex items-center gap-3">
                <img 
                  src="https://drive.google.com/thumbnail?id=14aBzjPaf9eLQapkHUkf6i7T0M8YCZVKg&sz=w1000" 
                  alt="Manam Spa Logo" 
                  className="h-12 md:h-14 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-start leading-none">
                  <span className="text-xl md:text-2xl font-serif tracking-widest text-stone-800">MANAM</span>
                  <span className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 mt-0.5 font-light">SPA & WELLNESS</span>
                </div>
              </div>
            </a>
          </div>
          <div className={`hidden md:flex items-center ${isAr ? 'gap-16' : 'gap-10'} font-headline ${isAr ? '' : 'italic tracking-wide'}`}>
            <a 
              className={`transition-all duration-300 ${activeSection === 'experience' ? 'text-primary font-bold border-b-2 border-primary/30' : 'text-stone-600 hover:text-primary'}`} 
              href="#experience"
            >
              {t.nav.experience}
            </a>
            <a 
              className={`transition-all duration-300 ${activeSection === 'treatments' ? 'text-primary font-bold border-b-2 border-primary/30' : 'text-stone-600 hover:text-primary'}`} 
              href="#treatments"
            >
              {t.nav.treatments}
            </a>
            <a 
              className={`transition-all duration-300 ${activeSection === 'sanctuary' ? 'text-primary font-bold border-b-2 border-primary/30' : 'text-stone-600 hover:text-primary'}`} 
              href="#sanctuary"
            >
              {t.nav.sanctuary}
            </a>
            <a 
              className={`transition-all duration-300 ${activeSection === 'reservations' ? 'text-stone-900 font-bold border-b-2 border-primary/30' : 'text-stone-600 hover:text-primary'}`} 
              href="#reservations"
            >
              {t.nav.reservations}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-4 py-2 bg-stone-100/50 hover:bg-stone-200/50 rounded-full transition-all text-sm font-bold border border-stone-200 shadow-sm"
            >
              {lang === 'en' ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇬🇧</span>
                  <span>EN</span>
                  <span className="text-stone-300 mx-1">/</span>
                  <span className="text-stone-400 font-normal">AR</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 font-normal">EN</span>
                  <span className="text-stone-300 mx-1">/</span>
                  <span className="arabic-sans">عربي</span>
                  <span className="text-lg">🇸🇦</span>
                </div>
              )}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover brightness-[0.75]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzXh1_czmwJdADLvtmRwk2O1YculgpCiKE04Dg5fUEk1O6Qc7iaSeumaoeOZDS6KgSJAcUlIkkwZMuipjvFnLaTlozmTWEuSHSiFFY8UkDzfEyaBw7qGhSlmNf5-4FTICKg1PTI7BLE_qMnCXNxOFdm1UrlCQuF_Uv3_g-__ATbaxBdeu9zIfZdJX7Jnztn102QW8bOK_YZ5AI2PPsImqqFq0ZSSnT0c83Fdwm5DMXd8jR0zNSA9wNRydh5mgOeCvfQDDKecLQSTg" 
              alt="Luxurious minimalist spa interior"
              referrerPolicy="no-referrer"
            />
            {/* Fade transition to next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-surface h-full"></div>
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-surface to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          >
            <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/20 text-white text-sm tracking-widest uppercase shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-4 h-4" alt="Google" />
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="font-medium">{t.hero.rating}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-[1.1] drop-shadow-2xl">
              {t.hero.title}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a 
                className="w-full sm:w-auto px-12 py-5 bg-primary text-on-primary rounded-full text-lg font-medium hover:bg-primary/90 transition-all shadow-2xl shadow-stone-950/40 transform hover:-translate-y-1" 
                href="#reservations"
              >
                {t.hero.book}
              </a>
              <a 
                className="w-full sm:w-auto px-12 py-5 bg-white/90 backdrop-blur-md border border-white/20 text-stone-900 rounded-full text-lg font-medium hover:bg-white transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-xl shadow-stone-950/20" 
                href="https://wa.me/966538588831"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 object-contain" alt="WhatsApp" />
                {t.hero.whatsapp}
              </a>
            </div>
          </motion.div>
        </section>

        {/* Brand Story Section */}
        <section className="py-32 px-8 bg-surface" id="experience">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="aspect-[4/5] rounded-full overflow-hidden relative z-10 shadow-2xl">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://0e9d299e890b0f46f43d-3dd2c92c26268727c0280f27b5b17857.ssl.cf1.rackcdn.com/responsive/4:3/Native/u/spa/s_spa_towels_and_stones.jpg" 
                    alt="Spa towels and stones"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply opacity-20 blur-3xl -z-10"></div>
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply opacity-20 blur-3xl -z-10"></div>
              </motion.div>
              
              <div className="space-y-8">
                <div className="inline-block px-4 py-1 bg-surface-container-high rounded-full text-xs font-label tracking-widest uppercase text-on-surface-variant">
                  {t.story.label}
                </div>
                <h2 className="text-4xl md:text-6xl font-headline leading-tight italic text-primary">
                  {t.story.title}
                </h2>
                <p className="text-xl text-on-surface-variant font-light leading-relaxed">
                  {t.story.desc}
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-headline text-primary">12+</h4>
                      <p className="text-sm uppercase tracking-widest text-outline font-bold">{t.story.rituals}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img 
                      className="w-12 h-12 object-contain" 
                      src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo.png" 
                      alt="Google Review"
                    />
                    <div>
                      <h4 className="text-3xl font-headline text-primary">288+</h4>
                      <p className="text-sm uppercase tracking-widest text-outline font-bold">{t.story.reviews}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-surface-container-low px-8" id="treatments">
          <div className="max-w-7xl mx-auto mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-headline mb-6">{t.services.title}</h2>
            <p className="text-outline uppercase tracking-[0.3em] text-sm">{t.services.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: isAr ? "حمام مغربي" : "Moroccan Bath",
                duration: isAr ? "90 دقيقة" : "90 min",
                desc: isAr ? "تقشير عميق باستخدام الصابون الأسود التقليدي وقفازات كيسة في جناحنا الرخامي الخاص." : "Deep exfoliation using traditional black soap and Kessa gloves in our private marble suite.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgJpsD9qPsejZjEY-WjDnzp7SMLSU5q4OobwuYWsAm5_ZdY0nT2hRNZUcctscZWB8Xl0tMEQWi2WjQjdB7xmqZwRVFQAsNJZvoyP_4kSCELY_ByfrxDpY5aPwv-rhqjItGA0uSPrW1XaUggF7TOZCYOwduiANjcxnJTHY0c-wKwqc8GxkEugfizG9b3GcBY6wUG3rHpuAy34xIvgXG5KyIc2QjmKYkYxy9ibfMpNOj7GNerOX4nxCGy8OmDGuSlF4D54VTh-3mJdg"
              },
              {
                title: isAr ? "مساج منام الخاص" : "Signature Massage",
                duration: isAr ? "60 دقيقة" : "60 min",
                desc: isAr ? "مزيج مخصص من تقنيات التدليك السويدي والأنسجة العميقة للتخلص من التوتر واستعادة التوازن." : "A bespoke fusion of Swedish and deep tissue techniques to release tension and restore balance.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF4BZz-eyx0_ok8mvKSubbQGA8WTExWOfs79mCnDWR14teo3RGfj_l0W2xxIsc3yYVyjUrHzAMG_y2dm99uxJ2ColZiZ8flsRRTeM37TMi9zX2t5MqSJ6st0e2Z2IpCUyQy9OYvx6xVVv1WVByX63AGNqiLp9JtYDE0CpoGJ0Rx3ht8C0n5ZFclu3DNRfk9_vZRnvzKNxDOxEVbzRUUFFDOLJNlN9Nwl92RLp3Id_2wB5lBH4mFRcIITxp5YH2fLLa38-uMGRMu9c"
              },
              {
                title: isAr ? "فن العناية بالأظافر" : "Nail Artistry",
                duration: isAr ? "45 دقيقة" : "45 min",
                desc: isAr ? "خدمات مانيكير وباديكير راقية باستخدام علاجات عضوية فاخرة وغير سامة." : "Refined manicure and pedicure services using non-toxic, premium organic treatments.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2aw5bCOFAeCnKVTxHiLtKtq2T_M4XAN05FWJFaJ1NgRe7tCh5xD_ls3eHE4phyF3O0DOLUbBJAPLiYfY_cTC74cohiJ1T5eMv21IO16LpyGQLrpv0MIVyGgpNLMYsMvfuDxuNgoyc93NtTrFDlKBNIoUCsJdPSnAKF8Q8URIeMs4TRAxmXTYmkPVm97ERzLd4udm4lrZBmv65rhGrOh8pwZOL4FnWAVHIK_BHhR3YxtKdjc0dPzSMPWO3gI-n1W6ygvK3FCbi0BE"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-outline-variant/20"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={service.img} 
                    alt={service.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-headline">{service.title}</h3>
                    <span className="text-primary font-medium">{service.duration}</span>
                  </div>
                  <p className="text-on-surface-variant font-light mb-6">{service.desc}</p>
                  <div className="mt-auto">
                    <a href="#reservations" className="text-primary font-label uppercase tracking-widest text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                      {t.services.book} <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a className="inline-flex items-center gap-4 text-on-surface font-headline italic text-2xl hover:text-primary transition-colors border-b border-primary/30 pb-2" href="#reservations">
              {t.services.all}
              <ArrowRight size={24} className={isAr ? 'rotate-180' : ''} />
            </a>
          </div>
        </section>

        {/* Sanctuary Gallery Section */}
        <section className="py-32 px-4 md:px-8 bg-surface overflow-hidden" id="sanctuary">
          <div className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline italic mb-4">{t.sanctuary.title}</h2>
              <p className="text-on-surface-variant tracking-widest text-sm uppercase">{t.sanctuary.subtitle}</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 px-4 pb-12 hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {[
              {
                img: "https://drive.google.com/thumbnail?id=15hjBqV3i_pE7iOKktNK67W6MifbvVIvr&sz=w1000",
                caption: isAr ? "طقوس الترحيب: شاي الأعشاب ومنشفة دافئة." : "The Welcome Ritual: Herbal tea and a warm towel."
              },
              {
                img: "https://drive.google.com/thumbnail?id=11K-_JQwNxz36cwxmBHLnbZE-72Kh9ECQ&sz=w1000",
                caption: isAr ? "جناح العناية بالأظافر: أناقة وراحة." : "The Nail Suite: Elegance and comfort."
              },
              {
                img: "https://drive.google.com/thumbnail?id=1sDygazfH3VhidHZEkVKVSrRk1gSd0Jw6&sz=w1000",
                caption: isAr ? "لوحة الألوان: تشكيلة مختارة من أرقى أنواع الطلاء." : "The Color Palette: A curated selection of the finest polishes."
              },
              {
                img: "https://drive.google.com/thumbnail?id=1xwdkVlTA5_OM2OTPbs5W6W-yR2TOW5ql&sz=w1000",
                caption: isAr ? "تفاصيل السكينة: رداء الاسترخاء الفاخر." : "Serenity Details: The luxury relaxation robe."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex-none w-[70vw] md:w-[30vw] snap-center">
                <figure className="space-y-4">
                  <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={item.img} 
                      alt={item.caption} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <figcaption className="text-center italic font-headline text-on-surface-variant/80 text-sm">{item.caption}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 bg-surface overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-4xl md:text-6xl font-headline mb-8 italic text-primary">{t.why.title}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-on-secondary-container" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t.why.skilled}</h4>
                      <p className="text-on-surface-variant text-sm">{t.why.skilledDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                      <EyeOff className="text-on-secondary-container" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t.why.privacy}</h4>
                      <p className="text-on-surface-variant text-sm">{t.why.privacyDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 bg-surface-container-highest rounded-xl p-8 md:p-12 relative overflow-hidden border border-outline-variant/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                  <div className="flex items-center gap-6">
                    <a 
                      href="https://www.google.com/maps/place/Manam+Spa/@26.3256003,50.2151379,14.32z/data=!4m8!3m7!1s0x3e49e90d4725c42b:0x2b081a1cd745cd1b!8m2!3d26.3269732!4d50.2154706!9m1!1b1!16s%2Fg%2F11kr_lrlbq?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 transition-transform"
                    >
                      <img 
                        className="w-24 h-24 object-contain" 
                        src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo.png" 
                        alt="Google Review Logo"
                      />
                    </a>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="text-4xl md:text-6xl font-headline text-primary">4.6</div>
                        <div className="flex text-yellow-600">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-outline uppercase tracking-widest text-xs mt-1">{t.why.ratingLabel}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-surface p-6 rounded-lg shadow-sm border border-stone-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-500">N</div>
                      <div>
                        <p className="font-bold text-sm">Nouf M</p>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider">Local Guide • 27 reviews</p>
                      </div>
                    </div>
                    <p className="text-on-surface-variant italic mb-4 text-sm leading-relaxed">
                      "The spa is amazing and so relaxing, such a pampering experience from the moment you walk in. I had a Moroccan bath with Noor, and she was incredibly sweet and professional. Highly recommended! 🤍"
                    </p>
                    <div className="flex text-yellow-600 scale-75 origin-left">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-surface p-6 rounded-lg shadow-sm border border-stone-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-500">N</div>
                      <div>
                        <p className="font-bold text-sm">N S</p>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider">8 reviews • 7 photos</p>
                      </div>
                    </div>
                    <p className="text-on-surface-variant italic mb-4 text-sm leading-relaxed">
                      "I had حمام هوى and it was amazing, i noticed that everything was so clean and organized. All the tools needed after the Hammam was provided as well. The vibes are amazing and it made me so relaxed, the receptionists are professional and friendly. Highly recommend!"
                    </p>
                    <div className="flex text-yellow-600 scale-75 origin-left">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-32 px-8 bg-surface-container" id="reservations">
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-outline-variant/20">
              <div className="md:w-2/5 bg-primary p-12 text-on-primary flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-headline mb-6">{t.booking.title}</h2>
                  <p className="text-white/80 font-light mb-8">{t.booking.desc}</p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Phone size={20} />
                      <span>+966 53 858 8831</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin size={20} />
                      <span>{isAr ? "طريق بن عبدالعزيز، الكورنيش، الخبر" : "Bin Abdulaziz Road, Alkurnaish, Al Khobar"}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-6 border border-on-primary/20 rounded-lg">
                  <p className="text-xs uppercase tracking-widest mb-2 opacity-70">{t.booking.help}</p>
                  <a className="flex items-center justify-between group" href="https://wa.me/966538588831">
                    <div className="flex items-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 object-contain" alt="WhatsApp" />
                      <span className="text-xl font-headline">{t.hero.whatsapp}</span>
                    </div>
                    <ArrowRight className={`group-hover:translate-x-2 transition-transform ${isAr ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                  </a>
                </div>
              </div>
              
              <div className="md:w-3/5 p-12 bg-white">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-label uppercase tracking-widest text-outline mb-2 block">{t.booking.fullName}</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface" 
                      placeholder={isAr ? "اسمك الكامل" : "Your name"} 
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-label uppercase tracking-widest text-outline mb-2 block">{t.booking.mobile}</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface" 
                      placeholder="+966" 
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-label uppercase tracking-widest text-outline mb-2 block">{t.booking.service}</label>
                    <select 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>{isAr ? "حمام مغربي" : "Moroccan Bath"}</option>
                      <option>{isAr ? "مساج منام الخاص" : "Signature Massage"}</option>
                      <option>{isAr ? "طقوس الشعر" : "Hair Ritual"}</option>
                      <option>{isAr ? "العناية بالأظافر" : "Nail Care"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-label uppercase tracking-widest text-outline mb-2 block">{t.booking.date}</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface" 
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-label uppercase tracking-widest text-outline mb-2 block">{t.booking.time}</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface" 
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button className="w-full py-5 bg-primary text-on-primary rounded-full font-label uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-colors mt-8" type="submit">
                      {t.booking.submit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline mb-8 italic text-primary">{t.location.title}</h2>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md">{t.location.desc}</p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Clock size={16} />
                    {t.location.hours}
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    {isAr ? "الثلاثاء - الاثنين" : "Tue - Mon"}<br />
                    12:00 PM - 09:00 PM
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Mail size={16} />
                    {t.location.contact}
                  </h4>
                  <p className="text-on-surface-variant text-sm">+966 53 858 8831</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-on-surface-variant text-sm font-medium flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Bin Abdulaziz Road, Alkurnaish, King Faisal, Al Khobar 34412, Saudi Arabia
                </p>
                <a 
                  href="https://maps.google.com/?q=Manam+Spa+Al+Khobar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-primary transition-all flex items-center gap-2 shadow-lg"
                >
                  <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" className="w-5 h-5" alt="Google Maps" />
                  {t.location.directions}
                </a>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-full min-h-[500px] rounded-xl overflow-hidden shadow-2xl bg-surface-container relative border border-stone-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.464673641328!2d50.2185!3d26.2885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE3JzE4LjYiTiA1MMKwMTMnMDYuNiJF!5e0!3m2!1sen!2ssa!4v1648720000000!5m2!1sen!2ssa" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Manam Spa Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-12 border-t border-stone-200/10 bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto text-center md:text-left rtl:md:text-right">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <a href="#" className="block hover:opacity-90 transition-opacity mb-6">
              <div className="flex flex-col items-center md:items-start gap-2">
                <img 
                  src="https://drive.google.com/thumbnail?id=14aBzjPaf9eLQapkHUkf6i7T0M8YCZVKg&sz=w1000" 
                  alt="Manam Spa Logo" 
                  className="h-24 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center md:items-start leading-none">
                  <span className="text-3xl md:text-4xl font-serif tracking-widest text-stone-800">MANAM</span>
                  <span className="text-xs md:text-sm tracking-[0.3em] text-stone-500 mt-1 font-light">SPA & WELLNESS</span>
                </div>
              </div>
            </a>
            <p className="font-headline text-xs uppercase tracking-[0.3em] text-stone-500">{t.footer.label}</p>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-stone-500 hover:text-stone-800 transition-all hover:underline decoration-stone-300 underline-offset-8 font-headline text-sm uppercase tracking-widest" href="#">{t.footer.privacy}</a>
            <a className="text-stone-500 hover:text-stone-800 transition-all hover:underline decoration-stone-300 underline-offset-8 font-headline text-sm uppercase tracking-widest" href="#">{t.footer.terms}</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-stone-500 hover:text-stone-800 transition-all hover:underline decoration-stone-300 underline-offset-8 font-headline text-sm uppercase tracking-widest" href="#">{t.footer.location}</a>
            <a className="text-stone-500 hover:text-stone-800 transition-all hover:underline decoration-stone-300 underline-offset-8 font-headline text-sm uppercase tracking-widest" href="#">{t.footer.contact}</a>
          </div>
          <div className="flex justify-center md:justify-end gap-6 text-stone-500">
            <Instagram className="cursor-pointer hover:text-primary transition-colors" size={20} />
            <Twitter className="cursor-pointer hover:text-primary transition-colors" size={20} />
            <Mail className="cursor-pointer hover:text-primary transition-colors" size={20} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-200/20 text-center">
          <p className="font-headline text-xs uppercase tracking-[0.2em] text-stone-400">
            {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform p-3" 
        href="https://wa.me/966538588831"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-full h-full object-contain" alt="WhatsApp" />
      </a>
    </div>
  );
}
