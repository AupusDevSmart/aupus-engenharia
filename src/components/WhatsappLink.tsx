"use client";

import React, { useEffect, useState } from 'react';
import { DEFAULT_WHATSAPP, getWhatsappUrl } from '../lib/consultor';

type Props = {
  className?: string;
  children: React.ReactNode;
};

// Link de WhatsApp que abre a conversa com o consultor que indicou o
// visitante (persistido pelo ConsultorTracker); sem consultor, número padrão.
// O href também é recalculado no clique, pois na primeira visita a resolução
// do número na API pode terminar depois da hidratação.
export default function WhatsappLink({ className, children }: Props) {
  const [href, setHref] = useState(`https://wa.me/${DEFAULT_WHATSAPP}`);

  useEffect(() => {
    setHref(getWhatsappUrl());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.href = getWhatsappUrl();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
