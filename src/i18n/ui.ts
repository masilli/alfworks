export type Lang = 'pt' | 'en';

export const defaultLang: Lang = 'pt';

export const languages: Record<Lang, string> = {
  pt: 'PT',
  en: 'EN',
};

export const ui = {
  pt: {
    meta: {
      title: 'ALF WORKS — Oficina de Projetos & Venture Studio',
      description:
        'Consultoria estratégica e resolução de desafios operacionais para PMEs. Digital Studio, Venture Incubator e Sistemas de IA.',
    },
    nav: {
      consulting: 'Consultoria',
      consultingHref: '#consultoria',
      ventureLab: 'Venture Lab',
      ventureLabHref: '#venture-lab',
      about: 'Sobre',
      aboutHref: '#sobre',
      contact: 'Contacto',
      contactHref: '#contacto',
      cta: 'Falar Connosco',
    },
    hero: {
      availabilityBadge: 'DISPONIBILIDADE',
      availabilityText: 'Q1/Q2 Intervenções Ativas: 2 Vagas Restantes',
      systemVersion: 'SISTEMA: ALF-OS v2.4',
      locations: 'LISBOA • PORTO • FUNCHAL',
      tags: {
        operations: 'Operações',
        digitalPresence: 'Presença Digital',
        systemsAi: 'Sistemas & IA',
      },
      headline: 'Oficina de intervenção estratégica e entrega digital para PMEs.',
      subheadline:
        'Otimizamos a operação, modernizamos a presença online e resolvemos os nós operacionais que bloqueiam o crescimento do seu negócio.',
      ctaIntervention: 'Solicitar Intervenção',
      ctaLab: 'Explorar o Laboratório',
      panel: {
        badge: 'QUADRO OPERACIONAL',
        doc: 'DOC. 001',
        title: 'Modelo de Ação Direta',
        desc: 'Intervenções sem consultoria oca: implementação no terreno com entregáveis mensuráveis.',
        diagSpeed: 'VELOCIDADE DE DIAGNÓSTICO',
        diagVal: '72 HORAS',
        diagDesc:
          'Avaliação de processos críticos e apresentação de plano corretivo de curto prazo.',
        teamType: 'EQUIPA DEDICADA',
        teamVal: 'SÓCIOS SENIORES',
        teamDesc:
          'Execução direta conduzida exclusivamente pelos fundadores (Alfredo, Luísa e Filipe).',
        focusType: 'FOCO PRINCIPAL',
        focusVal: 'ROI OPERACIONAL',
        focusDesc:
          'Redução de custos ocultos e aumento imediato da capacidade produtiva da equipa.',
      },
    },
    consulting: {
      badge: '[Boutique de Intervenção Rápida]',
      headline:
        'Sabemos exatamente onde a sua empresa está a perder tempo, dinheiro e clientes.',
      subhead:
        'Não vendemos relatórios teóricos. Diagnosticamos os gargalos operacionais e financeiros, estruturamos a solução e deixamos os sistemas a funcionar.',
      philosophyTitle: 'FILOSOFIA OPERACIONAL',
      philosophyFlow: 'Diagnóstico ➔ Ação ➔ Validação',
      philosophySub: 'Execução sem ruído.',
      sprintBadge: 'INTERVENÇÃO EM 7 DIAS',
      sprintType: 'FLAGSHIP SPRINT',
      sprintTitle: 'PME Action Sprint',
      sprintSub: '(Auditoria rápida & Plano de Ação em 7 dias)',
      sprintDesc:
        'Analisamos Operações, Finanças, Digital, Tecnologia e Vendas para entregar prioridades imediatas de corte de desperdício e aumento de margem.',
      sprintCta: 'Solicitar Diagnóstico Inicial',
      sprintSpots: 'Vagas limitadas por mês • Reunião direta com sócios',
      pillarFooter: 'ENTREGA TESTADA',
      pillars: [
        {
          number: '01',
          title: 'Operações & Eficiência',
          description:
            'Mapeamento de processos, eliminação de tarefas manuais redundantes, organização de equipas e integração de colaboradores.',
          subpoints: [
            'Mapeamento detalhado de fluxos de trabalho',
            'Eliminação cirúrgica de desperdício de tempo',
            'Manuais de procedimentos práticos e integração de equipa',
          ],
        },
        {
          number: '02',
          title: 'Finanças & Controlo de Gestão',
          description:
            'Diagnóstico de margens e pricing, previsão de tesouraria (cash-flow) e dashboards visuais para tomada de decisão em tempo real.',
          subpoints: [
            'Análise de rentabilidade por cliente e linha de serviço',
            'Modelação e controlo de fluxo de caixa operacional',
            'Relatórios executivos e indicadores-chave de desempenho (KPIs)',
          ],
        },
        {
          number: '03',
          title: 'Presença Digital & Ativação Comercial',
          description:
            'Websites orientados à conversão de contactos, presença estratégica no Google e experiências/campanhas de atração local de clientes.',
          subpoints: [
            'Plataformas web de alta velocidade e conversão',
            'Otimização de presença local e autoridade de marca',
            'Mecanismos diretos de captação de potenciais clientes',
          ],
        },
        {
          number: '04',
          title: 'Automação, Integrações & IA',
          description:
            'Conexão entre softwares dispersos (Faturação, CRM, Folhas de Cálculo), relatórios automáticos e assistentes de produtividade interna.',
          subpoints: [
            'Unificação de ferramentas e sincronização em tempo real',
            'Relatórios e alertas automáticos para a gerência',
            'Agentes e assistentes de IA para tarefas rotineiras',
          ],
        },
      ],
    },
    ventureLab: {
      badge: '02 / ECOSSISTEMA MULTIDISCIPLINAR',
      title: 'O Laboratório de Ideias & Projetos',
      desc: 'A ALF Works opera como uma oficina multidisciplinar e centro de experimentação contínua. Desenvolvemos tanto soluções digitais à medida para clientes selecionados como o nosso próprio portfólio de software, ferramentas e iniciativas proprietárias.',
      modeBadge: 'MODO: STUDIO & LAB',
      modeTitle: 'Soluções à Medida + IP Próprio',
      modeSub: '4 Verticais Ativas',
      statusLabel: 'Status:',
      learnMore: 'Saber Mais',
      verticals: [
        {
          code: 'SEC-01',
          title: 'Estúdio de Criação Digital',
          badge: 'Done-For-You',
          description:
            'Desenvolvimento ágil de marcas, websites de alta performance e MVPs para PMEs e criadores.',
          status: 'Entrega Contínua',
          tags: ['Next-Gen Web', 'Sistemas de Design', 'Performance SSG'],
        },
        {
          code: 'SEC-02',
          title: 'Incubadora / Venture Studio',
          badge: 'Iniciativa Própria',
          description:
            'Laboratório interno onde concebemos e lançamos micro-aplicações, ferramentas SaaS e produtos de nicho.',
          status: 'Projetos Próprios',
          tags: ['Micro-SaaS', 'Validação Rápida', 'Bootstrap Studio'],
        },
        {
          code: 'SEC-03',
          title: 'Sistemas de Automação & IA',
          badge: 'Inteligência Operacional',
          description:
            'Modernização de operações tradicionais através de pipelines de dados, automações de backoffice e agentes inteligentes.',
          status: 'Implementação',
          tags: ['Agentes Autónomos', 'Pipelines ETL', 'Integração CRM'],
        },
        {
          code: 'SEC-04',
          title: 'Hub de Conteúdo & Recursos',
          badge: 'Open Knowledge',
          description:
            'Partilha aberta da construção de negócios, frameworks e ferramentas para a comunidade empresarial.',
          status: 'Comunidade',
          tags: ['Playbooks Operacionais', 'Frameworks PME', 'Estudos de Caso'],
        },
      ],
    },
    corporate: {
      badge: 'ÂMBITO ENTERPRISE & INFRAESTRUTURAS',
      title: 'Grandes Ativos & Gestão Corporativa',
      desc: 'Para multinacionais, centros comerciais e grandes infraestruturas, desenhamos intervenções dedicadas: Marketing de Ativos e mediação com múltiplos lojistas (tenant management), Direção Interina de Projetos em transições organizacionais e Produção Executiva com gestão rigorosa de protocolo institucional.',
      pills: ['Tenant Management', 'Direção Interina', 'Protocolo Institucional'],
      cta: 'Consulta Corporativa',
      sub: 'Alinhamento confidencial de âmbito institucional',
    },
    team: {
      badge: '03 / OS FUNDADORES & IDENTIDADE',
      title: 'O Trio por Detrás da Máquina',
      desc: 'O acrónimo ALF sintetiza a união de Alfredo, Luísa e Filipe: uma interseção pragmática e complementar de Estratégia Corporativa, Ativação Comercial e Engenharia de Software.',
      structureBadge: 'ESTRUTURA FUNDADORA',
      structureTitle: '3 Sócios Operacionais Seniores',
      structureSub: 'Sem intermediários ou juniores.',
      focusLabel: 'Foco de Atuação:',
      partnerLabel: 'PARTNER',
      founders: [
        {
          initial: 'A',
          name: 'Alfredo',
          role: 'Estratégia Empresarial & Gestão Financeira',
          pillar: 'Estratégia & Finanças',
          bio: 'Foco em diagnóstico de rentabilidade, cálculo de margens e reestruturação estratégica para PMEs.',
          focus: [
            'Diagnóstico de Rentabilidade',
            'Cálculo de Margens & Pricing',
            'Reestruturação Estratégica PME',
          ],
        },
        {
          initial: 'L',
          name: 'Luísa',
          role: 'Marketing de Ativos, Ativação Comercial & Protocolo',
          pillar: 'Marketing & Grandes Ativos',
          bio: 'Especialista em dinamização de vendas, auditoria de experiência de cliente (CX) e gestão de grandes ecossistemas de retalho e marcas.',
          focus: [
            'Dinamização Comercial & Vendas',
            'Auditoria de Experiência (CX)',
            'Gestão de Retalho & Marcas',
          ],
        },
        {
          initial: 'F',
          name: 'Filipe',
          role: 'Engenharia de Software, Sistemas & Automação',
          pillar: 'Sistemas & Engenharia',
          bio: 'Especialista em transformar operações manuais em infraestruturas digitais eficientes, integração de sistemas empresariais e arquitetura de dados.',
          focus: [
            'Infraestruturas Digitais',
            'Integração de Sistemas',
            'Arquitetura de Dados & IA',
          ],
        },
      ],
    },
    contact: {
      badge: '[Diagnóstico & Intervenção]',
      title: 'Vamos desbloquear o crescimento do seu negócio?',
      subhead:
        'Preencha o formulário. Analisamos os estrangulamentos da sua operação e respondemos em 24 a 48 horas úteis.',
      form: {
        nameLabel: 'O seu Nome *',
        namePlaceholder: 'ex: João Silva',
        emailLabel: 'E-mail de Contacto *',
        emailPlaceholder: 'ex: joao@empresa.pt',
        companyLabel: 'Nome da Empresa / Website',
        companyPlaceholder: 'ex: Minha Empresa Lda / site.pt',
        areaLabel: 'Principal Área de Interesse *',
        areaPlaceholder: 'Selecione uma opção',
        options: {
          pme: 'Intervenção Rápida PME (Diagnóstico 7 Dias)',
          operations: 'Otimização Operacional & Processos',
          finance: 'Controlo Financeiro, Margens & Dashboards',
          digital: 'Presença Digital & Máquina de Aquisição',
          automation: 'Automação, Integrações & IA',
          corporate: 'Grandes Ativos & Soluções Corporativas',
          other: 'Outro assunto',
        },
        msgLabel: 'Resumo do Desafio / Gargalo Atual *',
        msgPlaceholder:
          'Onde é que a empresa está a perder mais tempo, dinheiro ou clientes atualmente?',
        submit: 'Enviar Pedido de Diagnóstico →',
        honeypotLabel: 'Não preencha este campo se for humano:',
      },
    },
    success: {
      metaTitle: 'Mensagem Enviada — ALF WORKS',
      metaDescription:
        'O seu pedido de diagnóstico foi recebido com sucesso pela equipa da ALF WORKS.',
      badge: '[Pedido Recebido]',
      title: 'Mensagem Enviada com Sucesso',
      desc: 'Obrigado pelo contacto. A nossa equipa irá analisar o desafio operacional da sua empresa e responder no prazo de 24 a 48 horas úteis.',
      backHome: 'Voltar à Página Principal',
    },
    footer: {
      copyright: 'ALF Works © 2026 | Todos os direitos reservados.',
      baseNoticePrefix: 'Base Operacional:',
      baseNotice: 'Lisboa, Porto & Funchal, Portugal',
      backToTop: 'Voltar ao topo',
    },
  },
  en: {
    meta: {
      title: 'ALF WORKS — Rapid Intervention Studio & Venture Lab',
      description:
        'Strategic consulting and operational troubleshooting for SMEs. Digital Studio, Venture Incubator, and AI Systems.',
    },
    nav: {
      consulting: 'Consulting',
      consultingHref: '#consulting',
      ventureLab: 'Venture Lab',
      ventureLabHref: '#venture-lab',
      about: 'About',
      aboutHref: '#about',
      contact: 'Contact',
      contactHref: '#contact',
      cta: 'Get in Touch',
    },
    hero: {
      availabilityBadge: 'AVAILABILITY',
      availabilityText: 'Q1/Q2 Active Sprints: 2 Openings Remaining',
      systemVersion: 'SYSTEM: ALF-OS v2.4',
      locations: 'LISBON • PORTO • FUNCHAL',
      tags: {
        operations: 'Operations',
        digitalPresence: 'Digital Presence',
        systemsAi: 'Systems & AI',
      },
      headline: 'Strategic intervention studio and digital execution for SMEs.',
      subheadline:
        'We streamline operations, modernize digital presence, and resolve the operational bottlenecks holding your business back.',
      ctaIntervention: 'Request Intervention',
      ctaLab: 'Explore the Lab',
      panel: {
        badge: 'OPERATIONAL MATRIX',
        doc: 'DOC. 001',
        title: 'Direct Action Model',
        desc: 'Zero theoretical fluff: pragmatic, on-the-ground implementation with measurable deliverables.',
        diagSpeed: 'DIAGNOSTIC VELOCITY',
        diagVal: '72 HOURS',
        diagDesc:
          'Critical workflow audit followed by an actionable, prioritized roadmap.',
        teamType: 'DEDICATED TEAM',
        teamVal: 'SENIOR PARTNERS',
        teamDesc:
          'Direct execution conducted exclusively by the founders (Alfredo, Luísa, and Filipe).',
        focusType: 'PRIMARY FOCUS',
        focusVal: 'OPERATIONAL ROI',
        focusDesc:
          'Cutting hidden overhead and generating an immediate productivity lift.',
      },
    },
    consulting: {
      badge: '[Rapid Intervention Boutique]',
      headline:
        'We pinpoint exactly where your company is leaking time, margin, and clients.',
      subhead:
        'We do not sell theoretical decks. We diagnose operational and financial bottlenecks, build the solution, and leave running systems behind.',
      philosophyTitle: 'OPERATIONAL PHILOSOPHY',
      philosophyFlow: 'Diagnosis ➔ Action ➔ Validation',
      philosophySub: 'Zero-noise execution.',
      sprintBadge: '7-DAY SPRINT',
      sprintType: 'FLAGSHIP SPRINT',
      sprintTitle: 'SME Action Sprint',
      sprintSub: '(Rapid 360° Audit & Action Plan in 7 Days)',
      sprintDesc:
        'We audit Operations, Finance, Digital, Technology, and Sales to deliver immediate waste elimination and margin expansion.',
      sprintCta: 'Request Initial Diagnosis',
      sprintSpots: 'Limited monthly slots • Direct session with partners',
      pillarFooter: 'TESTED EXECUTION',
      pillars: [
        {
          number: '01',
          title: 'Operations & Efficiency',
          description:
            'Process mapping, elimination of manual redundancies, team reorganization, and seamless staff onboarding.',
          subpoints: [
            'End-to-end workflow and friction mapping',
            'Surgical elimination of operational time waste',
            'Standard operating procedure manuals and team alignment',
          ],
        },
        {
          number: '02',
          title: 'Finance & Management Control',
          description:
            'Margin and pricing diagnostics, cash-flow forecasting, and visual dashboards for real-time executive decision-making.',
          subpoints: [
            'Profitability analysis per client and product line',
            'Operational cash-flow modeling and liquidity control',
            'Executive KPI reporting dashboards',
          ],
        },
        {
          number: '03',
          title: 'Digital Presence & Sales Funnels',
          description:
            'High-conversion web platforms, strategic local search dominance, and targeted client acquisition campaigns.',
          subpoints: [
            'Ultra-fast, high-converting digital platforms',
            'Search authority and local market positioning',
            'Direct B2B and consumer inbound pipelines',
          ],
        },
        {
          number: '04',
          title: 'Automation, Integrations & AI',
          description:
            'Connecting fragmented software (ERP, CRM, Spreadsheets), automated reporting pipelines, and internal AI assistants.',
          subpoints: [
            'Tool consolidation and real-time data sync',
            'Automated alerts and managerial summaries',
            'Purpose-built AI agents for daily repetitive tasks',
          ],
        },
      ],
    },
    ventureLab: {
      badge: '02 / MULTIDISCIPLINARY ECOSYSTEM',
      title: 'The Ideas & Ventures Lab',
      desc: 'ALF Works operates as a multidisciplinary project workshop and continuous experimentation studio. We engineer bespoke digital platforms for select clients while deploying our own portfolio of micro-tools, SaaS products, and proprietary ventures.',
      modeBadge: 'MODE: STUDIO & LAB',
      modeTitle: 'Bespoke Solutions + Internal IP',
      modeSub: '4 Active Verticals',
      statusLabel: 'Status:',
      learnMore: 'Learn More',
      verticals: [
        {
          code: 'SEC-01',
          title: 'Digital Creation Studio',
          badge: 'Done-For-You',
          description:
            'Rapid development of high-performance websites, premium brand identities, and MVPs for SMEs and creators.',
          status: 'Continuous Delivery',
          tags: ['Next-Gen Web', 'Design Systems', 'SSG Performance'],
        },
        {
          code: 'SEC-02',
          title: 'Venture Studio / Incubator',
          badge: 'Internal IP',
          description:
            'Internal sandbox where we design, build, and launch micro-SaaS applications and niche digital products.',
          status: 'Proprietary Projects',
          tags: ['Micro-SaaS', 'Rapid Validation', 'Bootstrap Studio'],
        },
        {
          code: 'SEC-03',
          title: 'Automation Systems & AI',
          badge: 'Applied Intelligence',
          description:
            'Modernizing legacy workflows through robust data pipelines, back-office automation, and smart agents.',
          status: 'Implementation',
          tags: ['Autonomous Agents', 'ETL Pipelines', 'CRM Integration'],
        },
        {
          code: 'SEC-04',
          title: 'Content & Resources Hub',
          badge: 'Open Knowledge',
          description:
            'Transparent sharing of venture-building frameworks, operational playbooks, and tactical tools for businesses.',
          status: 'Community',
          tags: ['Operational Playbooks', 'SME Frameworks', 'Case Studies'],
        },
      ],
    },
    corporate: {
      badge: 'ENTERPRISE & ASSET SOLUTIONS',
      title: 'Large-Scale Assets & Corporate Execution',
      desc: 'For multinationals, commercial centers, and large-scale infrastructure assets, we design targeted engagements: Asset Marketing and tenant management, Interim Project Leadership during organizational transitions, and Executive Production with meticulous protocol standards.',
      pills: ['Tenant Management', 'Interim Leadership', 'Institutional Protocol'],
      cta: 'Enterprise Inquiry',
      sub: 'Strictly confidential institutional alignment',
    },
    team: {
      badge: '03 / FOUNDERS & IDENTITY',
      title: 'The Trio Behind the Engine',
      desc: 'The acronym ALF embodies the union of Alfredo, Luísa, and Filipe: a pragmatic, complementary convergence of Corporate Strategy, Commercial Activation, and Software Engineering.',
      structureBadge: 'FOUNDING STRUCTURE',
      structureTitle: '3 Senior Operating Partners',
      structureSub: 'No intermediaries or junior layers.',
      focusLabel: 'Core Focus:',
      partnerLabel: 'PARTNER',
      founders: [
        {
          initial: 'A',
          name: 'Alfredo',
          role: 'Corporate Strategy & Financial Management',
          pillar: 'Strategy & Finance',
          bio: 'Focuses on profitability diagnostics, margin calculation, pricing strategy, and corporate restructuring for SMEs.',
          focus: [
            'Profitability Diagnostics',
            'Margin Optimization & Pricing',
            'Strategic Restructuring for SMEs',
          ],
        },
        {
          initial: 'L',
          name: 'Luísa',
          role: 'Asset Marketing, Commercial Activation & Protocol',
          pillar: 'Marketing & Large Assets',
          bio: 'Specialist in sales acceleration, customer experience (CX) audits, and orchestrating large retail ecosystems and brand activations.',
          focus: [
            'Commercial Activation & Sales Growth',
            'Customer Experience (CX) Auditing',
            'Retail Ecosystem & Brand Management',
          ],
        },
        {
          initial: 'F',
          name: 'Filipe',
          role: 'Software Engineering, Systems & Automation',
          pillar: 'Systems & Engineering',
          bio: 'Specialist in translating manual operations into resilient digital infrastructure, enterprise integrations, and data architecture.',
          focus: [
            'Digital Infrastructure & SSG',
            'Enterprise System Integration',
            'Data Architecture & AI Agents',
          ],
        },
      ],
    },
    contact: {
      badge: '[Diagnosis & Intervention]',
      title: 'Ready to unlock your company’s growth?',
      subhead:
        'Fill out the form below. We will review your operational bottlenecks and reply within 24 to 48 business hours.',
      form: {
        nameLabel: 'Your Name *',
        namePlaceholder: 'e.g. John Doe',
        emailLabel: 'Work Email *',
        emailPlaceholder: 'e.g. john@company.com',
        companyLabel: 'Company Name / Website',
        companyPlaceholder: 'e.g. Acme Corp / acme.com',
        areaLabel: 'Primary Area of Interest *',
        areaPlaceholder: 'Select an option',
        options: {
          pme: 'SME Rapid Sprint (7-Day Diagnosis)',
          operations: 'Operational Optimization & Workflows',
          finance: 'Financial Control, Margins & Dashboards',
          digital: 'Digital Presence & Acquisition Funnels',
          automation: 'Automation, System Integrations & AI',
          corporate: 'Large Assets & Corporate Solutions',
          other: 'Other inquiry',
        },
        msgLabel: 'Summary of Current Challenge / Bottleneck *',
        msgPlaceholder:
          'Where is your business currently leaking the most time, margin, or clients?',
        submit: 'Submit Diagnostic Request →',
        honeypotLabel: 'Do not fill this field if human:',
      },
    },
    success: {
      metaTitle: 'Request Received — ALF WORKS',
      metaDescription:
        'Your diagnostic request has been received by the ALF WORKS team.',
      badge: '[Request Received]',
      title: 'Message Sent Successfully',
      desc: 'Thank you for reaching out. Our operating partners will review your operational challenge and reply within 24 to 48 business hours.',
      backHome: 'Return to Homepage',
    },
    footer: {
      copyright: 'ALF Works © 2026 | All rights reserved.',
      baseNoticePrefix: 'Operating Hubs:',
      baseNotice: 'Lisbon, Porto & Funchal, Portugal',
      backToTop: 'Back to top',
    },
  },
} as const;
