import React, { useRef } from 'react'
import { API_URL } from '../../../.config'
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: (customDelay) => ( {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.6,
      ease: "easeOut",
     
    })
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (customDelay) => ( {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  })
};

const PlanCardRounded = ({ v, bgClass, position, delay = 0, ready = false  }) => {
  const scrollRef = useRef(null)
  
  return (
    <motion.div
       ref={scrollRef}
       custom={delay}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative my-6 w-full md:w-[70%] h-50 ${position === 'left' ? 'self-start rounded-e-full pl-10' : 'self-end rounded-s-full'
        } ${bgClass}`}

    >
      <div className={`relative top-[5%] flex  ${position === 'right' && 'flex-row-reverse'} md:items-center`}>
        <div className={`relative p-6 md:w-2/3 ${position === 'right' ? 'md:float-right' : '-left-12 md:left-0'}`}>
          <h2 className={`relative z-10  bordered_letter text-5xl font-bold text-fondo-claro
             ${position === 'right' && 'text-right'}`}>
            {v.commonName}
          </h2>
          <p className={`hidden sm:block text-slate-800 mt-4 ${position === 'right' ? 'text-right max-w-[65%] float-right':'max-w-[75%]'}`}
          >{v.description}</p>
        </div>
        <motion.div
        custom={delay}
         variants={imageVariants}
        
          className={`absolute aspect-square h-46 md:h-64 object-fill content-center 
                ${position === 'right' ? 'left-0' : 'right-0'}`}
        ><img
            src={
              v.imageTransparentUrl
                ? `${API_URL}${v.imageTransparentUrl}`
                : `${API_URL}${v.imageUrl}`
            }
            alt={v.commonName} />
            </motion.div>

      </div>


    </motion.div>
  )
}

export default PlanCardRounded