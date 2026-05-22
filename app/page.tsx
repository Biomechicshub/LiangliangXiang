import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Publications />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
