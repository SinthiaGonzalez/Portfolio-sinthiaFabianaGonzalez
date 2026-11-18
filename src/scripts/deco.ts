// Anima toda la decoración botánica (componente Deco.astro) cuando entra en pantalla.
// Una sola vez por pieza; con "reducir movimiento" no se ejecuta y todo se ve quieto.
import { animate, inView, reducedMotion, easeOut } from './motion';
import { animatePlanta } from './planta';

if (!reducedMotion()) {
  const opts = { amount: 0.15 };

  // Laurel y olivo: el tallo crece, las hojas se abren y luego la rama se mece entera
  // (si la rama va dentro de otro dibujo SVG, como en el Inicio, se observa ese dibujo:
  //  el navegador no detecta la visibilidad de un SVG anidado)
  document.querySelectorAll<SVGSVGElement>('[data-planta]').forEach((el) => {
    inView(el.ownerSVGElement ?? el, () => animatePlanta(el, 0.1), opts);
  });

  // Ramas de acento: aparecen y se balancean despacio
  document.querySelectorAll<SVGElement>('[data-deco="sway"]').forEach((el, i) => {
    inView(
      el,
      () => {
        animate(el, { opacity: [0, 1], scale: [0.85, 1] }, { duration: 0.9, ease: easeOut }).then(() =>
          animate(el, { rotate: [0, 3, -2, 0] }, { duration: 7 + (i % 3), ease: 'easeInOut', repeat: Infinity }),
        );
      },
      opts,
    );
  });

  // Hojas que caen: bajan balanceándose y girando hasta el final de su sección,
  // se desvanecen y, tras una pausa, vuelven a caer desde arriba (sin parar)
  document.querySelectorAll<SVGElement>('[data-deco="fall"]').forEach((el, i) => {
    const section = el.closest('section') ?? document.body;
    const caer = () => {
      // distancia hasta el final de la sección, medida cada vez (por si cambia el tamaño de la ventana)
      el.style.transform = 'none';
      const dist = section.getBoundingClientRect().bottom - el.getBoundingClientRect().top - 50;
      const lado = i % 2 ? -1 : 1;
      animate(
        el,
        {
          y: [0, dist],
          x: [0, 28 * lado, -18 * lado, 22 * lado, 0],
          rotate: [0, 70 * lado, 160 * lado, 250 * lado],
          opacity: [0, 1, 1, 1, 0],
        },
        { duration: 9 + (i % 3) * 1.5, ease: 'linear' },
      ).then(() => setTimeout(caer, 800 + Math.random() * 2200));
    };
    inView(el.closest('section') ?? el, () => void setTimeout(caer, i * 2500), opts);
  });

  // Hojas sueltas: aparecen y flotan como si las moviera el aire
  document.querySelectorAll<SVGElement>('[data-deco="float"]').forEach((el, i) => {
    inView(
      el,
      () => {
        animate(el, { opacity: [0, 1] }, { duration: 0.8, ease: easeOut, delay: 0.3 }).then(() =>
          animate(el, { y: [0, -8, 0], rotate: [0, i % 2 ? 10 : -10, 0] }, { duration: 5 + (i % 3), ease: 'easeInOut', repeat: Infinity }),
        );
      },
      opts,
    );
  });
}
