import { Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../../components/Footer';

export const metadata = {
  title: "Política de Privacidade | Aupus Energia",
  description: "Política de Privacidade e Proteção de Dados da Aupus Energia: quais dados coletamos no site e nos aplicativos, como usamos, com quem compartilhamos e seus direitos pela LGPD.",
};

const ATUALIZACAO = "21 de julho de 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-aupus-navy mb-4">{title}</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-aupus-green selection:text-aupus-navy">

      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <Link href="/">
            <Image
              src="/Logotipo.png"
              alt="Aupus Energia"
              width={180}
              height={60}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-slate-600 hover:text-aupus-green transition-colors"
          >
            VOLTAR AO SITE
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <div className="w-14 h-14 rounded-2xl bg-aupus-navy flex items-center justify-center mb-6">
              <Shield className="text-aupus-green" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-aupus-navy mb-3">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-slate-500 text-sm">Última atualização: {ATUALIZACAO}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">

            <Section title="1. Quem somos e a quem esta política se aplica">
              <p>
                Esta Política de Privacidade descreve como a <strong>Aupus Energia</strong> (Grupo
                Santares, CNPJ 36.888.984/0001-36, com sede em Goiânia/GO) coleta, utiliza, armazena e
                protege os dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de
                Dados (Lei nº 13.709/2018 — LGPD).
              </p>
              <p>Ela se aplica a todos os nossos canais digitais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Este site e o site do Clube Aupus;</li>
                <li>Os aplicativos móveis <strong>Aupus Energia</strong> para iOS e Android;</li>
                <li>A plataforma web de gestão de energia (Nexus).</li>
              </ul>
            </Section>

            <Section title="2. Quais dados coletamos">
              <p><strong>No site (formulários de contato e WhatsApp):</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome, e-mail e telefone, fornecidos voluntariamente para atendimento comercial.</li>
              </ul>
              <p><strong>Nos aplicativos e na plataforma (clientes com conta):</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dados cadastrais: nome, e-mail, telefone e documento;</li>
                <li>Dados das suas unidades consumidoras de energia (endereço, concessionária, consumo);</li>
                <li>Dados financeiros relacionados ao serviço: faturas, boletos, valores e histórico de pagamentos;</li>
                <li>Identificador do dispositivo (token) exclusivamente para envio de notificações, quando você autoriza;</li>
                <li>Dados técnicos mínimos de acesso (registros de autenticação) para segurança da conta.</li>
              </ul>
              <p>
                <strong>Não coletamos</strong> localização, contatos, fotos ou qualquer dado do seu
                dispositivo além do necessário para o funcionamento do serviço. Não realizamos
                rastreamento para publicidade.
              </p>
            </Section>

            <Section title="3. Para que usamos os dados">
              <ul className="list-disc pl-6 space-y-2">
                <li>Prestar o serviço contratado: gestão de energia, emissão e disponibilização de faturas e boletos;</li>
                <li>Autenticar seu acesso e proteger sua conta;</li>
                <li>Enviar notificações sobre o serviço (ex.: nova fatura disponível), quando autorizadas por você;</li>
                <li>Responder solicitações de orçamento e contato comercial;</li>
                <li>Cumprir obrigações legais, contábeis e regulatórias.</li>
              </ul>
              <p>Não utilizamos seus dados para venda a terceiros nem para publicidade direcionada.</p>
            </Section>

            <Section title="4. Com quem compartilhamos">
              <p>Compartilhamos dados apenas quando necessário para a prestação do serviço:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Empresas do Grupo Santares (holding controladora), para fins administrativos;</li>
                <li>Instituições financeiras, para emissão e processamento de boletos e pagamentos;</li>
                <li>Concessionárias de energia, no âmbito da gestão das suas unidades consumidoras;</li>
                <li>
                  Provedores de infraestrutura tecnológica (hospedagem, armazenamento e entrega de
                  notificações via Apple e Google), que atuam como operadores sob nossas instruções;
                </li>
                <li>Autoridades públicas, quando exigido por lei.</li>
              </ul>
              <p><strong>Nunca vendemos, alugamos ou cedemos seus dados para fins de marketing de terceiros.</strong></p>
            </Section>

            <Section title="5. Como protegemos seus dados">
              <ul className="list-disc pl-6 space-y-2">
                <li>Toda a comunicação entre os aplicativos, o site e nossos servidores é criptografada (HTTPS/TLS);</li>
                <li>Credenciais de acesso são armazenadas de forma segura no dispositivo (Keychain no iOS e armazenamento criptografado no Android);</li>
                <li>Senhas são armazenadas com criptografia irreversível em nossos servidores;</li>
                <li>O acesso interno aos dados é restrito a colaboradores que precisam dele para prestar o serviço.</li>
              </ul>
            </Section>

            <Section title="6. Por quanto tempo guardamos">
              <p>
                Mantemos seus dados enquanto sua conta estiver ativa ou enquanto forem necessários para a
                prestação do serviço. Após o encerramento da relação, dados podem ser retidos pelo prazo
                exigido por obrigações legais, fiscais e regulatórias, sendo eliminados ou anonimizados em
                seguida.
              </p>
            </Section>

            <Section title="7. Seus direitos (LGPD)">
              <p>Como titular de dados, você pode solicitar a qualquer momento:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade dos dados a outro fornecedor;</li>
                <li>Informação sobre com quem compartilhamos seus dados;</li>
                <li>Revogação do consentimento (ex.: desativar notificações).</li>
              </ul>
            </Section>

            <Section title="8. Exclusão de conta e de dados">
              <p>Você pode solicitar a exclusão da sua conta e dos seus dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Pelo aplicativo:</strong> acesse <em>Perfil → Excluir conta</em>. A solicitação
                  é registrada e nossa equipe conclui o processo, informando você por e-mail;
                </li>
                <li>
                  <strong>Por e-mail:</strong> envie a solicitação para{' '}
                  <a href="mailto:contato@aupusenergia.com.br" className="text-aupus-navy font-bold underline hover:text-aupus-green transition-colors">
                    contato@aupusenergia.com.br
                  </a>.
                </li>
              </ul>
              <p>
                Alguns dados poderão ser mantidos pelo período exigido por lei (ex.: registros fiscais de
                faturamento), conforme a seção 6.
              </p>
            </Section>

            <Section title="9. Cookies">
              <p>
                Nosso site utiliza apenas cookies e armazenamento local essenciais ao funcionamento das
                páginas. Não utilizamos cookies de publicidade nem de rastreamento entre sites.
              </p>
            </Section>

            <Section title="10. Contato">
              <p>
                Para qualquer dúvida ou solicitação sobre privacidade e proteção de dados, fale com a
                gente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  E-mail:{' '}
                  <a href="mailto:contato@aupusenergia.com.br" className="text-aupus-navy font-bold underline hover:text-aupus-green transition-colors">
                    contato@aupusenergia.com.br
                  </a>
                </li>
                <li>Endereço: Brookfield Towers, Av. Dep. Jamel Cecílio, 2929, Sala 1013, Bloco A — Jardim Goiás, Goiânia/GO</li>
              </ul>
            </Section>

            <Section title="11. Alterações desta política">
              <p>
                Esta política pode ser atualizada para refletir mudanças no serviço ou na legislação. A
                versão vigente estará sempre disponível nesta página, com a data da última atualização no
                topo.
              </p>
            </Section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
