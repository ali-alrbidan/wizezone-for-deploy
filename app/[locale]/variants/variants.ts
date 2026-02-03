// variants.ts
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const cardHoverVariants = {
  hover: {
    y: -8,
    borderColor: "#FF5B25",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

export const accentLineVariants = {
  hidden: { width: "32px" },
  hover: {
    width: "56px",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};