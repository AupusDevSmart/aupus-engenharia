"use client";
import React, { useState } from 'react';
import { CheckCircle2, Factory, Settings, FileText, ArrowRight, ChevronDown } from 'lucide-react';

const serviceData = {
  obras: {
    icon: Factory,
    label: "PROJETOS E OBRAS",
    subLabel: "Construção (EPC)",
    tag: "Energia e Automação",
    title: "Desenvolvimento e Implantação",
    description: "Desenvolvemos soluções completas de engenharia, incluindo projetos executivos, planejamento, execução das obras e gestão de aquisições, garantindo eficiência e organização em todas as etapas do projeto.",
    items: [
      "Construção de Subestações de 13.8kV até 500kV.",
      "Projetos Executivos.",
      "Obras Civis (Fundações, Drenagem e Casas de Comando).",
      "Montagem Eletromecânica de Transformadores e Painéis.",
      "Redes de Distribuição Aéreas/Subterrâneas.",
      "Retrofit: Modernização de subestações antigas para aumentar potência.",
      "Desenvolvimento de soluções 'Low cost' para automação e telemetria de ativos como pivôs, usinas de geração de energia, etc."
    ],
    theme: {
      iconInactive: "bg-blue-100 text-blue-600",
      iconActive: "bg-blue-600 text-white",
      borderActive: "border-blue-600 shadow-blue-600/10 ring-blue-600/20",
      tag: "bg-blue-50 text-blue-700 border-blue-200"
    }
  },
  manutencao: {
    icon: Settings,
    label: "MANUTENÇÃO",
    subLabel: "Reparos e Gestão",
    tag: "Serviços de Manutenção",
    title: "Planejamento e Controle da Manutenção ",
    description: "Monitoramento, operação e manutenção de ativos energéticos, garantindo confiabilidade, desempenho e maior vida útil dos equipamentos.",
    items: [
      "Desenvolvimento e implementação de planos de manutenção.",
      "Operação Remota de ativos.",
      "Controle automatizado.",
      "Gestão de eventos e falhas.",
      "Emissão de relatórios gerenciais.",
      "Relatorios de Qualidade de energia (Classe S e Classe A).",
      "Parametrização e testes com maleta em reles de proteção.",
      "Estratificacao do solo e laudos de aterramento."
    ],
    theme: {
      iconInactive: "bg-amber-100 text-amber-600",
      iconActive: "bg-amber-500 text-white",
      borderActive: "border-amber-500 shadow-amber-500/10 ring-amber-500/20",
      tag: "bg-amber-50 text-amber-700 border-amber-200"
    }
  },
  laudos: {
    icon: FileText,
    label: "GESTÃO DE ENERGIA",
    subLabel: "ECONOMIA E PERFORMANCE",
    tag: "GESTÃO DE ENERGIA",
    title: "Eficiência Energética",
    description: "Gestão de Faturas: Analisamos e gerenciamos suas contas de energia para identificar oportunidades de economia e maior eficiência operacional.",
    items: [
      "Gestão de energia e eficiência energética.",
      "Gestão de Faturas",
      "Análise detalhada das faturas de energia elétrica.",
      "Verificação de inconsistências tarifárias e cobranças indevidas.",
      "Acompanhamento do consumo e dos custos energéticos.",
      "Otimização de contratos e enquadramento tarifário",
      "Identificação de oportunidades de economia.",
      "Controle da validade de licenças e outorgas energéticas",
      "Emissão de relatórios e indicadores de gestão energética",
      "Análise da cobrança de ICMS sobre a energia elétrica"
    ],
    theme: {
      iconInactive: "bg-emerald-100 text-emerald-600",
      iconActive: "bg-emerald-600 text-white",
      borderActive: "border-emerald-600 shadow-emerald-600/10 ring-emerald-600/20",
      tag: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  }
};

type TabKeys = 'obras' | 'manutencao' | 'laudos';

export default function Services() {
  const [activeTab, setActiveTab] = useState<TabKeys | null>('obras');

  const toggleTab = (key: TabKeys) => {
    setActiveTab(activeTab === key ? null : key);
  };

  return (
    <section id="servicos" className="w-full bg-slate-50 py-16 md:py-24 overflow-hidden relative">
      
      {/* --- ELEMENTOS DE FUNDO --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-[200%] h-px bg-aupus-green/30 transform -rotate-6 top-[35%] -left-[25%]"></div>
        <div className="absolute w-[200%] h-64 bg-gradient-to-b from-aupus-green/5 to-transparent transform -rotate-6 top-[35%] -left-[25%]"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-10 md:mb-16 mx-auto max-w-3xl flex flex-col items-center">
          <div className="inline-block bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
            <h2 className="text-aupus-navy font-bold text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aupus-green animate-pulse"></span>
              Escopo Técnico
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-aupus-navy">Soluções Integradas</h3>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {(Object.keys(serviceData) as TabKeys[]).map((key) => {
            const data = serviceData[key];
            const isActive = activeTab === key;
            const Icon = data.icon;

            return (
              <div 
                key={key} 
                className={`bg-white rounded-2xl border transition-all duration-300 w-full relative ${
                  isActive 
                    ? `${data.theme.borderActive} shadow-xl ring-1` 
                    : 'border-slate-100 shadow-sm hover:border-slate-300'
                }`}
              >
                <button 
                  onClick={() => toggleTab(key)}
                  className="w-full p-4 md:p-6 flex items-center justify-between text-left focus:outline-none gap-3"
                >
                  <div className="flex items-center gap-3 md:gap-5 flex-1 min-w-0">
                    <div className={`p-3 rounded-xl transition-colors shrink-0 ${
                      isActive ? data.theme.iconActive : data.theme.iconInactive
                    }`}>
                      <Icon size={24} className="w-6 h-6" />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <span className={`block font-bold text-base md:text-xl transition-colors leading-tight truncate ${
                        isActive ? 'text-aupus-navy' : 'text-slate-600'
                      }`}>
                        {data.label}
                      </span>
                      <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide font-medium block mt-1 truncate">
                        {data.subLabel}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-1.5 md:p-2 rounded-full shrink-0 transition-all duration-300 ${isActive ? 'bg-slate-100 rotate-180' : ''}`}>
                    <ChevronDown size={20} className={isActive ? 'text-aupus-navy' : 'text-slate-400'} />
                  </div>
                </button>

                <div 
                  className={`transition-all duration-500 ease-in-out w-full ${
                    isActive ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="p-4 pt-0 md:p-8 md:pt-0 border-t border-slate-100 bg-slate-50/50">
                    
                    <div className={`inline-block px-3 py-1.5 mt-6 rounded-md text-[11px] font-bold mb-4 uppercase tracking-wider border shadow-sm ${data.theme.tag}`}>
                      {data.tag}
                    </div>

                    <h4 className="text-xl md:text-2xl font-bold text-aupus-navy mb-4 leading-tight break-words">
                      {data.title}
                    </h4>
                    
                    <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base break-words">
                      {data.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 w-full">
                      {data.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                          <CheckCircle2 className="text-aupus-green shrink-0 mt-0.5" size={16} />
                          <span className="text-slate-700 text-xs md:text-sm font-medium leading-snug break-words">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-start md:justify-end w-full">
                      <a 
                        href="https://wa.me/5562996547888" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-aupus-navy text-white px-6 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg group text-sm"
                      >
                        Fale Conosco
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}