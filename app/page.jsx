import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Companies from "@/components/companies/Companies";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Pricing />
        <Reviews />
        <Contact />
        <Companies />
        <Stats />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
