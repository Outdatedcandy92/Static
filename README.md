# Static — website

The site for **Static**, a Hack Club YSWS: design an FM radio PCB + case,
submit it, and Hack Club ships the parts to build it — free, for teenagers
19 and under.

## Stack

- **SvelteKit** with `@sveltejs/adapter-static` — fully static output, no
  backend/server dependency (`export const prerender = true` in
  `src/routes/+layout.js`).
- **mdsvex** — markdown guide pages under `src/routes/guides/<slug>/+page.md`
  compile like any other route.
- Plain CSS design tokens for the Windows 98 look in `src/app.css` (no
  design-system Figma file was available at build time — see the note at
  the top of that file).

## Structure

```
src/
  app.html            Google Fonts (Silkscreen + Pixelify Sans), favicon
  app.css             Win98 design tokens + shared section/bevel utilities
  lib/
    components/       TitleBar, MenuBar, WindowPanel, Win98Button
    sections/         Hero, HowItWorks, GetStarted, Faq — the 4 page sections
  routes/
    +layout.svelte    Persistent title bar + menu bar, measures their
                       height into --chrome-h so each 100vh section fills
                       exactly the remaining viewport
    +page.svelte      Single scrolling page: Hero → HowItWorks → GetStarted → Faq
    guides/
      +page.svelte    Guide index
      pcb-design/+page.md   Placeholder guide (mdsvex)
```

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs static HTML/CSS/JS to build/
npm run preview
```

## Known placeholders to swap later

- `static/images/*.png` — cropped straight from the wireframes as stand-ins
  for the hero radio photo and the 4 "how it works" step screenshots.
- `GetStarted.svelte` — pass an `embedUrl` prop (YouTube/Vimeo) to replace
  the grey placeholder box with a real embed.
- `Faq.svelte` — five of the six cards have lorem-ipsum bodies; only "What
  is Hack Club?" has real copy.
- Menu bar (File/Edit/Options/Help) is decorative but anchor-links to the
  four sections — revisit if that mapping should change.
- Design tokens in `src/app.css` were inferred from the wireframes, not
  pulled from Figma — reconcile if/when the Figma file is available.
