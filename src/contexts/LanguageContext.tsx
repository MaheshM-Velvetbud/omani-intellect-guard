import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services", 
    about: "About",
    blog: "Blog",
    contact: "Contact",
    consultation: "Get Consultation",
    
    // Hero
    heroTitle: "Protecting Your Intellectual Property Rights",
    heroSubtitle: "Gulf Trade Marks & Commercial Data LLC - Your trusted partner for trademark registration, patent protection, and comprehensive IP monitoring services in Oman and internationally.",
    
    // Services
    servicesTitle: "Comprehensive IP Services",
    servicesSubtitle: "Protecting your intellectual property with cutting-edge monitoring technology, expert legal guidance, and comprehensive coverage across all jurisdictions.",
    
    // About
    aboutTitle: "About Gulf Trade Marks",
    
    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to protect your intellectual property? Contact our expert team for professional consultation and comprehensive IP services.",
    
    // Testimonials
    testimonialsTitle: "Client Testimonials",
    testimonialsSubtitle: "Hear what our clients say about our professional IP protection services"
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "الخدمات",
    about: "عن الشركة", 
    blog: "المدونة",
    contact: "اتصل بنا",
    consultation: "احصل على استشارة",
    
    // Hero
    heroTitle: "حماية حقوق الملكية الفكرية الخاصة بك",
    heroSubtitle: "شركة الخليج للعلامات التجارية والبيانات التجارية المحدودة - شريكك الموثوق لتسجيل العلامات التجارية وحماية براءات الاختراع وخدمات مراقبة الملكية الفكرية الشاملة في عمان ودولياً.",
    
    // Services
    servicesTitle: "خدمات الملكية الفكرية الشاملة",
    servicesSubtitle: "حماية الملكية الفكرية الخاصة بك بتقنية المراقبة المتطورة، والتوجيه القانوني المتخصص، والتغطية الشاملة عبر جميع الولايات القضائية.",
    
    // About
    aboutTitle: "عن شركة الخليج للعلامات التجارية",
    
    // Contact
    contactTitle: "تواصل معنا",
    contactSubtitle: "مستعد لحماية ملكيتك الفكرية؟ اتصل بفريق الخبراء لدينا للحصول على استشارة مهنية وخدمات الملكية الفكرية الشاملة.",
    
    // Testimonials
    testimonialsTitle: "شهادات العملاء",
    testimonialsSubtitle: "اسمع ما يقوله عملاؤنا حول خدمات حماية الملكية الفكرية المهنية لدينا"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};