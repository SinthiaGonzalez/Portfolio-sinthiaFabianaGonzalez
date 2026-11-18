# Portfolio · Sinthia Fabiana González

Portfolio personal publicado en [sinthiagonzalez.com](https://sinthiagonzalez.com).

## Tecnologías

- [Astro](https://astro.build): web estática y rápida
- [React](https://react.dev): componentes interactivos (islas de Astro)
- [Tailwind CSS](https://tailwindcss.com): estilos, con los colores y fuentes del diseño de Figma
- [Motion](https://motion.dev): animaciones (elementos que flotan y se balancean)
- Despliegue: Cloudflare Workers (archivos estáticos), conectado a GitHub

## Comandos

| Comando           | Qué hace                                       |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Instala las dependencias                       |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`     |
| `npm run build`   | Genera la web estática en `dist/`              |
| `npm run preview` | Sirve en local la versión generada             |

## Estructura

```
src/
  assets/       imágenes optimizadas por Astro
  components/   componentes (React .tsx y Astro .astro)
  layouts/      plantilla base de la página
  pages/        rutas (index.astro = página principal)
  styles/       global.css con los tokens del diseño
public/         archivos que se sirven tal cual (favicon)
```
