"use client";

import React, { useState } from 'react';
import { Building2, ShieldCheck, Info } from 'lucide-react';

// Dados das Unidades
const units = {
  engenharia: {
    id: 'engenharia',
    title: 'AUPUS ENERGIA',
    subtitle: 'Gestão de ativos',
    description: 'Atuamos no desenvolvimento de soluções inovadoras para gestão de ativos de energia, execução de obras elétricas e consultoria especializada.'
  },
  clube: {
    id: 'clube',
    title: 'CLUBE AUPUS',
    subtitle: 'Energia por assinatura',
    description: 'Clube Aupus é um modelo de energia por assinatura, no qual consumidores participam de uma usina de geração e recebem créditos na conta de energia, gerando economia mensal sem necessidade de investimento ou instalação de equipamentos.'
  },
  charge: {
    id: 'charge',
    title: 'AUPUS CHARGE',
    subtitle: 'Mobilidade Elétrica',
    description: 'É uma rede de eletropostos para recarga de veículos elétricos, contribuindo para a transição energética e mobilidade sustentável.'
  },
  smart: {
    id: 'smart',
    title: 'TECNOLOGIA',
    subtitle: 'Telemetria e Automação',
    description: 'É uma plataforma digital para gestão de energia, gestão de ativos (PCM), monitoramento e telemetria em tempo real.'
  }
};

