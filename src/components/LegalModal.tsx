import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-aupus-navy/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-slate-800 w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200">
        
        {/* Cabeçalho */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-xl font-bold text-aupus-navy">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-red-500"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto leading-relaxed text-sm text-slate-600 space-y-4">
          {content}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 text-right">
          <button 
            onClick={onClose}
            className="bg-aupus-navy text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-800 transition-colors"
          >
            Entendi e Fechar
          </button>
        </div>

      </div>
    </div>
  );
}