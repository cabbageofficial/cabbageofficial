//Re Validating and Dynamic
export const dynamic = "force-dynamic";
export const revalidate = 300;

//Component
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import About from "@/Sections/About";
import Projects from "@/Sections/Projects";
import Services from "@/Sections/Services";
import Faq from "@/Sections/Faq";
import Company from "@/Sections/Company";
import Introducing from "@/Sections/Introducing";
import Footer from "@/Sections/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Faq />
      <Company />
      <Introducing />
      <Footer />
    </div>
  );
};

export default Home;