export default function Holding() {
  const [activeUnit, setActiveUnit] = useState<keyof typeof units>('engenharia');

  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-white relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        <div>
          <h2 className="inline-flex items-center gap-2 bg-aupus-navy text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
            <Building2 size={16} className="text-aupus-green" />
            GOVERNANÇA CORPORATIVA
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-aupus-navy mb-6 md:mb-8 leading-tight">
            A Solidez do <br/>Grupo Santares.
          </h3>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify mb-8">
            <p>
              A <strong>Aupus Energia</strong> faz parte do <strong>Grupo Santares</strong>, que é dedicada ao desenvolvimento e à <strong>gestão estratégica de ativos</strong>.
            </p>
            <p>
              Desde <strong>2016</strong>, combinamos <strong>engenharia</strong>, <strong>tecnologia</strong> e <strong>governança corporativa</strong> para desenvolver projetos energéticos com segurança, eficiência e <strong>visão de longo prazo</strong>.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-3 bg-aupus-navy px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-default w-full md:w-auto justify-center md:justify-start">
             <ShieldCheck size={24} className="text-aupus-green shrink-0"/>
             <span className="text-white font-bold text-sm uppercase tracking-wide">
               Compliance e Gestão de Risco Ativos
             </span>
          </div>
        </div>

        <div className="relative p-4 md:p-8 bg-white rounded-2xl border border-slate-100 shadow-2xl">
           <div className="flex flex-col items-center">
              
              {/* NÓ CENTRAL (MATRIZ) */}
              <div className="bg-aupus-navy text-white px-6 md:px-10 py-4 md:py-6 rounded-lg shadow-lg text-center w-full max-w-xs relative z-10 ring-4 ring-white">
                 <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">MATRIZ CORPORATIVA</p>
                 <p className="font-bold text-lg md:text-xl tracking-wide">SANTARES</p>
              </div>
              
              {/* CONECTORES */}
              <div className="h-8 md:h-12 w-px bg-slate-300 relative z-0 -mt-1"></div>
              {/* Linha horizontal expandida para 4 itens */}
              <div className="w-full h-px bg-slate-300 mb-6 md:mb-8 relative flex justify-between">
                 <div className="w-2 h-2 bg-slate-300 rounded-full -mt-1 transform translate-x-4 md:translate-x-8"></div>
                 <div className="w-2 h-2 bg-slate-300 rounded-full -mt-1 transform -translate-x-2 md:-translate-x-4"></div>
                 <div className="w-2 h-2 bg-slate-300 rounded-full -mt-1 transform translate-x-2 md:translate-x-4"></div>
                 <div className="w-2 h-2 bg-slate-300 rounded-full -mt-1 transform -translate-x-4 md:-translate-x-8"></div>
              </div>

              {/* BRAÇOS OPERACIONAIS (Botões Interativos) */}
              {/* Grade para suportar 4 colunas em desktop */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full">
                 
                 {/* Botão Engenharia */}
                 <button 
                    onClick={() => setActiveUnit('engenharia')}
                    className={`flex flex-col items-center group transition-all duration-300 ${activeUnit === 'engenharia' ? 'scale-105 z-10' : 'opacity-60 hover:opacity-100'}`}
                 >
                    <div className={`h-4 md:h-6 w-px mb-2 transition-colors ${activeUnit === 'engenharia' ? 'bg-aupus-green' : 'bg-slate-300'}`}></div>
                    <div className={`border-2 w-full h-24 md:h-32 flex flex-col justify-center items-center text-center rounded-lg shadow-md transition-all px-1 py-2 md:p-3 ${activeUnit === 'engenharia' ? 'bg-white border-aupus-green shadow-lg' : 'bg-slate-50 border-slate-200'}`}>
                       <p className={`font-bold leading-tight break-words text-[10px] sm:text-xs md:text-sm ${activeUnit === 'engenharia' ? 'text-aupus-navy' : 'text-slate-600'}`}>
                         AUPUS<br/>ENERGIA
                       </p>
                       <span className="text-[9px] md:text-[10px] text-slate-400 mt-1 hidden md:block">Matriz</span>
                    </div>
                 </button>

                 {/* Botão Clube */}
                 <button 
                    onClick={() => setActiveUnit('clube')}
                    className={`flex flex-col items-center group transition-all duration-300 ${activeUnit === 'clube' ? 'scale-105 z-10' : 'opacity-60 hover:opacity-100'}`}
                 >
                    <div className={`h-4 md:h-6 w-px mb-2 transition-colors ${activeUnit === 'clube' ? 'bg-aupus-green' : 'bg-slate-300'}`}></div>
                    <div className={`border-2 w-full h-24 md:h-32 flex flex-col justify-center items-center text-center rounded-lg shadow-md transition-all px-1 py-2 md:p-3 ${activeUnit === 'clube' ? 'bg-white border-aupus-green shadow-lg' : 'bg-slate-50 border-slate-200'}`}>
                       <p className={`font-bold leading-tight break-words text-[10px] sm:text-xs md:text-sm ${activeUnit === 'clube' ? 'text-aupus-navy' : 'text-slate-600'}`}>
                         CLUBE<br/>AUPUS
                       </p>
                       <span className="text-[9px] md:text-[10px] text-slate-400 mt-1 hidden md:block">Varejo</span>
                    </div>
                 </button>

                 {/* Botão Charge */}
                 <button 
                    onClick={() => setActiveUnit('charge')}
                    className={`flex flex-col items-center group transition-all duration-300 ${activeUnit === 'charge' ? 'scale-105 z-10' : 'opacity-60 hover:opacity-100'}`}
                 >
                    <div className={`h-4 md:h-6 w-px mb-2 transition-colors ${activeUnit === 'charge' ? 'bg-aupus-green' : 'bg-slate-300'}`}></div>
                    <div className={`border-2 w-full h-24 md:h-32 flex flex-col justify-center items-center text-center rounded-lg shadow-md transition-all px-1 py-2 md:p-3 ${activeUnit === 'charge' ? 'bg-white border-aupus-green shadow-lg' : 'bg-slate-50 border-slate-200'}`}>
                       <p className={`font-bold leading-tight break-words text-[10px] sm:text-xs md:text-sm ${activeUnit === 'charge' ? 'text-aupus-navy' : 'text-slate-600'}`}>
                         AUPUS<br/>CHARGE
                       </p>
                       <span className="text-[9px] md:text-[10px] text-slate-400 mt-1 hidden md:block">Mobilidade</span>
                    </div>
                 </button>

                 {/* Botão Smart (Novo) */}
                 <button 
                    onClick={() => setActiveUnit('smart')}
                    className={`flex flex-col items-center group transition-all duration-300 ${activeUnit === 'smart' ? 'scale-105 z-10' : 'opacity-60 hover:opacity-100'}`}
                 >
                    <div className={`h-4 md:h-6 w-px mb-2 transition-colors ${activeUnit === 'smart' ? 'bg-aupus-green' : 'bg-slate-300'}`}></div>
                    <div className={`border-2 w-full h-24 md:h-32 flex flex-col justify-center items-center text-center rounded-lg shadow-md transition-all px-1 py-2 md:p-3 ${activeUnit === 'smart' ? 'bg-white border-aupus-green shadow-lg' : 'bg-slate-50 border-slate-200'}`}>
                       <p className={`font-bold leading-tight break-words text-[10px] sm:text-xs md:text-sm ${activeUnit === 'smart' ? 'text-aupus-navy' : 'text-slate-600'}`}>
                         AUPUS SMART<br/>
                       </p>
                       <span className="text-[9px] md:text-[10px] text-slate-400 mt-1 hidden md:block">Automação</span>
                    </div>
                 </button>
                 
              </div>
              
              {/* ÁREA DE EXPLICAÇÃO DINÂMICA */}
              <div className="w-full mt-6 md:mt-8 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300" key={activeUnit}>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 relative">
                    <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-50 border-t border-l border-slate-200 transform rotate-45"></div>
                    
                    <div className="flex items-start gap-3">
                        <div className="bg-aupus-navy p-2 rounded text-aupus-green shrink-0 mt-1">
                        <Info size={20} />
                        </div>
                        <div>
                        <h4 className="font-bold text-aupus-navy text-sm uppercase mb-1">{units[activeUnit].title}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">{units[activeUnit].subtitle}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {units[activeUnit].description}
                        </p>
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </div>

      </div>
    </section>
  );
}