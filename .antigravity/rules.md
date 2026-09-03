# ALF WORKS - Workspace Rules & Architectural Guidelines

## Project Context
- Brand: ALF Works (alfworks.com)
- Core Concept: "Oficina de projetos" / Venture Studio founded by Alfredo, Luísa, and Filipe (ALF).
- Primary Service Spotlight: Strategic SME Consulting & Operational Troubleshooting.
- Secondary Pillars: Digital Studio, Venture Incubator, AI/Automation Systems, Content Hub.

## Design Identity: Swiss Graphic Design (International Typographic Style)
- Grid: Strict modular grid layout, clear vertical/horizontal alignment, and subtle 1px divider lines (`border-zinc-200`).
- Palette: Clean off-white background (`bg-[#F9F9FB]`), deep neutral dark text (`text-[#111111]`), slate secondary accents (`text-[#666666]`), and a deliberate focal color (Swiss Red `#E11D48`).
- Typography: Sans-serif grotesque/geometric font (Inter or Plus Jakarta Sans). Heavy headlines, tight tracking, readable body text, and high whitespace ratio.
- Strictly avoid: Heavy fuzzy drop shadows, bloated gradients, or excessive decorative elements.

## Tech Stack & Conventions
- Framework: Astro (Static Site Generation / SSG).
- Styling: Tailwind CSS.
- Icons: `lucide-astro`.
- Hosting & Deploy: Target is Netlify with automated CI/CD via GitHub.
- Forms: Static Netlify Forms (`data-netlify="true"`). No client-heavy form libraries.
- Copy / Content Language: All public-facing website copy MUST be in professional European Portuguese (pt-PT). Code, comments, and file names in English.

## Posicionamento de Serviços & Produto Principal
- Modelo de Negócio: Boutique de Intervenção Rápida (Diagnóstico -> Solução -> Implementação).
- Produto Estrela: "Intervenção Rápida PME" (Avaliação global de 5 eixos com plano de ação em 7 dias).
- 4 Pilares de Intervenção PME: 
  1. Operações & Eficiência
  2. Controlo Financeiro & Margens
  3. Presença Digital & Ativação de Vendas
  4. Automação, Integrações & IA Prática
- Soluções Corporativas (Secção Secundária de Autoridade): Marketing de grandes ativos, direção interina de projetos e eventos institucionais.
- Perfis do Trio:
  * Alfredo: Estratégia Empresarial, Controlo Financeiro & Otimização de Margens.
  * Luísa: Direção de Marketing, Ativação Comercial, Experiência de Cliente & Grandes Ativos.
  * Filipe: Arquitetura de Software, Integração de Sistemas & Automações com IA.

## Git Automation Policy
- After completing any requested code modification, bug fix, or refactor:
  1. Verify the project builds (`npm run build`).
  2. Automatically stage all changes (`git add .`).
  3. Create a semantic commit describing the changes made (`git commit -m "update: <brief description>"`).
  4. Push directly to the remote repository (`git push origin main`).
