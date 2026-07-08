"use client";

import { useEffect } from 'react';
import { capturarConsultorDaUrl } from '../lib/consultor';

// Captura o ?consultor= da URL em qualquer página e persiste (ver src/lib/consultor.ts)
export default function ConsultorTracker() {
  useEffect(() => {
    capturarConsultorDaUrl();
  }, []);

  return null;
}
