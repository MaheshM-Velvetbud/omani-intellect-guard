import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = {
  en: [
    {
      name: "Ahmed Al-Rashid",
      company: "Al-Rashid Trading LLC",
      content: "Gulf Trade Marks provided exceptional service in protecting our brand. Their monitoring system detected violations quickly, and their team acted promptly to resolve issues. Highly recommended!",
      rating: 5,
      position: "CEO"
    },
    {
      name: "Sarah Mohammed",
      company: "Innovative Solutions Co.",
      content: "The comprehensive IP portfolio management has been invaluable for our business. The team's expertise in international trademark law is outstanding.",
      rating: 5,
      position: "Legal Director"
    },
    {
      name: "Omar Al-Balushi",
      company: "Heritage Crafts",
      content: "Professional, reliable, and thorough. They helped us register our traditional craft designs and provided continuous monitoring services. Excellent work!",
      rating: 5,
      position: "Founder"
    },
    {
      name: "Fatima Al-Zahra",
      company: "Modern Enterprises",
      content: "Their 24/7 monitoring service gave us peace of mind. When counterfeit products appeared in the market, they immediately alerted us and helped take action.",
      rating: 5,
      position: "Brand Manager"
    },
    {
      name: "Khalid Al-Mandhari",
      company: "Tech Innovations",
      content: "Gulf Trade Marks' expert consultation helped us navigate complex international patent applications. Their knowledge and professionalism are unmatched.",
      rating: 5,
      position: "CTO"
    }
  ],
  ar: [
    {
      name: "أحمد الراشد",
      company: "شركة الراشد التجارية المحدودة",
      content: "قدمت شركة الخليج للعلامات التجارية خدمة استثنائية في حماية علامتنا التجارية. نظام المراقبة الخاص بهم اكتشف الانتهاكات بسرعة، وتصرف فريقهم بسرعة لحل المشاكل. أنصح بشدة!",
      rating: 5,
      position: "الرئيس التنفيذي"
    },
    {
      name: "سارة محمد",
      company: "شركة الحلول المبتكرة",
      content: "إدارة محفظة الملكية الفكرية الشاملة كانت لا تقدر بثمن لأعمالنا. خبرة الفريق في قانون العلامات التجارية الدولي متميزة.",
      rating: 5,
      position: "مدير قانوني"
    },
    {
      name: "عمر البلوشي", 
      company: "الحرف التراثية",
      content: "مهنية وموثوقية وشمولية. ساعدونا في تسجيل تصاميم الحرف التقليدية وقدموا خدمات مراقبة مستمرة. عمل ممتاز!",
      rating: 5,
      position: "المؤسس"
    },
    {
      name: "فاطمة الزهراء",
      company: "المؤسسات الحديثة", 
      content: "خدمة المراقبة على مدار الساعة أعطتنا راحة البال. عندما ظهرت منتجات مقلدة في السوق، نبهونا فوراً وساعدوا في اتخاذ الإجراءات.",
      rating: 5,
      position: "مدير العلامة التجارية"
    },
    {
      name: "خالد المندهري",
      company: "الابتكارات التقنية",
      content: "استشارة خبراء الخليج للعلامات التجارية ساعدتنا في التنقل عبر طلبات براءات الاختراع الدولية المعقدة. معرفتهم ومهنيتهم لا مثيل لها.",
      rating: 5,
      position: "مدير التقنية"
    }
  ]
};

const Testimonials = () => {
  const { language, t } = useLanguage();
  const currentTestimonials = testimonials[language];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("testimonialsTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {currentTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-accent mr-3 flex-shrink-0" />
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="mt-auto">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                        <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;