export const variants = {
    fadeLeft:  { initial: { opacity: 0, x: -40, scale: 0.9 }, animate: { opacity: 1, x: 0, scale: 1 }, exit: { opacity: 0, x: -40, scale: 0.9 } },
    fadeRight: { initial: { opacity: 0, x: 40,  scale: 0.9 }, animate: { opacity: 1, x: 0, scale: 1 }, exit: { opacity: 0, x: 40,  scale: 0.9 } },
    fadeTop:   { initial: { opacity: 0, y: -40, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -40, scale: 0.9 } },
    fadeBottom:{ initial: { opacity: 0, y: 40,  scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 40,  scale: 0.9 } },
    fadeScale: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 } },
    fadeRotate:{ initial: { opacity: 0, rotate: -8, scale: 0.9 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: { opacity: 0, rotate: -8, scale: 0.9 } },
  };
  