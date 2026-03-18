import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Holding from "@/components/Holding";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Innovation from "@/components/Innovation"; // Importando o novo componente

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 scroll-smooth">
      <Navbar />
      <Hero />
      <Holding />
      <Methodology />
      <Services />
      <Innovation />
      <Footer />
    </main>
  );
}