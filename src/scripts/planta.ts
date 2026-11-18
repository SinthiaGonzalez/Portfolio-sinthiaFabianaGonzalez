// Animación de las ramas (RamaOlivo.astro, RamaLaurel.astro):
// 1) el tallo aparece desde la base hacia arriba, 2) las hojas se abren una a una
//    desde donde nacen, 3) después la rama entera se mece suavemente, sin parar.
import { animate, easeOut } from './motion';

export function animatePlanta(svg: SVGElement, delay = 0) {
  const tallo = svg.querySelectorAll<SVGPathElement>('[data-tallo-relleno]');
  const hojas = [...svg.querySelectorAll<SVGGElement>('.hoja')];
  const cuerpo = svg.querySelector<SVGGElement>('[data-planta-cuerpo]');
  const growTime = 1.6;

  // El tallo es una forma rellena: se descubre de abajo arriba con un recorte
  animate(tallo, { clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] }, { duration: growTime, ease: 'easeInOut', delay });

  hojas.forEach((hoja, i) => {
    // cada hoja se abre cuando el tallo "llega" a su altura
    const leafDelay = delay + 0.15 + (i / hojas.length) * growTime;
    animate(hoja, { opacity: [0, 1], scale: [0, 1] }, { duration: 0.7, ease: easeOut, delay: leafDelay });
  });

  // La rama se mece entera, como una sola pieza desde la base: así las hojas
  // nunca se separan del tallo (si cada hoja girase por su cuenta, se verían "trozos").
  if (cuerpo) {
    animate(cuerpo, { rotate: [0, 2.5, -1.5, 0] }, { duration: 8, ease: 'easeInOut', repeat: Infinity, delay: delay + growTime + 0.5 });
  }
}
