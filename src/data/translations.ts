import { NavItem, ServiceItem, ProjectItem, TeamMember, TechStackCategory, ProcessStage, FaqItem } from '@/types';

export type Language = 'en' | 'am';

export interface TranslationDictionary {
  [key: string]: string;
}

export const uiTranslations: Record<Language, TranslationDictionary> = {
  en: {
    // Navigation
    navAbout: 'About',
    navServices: 'Services',
    navEcosystem: 'Ecosystem',
    navSolutions: 'Solutions',
    navProcess: 'Process',
    navProjects: 'Projects',
    navTech: 'Tech Stack',
    navTeam: 'Team',
    navFaq: 'FAQ',
    navContact: 'Contact',
    navGetStarted: 'Get Started',
    navLetsBuild: "Let's Build",
    navSearch: 'Search',
    navClose: 'Close',

    // Hero
    heroBadge: 'Marvel Technologies · Innovation Without Limits',
    heroTitlePrefix: 'Building Next-Generation',
    heroTitleHighlight: 'Digital Systems',
    heroTitleSuffix: 'Without Limits.',
    heroSubtitle: 'We transform ambitious concepts into resilient digital products through modern full-stack engineering, cloud architecture, and human-centered design.',
    heroStartProject: 'Start Your Project',
    heroExploreSolutions: 'Explore Solutions',
    heroTypeSafe: 'Type-Safe Architecture',
    heroSubSecond: 'Sub-second Response Times',
    heroUptime: '99.9% Uptime Design',
    heroArchMesh: 'Architecture Mesh',
    heroRealtimeTelemetry: 'Real-time Telemetry',
    heroLayer1Title: '01 / FRONTEND LAYER',
    heroLayer1Desc: 'Next.js App Router, React 19 Server Components, Edge CDN Caching',
    heroLayer1Metric: 'TTFB: 42ms · Optimized',
    heroLayer2Title: '02 / BACKEND & API',
    heroLayer2Desc: 'TypeScript Microservices, Distributed Redis, Idempotent Queues',
    heroLayer2Metric: 'Cluster: 3 Nodes Healthy',
    heroLayer3Title: '03 / PERSISTENCE',
    heroLayer3Desc: 'PostgreSQL Relational DB, Prisma ORM, Automated Backups',
    heroLayer3Metric: 'Replication: Synchronous',
    heroLogsTitle: '// Real-time operational logs',
    heroLog1: '[OK] System health check verified. 0 defects reported.',
    heroLog2: '[DEPLOY] CI/CD pipeline succeeded (build time: 24.3s).',
    heroLog3: '[LATENCY] Global edge p99 response: 18.2ms.',
    heroLog4: '[SECURITY] Zero vulnerable dependencies detected.',

    // Ecosystem & Marquee
    ecoBadge: 'INTEGRATED DIGITAL CORE',
    ecoTitle: 'Everything Your Business Needs —',
    ecoTitleHighlight: 'Connected.',
    ecoSubtitle: 'Hover or click any satellite node to see it come alive on the central command center.',
    ecoGreeting: 'Good morning, Admin',
    ecoDeployModule: 'Deploy Module',
    ecoToday: 'Today',
    ecoThisWeek: 'This week',
    ecoThisMonth: 'This month',
    ecoTotalRevenue: 'TOTAL REVENUE',
    ecoProcessedOrders: 'PROCESSED ORDERS',
    ecoActiveClients: 'ACTIVE CLIENTS',
    ecoPendingAudits: 'PENDING AUDITS',
    ecoTelemetryPulse: 'Telemetry Pulse (Hover chart to scrub)',
    marqueeBadge: 'Companies We Build For',
    marqueeSubtitle: 'Trusted by forward-thinking organizations, international venture studios, and modern industry leaders.',

    // About
    aboutBadge: 'Company Identity',
    aboutTitle: 'Engineered by Technologists,',
    aboutHighlight: 'Built for the Future.',
    aboutSubtitle: 'Marvel Technologies is a modern technology company driven by a shared belief that thoughtful software engineering can solve real-world organizational challenges without limits.',
    aboutP1: 'We founded Marvel Technologies to bridge the gap between ambitious product ideas and production-grade software. Too often, businesses are forced to choose between rigid, slow legacy vendors or fragmented freelancers lacking architectural consistency.',
    aboutP2: 'As a collaborative founding team combining deep software architecture, business leadership, and operations execution, we operate with surgical focus. We leverage modern toolchains—Next.js, React Native, TypeScript, PostgreSQL, and cloud serverless architectures—to craft systems that perform with blistering speed, scale gracefully under load, and feel exceptional to use.',
    aboutOathTitle: 'Our Engineering Oath',
    aboutOathSub: 'Founding Principles',
    aboutOathQuote: '“We engineer every project as if we are its primary operators. We write clean code, document every endpoint, test rigorously, and build solutions that endure.”',
    aboutOathRole: 'Founding Leadership',

    // Services
    servicesBadge: 'Core Services',
    servicesTitle: 'Digital Capabilities Engineered',
    servicesHighlight: 'To Scale.',
    servicesSubtitle: 'From high-velocity web platforms and native mobile apps to resilient cloud APIs and automated workflows, our engineering toolkit handles the entire digital lifecycle.',
    servicesScopeTitle: 'TECHNICAL SCOPE & CAPABILITIES',
    servicesDeliverablesTitle: 'MILESTONE DELIVERABLES',
    servicesInquirePrefix: 'Inquire About',
    servicesViewArchitecture: 'View Architecture & Scope',

    // Industries
    industriesBadge: 'Industry Solutions',
    industriesTitle: 'Tailored Architectures for',
    industriesHighlight: 'Modern Sectors.',
    industriesSubtitle: 'We deliver purpose-built software architectures engineered to meet the regulatory, performance, and user expectations of specific industries.',
    industriesCapabilitiesTitle: 'SPECIALIZED INDUSTRY CAPABILITIES',
    industriesDeliverablesTitle: 'PRODUCTION DELIVERABLES',
    industriesReferencePrefix: 'Reference Deployment Architecture:',

    // Interactive System
    systemBadge: 'System Architecture',
    systemTitle: 'Engineered for Performance &',
    systemHighlight: 'Zero Downtime.',
    systemSubtitle: 'Explore how our layered microservice and edge architecture ensures data consistency, low latency, and infinite scaling.',
    systemKeyMetrics: 'KEY ARCHITECTURAL METRICS',
    systemSourceSnippet: 'PRODUCTION CODE PATTERN',

    // Process
    processBadge: 'Engineering Lifecycle',
    processTitle: 'From Initial Conception',
    processHighlight: 'To Production Deployment.',
    processSubtitle: 'Our 6-stage development framework guarantees architectural rigor, transparent milestones, and zero surprises.',
    processDeliverablesTitle: 'Key Deliverables:',

    // Projects
    projectsBadge: 'Production Portfolio',
    projectsTitle: 'Real Systems Shipped &',
    projectsHighlight: 'Deployed to Production.',
    projectsSubtitle: 'Explore high-impact production web applications, enterprise platforms, and digital products engineered with our modern stack.',
    projectsAll: 'All',
    projectsFullStack: 'Full-Stack',
    projectsEcommerce: 'E-Commerce',
    projectsEnterprise: 'Enterprise & Cloud',
    projectsMobile: 'Mobile & PWA',
    projectsLivePreview: 'Live Preview',
    projectsInspectArchitecture: 'Inspect Architecture',
    projectsTabArchitecture: 'Architecture & Case Study',
    projectsTabSimulator: 'Device Simulator (Desktop & Mobile)',
    projectsChallenge: 'The Challenge',
    projectsSolution: 'Engineering Solution',
    projectsOutcome: 'Impact & Results',
    projectsKeyDeliverables: 'Production Deliverables',

    // Technologies
    techBadge: 'Production Toolchain',
    techTitle: 'Modern Tech Stack Engineered For',
    techHighlight: 'Velocity & Safety.',
    techSubtitle: 'We select battle-tested, modern technologies that eliminate runtime errors, provide exceptional developer experience, and scale effortlessly.',

    // Team
    teamBadge: 'Founding Team',
    teamTitle: 'Collaborative',
    teamHighlight: 'Engineering Collective.',
    teamSubtitle: 'A focused core of technology professionals combining deep domain knowledge in distributed web platforms, mobile engineering, and cloud systems.',
    teamBusinessLeadBanner: 'Executive Business & Partnerships',
    teamDirectContact: 'Direct Coordinates',

    // FAQ
    faqBadge: 'Frequently Asked Questions',
    faqTitle: 'Clear Answers About Our',
    faqHighlight: 'Process & Engagement.',
    faqSubtitle: 'Direct, transparent guidelines on how we collaborate with partners and deliver digital systems.',

    // Contact
    contactBadge: 'Initiate Collaboration',
    contactTitle: "Let's Engineer Something",
    contactHighlight: 'Exceptional Together.',
    contactSubtitle: 'Whether you are launching a greenfield digital product, modernizing legacy systems, or scaling high-load infrastructure, our engineering collective is ready.',
    contactFormTitle: 'Project Inquiry & Architecture Discovery',
    contactFormSub: 'Fill out this brief to schedule a technical discovery call with our leadership team.',
    contactFullName: 'Your Full Name',
    contactFullNamePlaceholder: 'e.g. Dawit Tadesse',
    contactWorkEmail: 'Work Email Address',
    contactWorkEmailPlaceholder: 'dawit@company.com',
    contactSubject: 'Project Scope or Service Needed',
    contactSubjectPlaceholder: 'e.g. High-Load E-Commerce Platform & Mobile App',
    contactMessage: 'Project Overview & Requirements',
    contactMessagePlaceholder: 'Tell us about your product goals, timeline, and any specific technical constraints...',
    contactSubmitBtn: 'Submit Technical Inquiry',
    contactSubmitting: 'Submitting Inquiry...',
    contactSuccessAlert: 'Inquiry received successfully! Our founding team will review your requirements and respond within 24 hours.',
    contactErrorAlert: 'An error occurred while submitting. Please message us directly via Telegram or phone.',
    contactDirectDesk: 'Direct Executive & Partnerships Desk',
    contactDirectDeskSub: 'Reach our founding leadership directly for time-sensitive, strategic, or enterprise inquiries.',
    contactAvailability: 'Mon - Sat: 8:30 AM - 7:30 PM (EAT / UTC+3)',

    // Footer
    footerDesc: 'Marvel Technologies is a software engineering and technology company founded by collaborative software engineers and designers. We architect high-performance web platforms, scalable mobile applications, cloud infrastructures, and automated business systems.',
    footerQuickLinksTitle: 'Navigation',
    footerServicesTitle: 'Core Capabilities',
    footerConnectTitle: 'Executive Desk',
    footerStatus: 'All Systems Operational · Taking New Inquiries',
    footerCopyright: 'Marvel Technologies Ltd. All rights reserved. Engineered for maximum reliability.',

    // Device Preview
    deviceDesktop: 'Desktop (1440px)',
    deviceMobile: 'Mobile (390px)',
    deviceFitWindow: 'Fit Window',
    deviceFullScroll: 'Full Scroll',
    deviceScreenshot: 'Screenshot',
    deviceLiveInteractive: 'Live Interactive',
    deviceLiveSite: 'Live Site',
    deviceCopied: 'Copied',
    deviceCopyUrl: 'Copy URL',
    deviceReload: 'Reload Frame',

    // Speed Dial & Floating Buttons
    speedDialTelegram: 'Direct Telegram Chat',
    speedDialWhatsApp: 'Direct WhatsApp Chat',
    speedDialConsultation: 'Request Technical Consultation',

    // Command Palette
    cmdPlaceholder: 'Type a command or search...',
    cmdGroupNav: 'Navigation & Sections',
    cmdGroupProjects: 'Production Deployments',
    cmdGroupActions: 'Direct Communication',
    cmdSwitchLang: 'Switch Language',
    cmdCurrentLangEn: 'Currently viewing in English',
    cmdCurrentLangAm: 'Currently viewing in Amharic (አማርኛ)',
    cmdNoResults: 'No matching commands or projects found.',
  },

  am: {
    // Navigation
    navAbout: 'ስለ እኛ',
    navServices: 'አገልግሎቶች',
    navEcosystem: 'ሥነ-ምህዳር',
    navSolutions: 'መፍትሔዎች',
    navProcess: 'ሂደት',
    navProjects: 'ፕሮጀክቶች',
    navTech: 'ቴክኖሎጂዎች',
    navTeam: 'ቡድናችን',
    navFaq: 'ጥያቄዎች',
    navContact: 'አግኙን',
    navGetStarted: 'ይጀምሩ',
    navLetsBuild: 'እንገንባ',
    navSearch: 'ፈልግ',
    navClose: 'ዝጋ',

    // Hero
    heroBadge: 'ማርቭል ቴክኖሎጂስ · ወሰን የለሽ ፈጠራ',
    heroTitlePrefix: 'የወደፊቱን ዘመናዊ',
    heroTitleHighlight: 'ዲጂታል ሥርዓቶች',
    heroTitleSuffix: 'ያለ ገደብ እንገነባለን።',
    heroSubtitle: 'ታላላቅ የንግድ እና የቴክኖሎጂ ራዕዮችን ወደ አስተማማኝ፣ ዘመናዊና ፈጣን ዲጂታል ምርቶች በከፍተኛ የሶፍትዌር ምህንድስና፣ ደመና አርክቴክቸር እና ተጠቃሚ-ተኮር ዲዛይን እንለውጣለን።',
    heroStartProject: 'ፕሮጀክትዎን ይጀምሩ',
    heroExploreSolutions: 'መፍትሔዎችን ይመልከቱ',
    heroTypeSafe: 'አስተማማኝ አርክቴክቸር',
    heroSubSecond: 'እጅግ ፈጣን ምላሽ ሰጪነት',
    heroUptime: '99.9% ያልተቋረጠ አገልግሎት',
    heroArchMesh: 'የሥነ-ህንፃ ዝርዝር',
    heroRealtimeTelemetry: 'የቀጥታ ስታትስቲክስ',
    heroLayer1Title: '01 / የፊት ገጽታ ሽፋን',
    heroLayer1Desc: 'Next.js App Router፣ React 19 Server Components፣ Edge CDN ፈጣን አቀራረብ',
    heroLayer1Metric: 'ምላሽ ፍጥነት፡ 42ms · እጅግ ፈጣን',
    heroLayer2Title: '02 / የጀርባ አገልጋይና ኤፒአይ',
    heroLayer2Desc: 'TypeScript ማይክሮሰርቪስ፣ የተረጋጋ Redis፣ አስተማማኝ የመልእክት ሰልፎች',
    heroLayer2Metric: 'ክላስተር፡ 3 ኖዶች ሙሉ ጤናማ',
    heroLayer3Title: '03 / የመረጃ ቋት ማከማቻ',
    heroLayer3Desc: 'PostgreSQL የመረጃ ቋት፣ Prisma ORM፣ አውቶሜትድ ምትኬዎች',
    heroLayer3Metric: 'ማባዛት፡ የተቀናጀ ቀጥተኛ ቅጂ',
    heroLogsTitle: '// የቀጥታ የሥርዓት ሎጎች',
    heroLog1: '[ትክክል] የስርዓት ጤና ፍተሻ ተረጋግጧል። 0 ጉድለቶች ተመዝግበዋል።',
    heroLog2: '[ዝርጋታ] የCI/CD ቧንቧ በተሳካ ሁኔታ ተጠናቋል (የግንባታ ጊዜ፡ 24.3 ሰከንድ)።',
    heroLog3: '[ፍጥነት] ዓለም አቀፍ የጫፍ ምላሽ ፍጥነት፡ 18.2ms።',
    heroLog4: '[ደህንነት] ምንም የተጋለጠ ክፍተት አልተገኘም።',

    // Ecosystem & Marquee
    ecoBadge: 'የተቀናጀ የዲጂታል እምብርት',
    ecoTitle: 'ለንግድዎ የሚያስፈልገው ሁሉ —',
    ecoTitleHighlight: 'የተሳሰረ።',
    ecoSubtitle: 'በማዕከላዊው የቁጥጥር ሰሌዳ ላይ የቀጥታ መረጃዎችን ለማየት ማንኛውንም አገልግሎት ይጫኑ ወይም ያንዣብቡ።',
    ecoGreeting: 'መልካም ቀን፣ አስተዳዳሪ',
    ecoDeployModule: 'ሞጁሉን ጀምር',
    ecoToday: 'ዛሬ',
    ecoThisWeek: 'በዚህ ሳምንት',
    ecoThisMonth: 'በዚህ ወር',
    ecoTotalRevenue: 'ጠቅላላ ገቢ',
    ecoProcessedOrders: 'የተከናወኑ ትዕዛዞች',
    ecoActiveClients: 'ንቁ ደንበኞች',
    ecoPendingAudits: 'በመጠባበቅ ላይ ያሉ',
    ecoTelemetryPulse: 'የቀጥታ ውሂብ ፍሰት (ግራፉን በማንዣበብ ይመልከቱ)',
    marqueeBadge: 'የምንገነባላቸው ድርጅቶች',
    marqueeSubtitle: 'በፈጠራ መሪዎች፣ በዓለም አቀፍ ድርጅቶችና በዘመናዊ የቴክኖሎጂ ተቋማት የታመነ።',

    // About
    aboutBadge: 'የኩባንያችን ማንነት',
    aboutTitle: 'በመሀንዲሶች የታነፀ፣',
    aboutHighlight: 'ለወደፊቱ የተገነባ።',
    aboutSubtitle: 'ማርቭል ቴክኖሎጂስ የታሰበበት የሶፍትዌር ምህንድስና ውስብስብ የድርጅት ፈተናዎችን ያለ ገደብ መፍታት ይችላል በሚል ጽኑ እምነት የተመሰረተ ዘመናዊ የቴክኖሎጂ ኩባንያ ነው።',
    aboutP1: 'ማርቭል ቴክኖሎጂስን የመሰረትነው በታላላቅ የዲጂታል ሃሳቦች እና በአስተማማኝ ፕሮዳክሽን-ደረጃ ሶፍትዌሮች መካከል ያለውን ክፍተት ለመድፈን ነው። አብዛኛውን ጊዜ ንግዶች በዘገየ የድሮ ቴክኖሎጂ አቅራቢዎች ወይም ወጥነት በሌላቸው ተቋራጮች መካከል እንዲመርጡ ይገደዳሉ።',
    aboutP2: 'ጥልቅ የሶፍትዌር አርክቴክቸርን፣ የንግድ አመራርን እና የተግባር ቅንጅትን ባጣመረው የመስራች ቡድናችን፣ በከፍተኛ ትኩረት እንሰራለን። ፈጣን አፈፃፀም፣ አስተማማኝ ደህንነት እና ማራኪ የተጠቃሚ ልምድ ያላቸውን ሲስተሞች ለመገንባት ዘመናዊ መሳሪያዎችን—Next.js፣ React Native፣ TypeScript፣ PostgreSQL እና ሰርቨር-አልባ የደመና አርክቴክቸርን—እንጠቀማለን።',
    aboutOathTitle: 'የምህንድስና ቃላችን',
    aboutOathSub: 'የመሰረት መርሆዎች',
    aboutOathQuote: '“እያንዳንዱን ፕሮጀክት እኛ እራሳችን እንደምንጠቀምበት አድርገን በከፍተኛ ጥንቃቄ እንገነባለን። ንጹህ ኮድ እንጽፋለን፣ እያንዳንዱን ኤፒአይ እንመዘግባለን፣ በጥብቅ እንፈትሻለን፣ እና ለረጅም ጊዜ የሚዘልቁ መፍትሄዎችን እንፈጥራለን።”',
    aboutOathRole: 'መስራች አመራር',

    // Services
    servicesBadge: 'ዋና አገልግሎቶቻችን',
    servicesTitle: 'ሊሰፉ የሚችሉ ዘመናዊ',
    servicesHighlight: 'የዲጂታል አቅሞች።',
    servicesSubtitle: 'ከፈጣን የድር መድረኮች እና ከሞባይል መተግበሪያዎች እስከ ደመና ኤፒአይዎች እና አውቶሜሽን ድረስ ሙሉውን የዲጂታል ዑደት እንሸፍናለን።',
    servicesScopeTitle: 'ቴክኒካዊ ወሰን እና አቅሞች',
    servicesDeliverablesTitle: 'የመድረክ ውጤቶች',
    servicesInquirePrefix: 'ስለ አገልግሎቱ ይጠይቁ፦',
    servicesViewArchitecture: 'አርክቴክቸርና ዝርዝር ይመልከቱ',

    // Industries
    industriesBadge: 'የዘርፍ መፍትሔዎች',
    industriesTitle: 'ለተለያዩ ዘርፎች የተበጁ',
    industriesHighlight: 'ዘመናዊ አርክቴክቸሮች።',
    industriesSubtitle: 'ለእያንዳንዱ የንግድ ዘርፍ ተስማሚ የሆኑ፣ ከፍተኛ አፈፃፀም ያላቸው እና ህጋዊ መስፈርቶችን የሚያሟሉ ሶፍትዌሮችን እናዘጋጃለን።',
    industriesCapabilitiesTitle: 'ልዩ የዘርፍ አቅሞች',
    industriesDeliverablesTitle: 'የፕሮዳክሽን ውጤቶች',
    industriesReferencePrefix: 'የተግባራዊ አርክቴክቸር ማጣቀሻ፡',

    // Interactive System
    systemBadge: 'የስርዓት አርክቴክቸር',
    systemTitle: 'ለከፍተኛ አፈፃፀምና ላልተቋረጠ',
    systemHighlight: 'አገልግሎት የተገነባ።',
    systemSubtitle: 'ባለብዙ-ደረጃ የማይክሮሰርቪስ እና የጫፍ መረብ አርክቴክቸራችን የመረጃ ጥራትን፣ እጅግ ፈጣን ምላሽን እና ገደብ የለሽ እድገትን እንዴት እንደሚያረጋግጥ ይመልከቱ።',
    systemKeyMetrics: 'ዋና ዋና የአርክቴክቸር መለኪያዎች',
    systemSourceSnippet: 'የፕሮዳክሽን ኮድ ምሳሌ',

    // Process
    processBadge: 'የምህንድስና ዑደት',
    processTitle: 'ከመጀመሪያው ፅንሰ-ሃሳብ',
    processHighlight: 'እስከ ምርት ዝርጋታ።',
    processSubtitle: 'የ 6-ደረጃ የልማት ማዕቀፋችን ጥብቅ የምህንድስና ጥራትን፣ ግልጽ ደረጃዎችን እና ከስህተት የጸዳ ውጤትን ያረጋግጣል።',
    processDeliverablesTitle: 'ዋና ዋና ውጤቶች፡',

    // Projects
    projectsBadge: 'የተሰሩ ስራዎች',
    projectsTitle: 'በተግባር የተገነቡና',
    projectsHighlight: 'ለአገልግሎት የበቁ ፕሮጀክቶች።',
    projectsSubtitle: 'በዘመናዊ የቴክኖሎጂ ቁልል የተገነቡ ከፍተኛ ተፅዕኖ ፈጣሪ የድር መተግበሪያዎችን፣ የድርጅት መድረኮችን እና የሞባይል ምርቶችን ይመልከቱ።',
    projectsAll: 'ሁሉም',
    projectsFullStack: 'ሙሉ-መድረክ',
    projectsEcommerce: 'ኢ-ኮሜርስ',
    projectsEnterprise: 'ኢንተርፕራይዝ',
    projectsMobile: 'ሞባይልና ፒደብሊውኤ',
    projectsLivePreview: 'የቀጥታ እይታ',
    projectsInspectArchitecture: 'አርክቴክቸር መርምር',
    projectsTabArchitecture: 'አርክቴክቸር እና የጉዳይ ጥናት',
    projectsTabSimulator: 'የመሳሪያዎች ሲሙሌተር (ኮምፒውተርና ስልክ)',
    projectsChallenge: 'ፈተናው',
    projectsSolution: 'የምህንድስና መፍትሔው',
    projectsOutcome: 'የተገኘው ውጤት',
    projectsKeyDeliverables: 'የቀረቡ ውጤቶች',

    // Technologies
    techBadge: 'የቴክኖሎጂ ምርጫዎቻችን',
    techTitle: 'ለፍጥነት እና ለአስተማማኝነት',
    techHighlight: 'የተመረጡ ዘመናዊ መሣሪያዎች።',
    techSubtitle: 'የስርዓት መቆራረጥን የሚያስቀሩ፣ ለኢንጂነሪንግ እጅግ አመቺ የሆኑ እና ያለ ገደብ የሚሰፉ የተፈተኑ ዘመናዊ ቴክኖሎጂዎችን እንጠቀማለን።',

    // Team
    teamBadge: 'መስራች ቡድን',
    teamTitle: 'የጋራ',
    teamHighlight: 'የምህንድስና ጥምረት።',
    teamSubtitle: 'በተሰራጩ የድር መድረኮች፣ በሞባይል ምህንድስና እና በደመና ስርዓቶች ላይ ጥልቅ እውቀት ያላቸው የቴክኖሎጂ ባለሙያዎች ጥምረት።',
    teamBusinessLeadBanner: 'ስራ አስፈፃሚ የንግድና አጋርነት መሪ',
    teamDirectContact: 'የቀጥታ አድራሻዎች',

    // FAQ
    faqBadge: 'ተደጋጋሚ ጥያቄዎች',
    faqTitle: 'ስለ አሰራራችንና አጋርነታችን',
    faqHighlight: 'ግልጽ ማብራሪያዎች።',
    faqSubtitle: 'ከደንበኞቻችን ጋር ስለምንሰራበት መንገድ እና ዲጂታል ሲስተሞችን ስለምናስረክብበት ሁኔታ የተዘጋጁ ግልጽ መመሪያዎች።',

    // Contact
    contactBadge: 'አጋርነት እንጀምር',
    contactTitle: 'አብረን ድንቅ ነገር',
    contactHighlight: 'እንገንባ።',
    contactSubtitle: 'አዲስ ዲጂታል ምርት ለመጀመር፣ ነባር ስርዓቶችን ለማዘመን ወይም ከፍተኛ ጭነት የሚቋቋም መሠረተ-ልማት ለመገንባት ቡድናችን ዝግጁ ነው።',
    contactFormTitle: 'የፕሮጀክት ጥያቄ እና የቴክኒክ ውይይት',
    contactFormSub: 'ከአመራር ቡድናችን ጋር የቴክኒክ የምክክር ጥሪ ለማድረግ ይህንን ቅጽ ይሙሉ።',
    contactFullName: 'ሙሉ ስምዎ',
    contactFullNamePlaceholder: 'ለምሳሌ፡ ዳዊት ታደሰ',
    contactWorkEmail: 'የስራ ኢሜይል አድራሻ',
    contactWorkEmailPlaceholder: 'dawit@company.com',
    contactSubject: 'የሚያስፈልገው አገልግሎት ወይም የፕሮጀክት ስፋት',
    contactSubjectPlaceholder: 'ለምሳሌ፡ ከፍተኛ ጭነት የሚሸከም የኢ-ኮሜርስ መድረክና የሞባይል አፕ',
    contactMessage: 'የፕሮጀክቱ ዝርዝር መግለጫና መስፈርቶች',
    contactMessagePlaceholder: 'ስለ ምርትዎ ግቦች፣ የጊዜ ሰሌዳ እና ማናቸውም ልዩ የቴክኒክ መስፈርቶች ያብራሩልን...',
    contactSubmitBtn: 'ጥያቄውን ይላኩ',
    contactSubmitting: 'እየላከ ነው...',
    contactSuccessAlert: 'ጥያቄዎ በተሳካ ሁኔታ ደርሶናል! የመስራች ቡድናችን መስፈርቶችዎን ገምግሞ በ24 ሰዓት ውስጥ ምላሽ ይሰጥዎታል።',
    contactErrorAlert: 'ጥያቄውን በመላክ ላይ ሳለ ስህተት ተከስቷል። እባክዎን በቀጥታ በቴሌግራም ወይም በስልክ ያግኙን።',
    contactDirectDesk: 'የቀጥታ ስራ አስፈፃሚዎች እና አጋርነት ቢሮ',
    contactDirectDeskSub: 'አስቸኳይ፣ ስትራቴጂካዊ ወይም የድርጅት ጥያቄዎች ካሉዎት የመስራች አመራሮቻችንን በቀጥታ ያግኙ።',
    contactAvailability: 'ሰኞ - ቅዳሜ፡ ከጠዋቱ 2:30 - ማታ 1:30 (የኢትዮጵያ ሰዓት / UTC+3)',

    // Footer
    footerDesc: 'ማርቭል ቴክኖሎጂስ በጋራ መሀንዲሶችና ዲዛይነሮች የተመሰረተ የሶፍትዌር ምህንድስና እና ቴክኖሎጂ ኩባንያ ነው። ከፍተኛ አፈፃፀም ያላቸው የድር መድረኮችን፣ ሊሰፉ የሚችሉ የሞባይል መተግበሪያዎችን፣ የደመና መሰረተ-ልማቶችን እና አውቶሜትድ የንግድ ስርዓቶችን እንገነባለን።',
    footerQuickLinksTitle: 'ፈጣን ማውጫ',
    footerServicesTitle: 'ዋና ዋና አቅሞች',
    footerConnectTitle: 'ስራ አስፈፃሚ ቢሮ',
    footerStatus: 'ሁሉም ሲስተሞች በመደበኛነት እየሰሩ ነው · አዳዲስ ፕሮጀክቶችን እየተቀበልን ነው',
    footerCopyright: 'ማርቭል ቴክኖሎጂስ ኃ.የተ.የግ.ማ. መብቱ በህግ የተጠበቀ ነው። ለከፍተኛ አስተማማኝነት የታነፀ።',

    // Device Preview
    deviceDesktop: 'ኮምፒውተር (1440px)',
    deviceMobile: 'ሞባይል (390px)',
    deviceFitWindow: 'ሙሉ እይታ',
    deviceFullScroll: 'ማንሸራተቻ እይታ',
    deviceScreenshot: 'ፎቶ እይታ',
    deviceLiveInteractive: 'የቀጥታ መስተጋብር',
    deviceLiveSite: 'የቀጥታ ድረ-ገጽ',
    deviceCopied: 'ተገልብጧል',
    deviceCopyUrl: 'አድራሻውን ቅዳ',
    deviceReload: 'እንደገና ጫን',

    // Speed Dial & Floating Buttons
    speedDialTelegram: 'በቴሌግራም ያውሩ',
    speedDialWhatsApp: 'በዋትስአፕ ያውሩ',
    speedDialConsultation: 'የቴክኒክ ምክክር ይጠይቁ',

    // Command Palette
    cmdPlaceholder: 'ትዕዛዝ ወይም ገጽ ይፈልጉ...',
    cmdGroupNav: 'ማውጫ እና ክፍሎች',
    cmdGroupProjects: 'የተሰሩ ፕሮጀክቶች',
    cmdGroupActions: 'የቀጥታ ግንኙነቶች',
    cmdSwitchLang: 'ቋንቋ ቀይር',
    cmdCurrentLangEn: 'አሁን በእንግሊዝኛ እየታየ ነው (English)',
    cmdCurrentLangAm: 'አሁን በአማርኛ እየታየ ነው (አማርኛ)',
    cmdNoResults: 'ምንም ተዛማጅ ትዕዛዝ ወይም ፕሮጀክት አልተገኘም።',
  },
};

