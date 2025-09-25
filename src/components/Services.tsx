import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, FileCheck, Database, Users, AlertTriangle, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { language, t } = useLanguage();
  
  const services = [
    {
      icon: Eye,
      titleKey: "trademarkMonitoring",
      descKey: "trademarkMonitoringDesc",
      featureKeys: ["monitoring247", "globalDatabase", "violationAlerts", "detailedReports"]
    },
    {
      icon: FileCheck,
      titleKey: "ipRegistrationServices",
      descKey: "ipRegistrationServicesDesc",
      featureKeys: ["trademarkReg", "patentApps", "designProtection", "legalDocs"]
    },
    {
      icon: Database,
      titleKey: "informationPortfolio",
      descKey: "informationPortfolioDesc",
      featureKeys: ["secureStorage", "easyAccess", "docManagement"]
    },
    {
      icon: Users,
      titleKey: "expertConsultationService",
      descKey: "expertConsultationServiceDesc",
      featureKeys: ["certifiedSpecs", "localExpertise", "intNetwork", "strategicAdvice"]
    },
    {
      icon: AlertTriangle,
      titleKey: "violationProtection",
      descKey: "violationProtectionDesc",
      featureKeys: ["counterfeitPrev", "quickResponse", "legalSupport", "rightsEnforcement"]
    },
    {
      icon: Globe,
      titleKey: "internationalCoverage",
      descKey: "internationalCoverageDesc",
      featureKeys: ["globalReach", "multiJurisdiction", "internationalLaw", "crossBorderProt"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("servicesTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("servicesSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <CardHeader className={`pb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className={`w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${language === 'ar' ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className={`text-xl font-bold text-foreground group-hover:text-primary transition-colors ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className={language === 'ar' ? 'text-right' : 'text-left'}>
                <CardDescription className={`text-muted-foreground mb-6 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t(service.descKey)}
                </CardDescription>
                <ul dir={language === 'ar' ? 'rtl' : 'ltr'} className={`space-y-2 list-none ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  
    {service.featureKeys.map((featureKey, featureIndex) => (
  <li
    key={featureIndex}
    // Combined flex properties and conditional classes for justification and order
    className={`flex items-center text-sm text-muted-foreground gap-3 mt-1 ${
      language === 'ar' 
        ? 'justify-end flex-row-reverse' // Justify right and reverse child order for RTL
        : 'justify-start'                 // Justify left (default order) for LTR
    }`}
  >
    {/* The bullet/dot - Note: Removed 'mt-1' here and moved it to the <li> */}
    { 
    <span
      className={`w-2 h-2 rounded-full ${
        language === 'ar' ? '' : 'bg-accent'
      }`}
    ></span>
    }
    {/* The feature key text */}
    <span
      // Text alignment is often handled by the parent's justification, 
      // but explicitly setting 'text-right' for 'ar' is a good safety measure.
      className={language === 'ar' ? 'text-right' : 'text-left'}
    >
      {t(featureKey)}
       
    </span>
     <span
      className={`w-2 h-2 rounded-full ${
        language === 'ar' ? 'bg-yellow-400' : ''
      }`}
    ></span>
  </li>
))}          </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;