// All portfolio content, bilingual (en/pt). Consumed by the canvas engine.
export const PORTFOLIO = {
  sections: {
    about: {
      kicker: { en: "Off the clock", pt: "Fora do expediente" },
      title: { en: "Beyond the code.", pt: "Além do código." },
      text: {
        en: "A few notes on where I come from and what keeps me curious.",
        pt: "Algumas notas sobre de onde eu venho e o que me mantém curioso."
      },
      cards: [
        {
          type: "family",
          pin: { en: "Background & Inpiration", pt: "Origens & Inspiração" },
          title: { en: "Cloud & DevSecOps", pt: "Cloud & DevSecOps" },
          desc: {
            en: "Security and speed don't have to be at odds in the cloud. As a Cloud & DevSecOps Analyst, I automate AWS infrastructures using Terraform and GitHub Actions CI/CD pipelines. From zero-leak credential automation to real-time risk remediation and FinOps, I turn cloud complexity into secure, efficient environments.",
            pt: "Segurança e velocidade não precisam ser opostos na nuvem. Como Analista de Cloud & DevSecOps, automatizo infraestruturas na AWS utilizando Terraform e esteiras CI/CD com GitHub Actions. De automações com zero vazamento de chaves à remediação de riscos e FinOps em tempo real, transformo complexidade em ambientes seguros e eficientes."
          },
          link: {
            href: "https://www.linkedin.com/in/johnata-williamy/",
            label: { en: "LinkedIn", pt: "LinkedIn" }
          }
        },
        {
          type: "quote",
          pin: { en: "favorite quote", pt: "citação favorita" },
          quote: {
            en: "Limits only exist if I allow them to. Defeat isn't losing, it's giving up.",
            pt: "Os limites só existem se eu os deixar existir.  Derrota não é perder, e sim se eu desistir"
          },
          author: "Goku",
          source: "Dragon Ball"
        },
        {
          type: "anime",
          pin: { en: "anime", pt: "anime" },
          title: { en: "The one that stuck", pt: "O que ficou" },
          desc: {
            en: "When I'm not in the terminal, you'll usually find me playing CS2 or studying. Especially in cloud security, the idea that 'hard work beats talent' makes even more sense every single day.",
            pt: "Quando não estou no terminal, geralmente estou jogando CS2 ou estudando. Especialmente na área de Cloud Security, a ideia de que 'esforço supera talento' faz ainda mais sentido no dia a dia."
          }
        },
        {
          type: "creator",
          pin: { en: "new this year", pt: "novo esse ano" },
          title: { en: "Started making content", pt: "Comecei a criar conteúdo" },
          desc: {
            en: "This year I started making programming and CS content on Instagram and TikTok — explaining things the way I wish someone had explained them to me.",
            pt: "Esse ano comecei a fazer conteúdo de programação e computação no Instagram e TikTok — explicando as coisas do jeito que eu queria que tivessem me explicado pra mim."
          },
          link: {
            href: "https://www.instagram.com/kctxns",
            label: { en: "@kctxns", pt: "kctxns" }
          }
        },
        {
          type: "drive",
          pin: { en: "why I'm here", pt: "por que tô aqui" },
          title: { en: "Under the hood", pt: "Por baixo do capô" },
          desc: {
            en: "What keeps me curious is what happens underneath — from APIs and models down to algorithms, architecture and performance.",
            pt: "O que me mantém curioso é o que acontece por baixo — de APIs e modelos até algoritmos, arquitetura e performance."
          }
        }
      ]
    },
    journey: {
      kicker: { en: "Flight log", pt: "Diário de bordo" },
      title: { en: "The journey so far.", pt: "A trajetória até aqui." },
      text: {
        en: "A short flight log of the milestones that shaped me as a developer.",
        pt: "Um breve diário de bordo dos marcos que me formaram como desenvolvedor."
      },
      timeline: [
        {
          date: { en: "2023", pt: "2023" },
          icon: "fa-solid fa-code",
          title: { en: "Started programming", pt: "Comecei a programar" },
          desc: {
            en: "Wrote my first lines of code and fell for building things — the beginning of everything.",
            pt: "Escrevi minhas primeiras linhas de código e me apaixonei por construir coisas — o começo de tudo."
          }
        },
          {
          date: { en: "January 2023", pt: "Janeiro de 2023" },
          icon: "fa-solid fa-shield-halved",
          title: { en: "Started as Cloud & DevSecOps Analyst (PJ)", pt: "Comecei como Analista de Cloud & DevSecOps (PJ)" },
          desc: {
            en: "Began working as an independent contractor, building secure AWS environments from the ground up with Terraform, IAM and CloudTrail.",
            pt: "Comecei a atuar como consultor independente, construindo ambientes AWS seguros do zero com Terraform, IAM e CloudTrail."
          }
        },
        {
          date: { en: "2025", pt: "2025" },
          icon: "fa-solid fa-graduation-cap",
          title: { en: "Completed High School", pt: "Concluí o Ensino Médio" },
          desc: {
            en: "Finished high school at Erem Severino de Andrade Guerra.",
            pt: "Concluí o Ensino Médio na Erem Severino de Andrade Guerra."
          }
        },
        {
          date: { en: "January 2026", pt: "Janeiro de 2026" },
          icon: "fa-solid fa-book",
          title: { en: "Started Information Security degree", pt: "Iniciei a faculdade de Segurança da Informação" },
          desc: {
            en: "Enrolled at Cruzeiro do Sul Virtual, turning hands-on cloud work into formal security engineering.",
            pt: "Ingressei na Cruzeiro do Sul Virtual, transformando a prática em cloud em engenharia de segurança formal."
          }
        }
      ]
    },
    skills: {
      kicker: { en: "Capability cluster", pt: "Cluster de habilidades" },
      title: { en: "Cloud, security and automation stack.", pt: "Stack de cloud, segurança e automação." },
      text: {
        en: "Tools I use to build secure AWS infrastructure, automate governance and ship CI/CD pipelines.",
        pt: "Ferramentas que uso para construir infraestrutura AWS segura, automatizar governança e entregar pipelines CI/CD."
      },
      groups: [
        ["AWS", { en: "EC2, S3, IAM, VPC, Route53, Lambda, EventBridge, SNS", pt: "EC2, S3, IAM, VPC, Route53, Lambda, EventBridge, SNS" }],
        ["Terraform", { en: "Infrastructure as Code for VPCs, subnets and security groups", pt: "Infraestrutura como código para VPCs, sub-redes e security groups" }],
        [{ en: "Security & Governance", pt: "Segurança & Governança" }, { en: "CloudTrail, CloudWatch, KMS, GuardDuty, MFA, encryption", pt: "CloudTrail, CloudWatch, KMS, GuardDuty, MFA, criptografia" }],
        ["GitHub Actions", { en: "CI/CD pipelines with AWS Secrets Manager, no key exposure", pt: "Pipelines CI/CD com AWS Secrets Manager, sem exposição de chaves" }],
        ["Linux", { en: "Ubuntu / Amazon Linux administration", pt: "Administração Ubuntu / Amazon Linux" }],
        [{ en: "Java & Spring", pt: "Java & Spring" }, { en: "Spring Boot, Spring AI for service layers", pt: "Spring Boot, Spring AI para camadas de serviço" }],
        ["Python", { en: "Automation scripts, bots and integrations", pt: "Scripts de automação, bots e integrações" }],
        [{ en: "Networking & Data", pt: "Redes & Dados" }, { en: "DNS fundamentals, JSON/YAML, SQLite", pt: "Fundamentos de DNS, JSON/YAML, SQLite" }],
        [{ en: "Local AI tooling", pt: "IA local" }, { en: "Ollama, Vosk, eSpeak-NG for offline voice AI", pt: "Ollama, Vosk, eSpeak-NG para IA de voz offline" }]
      ]
    },
    leadership: {
      kicker: { en: "Technical leadership", pt: "Liderança técnica" },
      title: { en: "Leading infrastructure decisions end to end.", pt: "Liderando decisões de infraestrutura de ponta a ponta." },
      text: {
        en: "As an independent contractor, I own the full lifecycle of the environments I build — from architecture and access governance to auditing and cost control.",
        pt: "Como consultor independente, sou responsável pelo ciclo completo dos ambientes que construo — da arquitetura e governança de acesso até a auditoria e o controle de custos."
      },
      groups: [
        [{ en: "Security by Design", pt: "Security by Design" }, { en: "Architecting environments secure from the first design decision", pt: "Arquitetando ambientes seguros desde a primeira decisão de design" }],
        [{ en: "Access governance", pt: "Governança de acesso" }, { en: "Least-privilege IAM/RBAC policies across projects", pt: "Políticas de IAM/RBAC de menor privilégio em todos os projetos" }],
        [{ en: "FinOps", pt: "FinOps" }, { en: "Cost-center tagging and automatic shutdown of idle resources", pt: "Tags de centro de custo e desligamento automático de recursos ociosos" }]
      ],
      links: []
    },
    projects: {
      kicker: { en: "Realized projects", pt: "Projetos realizados" },
      title: { en: "Projects with practical engineering decisions.", pt: "Projetos com decisões práticas de engenharia." },
      text: {
        en: "A compact view of projects involving AWS automation, security governance, CI/CD and AI integrations.",
        pt: "Uma visão compacta de projetos com automação AWS, governança de segurança, CI/CD e integrações de IA."
      },
      projects: ["compliancesentinel", "cloudguardgov", "cloudguardthreat", "cicdsecrets", "costmonitoring", "financeai", "jobhunter"]
    },
    contact: {
      kicker: { en: "Open channel", pt: "Canal aberto" },
      title: { en: "Let's talk.", pt: "Fala comigo!" },
      text: {
        en: "Junior Cloud & DevSecOps Analyst, open to projects, collaborations and opportunities involving AWS, security governance and automation.",
        pt: "Analista Júnior de Cloud & DevSecOps, aberto a projetos, colaborações e oportunidades envolvendo AWS, governança de segurança e automação."
      },
      links: [
        ["Email", "johnataichigo56@gmail.com", "mailto:johnataichigo56@gmail.com", "fa-solid fa-envelope"],
        [{ en: "Academic Email", pt: "E-mail Acadêmico" }, "johnata.silva006@cs.cruzeirodosul.edu.br", "mailto:johnata.silva006@cs.cruzeirodosul.edu.br", "fa-solid fa-building-columns"],
        ["LinkedIn", "Johnata Williamy", "https://www.linkedin.com/in/johnata-williamy/", "fa-brands fa-linkedin"],
        ["GitHub", "kctxdev", "https://github.com/kctxdev", "fa-brands fa-github"],
        ["WhatsApp", "+55 11 95944-5413", "https://wa.me/5511959445413", "fa-brands fa-whatsapp"]
      ]
    }
  },
  projects: {
    compliancesentinel: {
      icon: "fa-solid fa-sitemap",
      featured: true,
      title: { en: "Compliance Sentinel — Multi-Account Guardrails", pt: "Compliance Sentinel — Guardrails Multi-Conta" },
      tagline: { en: "Concept in progress: org-wide AWS compliance and drift detection across accounts.", pt: "Conceito em desenvolvimento: compliance e detecção de drift em várias contas AWS." },
      desc: { en: "[In development] Single-account governance solves risk locally, but most real companies run dozens of AWS accounts under an Organization — and drift between them is where the biggest breaches happen. Designing a Terraform-provisioned layer on AWS Organizations, Config and Security Hub that continuously evaluates every member account against a shared guardrail set (public S3, unencrypted volumes, root MFA, overly permissive IAM), auto-remediates safe violations, and escalates the rest via EventBridge + SNS/Slack.", pt: "[Em desenvolvimento] Governança de conta única resolve o risco localmente, mas a maioria das empresas roda dezenas de contas AWS sob uma Organization — e é no desalinhamento entre elas que acontecem as maiores brechas. Projetando uma camada provisionada via Terraform sobre AWS Organizations, Config e Security Hub que avalia continuamente cada conta-membro contra um conjunto de guardrails compartilhado (S3 público, volumes sem criptografia, MFA de root, IAM permissivo demais), auto-remedia violações seguras e escala o restante via EventBridge + SNS/Slack." },
      impact: { en: "Aims to turn compliance from a manual, account-by-account audit into a single pane of glass with automatic enforcement — the kind of guardrail layer that matters most as an org scales past one AWS account.", pt: "O objetivo é transformar compliance de uma auditoria manual conta a conta em um painel único com aplicação automática — o tipo de camada de guardrails que mais importa quando a organização cresce além de uma única conta AWS." },
      tech: ["Terraform", "AWS Organizations", "AWS Config", "Security Hub", "EventBridge"],
      link: "https://github.com/kctxdev/lab-padroes-projeto-java"
    },
    cloudguardgov: {
      icon: "fa-solid fa-shield-halved",
      title: "CloudGuard: Governance & FinOps",
      tagline: { en: "Event-driven governance platform that auto-remediates AWS risks and waste.", pt: "Plataforma de governança orientada a eventos que auto-remedia riscos e desperdícios na AWS." },
      desc: { en: "On-demand cloud environments required fast remediation of security risks and financial waste without manual intervention. Built an event-driven governance platform using AWS Lambda, EventBridge and CloudTrail, provisioned via Terraform, with auto-remediation of publicly exposed S3 buckets and cost-center tag compliance checks.", pt: "Ambientes de nuvem sob demanda precisavam de remediação rápida de riscos de segurança e desperdício financeiro sem intervenção manual. Desenvolvi uma plataforma de governança orientada a eventos usando AWS Lambda, EventBridge e CloudTrail, provisionada via Terraform, com auto-remediação de buckets S3 expostos e verificação de conformidade de tags de centro de custo." },
      impact: { en: "Automatically detects and blocks improper exposures, flags resources missing cost tags, and shuts down idle resources in test environments.", pt: "Detecta e bloqueia exposições indevidas automaticamente, sinaliza recursos sem tags de custo e desliga recursos ociosos em ambientes de teste." },
      tech: ["Terraform", "AWS Lambda", "EventBridge", "CloudTrail"],
      link: "https://github.com/kctxdev/cloudguard-aws-security"
    },
    cloudguardthreat: {
      icon: "fa-solid fa-user-shield",
      title: { en: "CloudGuard: Threat Detection & Response", pt: "CloudGuard: Detecção de Ameaças & Resposta" },
      tagline: { en: "Hardened AWS infrastructure with automatic isolation of compromised instances.", pt: "Infraestrutura AWS blindada com isolamento automático de instâncias comprometidas." },
      desc: { en: "AWS environments needed threat detection and containment of compromised instances without manual intervention, along with SSH-free access. Provisioned hardened infrastructure via Terraform (EC2 with no SSH/public IP, access via SSM, mandatory IMDSv2), with GuardDuty and CloudTrail for detection and auditing, plus a Lambda function triggered by EventBridge to isolate compromised instances automatically.", pt: "Ambientes AWS precisavam de detecção de ameaças e contenção de instâncias comprometidas sem intervenção manual, além de acesso sem SSH. Provisionei infraestrutura blindada via Terraform (EC2 sem SSH/IP público, acesso via SSM, IMDSv2 obrigatório), com GuardDuty e CloudTrail para detecção e auditoria, além de uma função Lambda acionada pelo EventBridge para isolar instâncias comprometidas automaticamente." },
      impact: { en: "Automatic threat containment within seconds, forensic evidence preserved in encrypted S3, and infrastructure deployed with no static credentials.", pt: "Contenção automática de ameaças em segundos, evidências forenses preservadas em S3 criptografado, e infraestrutura implantada sem credenciais estáticas." },
      tech: ["Terraform", "GuardDuty", "Lambda", "EventBridge", "SSM/IMDSv2"],
      link: "https://github.com/kctxdev/aws-secure-vpc-terraform"
    },
    cicdsecrets: {
      icon: "fa-brands fa-github",
      title: "CI/CD DevSecOps Pipeline with Secrets Management",
      tagline: { en: "GitHub Actions + Terraform pipeline with zero credential exposure.", pt: "Pipeline GitHub Actions + Terraform com exposição zero de credenciais." },
      desc: { en: "Deployment pipelines lacked proper secrets management, creating risk of credential exposure. Architected a CI/CD pipeline with GitHub Actions and Terraform, eliminating access key exposure in source code via GitHub Secrets and AWS Secrets Manager, provisioning VPC, IAM and S3 under least-privilege.", pt: "Pipelines de deploy não tinham gestão adequada de segredos, criando risco de exposição de credenciais. Arquitetei um pipeline CI/CD com GitHub Actions e Terraform, eliminando a exposição de chaves de acesso no código-fonte via GitHub Secrets e AWS Secrets Manager, provisionando VPC, IAM e S3 sob o princípio de menor privilégio." },
      impact: { en: "Zero credential exposure in the repository and infrastructure consistently and securely provisioned across all deploys.", pt: "Exposição zero de credenciais no repositório e infraestrutura provisionada de forma consistente e segura em todos os deploys." },
      tech: ["GitHub Actions", "Terraform", "AWS Secrets Manager", "IAM"],
      link: "https://github.com/kctxdev/aws-cicd-devsecops"
    },
    costmonitoring: {
      icon: "fa-solid fa-chart-line",
      title: { en: "Cost Monitoring & Continuous Auditing", pt: "Monitoramento de Custos & Auditoria Contínua" },
      tagline: { en: "Terraform-provisioned billing alerts and full account traceability.", pt: "Alertas de custo provisionados via Terraform e rastreabilidade total da conta." },
      desc: { en: "Lack of visibility into AWS account costs created risk of unexpected charges and absence of formal traceability. Provisioned a continuous auditing pipeline via Terraform with CloudTrail, a restricted-write S3 log vault, and a CloudWatch billing alarm with automatic email notifications via SNS.", pt: "A falta de visibilidade sobre os custos da conta AWS gerava risco de cobranças inesperadas e ausência de rastreabilidade formal. Provisionei um pipeline de auditoria contínua via Terraform com CloudTrail, um cofre de logs S3 com escrita restrita, e um alarme de billing no CloudWatch com notificações automáticas por e-mail via SNS." },
      impact: { en: "Proactive cost alerts preventing unexpected charges (FinOps) and full traceability of who did what, when and from where.", pt: "Alertas proativos de custo prevenindo cobranças inesperadas (FinOps) e rastreabilidade completa de quem fez o quê, quando e de onde." },
      tech: ["Terraform", "CloudTrail", "CloudWatch", "SNS"],
      link: "https://github.com/kctxdev/aws-monitoramento-terraform"
    },
    financeai: {
      icon: "fa-solid fa-microphone",
      title: "Finance AI Voice API — 100% Free & Local Edition",
      tagline: { en: "Voice-controlled budgeting API rebuilt with 100% local, offline AI.", pt: "API de orçamento controlada por voz reconstruída com IA 100% local e offline." },
      desc: { en: "A voice-controlled personal finance budgeting API relied on paid services (OpenAI) for chat, transcription and voice synthesis. Rebuilt the AI layer of the Spring Boot application, replacing paid services with local alternatives — Ollama for chat with Tool Calling, Vosk for transcription, and eSpeak-NG for synthesis — keeping the original domain and architecture.", pt: "Uma API de orçamento financeiro controlada por voz dependia de serviços pagos (OpenAI) para chat, transcrição e síntese de voz. Reconstruí a camada de IA da aplicação Spring Boot, substituindo os serviços pagos por alternativas locais — Ollama para chat com Tool Calling, Vosk para transcrição e eSpeak-NG para síntese — mantendo o domínio e a arquitetura originais." },
      impact: { en: "Complete elimination of recurring AI API costs, running end-to-end (voice → action → voice) entirely on the user's machine.", pt: "Eliminação total de custos recorrentes de API de IA, rodando de ponta a ponta (voz → ação → voz) inteiramente na máquina do usuário." },
      tech: ["Java", "Spring Boot", "Spring AI", "Ollama", "Vosk", "eSpeak-NG"],
      link: "https://github.com/kctxdev/finance-ai-voice-api"
    },
    jobhunter: {
      icon: "fa-brands fa-telegram",
      title: "Job Hunter Pro — Telegram Bot",
      tagline: { en: "Telegram bot that aggregates job listings across multiple sites.", pt: "Bot de Telegram que agrega vagas de múltiplos sites." },
      desc: { en: "Manually searching for jobs across multiple sites (Vagas.com, Indeed, InfoJobs, Catho, Trabalha Brasil) was slow and repetitive. Built a Python Telegram bot that aggregates listings via web scraping, applies a precision filter to eliminate false positives, uses IP-based geolocation for regional searches, and caches results locally with SQLite.", pt: "Buscar vagas manualmente em vários sites (Vagas.com, Indeed, InfoJobs, Catho, Trabalha Brasil) era lento e repetitivo. Desenvolvi um bot de Telegram em Python que agrega vagas via web scraping, aplica um filtro de precisão para eliminar falsos positivos, usa geolocalização por IP para sugerir buscas regionais, e armazena resultados localmente em SQLite." },
      impact: { en: "Consolidated job search in a single chat, instant responses on repeated searches, and lower risk of being rate-limited.", pt: "Busca de vagas consolidada em um único chat, respostas instantâneas em buscas repetidas, e menor risco de bloqueio por limite de requisições." },
      tech: ["Python", "pyTelegramBotAPI", "BeautifulSoup4", "SQLite"],
      link: "https://github.com/kctxdev/cacador-de-vagas-bot"
    }
  }
};