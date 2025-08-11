import React from 'react'
import { motion } from 'motion/react'
import { CiLineHeight } from 'react-icons/ci';

function TextAnimation() {
    return (
        <section className='grid  place-content-center gap-2  h-screen bg-sky-200 text-slate-800 mx-auto p-6'>

            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">Linkedin</FlipLink>
            <FlipLink href="#">Facebook</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>

            <div>Otra cosa</div>

        </section>
    )
}
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            // transition={{
            //     staggerChildren:0.2,
            // }}
            className='block relative overflow-hidden whitespace-nowrap uppercase font-bold 
        text-4xl sm:text-7xl md:text-8xl lg:text-9xl'
        style={{ lineHeight:0.75}}>
            {/* <motion.div
        variants={{
            initial:{y:0},
            hovered:{y:"-100%"}
        }}>
            {children}
        </motion.div>
        <motion.div
        className='absolute inset-0'
        variants={{
            initial:{y:"100%"},
            hovered:{y:0}
        }}>
            {children}
        </motion.div> */}
            <div >
                {children.split("").map((letter, index) => (
                    <motion.span key={index} 
                    
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" }
                        }}
                        transition={{
                            duration: DURATION,
                            ease:"easeInOut",
                            delay: STAGGER*index,
                        }}
                        className='inline-block'
                    >{letter}</motion.span>
                ))}
            </div>
            <div className='absolute inset-0'>
                {children.split("").map((letter, index) => (
                    <motion.span key={index}
                        variants={{
                            initial: { y: "100%",scale:0.9 },
                            hovered: { y: 0 ,scale:1}
                        }}
                          transition={{
                            duration: DURATION,
                            ease:"easeInOut",
                            delay: STAGGER*index,
                        }}
                        className='inline-block'
                    >
                        {letter}</motion.span>
                ))}
            </div>
        </motion.a>
    )
}

export default TextAnimation