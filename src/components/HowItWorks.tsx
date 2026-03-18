import React from 'react';
import { Smartphone, Sun, Receipt } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: "1. Adesão Digital",
    description: "Você faz seu cadastro em 2 minutos. Sem fidelidade, sem taxa de adesão e sem visita técnica."
  },
  {
    icon: Sun,
    title: "2. Nós Geramos",
    description: "Nossas usinas solares produzem energia limpa e injetam na rede da concessionária."
  },
  {
    icon: Receipt,
    title: "3. Você Economiza",
    description: "A concessionária abate essa energia da sua conta e você paga um boleto para Aupus com sua economia."
  }
];

export default function HowItWorks() {
  return (
    <section 
      id="como-funciona" 
      className="py-24 bg-white relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-12 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center mb-20 flex flex-col items-center">
          
          <div className="inline-block bg-aupus-navy px-6 py-2 rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              Simples Assim
            </h2>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-aupus-navy max-w-2xl leading-tight">
            Economia sem tocar <br className="hidden md:block"/> no telhado
          </h3>
        </div>

        {/* GRID DE PASSOS */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          
          <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-0.5 bg-slate-200 -z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon; 
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Círculo do Ícone */}
                <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:border-aupus-green group-hover:shadow-aupus-green/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={32} className="text-aupus-navy group-hover:text-aupus-green transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-bold text-aupus-navy mb-4">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed max-w-xs text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}