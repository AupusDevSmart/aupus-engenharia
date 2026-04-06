"use client";

import React, { useState } from 'react';
import { Instagram, MapPin, Phone, Mail, ArrowRight, X, FileText, Shield } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// --- COMPONENTE DO MODAL ---
function LegalModal({ title, content, onClose }: { title: string, content: React.ReactNode, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-aupus-navy">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="text-slate-400" size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-4">
          {content}
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-aupus-navy text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}

// --- CONTEÚDO DOS TEXTOS JURÍDICOS ---
const privacyContent = (
  <>
    <p><strong>1. Coleta de Dados:</strong> A Aupus Engenharia coleta apenas os dados estritamente necessários (Nome, E-mail e Telefone) fornecidos voluntariamente através dos formulários de contato e WhatsApp para fins de atendimento comercial.</p>
    <p><strong>2. Uso das Informações:</strong> As informações são utilizadas exclusivamente para: a) Retornar solicitações de orçamento; b) Enviar propostas técnicas; c) Comunicar atualizações sobre projetos em andamento.</p>
    <p><strong>3. Compartilhamento:</strong> Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing. O compartilhamento ocorre apenas com o Grupo Santares (holding controladora) para fins administrativos.</p>
    <p><strong>4. Segurança:</strong> Adotamos práticas de segurança digital alinhadas à LGPD para proteger seus dados contra acessos não autorizados.</p>
    <p><strong>5. Seus Direitos:</strong> Você pode solicitar a exclusão ou alteração dos seus dados a qualquer momento enviando um e-mail para comercial@aupus.com.br.</p>
  </>
);

const termsContent = (
  <>
    <p><strong>1. Propriedade Intelectual:</strong> Todo o conteúdo deste site (textos, imagens, logotipos e layouts) é propriedade exclusiva da Aupus Engenharia e do Grupo Santares. É proibida a reprodução sem autorização prévia.</p>
    <p><strong>2. Uso do Site:</strong> Este site tem caráter informativo e comercial. A Aupus se esforça para manter as informações atualizadas, mas não se responsabiliza por eventuais imprecisões técnicas temporárias.</p>
    <p><strong>3. Links Externos:</strong> O site pode conter links para parceiros ou redes sociais. Não nos responsabilizamos pelas políticas de privacidade de sites de terceiros.</p>
    <p><strong>4. Alterações:</strong> Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio, para adequação à legislação vigente.</p>
    <p><strong>5. Foro:</strong> Fica eleito o foro da comarca de Goiânia/GO para dirimir quaisquer dúvidas oriundas destes termos.</p>
  </>
);

export default function Footer() {
  const pathname = usePathname();
  // Verifica se está na página do clube através do pathname ou do domínio
  const isClubePage = pathname === '/clube' || (typeof window !== 'undefined' && window.location.hostname === 'clube.aupusenergia.com.br');

  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-aupus-navy text-slate-300 py-16 text-sm border-t border-aupus-green/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* COLUNA 1: Marca e Social */}
          <div>
            <div className="mb-6">
              <Image 
                src="/Logotipo.png" 
                alt="Aupus Energia" 
                width={180} 
                height={60} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mb-8 leading-relaxed opacity-80">
              Interligando você ao futuro da energia, a Aupus desenvolve soluções com inovação, tecnologia e compromisso para implantação e gestão de ativos energéticos.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-aupus-green hover:text-aupus-navy transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* COLUNA 2: Navegação Inteligente */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navegação</h4>
            <ul className="space-y-4">
              {isClubePage ? (
                <li>
                  <a href="https://aupusenergia.com.br" className="hover:text-aupus-green transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-aupus-green group-hover:translate-x-1 transition-transform" />
                    Aupus Energia
                  </a>
                </li>
              ) : (
                <li>
                  <a href="https://clube.aupusenergia.com.br" className="hover:text-aupus-green transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-aupus-green group-hover:translate-x-1 transition-transform" />
                    Clube Aupus
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* COLUNA 3: Soluções */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#servicos" className="hover:text-aupus-green transition-colors block py-1">Soluções integradas</a>
              </li>
              
              <li>
                <a href="https://clube.aupusenergia.com.br" className="hover:text-aupus-green transition-colors block py-1">Energia por Assinatura</a>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: Contato */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-aupus-green shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">
                  Brookfield Towers<br/>
                  Av. Dep. Jamel Cecílio, 2929<br/>
                  Sala 1013, Bloco A<br/>
                  Jardim Goiás, Goiânia - GO
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-aupus-green shrink-0" size={18} />
                <span className="font-medium hover:text-white transition-colors cursor-pointer">(62) 99654-7888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-aupus-green shrink-0" size={18} />
                <span className="hover:text-white transition-colors cursor-pointer">comercial@aupus.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT E LINKS JURÍDICOS */}
        <div className="border-t border-white/10 pt-8 mt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-60">
          <p>© 2026 Santares. Todos os direitos reservados.</p>
          <p>CNPJ: 36.888.984/0001-36</p>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
             {/* <span>
               Desenvolvido por <a href="https://weniu.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-aupus-green transition-colors font-bold">weniu</a>
             </span> */}
             
             <div className="flex gap-6">
                <button 
                  onClick={() => setActiveModal('privacy')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Shield size={12} /> Política de Privacidade
                </button>
                <button 
                  onClick={() => setActiveModal('terms')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <FileText size={12} /> Termos de Uso
                </button>
             </div>
          </div>
        </div>
      </footer>

      {/* RENDERIZAÇÃO CONDICIONAL DOS MODAIS */}
      {activeModal === 'privacy' && (
        <LegalModal 
          title="Política de Privacidade e Proteção de Dados" 
          content={privacyContent} 
          onClose={() => setActiveModal(null)} 
        />
      )}

      {activeModal === 'terms' && (
        <LegalModal 
          title="Termos de Uso" 
          content={termsContent} 
          onClose={() => setActiveModal(null)} 
        />
      )}
    </>
  );
}