// Localized Navigation
export function getNavItems(lang: Language): NavItem[] {
  const t = uiTranslations[lang];
  return [
    { label: t.navAbout, href: '#about' },
    { label: t.navServices, href: '#services' },
    { label: t.navEcosystem, href: '#ecosystem' },
    { label: t.navSolutions, href: '#industries' },
    { label: t.navProcess, href: '#process' },
    { label: t.navProjects, href: '#projects' },
    { label: t.navTech, href: '#tech' },
    { label: t.navTeam, href: '#team' },
    { label: t.navFaq, href: '#faq' },
    { label: t.navGetStarted, href: '#contact', isAction: true },
  ];
}

export function getFooterQuickLinks(lang: Language) {
  if (lang === 'am') {
    return [
      { label: 'መነሻ', href: '#hero' },
      { label: 'ስለ እኛ', href: '#about' },
      { label: 'ዋና አገልግሎቶች', href: '#services' },
      { label: 'አርክቴክቸርና ሂደት', href: '#process' },
      { label: 'የተሰሩ ፕሮጀክቶች', href: '#projects' },
      { label: 'የምህንድስና ቡድን', href: '#team' },
      { label: 'አግኙንና ጥያቄ ያቅርቡ', href: '#contact' },
    ];
  }
  return [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Core Services', href: '#services' },
    { label: 'Architecture & Process', href: '#process' },
    { label: 'Project Portfolio', href: '#projects' },
    { label: 'Engineering Team', href: '#team' },
    { label: 'Contact & Inquiry', href: '#contact' },
  ];
}

