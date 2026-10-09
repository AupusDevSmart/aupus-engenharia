import { UserX } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../../components/Footer';

export const metadata = {
  title: "Exclusão de Conta | Aupus Energia",
  description: "Como solicitar a exclusão da sua conta e dos seus dados pessoais nos aplicativos da Aupus Energia (Smart Nexus e NexON): passo a passo, dados excluídos, dados retidos e prazos.",
};

const ATUALIZACAO = "9 de outubro de 2026";
const EMAIL = "contato@aupusenergia.com.br";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Solicitação de exclusão de conta")}`;

const linkClass = "text-aupus-navy font-bold underline hover:text-aupus-green transition-colors";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-aupus-navy mb-4">{title}</h2>
      <div className="space-y-4 text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ExclusaoDeContaPage() {
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
              <UserX className="text-aupus-green" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-aupus-navy mb-3">
              Exclusão de Conta e de Dados
            </h1>
            <p className="text-slate-500 text-sm">Última atualização: {ATUALIZACAO}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">

            <Section title="1. A quem esta página se aplica">
              <p>
                Esta página explica como solicitar a exclusão da sua conta e dos seus dados pessoais nos
                aplicativos da <strong>Aupus Energia</strong> (Grupo Santares, CNPJ 36.888.984/0001-36):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Smart Nexus</strong> — gestão de energia, faturas, propostas e usinas (iOS e Android);</li>
                <li><strong>NexON</strong> — monitoramento e operação de equipamentos (iOS e Android);</li>
                <li>A plataforma web Nexus, que usa a mesma conta.</li>
              </ul>
            </Section>

            <Section title="2. Como solicitar">
              <p><strong>Pelo aplicativo Smart Nexus:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Entre com seu e-mail e senha;</li>
                <li>Abra <em>Perfil</em> e toque em <em>Solicitar exclusão da conta</em>;</li>
                <li>Confirme. A solicitação fica registrada e você recebe a confirmação por e-mail.</li>
              </ol>
              <p><strong>Pelo aplicativo NexON:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Entre com seu e-mail e senha;</li>
                <li>Abra <em>Conta</em> e toque em <em>Solicitar exclusão da conta</em>;</li>
                <li>Envie o e-mail de solicitação que o app já deixa pronto, com seu nome e e-mail.</li>
              </ol>
              <p><strong>Sem acesso ao aplicativo:</strong></p>
              <p>
                Envie um e-mail para{' '}
                <a href={MAILTO} className={linkClass}>{EMAIL}</a>{' '}
                com o assunto &quot;Solicitação de exclusão de conta&quot;, informando seu nome completo e o
                e-mail usado no login. Podemos pedir uma confirmação de identidade antes de concluir.
              </p>
            </Section>

            <Section title="3. Prazo">
              <p>
                A exclusão é concluída em até <strong>7 dias úteis</strong> a partir da solicitação, e
                você é avisado por e-mail quando terminar. Depois disso, o acesso aos aplicativos e à
                plataforma web é encerrado.
              </p>
            </Section>

            <Section title="4. O que é excluído">
              <ul className="list-disc pl-6 space-y-2">
                <li>Conta de acesso: nome, e-mail, telefone, CPF, senha e foto de perfil;</li>
                <li>Identificadores do dispositivo usados para notificações (token de push);</li>
                <li>Preferências e configurações salvas nos aplicativos;</li>
                <li>Registros técnicos de uso e falhas associados à sua conta.</li>
              </ul>
            </Section>

            <Section title="5. O que pode ser mantido, e por quanto tempo">
              <p>
                Alguns dados precisam ser guardados por obrigação legal, mesmo após a exclusão da conta.
                Eles ficam bloqueados para qualquer outro uso e são eliminados ao fim do prazo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Faturas, boletos, notas fiscais, repasses e contratos (como o termo de adesão): pelo
                  prazo exigido pela legislação fiscal e civil, de até <strong>5 anos</strong>;
                </li>
                <li>
                  Registros de acesso a aplicações: <strong>6 meses</strong>, conforme o Marco Civil da
                  Internet (Lei nº 12.965/2014);
                </li>
                <li>
                  Dados de unidades consumidoras e de geração de energia vinculados a contratos ainda
                  ativos de outros titulares, sem identificação pessoal sua.
                </li>
              </ul>
            </Section>

            <Section title="6. Excluir só alguns dados">
              <p>
                Se você quer manter a conta e apagar apenas parte dos seus dados (por exemplo, a foto de
                perfil ou o telefone), envie o pedido para{' '}
                <a href={MAILTO} className={linkClass}>{EMAIL}</a>{' '}
                dizendo o que deseja remover. Atendemos no mesmo prazo de 7 dias úteis.
              </p>
            </Section>

            <Section title="7. Mais informações">
              <p>
                Os demais direitos que você tem pela LGPD e a forma como tratamos seus dados estão na
                nossa{' '}
                <Link href="/politica-de-privacidade" className={linkClass}>Política de Privacidade</Link>.
              </p>
            </Section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
