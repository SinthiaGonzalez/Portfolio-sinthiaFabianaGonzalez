// Anima toda la decoración botánica (componente Deco.astro) cuando entra en pantalla.
// Cada animación arranca UNA sola vez (onceInView); con "reducir movimiento" no se
// ejecuta nada y todo se ve quieto.
import { animate, reducedMotion, easeOut, onceInView } from './motion';
import { animatePlanta } from './planta';

if (!reducedMotion()) {
  const opts = { amount: 0.15 };
  const azar = (min: number, max: number) => min + Math.random() * (max - min);

  // Laurel y olivo: el tallo crece, las hojas se abren y luego la rama se mece entera
  // (si la rama va dentro de otro dibujo SVG, como en el Inicio, se observa ese dibujo:
  //  el navegador no detecta la visibilidad de un SVG anidado)
  document.querySelectorAll<SVGSVGElement>('[data-planta]').forEach((el) => {
    onceInView(el.ownerSVGElement ?? el, () => animatePlanta(el, 0.1), opts);
  });

  // Ramas de acento: aparecen y se balancean despacio
  document.querySelectorAll<SVGElement>('[data-deco="sway"]').forEach((el, i) => {
    onceInView(
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
  // se desvanecen y, tras una pausa, vuelven a caer desde arriba (sin parar).
  // Cada hoja tiene su propio retraso inicial, velocidad y pausa al azar,
  // así nunca caen todas a la vez.
  document.querySelectorAll<SVGElement>('[data-deco="fall"]').forEach((el, i) => {
    const section = el.closest('section') ?? document.body;
    const caer = () => {
      // distancia hasta el final de la sección, medida cada vez (por si cambia el tamaño de la ventana)
      el.style.transform = 'none';
      const dist = section.getBoundingClientRect().bottom - el.getBoundingClientRect().top - 50;
      const lado = Math.random() < 0.5 ? -1 : 1; // gira y se balancea hacia un lado distinto cada vez
      animate(
        el,
        {
          y: [0, dist],
          x: [0, 28 * lado, -18 * lado, 22 * lado, 0],
          rotate: [0, 70 * lado, 160 * lado, 250 * lado],
          opacity: [0, 1, 1, 1, 0],
        },
        { duration: azar(8, 13), ease: 'linear' },
      ).then(() => setTimeout(caer, azar(1500, 5000)));
    };
    // la primera hoja cae enseguida y las demás bastante después, en orden distinto cada visita
    onceInView(section, () => void setTimeout(caer, i * 3500 + azar(0, 2000)), opts);
  });

  // Hojas sueltas: aparecen y flotan como si las moviera el aire
  document.querySelectorAll<SVGElement>('[data-deco="float"]').forEach((el, i) => {
    onceInView(
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
