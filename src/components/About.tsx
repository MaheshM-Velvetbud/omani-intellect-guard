import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "1000+", label: "Trademarks Protected" },
    { number: "50+", label: "Countries Covered" },
    { number: "24/7", label: "Monitoring Service" }
  ];

  const achievements = [
    "Certified intellectual property specialists",
    "Established network of local and international agents",
    "Comprehensive information portfolio management system",
    "Quick response team for IP violations",
    "Expert knowledge of Omani and international IP law",
    "Proven track record in brand protection"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About <span className="text-primary">Gulf Trade Marks</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Gulf Trade Marks & Commercial Data LLC is a leading intellectual property services company 
                in the Sultanate of Oman, specializing in comprehensive trademark registration, patent protection, 
                and brand monitoring services.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of certified specialists works around the clock to protect your valuable intellectual 
                property assets from counterfeit goods and unauthorized use. We coordinate with local agents 
                and maintain an extensive international network to ensure comprehensive protection.
              </p>

              <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats and Features */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center shadow-card hover:shadow-luxury transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-primary shadow-luxury">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary-foreground mb-2">Expert Team</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Certified IP specialists with extensive experience
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-accent shadow-luxury">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-accent-foreground mb-2">Global Reach</h3>
                    <p className="text-accent-foreground/90 text-sm">
                      International network for comprehensive protection
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;