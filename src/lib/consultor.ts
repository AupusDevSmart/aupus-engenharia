// Rastreamento do consultor que indicou o visitante.
// O código chega via ?consultor=CODIGO na URL, é persistido em localStorage
// (com espelho em cookie de 1 ano, caso o localStorage seja limpo) e usado
// pra direcionar os botões de WhatsApp do Clube pro consultor certo —
// mesmo em visitas futuras sem o parâmetro na URL.

const STORAGE_KEY = 'aupus_consultor';
const TTL_DIAS = 5;
const COOKIE_MAX_AGE = 60 * 60 * 24 * TTL_DIAS; // 5 dias
const TTL_MS = COOKIE_MAX_AGE * 1000;

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.aupusenergia.com.br/api';

// Número padrão da Aupus usado quando não há consultor salvo
export const DEFAULT_WHATSAPP = '5562996547888';

type Consultor = {
  codigo: string;
  nome?: string | null;
  whatsapp?: string | null;
  capturadoEm?: string;
  expiraEm?: number; // timestamp (ms) — código expira em 5 dias
};

function lerCookie(): Consultor | null {
  const match = document.cookie.match(/(?:^|;\s*)aupus_consultor=([^;]*)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

function salvar(consultor: Consultor) {
  // Mantém a validade original (5 dias a partir da 1ª captura); só define quando ausente
  const comExpiracao: Consultor = {
    ...consultor,
    expiraEm: consultor.expiraEm ?? Date.now() + TTL_MS,
  };
  const json = JSON.stringify(comExpiracao);
  try {
    localStorage.setItem(STORAGE_KEY, json);
  } catch {
    // localStorage indisponível (modo privado etc.) — cookie cobre
  }
  document.cookie = `${STORAGE_KEY}=${encodeURIComponent(json)}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

function limpar() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignora
  }
  document.cookie = `${STORAGE_KEY}=; max-age=0; path=/`;
}

// Descarta o código se já passou dos 5 dias
function seValido(consultor: Consultor | null): Consultor | null {
  if (!consultor) return null;
  if (consultor.expiraEm && Date.now() > consultor.expiraEm) {
    limpar();
    return null;
  }
  return consultor;
}

export function getConsultorSalvo(): Consultor | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return seValido(JSON.parse(raw));
  } catch {
    // cai pro cookie
  }
  const doCookie = seValido(lerCookie());
  if (doCookie) {
    // restaura o localStorage a partir do cookie (preservando a validade original)
    salvar(doCookie);
  }
  return doCookie;
}

/**
 * Chamar uma vez na carga da página: captura ?consultor= da URL,
 * persiste e resolve nome/whatsapp na API pública.
 */
export async function capturarConsultorDaUrl(): Promise<void> {
  const params = new URLSearchParams(window.location.search);
  const codigo = (params.get('consultor') || params.get('ref') || '').trim().toUpperCase();

  const salvo = getConsultorSalvo();

  if (codigo && (!salvo || salvo.codigo !== codigo)) {
    salvar({ codigo, capturadoEm: new Date().toISOString() });
  }

  const atual = getConsultorSalvo();
  if (!atual?.codigo || atual.whatsapp) {
    return;
  }

  // Resolve o código na API; se falhar (offline etc.), tenta de novo na próxima visita
  try {
    const res = await fetch(`${API_URL}/publico/consultor/${encodeURIComponent(atual.codigo)}`);
    if (res.ok) {
      const json = await res.json();
      if (json?.data) {
        salvar({
          ...atual,
          nome: json.data.nome || null,
          whatsapp: json.data.whatsapp || null,
        });
      }
    } else if (res.status === 404) {
      // código inválido — remove pra não insistir
      limpar();
    }
  } catch {
    // sem rede/CORS — mantém o código salvo e segue com o número padrão
  }
}

/**
 * URL do WhatsApp: do consultor salvo, ou o número padrão da Aupus.
 */
export function getWhatsappUrl(): string {
  const consultor = getConsultorSalvo();
  const numero = consultor?.whatsapp || DEFAULT_WHATSAPP;
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
 * Notifica o consultor salvo sobre um novo lead do formulário, via template
 * oficial de WhatsApp (backend `encaminhar_para_consultor`).
 * Retorna true se o backend confirmou o envio. Retorna false quando não há
 * consultor salvo ou o envio falhou — nesses casos segue-se o fluxo normal.
 */
export async function notificarLeadConsultor(dados: LeadDados): Promise<boolean> {
  const consultor = getConsultorSalvo();
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
