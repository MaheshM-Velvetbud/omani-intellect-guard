import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const services = [
    "Trademark Registration",
    "Patent Protection",
    "Brand Monitoring",
    "IP Consultation",
    "Design Protection",
    "Violation Response"
  ];

  const quickLinks = [
    "About Us",
    "Our Services",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Emergency Support"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center bg- space-x-3 mb-6">
              <div className="w-64 h-12  rounded-lg flex items-center justify-center">
               <div className="flex items-center">
            <img
              src="/Images/logo.png"
              alt="Gulf Trade Marks Logo"
              className="h-64 w-auto"
            />
          </div>
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">Gulf Trade Marks</h3>
                <p className="text-sm text-primary-foreground/80">& Commercial Data LLC</p>
              </div> */}
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Leading intellectual property services company in Oman, protecting your valuable 
              assets with comprehensive trademark, patent, and brand monitoring solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">Al Khuwair, Sultanate of Oman</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">(+968) 24784640</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">Rayeez@rajbasso.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Gulf Trade Marks & Commercial Data LLC. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm mt-4 md:mt-0">
            Licensed by the Sultanate of Oman Ministry of Commerce & Industry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;