export function getLegalLinks(lang: Language) {
  if (lang === 'am') {
    return [
      { label: 'የግላዊነት ፖሊሲ', href: '#' },
      { label: 'የአገልግሎት ውሎች', href: '#' },
      { label: 'ደህንነትና ተገዢነት', href: '#' },
    ];
  }
  return [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security & Compliance', href: '#' },
  ];
}

// Localized Services Data
export function getServicesData(lang: Language): ServiceItem[] {
  if (lang === 'am') {
    return [
      {
        id: 'web-development',
        title: 'ዘመናዊ የድር ምህንድስና',
        shortDescription:
          'ለከፍተኛ ፍጥነት፣ ለፍለጋ ሞተር (SEO) ቀዳሚነት እና አስተማማኝነት የተገነቡ ፈጣን የNext.js እና React ድር መተግበሪያዎች።',
        fullDescription:
          'ዘመናዊውን React 19፣ Next.js App Router፣ TypeScript እና ሰርቨር-አልባ አርክቴክቸር በመጠቀም ሙሉ-መድረክ የድር መተግበሪያዎችን እንገነባለን። ከSaaS ዳሽቦርዶች እስከ ሰፊ የደንበኞች ፖርታሎች ድረስ እያንዳንዱ ምርት በሰከንድ የማይሞላ ፈጣን ምላሽ፣ ጠንካራ ደህንነት እና ተስማሚ አቀራረብ ይኖረዋል።',
        iconName: 'Globe',
        badge: 'ዋና የብቃት መስክ',
        capabilities: [
          'የNext.js 15+ እና React 19 ሙሉ-መድረክ አርክቴክቸር',
          'ሰርቨር-ሳይድ ሬንደሪንግ (SSR) እና ተለዋዋጭ የገጽ አመንጪ',
          'የHeadless CMS እና የኢ-ኮሜርስ ውህደት',
          'ከፍተኛ የCore Web Vitals አፈፃፀም ማሻሻያ',
          'ዘመናዊ የስቴት አስተዳደር እና የቀጥታ WebSockets',
        ],
        deliverables: [
          'ለፕሮዳክሽን ዝግጁ የሆነ የNext.js መተግበሪያ ኮድ',
          'ተስማሚ የሞባይልና የታብሌት ስክሪን እይታዎች',
          'አውቶሜትድ የCI/CD ዝርጋታ መስመሮች',
          'የLighthouse 95+ የጥራት ኦዲት ሪፖርት',
        ],
      },
      {
        id: 'mobile-development',
        title: 'የሞባይል አፕሊኬሽን ምህንድስና',
        shortDescription:
          'በReact Native እና ዘመናዊ መሣሪያዎች የተገነቡ ለሁለቱም iOS እና Android ተስማሚ የሆኑ ፈጣን መተግበሪያዎች።',
        fullDescription:
          'በአንድሮይድ እና በአይኦኤስ ስልኮች ላይ እጅግ ፈጣን እና ማራኪ የተጠቃሚ ልምድ የሚሰጡ የሞባይል መተግበሪያዎችን እንገነባለን። React Nativeን በመጠቀም ለስላሳ 60fps አኒሜሽኖች፣ ያለ ኢንተርኔት የሚሰሩ የማከማቻ ዘዴዎች፣ የባዮሜትሪክ ደህንነት እና የፑሽ ኖቲፊኬሽን መሰረተ-ልማቶችን እናቀርባለን።',
        iconName: 'Smartphone',
        badge: 'ሁለገብ መድረክ',
        capabilities: [
          'የReact Native እና Expo ሥነ-ምህዳር',
          'ያለ ኢንተርኔት የሚሰራ የመረጃ ማከማቻና ማመሳሰያ',
          'የባዮሜትሪክ ደህንነትና የተጠበቁ ቁልፎች',
          'የፑሽ ኖቲፊኬሽን እና የትንተና መስመሮች',
          'የስልክ ክፍሎች ውህደት (ካሜራ፣ ጂፒኤስ፣ ብሉቱዝ)',
        ],
        deliverables: [
          'የተዘጋጁ የiOS እና Android መተግበሪያ ጥቅሎች',
          'የApp Store እና Google Play ዝርጋታ ቅንብር',
          'ያለ ማውረድ የሚዘምኑ የOTA አርክቴክቸሮች',
          'የሞባይል ዩአይ ክፍሎች ቤተ-መጽሐፍት',
        ],
      },
      {
        id: 'ui-ux-design',
        title: 'የዩአይ/ዩኤክስ እና ፕሮዳክት ዲዛይን ሲስተምስ',
        shortDescription:
          'ዓለም አቀፍ የቴክኖሎጂ ደረጃዎችን ያሟሉ ልዩ የዲጂታል ዲዛይን ሲስተሞች፣ የተጠቃሚ ፍሰቶች እና ከፍተኛ ጥራት ያላቸው መስተጋብራዊ ገጾች።',
        fullDescription:
          'ጥሩ ምህንድስና የሚጀምረው ግልጽ ከሆነ ዲዛይን ነው። እንደ Apple፣ Linear እና Vercel ካሉ የኢንዱስትሪ መሪዎች በተቀዱ መርሆዎች የተሰሩ ዲዛይን ሲስተሞችን እናዘጋጃለን። የተጠቃሚዎችን ፍላጎት በጥልቀት እናጠናለን፣ ለሁሉም ተደራሽ የሆኑ ገጾችን እንሰራለን እና በሁሉም ቦታ ወጥነት ያላቸውን ክፍሎች እናስረክባለን።',
        iconName: 'Palette',
        badge: 'ትክክለኛ ዲዛይን',
        capabilities: [
          'የFigma ዲዛይን ሲስተሞች እና አቶሚክ ክፍሎች',
          'መስተጋብራዊ ማይክሮ-አኒሜሽኖች እና የእንቅስቃሴ ጥናቶች',
          'የተደራሽነት ደረጃዎች (WCAG 2.1 AA ተገዢነት)',
          'የተጠቃሚ ጉዞ ካርታ እና የመረጃ መዋቅር',
          'የዲዛይን ቶከኖች በቀጥታ ወደ ኮድ ማመሳሰል',
        ],
        deliverables: [
          'የተሟላ የFigma ክፍሎች እና ፓተርን ቤተ-መጽሐፍት',
          'ተግባራዊ የፕሮቶታይፕ ማሳያዎች',
          'የዲዛይን ቶከኖች (ቀለሞች፣ ፊደላት፣ ክፍተቶች)',
          'የተጠቃሚነት እና የተደራሽነት መመሪያዎች',
        ],
      },
      {
        id: 'custom-software',
        title: 'ብጁ ሶፍትዌር እና የኢአርፒ (ERP) መፍትሔዎች',
        shortDescription:
          'ለድርጅትዎ የስራ ፍሰት ተብለው የተዘጋጁ የውስጥ መቆጣጠሪያ መሳሪያዎች፣ የሀብት እቅድ ስርዓቶች እና የስራ አመራር ዳሽቦርዶች።',
        fullDescription:
          'የተለመዱ አጠቃላይ ሶፍትዌሮች የንግድ ስራዎን ሊያስተጓጉሉ ይችላሉ። የእርስዎን ትክክለኛ የስራ ሂደት የሚያንፀባርቁ ብጁ የኢአርፒ (ERP) መድረኮችን፣ የእቃ ክምችት ቁጥጥር ሞጁሎችን፣ አውቶሜትድ የክፍያ መጠየቂያዎችን እና ብጁ የCRM ስርዓቶችን እንገነባለን።',
        iconName: 'Cpu',
        capabilities: [
          'ባለብዙ-ሚና የተጠቃሚ ፈቃድ ቁጥጥር (RBAC) እና ኦዲት',
          'የእቃ ክምችት፣ ትዕዛዝ እና አቅርቦት ሰንሰለት ቁጥጥር',
          'የቀጥታ ስታትስቲክስ እና የፋይናንስ ትንተና',
          'ብጁ የስራ ፍሰት አውቶሜሽን ኢንጂኖች',
          'የሰነድ ማመንጫ እና የክፍያ መጠየቂያ ስርዓቶች',
        ],
        deliverables: [
          'ሞጁላር የንግድ ዳሽቦርድ ስርዓት',
          'የመረጃ ቋት አርክቴክቸር እና የፍልሰት ስክሪፕቶች',
          'አውቶሜትድ ሪፖርት ማውጫ እና ኤክስፖርት ገጾች',
          'ሚና-ተኮር የፈቃድ ማትሪክስ',
        ],
      },
      {
        id: 'api-cloud',
        title: 'የኤፒአይ ምህንድስና እና የደመና አርክቴክቸር',
        shortDescription:
          'አስተማማኝ የጀርባ አገልጋዮች፣ ማይክሮሰርቪስ፣ REST እና GraphQL የመጨረሻ ነጥቦች፣ እና ሊሰፉ የሚችሉ የደመና መሰረተ-ልማቶች።',
        fullDescription:
          'ደህንነታቸው የተጠበቀ እና በስፋት የሚሰፉ የጀርባ መሰረቶችን እንገነባለን። Node.js፣ Express፣ PostgreSQL፣ Prisma፣ Docker እና ዘመናዊ የደመና መሣሪያዎችን በመጠቀም የመረጃ ቋትዎ እና ኤፒአይዎችዎ በከፍተኛ የደንበኞች ጭነት ጊዜም ቢሆን ፈጣን ምላሽ እንዲሰጡ እናደርጋለን።',
        iconName: 'Server',
        badge: 'ስፋትና ጥንካሬ',
        capabilities: [
          'የRESTful እና GraphQL ኤፒአይ ዝርዝሮች',
          'የPostgreSQL፣ MySQL እና Redis ፈጣን ማከማቻ',
          'የመረጃ ቋት ማስተካከል፣ ማውጫ እና Prisma ORM',
          'የDocker ኮንቴይነራይዜሽን እና ሰርቨር-አልባ ዝርጋታ',
          'ያለ አገልግሎት መቋረጥ የሚደረጉ የውሂብ ፍልሰቶች',
        ],
        deliverables: [
          'የተመዘገቡ የኤፒአይ ዝርዝሮች (Swagger / OpenAPI)',
          'ከአውቶሜትድ ፍልሰቶች ጋር የተዘጋጀ የመረጃ ቋት',
          'የኮንቴይነር አካባቢ ቅንብሮች (Docker)',
          'የደህንነት ማጠናከሪያ እና የፍጥነት ገደብ ህጎች',
        ],
      },
      {
        id: 'automation-transformation',
        title: 'የስራ ፍሰት አውቶሜሽን እና የስርዓቶች ውህደት',
        shortDescription:
          'ተደጋጋሚ አሰልቺ ስራዎችን በማስቀረት፣ የተለያዩ መድረኮችን በማገናኘት እና በብጁ ውህደቶች የንግድ ሂደቶችን በራስ-ሰር ማከናወን።',
        fullDescription:
          'በውጫዊ መሳሪያዎችዎ፣ በክፍያ መተላለፊያዎች (ቴሌብር፣ ቻፓ፣ ስትራይፕ)፣ በመልእክት አገልግሎቶች (ቴሌግራም፣ ኤስኤምኤስ፣ ዋትስአፕ) እና በውስጥ የመረጃ ቋቶችዎ መካከል አስተዋይ ግንኙነት እንፈጥራለን። የአውቶሜሽን ስርዓቶቻችን የሰዎችን ስህተት ይቀንሳሉ፤ የስራ ፍጥነትን ያፋጥናሉ።',
        iconName: 'Zap',
        capabilities: [
          'የክፍያ መተላለፊያ ውህደት (ቴሌብር፣ ቻፓ፣ ስትራይፕ)',
          'አውቶሜትድ የማሳወቂያ ቦቶች (ቴሌግራም፣ ኢሜይል፣ ዌብሁክ)',
          'የታቀዱ የጀርባ ስራዎች እና የመልእክት ሰልፎች',
          'የውጭ CRM፣ የሂሳብ እና የPOS ማገናኛዎች',
          'የውሂብ ማውጣት፣ መለወጥ እና ማስተላለፍ (ETL) ቧንቧዎች',
        ],
        deliverables: [
          'የዌብሁክ ተቆጣጣሪዎች እና አስተማማኝ ሰልፎች',
          'የውህደት ክትትል እና የስህተት መከላከያዎች',
          'የክፍያ ማረጋገጫ ዌብሁኮች',
          'አውቶሜትድ የስራ ሂደቶች መመሪያ',
        ],
      },
    ];
  }

  // Fallback to English
  return [
    {
      id: 'web-development',
      title: 'Modern Web Engineering',
      shortDescription:
        'High-performance Next.js and React web applications engineered for lightning speed, SEO dominance, and uncompromising reliability.',
      fullDescription:
        'We build full-stack web applications using cutting-edge React 19, Next.js App Router, TypeScript, and serverless architectures. From multi-tenant SaaS dashboards to dynamic consumer portals, every product is engineered with sub-second response times, rock-solid security, and responsive layouts.',
      iconName: 'Globe',
      badge: 'Core Competency',
      capabilities: [
        'Next.js 15+ & React 19 Full-Stack Architecture',
        'Server-Side Rendering (SSR) & Dynamic Static Generation',
        'Headless CMS & Commerce Integration',
        'High-Performance Core Web Vitals Optimization',
        'Modern State Management & Real-time WebSockets',
      ],
      deliverables: [
        'Production-Ready Next.js Application Source Code',
        'Responsive Mobile & Tablet Viewports',
        'Automated CI/CD Deployment Pipelines',
        'Comprehensive Lighthouse 95+ Audit Report',
      ],
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Engineering',
      shortDescription:
        'Native-feel cross-platform iOS and Android applications developed with React Native and modern mobile toolchains.',
      fullDescription:
        'We engineer fluid mobile applications that provide intuitive user experiences on both Android and iOS devices. Using React Native and modular native bridges, our apps deliver smooth 60fps animations, offline-first data synchronization, biometric authentication, and push notification infrastructures.',
      iconName: 'Smartphone',
      badge: 'Cross-Platform',
      capabilities: [
        'React Native & Expo Ecosystem',
        'Offline-First Local Storage & Sync Engine',
        'Biometric Security & Secure Enclave Keys',
        'Push Notification Pipelines & Analytics',
        'Native Hardware Integrations (Camera, GPS, Bluetooth)',
      ],
      deliverables: [
        'Production iOS & Android Application Bundles',
        'App Store & Google Play Deployment Setup',
        'OTA (Over-The-Air) Update Architecture',
        'Mobile UI Component Library',
      ],
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX & Product Design Systems',
      shortDescription:
        'Bespoke digital design systems, user flows, wireframes, and high-fidelity interactive interfaces aligned with international tech standards.',
      fullDescription:
        'Great engineering requires intuitive design. We craft design systems inspired by industry leaders like Apple, Linear, and Vercel. We conduct thorough user journey mapping, design accessible interfaces, and deliver reusable component libraries that ensure visual consistency across all touchpoints.',
      iconName: 'Palette',
      badge: 'Precision Design',
      capabilities: [
        'Figma Design Systems & Atomic Components',
        'Interactive Micro-interactions & Motion Studies',
        'Accessibility Standards (WCAG 2.1 AA Compliance)',
        'User Journey Mapping & Information Architecture',
        'Design Token Synchronizations into Code',
      ],
      deliverables: [
        'Complete Figma Component & Pattern Library',
        'Interactive Prototyping Assets',
        'Design Tokens (Colors, Typography, Spacing)',
        'Usability & Accessibility Guidelines',
      ],
    },
    {
      id: 'custom-software',
      title: 'Custom Software & ERP Solutions',
      shortDescription:
        'Tailored internal tools, resource planning systems, and operations management dashboards designed specifically for your business workflow.',
      fullDescription:
        'Off-the-shelf software often creates bottlenecks. We develop bespoke enterprise resource planning (ERP) platforms, inventory control modules, automated invoicing workflows, and custom CRM systems that reflect exactly how your operations function.',
      iconName: 'Cpu',
      capabilities: [
        'Multi-Role Access Control (RBAC) & Audit Logs',
        'Inventory, Order & Supply Chain Management Modules',
        'Real-Time Telemetry & Financial Analytics',
        'Custom Workflow Automation Engines',
        'Document Generation & Invoicing Systems',
      ],
      deliverables: [
        'Modular Business Dashboard System',
        'Database Architecture & Seed Migrations',
        'Automated Reporting & Export Features',
        'Role-based Permission Matrix',
      ],
    },
    {
      id: 'api-cloud',
      title: 'API Engineering & Cloud Architecture',
      shortDescription:
        'Resilient backend services, microservices, REST & GraphQL endpoints, and scalable cloud infrastructure deployment.',
      fullDescription:
        'We architect secure, horizontally scalable backend foundations. Using Node.js, Express, PostgreSQL, Prisma, Docker, and modern cloud primitives, we ensure your databases and APIs deliver consistent millisecond latencies even during high peak demand.',
      iconName: 'Server',
      badge: 'Scalability',
      capabilities: [
        'RESTful & GraphQL API Specifications',
        'PostgreSQL, MySQL & Redis Caching Layer',
        'Database Normalization, Indexing & Prisma ORM',
        'Docker Containerization & Serverless Deployment',
        'Zero-Downtime Migration Strategies',
      ],
      deliverables: [
        'Documented API Endpoints (Swagger / OpenAPI)',
        'Database Schema with Automated Migrations',
        'Containerized Environment Configs (Docker)',
        'Security Hardening & Rate Limiting Rules',
      ],
    },
    {
      id: 'automation-transformation',
      title: 'Workflow Automation & System Integration',
      shortDescription:
        'Eliminate repetitive manual tasks, connect fragmented platforms, and automate business processes with custom integrations.',
      fullDescription:
        'We build intelligent connective tissue between your third-party tools, payment gateways, messaging services (Telegram, SMS, WhatsApp), and internal databases. Our automation pipelines reduce human error and accelerate operational throughput.',
      iconName: 'Zap',
      capabilities: [
        'Payment Gateway Integration (Telebirr, Chapa, Stripe)',
        'Automated Notification Bots (Telegram, Email, Webhooks)',
        'Scheduled Background Jobs & Event-driven Queues',
        'Third-Party CRM, Accounting & POS Connectors',
        'Data Extraction, Transformation & ETL Pipelines',
      ],
      deliverables: [
        'Webhook Handlers & Reliability Queues',
        'Integration Monitoring & Error Fallbacks',
        'Payment Verification Webhooks',
        'Automated Operations Documentation',
      ],
    },
  ];
}

