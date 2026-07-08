// Rastreamento do consultor que indicou o visitante.
// O código chega via ?consultor=CODIGO na URL, é persistido em localStorage
// (com espelho em cookie de 1 ano, caso o localStorage seja limpo) e usado
// pra direcionar os botões de WhatsApp do Clube pro consultor certo —
// mesmo em visitas futuras sem o parâmetro na URL.

const STORAGE_KEY = 'aupus_consultor';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 ano

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.aupusenergia.com.br/api';

// Número padrão da Aupus usado quando não há consultor salvo
export const DEFAULT_WHATSAPP = '5562996547888';

type Consultor = {
  codigo: string;
  nome?: string | null;
  whatsapp?: string | null;
  capturadoEm?: string;
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
  const json = JSON.stringify(consultor);
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

export function getConsultorSalvo(): Consultor | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // cai pro cookie
  }
  const doCookie = lerCookie();
  if (doCookie) {
    // restaura o localStorage a partir do cookie
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
