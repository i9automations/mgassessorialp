import { FormEvent, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Brush,
  CheckCircle2,
  Handshake,
  Map,
  Megaphone,
  MessageCircle,
  Minus,
  Palette,
  Plus,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react';

const assets = {
  hero: '/assets/hero-collage.png',
  logo: '/assets/mg-logo.png',
  logos: [
    '/assets/logo-saint-germain.png',
    '/assets/logo-ladies.png',
    '/assets/logo-phersonalize.png',
    '/assets/logo-utilizatto.png',
    '/assets/logo-hiatto.png',
  ],
  founder: '/assets/optimized/founder.jpg',
  hypeaBg: '/assets/hypea-logo-bg.png',
  hypeaBoard: '/assets/optimized/hypea-board.jpg',
};

const pillars = [
  {
    title: 'Estratégia que vende',
    icon: Target,
    image: '/assets/optimized/pillar-strategy.jpg',
    text: 'Cada decisão de conteúdo é baseada em dados e no comportamento do seu público. Sem achismo, sem post por postar.',
  },
  {
    title: 'Branding que fideliza',
    icon: Brush,
    image: '/assets/optimized/pillar-branding.jpg',
    text: 'Construímos a identidade visual e editorial da sua marca para que ela seja reconhecida, desejada e lembrada.',
  },
  {
    title: 'Foco em e-commerce',
    icon: ShoppingCart,
    image: '/assets/optimized/pillar-ecommerce.jpg',
    text: 'Entendemos que vender online exige comunidade, autoridade de marca e uma estratégia conectada a cada ponto da jornada do cliente.',
  },
  {
    title: 'Parceria real',
    icon: Handshake,
    image: '/assets/optimized/pillar-partner.jpg',
    text: 'Somos parceiros presentes, comprometidos com o seu resultado e tão investidos no seu crescimento quanto você.',
  },
];

const services = [
  {
    step: 'Etapa 1',
    title: 'DNA Estratégico',
    icon: Target,
    text: 'Entendemos a fundo sua marca, seu público e seus objetivos para criar uma base sólida: posicionamento, visual, editorial e tom de voz.',
  },
  {
    step: 'Etapa 2',
    title: 'Plano Estratégico',
    icon: Map,
    text: 'Transformamos o potencial da sua marca em ação, combinando criatividade e dados para unir branding, performance e vendas.',
  },
  {
    step: 'Etapa 3',
    title: 'Social Media',
    icon: Megaphone,
    text: 'Garantimos uma presença consistente, com propósito, relevância e identidade, preparando o terreno para as vendas.',
  },
  {
    step: 'Etapa 4',
    title: 'Criação Visual',
    icon: Palette,
    text: 'Cada peça reflete o padrão estético da sua marca, encantando no feed, convertendo em anúncios e fidelizando na experiência.',
  },
  {
    step: 'Etapa 5',
    title: 'Comu Criativa',
    icon: MessageCircle,
    text: 'Mantemos o relacionamento com o cliente além da vitrine, ativando canais de comunicação com estratégia e frequência.',
  },
  {
    step: 'Etapa 6',
    title: 'Hub de Conteúdo',
    icon: Video,
    text: 'Um time interno dedicado a criar conteúdo de alta qualidade para sua marca, com volume, velocidade e alinhamento à identidade.',
    featured: true,
  },
];

const clients = [
  { image: '/assets/client-saint.png', handle: '@saintgermain', category: 'Moda e Acessórios' },
  { image: '/assets/client-petala.png', handle: '@petalabeauty', category: 'Cosméticos' },
  { image: '/assets/client-ladies.png', handle: '@_ladiesfitness_', category: 'Moda Fitness' },
  { image: '/assets/client-vilma.png', handle: '@bolsasvilmamirian', category: 'Moda e Acessórios' },
  { image: '/assets/client-basic.png', handle: '@basicoficial_', category: 'Moda Feminina' },
  { image: '/assets/client-comercial.png', handle: '@comercialtextilstore', category: 'Têxtil' },
];

const faqs = [
  {
    question: 'Vocês atendem qualquer tipo de e-commerce?',
    answer: 'Atendemos marcas digitais que precisam de estratégia, identidade e consistência para crescer. O diagnóstico inicial ajuda a entender se a MG é o melhor parceiro para o momento da marca.',
  },
  {
    question: 'Vocês criam o conteúdo ou só planejam?',
    answer: 'Criamos e planejamos tudo. Do calendário editorial à arte final, passando pelos textos, roteiros de vídeo e materiais gráficos. Além disso, clientes MG têm acesso ao Hub de Conteúdo, nosso núcleo interno de produção in-house.',
  },
  {
    question: 'Como funciona a comunicação durante o processo?',
    answer: 'A comunicação acontece de forma próxima, com rotina de alinhamentos, aprovações e acompanhamento para manter estratégia e execução no mesmo ritmo.',
  },
  {
    question: 'Vocês trabalham com lançamentos de marcas?',
    answer: 'Sim. Estruturamos posicionamento, identidade editorial, plano de conteúdo e materiais de comunicação para marcas em fase de lançamento ou reposicionamento.',
  },
  {
    question: 'Como é o processo para começar?',
    answer: 'Você preenche o formulário, nossa equipe entende o momento da marca e agenda uma conversa para avaliar objetivos, necessidades e próximos passos.',
  },
  {
    question: 'Vocês trabalham com tráfego pago?',
    answer: 'A MG atua na base estratégica e criativa que sustenta a performance. Quando necessário, direcionamos a comunicação para integrar conteúdo, campanhas e conversão.',
  },
  {
    question: 'Atendem marcas de outros estados?',
    answer: 'Sim. A operação é preparada para atender marcas de diferentes regiões com processos digitais e acompanhamento próximo.',
  },
];

const formFields = [
  { label: 'Nome completo', name: 'name', type: 'text', autoComplete: 'name', required: true },
  { label: 'E-mail', name: 'email', type: 'email', autoComplete: 'email', required: true },
  { label: 'Telefone', name: 'phone', type: 'tel', autoComplete: 'tel', required: true },
  { label: 'Nome da marca', name: 'brand', type: 'text', autoComplete: 'organization', required: true },
  { label: 'Instagram da marca', name: 'instagram', type: 'text', autoComplete: 'off', required: true },
  { label: 'Site da marca', name: 'website', type: 'url', autoComplete: 'url', required: false },
  { label: 'Faturamento mensal aproximado', name: 'revenue', type: 'text', autoComplete: 'off', required: true },
  { label: 'Maior desafio da marca hoje', name: 'challenge', type: 'text', autoComplete: 'off', required: false },
  { label: 'Como você nos conheceu?', name: 'source', type: 'text', autoComplete: 'off', required: false },
] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 140, damping: 24, mass: 0.7 },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

