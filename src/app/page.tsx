import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Documents from "@/components/Documents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1  flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
