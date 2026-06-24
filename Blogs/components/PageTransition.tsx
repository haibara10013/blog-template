"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -12, opacity: 0 }}
      transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.3 }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}