function IconBadge({ icon: Icon, className = '' }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={`icon-badge ${className}`} aria-hidden="true">
      <Icon size={18} strokeWidth={2.2} />
    </span>
  );
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? undefined : reveal}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.24 }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, invert = false }: { children: React.ReactNode; invert?: boolean }) {
  return <div className={`eyebrow ${invert ? 'eyebrow-invert' : ''}`}>{children}</div>;
}

function SectionKicker({ children, invert = false }: { children: React.ReactNode; invert?: boolean }) {
  return <p className={`section-kicker ${invert ? 'section-kicker-invert' : ''}`}>{children}</p>;
}

function CtaButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      className={`cta-button cta-button-${variant}`}
      href={href}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
    >
      <span>{children}</span>
      <span className="cta-icon" aria-hidden="true">
        <ArrowRight size={15} strokeWidth={2.4} />
      </span>
    </motion.a>
  );
}

function TopNav() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="top-nav"
      aria-label="Navegação principal"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="top-nav-links" aria-label="Seções da página">
        <a href="#servicos">Serviços</a>
        <a href="#clientes">Clientes</a>
        <a href="#hypea">Hypea</a>
        <a href="#faq">FAQ</a>
      </div>
      <motion.a
        className="top-nav-cta"
        href="#formulario"
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 360, damping: 24 }}
      >
        Diagnóstico
      </motion.a>
    </motion.nav>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.25 });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, shouldReduceMotion ? 0 : 72]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, shouldReduceMotion ? 1 : 1.035]);

  return (
    <header className="hero" id="top">
      <motion.img
        className="hero-bg"
        src={assets.hero}
        alt=""
        fetchPriority="high"
        decoding="async"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: heroY, scale: heroScale }}
      />
      <motion.div
        className="hero-content"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'visible'}
        variants={shouldReduceMotion ? undefined : stagger}
      >
        <motion.div className="brand-row" variants={reveal}>
          <img src={assets.logo} alt="MG Digital" decoding="async" />
          <span>MG Digital | Marketing para e-commerce</span>
        </motion.div>
        <motion.h1 variants={reveal}>
          Seu e-commerce
          <br />
          merece uma
          <br />
          marca forte.
        </motion.h1>
        <motion.div className="hero-ribbon" variants={reveal}>
          A gente constrói isso com você.
        </motion.div>
        <motion.div className="hero-copy" variants={reveal}>
          <strong>Somos uma agência especializada em marketing para e-commerce.</strong>
          <p>
            Unimos conteúdo estratégico, branding consistente e execução inteligente para
            transformar marcas em negócios que vendem todos os dias.
          </p>
        </motion.div>
        <motion.div className="hero-actions" variants={reveal}>
          <CtaButton href="#formulario">Quero transformar minha marca</CtaButton>
          <CtaButton href="#servicos" variant="secondary">Ver serviços</CtaButton>
        </motion.div>
      </motion.div>
    </header>
  );
}

