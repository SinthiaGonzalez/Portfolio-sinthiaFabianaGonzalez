// Contenido del portfolio (datos del CV 2026). Todo el texto está aquí para
// poder añadir más adelante la versión en inglés sin tocar los componentes.

export const site = {
  name: 'Sinthia González',
  fullName: 'Sinthia Fabiana González',
  role: 'Desarrolladora Web Full Stack',
  roleJunior: 'Desarrolladora Web Full Stack Junior',
  email: 'gonzalez.sinthia@icloud.com',
  location: 'Boiro, A Coruña',
  cvUrl: '/SinthiaGonzalez_CV_2026.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/sinthiagonzalez',
    github: 'https://github.com/SinthiaGonzalez',
  },
};

export const nav = [
  { id: 'inicio', label: 'Home' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacion', label: 'Formación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

export const hero = {
  greeting: 'Hola! Soy',
  intro:
    'Desarrolladora web con experiencia en React, Node.js, Express y PostgreSQL. Creo aplicaciones web completas, mantenibles y agradables de usar.',
  downloadCv: 'Descargar CV',
  contact: 'Contacto',
};

export const about = {
  title: 'Sobre mí',
  // Los fragmentos con `bold: true` se muestran en negrita.
  paragraphs: [
    [
      { text: 'Soy desarrolladora web full stack junior. He finalizado el ciclo de ' },
      { text: 'Desarrollo de Aplicaciones Web (DAW)', bold: true },
      { text: ' y hago prácticas en ' },
      { text: 'Multiplicalia', bold: true },
      { text: ', donde trabajo con React, WordPress, n8n, PostgreSQL y Docker.' },
    ],
    [
      {
        text: 'Me formé en Soy Henry, donde desarrollé Serena Hotel en equipo. Trabajo con Scrum y principios de código limpio (SOLID), y tengo experiencia con APIs REST, automatización de procesos y bases de datos. Busco incorporarme como programadora web junior y seguir creciendo.',
      },
    ],
  ],
  pills: [
    { icon: 'pin', label: 'Boiro, A Coruña' },
    { icon: 'en', label: 'Inglés A2' },
  ],
};

export const experience = {
  title: 'Experiencia',
  jobs: [
    {
      date: '06/2026 – Presente',
      company: 'Multiplicalia',
      type: 'Prácticas de empresa',
      role: 'Desarrolladora Web / Automatización',
      tasks: [
        'Desarrollo frontend con React.js y gestión, personalización y mantenimiento de sitios web con WordPress.',
        'Automatización de procesos con n8n, integrando flujos de trabajo mediante APIs REST.',
        'Gestión y modelado de bases de datos relacionales y no relacionales: PostgreSQL, Supabase y Firebase.',
        'Dockerización de aplicaciones para desplegar en entornos reproducibles.',
        'Diagnóstico, depuración y corrección de incidencias (bug fixing) en aplicaciones en producción.',
        'Trabajo en equipo con metodologías ágiles y principios de código limpio (SOLID).',
      ],
      tags: ['React', 'WordPress', 'n8n', 'PostgreSQL', 'Supabase', 'Firebase', 'Docker'],
    },
  ],
};

// `icon` = nombre del archivo en src/assets/skills (sin .svg)
export const skills = {
  title: 'Habilidades',
  main: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Redux', icon: 'redux' },
    { name: 'Next.js', icon: 'next-js' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Node.js', icon: 'node-js' },
    { name: 'Express', icon: 'express' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Figma', icon: 'figma' },
    { name: 'WordPress', icon: 'wordpress' },
  ],
  moreTitle: 'Más tecnologías',
  more: ['Java', 'SQL', 'Bootstrap', 'Firebase', 'n8n', 'API REST', 'Scrum · SOLID'],
};

export const education = {
  title: 'Formación',
  items: [
    { logo: 'ceac', title: 'Desarrollo de Aplicaciones Web (DAW)', org: 'CEAC FP Oficial', date: '09/2024 - Finalizado' },
    { logo: 'arca', title: 'Seguridad informática · IFCT0109', org: 'Academia Arca · SEPE', date: '11/2024 - 05/2025' },
    { logo: 'henry', title: 'Full Stack Web Developer', org: 'Campus Virtual Henry', date: '04/2023 - 12/2023' },
  ],
  certsTitle: 'Certificaciones',
  certs: ['Seguridad informática · SEPE', 'Desarrolladora Web Full Stack · Soy Henry', 'EF SET English Certificate · A2'],
};

export const projects = {
  title: 'Proyectos',
  items: [
    {
      name: 'Serena Hotel',
      status: 'live',
      statusLabel: '● En línea',
      color: 'hotel',
      description:
        'Aplicación web de gestión hotelera: reservas responsive, rol de usuario, panel de administración, pagos online y filtro de comentarios.',
      tags: ['React', 'Redux', 'Express', 'PostgreSQL', 'Stripe', 'Docker'],
      demo: 'https://serena.sinthiagonzalez.com',
      repo: 'https://github.com/SinthiaGonzalez/serena-hotel',
    },
    {
      name: 'Sushi Restaurant',
      mockTitle: 'Sushi',
      status: 'soon',
      statusLabel: 'Próximamente',
      color: 'sushi',
      description: 'App para un restaurante de sushi: carta, pedidos y reservas. Pronto estará desplegada.',
      tags: ['Next.js', 'TypeScript'],
      demo: null,
      repo: 'https://github.com/SinthiaGonzalez/sushi-restaurant-automation',
    },
    {
      name: 'Portfolio',
      mockTitle: 'Sinthia González',
      status: null,
      color: 'portfolio',
      description: 'Mi portfolio personal, donde muestro mis proyectos, mis habilidades técnicas y mi formación.',
      tags: ['Astro', 'React', 'Tailwind', 'Motion'],
      demo: 'https://sinthiagonzalez.com',
      repo: 'https://github.com/SinthiaGonzalez/Portfolio-sinthiaFabianaGonzalez',
    },
  ],
};

export const contact = {
  title: 'Contacto',
  intro: 'Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.',
  fields: { name: 'Nombre', email: 'E-mail', subject: 'Asunto', message: 'Mensaje' },
  send: 'Enviar',
};

export const footer = {
  madeWith: 'Copyright © 2026 | Hecho con',
  by: 'por',
};
