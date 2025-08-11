import React, { useRef } from 'react'
import { motion } from 'motion/react';

const AboutUsBlocks = ({ title, text, position }) => {
  const scrollRef = useRef(null)
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1*position }}
        viewport={{ root: scrollRef }}
        className='py-5 text-9xl bordered_letter font-extrabold text-fondo-claro'>{position}</motion.div>
      <motion.div>
        <div
          className='border-y py-5 text-lg font-bold overflow-hidden'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.17*position }}
            viewport={{ root: scrollRef }}
          >
            {title}
          </motion.div>
        </div>
        <motion.p 
        
        className='py-5 font-medium text-sm'>
          {text}</motion.p>
      </motion.div>
    </div>
  )
}

export default AboutUsBlocks