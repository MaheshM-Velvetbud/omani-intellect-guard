import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const showBlogSection = location.hash === '#blog';
  
  return (
    <div className="min-h-screen">
      <Header />
      {showBlogSection ? (
        <main className="pt-24">
          <section id="blog">
            <Blog />
          </section>
        </main>
      ) : (
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Index;
