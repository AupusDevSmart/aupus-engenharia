import React from 'react';
import { Sun, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

import SolarCalculator from '../../components/SolarCalculator';
import HowItWorks from '../../components/HowItWorks';
import PlansComparison from '../../components/PlansComparison';
import FaqClube from '../../components/FaqClube';
import Footer from '../../components/Footer';
import HeroBackground from '../../components/HeroBackground';

export const metadata = {
  title: "Clube Aupus",
  description: "Economize até 25% na conta de luz sem instalar painéis e sem obras. Adesão digital para residências e comércios.",
};

export default function ClubePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-aupus-green selection:text-aupus-navy scroll-smooth">
      
      <nav className="fixed w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/30 h-20 flex items-center transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Clube Aupus" 
              width={180} 
              height={60} 
              className="h-10 w-auto object-contain" 
              priority
            />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            <a href="#como-funciona" className="hover:text-aupus-green transition-colors">COMO FUNCIONA</a>
            <a href="#vantagens" className="hover:text-aupus-green transition-colors">VANTAGENS</a>
            <a href="#faq" className="hover:text-aupus-green transition-colors">DÚVIDAS</a>
          </div>

          <a 
            href="https://nexus.aupusenergia.com.br/login?redirectTo=/login"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-aupus-navy text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:bg-slate-800 transition-all hidden sm:block"
          >
            ÁREA DO CLIENTE
          </a>
        </div>
      </nav>


      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        
        {/* Componente Client-Side Isolado */}
        <HeroBackground />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 text-yellow-700 border border-yellow-100 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
              <Sun size={14} className="fill-yellow-400 text-yellow-500" />
              Energia Limpa & Mais Barata
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-aupus-navy leading-[1.1] drop-shadow-sm">
              Sua conta de luz <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aupus-green to-emerald-600">fica mais barata</span> todo mês.
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
              Entre para o Clube Aupus e participe do melhor clube de economia de energia do Brasil, reduza sua conta de agora. <strong>Sem obras, sem fidelidade e 100% digital.</strong>
            </p>

            <div className="space-y-4 bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                 <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600" /></div>
                 <span>Zero investimento (você não compra precisa comprar placa solar, aprovar projeto, lavar placas).</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                 <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600" /></div>
                 <span>Sem fidelidade ( cancele quando quiser).</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                 <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600" /></div>
                 <span>Economia de verdade</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700 fade-in delay-100">
             <div className="absolute -inset-1 bg-gradient-to-r from-aupus-green to-emerald-400 rounded-2xl blur opacity-30"></div>
             <SolarCalculator />
          </div>

        </div>
      </section>

      <HowItWorks />
      <PlansComparison />
      <FaqClube />
      <Footer />

    </main>
  );
}