// Localized Process Stages
export function getProcessStages(lang: Language): ProcessStage[] {
  if (lang === 'am') {
    return [
      {
        step: '01',
        title: 'ግኝትና ጥናት',
        summary: 'የስራ መስክዎን በጥልቀት እንመረምራለን፣ የንግድ መስፈርቶችን እናጠናለን፣ የተጠቃሚዎችን ችግር እንለያለን እንዲሁም የፕሮጀክቱን ወሰን እንወስናለን።',
        deliverables: ['የግኝት ሰነድ', 'የስራ መስፈርት ዝርዝር', 'የቴክኒክ አዋጭነት ሪፖርት'],
        icon: 'Search',
      },
      {
        step: '02',
        title: 'ስትራቴጂና አርክቴክቸር',
        summary: 'የስርዓቱን አጠቃላይ አርክቴክቸር እንነድፋለን፣ የመረጃ ቋት ሞዴሎችን እንመርጣለን፣ የኤፒአይ ህጎችን እናዘጋጃለን እንዲሁም የደህንነት ወሰኖችን እናሰምራለን።',
        deliverables: ['የስርዓት አርክቴክቸር ዲያግራም', 'የመረጃ ቋት ERD', 'የኤፒአይ ውል ዝርዝር'],
        icon: 'Cpu',
      },
      {
        step: '03',
        title: 'ዲዛይንና ፕሮቶታይፕ',
        summary: 'ጥብቅ የUX ደረጃዎችን ያሟሉ ግልጽ የሽቦ ንድፎችን፣ መስተጋብራዊ የሙከራ ገጾችን እና አቶሚክ የዲዛይን ስርዓቶችን እንፈጥራለን።',
        deliverables: ['የFigma ዲዛይን ሲስተም', 'ተግባራዊ ፕሮቶታይፕ', 'የክፍሎች ስታይል መመሪያ'],
        icon: 'Palette',
      },
      {
        step: '04',
        title: 'ምህንድስናና ውህደት',
        summary: 'በፊት ለፊትና በጀርባ አገልጋዮች ላይ ንጹህ፣ ሞጁላር እና ሙሉ በሙሉ በTypeScript የተጠበቀ ኮድ ከተከታታይ ግምገማዎች ጋር እንጽፋለን።',
        deliverables: ['የተጠበቀ ምንጭ ኮድ ማከማቻ', 'አውቶሜትድ የፍተሻ ስብስቦች', 'የሙከራ ደረጃ ዝርጋታዎች'],
        icon: 'Code2',
      },
      {
        step: '05',
        title: 'ሙከራና ምርት ማስረከብ',
        summary: 'ጥልቅ ከዳር እስከ ዳር ፍተሻዎች፣ በሁሉም አሳሾች ላይ ማረጋገጥ፣ የአፈፃፀም ኦዲት እና ያለምንም መቆራረጥ የሚደረግ የቀጥታ ምርት ዝርጋታ።',
        deliverables: ['የLighthouse 95+ ሪፖርት', 'የደህንነት ኦዲት', 'የቀጥታ ፕሮዳክሽን ዝርጋታ'],
        icon: 'Rocket',
      },
      {
        step: '06',
        title: 'ማስፋፋትና ማሻሻል',
        summary: 'የማያቋርጥ የቴሌሜትሪ ክትትል፣ ፈጣን የአፈፃፀም ማሻሻያ፣ አዳዲስ ባህሪያትን መጨመር እና የረጅም ጊዜ ቴክኒካዊ ድጋፍ መስጠት።',
        deliverables: ['የስርዓት ጤና ቴሌሜትሪ', 'ወርሃዊ የማሻሻያ ሪፖርቶች', 'ተከታታይ አዳዲስ ዝመናዎች'],
        icon: 'TrendingUp',
      },
    ];
  }
  return [
    {
      step: '01',
      title: 'Discover',
      summary: 'We dive deep into your domain, dissect business requirements, identify user pain points, and establish project scope.',
      deliverables: ['Discovery Brief', 'Functional Specification', 'Technical Feasibility Report'],
      icon: 'Search',
    },
    {
      step: '02',
      title: 'Strategize & Architect',
      summary: 'We map out the system architecture, select optimal database schemas, plan API contracts, and define security boundaries.',
      deliverables: ['System Architecture Diagram', 'Database ERD', 'API Specification Contract'],
      icon: 'Cpu',
    },
    {
      step: '03',
      title: 'Design & Prototype',
      summary: 'We craft high-fidelity wireframes, interactive prototypes, and atomic design systems adhering to rigorous UX standards.',
      deliverables: ['Figma Design System', 'Clickable Prototype', 'Component Style Guide'],
      icon: 'Palette',
    },
    {
      step: '04',
      title: 'Engineer & Integrate',
      summary: 'We write clean, modular, fully typed TypeScript code across frontend and backend layers with continuous peer reviews.',
      deliverables: ['Type-safe Source Repository', 'Automated Test Suites', 'Staging Deployments'],
      icon: 'Code2',
    },
    {
      step: '05',
      title: 'Test & Launch',
      summary: 'Rigorous end-to-end testing, cross-browser validation, performance audits, and smooth zero-downtime production deployment.',
      deliverables: ['Lighthouse 95+ Report', 'Security Audit', 'Live Production Release'],
      icon: 'Rocket',
    },
    {
      step: '06',
      title: 'Scale & Improve',
      summary: 'Continuous telemetry monitoring, proactive performance tuning, feature iteration, and long-term technical support.',
      deliverables: ['System Health Telemetry', 'Monthly Optimization Reports', 'Iterative Feature Releases'],
      icon: 'TrendingUp',
    },
  ];
}

