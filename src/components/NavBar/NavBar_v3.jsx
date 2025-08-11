import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function NavBar_v3() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="bg-purple-500 uppercase relative">
      <div className="h-16 items-center flex justify-between px-4">
        {/* Logo */}
        <div className="text-3xl text-white font-bold">Logo</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-100 text-lg">
            Inicio
          </Link>
          <Link to="/about-us" className="text-gray-100 text-lg">
            About
          </Link>
          <Link to="/recipes" className="text-gray-100 text-lg">
            Services
          </Link>
          <Link to="/animations" className="text-gray-100 text-lg">
            Animations 1
          </Link>
          <Link to="/farm-life" className="text-gray-100 text-lg">
            Farm Life
          </Link>
        </div>

        {/* Mobile toggle button */}
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />

      </div>

      {/* Animated responsive menu */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={nav}
        className="md:hidden absolute top-full left-0 w-full bg-purple-700 overflow-hidden"
      >
        <motion.div style={background} variants={sidebarVariants} />
        <Navigation />
      </motion.nav>
    </nav>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul style={list} variants={navVariants}>
    {[0, 1, 2, 3, 4].map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }) => {
  const border = `2px solid ${colors[i]}`;
  // You can customize the link URLs and text here
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/about-us", label: "About" },
    { to: "/recipes", label: "Services" },
    { to: "/animations", label: "Animations 1" },
    { to: "/farm-life", label: "Farm Life" },
  ];
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={links[i].to}
        className="text-white uppercase"
        style={{ borderBottom: border, paddingBottom: "4px" }}
      >
        {links[i].label}
      </Link>
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="block md:hidden text-white w-12 h-12 relative"
    style={toggleContainer}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        initial="closed"
        animate={null}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        initial="closed"
        animate={null}
      />
    </svg>
  </button>
);

/**
 * ==============   Styles   ================
 */

const container = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  width: 500,
  maxWidth: "100%",
  height: 400,
  backgroundColor: "var(--accent)",
  borderRadius: 20,
  overflow: "hidden",
};

const nav = {
  width: "100%",
  position: "relative",
  overflow: "visible",
  zIndex: 50,
};

const background = {
  backgroundColor: "#6b21a8", // purple-700
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 300,
  zIndex: -1,
  borderRadius: "0 0 20px 20px",
};

const toggleContainer = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "relative",
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const list = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "relative",
  top: 10,
  width: "100%",
};

const listItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: "10px 0",
  cursor: "pointer",
};

const iconPlaceholder = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  flex: "40px 0",
  marginRight: 20,
};

const textPlaceholder = {
  borderRadius: 5,
  width: 200,
  height: 20,
  flex: 1,
};

/**
 * ==============   Utils   ================
 */

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
