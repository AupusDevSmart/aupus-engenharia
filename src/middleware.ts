import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Se estiver acessando pelo domínio clube.aupusenergia.com.br
  if (hostname === 'clube.aupusenergia.com.br' || hostname.startsWith('clube.aupusenergia.com.br')) {
    // Pegar o pathname atual
    const pathname = request.nextUrl.pathname;

    // Se já estiver em /clube, não fazer nada
    if (pathname.startsWith('/clube')) {
      return NextResponse.next();
    }

    // Redirecionar para /clube mantendo o resto do path
    const newUrl = request.nextUrl.clone();

    // Se for a raiz, redirecionar para /clube
    if (pathname === '/') {
      newUrl.pathname = '/clube';
    } else {
      // Para outros paths, adicionar /clube antes
      newUrl.pathname = `/clube${pathname}`;
    }

    // Fazer rewrite interno (não muda a URL no navegador)
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

// Configurar em quais rotas o middleware deve rodar
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};