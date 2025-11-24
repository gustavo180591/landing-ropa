# 🛍️ Tienda de Ropa - Landing Page

Bienvenido al repositorio de la tienda de ropa online, construida con Astro, Tailwind CSS y TypeScript.

## 🚀 Características

- 🎨 Diseño moderno y responsivo
- ⚡ Rendimiento óptimo con Astro
- 🛒 Gestión de productos con TypeScript
- 📱 Compatible con móviles
- 🌈 Estilos con Tailwind CSS

## 🏗️ Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes reutilizables
│   ├── content/        # Contenido en Markdown
│   ├── layouts/        # Plantillas de diseño
│   ├── lib/            # Utilidades y lógica
│   └── pages/          # Rutas de la aplicación
├── docs/               # Documentación
└── tailwind.config.mjs # Configuración de Tailwind
```

## 🚀 Comandos principales

| Comando             | Acción                                     |
|---------------------|--------------------------------------------|
| `pnpm install`      | Instalar dependencias                      |
| `pnpm dev`          | Iniciar servidor de desarrollo             |
| `pnpm build`        | Construir para producción                  |
| `pnpm preview`      | Vista previa de la compilación             |
| `pnpm astro ...`    | Comandos de Astro CLI                      |

## 🛠️ Tecnologías

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PNPM](https://pnpm.io/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más información.

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 🚀 Despliegue

Este proyecto está configurado para desplegarse en Netlify. Simplemente haz push a la rama `main` para desplegar automáticamente.

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
