import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: t("messageSent"),
      description: t("messageSentDesc"),
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("contactTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto ${language === 'ar' ? 'lg:grid-cols-2' : ''}`}>
          {/* Contact Form */}
          <Card className={`shadow-card ${language === 'ar' ? 'lg:order-2' : ''}`}>
            <CardHeader>
              <CardTitle className={`text-2xl text-foreground ${language === 'ar' ? 'text-right' : ''}`}>{t("sendMessage")}</CardTitle>
              <CardDescription className={language === 'ar' ? 'text-right' : ''}>
                {t("contactFormDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={language === 'ar' ? 'text-right block' : ''}>{t("fullName")} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t("fullNamePlaceholder")}
                      className={language === 'ar' ? 'text-right' : ''}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={language === 'ar' ? 'text-right block' : ''}>{t("emailAddress")} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t("emailPlaceholder")}
                      className={language === 'ar' ? 'text-right' : ''}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className={language === 'ar' ? 'text-right block' : ''}>{t("companyName")}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("companyPlaceholder")}
                    className={language === 'ar' ? 'text-right' : ''}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className={language === 'ar' ? 'text-right block' : ''}>{t("message")} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t("messagePlaceholder")}
                    rows={6}
                    className={language === 'ar' ? 'text-right' : ''}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 font-semibold">
                  {t("sendMessageBtn")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-8 ${language === 'ar' ? 'lg:order-1' : ''}`}>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className={`text-2xl text-foreground ${language === 'ar' ? 'text-right' : ''}`}>{t("contactInfo")}</CardTitle>
                <CardDescription className={language === 'ar' ? 'text-right' : ''}>
                  Gulf Trade Marks & Commercial Data LLC
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
              <div className={`flex items-start ${language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
  {language !== 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <MapPin className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
  <div className={`${language === 'ar' ? 'text-right pr-4' : 'ml-4'}`}>
    <h4 className="font-semibold text-foreground mb-1">{t("address")}</h4>
    <p className="text-muted-foreground whitespace-pre-line">{t("addressValue")}</p>
  </div>
  {language === 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <MapPin className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
</div>
                
                
               <div className={`flex items-start ${language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
  {language !== 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <Phone className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
  <div className={`${language === 'ar' ? 'text-right pr-4' : 'ml-4'}`}>
    <h4 className="font-semibold text-foreground mb-1">{t("phoneNumbers")}</h4>
    <p className="text-muted-foreground" dir="ltr">
      (+968) 24784640<br />
      (+968) 24796217<br />
      (+968) 24485848
    </p>
  </div>
  {language === 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <Phone className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
</div>
                
                <div className={`flex items-start ${language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
  {language !== 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <Mail className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
  <div className={`${language === 'ar' ? 'text-right pr-4' : 'ml-4'}`}>
    <h4 className="font-semibold text-foreground mb-1">{t("email")}</h4>
    <p className="text-muted-foreground">
      Rayeez@rajbasso.com
    </p>
  </div>
  {language === 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <Mail className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
</div>
                
               <div className={`flex items-start ${language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
  {language !== 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <Clock className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
  <div className={`${language === 'ar' ? 'text-right pr-4' : 'ml-4'}`}>
    <h4 className="font-semibold text-foreground mb-1">{t("businessHours")}</h4>
    <p className="text-muted-foreground whitespace-pre-line">
      {t("businessHoursValue")}
    </p>
  </div>
  {language === 'ar' && (
    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
      <Clock className="w-6 h-6 text-primary-foreground" />
    </div>
  )}
</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary shadow-luxury">
              <CardContent className={`p-8 text-center ${language === 'ar' ? 'text-center' : ''}`}>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {t("needHelp")}
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  {t("needHelpDesc")}
                </p>
                <Button variant="secondary" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  {t("callEmergency")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;