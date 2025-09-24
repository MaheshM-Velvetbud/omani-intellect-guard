import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { language, t } = useLanguage();

  const stats = [
    { number: "15+", labelKey: "yearsExp" },
    { number: "1000+", labelKey: "trademarksProtected" },
    { number: "50+", labelKey: "countriesCovered" },
    { number: "24/7", labelKey: "monitoringService" }
  ];

  const achievementKeys = [
    "certifiedSpecs2",
    "establishedNetwork", 
    "portfolioSystem",
    "quickResponseTeam",
    "expertKnowledge",
    "provenTrack"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${language === 'ar' ? 'lg:grid-cols-2' : ''}`}>
            {/* Stats and Features - Left side in Arabic, Right side in English */}
            <div className={`space-y-8 ${language === 'ar' ? 'lg:order-1' : 'lg:order-2'}`}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center shadow-card hover:shadow-luxury transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{t(stat.labelKey)}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-primary shadow-luxury">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-2">{t("expertTeam")}</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {t("expertTeamDesc")}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-accent shadow-luxury">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-accent-foreground mb-2">{t("globalReachTitle")}</h3>
                    <p className="text-accent-foreground/90 text-sm">
                      {t("globalReachDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content - Right side in Arabic, Left side in English */}
            <div className={language === 'ar' ? 'text-right lg:order-2' : 'lg:order-1'}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t("aboutTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("aboutDescription")}
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("aboutDescription2")}
              </p>

              <div className="space-y-4 mb-8">
                {achievementKeys.map((achievementKey, index) => (
                  <div key={index} className={`flex items-center ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-3 justify-start' : 'space-x-3'}`}>
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{t(achievementKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;