// Localized Team Data
export function getTeamData(lang: Language): TeamMember[] {
  if (lang === 'am') {
    return [
      {
        id: 'ezedin-mohammed',
        name: 'ኢዘዲን መሀመድ',
        role: 'ተባባሪ መስራች እና ዋና የሶፍትዌር መሀንዲስ',
        location: 'ኢትዮጵያ፣ ኮምቦልቻ',
        bio: 'በኮምቦልቻ፣ ኢትዮጵያ የሚገኝ የሶፍትዌር መሀንዲስ እና የስርዓት አርክቴክት። እንደ WEARIFY፣ ANBESSA፣ Smart Library፣ SwiftBus፣ Ramadanly እና BYD Ethiopia ያሉ ከፍተኛ አፈፃፀም ያላቸው ዲጂታል መድረኮች አርክቴክት። በNext.js 16፣ React 19፣ TypeScript፣ የደመና ዝርጋታዎች እና የተከፋፈሉ ስርዓቶች ላይ ልዩ ሙያ ያለው።',
        expertise: ['የስርዓት አርክቴክቸር', 'Next.js 16', 'React 19', 'TypeScript', 'Prisma እና PostgreSQL', 'ክላውድ DevOps'],
        avatar: '/team/ezedin.jpg',
        socials: {
          telegram: 'https://t.me/ezedinmoh',
          email: 'ezedinmoh1@gmail.com',
          phone: '+251983029638',
          github: 'https://github.com/ezedinmoh',
          linkedin: 'https://www.linkedin.com/in/ezedinmoh',
          instagram: 'https://www.instagram.com/ezedin__moh',
          tiktok: 'https://www.tiktok.com/@ezedinmoh',
          facebook: 'https://www.facebook.com/ezedinmoh',
          twitter: 'https://x.com/ezedinmoh',
          youtube: 'https://www.youtube.com/@ezedin_moh',
          discord: 'https://discord.com/users/ezedinmoh',
        },
        placeholderAvatar: 'EM',
        statusBadge: 'ተባባሪ መስራች እና ቴክኒካል መሪ',
      },
      {
        id: 'mohammed-imam',
        name: 'መሀመድ ኢማም',
        role: 'ተባባሪ መስራች እና የንግድ መሪ',
        bio: 'በማርቭል ቴክኖሎጂስ ስትራቴጂካዊ እድገትን፣ የንግድ ልማትን እና የደንበኛ አጋርነቶችን ይመራል። የቴክኖሎጂ ስኬትን ወደ ገበያ ማምጣት፣ የድርጅት ስፋትን ማሳደግ እና እያንዳንዱ ምህንድስና ተጨባጭ የንግድ ትርፍ እንዲያመጣ ያረጋግጣል።',
        expertise: ['የንግድ ልማት', 'ስትራቴጂካዊ እድገት', 'የደንበኞች አጋርነት', 'ምርት ወደ ገበያ ማምጣት', 'የኢንቨስትመንት ስትራቴጂ'],
        avatar: '/team/mohammed-imam.jpg',
        socials: {
          telegram: 'https://t.me/Mohamediimam',
          phone: '+251941670897',
          email: 'ezedinmoh1@gmail.com',
        },
        placeholderAvatar: 'MI',
        statusBadge: 'ተባባሪ መስራች እና የንግድ መሪ',
      },
      {
        id: 'sudeys-ibrahim',
        name: 'ሱደይስ ኢብራሂም',
        role: 'ተባባሪ መስራች እና የስራ አመራር መሪ',
        bio: 'የምርት አፈፃፀምን፣ የስራ ፍሰቶችን እና የአቅርቦት ቅንጅትን ይቆጣጠራል። እያንዳንዱ የምህንድስና ስራ በጥሩ ፍጥነት፣ ከባለድርሻ አካላት ጋር በተጣጣመ ግንኙነት እና በማያወላውል ጥራት እንዲከናወን ያረጋግጣል።',
        expertise: ['የምርት ኦፕሬሽንስ', 'ቀልጣፋ አቅርቦት', 'የፕሮጀክት ስትራቴጂ', 'የደንበኞች ግንኙነት', 'የስርዓቶች አመራር'],
        socials: {
          telegram: 'https://t.me/Ifshrmr',
          phone: '+251993506625',
          email: 'ezedinmoh1@gmail.com',
        },
        placeholderAvatar: 'SI',
        statusBadge: 'ተባባሪ መስራች እና የኦፕሬሽንስ መሪ',
      },
    ];
  }

  return [
    {
      id: 'ezedin-mohammed',
      name: 'Ezedin Mohammed',
      role: 'Co-Founder & Lead Software Engineer',
      location: 'Ethiopia, Kombolcha',
      bio: 'Software engineer and systems architect based in Kombolcha, Ethiopia. Architect of high-performance digital platforms including WEARIFY, ANBESSA, Smart Library, SwiftBus, Ramadanly, and BYD Ethiopia. Specializing in Next.js 16, React 19, TypeScript, cloud deployments, and distributed systems.',
      expertise: ['System Architecture', 'Next.js 16', 'React 19', 'TypeScript', 'Prisma & PostgreSQL', 'Cloud DevOps'],
      avatar: '/team/ezedin.jpg',
      socials: {
        telegram: 'https://t.me/ezedinmoh',
        email: 'ezedinmoh1@gmail.com',
        phone: '+251983029638',
        github: 'https://github.com/ezedinmoh',
        linkedin: 'https://www.linkedin.com/in/ezedinmoh',
        instagram: 'https://www.instagram.com/ezedin__moh',
        tiktok: 'https://www.tiktok.com/@ezedinmoh',
        facebook: 'https://www.facebook.com/ezedinmoh',
        twitter: 'https://x.com/ezedinmoh',
        youtube: 'https://www.youtube.com/@ezedin_moh',
        discord: 'https://discord.com/users/ezedinmoh',
      },
      placeholderAvatar: 'EM',
      statusBadge: 'Co-Founder & Technical Lead',
    },
    {
      id: 'mohammed-imam',
      name: 'Mohammed Imam',
      role: 'Co-Founder & Business Lead',
      bio: 'Leads strategic growth, business development, and client partnerships at Marvel Technologies. Drives technology commercialization, venture expansion, and ensures every engineering engagement delivers tangible business ROI.',
      expertise: ['Business Development', 'Strategic Growth', 'Client Partnerships', 'Product Commercialization', 'Venture Strategy'],
      avatar: '/team/mohammed-imam.jpg',
      socials: {
        telegram: 'https://t.me/Mohamediimam',
        phone: '+251941670897',
        email: 'ezedinmoh1@gmail.com',
      },
      placeholderAvatar: 'MI',
      statusBadge: 'Co-Founder & Business Lead',
    },
    {
      id: 'sudeys-ibrahim',
      name: 'Sudeys Ibrahim',
      role: 'Co-Founder & Operations Lead',
      bio: 'Oversees product execution, operational workflows, and delivery coordination. Ensures every engineering initiative runs with rigorous velocity, seamless stakeholder alignment, and uncompromising quality.',
      expertise: ['Product Operations', 'Agile Delivery', 'Project Strategy', 'Client Relations', 'Systems Management'],
      socials: {
        telegram: 'https://t.me/Ifshrmr',
        phone: '+251993506625',
        email: 'ezedinmoh1@gmail.com',
      },
      placeholderAvatar: 'SI',
      statusBadge: 'Co-Founder & Operations Lead',
    },
  ];
}

// Localized FAQ Data
export function getFaqData(lang: Language): FaqItem[] {
  if (lang === 'am') {
    return [
      {
        category: 'አጋርነት',
        question: 'ማርቭል ቴክኖሎጂስ አዲስ ፕሮጀክት እንዴት ይጀምራል?',
        answer:
          'የምርት መስፈርቶችዎን፣ የታለመውን ተጠቃሚ እና የቴክኒክ ገደቦችን ለመገምገም በመጀመሪያ የቴክኒክ ውይይት እንጀምራለን። በ 3 እስከ 5 የስራ ቀናት ውስጥ ዝርዝር የስራ ወሰን፣ የደረጃዎች ክፍፍል እና ግልጽ የጊዜ ሰሌዳ እናቀርባለን።',
      },
      {
        category: 'ቴክኖሎጂ',
        question: 'ማርቭል ቴክኖሎጂስ በNext.js እና TypeScript ላይ ለምን ትኩረት ያደርጋል?',
        answer:
          'Next.js እጅግ ፈጣን የሰርቨር አፈፃፀምን፣ ፈጣን የገጽ ሽግግርን እና ለፍለጋ ሞተሮች (SEO) ተመራጭነትን በአንድ ላይ ያቀርባል። TypeScript ደግሞ ከመረጃ ቋት እስከ ተጠቃሚው ስክሪን ድረስ የኮድ ጥራትን በማረጋገጥ በስራ ወቅት የሚፈጠሩ ስህተቶችን በከፍተኛ ሁኔታ ይቀንሳል።',
      },
      {
        category: 'ባለቤትነት',
        question: 'የኮዱና የሶፍትዌሩ አዕምሯዊ ንብረት ባለቤት ማን ነው?',
        answer:
          'እርስዎ ነዎት። እያንዳንዱ ምዕራፍ ተጠናቆ ሲረከብ፣ የ100% አዕምሯዊ ንብረት መብት እና የ Git ማከማቻዎች፣ የይለፍ ቃሎችና የሰነዶች ሙሉ አስተዳዳሪ ባለቤትነት ይሰጥዎታል።',
      },
      {
        category: 'ቡድናችን',
        question: 'በፕሮጀክታችን ላይ በቀጥታ የሚሰራው ማን ነው?',
        answer:
          'የሚሰሩት በቀጥታ ከመስራች አመራር ቡድናችን ጋር ነው። ስራዎን ለማይታወቁ ሶስተኛ ወገኖች አናስተላልፍም፤ ዋና የመስራች እና የምህንድስና ቡድናችን ምርትዎን በቀጥታ ነድፎ ይገነባል።',
      },
      {
        category: 'ከምረቃ በኋላ',
        question: 'ሶፍትዌሩ ስራ ከጀመረ በኋላ ምን አይነት ድጋፍ ይሰጣል?',
        answer:
          'የቀጥታ ስራ ክትትልን፣ የስህተቶች ማስተካከያ ዋስትናን እና የሰርቨር ዝመናዎችን፣ የመረጃ ቋት ማስፋፋትንና አዳዲስ ባህሪያትን ማካተትን የሚያካትት ቀጣይነት ያለው የድጋፍ ስምምነት እናቀርባለን።',
      },
    ];
  }

  return [
    {
      category: 'Engagement',
      question: 'How does Marvel Technologies kick off a new engagement?',
      answer:
        'We start with an initial technical discovery session to evaluate your product requirements, target audience, and architectural constraints. Within 3 to 5 business days, we provide a detailed project scope, milestone breakdown, and transparent timeline.',
    },
    {
      category: 'Technology',
      question: 'Why does Marvel Technologies specialize in Next.js and TypeScript?',
      answer:
        'Next.js offers the optimal combination of server-side performance, instant page navigation, and search engine discoverability. TypeScript guarantees type safety from the database layer to user components, drastically reducing runtime bugs.',
    },
    {
      category: 'Ownership',
      question: 'Who owns the intellectual property and code repository?',
      answer:
        'You do. Upon milestone delivery, you receive 100% intellectual property rights and full administrative ownership of git repositories, deployment keys, and documentation.',
    },
    {
      category: 'Team',
      question: 'Who will be working on our project?',
      answer:
        'You work directly with our founding leadership team. We do not outsource your codebase to unvetted third-party contractors; our core leadership and engineering team architects and develops your product directly.',
    },
    {
      category: 'Post-Launch',
      question: 'What happens after the software goes live?',
      answer:
        'We provide dedicated post-launch monitoring, warranty bug-fixing, and ongoing maintenance agreements to handle server updates, database scaling, and new feature iterations.',
    },
  ];
}

