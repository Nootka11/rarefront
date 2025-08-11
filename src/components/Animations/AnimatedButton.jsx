import React from 'react';
import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

const AnimatedButton = ({ text, href, type = "pink", size = "medium" ,  asSubmit = false }) => {
const typeStyles = {
    pink: `
      bg-[var(--color-rosa-fresa)] 
      hover:bg-pink-400 
      text-white
    `,
    orange: `
      bg-[var(--color-naranja-vida)] 
      hover:bg-orange-400 
      text-white
    `,
    pistachio: `
      bg-verde-pistacho
      hover:bg-lime-400 
      text-black
    `,
    calmgreen: `
      bg-[var(--color-verde-calma)] 
      hover:bg-green-300 
      text-black
    `,
    nightgreen:`
    bg-verde-noche
    hover:bg-verde-calma
    `,
  };
  const classes = typeStyles[type] || typeStyles.primary;

  const sizesStyles ={
    small:`rounded`,
    medium:`rounded-full w-auto max-w-max`,
    big:`rounded-lg w-60 py-3 px-6 mx-auto content-center text-center`,
  }
  const sizes = sizesStyles[size] || sizesStyles.medium;

  return (
    <>
    {asSubmit ? (
  <motion.button
    type="submit"
    initial="initial"
    whileHover="hovered"
    className="relative inline-block overflow-hidden whitespace-nowrap text-xl sm:text-lg text-white"
    style={{ lineHeight: 0.75 }}
  >
    {/* animación letras */}
    
    hola
      <div 
    className={`
        ${classes}
        ${sizes}
        py-3 px-4 
     uppercase
       text-center
      shadow-lg
      transition duration-300 ease-in`}
    
     >
          <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative inline-block overflow-hidden whitespace-nowrap text-xl sm:text-lg
      text-white"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {text.split("").map((letter, index) => (
          <motion.span
            key={`top-${index}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index
            }}
            className="inline-block"
          >
              {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((letter, index) => (
          <motion.span
            key={`bottom-${index}`}
            variants={{
              initial: { y: "100%", scale: 0.9 },
              hovered: { y: 0, scale: 1 }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
    </div>
  </motion.button>
) : (


    <div 
    className={`
        ${classes}
        ${sizes}
        py-3 px-4 
     uppercase
       text-center
      shadow-lg
      transition duration-300 ease-in`}
    
     >
          <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative inline-block overflow-hidden whitespace-nowrap text-xl sm:text-lg
      text-white"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {text.split("").map((letter, index) => (
          <motion.span
            key={`top-${index}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index
            }}
            className="inline-block"
          >
              {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((letter, index) => (
          <motion.span
            key={`bottom-${index}`}
            variants={{
              initial: { y: "100%", scale: 0.9 },
              hovered: { y: 0, scale: 1 }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
    </div>
    )}
  </>
  );
  
};

export default AnimatedButton;
