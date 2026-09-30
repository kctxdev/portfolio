// Single source of truth for the resume PDFs (public/johnata-williamy-*.pdf).
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
  email: "johnataichigo56@gmail.com",
  phone: "+55 (11) 95944-5413",
  github: "github.com/kctxdev",
  linkedin: "linkedin.com/in/johnatawilliamy",
};

const SKILLS = {
  pt: {
    full: [
      ["Cloud & Segurança", "AWS (EC2, S3, IAM, VPC, Route53, Lambda, EventBridge, SNS), CloudTrail, CloudWatch, KMS, GuardDuty, MFA"],
      ["DevOps & Automação", "Terraform, GitHub Actions, AWS CLI"],
      ["Sistemas & Redes", "Linux (Ubuntu/Amazon Linux), JSON/YAML, fundamentos de DNS"],
      ["Linguagens & Back-End", "Java, Python, Spring Boot, Spring AI"],
      ["Dados & Integrações", "SQLite, BeautifulSoup4, pyTelegramBotAPI, Ollama, Vosk, eSpeak-NG"],
    ],
    compact: [
      ["Cloud & Segurança", "AWS (EC2, S3, IAM, VPC, Route53, Lambda, EventBridge, SNS), CloudTrail, CloudWatch, KMS, GuardDuty, MFA"],
      ["DevOps, Automação & Redes", "Terraform, GitHub Actions, AWS CLI, Linux, JSON/YAML, DNS"],
      ["Linguagens, Frameworks & Dados", "Java, Python, Spring Boot, Spring AI, SQLite, Ollama, Vosk, eSpeak-NG"],
    ],
  },
  en: {
    full: [
      ["Cloud & Security", "AWS (EC2, S3, IAM, VPC, Route53, Lambda, EventBridge, SNS), CloudTrail, CloudWatch, KMS, GuardDuty, MFA"],
      ["DevOps & Automation", "Terraform, GitHub Actions, AWS CLI"],
      ["Systems & Networking", "Linux (Ubuntu/Amazon Linux), JSON/YAML, networking/DNS fundamentals"],
      ["Languages & Back-End", "Java, Python, Spring Boot, Spring AI"],
      ["Data & Integrations", "SQLite, BeautifulSoup4, pyTelegramBotAPI, Ollama, Vosk, eSpeak-NG"],
    ],
    compact: [
      ["Cloud & Security", "AWS (EC2, S3, IAM, VPC, Route53, Lambda, EventBridge, SNS), CloudTrail, CloudWatch, KMS, GuardDuty, MFA"],
      ["DevOps, Automation & Networking", "Terraform, GitHub Actions, AWS CLI, Linux, JSON/YAML, DNS"],
      ["Languages, Frameworks & Data", "Java, Python, Spring Boot, Spring AI, SQLite, Ollama, Vosk, eSpeak-NG"],
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
    ? [`E-mail: ${CONTACT.email}`, `Telefone: ${CONTACT.phone}`, "Local: Guarulhos, SP, Brasil"]
    : [`E-mail: ${CONTACT.email}`, `Phone: ${CONTACT.phone}`, "Location: Guarulhos, SP, Brazil"],
  [
    `GitHub: ${CONTACT.github}`,
    `LinkedIn: ${CONTACT.linkedin}`,
  ],
];

export const RESUME = {
  pt: {
    lang: "pt-BR",
    file: "Johnata-Williamy-curriculo",
    name: "Johnata Williamy Sousa da Silva",
    headline: "Analista Júnior de Cloud & DevSecOps | AWS · Terraform · Governança de Segurança",
    contactLines: contactLines("pt"),
    footer: `${CONTACT.github} | ${CONTACT.linkedin}`,
    sections: [
      {
        type: "text",
        title: "RESUMO PROFISSIONAL",
        body:
          "Analista júnior de Cloud & Segurança da Informação, com experiência prática no ecossistema AWS. " +
          "Atuando como consultor independente desde janeiro de 2026, construindo ambientes seguros do zero " +
          "(Security by Design), com Infraestrutura como Código em Terraform, governança de acesso via IAM " +
          "e práticas de auditoria automatizada e FinOps. Cursando Segurança da Informação, com a certificação " +
          "AWS Cloud Practitioner (CLF-C02) em preparação.",
        shortBody:
          "Analista júnior de Cloud & Segurança da Informação, com experiência prática no ecossistema AWS. " +
          "Consultor independente desde janeiro de 2026, construindo ambientes seguros do zero (Security by " +
          "Design), com IaC em Terraform, governança via IAM e práticas de auditoria e FinOps. Cursando " +
          "Segurança da Informação, com a certificação AWS Cloud Practitioner (CLF-C02) em preparação.",
      },
      {
        type: "jobs",
        title: "EXPERIÊNCIA PROFISSIONAL",
        items: [
          {
            role: "Analista de Cloud & DevSecOps (Consultor Independente)",
            org: "Consultoria Independente / Serviços Especializados",
            meta: "Jan 2026 - Atual · Remoto",
            bullets: [
              "Provisionamento e arquitetura de ambientes de nuvem AWS sob demanda, garantindo alta disponibilidade e segurança desde a fase de design (Security by Design).",
              "Desenvolvimento de Infraestrutura como Código (IaC) com Terraform para provisionamento automatizado e padronizado de VPCs, sub-redes e security groups.",
              "Implementação de governança de acesso e políticas de controle baseadas no Princípio do Menor Privilégio via AWS IAM e RBAC.",
              "Configuração de auditoria contínua, monitoramento e rastreabilidade de eventos críticos de segurança com AWS CloudTrail e CloudWatch.",
              "Construção de pipelines de automação CI/CD com GitHub Actions, integrando gerenciamento seguro de credenciais (AWS Secrets Manager) e garantindo deploys sem exposição de chaves.",
              "Aplicação de práticas de FinOps, estruturando desligamento automático de recursos ociosos e tagueamento de centro de custo.",
            ],
            shortBullets: [
              "Provisionamento e arquitetura de ambientes AWS sob demanda, com segurança desde a fase de design (Security by Design).",
              "Infraestrutura como Código com Terraform para VPCs, sub-redes e security groups, com governança de acesso via IAM/RBAC.",
              "Pipelines CI/CD com GitHub Actions e AWS Secrets Manager, garantindo deploys sem exposição de chaves.",
              "Práticas de FinOps: desligamento automático de recursos ociosos e tagueamento de centro de custo.",
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
            degree: "Bacharelado em Tecnologia em Segurança da Informação",
            school: "Cruzeiro do Sul Virtual",
            meta: "Jan 2026 - Dez 2027 (em andamento) · Remoto",
          },
          {
            degree: "Ensino Médio",
            school: "Erem Severino de Andrade Guerra",
            meta: "Concluído em 2025",
          },
        ],
      },
      {
        type: "text",
        title: "CURSOS E CERTIFICAÇÕES",
        full: true,
        body:
          "AWS Certified Cloud Practitioner (CLF-C02) — em preparação (SimuLearn, 12 módulos concluídos) · " +
          "Cloud Security Fundamentals (SimuLearn) · Infrastructure as Code: Introduction to Terraform (HashiCorp Labs)",
      },
      {
        type: "text",
        title: "IDIOMAS",
        body: "Português: nativo | Inglês: intermediário",
      },
      {
        type: "projects",
        title: "PROJETOS",
        items: [
          {
            core: true,
            name: "CloudGuard: Governança Automatizada & FinOps",
            tech: "Terraform · AWS Lambda (Python) · EventBridge · CloudTrail",
            url: CONTACT.github,
            short:
              "Plataforma de governança orientada a eventos que detecta e remedia automaticamente riscos de segurança e desperdício financeiro na AWS.",
            bullets: [
              "Situação: ambientes de nuvem sob demanda exigiam remediação rápida de riscos de segurança e desperdício financeiro sem depender de intervenção manual constante.",
              "Ação: desenvolvi uma plataforma de governança orientada a eventos usando AWS Lambda, EventBridge e CloudTrail, provisionada via Terraform, com auto-remediação de buckets S3 expostos publicamente e verificação de conformidade de tags de centro de custo.",
              "Resultado: o sistema detecta e bloqueia automaticamente exposições indevidas, sinaliza recursos sem tags de custo e desliga recursos ociosos em ambientes de teste, reduzindo risco e desperdício financeiro.",
            ],
          },
          {
            core: true,
            name: "CloudGuard: Detecção de Ameaças & Resposta a Incidentes",
            tech: "Terraform · AWS GuardDuty · Lambda · EventBridge · CloudTrail · SSM/IMDSv2",
            url: CONTACT.github,
            short:
              "Infraestrutura blindada com detecção de ameaças e isolamento automático de instâncias comprometidas, sem acesso SSH.",
            bullets: [
              "Situação: ambientes AWS precisavam de detecção de ameaças e contenção de instâncias comprometidas sem intervenção manual, além de acesso sem SSH.",
              "Ação: provisionei uma infraestrutura blindada via Terraform (EC2 sem SSH/IP público, acesso via SSM, IMDSv2 obrigatório), com GuardDuty e CloudTrail para detecção e auditoria, e uma função Lambda acionada pelo EventBridge para isolar automaticamente instâncias comprometidas, além de um pipeline CI/CD com GitHub Actions via OIDC.",
              "Resultado: contenção automática de ameaças em segundos (troca de Security Group para isolamento), evidências forenses preservadas em S3 criptografado, e infraestrutura implantada sem credenciais estáticas.",
            ],
          },
          {
            core: true,
            name: "Pipeline CI/CD DevSecOps com Gestão de Segredos",
            tech: "GitHub Actions · Terraform · AWS Secrets Manager · IAM",
            url: CONTACT.github,
            short:
              "Pipeline CI/CD com Terraform e GitHub Actions que elimina totalmente a exposição de chaves de acesso no código-fonte.",
            bullets: [
              "Situação: pipelines de deploy careciam de gestão adequada de segredos, criando risco de exposição de credenciais e padrões inconsistentes de infraestrutura segura.",
              "Ação: arquitetei um pipeline CI/CD com GitHub Actions e Terraform, eliminando completamente a exposição de chaves de acesso no código-fonte via GitHub Secrets e AWS Secrets Manager, provisionando VPC, IAM e S3 sob o princípio do menor privilégio.",
              "Resultado: exposição zero de credenciais no repositório e infraestrutura provisionada de forma consistente e segura em todos os deploys.",
            ],
          },
          {
            name: "Monitoramento de Custos & Auditoria Contínua (AWS)",
            tech: "Terraform · CloudTrail · CloudWatch · SNS",
            url: CONTACT.github,
            bullets: [
              "Situação: a falta de visibilidade sobre os custos da conta AWS gerava risco de cobranças inesperadas, além da ausência de rastreabilidade formal das ações na conta.",
              "Ação: provisionei um pipeline de auditoria contínua via Terraform com CloudTrail, um cofre de logs S3 com escrita restrita, e um alarme de billing no CloudWatch com notificações automáticas por e-mail via SNS quando os custos ultrapassavam um limite definido.",
              "Resultado: alertas proativos de custo prevenindo cobranças inesperadas (FinOps) e rastreabilidade completa de quem fez o quê, quando e de onde, preparando a conta para auditorias de segurança.",
            ],
          },
          {
            name: "Finance AI Voice API — Edição 100% Gratuita & Local",
            tech: "Java · Spring Boot · Spring AI · Ollama · Vosk · eSpeak-NG",
            url: CONTACT.github,
            bullets: [
              "Situação: uma API de orçamento financeiro pessoal controlada por voz dependia de serviços pagos (OpenAI) para chat, transcrição e síntese de voz, gerando custos recorrentes.",
              "Ação: reconstruí a camada de IA da aplicação Spring Boot, substituindo serviços pagos por alternativas 100% locais e offline — Ollama para chat com Tool Calling, Vosk para transcrição de voz e eSpeak-NG para síntese — mantendo o domínio e a arquitetura em camadas originais.",
              "Resultado: eliminação completa dos custos recorrentes de API de IA, com a aplicação rodando de ponta a ponta (voz → ação → voz) inteiramente na máquina do usuário.",
            ],
          },
          {
            name: "Job Hunter Pro — Bot de Telegram",
            tech: "Python · pyTelegramBotAPI · BeautifulSoup4 · SQLite",
            url: CONTACT.github,
            bullets: [
              "Situação: buscar vagas manualmente em múltiplos sites (Vagas.com, Indeed, InfoJobs, Catho, Trabalha Brasil) era lento, repetitivo e cheio de falsos positivos.",
              "Ação: construí um bot de Telegram em Python que agrega vagas de múltiplos sites simultaneamente via web scraping, aplica um filtro de precisão para eliminar recomendações/falsos positivos, usa geolocalização por IP para sugerir buscas regionais, e armazena resultados recentes localmente (SQLite) por 30 minutos.",
              "Resultado: busca de vagas consolidada em um único chat, respostas instantâneas em buscas repetidas, e menor risco de bloqueio por limite de requisições dos sites de origem.",
            ],
          },
        ],
      },
    ],
  },

  en: {
    lang: "en",
    file: "Johnata-Williamy-resume",
    name: "Johnata Williamy Sousa da Silva",
    headline: "Junior Cloud & DevSecOps Analyst | AWS · Terraform · Security Governance",
    contactLines: contactLines("en"),
    footer: `${CONTACT.github} | ${CONTACT.linkedin}`,
    sections: [
      {
        type: "text",
        title: "PROFESSIONAL SUMMARY",
        body:
          "Junior analyst in Cloud & Information Security, with hands-on experience in the AWS ecosystem. " +
          "Working as an independent contractor since January 2026, building secure environments from the " +
          "ground up (Security by Design), with Infrastructure as Code in Terraform, access governance via " +
          "IAM, and automated auditing and FinOps practices. Currently pursuing a degree in Information " +
          "Security, with the AWS Cloud Practitioner (CLF-C02) certification in preparation.",
        shortBody:
          "Junior analyst in Cloud & Information Security, with hands-on experience in the AWS ecosystem. " +
          "Independent contractor since January 2026, building secure environments from the ground up " +
          "(Security by Design), with Terraform IaC, IAM governance, and auditing/FinOps practices. " +
          "Currently pursuing a degree in Information Security, with the AWS Cloud Practitioner (CLF-C02) " +
          "certification in preparation.",
      },
      {
        type: "jobs",
        title: "PROFESSIONAL EXPERIENCE",
        items: [
          {
            role: "Cloud & DevSecOps Analyst (Independent Contractor)",
            org: "Specialized Services / Independent Consulting",
            meta: "Jan 2026 - Present · Remote",
            bullets: [
              "Provisioning and architecting on-demand AWS cloud environments, ensuring high availability and security from the design phase (Security by Design).",
              "Developing Infrastructure as Code (IaC) with Terraform for automated, standardized provisioning of VPCs, subnets, and security groups.",
              "Implementing access governance and control policies based on the Principle of Least Privilege via AWS IAM and RBAC.",
              "Setting up continuous auditing, monitoring, and traceability of critical security events with AWS CloudTrail and CloudWatch.",
              "Building CI/CD automation pipelines with GitHub Actions, integrating secure credential management (AWS Secrets Manager) and ensuring deploys without key exposure.",
              "Applying FinOps practices, structuring automatic shutdown of idle resources and cost-center tagging.",
            ],
            shortBullets: [
              "Provisioning and architecting on-demand AWS environments, secure from the design phase (Security by Design).",
              "Infrastructure as Code with Terraform for VPCs, subnets and security groups, with IAM/RBAC access governance.",
              "CI/CD pipelines with GitHub Actions and AWS Secrets Manager, ensuring deploys without key exposure.",
              "FinOps practices: automatic shutdown of idle resources and cost-center tagging.",
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
            degree: "Bachelor of Technology in Information Security",
            school: "Cruzeiro do Sul Virtual",
            meta: "Jan 2026 - Dec 2027 (in progress) · Remote",
          },
          {
            degree: "High School",
            school: "Erem Severino de Andrade Guerra",
            meta: "Completed in 2025",
          },
        ],
      },
      {
        type: "text",
        title: "COURSES AND CERTIFICATIONS",
        full: true,
        body:
          "AWS Certified Cloud Practitioner (CLF-C02) — in preparation (SimuLearn, 12 modules completed) · " +
          "Cloud Security Fundamentals (SimuLearn) · Infrastructure as Code: Introduction to Terraform (HashiCorp Labs)",
      },
      {
        type: "text",
        title: "LANGUAGES",
        body: "Portuguese: native | English: intermediate",
      },
      {
        type: "projects",
        title: "PROJECTS",
        items: [
          {
            core: true,
            name: "CloudGuard: Automated Governance & FinOps",
            tech: "Terraform · AWS Lambda (Python) · EventBridge · CloudTrail",
            url: CONTACT.github,
            short:
              "Event-driven governance platform that automatically detects and remediates AWS security risks and financial waste.",
            bullets: [
              "Situation: on-demand cloud environments required fast remediation of security risks and financial waste without relying on constant manual intervention.",
              "Action: developed an event-driven governance platform using AWS Lambda, EventBridge, and CloudTrail, provisioned via Terraform, with auto-remediation of publicly exposed S3 buckets and cost-center tag compliance checks.",
              "Result: the system automatically detects and blocks improper exposures, flags resources missing cost tags, and shuts down idle resources in test environments, reducing risk and financial waste.",
            ],
          },
          {
            core: true,
            name: "CloudGuard: Threat Detection & Incident Response",
            tech: "Terraform · AWS GuardDuty · Lambda · EventBridge · CloudTrail · SSM/IMDSv2",
            url: CONTACT.github,
            short:
              "Hardened AWS infrastructure with threat detection and automatic isolation of compromised instances, no SSH access.",
            bullets: [
              "Situation: AWS environments needed threat detection and containment of compromised instances without manual intervention, along with SSH-free access.",
              "Action: provisioned a hardened infrastructure via Terraform (EC2 with no SSH/public IP, access via SSM, mandatory IMDSv2), with GuardDuty and CloudTrail for detection and auditing, and a Lambda function triggered by EventBridge to automatically isolate compromised instances, plus a CI/CD pipeline with GitHub Actions via OIDC.",
              "Result: automatic threat containment within seconds (Security Group swap for isolation), forensic evidence preserved in encrypted S3, and infrastructure deployed with no static credentials.",
            ],
          },
          {
            core: true,
            name: "CI/CD DevSecOps Pipeline with Secrets Management",
            tech: "GitHub Actions · Terraform · AWS Secrets Manager · IAM",
            url: CONTACT.github,
            short:
              "CI/CD pipeline with Terraform and GitHub Actions that fully eliminates access-key exposure in source code.",
            bullets: [
              "Situation: deployment pipelines lacked proper secrets management, creating risk of credential exposure and inconsistent secure infrastructure standards.",
              "Action: architected a CI/CD pipeline with GitHub Actions and Terraform, completely eliminating access key exposure in source code via GitHub Secrets and AWS Secrets Manager, provisioning VPC, IAM, and S3 under the least-privilege principle.",
              "Result: zero credential exposure in the repository and infrastructure consistently and securely provisioned across all deploys.",
            ],
          },
          {
            name: "Cost Monitoring & Continuous Auditing (AWS)",
            tech: "Terraform · CloudTrail · CloudWatch · SNS",
            url: CONTACT.github,
            bullets: [
              "Situation: lack of visibility into AWS account costs created risk of unexpected charges, along with an absence of formal traceability of account actions.",
              "Action: provisioned a continuous auditing pipeline via Terraform with CloudTrail, a restricted-write S3 log vault, and a CloudWatch billing alarm with automatic email notifications via SNS when costs exceeded a defined threshold.",
              "Result: proactive cost alerts preventing unexpected charges (FinOps) and full traceability of who did what, when, and from where, preparing the account for security audits.",
            ],
          },
          {
            name: "Finance AI Voice API — 100% Free & Local Edition",
            tech: "Java · Spring Boot · Spring AI · Ollama · Vosk · eSpeak-NG",
            url: CONTACT.github,
            bullets: [
              "Situation: a voice-controlled personal finance budgeting API relied on paid services (OpenAI) for chat, transcription, and voice synthesis, generating recurring costs.",
              "Action: rebuilt the AI layer of the Spring Boot application, replacing paid services with 100% local, offline alternatives — Ollama for chat with Tool Calling, Vosk for voice transcription, and eSpeak-NG for synthesis — while keeping the domain and layered architecture identical to the original version.",
              "Result: complete elimination of recurring AI API costs, with the application running end-to-end (voice → action → voice) entirely on the user's machine.",
            ],
          },
          {
            name: "Job Hunter Pro — Telegram Bot",
            tech: "Python · pyTelegramBotAPI · BeautifulSoup4 · SQLite",
            url: CONTACT.github,
            bullets: [
              "Situation: manually searching for jobs across multiple sites (Vagas.com, Indeed, InfoJobs, Catho, Trabalha Brasil) was slow and repetitive, with many false-positive results.",
              "Action: built a Python Telegram bot that aggregates listings from multiple sites simultaneously via web scraping, applies a precision filter to eliminate recommended/false-positive listings, uses IP-based geolocation to suggest regional searches, and caches recent results locally (SQLite) for 30 minutes.",
              "Result: consolidated job search in a single chat, instant responses on repeated searches, and lower risk of being rate-limited by source sites.",
            ],
          },
        ],
      },
    ],
  },
};

export const CONTACT_INFO = CONTACT;