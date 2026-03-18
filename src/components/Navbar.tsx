"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Metodologia", href: "#quem-somos" }, 
    { name: "Serviços Técnicos", href: "#servicos" },
    { name: "Inovação", href: "#inovacao" },
    { name: "Clube Aupus", href: "/clube" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/30 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group" onClick={closeMenu}>
           <Image 
             src="/logo.png" 
             alt="Aupus Energia" 
             width={180} 
             height={60} 
             className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
             priority
           />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-bold text-aupus-navy hover:text-aupus-green transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA BUTTON (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/5562996547888" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aupus-green text-aupus-navy px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-aupus-green/30 flex items-center gap-2"
          >
            Fale com a Aupus
            <ArrowRight size={14} />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="md:hidden p-2 text-aupus-navy hover:bg-slate-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-lg font-bold text-aupus-navy hover:text-aupus-green transition-colors border-b border-slate-50 pb-2"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="https://wa.me/5562996547888" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aupus-green text-aupus-navy px-6 py-4 rounded-lg font-bold text-center uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-aupus-green/30"
            onClick={closeMenu}
          >
            Fale com Engenheiro
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}