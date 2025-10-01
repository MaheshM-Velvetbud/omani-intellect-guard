import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Award, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            {t("heroTitle")} <span className="text-accent"></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            {t("heroSubtitle")}
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{t("brandMonitoring")}</h3>
              <p className="text-primary-foreground/80 text-sm">
                {t("brandMonitoringDesc")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{t("ipRegistration")}</h3>
              <p className="text-primary-foreground/80 text-sm">
                {t("ipRegistrationDesc")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{t("expertConsultation")}</h3>
              <p className="text-primary-foreground/80 text-sm">
                {t("expertConsultationDesc")}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
               <Button variant="secondary" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 text-lg">
              {t("getStarted")}
            </Button>
            </a>
           
            <a href="#services">
              <Button variant="outline" size="lg" className="border-white/30 bg-gray-600 text-primary-foreground hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              {t("learnMore")}
            </Button>
            </a>
            
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;