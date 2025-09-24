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
    heroTitle: "Protecting Your Intellectual Property in Oman & Worldwide",
    heroSubtitle: "Gulf Trade Marks & Commercial Data LLC - Your trusted partner for trademark registration, patent protection, and comprehensive IP monitoring services.",
    brandMonitoring: "Brand Monitoring",
    brandMonitoringDesc: "24/7 protection against counterfeit goods and trademark violations",
    ipRegistration: "IP Registration", 
    ipRegistrationDesc: "Complete trademark, patent, and design registration services",
    expertConsultation: "Expert Consultation",
    expertConsultationDesc: "Professional guidance from certified IP specialists",
    getStarted: "Get Started Today",
    learnMore: "Learn More",
    
    // Services
    servicesTitle: "Comprehensive IP Services",
    servicesSubtitle: "Protecting your intellectual property with cutting-edge monitoring technology, expert legal guidance, and comprehensive coverage across all jurisdictions.",
    trademarkMonitoring: "Trademark Monitoring",
    trademarkMonitoringDesc: "Comprehensive surveillance of your intellectual property rights with real-time alerts for potential violations and counterfeit activities.",
    ipRegistrationServices: "IP Registration Services",
    ipRegistrationServicesDesc: "Complete registration process for trademarks, patents, and designs with expert guidance through all legal procedures.",
    informationPortfolio: "Information Portfolio",
    informationPortfolioDesc: "Secure digital repository for all your intellectual property data, specifications, and legal documentation.",
    expertConsultationService: "Expert Consultation",
    expertConsultationServiceDesc: "Professional guidance from certified IP specialists who coordinate with local agents and international networks.",
    violationProtection: "Violation Protection",
    violationProtectionDesc: "Proactive measures to prevent import of counterfeit goods and quick response to rights violations.",
    internationalCoverage: "International Coverage",
    internationalCoverageDesc: "Global intellectual property protection with comprehensive coverage across international markets and jurisdictions.",
    
    // Service Features
    monitoring247: "24/7 monitoring",
    globalDatabase: "Global database search",
    violationAlerts: "Instant violation alerts",
    detailedReports: "Detailed reports",
    trademarkReg: "Trademark registration",
    patentApps: "Patent applications",
    designProtection: "Design protection",
    legalDocs: "Legal documentation",
    secureStorage: "Secure data storage",
    easyAccess: "Easy access",
    docManagement: "Document management",
    portfolioAnalytics: "Portfolio analytics",
    certifiedSpecs: "Certified specialists",
    localExpertise: "Local expertise",
    intNetwork: "International network",
    strategicAdvice: "Strategic advice",
    counterfeitPrev: "Counterfeit prevention",
    quickResponse: "Quick response",
    legalSupport: "Legal action support",
    rightsEnforcement: "Rights enforcement",
    globalReach: "Global reach",
    multiJurisdiction: "Multi-jurisdiction",
    internationalLaw: "International law",
    crossBorderProt: "Cross-border protection",
    
    // About
    aboutTitle: "About Gulf Trade Marks",
    aboutDescription: "Gulf Trade Marks & Commercial Data LLC is a leading intellectual property services company in the Sultanate of Oman, specializing in comprehensive trademark registration, patent protection, and brand monitoring services.",
    aboutDescription2: "Our team of certified specialists works around the clock to protect your valuable intellectual property assets from counterfeit goods and unauthorized use. We coordinate with local agents and maintain an extensive international network to ensure comprehensive protection.",
    yearsExp: "Years of Experience",
    trademarksProtected: "Trademarks Protected", 
    countriesCovered: "Countries Covered",
    monitoringService: "Monitoring Service",
    expertTeam: "Expert Team",
    expertTeamDesc: "Certified IP specialists with extensive experience",
    globalReachTitle: "Global Reach",
    globalReachDesc: "International network for comprehensive protection",
    
    // About Achievements
    certifiedSpecs2: "Certified intellectual property specialists",
    establishedNetwork: "Established network of local and international agents",
    portfolioSystem: "Comprehensive information portfolio management system",
    quickResponseTeam: "Quick response team for IP violations",
    expertKnowledge: "Expert knowledge of Omani and international IP law",
    provenTrack: "Proven track record in brand protection",
    
    // Contact
    contactTitle: "Get In Touch",
    contactSubtitle: "Ready to protect your intellectual property? Contact our experts for a consultation.",
    sendMessage: "Send us a Message",
    contactFormDesc: "Fill out the form below and our IP specialists will contact you within 24 hours.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    companyName: "Company Name",
    message: "Message",
    fullNamePlaceholder: "Your full name",
    emailPlaceholder: "your.email@company.com",
    companyPlaceholder: "Your company name",
    messagePlaceholder: "Tell us about your intellectual property needs...",
    sendMessageBtn: "Send Message",
    contactInfo: "Contact Information",
    address: "Address",
    addressValue: "Al Khuwair, Sultanate of Oman\nP.O. Box 3888, Postal Code 112",
    phoneNumbers: "Phone Numbers",
    email: "Email",
    businessHours: "Business Hours",
    businessHoursValue: "Sunday - Thursday: 8:00 AM - 6:00 PM\nFriday - Saturday: Closed",
    
    // Blog translations
    loading: "Loading...",
    blogPostError: "Failed to load blog post",
    backToBlog: "Back to Blog",
    published: "Published",
    needHelp: "Need Immediate Assistance?",
    needHelpDesc: "Our emergency IP protection hotline is available 24/7 for urgent trademark violations.",
    callEmergency: "Call Emergency Line",
    messageSent: "Message Sent",
    messageSentDesc: "Thank you for contacting us. We'll get back to you within 24 hours.",
    
    // Blog
    blogTitle: "Latest IP Insights",
    blogSubtitle: "Stay updated with the latest news and insights in intellectual property protection and trademark law.",
    readMore: "Read More",
    
    // Testimonials
    testimonialsTitle: "Client Testimonials",
    testimonialsSubtitle: "Hear what our clients say about our professional IP protection services",
    partnersTitle: "Our Partners are Associated with",
    
    // Footer
    footerCompanyDesc: "Gulf Trade Marks & Commercial Data LLC is your trusted partner for comprehensive intellectual property protection services in Oman and worldwide.",
    addressShort: "Al Khuwair, Sultanate of Oman",
    footerOurServices: "Our Services",
    footerQuickLinks: "Quick Links",
    footerCopyright: "© 2024 Gulf Trade Marks & Commercial Data LLC. All rights reserved.",
    footerLicensedBy: "Licensed by Ministry of Commerce, Industry and Investment Promotion",
    
    // Service items for footer
    serviceTrademarkRegistration: "Trademark Registration",
    servicePatentProtection: "Patent Protection", 
    serviceBrandMonitoring: "Brand Monitoring",
    serviceIpConsultation: "IP Consultation",
    serviceDesignProtection: "Design Protection",
    serviceViolationResponse: "Violation Response",
    
    // Quick links for footer
    aboutUs: "About Us",
    ourServices: "Our Services",
    contactUs: "Contact Us", 
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    emergencySupport: "Emergency Support"
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
    heroTitle: "حماية الملكية الفكرية في عُمان",
    heroSubtitle: "شركة الخليج للعلامات التجارية والبيانات التجارية  شريكك الموثوق لتسجيل العلامات التجارية وحماية براءات الاختراع وخدمات مراقبة الملكية الفكرية الشاملة.",
    brandMonitoring: "مراقبة العلامة التجارية",
    brandMonitoringDesc: "حماية على مدار الساعة ضد السلع المقلدة وانتهاكات العلامات التجارية",
    ipRegistration: "تسجيل الملكية الفكرية",
    ipRegistrationDesc: "خدمات تسجيل شاملة للعلامات التجارية وبراءات الاختراع والتصاميم",
    expertConsultation: "استشارة الخبراء",
    expertConsultationDesc: "توجيه مهني من متخصصي الملكية الفكرية المعتمدين",
    getStarted: "ابدأ اليوم",
    learnMore: "تعرف أكثر",
    
    // Services
    servicesTitle: "خدمات الملكية الفكرية الشاملة",
    servicesSubtitle: "حماية الملكية الفكرية الخاصة بك بتقنية المراقبة المتطورة، والتوجيه القانوني المتخصص، والتغطية الشاملة في كل نطاقات السلطة القانونية.",
    trademarkMonitoring: "مراقبة العلامات التجارية",
    trademarkMonitoringDesc: "مراقبة شاملة لحقوق الملكية الفكرية مع تنبيهات فورية للانتهاكات المحتملة وأنشطة التقليد.",
    ipRegistrationServices: "خدمات تسجيل الملكية الفكرية",
    ipRegistrationServicesDesc: "عملية تسجيل كاملة للعلامات التجارية وبراءات الاختراع والتصاميم مع إرشادات الخبراء خلال جميع الإجراءات القانونية.",
    informationPortfolio: "محفظة المعلومات",
    informationPortfolioDesc: "مستودع رقمي آمن لجميع بيانات الملكية الفكرية والمواصفات والوثائق القانونية.",
    expertConsultationService: "استشارة الخبراء",
    expertConsultationServiceDesc:"إرشاد مهني من متخصّصي الملكية الفكرية المعتمدين بالتنسيق مع الوكلاء المحليين والشبكات الدولية.",
    violationProtection: "حماية من الانتهاكات",
    violationProtectionDesc: "إجراءات استباقية لمنع استيراد السلع المقلدة ونطاقات السلطة القانونية الحقوق.",
    internationalCoverage: "التغطية الدولية",
    internationalCoverageDesc: "حماية الملكية الفكرية العالمية مع تغطية شاملة عبر الأسواق ونطاقات السلطة القانونية",
    
    // Service Features
    monitoring247: "مراقبة على مدار الساعة",
    globalDatabase: "البحث في قاعدة البيانات العالمية",
    violationAlerts: "تنبيهات انتهاك فورية",
    detailedReports: "تقارير مفصلة",
    trademarkReg: "تسجيل العلامات التجارية",
    patentApps: "طلبات براءات الاختراع",
    designProtection: "حماية التصاميم",
    legalDocs: "الوثائق القانونية",
    secureStorage: "تخزين آمن للبيانات",
    easyAccess: "وصول سهل",
    docManagement: "إدارة الوثائق",
    portfolioAnalytics: "تحليلات المحفظة",
    certifiedSpecs: "متخصصون معتمدون",
    localExpertise: "خبرة محلية",
    intNetwork: "الشبكة الدولية",
    strategicAdvice: "المشورة الاستراتيجية",
    counterfeitPrev: "منع التقليد",
    quickResponse: "استجابة سريعة",
    legalSupport: "دعم العمل القانوني",
    rightsEnforcement: "تطبيق الحقوق",
    globalReach: "الوصول العالمي",
    multiJurisdiction:"تعدد نطاقات السلطة القانونية",
    internationalLaw: "القانون الدولي",
    crossBorderProt: "الحماية عبر الحدود",
    
    // About
    aboutTitle: "عن شركة الخليج للعلامات التجارية",
    aboutDescription: "شركة الخليج للعلامات التجارية والبيانات التجارية المحدودة هي شركة رائدة في خدمات الملكية الفكرية في سلطنة عُمان، متخصصة في تسجيل العلامات التجارية الشامل وحماية براءات الاختراع وخدمات مراقبة العلامة التجارية.",
    aboutDescription2: "يعمل فريق المتخصصين المعتمدين لدينا على مدار الساعة لحماية أصول الملكية الفكرية القيمة من السلع المقلدة والاستخدام الغير مصرح به. كما نقوم بالتنسيق مع الوكلاء المحليين ونحتفظ بشبكة دولية واسعة لضمان الحماية الشاملة.",
    yearsExp: "سنوات من الخبرة",
    trademarksProtected: "العلامات التجارية المحمية",
    countriesCovered: "البلدان المغطاة",
    monitoringService: "خدمة المراقبة",
    expertTeam: "فريق الخبراء",
    expertTeamDesc: "متخصصو الملكية الفكرية المعتمدون مع خبرة واسعة",
    globalReachTitle: "الوصول العالمي",
    globalReachDesc: "شبكة دولية للحماية الشاملة",
    
    // About Achievements
    certifiedSpecs2: "متخصصو الملكية الفكرية المعتمدون",
    establishedNetwork: "شبكة راسخة من الوكلاء المحليين والدوليين",
    portfolioSystem: "نظام إدارة محفظة معلومات شامل",
    quickResponseTeam: "فريق استجابة سريع لانتهاكات الملكية الفكرية",
    expertKnowledge: "معرفة الخبراء في القانون العُماني والدولي للملكية الفكرية",
    provenTrack: "سجل حافل مثبت في حماية العلامة التجارية",
    
    // Contact
    contactTitle: "تواصل معنا",
    contactSubtitle: "مستعد لحماية ملكيتك الفكرية؟ اتصل بخبرائنا للحصول على استشارة.",
    sendMessage: "أرسل لنا رسالة",
    contactFormDesc: "املأ النموذج أدناه وسيتصل بك متخصصو الملكية الفكرية لدينا في غضون 24 ساعة.",
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    companyName: "اسم الشركة",
    message: "الرسالة",
    fullNamePlaceholder: "اسمك الكامل",
    emailPlaceholder: "your.email@company.com",
    companyPlaceholder: "اسم شركتك",
    messagePlaceholder: "أخبرنا عن احتياجات الملكية الفكرية الخاصة بك...",
    sendMessageBtn: "إرسال الرسالة",
    contactInfo: "معلومات الاتصال",
    address: "العنوان",
    addressValue: "الخوير، سلطنة عُمان\nص.ب 3888، الرمز البريدي 112",
    phoneNumbers: "أرقام الهاتف",
    email: "البريد الإلكتروني",
    businessHours: "ساعات العمل",
    businessHoursValue: "الأحد - الخميس: 8:00 صباحاً - 6:00 مساءً\nالجمعة - السبت: مغلق",
    
    // Blog translations
    loading: "جارٍ التحميل...",
    blogPostError: "فشل في تحميل المقال",
    backToBlog: "العودة إلى المدونة",
    published: "تاريخ النشر",
    needHelp: "تحتاج مساعدة فورية؟",
    needHelpDesc: "خط المساعدة الطارئ لحماية الملكية الفكرية متاح على مدار الساعة طوال أيام الأسبوع للانتهاكات العاجلة للعلامات التجارية.",
    callEmergency: "اتصل بخط الطوارئ",
    messageSent: "تم إرسال الرسالة",
    messageSentDesc: "شكراً لتواصلك معنا. سنعاود الاتصال بك في غضون 24 ساعة.",
    
    // Blog
    blogTitle: "أحدث رؤى الملكية الفكرية",
    blogSubtitle: "ابق على اطلاع بأحدث الأخبار والرؤى في حماية الملكية الفكرية وقانون العلامات التجارية.",
    readMore: "اقرأ المزيد",
    
    // Testimonials
    testimonialsTitle: "شهادات العملاء",
    testimonialsSubtitle: "اسمع ما يقوله عملاؤنا حول خدمات حماية الملكية الفكرية المهنية لدينا",
    partnersTitle: "شركاؤنا مرتبطون بـ",
    
    // Footer
    footerCompanyDesc: " شركة الخليج للعلامات التجارية والبيانات التجارية هي شريكك الموثوق للخدمات الشاملة",
   
    addressShort: "الخوير، سلطنة عُمان",
    footerOurServices: "خدماتنا",
    footerQuickLinks: "روابط سريعة",
    footerCopyright: "© 2024 شركة الخليج للعلامات التجارية والبيانات التجارية  جميع الحقوق محفوظة.",
    footerLicensedBy: "مرخصة من وزارة التجارة والصناعة وترويج الاستثمار",
    
    // Service items for footer
    serviceTrademarkRegistration: "تسجيل العلامات التجارية",
    servicePatentProtection: "حماية براءات الاختراع",
    serviceBrandMonitoring: "مراقبة العلامة التجارية", 
    serviceIpConsultation: "استشارة الملكية الفكرية",
    serviceDesignProtection: "حماية التصاميم",
    serviceViolationResponse: "الاستجابة للانتهاكات",
    
    // Quick links for footer
    aboutUs: "عن الشركة",
    ourServices: "خدماتنا",
    contactUs: "اتصل بنا",
    privacyPolicy: "سياسة الخصوصية", 
    termsOfService: "شروط الخدمة",
    emergencySupport: "الدعم الطارئ"
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
      <div className={`${language === 'ar' ? 'rtl' : 'ltr'} ${language === 'ar' ? 'font-arabic' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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