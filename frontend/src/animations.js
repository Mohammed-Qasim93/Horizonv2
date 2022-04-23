export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const slideInUp = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const slideInDown = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const slideOut = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const slideOutLeft = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const shake = {
  hidden: {
    opacity: 0,
    rotate: -10,
  },
  show: {
    opacity: 1,
    rotate: 0,
  },
};
