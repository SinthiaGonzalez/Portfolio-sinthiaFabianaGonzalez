import { motion, useReducedMotion } from 'motion/react';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Avatar que flota suavemente (isla de React animada con Motion). */
export default function FloatingAvatar({ src, alt, width, height }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-auto w-[min(240px,65%)] drop-shadow-[0_18px_24px_rgba(74,84,55,0.15)] md:w-[min(360px,80%)]"
      initial={{ opacity: 0, y: 24 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -14, 0] }}
      transition={
        reduceMotion
          ? { duration: 0.4 }
          : {
              opacity: { duration: 0.6 },
              y: { duration: 6, ease: 'easeInOut', repeat: Infinity },
            }
      }
    />
  );
}
