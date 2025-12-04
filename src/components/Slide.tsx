"use client";

import React from "react";
import { motion } from "framer-motion";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function Slide({ children, className = "" }: SlideProps) {
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className={`absolute w-full h-full flex flex-col items-center justify-center p-12 ${className}`}
    >
      {children}
    </motion.div>
  );
}
