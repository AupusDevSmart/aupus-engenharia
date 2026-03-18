import React from 'react';
import { Smartphone, LineChart, ArrowRight, Activity, Settings, BarChart3 } from 'lucide-react';

export default function Innovation() {
  return (
    <section id="inovacao" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
       
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aupus-navy/5 border border-aupus-navy/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-aupus-green animate-pulse"></span>
            <span className="text-aupus-navy text-xs font-bold tracking-widest uppercase">Tecnologia Exclusiva</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-aupus-navy mb-6 leading-tight">
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aupus-green to-emerald-600">Aupus Smart</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            <strong>Aupus Smart</strong> é o ecossistema digital da Aupus para gestão completa da energia e dos ativos elétricos.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                  <BarChart3 className="text-aupus-green" size={20}/>
                </div>
                <span className="text-slate-700 font-medium">Gestão de energia e faturas</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                  <Settings className="text-aupus-green" size={20}/>
                </div>
                <span className="text-slate-700 font-medium">Gestão de ativos e manutenção (PCM)</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                  <Activity className="text-aupus-green" size={20}/>
                </div>
                <span className="text-slate-700 font-medium">Monitoramento e telemetria em tempo real</span>
            </li>
          </ul>

          <p className="text-slate-500 text-sm leading-relaxed border-l-4 border-aupus-green pl-4 italic mb-10">
            O objetivo é centralizar dados, monitorar ativos e otimizar a operação energética, aumentando eficiência e reduzindo custos.
          </p>

          
          <a 
            href="https://nexus.aupusenergia.com.br/login?redirectTo=/login"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-aupus-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg group cursor-pointer"
          >
            CONHEÇA A PLATAFORMA AUPUS SMART
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>

        {/* Lado Direito: Imagem/Mockup */}
        <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-gradient-to-tr from-aupus-green/20 to-transparent rounded-full blur-2xl"></div>
            <img 
                src="smart.png" 
                alt="Dashboard Aupus Smart" 
                className="relative rounded-2xl shadow-2xl border border-slate-200 z-10 w-full object-cover"
            />
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-4 animate-bounce duration-[3000ms]">
                <div className="bg-green-100 p-2 rounded-full"><Activity className="text-green-600" size={20}/></div>
                <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Status do Sistema</p>
                    <p className="text-aupus-navy font-bold">100% Disponível</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}