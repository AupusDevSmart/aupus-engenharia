// Rastreamento do consultor que indicou o visitante.
// O código chega via ?consultor=CODIGO na URL e vale APENAS para a sessão atual
// (guardado em memória, sem localStorage/cookie). Recarregar a página sem o
// parâmetro descarta o consultor e os botões voltam pro número padrão da Aupus.

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.aupusenergia.com.br/api';

// Número padrão da Aupus usado quando não há consultor na URL
export const DEFAULT_WHATSAPP = '5562996547888';

type Consultor = {
  codigo: string;
  nome?: string | null;
  whatsapp?: string | null;
};

// Só vive enquanto a página estiver aberta. Sem persistência.
let consultorAtual: Consultor | null = null;

export function getConsultorSalvo(): Consultor | null {
  return consultorAtual;
}

/**
 * Chamar uma vez na carga da página: captura ?consultor= da URL e resolve
 * nome/whatsapp na API pública. Sem parâmetro na URL, nada é guardado.
 */
export async function capturarConsultorDaUrl(): Promise<void> {
  const params = new URLSearchParams(window.location.search);
  const codigo = (params.get('consultor') || params.get('ref') || '').trim().toUpperCase();

  if (!codigo) {
    consultorAtual = null;
    return;
  }

  consultorAtual = { codigo };

  // Resolve o código na API; se falhar (offline etc.), mantém o código e
  // segue com o número padrão até a próxima tentativa.
  try {
    const res = await fetch(`${API_URL}/publico/consultor/${encodeURIComponent(codigo)}`);
    if (res.ok) {
      const json = await res.json();
      if (json?.data) {
        consultorAtual = {
          codigo,
          nome: json.data.nome || null,
          whatsapp: json.data.whatsapp || null,
        };
      }
    } else if (res.status === 404) {
      // código inválido — descarta
      consultorAtual = null;
    }
  } catch {
    // sem rede/CORS — mantém o código e segue com o número padrão
  }
}

/**
 * URL do WhatsApp: do consultor da URL, ou o número padrão da Aupus.
 */
export function getWhatsappUrl(): string {
  const numero = consultorAtual?.whatsapp || DEFAULT_WHATSAPP;
  return `https://wa.me/${numero}`;
}

type LeadDados = {
  name: string;
  phone: string;
  email?: string | null;
  propertyType: string;
  message: string;
};

/**
 * Notifica o consultor da URL sobre um novo lead do formulário, via template
 * oficial de WhatsApp (backend `encaminhar_para_consultor`).
 * Retorna true se o backend confirmou o envio. Retorna false quando não há
 * consultor na URL ou o envio falhou — nesses casos segue-se o fluxo normal.
 */
export async function notificarLeadConsultor(dados: LeadDados): Promise<boolean> {
  const consultor = consultorAtual;
  if (!consultor?.codigo) return false;

  try {
    const res = await fetch(
      `${API_URL}/publico/consultor/${encodeURIComponent(consultor.codigo)}/lead`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: dados.name,
          telefone: dados.phone,
          email: dados.email || null,
          tipo_imovel: dados.propertyType,
          mensagem: dados.message,
        }),
      }
    );

    if (!res.ok) return false;
    const json = await res.json();
    return json?.success === true;
  } catch {
    // sem rede/CORS/erro no backend — segue o fluxo normal
    return false;
  }
}
