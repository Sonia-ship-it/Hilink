export const fadeInUp = {
    initial: {opacity: 0, y:30},
    animate: {opacity: 1, y:0},
    exit: {opacity: 0, y:-30},
};
export const fadeInDown = {
    initial: {opacity: 0, y:-30},
    animate: {opacity: 1, y:0},
    exit: {opacity: 0, y:30},
};
export const fadeInDown2 = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInLeft = {
    initial: {opacity: 0, x:-50},
    animate: {opacity: 1, x:0},
    exit: {opacity: 0, x:50},
};
export const fadeInRight = {
    initial: {opacity: 0, x:30},
    animate: {opacity: 1, x:0},
    exit: {opacity: 0, x:-30},
};
export const scaleUp ={
    initial: {opacity: 0, scale: 0.8},
    animate: {opacity: 1, scale: 1},
    exit: {opacity: 0, scale: 0.9},
};

export const zoomIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};
export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 10 },
};
export const fadeInLeftStaggered = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,      
      stiffness: 50,
      damping: 15,
      staggerChildren: 0.2, 
    },
  },
};
export const zoomInSlight = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
}

export const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}



