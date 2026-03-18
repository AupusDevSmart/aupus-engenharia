"use client";

import React, { useState } from 'react';
import { Zap, ArrowRight, PiggyBank } from 'lucide-react';

export default function SolarCalculator() {
  const [billValue, setBillValue] = useState(500);

  const monthlySavings = billValue * 0.25; 
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-aupus-green to-emerald-400"></div>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-aupus-navy px-6 py-2 rounded-full shadow-lg mb-4">
          <Zap className="text-aupus-green fill-current" size={18} />
          <h3 className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
            Simule sua Economia
          </h3>
        </div>
        <p className="text-slate-500 text-sm">
          Arraste para selecionar o valor médio da sua conta de luz mensal.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Valor da Conta</span>
          <span className="text-3xl font-bold text-aupus-navy">{formatCurrency(billValue)}</span>
        </div>
        
        <input 
          type="range" 
          min="200" 
          max="5000" 
          step="50" 
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
          className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-aupus-green hover:accent-emerald-500 transition-all"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
          <span>R$ 200</span>
          <span>+ R$ 5.000</span>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8 space-y-4">
        <div className="flex justify-between items-center pb-4 border-b border-slate-200">
          <span className="text-slate-600 font-medium">Economia Mensal</span>
          <span className="text-emerald-600 font-bold text-xl">+ {formatCurrency(monthlySavings)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PiggyBank className="text-aupus-green" size={20} />
            <span className="text-aupus-navy font-bold">Economia Anual</span>
          </div>
          <span className="text-aupus-navy font-bold text-2xl">{formatCurrency(annualSavings)}</span>
        </div>
      </div>

      <a 
        href="https://wa.me/5562996547888" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-aupus-green text-aupus-navy py-4 rounded-lg font-bold text-lg hover:brightness-95 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
      >
        QUERO ECONOMIZAR {formatCurrency(annualSavings)}
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>
      
      <p className="text-center text-xs text-slate-400 mt-4">
        *Cálculo base estimado em 25% de economia.
      </p>
    </div>
  );
}