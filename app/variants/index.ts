import { Variants } from "framer-motion";

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  export const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        autoplay: true,
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  export const slideVariants: Variants = {
    enter: { opacity: 0, scale: 0.95 },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, scale: 1.05 },
  };

export   const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
    tap: { scale: 0.95 },
  };

 export  const navButtonVariants: Variants = {
    initial: { opacity: 0.8, scale: 1 },
    hover: {
      opacity: 1,
      scale: 1.1,
  
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    tap: { scale: 0.9 },
  };
 export  const lineVariants: Variants = {
       hidden: { width: 0, opacity: 0 },
    visible: {
      width: 60,
      opacity: 1,
      transition: {
        type: "spring",
        autoplay: true,
        stiffness: 100,
        damping: 12,
        delay: 0.3,
        duration: 0.9,
      },
    },
  };
    export const paragraghVariant: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        autoplay: true,
        stiffness: 100,
        damping: 12,
        duration: 0.5,
        delay:0.3
      },
    },
  };