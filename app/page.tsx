import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import SkillsSection from "./components/Skillsection";
import Projects from "./components/Project";


export default function Home() {
  return (
   <div>
    <Navbar />
    <section id="home">
       <Hero />
      </section>

    <Overview />
    <section id="project">
        <Projects />
      </section>

    <Education />

    <section id="Skillsection">
        <SkillsSection />
      </section>

 <section id="contact">
        <Contact />
      </section>

    
    <Footer />
   </div>
  );
}
