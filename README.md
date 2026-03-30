# Gema Rada Landing

Landing page premium y mobile-first para `gemarada.com`, construida con Next.js y Tailwind CSS.

## Requisitos

- Node.js 20.9 a 24.x
- Recomendado: Node 22 LTS
- npm, pnpm o yarn

## Comandos

```bash
npm install
npm run dev
```

Si estás usando Node 25 y ves errores relacionados con `localStorage` durante `next dev`, cambia a Node 22 LTS o Node 24 estable antes de ejecutar el proyecto.

## Puntos rápidos de edición

- WhatsApp, email y enlaces sociales: `components/sections/header.tsx`, `components/sections/contact.tsx`, `components/sections/footer.tsx`
- Copy principal y servicios: `lib/data.ts`
- SEO y metadatos: `app/layout.tsx`, `app/page.tsx`
- Imagen de Gema: `components/sections/hero.tsx`

## Recomendación de imagen

- Retrato vertical de al menos `1200 x 1600 px`
- Fondo limpio, luz suave, vestimenta profesional, expresión cálida y segura
- Si luego quieres usar una imagen local, colócala en `public/` y reemplaza la URL remota del hero
