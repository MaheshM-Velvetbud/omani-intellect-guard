import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { language, t } = useLanguage();
  
  const blogPosts = {
    en: [
      {
        title: "New Trademark Laws in Oman 2024",
        description: "Understanding the latest updates to intellectual property legislation in the Sultanate of Oman and how they affect your business.",
        image: "/Images/blog1.jpg",
        date: "December 15, 2024",
        author: "Legal Team",
        category: "Legal Updates"
      },
      {
        title: "Protecting Your Brand in Digital Age",
        description: "Essential strategies for safeguarding your intellectual property in the era of e-commerce and digital transformation.",
        image: "/Images/blog2.jpg", 
        date: "December 10, 2024",
        author: "IP Specialists",
        category: "Brand Protection"
      },
      {
        title: "International Patent Filing Guide",
        description: "A comprehensive guide to filing patents internationally and navigating complex global IP regulations.",
        image: "/Images/blog3.jpg",
        date: "December 5, 2024",
        author: "Patent Experts",
        category: "Patents"
      },
      {
        title: "Counterfeit Goods: Prevention Strategies",
        description: "How to identify and prevent counterfeit products from damaging your brand reputation and business revenue.",
        image: "/Images/blog4.jpg",
        date: "November 28, 2024", 
        author: "Monitoring Team",
        category: "Anti-Counterfeiting"
      },
      {
        title: "GCC Trademark Registration Process",
        description: "Step-by-step guide to registering your trademark across Gulf Cooperation Council countries.",
        image: "/Images/blog5.jpg",
        date: "November 20, 2024",
        author: "Regional Experts",
        category: "Registration"
      },
      {
        title: "IP Portfolio Management Best Practices",
        description: "Effective strategies for managing and maintaining your intellectual property portfolio for maximum protection.",
        image: "/Images/blog6.jpg",
        date: "November 15, 2024",
        author: "Portfolio Managers",
        category: "Management"
      }
    ],
    ar: [
      {
        title: "قوانين العلامات التجارية الجديدة في عُمان 2024",
        description: "فهم أحدث التحديثات على تشريعات الملكية الفكرية في سلطنة عُمان وكيف تؤثر على أعمالك.",
        image: "/Images/blog1.jpg",
        date: "15 ديسمبر 2024",
        author: "الفريق القانوني",
        category: "التحديثات القانونية"
      },
      {
        title: "حماية علامتك التجارية في العصر الرقمي",
        description: "الاستراتيجيات الأساسية لحماية الملكية الفكرية في عصر التجارة الإلكترونية والتحول الرقمي.",
        image: "/Images/blog2.jpg",
        date: "10 ديسمبر 2024", 
        author: "متخصصو الملكية الفكرية",
        category: "حماية العلامة التجارية"
      },
      {
        title: "دليل تقديم براءات الاختراع الدولية",
        description: "دليل شامل لتقديم براءات الاختراع دولياً والتنقل عبر لوائح الملكية الفكرية العالمية المعقدة.",
        image: "/Images/blog3.jpg",
        date: "5 ديسمبر 2024",
        author: "خبراء براءات الاختراع",
        category: "براءات الاختراع"
      },
      {
        title: "السلع المقلدة: استراتيجيات الوقاية",
        description: "كيفية تحديد ومنع المنتجات المقلدة من الإضرار بسمعة علامتك التجارية وإيرادات أعمالك.",
        image: "/Images/blog4.jpg",
        date: "28 نوفمبر 2024",
        author: "فريق المراقبة",
        category: "مكافحة التقليد"
      },
      {
        title: "عملية تسجيل العلامات التجارية في مجلس التعاون الخليجي",
        description: "دليل خطوة بخطوة لتسجيل علامتك التجارية عبر دول مجلس التعاون الخليجي.",
        image: "/Images/blog5.jpg",
        date: "20 نوفمبر 2024",
        author: "الخبراء الإقليميون",
        category: "التسجيل"
      },
      {
        title: "أفضل الممارسات لإدارة محفظة الملكية الفكرية",
        description: "استراتيجيات فعالة لإدارة والمحافظة على محفظة الملكية الفكرية للحصول على أقصى حماية.",
        image: "/Images/blog6.jpg",
        date: "15 نوفمبر 2024",
        author: "مديرو المحافظ",
        category: "الإدارة"
      }
    ]
  };

  const currentPosts = blogPosts[language];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("blogTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("blogSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPosts.map((post, index) => (
            <Card key={index} className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden ${language === 'ar' ? 'text-right' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop';
                  }}
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className={`flex items-center gap-4 text-sm text-muted-foreground ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className={`flex items-center gap-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {post.description}
                </CardDescription>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {t("readMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;