// Single source of truth for the resume PDFs (public/bernardo-righi-*.pdf).
//
// ATS rules this content must respect:
//  - no icon fonts: every label is spelled out ("E-mail:", "Telefone:") instead
//    of relying on a FontAwesome pictogram that lands in the text layer as an
//    unmapped glyph;
//  - contact fields separated by " | " with real spaces, so a parser can isolate
//    phone and e-mail;
//  - skills comma-separated, one category per line;
//  - project URL never glued to the tech stack;
//  - accents spelled out properly in the pt version (Chromium embeds UTF-8).
//
// Two variants come out of this one file:
//  - one page: uses `shortBody` / `shortBullets` / `compactGroups` / project
//    `short`, and only projects flagged `core: true`;
//  - two pages: uses the full fields, plus sections flagged `full: true`.
// Nothing is hidden with CSS — the trimming happens here, so the page and the
// extracted text always say the same thing.

const CONTACT = {
  email: "bernardomicolrighi@outlook.com",
  phone: "+55 (51) 99601-1501",
  site: "righi.dev",
  github: "github.com/righibe",
  linkedin: "linkedin.com/in/bernardo-righi",
  lattes: "lattes.cnpq.br/8608406696939587",
};

const SKILLS = {
  pt: {
    full: [
      ["Linguagens", "Python, Java, C, C++, JavaScript, SQL"],
      ["IA & Agentes", "LangChain, LangGraph, LCEL, RAG, LLMs, scikit-learn"],
      ["Observabilidade", "OpenTelemetry, Jaeger, Grafana, Agent Tracing"],
      ["DevOps & Infra", "Docker, GitHub Actions, CI/CD, Git, Linux"],
      ["Frameworks", "Spring Boot, Django, Flask, Discord.py"],
      ["Bancos de Dados", "MySQL, JPA / Hibernate"],
    ],
    compact: [
      ["Linguagens", "Python, Java, C, C++, JavaScript, SQL"],
      ["IA & Agentes", "LangChain, LangGraph, LCEL, RAG, LLMs, scikit-learn"],
      ["Observabilidade & DevOps", "OpenTelemetry, Jaeger, Grafana, Agent Tracing, Docker, GitHub Actions, CI/CD, Git, Linux"],
      ["Frameworks & Dados", "Spring Boot, Django, Flask, Discord.py, MySQL, JPA / Hibernate"],
    ],
  },
  en: {
    full: [
      ["Languages", "Python, Java, C, C++, JavaScript, SQL"],
      ["AI & Agents", "LangChain, LangGraph, LCEL, RAG, LLMs, scikit-learn"],
      ["Observability", "OpenTelemetry, Jaeger, Grafana, Agent Tracing"],
      ["DevOps & Infra", "Docker, GitHub Actions, CI/CD, Git, Linux"],
      ["Frameworks", "Spring Boot, Django, Flask, Discord.py"],
      ["Databases", "MySQL, JPA / Hibernate"],
    ],
    compact: [
      ["Languages", "Python, Java, C, C++, JavaScript, SQL"],
      ["AI & Agents", "LangChain, LangGraph, LCEL, RAG, LLMs, scikit-learn"],
      ["Observability & DevOps", "OpenTelemetry, Jaeger, Grafana, Agent Tracing, Docker, GitHub Actions, CI/CD, Git, Linux"],
      ["Frameworks & Data", "Spring Boot, Django, Flask, Discord.py, MySQL, JPA / Hibernate"],
    ],
  },
};

const group = ([label, items]) => ({ label, items });

const skills = (lang) => ({
  type: "skills",
  title: lang === "pt" ? "HABILIDADES TÉCNICAS" : "TECHNICAL SKILLS",
  groups: SKILLS[lang].full.map(group),
  compactGroups: SKILLS[lang].compact.map(group),
});

const contactLines = (lang) => [
  lang === "pt"
    ? [`E-mail: ${CONTACT.email}`, `Telefone: ${CONTACT.phone}`, "Local: Rio Grande do Sul, Brasil"]
    : [`E-mail: ${CONTACT.email}`, `Phone: ${CONTACT.phone}`, "Location: Rio Grande do Sul, Brazil"],
  [
    `Site: ${CONTACT.site}`,
    `GitHub: ${CONTACT.github}`,
    `LinkedIn: ${CONTACT.linkedin}`,
    `Lattes: ${CONTACT.lattes}`,
  ],
];

