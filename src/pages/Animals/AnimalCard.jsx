import React, { useRef } from 'react'
import { API_URL } from '../../../.config'
import { motion } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const AnimalCardRounded = ({index, a, bgClass, position }) => {
  const scrollRef = useRef(null)
 
  return (
    <motion.div
       ref={scrollRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative my-6 w-[95%] sm:w-[85%] md:w-[70%] h-35 md:h-50 ${position === 'left' ? 'self-start rounded-e-full' : 'self-end rounded-s-full'
        } ${bgClass}  ${position === 'left' && (index === 6 ? 'pl-5' : 'pl-10')}`}
    >
      <div className={`relative top-[10%] flex  md:flex-row  ${position === 'right' && 'flex-row-reverse' } items-center`}>
        <div className={` pt-6 ${position === 'right' ? 'text-right mr-2 relative w-3/4 md:w-full' : 'w-3/4'}           
            `}>
          <h2 className='relative -top-5 sm:top-0 z-20 bordered_letter text-4xl md:text-5xl font-bold text-fondo-claro w-1/2 float-right md:w-full'>
            {a.commonName}
          </h2>
          <p className={`hidden md:block text-slate-800 mt-3 md:max-w-3/4 ${position === 'right' && 'md:float-right '}`}
          >{a.description}</p>
         
        </div>
        <motion.div
         variants={imageVariants}
          className={`absolute aspect-square max-h-44 md:max-h-64 object-contain content-center
                ${position === 'right' ? 'left-0 md:left-6 ' : 'right-0'}              
              `}>
                <img
                src={
                  a.imageTransparentUrl
                    ? `${API_URL}${a.imageTransparentUrl}`
                    : `${API_URL}${a.imageUrl}`
                }
            // src={`${API_URL}${a.imageUrl}`}
            alt={a.commonName} />
        </motion.div>

      </div>


    </motion.div>
  )
}

export default AnimalCardRounded