// Anima toda la decoración botánica (componente Deco.astro) cuando entra en pantalla.
// Cada animación arranca UNA sola vez (onceInView); con "reducir movimiento" no se
// ejecuta nada y todo se ve quieto.
import { animate, reducedMotion, easeOut, onceInView } from './motion';
import { animatePlanta } from './planta';

if (!reducedMotion()) {
  const opts = { amount: 0.15 };
  const azar = (min: number, max: number) => min + Math.random() * (max - min);
  const amp = (el: SVGElement) => Number(el.dataset.sway ?? 3);

  // Laurel y olivo: el tallo crece, las hojas se abren y luego la rama se mece entera
  // (si la rama va dentro de otro dibujo SVG, como en el Inicio, se observa ese dibujo:
  //  el navegador no detecta la visibilidad de un SVG anidado)
  document.querySelectorAll<SVGSVGElement>('[data-planta]').forEach((el) => {
    onceInView(el.ownerSVGElement ?? el, () => animatePlanta(el, 0.1), opts);
  });

  // Ramas de acento: aparecen y se balancean despacio
  // (si van dentro de otra ilustración SVG se observa la ilustración, como con laurel y olivo)
  document.querySelectorAll<SVGElement>('[data-deco="sway"]').forEach((el, i) => {
    onceInView(
      (el as SVGGraphicsElement).ownerSVGElement ?? el,
      () => {
        animate(el, { opacity: [0, 1], scale: [0.85, 1] }, { duration: 0.9, ease: easeOut }).then(() =>
          // data-sway="0.6" permite un balanceo más suave en piezas grandes (por defecto 3°)
          animate(el, { rotate: [0, amp(el), -amp(el) * 0.66, 0] }, { duration: (el.dataset.sway ? 10 : 7) + (i % 3), ease: 'easeInOut', repeat: Infinity }),
        );
      },
      opts,
    );
  });

  // Hojas que caen: bajan balanceándose y girando hasta el final de su sección,
  // se desvanecen y, tras una pausa, vuelven a caer desde arriba (sin parar).
  // Cada hoja tiene su propio retraso inicial, velocidad y pausa al azar,
  // así nunca caen todas a la vez.
  // Si la hoja está dentro de una zona marcada con data-fall-area (p. ej. la ilustración de
  // "Sobre mí"), cae solo hasta el final de esa zona; si no, hasta el final de su sección.
  document.querySelectorAll<SVGElement>('[data-deco="fall"]').forEach((el) => {
    const section = el.closest('section') ?? document.body;
    const area = el.closest<SVGSVGElement | HTMLElement>('[data-fall-area]');
    const limite = area ?? section;
    const caer = () => {
      // distancia hasta el final de la zona, medida cada vez (por si cambia el tamaño de la ventana)
      el.style.transform = 'none';
      let dist = limite.getBoundingClientRect().bottom - el.getBoundingClientRect().top - (area ? 10 : 50);
      // dentro de un SVG el movimiento va en unidades del dibujo: se convierte desde píxeles
      if (area instanceof SVGSVGElement && area.viewBox.baseVal?.width) {
        dist /= area.getBoundingClientRect().width / area.viewBox.baseVal.width;
      }
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
      ).then(() => setTimeout(caer, area ? azar(400, 2200) : azar(1500, 5000)));
    };
    // la primera hoja cae enseguida y las demás bastante después, en orden distinto cada visita
    // orden dentro de su propia zona (no entre todas las hojas de la página);
    // en una zona con muchas hojas (data-fall-area) salen más seguidas
    const j = [...limite.querySelectorAll('[data-deco="fall"]')].indexOf(el);
    onceInView(section, () => void setTimeout(caer, j * (area ? 1300 : 3500) + azar(0, 1500)), opts);
  });

  // Manchas que se deforman ligeramente (Decor con `morph`): siguen siendo redondas, pero sus
  // bordes se aplanan y se abomban poco a poco, en bucle. Todas las formas tienen los mismos
  // puntos, así que basta con interpolar los números del trazado.
  const formas = [
    'M120 10 C190 0 250 60 240 140 C232 210 170 250 110 236 C46 222 4 170 10 108 C15 52 60 18 120 10Z',
    'M140 22 C214 18 248 84 236 156 C222 226 140 248 92 226 C34 200 18 150 30 98 C40 46 84 26 140 22Z',
    'M100 4 C176 2 238 40 232 120 C226 196 196 246 124 248 C56 250 6 196 4 124 C2 56 36 8 100 4Z',
    'M126 30 C186 26 226 74 224 140 C222 206 182 244 108 246 C36 248 2 196 6 120 C12 60 70 34 126 30Z',
    'M118 4 C200 2 248 40 248 118 C246 190 176 228 116 226 C56 224 16 182 14 116 C12 54 50 8 118 4Z',
  ];
  const nums = formas.map((f) => f.match(/-?\d+(\.\d+)?/g)!.map(Number));
  const plantilla = formas[0].split(/-?\d+(?:\.\d+)?/);
  document.querySelectorAll<SVGPathElement>('[data-morph]').forEach((path, i) => {
    const ciclo = [...nums, nums[0]];
    onceInView(path.ownerSVGElement ?? path, () => {
      animate(0, ciclo.length - 1, {
        duration: 11 + i * 2.5,
        ease: 'linear',
        repeat: Infinity,
        onUpdate: (v) => {
          const k = Math.min(Math.floor(v), ciclo.length - 2);
          const t = v - k;
          const e = t * t * (3 - 2 * t); // suavizado entre forma y forma
          const valores = ciclo[k].map((n, j) => (n + (ciclo[k + 1][j] - n) * e).toFixed(1));
          path.setAttribute('d', plantilla.map((txt, j) => txt + (valores[j] ?? '')).join(''));
        },
      });
    });
  });

  // Hojas sueltas: aparecen y flotan como si las moviera el aire
  document.querySelectorAll<SVGElement>('[data-deco="float"]').forEach((el, i) => {
    onceInView(
      (el as SVGGraphicsElement).ownerSVGElement ?? el,
      () => {
        animate(el, { opacity: [0, 1] }, { duration: 0.8, ease: easeOut, delay: 0.3 }).then(() =>
          animate(el, { y: [0, -8, 0], rotate: [0, i % 2 ? 10 : -10, 0] }, { duration: 5 + (i % 3), ease: 'easeInOut', repeat: Infinity }),
        );
      },
      opts,
    );
  });
}
