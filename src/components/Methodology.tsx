import React from 'react';
import { Search, PenTool, HardHat, Zap, Settings, BarChart3 } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Viabilidade",
    subtitle: "Análise & Conexão",
    icon: Search,
    desc: "Avaliamos a necessidade de carga, o terreno e cuidamos de toda a burocracia do processo para obtenção do Orçamento de Conexão do junto à concessionária de energia."
  },
  {
    id: "02",
    title: "Engenharia",
    subtitle: "Projetos",
    icon: PenTool,
    desc: "Nossa equipe desenvolve os projetos detalhadoso (Civil e Eletromecânico), especificando cada material e equipamento que será utilizado."
  },
  {
    id: "03",
    title: "Construção",
    subtitle: "Obra & Montagem",
    icon: HardHat,
    desc: "Execução completa com máxima eficiência. Gerenciamos a obra civil, a montagem dos equipamentos e a segurança do trabalho."
  },
  {
    id: "04",
    title: "Energização e Startup",
    subtitle: "Entrega Final",
    icon: Zap,
    desc: "Realizamos os testes finais (comissionamento), parametrizamos os relés e entregamos o empreendimento ligado e operando."
  },
  {
    id: "05",
    title: "Gestao de Ativos",
    subtitle: "Operação e Manutenção",
    icon: Settings,
    desc: "Monitoramento e telemetria contínua dos ativos, planejamento de manutenção preditiva e preventiva."
  },
  {
    id: "06",
    title: "Eficiência Energética",
    subtitle: "Gestão de fatura de energia",
    icon: BarChart3,
    desc: "A gestão eficiente das faturas de energia permite identificar oportunidades de economia e melhorar o controle dos custos energéticos. Analisamos e gerenciamos suas contas de energia com resultados rápidos e maior eficiência operacional."
  }
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-aupus-navy text-white border-y border-white/5 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-aupus-green font-bold text-xs tracking-widest uppercase mb-2">Soluções completas e inteligentes</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Do Projeto à Gestão</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Atuamos de forma estratégica e e eficiente para desenvolvimento do seu empreendimento. 
            Cuidamos de todas as etapas, projetamos, implantamos comissionamos, conectamos e O&M. Seu ativo do inicio ao fim.
          </p>
          <div className="w-24 h-1 bg-aupus-green mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 relative">
          
          {/* Linha conectora (visível apenas em Desktop XL) */}
          <div className="hidden xl:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Ícone com brilho ao passar o mouse */}
              <div className="w-24 h-24 bg-aupus-navy border-2 border-aupus-green/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-aupus-green group-hover:bg-aupus-green/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] relative z-10">
                <step.icon size={32} className="text-aupus-green" />
              </div>
              
              <div className="text-center px-2">
                <span className="text-white/70 font-mono text-xs font-bold mb-2 block uppercase tracking-wider">Etapa {step.id}</span>
                <h4 className="text-lg font-bold mb-1 text-white leading-tight">{step.title}</h4>
                <p className="text-blue-400 text-[10px] font-bold uppercase mb-3 leading-tight">{step.subtitle}</p>
                <p className="text-slate-400 text-xs leading-relaxed border-t border-white/10 pt-3">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}