function LogoStrip() {
  const logoItems = [...assets.logos, ...assets.logos, ...assets.logos];

  return (
    <section className="logo-strip" aria-label="Marcas atendidas">
      <div
        className="logo-strip-inner logo-strip-track"
      >
        {logoItems.map((logo, index) => (
          <img key={`${logo}-${index}`} src={logo} alt="" loading="lazy" decoding="async" />
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section section-light pillars-section">
      <Reveal className="section-head">
        <SectionKicker>MG Digital | Marketing para e-commerce</SectionKicker>
        <Eyebrow>Por que a MG?</Eyebrow>
        <h2>
          Não somos mais uma agência genérica.
          <span> Somos especialistas em e-commerce.</span>
        </h2>
      </Reveal>
      <div className="section-container">
        <Reveal>
          <h3 className="small-title">Os 4 Pilares da MG</h3>
        </Reveal>
        <motion.div
          className="pillar-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {pillars.map((pillar) => (
            <motion.article
              className="pillar-card"
              variants={reveal}
              whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.012 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              key={pillar.title}
            >
              <IconBadge icon={pillar.icon} className="pillar-icon" />
              <img src={pillar.image} alt="" loading="lazy" decoding="async" />
              <h4>{pillar.title}</h4>
              <p>{pillar.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section section-dark" id="servicos">
      <Reveal className="section-head">
        <SectionKicker invert>MG Digital | Marketing para e-commerce</SectionKicker>
        <Eyebrow invert>Nossos serviços</Eyebrow>
        <h2>
          Tudo o que sua marca precisa para crescer
          <span> no digital com consistência e resultado.</span>
        </h2>
      </Reveal>
      <div className="service-panel section-container">
        <motion.div
          className="service-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {services.map((service) => (
            <motion.article
              className={`service-card ${service.featured ? 'service-card-featured' : ''}`}
              variants={reveal}
              whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 320, damping: 25 }}
              key={service.step}
            >
              <span className="service-glow-line" aria-hidden="true" />
              <span className={`service-pill ${service.featured ? 'service-pill-gold' : ''}`}>
                <service.icon size={12} />
                {service.step}
              </span>
              <h3>{service.featured ? 'Hub de Conteúdo Nosso Grande Diferencial' : service.title}</h3>
              <p>{service.text}</p>
              {service.featured && <strong>Exclusivo para clientes MG, sem custo adicional.</strong>}
            </motion.article>
          ))}
        </motion.div>
        <CtaButton href="#formulario">Quero transformar minha marca</CtaButton>
      </div>
    </section>
  );
}

