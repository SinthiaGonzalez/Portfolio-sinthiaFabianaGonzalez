// English version of the portfolio content. Same structure as content.ts:
// when you change something there, change it here too.
import { site as sharedSite, skillsMain } from './shared';

export const site = {
  ...sharedSite,
  role: 'Full Stack Web Developer',
  roleJunior: 'Junior Full Stack Web Developer',
  cvUrl: '/SinthiaGonzalez_CV_2026_EN.pdf',
};

export const nav = [
  { id: 'inicio', label: 'Home' },
  { id: 'sobre-mi', label: 'About' },
  { id: 'experiencia', label: 'Experience' },
  { id: 'habilidades', label: 'Skills' },
  { id: 'formacion', label: 'Education' },
  { id: 'proyectos', label: 'Projects' },
  { id: 'contacto', label: 'Contact' },
];

export const hero = {
  greeting: "Hi! I'm",
  intro:
    'Web developer with experience in React, Node.js, Express and PostgreSQL. I build complete web applications that are maintainable and pleasant to use.',
  downloadCv: 'View CV',
  contact: 'Contact',
};

export const about = {
  title: 'About me',
  paragraphs: [
    [
      { text: "I'm a junior full stack web developer in the final stretch of the " },
      { text: 'Web Application Development (DAW)', bold: true },
      { text: ' vocational degree, currently doing my internship at ' },
      { text: 'Multiplicalia', bold: true },
      { text: ', where I work with React, WordPress, n8n, PostgreSQL and Docker.' },
    ],
    [
      { text: 'I trained at ' },
      { text: 'Soy Henry', bold: true },
      { text: ', where I built ' },
      { text: 'Serena Hotel', bold: true },
      {
        text: ' as part of a team. I work with Scrum and clean code principles (SOLID), and I have experience with REST APIs, process automation and databases. I am looking for a junior web developer position where I can keep growing and add value from day one.',
      },
    ],
  ],
  pills: [
    { icon: 'pin', label: 'Boiro, A Coruña (Spain)' },
    { icon: 'en', label: 'English A2' },
  ],
};

export const experience = {
  title: 'Experience',
  jobs: [
    {
      date: '06/2026 – Present',
      company: 'Multiplicalia',
      type: 'Internship',
      role: 'Web Developer / Automation',
      tasks: [
        'Frontend development with React.js, and management, customisation and maintenance of WordPress websites.',
        'Process automation with n8n, integrating workflows through REST APIs.',
        'Management and modelling of relational and non-relational databases: PostgreSQL, Supabase and Firebase.',
        'Dockerising applications to deploy them in reproducible environments.',
        'Diagnosing, debugging and fixing issues in production applications.',
        'Teamwork with agile methodologies and clean code principles (SOLID).',
      ],
      tags: ['React', 'WordPress', 'n8n', 'PostgreSQL', 'Supabase', 'Firebase', 'Docker'],
    },
    {
      date: '05/2025 – 07/2025',
      company: 'Centro Médico Riveira',
      type: 'Internship',
      role: 'IT Security and Databases',
      tasks: [
        'Set up shared database access over a local network with security controls.',
        'File recovery, disk cloning and creation of installation media.',
        'Installation and configuration of software, computers and network printers.',
        'Detecting and solving incidents to keep systems running correctly.',
      ],
      tags: ['Databases', 'Local networks', 'Security', 'Technical support'],
    },
  ],
};

export const skills = {
  title: 'Skills',
  main: skillsMain,
  moreTitle: 'More technologies',
  more: ['Java', 'SQL', 'Bootstrap', 'Firebase', 'n8n', 'REST API', 'Scrum · SOLID'],
};

export const education = {
  title: 'Education',
  items: [
    { logo: 'ceac', title: 'Web Application Development (DAW)', org: 'CEAC Official Vocational Training', date: '09/2024 - Present' },
    { logo: 'arca', title: 'IT Security · IFCT0109', org: 'Academia Arca', date: '11/2024 - 05/2025' },
    { logo: 'henry', title: 'Full Stack Web Developer', org: 'Campus Virtual Henry', date: '04/2023 - 12/2023' },
  ],
  certsTitle: 'Certifications',
  certs: ['IT Security · SEPE', 'Full Stack Web Developer · Soy Henry', 'EF SET English Certificate · A2'],
};

export const projects = {
  title: 'Projects',
  items: [
    {
      name: 'Serena Hotel',
      status: 'live',
      statusLabel: '● Live',
      color: 'hotel',
      description:
        'Hotel management web app: responsive bookings, user roles, admin panel, online payments and review filtering.',
      tags: ['React', 'Redux', 'Express', 'PostgreSQL', 'Stripe', 'Docker'],
      demo: 'https://serena.sinthiagonzalez.com',
      repo: 'https://github.com/SinthiaGonzalez/serena-hotel',
    },
    {
      name: 'AI Assistant · Europroject',
      status: 'live',
      statusLabel: '● Live',
      color: 'europroject',
      description:
        "AI sales assistant module for Instituto Europroject's online shop, developed at Multiplicalia. It helps customers find products through a chat.",
      tags: ['PrestaShop', 'JavaScript', 'n8n', 'AI'],
      demo: 'https://institutoeuroproject.com/es/195-mobiliario-geriatrico',
      repo: null,
    },
    {
      name: 'Portfolio',
      mockTitle: 'Sinthia González',
      status: null,
      color: 'portfolio',
      description: 'My personal portfolio, where I show my projects, technical skills and education.',
      tags: ['Astro', 'React', 'Tailwind', 'Motion'],
      demo: 'https://sinthiagonzalez.com/en/',
      repo: 'https://github.com/SinthiaGonzalez/Portfolio-sinthiaFabianaGonzalez',
    },
  ],
};

export const contact = {
  title: 'Contact',
  intro: "You can reach me on WhatsApp or by email, or leave me a message here and I'll get back to you as soon as possible.",
  whatsapp: 'Message me on WhatsApp',
  whatsappMensaje: "Hi Sinthia, I've seen your portfolio and I'd like to talk to you.",
  correo: 'Send me an email',
  whatsappCorto: 'WhatsApp',
  correoCorto: 'Email',
  separador: 'or leave me a message',
  fields: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' },
  send: 'Send',
};

export const footer = {
  madeWith: 'Copyright © 2026 | Made with',
  by: 'by',
};

export const ui = {
  lang: 'en',
  meta: {
    title: 'Sinthia González · Full Stack Web Developer',
    description: 'Portfolio of Sinthia Fabiana González, junior full stack web developer.',
  },
  navAria: 'Main',
  home: 'Home',
  langAria: 'Language',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  tech: 'Technologies',
  soon: 'SOON',
  backToTop: 'Back to top',
  aboutArt: 'Illustration of Sinthia working on her laptop with a coffee',
  honeypot: 'Do not fill in this field',
  form: {
    invalid: 'Please enter your name, a valid email and your message.',
    sending: 'Sending…',
    sent: "Message sent! 🌿 Thanks for writing, I'll get back to you as soon as possible.",
    failed: 'The message could not be sent.',
    tooMany: "You've sent several messages in a row. Please wait a minute and try again.",
    alsoWhatsapp: 'You can also',
    whatsappLink: 'message me on WhatsApp',
    offline: 'There is no connection right now. Try again or',
    offlineLink: 'message me on WhatsApp',
  },
};
