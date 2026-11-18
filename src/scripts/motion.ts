// Utilidades compartidas para las animaciones con Motion.
import { inView } from 'motion';
export { animate, stagger, inView } from 'motion';

/** true si la persona ha pedido en su sistema reducir el movimiento. */
export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Curva suave de salida (rápida al principio, frena al final). */
export const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Ejecuta `cb` la PRIMERA vez que el elemento entra en pantalla y deja de vigilarlo.
 * (inView de Motion avisa cada vez que vuelve a entrar; si no se para, las animaciones
 * se reinician al hacer scroll arriba y abajo y se acaban sincronizando.)
 */
export function onceInView(el: Element, cb: () => void, options?: Parameters<typeof inView>[2]) {
  let done = false;
  const stop = inView(
    el,
    () => {
      if (done) return;
      done = true;
      cb();
      stop?.();
    },
    options,
  );
}
