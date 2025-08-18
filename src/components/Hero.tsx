import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Award, FileText } from "lucide-react";

const Hero = () => {
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
            Protecting Your <span className="text-accent">Intellectual Property</span> in Oman
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Gulf Trade Marks & Commercial Data LLC - Your trusted partner for trademark registration, 
            patent protection, and comprehensive IP monitoring services.
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Brand Monitoring</h3>
              <p className="text-primary-foreground/80 text-sm">
                24/7 protection against counterfeit goods and trademark violations
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">IP Registration</h3>
              <p className="text-primary-foreground/80 text-sm">
                Complete trademark, patent, and design registration services
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Expert Consultation</h3>
              <p className="text-primary-foreground/80 text-sm">
                Professional guidance from certified IP specialists
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 text-lg">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-primary-foreground hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;