import React from 'react'
import {motion} from 'motion/react'

const LettersColorHover = ({text}) => {
    const DURATION = 0.75;
    const STAGGER = 0.055;
  return (

    <>
    <motion.span 
    initial="initial"
    whileHover="hovered">

    
    {text.split("").map((letter, index) => (
                        
                         <motion.span key={index}
                         
                         style={{
                            color:'#39756B'
                         }}
                         variants={{
                            initial: { color: '#39756B' },
                            hovered: { color: ["#B2D5B5", "#D5D07C",  "#FDAF11","#FE8CA3"],
                                fontWeight: 400, 
                             }
                        }}
                        transition={{
                            duration: DURATION,
                            ease:"easeInOut",
                            delay: STAGGER*index,
                        }}
                        > {letter}
                        </motion.span>
    ))}
    </motion.span>
    </>
   
  )
}

export default LettersColorHover