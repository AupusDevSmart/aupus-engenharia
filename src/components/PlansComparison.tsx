import React from 'react';
import { X, Check, Zap, ArrowRight } from 'lucide-react';

export default function PlansComparison() {
  return (
    <section id="vantagens" className="py-24 relative bg-slate-50 z-30 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-12 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.08)]">
      
      {/* --- ELEMENTOS DE FUNDO ISOLADOS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] z-0">
        <div className="absolute w-[150%] h-[300px] md:h-[400px] bg-gradient-to-r from-aupus-green/5 via-aupus-green/10 to-transparent transform -rotate-6 translate-y-12"></div>
        <div className="absolute w-[150%] h-1 bg-aupus-green/30 transform -rotate-6 translate-y-[162px] md:translate-y-[212px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block bg-aupus-navy px-6 py-2 rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              Por que mudar?
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-aupus-navy max-w-2xl leading-tight">
            Tenha o controle da sua energia.
          </h3>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto items-start px-6">
          
          {/* LADO ÚNICO: Experiência Aupus (Clube Aupus) */}
          <div className="p-8 rounded-2xl border-2 border-aupus-green bg-white shadow-2xl relative transform hover:scale-[1.02] transition-transform duration-300 z-20 w-full max-w-md">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aupus-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(0,253,74,0.4)] whitespace-nowrap">
              Experiência Aupus
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="bg-aupus-navy p-3 rounded-full shadow-md">
                <Zap size={24} className="text-white" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <h4 className="font-bold text-aupus-navy text-xl leading-none">Clube Aupus</h4>
                <div className="bg-aupus-navy px-3 py-1 rounded-full inline-block mt-1">
                  <p className="text-[10px] text-white font-bold uppercase tracking-widest">Energia Inteligente</p>
                </div>
              </div>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-0.5 rounded-full shrink-0"><Check className="text-green-600" size={16} /></div>
                <span className="text-slate-700 font-bold">Gestão inteligente do seu consumo.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-0.5 rounded-full shrink-0"><Check className="text-green-600" size={16} /></div>
                <span className="text-slate-700 font-medium">Soluções personalizadas para sua necessidade.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-0.5 rounded-full shrink-0"><Check className="text-green-600" size={16} /></div>
                <span className="text-slate-700 font-medium">Suporte técnico ágil e especializado.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-0.5 rounded-full shrink-0"><Check className="text-green-600" size={16} /></div>
                <span className="text-slate-700 font-medium">Foco em sustentabilidade e energia limpa.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-0.5 rounded-full shrink-0"><Check className="text-green-600" size={16} /></div>
                <span className="text-slate-700 font-medium">Menos burocracia, mais eficiência.</span>
              </li>
            </ul>

            <a 
              href="https://wa.me/5562996547888" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-8 bg-aupus-navy text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg flex justify-center items-center gap-2 group cursor-pointer"
            >
              QUERO UMA ANÁLISE GRATUITA
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            
            <p className="text-center text-[10px] text-slate-400 mt-3">Consulte condições para sua região.</p>
          </div>

        </div>
      </div>
    </section>
  );
}