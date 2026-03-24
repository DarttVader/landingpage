import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Location />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