// Localized About Pillars
export function getAboutPillars(lang: Language) {
  if (lang === 'am') {
    return [
      {
        title: 'የጋራ የምህንድስና ጥምረት',
        description:
          'ማርቭል ቴክኖሎጂስ በስርዓት ምህንድስና፣ በሞባይል ልማት፣ በደመና ስራዎች እና በዩአይ/ዩኤክስ ዲዛይን የተካኑ ባለሙያዎችን በማጣመር የተመሰረተ ነው።',
      },
      {
        title: 'ዘመናዊ የምህንድስና ጥራት',
        description:
          'ጊዜያዊ አቋራጮችን እና አላስፈላጊ ኮዶችን እንቃወማለን። እያንዳንዱ የTypeScript መስመር፣ የSQL ሞዴል እና የReact ክፍል በጥብቅ ደህንነት እና ጥራት የተገነባ ነው።',
      },
      {
        title: 'እውነተኛ ችግር ፈቺዎች',
        description:
          'ሶፍትዌር የምንገነባው ለቴክኖሎጂ ብቻ አይደለም። ተደጋጋሚ ድካምን የሚያስቀሩ፣ የስራ ውጥረትን የሚቀንሱ እና ተጨባጭ የንግድ እድገትን የሚያመጡ መፍትሄዎችን እናዘጋጃለን።',
      },
      {
        title: 'አስተማማኝነትና ባለቤትነት',
        description:
          'ከእኛ ጋር ሲሰሩ በቀጥታ ከመስራች መሀንዲሶቻችን ጋር ይገናኛሉ። ምንም መካከለኛ ደላላ የለም፤ ከመጀመሪያው ቀን ጀምሮ የ100% አዕምሯዊ ንብረት ባለቤትነት የእርስዎ ነው።',
      },
    ];
  }
  return [
    {
      title: 'Core Engineering Collective',
      description:
        'Marvel Technologies was founded by collaborative technology professionals combining distinct strengths in systems engineering, mobile development, backend cloud operations, and UI/UX design.',
    },
    {
      title: 'Modern Engineering Discipline',
      description:
        'We reject legacy shortcuts and bloat. Every line of TypeScript, SQL schema, and React component is crafted with strict type safety, modular cohesion, and high maintainability.',
    },
    {
      title: 'Real Problem Solvers',
      description:
        'We do not build software for the sake of technology alone. We architect tools that automate repetitive labor, reduce operational friction, and generate measurable business momentum.',
    },
    {
      title: 'Reliability & Ownership',
      description:
        'When you collaborate with us, you work directly with our engineering founders. No account managers, no hidden offshore handoffs, and 100% intellectual property ownership from day one.',
    },
  ];
}

// Localized Constellation Subsystem Data
export function getSubsystemMeta(lang: Language) {
  if (lang === 'am') {
    return {
      website: {
        name: 'ዌብሳይት',
        windowTitle: 'ማርቭል ኮር · የድረ-ገጽ መድረክ እና CMS',
        adminSubtitle: 'የቀጥታ የጎብኝዎች ፍሰት፣ የጫፍ ሬንደሪንግ እና የSEO አፈፃፀም።',
        description: 'እጅግ ፈጣን አቀራረብ ያላቸው የNext.js ድረ-ገጾች እና የይዘት አስተዳደር መድረኮች።',
      },
      ecommerce: {
        name: 'ኢ-ኮሜርስ',
        windowTitle: 'ማርቭል ኮሜርስ · የሽያጭ እና ግብይት ኢንጂን',
        adminSubtitle: 'የቀጥታ ትዕዛዞች፣ የእቃ ክምችት ማመሳሰል እና ዓለም አቀፍ/አገር ውስጥ ክፍያዎች።',
        description: 'ባለብዙ-መደብር የዲጂታል ግብይት መድረኮች ከቅጽበታዊ የክፍያ ማረጋገጫዎች ጋር።',
      },
      aiSalesAgent: {
        name: 'የAI ሽያጭ ወኪል',
        windowTitle: 'ማርቭል ኢንተለጀንስ · አውቶሜትድ የሽያጭ ረዳት',
        adminSubtitle: 'የደንበኞችን ጥያቄ መመለስ፣ ምርቶችን ማስተዋወቅ እና ሽያጭ መዝጋት።',
        description: 'በቴሌግራም፣ በዌብሳይት እና በዋትስአፕ ላይ 24/7 የሚሰሩ ብልህ የሽያጭ ቦቶች።',
      },
      chatbot: {
        name: 'የውይይት ቦት',
        windowTitle: 'ማርቭል ኮንቨርሴሽን · የደንበኞች ውይይት ቦት',
        adminSubtitle: 'ተፈጥሯዊ ቋንቋ ግንዛቤ (NLP) በሁለቱም እንግሊዝኛ እና አማርኛ።',
        description: 'ሁለት ቋንቋዎችን አቀላጥፈው የሚናገሩ ዘመናዊ የመልእክት ረዳቶች።',
      },
      erp: {
        name: 'ኢአርፒ (ERP)',
        windowTitle: 'ማርቭል ኢአርፒ · የተሟላ የድርጅት ሃብት ማዕከል',
        adminSubtitle: 'የተቀናጀ የንግድ ስርዓት፣ የእቃ ክምችት ቁጥጥር እና የድርጅት ፋይናንስ።',
        description: 'የተማከለ የሀብት አያያዝ፣ የሰራተኞች ቁጥጥር እና የስራ ፍሰት አውቶሜሽን።',
      },
      mobileApp: {
        name: 'የሞባይል አፕ',
        windowTitle: 'ማርቭል ሞባይል · የiOS እና Android መተግበሪያዎች',
        adminSubtitle: 'የስልክ መተግበሪያ አጠቃቀም፣ የመሣሪያዎች ውህደት እና የፑሽ ኖቲፊኬሽኖች።',
        description: 'ያለ መቆራረጥ የሚሰሩ እና ከመስመር ውጭም የሚሰሩ ፈጣን የሞባይል አፖች።',
      },
      automation: {
        name: 'አውቶሜሽን',
        windowTitle: 'ማርቭል አውቶሜሽን · የክስተት እና ተግባር ፍሰት ኢንጂን',
        adminSubtitle: 'ያለ ሰው ጣልቃገብነት የሚሰሩ የጀርባ ስራዎች እና የመረጃ ዝውውር።',
        description: 'የክፍያ ማረጋገጫዎች፣ የሂሳብ መዝገቦች እና ሪፖርቶች አውቶሜሽን።',
      },
      analytics: {
        name: 'የውሂብ ትንተና',
        windowTitle: 'ማርቭል አናሊቲክስ · የቀጥታ ቢዝነስ ኢንተለጀንስ',
        adminSubtitle: 'የገቢ ዕድገት ትንበያ፣ የተጠቃሚዎች ባህሪ እና የኦፕሬሽን ወጪዎች።',
        description: 'ውሳኔዎችን በውሂብ ላይ ተመስርተው እንዲወስኑ የሚያስችሉ የቀጥታ ገበታዎች።',
      },
      customerSupport: {
        name: 'የደንበኞች ድጋፍ',
        windowTitle: 'ማርቭል ኬር · የተጠቃሚዎች ድጋፍ ማዕከል',
        adminSubtitle: 'የቅሬታ ትኬቶች፣ ፈጣን ምላሾች እና የደንበኞች እርካታ ልኬት።',
        description: 'በሁሉም ቻናሎች የሚመጡ ጥያቄዎችን በአንድ ማዕከል የሚያስተዳድር ሲስተም።',
      },
      integrations: {
        name: 'ሲስተም ውህደት',
        windowTitle: 'ማርቭል ሊንክ · የሶፍትዌሮች ማገናኛ ኤፒአይ',
        adminSubtitle: 'የክፍያ መተላለፊያዎች (ቴሌብር፣ ቻፓ፣ ስትራይፕ) እና የባንክ ኤፒአይዎች።',
        description: 'የድርጅትዎን ሶፍትዌር ከማንኛውም ውጫዊ የፋይናንስና የመረጃ መረብ ጋር ያገናኙ።',
      },
    };
  }

  return {
    website: {
      name: 'Website',
      windowTitle: 'Marvel Core · Web Platform & CMS',
      adminSubtitle: 'Live visitor traffic, edge rendering, and SEO performance.',
      description: 'Production Next.js application layer with server-side rendering and edge caching.',
    },
    ecommerce: {
      name: 'Ecommerce',
      windowTitle: 'Marvel Commerce · Transaction Engine',
      adminSubtitle: 'Live checkout conversion, inventory synchronization, and payout pipelines.',
      description: 'Multi-store commerce infrastructure with localized payment gateways and live stock sync.',
    },
    aiSalesAgent: {
      name: 'AI Sales Agent',
      windowTitle: 'Marvel Intelligence · Autonomous Sales Agent',
      adminSubtitle: 'Conversational lead qualification, dynamic pricing, and automated checkouts.',
      description: 'Intelligent multi-channel sales automation across Telegram, Web, and WhatsApp.',
    },
    chatbot: {
      name: 'Chatbot',
      windowTitle: 'Marvel Conversation · Omnichannel Bot',
      adminSubtitle: 'Natural language understanding, intent resolution, and knowledge base retrieval.',
      description: 'Bilingual automated support agent with Amharic & English tokenization.',
    },
    erp: {
      name: 'ERP',
      windowTitle: 'Marvel ERP · Enterprise Resource Center',
      adminSubtitle: 'Unified business system, inventory telemetry, and corporate finances.',
      description: 'Centralized resource management, inventory control, and workforce planning.',
    },
    mobileApp: {
      name: 'Mobile App',
      windowTitle: 'Marvel Mobile · React Native & Expo Engine',
      adminSubtitle: 'Mobile telemetry, offline sync operations, and push notification throughput.',
      description: 'Cross-platform iOS and Android applications with 60fps native performance.',
    },
    automation: {
      name: 'Automation',
      windowTitle: 'Marvel Automate · Event & Job Pipeline',
      adminSubtitle: 'Background queuing, asynchronous ETL pipelines, and third-party webhook relays.',
      description: 'End-to-end event orchestration connecting accounting, CRM, and communication channels.',
    },
    analytics: {
      name: 'Analytics',
      windowTitle: 'Marvel Insights · Real-time Business Intelligence',
      adminSubtitle: 'Revenue forecasting, user retention funnels, and operational unit economics.',
      description: 'Unified executive dashboard with sub-second event streaming and cohort retention.',
    },
    customerSupport: {
      name: 'Customer Support',
      windowTitle: 'Marvel Support · Omnichannel Helpdesk',
      adminSubtitle: 'Ticket resolution queues, automated SLA escalations, and satisfaction scores.',
      description: 'Customer inquiries consolidated into a single unified queue with instant SLA dispatch.',
    },
    integrations: {
      name: 'Integrations',
      windowTitle: 'Marvel Mesh · Distributed Gateway & Connectors',
      adminSubtitle: 'Telebirr, Chapa, Stripe, and banking API gateways with cryptographic audit logs.',
      description: 'Cryptographically secured connectors syncing data across fintech rails.',
    },
  };
}

