export const site = {
  name: 'CONTROL',
  fullName: 'Control Team',
  tagline: 'ESTRATÉGIA. COORDENAÇÃO. CONTROLE.',
  description:
    'Clã focado em jogos táticos como Squad e Arma 3, onde estratégia, coordenação e controle definem cada operação.',
  locale: 'pt-BR',

  social: {
    discord: 'https://discord.gg/controlclan',
    instagram: 'https://www.instagram.com/controlclan/',
    youtube: 'https://www.youtube.com/@controlclan',
    whatsapp: 'https://chat.whatsapp.com/',
    email: 'contato@controlclan.com',
  },

  recruitForm: {
    endpoint: 'https://formspree.io/f/REPLACE_ME',
  },

  nav: [
    { label: 'Início', href: '/' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Recrutamento', href: '/recrutamento' },
    { label: 'Contato', href: '/contato' },
  ],
} as const;

export type Site = typeof site;
