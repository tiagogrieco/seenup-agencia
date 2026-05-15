import {
    Sparkles, MessageCircle, Brain, Code2, Smartphone, BarChart3,
    Zap, ArrowRight, Check, Mail, Phone, MapPin, ExternalLink,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5534996537992?text=Ol%C3%A1%20Seenup%2C%20tenho%20interesse%20em%20um%20projeto";

export default function App() {
    return (
        <div className="min-h-screen bg-bg text-ink">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                    <img src="/logo.svg" alt="Seenup Digital" className="h-10" />
                    <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
                        <a href="#servicos" className="hover:text-primary">Serviços</a>
                        <a href="#cases" className="hover:text-primary">Cases</a>
                        <a href="#processo" className="hover:text-primary">Processo</a>
                        <a href="#contato" className="hover:text-primary">Contato</a>
                    </nav>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                        className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" /> Falar agora
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="px-4 sm:px-6 py-20 md:py-28">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" /> Agência de software · Uberlândia, MG
                    </div>
                    <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6 font-display tracking-tighter text-ink">
                        Software que faz<br />
                        seu negócio <span className="italic text-primary">crescer.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Construímos SaaS, automações de WhatsApp e ferramentas com IA para salões de beleza,
                        comércios locais e franquias. Da ideia ao usuário pagante.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark flex items-center gap-2 shadow-lg shadow-primary/20">
                            Vamos conversar <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#cases" className="text-gray-700 hover:text-primary font-medium px-4 py-2">
                            Ver cases →
                        </a>
                    </div>
                </div>
            </section>

            {/* Serviços */}
            <section id="servicos" className="bg-white py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display tracking-tighter">O que fazemos</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            4 frentes de trabalho. Tudo desenhado pra resultado, não pra portfólio.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            {
                                icon: Code2, title: "SaaS sob medida",
                                desc: "Do MVP ao produto pagante. Stack moderna (React, Postgres, Supabase), multi-tenant, escalável.",
                                tags: ["MVP em 30 dias", "Stack moderna", "Multi-tenant"]
                            },
                            {
                                icon: MessageCircle, title: "Automação WhatsApp",
                                desc: "Lembretes, recuperação de clientes ausentes, feedback automático, vendas via chat. Anti-ban.",
                                tags: ["Evolution API", "n8n workflows", "Anti-ban"]
                            },
                            {
                                icon: Brain, title: "IA aplicada",
                                desc: "Análise de comportamento, sugestões de retenção, scoring de clientes. IA prática, não teoria.",
                                tags: ["Claude/GPT", "Análise preditiva", "Insights diários"]
                            },
                            {
                                icon: BarChart3, title: "Dashboards & BI",
                                desc: "Métricas que importam pro negócio. DRE, retenção, ticket médio, cohort. Sem planilha do Excel.",
                                tags: ["Charts dinâmicos", "Exportação", "Mobile-first"]
                            },
                        ].map(({ icon: Icon, title, desc, tags }) => (
                            <div key={title} className="bg-bg rounded-2xl p-7 border border-gray-100 hover:border-primary hover:shadow-md transition">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl mb-3">{title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map(t => (
                                        <span key={t} className="text-xs bg-white border border-primary/20 text-primary/80 px-2.5 py-1 rounded-full">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cases */}
            <section id="cases" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display tracking-tighter">Cases reais</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Produtos que estão no ar agora, gerando receita pra quem usa.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        <CaseCard
                            title="CRM Seenup Digital"
                            tag="SaaS B2B · Salões"
                            desc="CRM multi-tenant pra salões de beleza. Agenda, financeiro, WhatsApp automático, IA pra recuperar clientes ausentes."
                            link="https://crm.seenupdigital.com"
                            stats={[
                                { label: "Multi-tenant", value: "RLS Postgres" },
                                { label: "Trial 14d", value: "Auto-seed demo" },
                                { label: "Stack", value: "React + Supabase" },
                            ]}
                        />
                        <CaseCard
                            title="GlowFast Esmalteria"
                            tag="App de gestão · Produção"
                            desc="App single-tenant em produção pra esmalteria/escovaria. Agenda, comissões, fluxo de caixa, integração WhatsApp."
                            link="https://glowfast.app"
                            stats={[
                                { label: "Em produção", value: "1+ ano" },
                                { label: "Profissionais", value: "10+" },
                                { label: "Atendimentos", value: "milhares" },
                            ]}
                        />
                        <CaseCard
                            title="Leads BR"
                            tag="Plataforma · B2B"
                            desc="Plataforma de prospecção baseada em CNPJ público. 68M empresas, 38M estabelecimentos com busca instantânea."
                            link="https://leads.seenupdigital.com"
                            stats={[
                                { label: "Base BR", value: "68M empresas" },
                                { label: "Busca", value: "<2s" },
                                { label: "Export", value: "XLSX + CSV" },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Processo */}
            <section id="processo" className="bg-white py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display tracking-tighter">Como trabalhamos</h2>
                        <p className="text-gray-600">Sprints curtas, entregas semanais, sem enrolação.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { n: 1, t: "Diagnóstico", d: "1 reunião pra entender problema, usuário e métrica de sucesso." },
                            { n: 2, t: "Protótipo navegável", d: "Em 1 semana você vê o produto funcionando (mesmo sem backend)." },
                            { n: 3, t: "MVP em produção", d: "30-45 dias pra ter usuário real testando e dando feedback." },
                            { n: 4, t: "Iteração contínua", d: "Releases semanais, métricas semanais, evolução baseada em uso." },
                        ].map(s => (
                            <div key={s.n} className="text-center">
                                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {s.n}
                                </div>
                                <h3 className="font-bold mb-2">{s.t}</h3>
                                <p className="text-sm text-gray-600">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Stack que dominamos</h3>
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        {["React", "TypeScript", "Vite", "Tailwind", "Supabase", "PostgreSQL", "Postgres RLS", "Edge Functions", "n8n", "Evolution API", "Claude API", "OpenAI", "Docker", "Nginx", "EasyPanel", "Cloudflare", "GitHub Actions"].map(t => (
                            <span key={t} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-700">{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diferencial */}
            <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display tracking-tighter">Por que Seenup?</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {[
                            { t: "Produtos no ar", d: "Não somos só agência. Temos SaaS próprios pagantes. Sabemos o que escala." },
                            { t: "Stack moderna", d: "Nada de WordPress ou plataforma legada. React, Postgres, Cloud. Performance e escalabilidade." },
                            { t: "Sem firula", d: "Releases semanais. Métricas semanais. Conversa direta no WhatsApp. Sem burocracia." },
                        ].map(b => (
                            <div key={b.t} className="bg-white/70 backdrop-blur rounded-2xl p-6">
                                <div className="flex items-start gap-2 mb-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <h3 className="font-bold">{b.t}</h3>
                                </div>
                                <p className="text-gray-700 text-sm">{b.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contato" className="bg-primary text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tighter">Tem um projeto em mente?</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Vamos conversar 15 minutos sem compromisso pra ver se faz sentido a gente trabalhar junto.
                    </p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-bg transition shadow-xl">
                        <MessageCircle className="w-5 h-5" /> Mandar WhatsApp
                    </a>
                    <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
                        <a href={WHATSAPP_URL} className="flex items-center gap-2 hover:opacity-75">
                            <Phone className="w-4 h-4" /> (34) 9 9653-7992
                        </a>
                        <a href="mailto:tiagobmoreira21@gmail.com" className="flex items-center gap-2 hover:opacity-75">
                            <Mail className="w-4 h-4" /> tiagobmoreira21@gmail.com
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Uberlândia, MG
                        </span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-ink text-gray-300 py-10 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
                    <div>
                        <div className="font-bold text-white text-lg mb-2">Seenup Digital</div>
                        <p className="opacity-75">Agência de software para negócios locais.</p>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <a href="https://crm.seenupdigital.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                            CRM <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href="https://leads.seenupdigital.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                            Leads <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/10 text-xs opacity-50 text-center">
                    © 2026 Seenup Digital · Todos os direitos reservados
                </div>
            </footer>
        </div>
    );
}

function CaseCard({ title, tag, desc, link, stats }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition group">
            <div className="h-32 bg-gradient-to-br from-primary to-accent relative">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <span className="font-bold text-2xl tracking-tight">{title.split(" ")[0]}</span>
                </div>
            </div>
            <div className="p-6">
                <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">{tag}</div>
                <h3 className="font-bold text-lg mb-3">{title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{desc}</p>
                <div className="border-t border-gray-100 pt-4 mb-4 grid grid-cols-3 gap-2">
                    {stats.map(s => (
                        <div key={s.label}>
                            <div className="text-[10px] uppercase font-semibold text-gray-400">{s.label}</div>
                            <div className="text-xs font-bold text-ink">{s.value}</div>
                        </div>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noreferrer"
                    className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver projeto <ExternalLink className="w-3.5 h-3.5" />
                </a>
            </div>
        </div>
    );
}
