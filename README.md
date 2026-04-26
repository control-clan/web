# Control Team — Site

Site institucional do clã **Control** (Squad / Arma 3) construído com **Astro + Tailwind**.

---

## Stack

- [Astro 6](https://astro.build) — gerador de site estático
- [Tailwind CSS 4](https://tailwindcss.com) — estilização
- TypeScript estrito
- Hospedagem recomendada: [Vercel](https://vercel.com) (free tier)

---

## Como rodar localmente

Pré-requisitos: Node 22+, pnpm 10+.

```sh
pnpm install
pnpm dev
```

Servidor de desenvolvimento em `http://localhost:4321`.

## Scripts

| Comando             | Ação                                                     |
| ------------------- | -------------------------------------------------------- |
| `pnpm dev`          | Servidor local (hot reload)                              |
| `pnpm build`        | Build de produção em `./dist`                            |
| `pnpm preview`      | Pré-visualização local do build                          |
| `pnpm gen:icons`    | Regenera favicons a partir de `public/brand/logo-ctrl.webp` |
| `pnpm astro …`      | CLI Astro (`astro check`, `astro add`)                   |

---

## Como editar conteúdo

A maior parte do conteúdo do site fica em arquivos Markdown ou TypeScript simples. Você pode editar pelo GitHub direto no navegador (botão de lápis) — o deploy acontece automaticamente quando você confirma a alteração.

### Configuração geral

`src/data/site.ts` — links sociais, email, endpoint do formulário, navegação, slogan.

### Valores do clã (Modus Operandi)

`src/content/values/*.md` — um arquivo por valor. Frontmatter:

```yaml
---
title: Nome do valor
icon: shield        # shield | radio | target | medal | compass | users | crosshair
order: 1            # ordem de exibição
---
Texto do valor aqui.
```

### Jogos cobertos

`src/content/games/*.md` — um arquivo por jogo. Frontmatter:

```yaml
---
name: Squad
tagline: Tagline curto
cover: /games/squad.jpg   # caminho da imagem em /public/games/
order: 1
---
Descrição do jogo.
```

### Imagens

Coloque em `/public/`. Use caminhos absolutos a partir da raiz:

- `/public/games/squad.jpg` → `/games/squad.jpg`
- `/public/gallery/ops-001.jpg` → `/gallery/ops-001.jpg`

### Páginas estáticas

- `/src/pages/index.astro` — Home
- `/src/pages/quem-somos.astro` — Quem Somos
- `/src/pages/recrutamento.astro` — Recrutamento (form, requisitos, FAQ)
- `/src/pages/contato.astro` — Contato
- `/src/pages/404.astro` — Página de erro

---

## Formulário de Recrutamento

Usa [Formspree](https://formspree.io) (free: 50 submissões/mês).

1. Crie um endpoint em <https://formspree.io>
2. Substitua `REPLACE_ME` em `src/data/site.ts` (`recruitForm.endpoint`)
3. Commit e deploy

---

## Deploy na Vercel

1. Crie conta em <https://vercel.com>
2. Importe o repositório do GitHub
3. Build settings: framework **Astro** (autodetectado), comando `pnpm build`, output `dist`
4. Configure domínio `controlclan.com`:
   - Em Vercel → Settings → Domains, adicione o domínio
   - No registrador DNS, aponte conforme instruções da Vercel
   - Diminua o TTL antes da troca para reduzir downtime

---

## Identidade visual

| Token             | Hex       | Uso                                  |
| ----------------- | --------- | ------------------------------------ |
| bg-base           | `#0A0D10` | Fundo principal                      |
| bg-surface        | `#141A1F` | Cards e seções elevadas              |
| accent-tactical   | `#A8B545` | CTAs, destaques, divisores           |
| accent-alert      | `#D97706` | Badges, estados ativos               |
| text-primary      | `#E6E8EB` | Texto principal                      |

Fontes: **Rajdhani** (display), **Inter** (body), **JetBrains Mono** (mono).

---

## Estrutura

```text
.
├── public/                # Assets estáticos (imagens, favicon)
├── src/
│   ├── components/        # Componentes Astro (Header, Footer, ValueCard, ...)
│   ├── content/           # Conteúdo em Markdown (values, games)
│   ├── data/site.ts       # Config global do site
│   ├── layouts/           # BaseLayout (SEO, header/footer)
│   ├── lib/               # Utilitários (icons)
│   ├── pages/             # Rotas
│   └── styles/global.css  # Tokens de design + Tailwind
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
