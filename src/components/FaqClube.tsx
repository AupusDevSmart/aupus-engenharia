"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    question: "Preciso fazer alguma obra no meu telhado?",
    answer: "Não! Nenhuma placa é instalada na sua casa, zero obras. A energia é gerada em nossas usinas e injetada diretamente na rede da concessionária, chegando a você pela rede elétrica que já existe."
  },
  {
    question: "E se não fizer sol ou for de noite?",
    answer: "Você nunca fica sem energia. A rede da concessionária vai te atender sempre. Quando não há sol, você recebe energia da rede da concessionária normalmente, mas seus créditos continuam valendo para economia no valor final."
  },
  {
    question: "Tem fidelidade ou multa de cancelamento?",
    answer: "Zero fidelidade. Você pode sair do Clube Aupus a qualquer momento, basta nos avisar com 30 dias de antecedência para os trâmites da concessionária. Sem multas surpresas."
  },
  {
    question: "Quanto custa para entrar no Clube?",
    answer: "Nada. A adesão é gratuita. Você não paga mensalidade para 'associado', você apenas paga a  contribuicao  da conta de luz (que virá mais barata) diretamente para nós através do boleto."
  },
  {
    question: "Para quem está disponível?",
    answer: "No momento, para clientes residenciais e comerciais atendidos pela rede da concessionária local em baixa tensão (Grupo B) com conta acima de R$ 300,00."
  }
];

export default function FaqClube() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    accountType: '', 
    bill: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatCurrencyInput = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    if (!numericValue) return '';
    const floatValue = parseFloat(numericValue) / 100;
    return floatValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyInput(e.target.value);
    setFormData({ ...formData, bill: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de requisição à API
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Solicitação recebida. Nossa equipe entrará em contato em breve.");
      setFormData({ name: '', email: '', phone: '', accountType: '', bill: '' });
    }, 1000);
  };

  return (
    <section id="faq" className="py-24 bg-white relative z-40 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-12 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block bg-aupus-navy px-6 py-2 rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              Tira-Dúvidas
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-aupus-navy">
            Perguntas Frequentes
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-aupus-green transition-colors group shadow-sm">
              <details className="group">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-slate-700 group-hover:text-aupus-navy select-none">
                  <span className="flex items-center gap-3 text-left">
                    <HelpCircle size={20} className="text-aupus-green shrink-0" />
                    {faq.question}
                  </span>
                  <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4">
                    <ChevronDown size={20} className="text-slate-400 group-hover:text-aupus-green" />
                  </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 pt-0 leading-relaxed pl-14 text-sm md:text-base border-t border-transparent group-open:border-slate-100 group-open:pt-4 transition-all">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-aupus-navy rounded-2xl overflow-hidden shadow-2xl grid lg:grid-cols-2 border border-slate-800">
          
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-aupus-green/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Ainda com dúvida?</h4>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Nossa equipe de especialistas está pronta para analisar sua conta e calcular sua economia exata em tempo real.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 size={20} className="text-aupus-green shrink-0" />
                  <span>Análise detalhada sem compromisso.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 size={20} className="text-aupus-green shrink-0" />
                  <span>Atendimento humano direto com especialista.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 size={20} className="text-aupus-green shrink-0" />
                  <span>Cálculo da sua economia na hora.</span>
                </li>
              </ul>

              <a 
                href="https://wa.me/5562996547888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-aupus-green text-aupus-navy px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all shadow-lg w-full md:w-auto justify-center"
              >
                <MessageCircle size={20} />
                FALAR NO WHATSAPP
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 border-l border-slate-200">
            <h4 className="text-xl font-bold text-aupus-navy mb-2">Solicitar Contato Comercial</h4>
            <p className="text-sm text-slate-500 mb-6">Preencha os dados abaixo e retornaremos com sua simulação.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Nome ou Razão Social</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-aupus-green focus:ring-1 focus:ring-aupus-green transition-all bg-white"
                  placeholder="Nome completo ou empresa"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">E-mail</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-aupus-green focus:ring-1 focus:ring-aupus-green transition-all bg-white"
                  placeholder="seu@email.com.br"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-aupus-green focus:ring-1 focus:ring-aupus-green transition-all bg-white"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Tipo de Imóvel</label>
                  <select 
                    required
                    value={formData.accountType}
                    onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-aupus-green focus:ring-1 focus:ring-aupus-green transition-all bg-white text-slate-700"
                  >
                    <option value="">Selecione...</option>
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Rural">Rural</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Média Mensal da Conta de Luz</label>
                <input 
                  type="text"
                  required
                  value={formData.bill}
                  onChange={handleBillChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-aupus-green focus:ring-1 focus:ring-aupus-green transition-all bg-white text-slate-700 font-medium"
                  placeholder="R$ 0,00"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-aupus-navy text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-70 mt-2"
              >
                {isSubmitting ? 'PROCESSANDO...' : 'ENVIAR SOLICITAÇÃO'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>
          
        </div>

      </div>
    </section>
  );
}