# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# 🚢 Deploy to Netlify

Follow these simple steps to deploy this static Astro landing to Netlify:

- **Build command:** `pnpm run build`
- **Publish directory:** `dist`
- **Package manager:** Netlify will detect `pnpm` automatically if `pnpm-lock.yaml` is present.

Steps:

1. Push this repo to GitHub (or your Git provider).
2. In Netlify, choose "New site from Git" → connect your GitHub account and select this repo.
3. Netlify will read `netlify.toml`; if needed, set **Build command** to `pnpm run build` and **Publish directory** to `dist` in the UI.
4. Trigger a deploy — Netlify will install with `pnpm` and run the build.

Local checks:

```bash
pnpm install
pnpm build
pnpm preview
```

Notes:

- If you want to pin a Node version for Netlify, `.nvmrc` is included (`18`).
- No backend is required for a static landing. Consider Cloudflare for advanced DNS/WAF features later.

# landing-ropa
# landing-ropa
