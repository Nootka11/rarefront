"use client";

import { motion } from "motion/react";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

export const SidebarMenu = ({ isOpen }) => {
  return (
    <motion.aside
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 p-6"
    >
      <nav>
        <ul className="space-y-6 text-lg">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </motion.aside>
  );
};