export const RESUME = {
  pt: {
    lang: "pt-BR",
    file: "bernardo-righi-curriculo",
    name: "Bernardo Micol Righi",
    headline: "Desenvolvedor Back-End | Sistemas de IA | Tech Influencer",
    contactLines: contactLines("pt"),
    footer: `${CONTACT.site} | ${CONTACT.github} | ${CONTACT.linkedin} | ${CONTACT.lattes}`,
    sections: [
      {
        type: "text",
        title: "RESUMO PROFISSIONAL",
        body:
          "Desenvolvedor back-end com 2 anos de experiência em Python, IA e automação. " +
          "Pesquisador na Unisinos em parceria com a Dell, focado em observabilidade de agentes LLM " +
          "usando LangChain e OpenTelemetry. Cofundador do Servidor dos Programadores, uma das seis " +
          "maiores comunidades dev do Brasil no Discord (18 mil+ membros). Também crio conteúdo sobre " +
          "programação e IA como tech influencer. Fluente em inglês.",
        shortBody:
          "Desenvolvedor back-end com 2 anos de experiência em Python, IA e automação. " +
          "Pesquisador na Unisinos em parceria com a Dell, focado em observabilidade de agentes LLM " +
          "com LangChain e OpenTelemetry. Cofundador do Servidor dos Programadores, uma das seis " +
          "maiores comunidades dev do Brasil no Discord (18 mil+ membros). Inglês fluente.",
      },
      {
        type: "jobs",
        title: "EXPERIÊNCIA PROFISSIONAL",
        items: [
          {
            role: "Pesquisador — Agentes de IA & Observabilidade",
            org: "Unisinos / Dell Technologies",
            meta: "Jun 2026 - Atual · Remoto",
            bullets: [
              "Pesquisando padrões de observabilidade para sistemas multiagente, estudando como rastrear comportamento, latência e falhas de agentes de IA em produção.",
              "Investigando estratégias para rastrear chamadas de ferramentas, transferências entre agentes (handoffs) e propagação de contexto — projeto em fase de pesquisa e prototipagem de arquitetura junto ao time da Dell.",
              "Entreguei um estudo comparativo de 6 pipelines de clusterização por embeddings (K-Means, UMAP, PaCMAP, LocalMAP, densMAP + HDBSCAN) sobre dados reais de atendimento, com validação estatística (trustworthiness, DBCV) fundamentada na literatura científica, orientando a abordagem do time para descoberta automática de tópicos.",
            ],
            shortBullets: [
              "Pesquisando padrões de observabilidade para sistemas multiagente: como rastrear comportamento, latência e falhas de agentes de IA em produção, incluindo chamadas de ferramentas, handoffs e propagação de contexto.",
              "Entreguei um estudo comparativo de 6 pipelines de clusterização por embeddings (K-Means, UMAP, PaCMAP, LocalMAP, densMAP + HDBSCAN) sobre dados reais de atendimento, com validação estatística (trustworthiness, DBCV), orientando a abordagem do time para descoberta automática de tópicos.",
            ],
          },
          {
            role: "Cofundador & Desenvolvedor Back-End",
            org: "Servidor dos Programadores",
            meta: "Jun 2022 - Atual · Remoto",
            bullets: [
              "A comunidade crescia rápido, mas perdia membros por onboarding e moderação fracos — construí bots em Python e Discord.py que automatizaram boas-vindas e suporte técnico, melhorando a retenção e reduzindo o trabalho manual do time.",
              "Com o crescimento acelerado, a infraestrutura passou a exigir deploys sem downtime — montei pipelines de CI/CD com GitHub Actions que testam e publicam atualizações automaticamente a cada push, eliminando deploys manuais.",
              "Liderei a organização de eventos técnicos com patrocinadores como Alura, Shard Cloud e Hostinger, coordenando palestrantes e sessões ao vivo para 18 mil+ desenvolvedores.",
            ],
            shortBullets: [
              "Construí bots em Python e Discord.py que automatizaram boas-vindas e suporte técnico, melhorando a retenção e reduzindo o trabalho manual do time.",
              "Montei pipelines de CI/CD com GitHub Actions que testam e publicam atualizações a cada push, eliminando deploys manuais.",
              "Liderei a organização de eventos técnicos com patrocinadores como Alura, Shard Cloud e Hostinger para 18 mil+ desenvolvedores.",
            ],
          },
        ],
      },
      skills("pt"),
      {
        type: "education",
        title: "FORMAÇÃO ACADÊMICA",
        items: [
          {
            degree: "Bacharelado em Ciência da Computação",
            school: "Universidade do Vale do Rio dos Sinos (Unisinos)",
            meta: `Fev 2026 - Atual · São Leopoldo, Brasil · Lattes: ${CONTACT.lattes}`,
          },
        ],
      },
      {
        type: "text",
        title: "CURSOS E CERTIFICAÇÕES",
        full: true,
        body:
          "Maratona Java (Java Virado no Jiraya) · Python Mundo 1, 2 e 3 · HTML5 e CSS3 (Curso em Vídeo) · " +
          "Imersão DevOps e Python (Alura) · Design and Social Enterprise HDSE Leadership (Lehigh University)",
      },
      {
        type: "text",
        title: "IDIOMAS",
        body: "Português: nativo | Inglês: fluente (C1) | Espanhol: intermediário (B1)",
      },
      {
        type: "projects",
        title: "PROJETOS",
        items: [
          {
            core: true,
            name: "Agente de Suporte Técnico com IA",
            tech: "Python · LLMs · OpenAI GPT-4o · APIs RESTful",
            url: `${CONTACT.github}/technical-suport-Agent`,
            short:
              "Agente autônomo em Python com GPT-4o que interpreta chamados de suporte de primeiro nível e devolve respostas contextuais via APIs RESTful, sem escalonamento humano.",
            bullets: [
              "Situação: chamados de suporte técnico de primeiro nível precisavam de triagem mais rápida, sem depender de um atendente humano.",
              "Ação: construí um agente autônomo em Python usando GPT-4o para interpretar os chamados e gerar respostas contextuais via APIs RESTful.",
              "Resultado: automatizei respostas de primeiro nível para casos comuns, sem escalonamento humano.",
            ],
          },
          {
            core: true,
            name: "Pipeline de CI/CD em Python",
            tech: "Python · GitHub Actions · Docker · Flask",
            url: `${CONTACT.github}/ci-cd-pipeline-python`,
            short:
              "Pipeline completo com GitHub Actions e Docker: testes automáticos a cada push e deploy no container somente quando tudo passa, eliminando deploys manuais.",
            bullets: [
              "Situação: não havia processo automatizado de testes ou deploy — cada atualização era um risco de bug em produção.",
              "Ação: construí um pipeline completo com GitHub Actions e Docker, rodando testes automáticos a cada push e fazendo deploy no container só se tudo passasse.",
              "Resultado: eliminei os deploys manuais e ganhei a garantia de que só código validado chegava ao ambiente.",
            ],
          },
          {
            core: true,
            name: "Bot de IA Generativa para Discord",
            tech: "Python · Discord.py · API de LLM open source",
            url: `${CONTACT.github}/bot-discord-IAgenerativa`,
            short:
              "Bot em Discord.py integrado a uma API de IA generativa open source, com contexto multiturno, atendendo 18 mil+ membros da comunidade em tempo real.",
            bullets: [
              "Situação: a comunidade queria suporte de IA em tempo real dentro do Discord, sem depender de APIs pagas.",
              "Ação: construí um bot com Discord.py integrando uma API de IA generativa open source, com contexto de conversa multiturno.",
              "Resultado: dei suporte de IA gratuito e em tempo real a 18 mil+ membros da comunidade, direto no servidor.",
            ],
          },
          {
            name: "Predição de Preços de Imóveis — São Paulo",
            tech: "Python · scikit-learn · Decision Tree · Random Forest",
            url: `${CONTACT.github}/predict-prices-sp`,
            bullets: [
              "Situação: queria aplicar ML supervisionado a um problema real, indo além da teoria.",
              "Ação: treinei e comparei Decision Tree e Random Forest com scikit-learn para prever preços de imóveis em São Paulo, analisando a importância das features.",
              "Resultado: identifiquei localização e metragem como as variáveis dominantes e consolidei minha base prática em regressão.",
            ],
          },
          {
            name: "API REST CRUD — Django & SQL",
            tech: "Python · Django · REST Framework · MySQL",
            url: `${CONTACT.github}/CRUD-Python-Django`,
            bullets: [
              "Situação: precisava de prática com o ORM do Django e padrões REST além do Flask.",
              "Ação: construí uma API REST CRUD completa com Django conectada a um banco SQL, estruturando validação e serialização.",
              "Resultado: consolidei os fundamentos de Django e padrões de design de API REST transferíveis para produção.",
            ],
          },
          {
            name: "API REST de Cadastro de Pessoas — Java",
            tech: "Java · Spring Boot · JPA / Hibernate · Spring Web",
            url: `${CONTACT.github}/Cadastro-pessoas`,
            bullets: [
              "Situação: eu só tinha experiência em Python e precisava entender o ecossistema Java.",
              "Ação: construí uma API REST do zero com Spring Boot e JPA, seguindo o fluxo Controller / Service / Repository com DTO e ORM.",
              "Resultado: uma base sólida em Java e clareza sobre o padrão MVC para projetos corporativos.",
            ],
          },
        ],
      },
    ],
  },

  en: {
    lang: "en",
    file: "bernardo-righi-resume",
    name: "Bernardo Micol Righi",
    headline: "Back-End Developer | AI Systems | Tech Influencer",
    contactLines: contactLines("en"),
    footer: `${CONTACT.site} | ${CONTACT.github} | ${CONTACT.linkedin} | ${CONTACT.lattes}`,
    sections: [
      {
        type: "text",
        title: "PROFESSIONAL SUMMARY",
        body:
          "Back-end developer with 2 years of experience in Python, AI, and automation. " +
          "Researcher at Unisinos in partnership with Dell, focused on LLM agent observability using " +
          "LangChain and OpenTelemetry. Cofounded Servidor dos Programadores, one of the six largest dev " +
          "communities in Brazil on Discord (18k+ members). I also create content about programming and AI " +
          "as a tech influencer. Fluent in English.",
        shortBody:
          "Back-end developer with 2 years of experience in Python, AI, and automation. " +
          "Researcher at Unisinos in partnership with Dell, focused on LLM agent observability with " +
          "LangChain and OpenTelemetry. Cofounder of Servidor dos Programadores, one of the six largest " +
          "dev communities in Brazil on Discord (18k+ members). Fluent in English.",
      },
      {
        type: "jobs",
        title: "PROFESSIONAL EXPERIENCE",
        items: [
          {
            role: "Researcher — AI Agents & Observability",
            org: "Unisinos / Dell Technologies",
            meta: "Jun 2026 - Present · Remote",
            bullets: [
              "Researching observability patterns for multi-agent systems, studying how to trace behavior, latency, and failures of AI agents in production.",
              "Investigating strategies to trace tool calls, agent handoffs, and context propagation — project in a research and architecture-prototyping phase alongside the Dell team.",
              "Delivered a comparative study of 6 embedding-clustering pipelines (K-Means, UMAP, PaCMAP, LocalMAP, densMAP + HDBSCAN) on real support-ticket data, with statistical validation (trustworthiness, DBCV) grounded in the scientific literature, informing the team's approach to automatic topic discovery.",
            ],
            shortBullets: [
              "Researching observability patterns for multi-agent systems: how to trace behavior, latency, and failures of AI agents in production, including tool calls, agent handoffs, and context propagation.",
              "Delivered a comparative study of 6 embedding-clustering pipelines (K-Means, UMAP, PaCMAP, LocalMAP, densMAP + HDBSCAN) on real support-ticket data, with statistical validation (trustworthiness, DBCV), informing the team's approach to automatic topic discovery.",
            ],
          },
          {
            role: "Cofounder & Back-End Developer",
            org: "Servidor dos Programadores",
            meta: "Jun 2022 - Present · Remote",
            bullets: [
              "The community was growing fast but losing members due to poor onboarding and moderation — I built Python and Discord.py bots that automated welcomes and technical support, improving retention and reducing the team's manual work.",
              "As growth accelerated, the infrastructure needed zero-downtime deploys — I set up CI/CD pipelines with GitHub Actions that automatically test and ship updates on every push, eliminating manual deploys.",
              "Led the organization of technical events with sponsors like Alura, Shard Cloud, and Hostinger, coordinating speakers and live sessions for 18k+ developers.",
            ],
            shortBullets: [
              "Built Python and Discord.py bots that automated welcomes and technical support, improving retention and reducing the team's manual work.",
              "Set up CI/CD pipelines with GitHub Actions that test and ship updates on every push, eliminating manual deploys.",
              "Led the organization of technical events with sponsors like Alura, Shard Cloud, and Hostinger for 18k+ developers.",
            ],
          },
        ],
      },
      skills("en"),
      {
        type: "education",
        title: "EDUCATION",
        items: [
          {
            degree: "B.Sc. in Computer Science",
            school: "Universidade do Vale do Rio dos Sinos (Unisinos)",
            meta: `Feb 2026 - Present · São Leopoldo, Brazil · Lattes: ${CONTACT.lattes}`,
          },
        ],
      },
      {
        type: "text",
        title: "COURSES AND CERTIFICATIONS",
        full: true,
        body:
          "Java Marathon (Java Virado no Jiraya) · Python Worlds 1, 2 and 3 · HTML5 and CSS3 (Curso em Vídeo) · " +
          "DevOps and Python Immersion (Alura) · Design and Social Enterprise HDSE Leadership (Lehigh University)",
      },
      {
        type: "text",
        title: "LANGUAGES",
        body: "Portuguese: native | English: fluent (C1) | Spanish: intermediate (B1)",
      },
      {
        type: "projects",
        title: "PROJECTS",
        items: [
          {
            core: true,
            name: "AI Technical Support Agent",
            tech: "Python · LLMs · OpenAI GPT-4o · RESTful APIs",
            url: `${CONTACT.github}/technical-suport-Agent`,
            short:
              "Autonomous Python agent powered by GPT-4o that interprets first-line support tickets and returns contextual resolutions through RESTful APIs, with no human escalation.",
            bullets: [
              "Situation: first-line technical support tickets needed faster triage without waiting on a human agent.",
              "Action: built an autonomous agent in Python powered by GPT-4o to interpret tickets and generate contextual resolutions through RESTful APIs.",
              "Result: automated first-level responses for common cases without human escalation.",
            ],
          },
          {
            core: true,
            name: "CI/CD Pipeline in Python",
            tech: "Python · GitHub Actions · Docker · Flask",
            url: `${CONTACT.github}/ci-cd-pipeline-python`,
            short:
              "Complete pipeline with GitHub Actions and Docker: automated tests on every push and a container deploy only when everything passes, eliminating manual deploys.",
            bullets: [
              "Situation: no automated testing or deployment process — every update was a production-bug risk.",
              "Action: built a complete pipeline with GitHub Actions and Docker, running automated tests on every push and deploying to the container only if everything passed.",
              "Result: eliminated manual deploys and gained the guarantee that only validated code reached the environment.",
            ],
          },
          {
            core: true,
            name: "Generative AI Discord Bot",
            tech: "Python · Discord.py · Open-source LLM API",
            url: `${CONTACT.github}/bot-discord-IAgenerativa`,
            short:
              "Discord.py bot integrated with an open-source generative AI API, handling multi-turn conversation context for 18k+ community members in real time.",
            bullets: [
              "Situation: the community wanted real-time AI assistance inside Discord without relying on paid APIs.",
              "Action: built a bot with Discord.py integrating an open-source generative AI API, handling multi-turn conversation context.",
              "Result: gave 18k+ community members free, real-time AI support directly inside the server.",
            ],
          },
          {
            name: "Housing Price Prediction — São Paulo",
            tech: "Python · scikit-learn · Decision Tree · Random Forest",
            url: `${CONTACT.github}/predict-prices-sp`,
            bullets: [
              "Situation: wanted to apply supervised ML to a real problem, moving beyond theory.",
              "Action: trained and compared Decision Tree and Random Forest with scikit-learn to predict housing prices in São Paulo, analyzing feature importance.",
              "Result: identified location and square footage as the dominant variables and solidified my hands-on foundation in regression.",
            ],
          },
          {
            name: "CRUD REST API — Django & SQL",
            tech: "Python · Django · REST Framework · MySQL",
            url: `${CONTACT.github}/CRUD-Python-Django`,
            bullets: [
              "Situation: needed hands-on practice with Django's ORM and REST patterns beyond Flask.",
              "Action: built a full CRUD REST API with Django connected to a SQL database, structuring validation and serialization.",
              "Result: solidified Django fundamentals and REST API design patterns transferable to production work.",
            ],
          },
          {
            name: "People Registry REST API — Java",
            tech: "Java · Spring Boot · JPA / Hibernate · Spring Web",
            url: `${CONTACT.github}/Cadastro-pessoas`,
            bullets: [
              "Situation: only had Python experience and needed to understand the Java ecosystem.",
              "Action: built a REST API from scratch with Spring Boot and JPA, following the Controller / Service / Repository flow with DTO and ORM.",
              "Result: a solid foundation in Java and clarity on the MVC pattern for enterprise projects.",
            ],
          },
        ],
      },
    ],
  },
};

export const CONTACT_INFO = CONTACT;
