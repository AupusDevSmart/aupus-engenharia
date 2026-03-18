# Aupus Engenharia - Interface Web

Repositório contendo o front-end corporativo da Aupus Engenharia e a landing page do Clube Aupus. Desenvolvido com arquitetura baseada em componentes e Next.js App Router.

## Stack Tecnológica
* **Framework:** Next.js 16.1.6 (App Router)
* **Biblioteca UI:** React 19.2.3
* **Linguagem:** TypeScript 5.x
* **Estilização:** Tailwind CSS v4
* **Ícones:** Lucide React

## Pré-requisitos
* **Node.js:** v20.20.1 ou superior.
* **Gerenciador de Pacotes:** npm.

## Instalação e Execução

1. Instale as dependências do projeto:
\`\`\`bash
npm install
\`\`\`

2. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`
O acesso local estará disponível em `http://localhost:3000`.

## Build de Produção

Para gerar a versão otimizada para produção e iniciar o servidor:
\`\`\`bash
npm run build
npm run start
\`\`\`

## Estrutura de Diretórios
* `/src/app/`: Rotas da aplicação. Contém a página principal (`/`) e a rota específica do Clube Aupus (`/clube`).
* `/src/components/`: Componentes de interface modularizados e reutilizáveis (FaqClube, Hero, Navbar, Footer, etc).
* `/public/`: Ativos estáticos (imagens, ícones).

## Notas de Integração (Hand-off)
* **Formulários de Captação:** O envio de leads atual na interface é simulado (mock). É necessário substituir a rotina de submissão nos componentes de formulário por uma requisição HTTP (`fetch` ou `axios`) apontando para a API ou CRM de destino.
* **Variáveis de Ambiente:** O repositório atual não possui arquivos `.env`. Durante a integração do formulário, a equipe sucessora deverá provisionar as variáveis de ambiente necessárias (ex: `NEXT_PUBLIC_API_URL`) na infraestrutura de hospedagem.