import React, { useState, useEffect, useRef } from 'react';
import { TRANSLATIONS, ASSETS, COLORS } from './constants';
import { Language } from './types';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Clock, 
  Menu,
  MessageSquare,
  User,
  GraduationCap
} from 'lucide-react';

// --- Reusable Component for Scroll Animation ---
const RevealSection = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once per session
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-30px]'}`}
      {...props}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const toggleLang = () => {
    setLang(prev => {
      if (prev === 'en') return 'pt';
      if (prev === 'pt') return 'es';
      return 'en';
    });
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };

  const currentSmsLink = 
    lang === 'en' ? ASSETS.smsLink : 
    lang === 'pt' ? ASSETS.smsLinkPt : 
    ASSETS.smsLinkEs;

  const currentCourseSmsLink = 
    lang === 'en' ? ASSETS.smsLinkCourse : 
    lang === 'pt' ? ASSETS.smsLinkCoursePt : 
    ASSETS.smsLinkCourseEs;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* Container - Increased max-width to 520px for a more spacious feel on large phones */}
      <div className="w-full max-w-[520px] bg-white shadow-xl min-h-screen relative pb-20 overflow-hidden">
        
        {/* --- 1) TOP BAR --- */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 px-5 py-3 flex items-center justify-between shadow-sm transition-all duration-300">
          <img 
            src={ASSETS.logo} 
            alt="Dalva Machado Beauty Logo" 
            className="h-10 w-10 rounded-full object-cover border border-gray-100 shadow-sm"
          />
          <div className="flex items-center gap-4">
             <a 
              href="#reviews" 
              className="text-xs uppercase tracking-widest font-medium text-gray-500 flex items-center gap-1 hover:text-[#E18FB1] transition-colors"
            >
              {t.nav.reviews} <span className="text-[#E18FB1] text-sm">★★★★★</span>
            </a>
            <button 
              onClick={toggleLang}
              className="flex items-center bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 transition-colors hover:bg-gray-100"
              aria-label="Toggle Language"
            >
              <span className={`text-sm ${lang === 'en' ? 'font-bold' : 'opacity-40 grayscale'}`}>🇺🇸</span>
              <span className="text-gray-300 mx-1.5 font-light">|</span>
              <span className={`text-sm ${lang === 'pt' ? 'font-bold' : 'opacity-40 grayscale'}`}>🇧🇷</span>
              <span className="text-gray-300 mx-1.5 font-light">|</span>
              <span className={`text-sm ${lang === 'es' ? 'font-bold' : 'opacity-40 grayscale'}`}>🇪🇸</span>
            </button>
          </div>
        </header>

        {/* --- 2) HERO SECTION --- */}
        <section className="relative h-[440px] w-full flex flex-col items-center justify-end text-center px-6 pb-16 animate-fade-in-up">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={ASSETS.heroBg} 
              alt="Dalva Machado Beauty Studio" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-white w-full max-w-sm">
            <h1 className="font-serif text-4xl leading-tight mb-3 drop-shadow-lg tracking-wide">
              Dalva Machado
            </h1>
            <p className="text-base text-gray-100 font-light tracking-wide mb-6 drop-shadow-md opacity-90 leading-relaxed">
              {t.hero.subheadline}
            </p>
          </div>
        </section>

        {/* --- 2.5) ACTION BUTTONS SECTION --- */}
        <RevealSection className="px-5 py-8 bg-white border-b border-gray-50 relative z-20 -mt-8 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-3 w-full">
              <a 
                href={currentSmsLink}
                className="bg-[#E18FB1] text-white text-sm font-medium tracking-wide uppercase py-3.5 rounded-full shadow-lg hover:bg-[#d07a9c] hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} strokeWidth={2} />
                {t.hero.cta_sms}
              </a>
              <a 
                href={`tel:${ASSETS.phoneRaw}`}
                className="bg-white text-gray-800 text-sm font-medium tracking-wide uppercase py-3.5 border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Phone size={18} strokeWidth={1.5} />
                {t.hero.cta_call}
              </a>
              <a 
                href={ASSETS.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white text-sm font-medium tracking-wide uppercase py-3.5 rounded-full shadow-lg hover:bg-[#20bd5a] hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} strokeWidth={2} />
                {t.hero.cta_whatsapp}
              </a>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-center text-gray-400 mt-4 font-light opacity-80">{t.hero.microcopy}</p>
        </RevealSection>

        {/* --- 2.7) ABOUT ME SECTION --- */}
        <RevealSection className="px-5 py-8 bg-white">
          <div className="bg-[#E18FB1]/5 rounded-2xl p-8 text-center border border-[#E18FB1]/10">
            <h2 className="font-serif text-2xl text-[#1A1A1B] mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-[#E18FB1]/40"></span>
              {t.about.title}
              <span className="w-8 h-[1px] bg-[#E18FB1]/40"></span>
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-[15px]">
              {t.about.description}
            </p>
          </div>
        </RevealSection>

        {/* --- 2.8) COURSE SECTION (MOVED HERE) --- */}
        <RevealSection className="px-5 py-14 bg-white border-t border-gray-50" id="course">
           <div className="text-center mb-8">
             <h2 className="font-serif text-2xl text-[#1A1A1B] mb-3 flex flex-col items-center justify-center gap-2 px-2 leading-tight">
               <GraduationCap size={32} className="text-[#E18FB1] stroke-1" />
               <span>{t.course.title}</span>
             </h2>
             <p className="text-gray-600 font-light text-[15px] max-w-xs mx-auto leading-relaxed">
               {t.course.headline}
             </p>
           </div>
           
           <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-black aspect-[9/16] max-w-[320px] mx-auto relative group">
             <iframe 
               width="100%" 
               height="100%" 
               src={ASSETS.courseVideo} 
               title="Brazilian Wax Training" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen
               className="absolute inset-0 w-full h-full"
             ></iframe>
             <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
           </div>

           <div className="mt-10 text-center">
             <a 
               href={currentCourseSmsLink}
               className="inline-flex items-center gap-2 border border-[#E18FB1] text-[#E18FB1] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#E18FB1] hover:text-white transition-all duration-300"
             >
               {t.course.cta}
             </a>
           </div>
        </RevealSection>

        {/* --- 3) SERVICES --- */}
        <RevealSection className="px-5 py-12 bg-white pt-4" id="services">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-[#1A1A1B] mb-3">{t.services.title}</h2>
            <p className="text-gray-500 font-light tracking-wide text-sm uppercase">{t.services.intro}</p>
          </div>

          <div className="space-y-10">
            {t.services.categories.map((cat, catIdx) => (
              <div key={catIdx} className="w-full">
                {cat.category && (
                   <h3 className="font-serif text-[#1A1A1B] text-xl mb-5 text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[1px] after:bg-[#E18FB1]/50">
                    {cat.category}
                  </h3>
                )}
                
                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => {
                    const serviceId = `service-${catIdx}-${itemIdx}`;
                    const isOpen = activeService === serviceId;

                    return (
                      <div 
                        key={itemIdx} 
                        style={{ animationDelay: `${(catIdx * 3 + itemIdx) * 100}ms` }}
                        className={`animate-fade-in-up rounded-lg border transition-all duration-300 overflow-hidden transform ${
                          isOpen 
                            ? 'bg-white border-[#E18FB1]/30 shadow-md scale-[1.01]' 
                            : 'bg-[#FDFDFD] border-gray-100 hover:border-[#E18FB1]/20 hover:-translate-y-1 hover:shadow-sm'
                        }`}
                      >
                        <button
                          onClick={() => toggleService(serviceId)}
                          className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                          aria-expanded={isOpen}
                        >
                          <span className={`font-serif text-lg pr-4 transition-colors ${isOpen ? 'text-[#E18FB1]' : 'text-gray-800 group-hover:text-gray-600'}`}>
                            {item.title}
                          </span>
                          {isOpen ? (
                            <ChevronUp size={16} className="text-[#E18FB1] flex-shrink-0" />
                          ) : (
                            <ChevronDown size={16} className="text-gray-300 flex-shrink-0 group-hover:text-[#E18FB1]/50" />
                          )}
                        </button>
                        <div 
                          className={`px-5 text-[15px] font-light text-gray-600 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                          }`}
                        >
                           <div className="pt-2 border-t border-gray-50">
                             {item.description}
                           </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* --- 4) BEFORE & AFTER --- */}
        <RevealSection className="px-6 py-14 bg-[#fafafa]" id="results">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-[#1A1A1B]">{t.results.title}</h2>
          </div>

          <div 
            className="relative rounded-sm overflow-hidden shadow-xl cursor-pointer group aspect-square bg-white mx-auto max-w-sm rotate-1 hover:rotate-0 transition-all duration-500"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="absolute inset-2 border border-white/20 z-10 pointer-events-none"></div>
            <img 
              src={ASSETS.beforeAfter} 
              alt="Before and After Results" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="bg-white/95 backdrop-blur text-gray-900 px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View Zoom
              </span>
            </div>
          </div>
          
          <div className="mt-8 text-center max-w-xs mx-auto">
            <p className="text-sm text-gray-600 font-light">{t.results.caption}</p>
            <div className="w-12 h-[1px] bg-[#E18FB1] mx-auto my-4"></div>
            <p className="text-xs text-gray-400 italic font-light">{t.results.trust}</p>
          </div>
        </RevealSection>

        {/* --- 5) FAQ --- */}
        <RevealSection className="px-6 py-14 bg-[#fafafa]">
          <h2 className="font-serif text-3xl text-[#1A1A1B] mb-10 text-center">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full py-5 px-5 text-left bg-white hover:bg-gray-50/50 flex justify-between items-center transition-colors group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-medium text-sm tracking-wide transition-colors pr-4 ${activeFaq === index ? 'text-[#E18FB1]' : 'text-gray-800'}`}>
                    {item.question}
                  </span>
                  {activeFaq === index ? (
                    <ChevronUp size={16} className="text-[#E18FB1] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-300 flex-shrink-0 group-hover:text-gray-400" />
                  )}
                </button>
                <div 
                  className={`px-5 text-gray-600 text-[15px] font-light leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* --- 6) HOURS --- */}
        <RevealSection className="px-6 py-14 bg-white">
           <h2 className="font-serif text-2xl text-[#1A1A1B] mb-8 text-center flex items-center justify-center gap-3">
             <Clock size={20} className="text-[#E18FB1]" strokeWidth={1.5} />
             {t.hours.title}
           </h2>
           <div className="bg-[#fafafa] rounded-xl p-8 shadow-inner border border-gray-100 max-w-sm mx-auto">
             <ul className="space-y-5">
               {t.hours.days.map((h, i) => (
                 <li key={i} className="flex justify-between items-center text-sm">
                   <span className="font-medium text-gray-800 uppercase tracking-wide text-xs">{h.day}</span>
                   <span className="text-gray-500 font-light">{h.time}</span>
                 </li>
               ))}
             </ul>
           </div>
        </RevealSection>

        {/* --- 7) QUICK ACTION BUTTONS --- */}
        <RevealSection className="px-6 py-10 bg-white" id="reviews">
          <div className="grid grid-cols-1 gap-4">
             <a 
              href={currentSmsLink}
              className="bg-[#E18FB1] hover:bg-[#d07a9c] text-white py-4 rounded-xl font-medium tracking-wide text-center shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.99]"
            >
              <MessageCircle size={20} /> <span className="uppercase text-sm">{t.actions.sms}</span>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a href="#services" className="bg-gray-50 hover:bg-gray-100 text-gray-700 py-3.5 rounded-xl font-medium text-center text-xs uppercase tracking-wide flex items-center justify-center border border-gray-100 transition-colors">
                {t.actions.services}
              </a>
              <a href="#results" className="bg-gray-50 hover:bg-gray-100 text-gray-700 py-3.5 rounded-xl font-medium text-center text-xs uppercase tracking-wide flex items-center justify-center border border-gray-100 transition-colors">
                {t.actions.results}
              </a>
            </div>

            <a 
              href={ASSETS.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-[#E18FB1] text-[#E18FB1] py-3.5 rounded-xl font-medium text-center hover:bg-[#E18FB1]/5 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-xs"
            >
              <Star size={16} className="fill-[#E18FB1]" /> {t.actions.reviews}
            </a>
            
            <div className="grid grid-cols-2 gap-4">
              <a href={`tel:${ASSETS.phoneRaw}`} className="bg-white border border-gray-200 text-gray-600 py-3.5 rounded-xl font-medium text-center text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                 <Phone size={16} /> {t.actions.call_text}
              </a>
              <a href={ASSETS.instagramUrl} target="_blank" rel="noreferrer" className="bg-white border border-gray-200 text-gray-600 py-3.5 rounded-xl font-medium text-center text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                 <Instagram size={16} /> {t.actions.instagram}
              </a>
            </div>
          </div>
        </RevealSection>

        {/* --- 8) MAP --- */}
        <RevealSection className="px-6 py-14 bg-[#fafafa] mb-20">
          <div className="text-center mb-8">
            <h2 className="font-serif text-xl text-[#1A1A1B] flex items-center justify-center gap-2 mb-3">
              <MapPin className="text-[#E18FB1]" size={20} strokeWidth={1.5} /> Hartford, CT
            </h2>
            <p className="text-gray-500 font-light text-sm tracking-wide">{t.map.address}</p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white h-64 mb-8">
            <iframe
              title="Dalva Machado Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.016335962386!2d-72.7118324!3d41.7667464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e653303a7457b9%3A0x6d9f83f2a5840d0!2s1840%20Park%20St%2C%20Hartford%2C%20CT%2006106!5e0!3m2!1sen!2sus!4v1709230000000!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <a 
            href={ASSETS.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center py-4 bg-white border border-gray-200 rounded-xl text-gray-800 font-medium hover:bg-gray-50 uppercase tracking-widest text-xs transition-colors"
          >
            {t.map.directions_btn}
          </a>
        </RevealSection>

        {/* --- 9) STICKY BOTTOM SMS --- */}
        <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center">
          <div className="w-full max-w-[520px] relative">
             <a 
               href={currentSmsLink}
               className="absolute bottom-6 right-6 pointer-events-auto bg-[#E18FB1] hover:bg-[#d07a9c] text-white pl-5 pr-6 py-3.5 rounded-full shadow-2xl shadow-[#E18FB1]/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group"
             >
               <MessageCircle size={22} className="group-hover:animate-pulse" strokeWidth={2} />
               <span className="font-medium text-xs uppercase tracking-wider">{t.sticky.button}</span>
             </a>
          </div>
        </div>

        {/* --- LIGHTBOX MODAL --- */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-[60] bg-white/95 flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in duration-200"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 p-2 transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
               <div className="bg-white p-2 shadow-2xl rounded-sm">
                  <img 
                    src={ASSETS.beforeAfter} 
                    alt="Full size result" 
                    className="w-full h-auto max-h-[75vh] object-contain"
                  />
               </div>
               <div className="text-center mt-6">
                  <span className="text-[#1A1A1B] text-sm font-serif tracking-wide block mb-1">
                    {t.results.caption}
                  </span>
                  <span className="text-gray-400 text-xs font-light italic">
                    Dalva Machado Beauty
                  </span>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;