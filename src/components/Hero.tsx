import React from 'react';
import { ChevronRight, Activity, Zap, ShieldCheck, Globe, BarChart3} from 'lucide-react';

export default function Hero() {
  return (

    <section className="relative min-h-screen flex flex-col bg-aupus-navy overflow-hidden">
      
      {/* Background Image com Overlay (Fica fixo atrás de tudo) */}
      <div className="absolute inset-0 z-0">
         {/* Gradiente para garantir leitura do texto branco */}
         <div className="absolute inset-0 bg-gradient-to-r from-aupus-navy via-aupus-navy/90 to-transparent z-10"></div>
         
         <img 
            src="banner.png" 
            alt="Infraestrutura de Energia Robusta" 
            className="w-full h-full object-cover opacity-50"
         />
      </div>


      {/* CONTEÚDO PRINCIPAL*/}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center py-24 md:py-32">
        
        {/* FRASE 1: BADGE DE CATEGORIA */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-aupus-green/30 rounded-full bg-aupus-navy/40 backdrop-blur-md mb-6 w-fit shadow-sm">
          <span className="w-2 h-2 rounded-full bg-aupus-green animate-pulse"></span>
          <span className="text-aupus-green text-xs font-bold tracking-widest uppercase">
            Interligando você ao futuro
          </span>
        </div>

        {/* FRASE 2: TÍTULO PRINCIPAL (H1) */}
        <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold text-white leading-[1.05] mb-8 max-w-4xl tracking-tight">
          Soluções inteligentes para <span className="text-aupus-green">gestão de ativos.</span>
        </h1>

        {/* FRASE 3: DESCRIÇÃO DE POSICIONAMENTO */}
        <div className="border-l-2 border-aupus-green pl-6 mb-12">
          <p className="text-slate-300 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
            Energia para desenvolver projetos e concretizar sonhos.
          </p>
        </div>

        {/* BOTÃO ÚNICO E DIRETO */}
        <a 
          href="#servicos" 
          className="w-fit bg-aupus-green text-aupus-navy px-8 py-4 font-bold text-sm tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 rounded shadow-[0_0_20px_rgba(0,253,74,0.2)] group"
        >
          CONHEÇA NOSSAS SOLUÇÕES
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="relative w-full border-t border-white/10 bg-black/20 backdrop-blur-md z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <Zap className="text-aupus-green" size={24} />
              <div>
                <p className="text-white font-bold text-xl">500kV</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-wider">Tensão Máxima</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="text-aupus-green" size={24} />
              <div>
                <p className="text-white font-bold text-xl">+150</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-wider">Obras Entregues</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-aupus-green" size={24} />
              <div>
                <p className="text-white font-bold text-xl">100%</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-wider">Conformidade com normas técnicas</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 opacity-80 border-l border-white/10 pl-8">
               <p className="text-slate-300 text-xs leading-tight">
                  Sede Global:<br/>
                  <span className="text-white font-bold">Brookfield Towers</span>
               </p>
            </div>
        </div>
      </div>
    </section>
  );
}