function Clients() {
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="section section-dark clients-section" id="clientes">
      <Reveal className="section-head">
        <SectionKicker invert>MG Digital | Marketing para e-commerce</SectionKicker>
        <Eyebrow invert>Marcas que cresceram com a MG Digital.</Eyebrow>
        <h2>
          Cada cliente tem uma história.
          <span> O que todas têm em comum?</span>
        </h2>
        <p className="subtitle">
          Chegaram com um desafio e saíram com uma marca mais forte, mais consistente e mais lucrativa.
        </p>
      </Reveal>
      <div className="client-marquee" aria-label="Clientes MG Digital">
        <div
          className="client-track"
        >
          {marqueeItems.map((client, index) => (
            <div className="client-item" key={`${client.handle}-${index}`}>
              <img src={client.image} alt="" loading="lazy" decoding="async" />
              <span>
                <strong>{client.handle}</strong>
                {client.category}
              </span>
              <ArrowUpRight className="client-arrow" size={16} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="section section-light founder-section">
      <Reveal className="section-head compact-head">
        <SectionKicker>MG Digital | Marketing para e-commerce</SectionKicker>
        <Eyebrow>Por trás da MG Digital, há uma história real.</Eyebrow>
      </Reveal>
      <div className="founder-layout section-container">
        <Reveal className="founder-photo">
          <img src={assets.founder} alt="Emanuelle Grabinger" loading="lazy" decoding="async" />
        </Reveal>
        <Reveal className="founder-card">
          <h2>Emanuelle Grabinger</h2>
          <p className="role">Fundadora da MG Assessoria Digital</p>
          <p className="handle">@manugrabinger</p>
          <p>
            Iniciei minha trajetória no marketing muito cedo, e fui uma das primeiras pessoas
            a integrarem a equipe da Saint Germain, hoje o maior e-commerce de relógios do Brasil.
            Foi lá que entendi, na prática, o poder de uma marca bem construída.
          </p>
          <p>
            Mas também foi lá que enxerguei uma dor real no mercado: marcas incríveis sendo
            atendidas com marketing genérico, sem estratégia, sem identidade, sem resultado.
          </p>
          <p>
            Por isso criei a MG Assessoria Digital, uma agência especializada em e-commerce que
            atende ativamente mais de 60 marcas e constrói resultado de verdade.
          </p>
          <p>
            Sou ainda fundadora da Hypea Influence, agência especializada em marketing de
            influenciadores para e-commerce, porque acredito que cada frente do digital, quando
            bem executada, transforma marcas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Hypea() {
  return (
    <section className="section section-dark hypea-section" id="hypea">
      <motion.img
        className="hypea-bg"
        src={assets.hypeaBg}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <Reveal className="hypea-board">
        <img src={assets.hypeaBoard} alt="Identidade visual Hypea Influence" loading="lazy" decoding="async" />
      </Reveal>
      <Reveal className="section-head hypea-copy">
        <SectionKicker invert>Hypea | Marketing de influenciadores para e-commerce</SectionKicker>
        <Eyebrow invert>Hypea Influence</Eyebrow>
        <h2>
          Agência especializada em marketing de
          <span> influenciadores para e-commerce.</span>
        </h2>
        <p className="subtitle">
          A Hypea Influence conecta marcas aos criadores certos com estratégia, curadoria e foco em resultado.
          Do briefing à entrega, cuidamos de cada etapa da campanha para gerar alcance real,
          engajamento genuíno e conversão.
        </p>
        <div className="center-actions">
          <CtaButton href="#formulario">Conheça a Hypea</CtaButton>
          <CtaButton href="#formulario" variant="secondary">Falar com a equipe</CtaButton>
        </div>
      </Reveal>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section section-light faq-section" id="faq">
      <Reveal className="section-head compact-head">
        <SectionKicker>MG Digital | Marketing para e-commerce</SectionKicker>
        <Eyebrow>Ainda tem dúvidas? Aqui estão as perguntas que mais recebemos.</Eyebrow>
      </Reveal>
      <div className="faq-list section-container">
        {faqs.map((faq, index) => {
          const isOpen = index === open;
          return (
            <motion.article
              className={`faq-item ${isOpen ? 'faq-open' : ''}`}
              key={faq.question}
              layout
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={shouldReduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.22 }}
                >
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const shouldReduceMotion = useReducedMotion();
  const isSending = formStatus === 'sending';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus('sending');
    window.setTimeout(() => setFormStatus('sent'), 650);
  }

  return (
    <section className="section section-dark contact-section" id="formulario">
      <div className="contact-layout section-container">
        <Reveal className="contact-copy">
          <div className="brand-row brand-row-light">
            <img src={assets.logo} alt="MG Digital" decoding="async" />
            <span>MG Digital | Marketing para e-commerce</span>
          </div>
          <Eyebrow invert>Formulário</Eyebrow>
          <h2>
            Pronta para construir
            <span> uma marca que vende?</span>
          </h2>
          <p>
            Preencha o formulário e nossa equipe entra em contato em até 24 horas para entender
            o momento da sua marca.
          </p>
        </Reveal>
        <Reveal>
          <form className="lead-form" onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <label key={field.name}>
                <span>
                  {field.label}
                  {field.required && <b aria-hidden="true"> *</b>}
                </span>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  autoComplete={field.autoComplete}
                />
              </label>
            ))}
            <motion.button
              className="submit-button"
              type="submit"
              disabled={isSending}
              aria-busy={isSending}
              whileHover={shouldReduceMotion || isSending ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion || isSending ? undefined : { scale: 0.98 }}
            >
              <span>
                {isSending
                  ? 'Enviando...'
                  : formStatus === 'sent'
                    ? 'Recebido pela equipe MG'
                    : 'Quero começar a transformação da minha marca'}
              </span>
              {formStatus === 'sent' ? <CheckCircle2 size={18} /> : <ArrowRight size={18} />}
            </motion.button>
            <p className="privacy">*Seus dados estão seguros. Sem spam, nunca.</p>
            <div aria-live="polite">
              {formStatus === 'sent' && (
                <motion.p
                  className="form-status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Formulário recebido. Em breve a equipe MG entra em contato.
                </motion.p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <ScrollProgress />
      <TopNav />
      <Hero />
      <LogoStrip />
      <Pillars />
      <Services />
      <Clients />
      <Founder />
      <Hypea />
      <FAQ />
      <Contact />
    </main>
  );
}
