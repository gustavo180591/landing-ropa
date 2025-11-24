/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color, #3B82F6)',
        secondary: 'var(--secondary-color, #1E40AF)',
        accent: 'var(--accent-color, #F59E0B)',
      },
    },
  },
  plugins: [],
}