// Localized Industry Solutions Data
export function getIndustriesData(lang: Language) {
  if (lang === 'am') {
    return [
      {
        id: 'retail',
        name: 'ችርቻሮና ኢ-ኮሜርስ',
        tagline: 'ከፍተኛ የሽያጭ መቶኛ ያላቸው የመስመር ላይ መደብሮችና የቀጥታ የእቃ ክምችት ቁጥጥር',
        description: 'ቅጽበታዊ ክፍያ፣ በቅርንጫፎች መካከል የቀጥታ እቃ ቁጥጥር፣ ዓለም አቀፍና አገር ውስጥ ክፍያዎች (ቴሌብር/ቻፓ/ስትራይፕ) እና የማከፋፈያ አውቶሜሽን ያለው የተሟላ የንግድ መድረክ።',
        features: [
          'የሰከንድ ክፍልፋይ የሚፈጅ ፈጣን የቅርጫትና የክፍያ ሂደት',
          'የስትራይፕ እና የኢትዮጵያ ቻፓ ክፍያ መተላለፊያ ውህደቶች',
          'በበርካታ አካላዊ መደብሮች መካከል እቃዎችን ወዲያውኑ የማመሳሰል ዘዴ',
          'አውቶሜትድ የትዕዛዝ ሁኔታ ማሳወቂያ በቴሌግራም እና በኤስኤምኤስ',
        ],
        sampleDeliverables: ['Next.js የመስመር ላይ ሱቅ', 'የአስተዳዳሪ ማኔጀር', 'የእቃ ክምችት ማመሳሰያ ኢንጂን'],
        referenceProject: 'WEARIFY እና ANBESSA',
      },
      {
        id: 'hospitality',
        name: 'ሬስቶራንቶችና ካፌዎች',
        tagline: 'ያለ ንክኪ የሚሰሩ የጠረጴዛ ላይ QR ሜኑዎች እና የወጥ ቤት ትዕዛዝ ማሳያ ስርዓት',
        description: 'የደንበኞችን ትዕዛዝ፣ የጠረጴዛ ላይ ክፍያዎችን፣ የወጥ ቤት ትኬቶችን (KOT) እና የጾም ሜኑዎችን ያለምንም አፕሊኬሽን ማውረድ በዲጂታል መንገድ ያስተዳድሩ።',
        features: [
          'ያለ ምንም አፕ ማውረድ ወዲያውኑ በስልክ ካሜራ የሚከፈት የQR ሜኑ',
          'በሁለት ቋንቋ (አማርኛ እና እንግሊዝኛ) የተዘጋጁ የምግብ ዝርዝሮች',
          'ትዕዛዞችን በቀጥታ ወደ ወጥ ቤት ሰራተኞች ስክሪን የሚልክ ስርዓት',
          'አውቶሜትድ የቀን ሽያጭ ሂሳብ እና የገቢ ትንተና',
        ],
        sampleDeliverables: ['የQR ዲጂታል ሜኑ', 'የወጥ ቤት ማሳያ (KOT)', 'የጠረጴዛ ላይ ክፍያ'],
        referenceProject: 'AMORE CAFE & RESTAURANT',
      },
      {
        id: 'logistics',
        name: 'ሎጂስቲክስና ትራንስፖርት',
        tagline: 'የቀጥታ ጭነት መከታተያ፣ የመንገድ አመቻች እና የማጓጓዣ አስተዳደር',
        description: 'የተሽከርካሪዎችን እንቅስቃሴ በቀጥታ ካርታ ላይ ይከታተሉ፣ የመንገዶችን አቅጣጫ ያመቻቹ እና ደንበኞች ዕቃዎቻቸው የት እንደደረሱ በቅጽበት እንዲያውቁ ያድርጉ።',
        features: [
          'የተሽከርካሪዎችን ጉዞ የቀጥታ ጂፒኤስ (GPS) ክትትል በካርታ ላይ',
          'አውቶሜትድ የማድረሻ መንገድ ማመቻቸት',
          'የዲጂታል ፊርማ እና የደረሰኝ ማረጋገጫ በሞባይል',
          'የቀጥታ ማሳወቂያዎች በኤስኤምኤስ እና በቴሌግራም',
        ],
        sampleDeliverables: ['የተሽከርካሪዎች መቆጣጠሪያ ዳሽቦርድ', 'የአሽከርካሪ ሞባይል አፕ', 'የቀጥታ መከታተያ ፖርታል'],
        referenceProject: 'SWIFTBUS & SAFECOURIER',
      },
      {
        id: 'healthcare',
        name: 'የጤና ጥበቃና ህክምና',
        tagline: 'ደህንነቱ የተጠበቀ የኤሌክትሮኒክ የህክምና መዝገብ (EHR) እና የቀጠሮ ስርዓት',
        description: 'የታካሚዎችን የህክምና ታሪክ፣ የላብራቶሪ ውጤቶችን፣ የመድሃኒት ማዘዣዎችን እና የዶክተሮች ቀጠሮን በከፍተኛ የደህንነት ጥበቃ በዲጂታል መንገድ ያደራጁ።',
        features: [
          'የታካሚዎች የህክምና መረጃ ምስጢራዊነት ጥበቃና ምስጠራ',
          'የቀጥታ የዶክተሮች ቀጠሮ ማስያዣ በድረ-ገጽ እና በሞባይል',
          'የላብራቶሪ ምርመራ ውጤቶች አውቶሜትድ ዲጂታል ማድረሻ',
          'የመድሃኒት ቤት ክምችት ቁጥጥር እና የክፍያ መጠየቂያ',
        ],
        sampleDeliverables: ['የክሊኒክ አስተዳደር ስርዓት', 'የታካሚ ፖርታል', 'የመድሃኒት ቁጥጥር'],
        referenceProject: 'MEDFLOW CLINICAL',
      },
      {
        id: 'education',
        name: 'ትምህርትና ኢ-ትምህርት',
        tagline: 'ዘመናዊ የትምህርት ቤት አስተዳደር (LMS) እና የዲጂታል ቤተ-መጽሐፍት መድረኮች',
        description: 'የተማሪዎችን ምዝገባ፣ የውጤት ካርዶችን፣ የክፍያ አሰባሰብን እና በሺዎች የሚቆጠሩ የዲጂታል መጽሐፍትን የሚያስተዳድር የተሟላ ስርዓት።',
        features: [
          'የተማሪዎች ውጤት፣ የፈተና እና የክፍል መገኘት ክትትል',
          'በሞባይልና ኮምፒውተር የሚሰሩ የዲጂታል መጽሐፍት ማከማቻዎች',
          'አውቶሜትድ የትምህርት ክፍያ መቀበያና ደረሰኝ ሰጪ',
          'የወላጆች መከታተያ ፖርታል በቴሌግራም ማሳወቂያዎች',
        ],
        sampleDeliverables: ['የተማሪ መረጃ ፖርታል', 'የስማርት ቤተ-መጽሐፍት መተግበሪያ', 'የክፍያ ስርዓት'],
        referenceProject: 'SMART LIBRARY MANAGEMENT',
      },
      {
        id: 'realestate',
        name: 'ሪል እስቴትና ንብረት',
        tagline: 'የንብረት ሽያጭ ማሳያ፣ የኪራይ አስተዳደር እና የውል ስምምነቶች',
        description: 'ቤቶችንና ህንፃዎችን በከፍተኛ ጥራት በፎቶና ቪዲዮ ያሳዩ፣ የኪራይ ክፍያዎችን ይከታተሉ እና የደንበኞችን ፍላጎት በCRM ያስተዳድሩ።',
        features: [
          'የንብረቶች ዝርዝር ማሳያ ከካርታ እና ከቪዲዮ እይታዎች ጋር',
          'የኪራይ ውል ማብቂያና የክፍያ ማስታወሻ አውቶሜሽን',
          'የገዢዎች እና የሻጮች የCRM ክትትል ስርዓት',
          'የክፍያ ሰነዶች እና ውሎች ዲጂታል ማመንጫ',
        ],
        sampleDeliverables: ['የሪል እስቴት ፖርታል', 'የንብረት አስተዳደር ዳሽቦርድ', 'የደንበኛ CRM'],
        referenceProject: 'PRIMEPROPERTIES ETHIOPIA',
      },
    ];
  }

  return [
    {
      id: 'retail',
      name: 'Retail & Ecommerce',
      tagline: 'High-Conversion Online Stores & Automated Inventory Sync',
      description:
        'End-to-end commerce platforms with instant checkout, live inventory tracking across branches, dual international/local payments, and warehouse fulfillment.',
      features: [
        'Sub-second cart & checkout flows with guest options',
        'Stripe & Ethiopian Chapa payment gateway integrations',
        'Real-time inventory deduction across multiple physical stores',
        'Automated order status dispatch via Telegram & SMS',
      ],
      sampleDeliverables: ['Next.js Storefront', 'Split-Screen Admin Manager', 'Inventory Sync Engine'],
      referenceProject: 'WEARIFY & ANBESSA',
    },
    {
      id: 'hospitality',
      name: 'Restaurants & Cafés',
      tagline: 'Contactless Table QR Menus & Kitchen Display Systems',
      description:
        'Digitize customer ordering, table-side payments, kitchen order ticketing (KOT), and seasonal fasting menu management with zero app installation needed.',
      features: [
        'Instant table-side QR code menu launching with zero download',
        'Bilingual English & Amharic item descriptions and modifiers',
        'Direct kitchen station ticket routing and order timers',
        'Automated daily sales tally and revenue analytics',
      ],
      sampleDeliverables: ['Digital QR Menu PWA', 'Kitchen Display System (KOT)', 'Table Billing Module'],
      referenceProject: 'AMORE CAFE & RESTAURANT',
    },
    {
      id: 'logistics',
      name: 'Logistics & Dispatch',
      tagline: 'Real-Time Fleet Telemetry, Route Optimization & Consignment Tracking',
      description:
        'Coordinate distributed courier fleets, automate proof-of-delivery signatures, and provide customers with live satellite package tracking portals.',
      features: [
        'Live fleet GPS tracking with sub-second polling updates',
        'Dynamic multi-stop route optimization algorithms',
        'Mobile proof-of-delivery capture with digital signature & photos',
        'Automated SMS & Telegram dispatch notifications',
      ],
      sampleDeliverables: ['Fleet Telemetry Dashboard', 'Driver Companion App', 'Public Tracking Portal'],
      referenceProject: 'SWIFTBUS & SAFECOURIER',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Clinical',
      tagline: 'Secure Patient Records, Lab Workflows & Tele-Consultation Portals',
      description:
        'HIPAA-inspired encrypted medical platforms streamlining patient scheduling, electronic health records (EHR), lab diagnostic reporting, and pharmacy stock.',
      features: [
        'Encrypted patient records with cryptographic access logs',
        'Direct online specialist booking and queue status monitors',
        'Automated lab diagnostic report delivery to patient portals',
        'Pharmacy prescription dispensing and reorder alerts',
      ],
      sampleDeliverables: ['Clinical Administration Suite', 'Patient Health Portal', 'Pharmacy Sync Module'],
      referenceProject: 'MEDFLOW CLINICAL',
    },
    {
      id: 'education',
      name: 'Education & Institutional',
      tagline: 'Campus ERP, Student Information Systems & Smart Digital Libraries',
      description:
        'Empower universities and modern schools with unified portals managing student enrollment, academic grading, tuition fee collections, and digital repositories.',
      features: [
        'Student grade reporting and automated transcript generation',
        'Digital library catalogs with PDF reader and bookmark synchronization',
        'Tuition fee collection via bank APIs and instant digital receipts',
        'Parent communication portal with automated Telegram alerts',
      ],
      sampleDeliverables: ['Student Information Portal', 'Smart Library Management App', 'Tuition Billing Engine'],
      referenceProject: 'SMART LIBRARY MANAGEMENT',
    },
    {
      id: 'realestate',
      name: 'Real Estate & Property',
      tagline: 'High-Impact Listing Portals, Lease Management & VR Showcases',
      description:
        'Accelerate property sales and streamline rental portfolios with responsive real estate web applications featuring virtual tours and automated tenant billing.',
      features: [
        'Dynamic property catalog with interactive maps and filter presets',
        'Automated lease expiry alerts and monthly rent invoicing',
        'Lead capture CRM with agent assignment workflows',
        'Document generator for tenancy contracts and payment vouchers',
      ],
      sampleDeliverables: ['Public Property Marketplace', 'Property Manager Dashboard', 'Tenant Billing Module'],
      referenceProject: 'PRIMEPROPERTIES ETHIOPIA',
    },
  ];
}

