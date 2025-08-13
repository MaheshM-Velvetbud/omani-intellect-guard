import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, FileCheck, Database, Users, AlertTriangle, Globe } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Trademark Monitoring",
    description: "Comprehensive surveillance of your intellectual property rights with real-time alerts for potential violations and counterfeit activities.",
    features: ["24/7 monitoring", "Global database search", "Instant violation alerts", "Detailed reports"]
  },
  {
    icon: FileCheck,
    title: "IP Registration Services",
    description: "Complete registration process for trademarks, patents, and designs with expert guidance through all legal procedures.",
    features: ["Trademark registration", "Patent applications", "Design protection", "Legal documentation"]
  },
  {
    icon: Database,
    title: "Information Portfolio",
    description: "Secure digital repository for all your intellectual property data, specifications, and legal documentation.",
    features: ["Secure data storage", "Easy access", "Document management", "Portfolio analytics"]
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Professional guidance from certified IP specialists who coordinate with local agents and international networks.",
    features: ["Certified specialists", "Local expertise", "International network", "Strategic advice"]
  },
  {
    icon: AlertTriangle,
    title: "Violation Protection",
    description: "Proactive measures to prevent import of counterfeit goods and quick response to rights violations.",
    features: ["Counterfeit prevention", "Quick response", "Legal action support", "Rights enforcement"]
  },
  {
    icon: Globe,
    title: "International Coverage",
    description: "Global intellectual property protection with comprehensive coverage across international markets and jurisdictions.",
    features: ["Global reach", "Multi-jurisdiction", "International law", "Cross-border protection"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive <span className="text-primary">IP Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protecting your intellectual property with cutting-edge monitoring technology, 
            expert legal guidance, and comprehensive coverage across all jurisdictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
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