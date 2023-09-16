//Component
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import About from "@/Sections/About";
import Projects from "@/Sections/Projects";
import Services from "@/Sections/Services";
import Faq from "@/Sections/Faq";
import Company from "@/Sections/Company";
import Introducing from "@/Sections/Introducing";
import Blog from "@/Sections/Blogs";
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
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;