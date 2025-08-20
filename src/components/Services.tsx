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
      featureKeys: ["secureStorage", "easyAccess", "docManagement", "portfolioAnalytics"]
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
            <Card key={index} className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 ${language === 'ar' ? 'text-right' : ''}`}>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${language === 'ar' ? 'ml-auto' : ''}`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {t(service.descKey)}
                </CardDescription>
                <ul className="space-y-2">
                  {service.featureKeys.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm text-muted-foreground ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-2 h-2 bg-accent rounded-full flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></div>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;