// Localized Interactive System Layers
export function getInteractiveLayers(lang: Language) {
  if (lang === 'am') {
    return [
      {
        id: 'frontend',
        name: '01 / የፊት ገጽታና የጫፍ መረብ',
        badge: 'የተጠቃሚ እይታ ሽፋን',
        headline: 'የሰከንድ ክፍልፋይ ፈጣን SSR እና ሁለገብ የሞባይል ገጾች',
        description: 'በNext.js 15 App Router እና React Native የተገነቡ እጅግ ፈጣን የተጠቃሚ እና የአስተዳዳሪ ገጾች። በዥረት በሚተላለፍ SSR፣ ተለዋዋጭ አቀራረብ እና ፈጣን የEdge CDN ማከማቻ የታነፁ።',
        tech: ['Next.js 15', 'React 19', 'React Native', 'Tailwind CSS', 'TypeScript'],
        metrics: [
          { label: 'የጫፍ ገጽ ማመንጨት', value: '< 45ms' },
          { label: 'የLighthouse ነጥብ', value: '98/100' },
          { label: 'የተጨመቀ የፋይል መጠን', value: '48 KB' },
        ],
        codeSample: `// Next.js App Router Edge Handler
export const runtime = 'edge';

export async function GET(request: Request) {
  const telemetry = await getEdgeTelemetry();
  return Response.json({ status: 200, latency: '12ms', telemetry });
}`,
      },
      {
        id: 'gateway',
        name: '02 / የኤፒአይ እና የሎጂክ እምብርት',
        badge: 'ማይክሮሰርቪስ እና አቅጣጫ አመልካች',
        headline: 'አስተማማኝ ማይክሮሰርቪሶች እና የክስተት ቅንጅት',
        description: 'በNode.js እና Express የተገነቡ ያለ ገደብ የሚሰፉ የጀርባ አገልጋዮች። ክሪፕቶግራፊክ የJWT ፍቃድ ማረጋገጫ፣ የፍጥነት ገደብ መከላከያ እና የግብይት ክስተት ፍሰቶች ያሏቸው።',
        tech: ['Node.js', 'Express', 'JWT Auth', 'Redis Queues', 'Docker'],
        metrics: [
          { label: 'የኤፒአይ ምላሽ ጊዜ', value: '18ms p95' },
          { label: 'የሰከንድ ጥያቄዎች', value: '12,500 req/s' },
          { label: 'የአገልጋይ ጤና', value: '100% ጤናማ' },
        ],
        codeSample: `// Authenticated Secure Microservice Route
router.post('/orders/process', verifyJwt, rateLimiter, async (req, res) => {
  const job = await orderQueue.add('processPayment', req.body);
  return res.status(202).json({ jobId: job.id, status: 'QUEUED' });
});`,
      },
      {
        id: 'persistence',
        name: '03 / የመረጃ ቋት እና ማከማቻ',
        badge: 'አስተማማኝ የመረጃ ሽፋን',
        headline: 'PostgreSQL Relational DB እና Type-Safe Prisma ORM',
        description: 'አስተማማኝ የACID ግብይቶች፣ ጥብቅ የውሂብ መዋቅር እና በPrisma ORM የሚመሩ አውቶሜትድ ፍልሰቶች። ፈጣን የRedis ማከማቻ ከመረጃ ቋቱ ጋር ተቀናጅቷል።',
        tech: ['PostgreSQL', 'Prisma ORM', 'Redis Cache', 'Automated Backups', 'Connection Pooling'],
        metrics: [
          { label: 'የጥያቄ ፍጥነት', value: '2.4ms avg' },
          { label: 'የመረጃ ቋት ግንኙነት', value: 'PgBouncer Pool' },
          { label: 'የምትኬ ድግግሞሽ', value: 'በየ 6 ሰዓቱ' },
        ],
        codeSample: `// Type-Safe Prisma Database Transaction
const [order, updatedInventory] = await prisma.$transaction([
  prisma.order.create({ data: orderPayload }),
  prisma.product.update({ where: { id }, data: { stock: { decrement: qty } } }),
]);`,
      },
      {
        id: 'security',
        name: '04 / የደህንነት እና የኦፕሬሽን ሽፋን',
        badge: 'ጥበቃ እና ቀጣይነት ያለው ቁጥጥር',
        headline: 'የዜሮ-እምነት ደህንነት እና 24/7 የቴሌሜትሪ ክትትል',
        description: 'የአውቶሜትድ ጥቃቶች መከላከያ (CORS፣ CSRF፣ SQL Injection)፣ የተመሰጠሩ የደመና ሚስጥሮች እና በቀጥታ ስህተቶችን የሚያሳውቁ የቴሌግራም/ኢሜይል ማንቂያዎች።',
        tech: ['SSL/TLS 1.3', 'WAF Shield', 'Prometheus', 'Telegram Alerts', 'Automated Rollback'],
        metrics: [
          { label: 'ያልተቋረጠ አገልግሎት', value: '99.98%' },
          { label: 'የስህተት ማንቂያ ፍጥነት', value: '< 2 ሰከንድ' },
          { label: 'የSSL የምስክር ወረቀት', value: 'A+ Grade' },
        ],
        codeSample: `// Automated Incident Sentinel
sentinel.on('unhandledException', async (error) => {
  await dispatchTelegramAlert({ severity: 'CRITICAL', error });
  await gracefulDrainConnections();
});`,
      },
    ];
  }

  return [
    {
      id: 'frontend',
      name: '01 / Edge & Frontend',
      badge: 'Presentation Layer',
      headline: 'Sub-second SSR & Universal Mobile Interfaces',
      description:
        'High-velocity consumer and administrative experiences engineered with Next.js 15 App Router and React Native. Optimized with streaming SSR, dynamic imports, and instant edge CDN hydration.',
      tech: ['Next.js 15', 'React 19', 'React Native', 'Tailwind CSS', 'TypeScript'],
      metrics: [
        { label: 'Edge Hydration', value: '< 45ms' },
        { label: 'Lighthouse Score', value: '98/100' },
        { label: 'Asset Payload', value: '48 KB compressed' },
      ],
      codeSample: `// Next.js App Router Edge Handler
export const runtime = 'edge';

export async function GET(request: Request) {
  const telemetry = await getEdgeTelemetry();
  return Response.json({ status: 200, latency: '12ms', telemetry });
}`,
    },
    {
      id: 'gateway',
      name: '02 / API & Logic Core',
      badge: 'Microservices & Routing',
      headline: 'Resilient Microservices & Event Orchestration',
      description:
        'Stateless, horizontal-scaling backend services built on Node.js and Express. Features cryptographic JWT token validation, rate-limiting shields, and transactional event streams.',
      tech: ['Node.js', 'Express', 'JWT Auth', 'Redis Queues', 'Docker'],
      metrics: [
        { label: 'Avg API Response', value: '18ms p95' },
        { label: 'Throughput Peak', value: '12,500 req/s' },
        { label: 'Cluster Health', value: '100% Nominal' },
      ],
      codeSample: `// Authenticated Secure Microservice Route
router.post('/orders/process', verifyJwt, rateLimiter, async (req, res) => {
  const job = await orderQueue.add('processPayment', req.body);
  return res.status(202).json({ jobId: job.id, status: 'QUEUED' });
});`,
    },
    {
      id: 'persistence',
      name: '03 / Database & Storage',
      badge: 'Persistence Layer',
      headline: 'PostgreSQL Relational DB & Type-Safe Prisma ORM',
      description:
        'ACID-compliant relational integrity, normalized database schemas, and zero-downtime database migrations driven by Prisma ORM. Paired with in-memory Redis caches.',
      tech: ['PostgreSQL', 'Prisma ORM', 'Redis Cache', 'Automated Backups', 'Connection Pooling'],
      metrics: [
        { label: 'Query Execution', value: '2.4ms avg' },
        { label: 'Connection Pooling', value: 'PgBouncer Managed' },
        { label: 'Backup Cadence', value: 'Every 6 Hours' },
      ],
      codeSample: `// Type-Safe Prisma Database Transaction
const [order, updatedInventory] = await prisma.$transaction([
  prisma.order.create({ data: orderPayload }),
  prisma.product.update({ where: { id }, data: { stock: { decrement: qty } } }),
]);`,
    },
    {
      id: 'security',
      name: '04 / Security & Telemetry',
      badge: 'Infrastructure & Ops',
      headline: 'Zero-Trust Security & Real-Time Sentinel Monitoring',
      description:
        'Automated perimeter threat neutralization (CORS, CSRF, SQL Injection shields), encrypted environment secret vaults, and real-time incident dispatch.',
      tech: ['SSL/TLS 1.3', 'WAF Shield', 'Prometheus', 'Telegram Alerts', 'Automated Rollback'],
      metrics: [
        { label: 'Measured Uptime', value: '99.98%' },
        { label: 'Incident Dispatch', value: '< 2 Seconds' },
        { label: 'SSL Protocol', value: 'A+ Grade TLS 1.3' },
      ],
      codeSample: `// Automated Incident Sentinel
sentinel.on('unhandledException', async (error) => {
  await dispatchTelegramAlert({ severity: 'CRITICAL', error });
  await gracefulDrainConnections();
});`,
    },
  ];
}

// Localized Tech Stack Categories
export function getTechnologiesData(lang: Language): TechStackCategory[] {
  if (lang === 'am') {
    return [
      {
        category: 'የፊት ገጽታና የተጠቃሚ ገጾች',
        description: 'ለፈጣን መስተጋብር እና ውበት የታነፁ ዘመናዊና ከፍተኛ አፈፃፀም ያላቸው የድር መሣሪያዎች።',
        technologies: [
          {
            name: 'Next.js 15+',
            icon: 'Globe',
            level: 'ዋና ፍሬምወርክ',
            description: 'Server Components፣ App Router፣ ፈጣን SSR እና የደመና ዝርጋታ።',
          },
          {
            name: 'React 19',
            icon: 'Code2',
            level: 'የዩአይ ቤተ-መጽሐፍት',
            description: 'ፈጣን ሬንደሪንግ፣ ዘመናዊ ሁኮች እና ቀልጣፋ የስቴት አስተዳደር።',
          },
          {
            name: 'TypeScript',
            icon: 'FileCode',
            level: 'የቋንቋ ደረጃ',
            description: 'ከፊት ለፊት እስከ ጀርባ አገልጋይ ድረስ ጥብቅ የሆነ የኮድ ደህንነት።',
          },
          {
            name: 'Tailwind CSS',
            icon: 'Layout',
            level: 'የስታይል ሞተር',
            description: 'ቀላል፣ ፈጣን እና ምንም ተጨማሪ ጫና የማያሳድር ዘመናዊ የስታይል መሣሪያ።',
          },
        ],
      },
      {
        category: 'የጀርባ አገልጋይና የመረጃ አርክቴክቸር',
        description: 'ጠንካራ የአገልጋይ ሎጂክ፣ አስተማማኝ የመረጃ ቋቶች እና ጥብቅ የኦብጀክት-ሪሌሽናል ማፒንግ።',
        technologies: [
          {
            name: 'Node.js & Express',
            icon: 'Server',
            level: 'የስራ አካባቢ',
            description: 'ፈጣን እና ሊሰፉ የሚችሉ የኤፒአይ አገልግሎቶችን የሚያንቀሳቅስ ሞተር።',
          },
          {
            name: 'PostgreSQL',
            icon: 'Database',
            level: 'ዋና የመረጃ ቋት',
            description: 'አስተማማኝ የሪሌሽናል ዳታቤዝ ኢንጂን ከJSONB ድጋፍ ጋር።',
          },
          {
            name: 'MySQL',
            icon: 'DatabaseZap',
            level: 'ሪሌሽናል ዳታቤዝ',
            description: 'ለድርጅት ሶፍትዌሮች ፈጣንና አስተማማኝ የሆነ የመረጃ ማከማቻ።',
          },
          {
            name: 'Prisma ORM',
            icon: 'Boxes',
            level: 'የውሂብ ማግኛ ሽፋን',
            description: 'ደህንነቱ የተጠበቀ የውሂብ መጠይቆች እና አውቶሜትድ የፍልሰት አሰራር።',
          },
        ],
      },
      {
        category: 'ሞባይል፣ AI እና አውቶሜሽን',
        description: 'ለስላሳ የሞባይል ተሞክሮዎች፣ አስተዋይ የንግድ ረዳቶች እና አውቶሜትድ የስራ ፍሰቶች።',
        technologies: [
          {
            name: 'React Native & Expo',
            icon: 'Smartphone',
            level: 'የሞባይል መድረክ',
            description: 'በአንድ ኮድ ቤዝ ለሁለቱም iOS እና Android የሚሰሩ ፈጣን አፖች።',
          },
          {
            name: 'AI & Bot Frameworks',
            icon: 'Bot',
            level: 'ሰው ሰራሽ አስተዋይ',
            description: 'የቴሌግራም ቦቶች፣ የቻት ረዳቶች እና ብልህ የንግድ ውሳኔዎች።',
          },
          {
            name: 'Redis',
            icon: 'Layers',
            level: 'ፈጣን ማከማቻ',
            description: 'በሚሊሰከንድ የሚሰሩ የመረጃ ሰልፎች እና ፈጣን የሜሞሪ ማከማቻ።',
          },
          {
            name: 'Git & GitHub',
            icon: 'GitBranch',
            level: 'የስራ ቁጥጥር',
            description: 'የኮድ ደህንነት፣ የቡድን ቅንጅት እና ጥብቅ የግምገማ ሂደቶች።',
          },
        ],
      },
      {
        category: 'ደመና፣ ዲቮፕስ እና ደህንነት',
        description: 'ዓለም አቀፍ ዝርጋታ፣ ላልተቋረጠ አገልግሎት እና ለዜሮ ጥቃት የተገነባ መሠረተ-ልማት።',
        technologies: [
          {
            name: 'Docker',
            icon: 'Container',
            level: 'ኮንቴይነራይዜሽን',
            description: 'በማንኛውም ሰርቨር ላይ ወጥ በሆነ ሁኔታ የሚሰሩ የታሸጉ መተግበሪያዎች።',
          },
          {
            name: 'Vercel & AWS',
            icon: 'Cloud',
            level: 'የደመና ዝርጋታ',
            description: 'ዓለም አቀፍ የጫፍ ኔትወርክ፣ አውቶሜትድ SSL እና ላልተቋረጠ አገልግሎት።',
          },
        ],
      },
    ];
  }

  return [
    {
      category: 'Frontend & User Interface',
      description: 'Modern, high-performance web tooling engineered for responsive elegance and instant interactions.',
      technologies: [
        {
          name: 'Next.js 15+',
          icon: 'Globe',
          level: 'Primary Framework',
          description: 'Server Components, App Router, streaming SSR, and edge deployment.',
        },
        {
          name: 'React 19',
          icon: 'Code2',
          level: 'Core UI Library',
          description: 'Concurrent rendering, modern hooks, and state management.',
        },
        {
          name: 'TypeScript',
          icon: 'FileCode',
          level: 'Language Standard',
          description: 'End-to-end strict static type safety across frontend and backend layers.',
        },
        {
          name: 'Tailwind CSS',
          icon: 'Layout',
          level: 'Styling Engine',
          description: 'Utility-first token-based styling with zero runtime overhead.',
        },
      ],
    },
    {
      category: 'Backend & Data Architecture',
      description: 'Robust server logic, resilient databases, and type-safe object-relational mapping.',
      technologies: [
        {
          name: 'Node.js & Express',
          icon: 'Server',
          level: 'Runtime Environment',
          description: 'Event-driven, asynchronous I/O powering fast and scalable API services.',
        },
        {
          name: 'PostgreSQL',
          icon: 'Database',
          level: 'Primary Database',
          description: 'ACID-compliant relational database engine with JSONB extensibility.',
        },
        {
          name: 'MySQL',
          icon: 'DatabaseZap',
          level: 'Relational Database',
          description: 'High-speed relational storage for structured enterprise applications.',
        },
        {
          name: 'Prisma ORM',
          icon: 'Boxes',
          level: 'Data Access Layer',
          description: 'Type-safe database queries, automated schema migrations, and relational modeling.',
        },
      ],
    },
    {
      category: 'Mobile, AI & Automation',
      description: 'Native-feel client apps, intelligent agents, and event-driven automation pipelines.',
      technologies: [
        {
          name: 'React Native & Expo',
          icon: 'Smartphone',
          level: 'Mobile Framework',
          description: 'Universal cross-platform native iOS & Android applications with native performance.',
        },
        {
          name: 'AI & Bot Frameworks',
          icon: 'Bot',
          level: 'Intelligence Layer',
          description: 'Telegram bots, conversational workflows, and autonomous system triggers.',
        },
        {
          name: 'Redis',
          icon: 'Layers',
          level: 'Cache & Queue',
          description: 'Sub-millisecond latency in-memory data store for queues, rate-limiting, and state.',
        },
        {
          name: 'Git & GitHub',
          icon: 'GitBranch',
          level: 'Version Control',
          description: 'Atomic git history, branch protection, CI status checks, and collaborative code reviews.',
        },
      ],
    },
    {
      category: 'Cloud, DevOps & Security',
      description: 'Modern infrastructure primitives ensuring high availability, continuous deployment, and security.',
      technologies: [
        {
          name: 'Docker',
          icon: 'Container',
          level: 'Containerization',
          description: 'Deterministic reproducible containers across development, staging, and production.',
        },
        {
          name: 'Vercel & AWS',
          icon: 'Cloud',
          level: 'Deployment Infrastructure',
          description: 'Global edge distribution, automated SSL provisioning, and serverless compute.',
        },
      ],
    },
  ];
}
