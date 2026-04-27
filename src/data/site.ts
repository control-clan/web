export const site = {
  name: 'CONTROL',
  fullName: 'Control Team',
  tagline: 'ESTRATÉGIA. COORDENAÇÃO. CONTROLE.',
  description:
    'Clã focado em jogos táticos como Squad e Arma 3, onde estratégia, coordenação e controle definem cada operação.',
  locale: 'pt-BR',

  social: {
    discord: 'https://discord.gg/er4CVzeQDe',
    instagram: 'https://www.instagram.com/controlteam.br/',
    youtube: 'https://www.youtube.com/@ControlTeam-d7n',
    whatsapp: 'https://chat.whatsapp.com/Ek0ww5XzKjKIM9eIVEAqf9',
  },

  recruitForm: {
    // Google Forms — formulário oficial de recrutamento
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe8N3r64vMn4mFmhy6ug3Vs9wmOVO62s9WsZLvHvHVd5Drzug/viewform?usp=header',
  },

  nav: [
    { label: 'Início', href: '/' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Recrutamento', href: '/recrutamento' },
    { label: 'Contato', href: '/contato' },
  ],
} as const;

export type Site = typeof site;
