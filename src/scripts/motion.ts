// Utilidades compartidas para las animaciones con Motion.
export { animate, stagger, inView } from 'motion';

/** true si la persona ha pedido en su sistema reducir el movimiento. */
export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Curva suave de salida (rápida al principio, frena al final). */
export const easeOut = [0.22, 1, 0.36, 1] as const;
