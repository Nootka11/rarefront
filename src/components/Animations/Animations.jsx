import React, { useContext, useEffect, useRef } from 'react'
import { AnimalContext } from '../../context/AnimalContext.jsx';
import { API_URL } from '../../../.config';
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "motion/react"

const gridContainerVariants = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const gridSquareVariants = {
    hidden: { opacity: 0 }, show: { opacity: 1 }

}

function MyAnimations() {
    const { scrollYProgress } = useScroll()
    const { animals } = useContext(AnimalContext);
     const scrollRef = useRef(null)
     const isInView = useInView(scrollRef,{once:true})
     const mainControls = useAnimation();
    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView]);

    return (
        <div className='container mx-auto'>
            <motion.div
                // id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
            <div className='bg-emerald-600 p-6'>
                <h1 className='text-3xl font-semibold'>Animations</h1>
                <p>con Motion</p>
            </div>
            <div className='flex flex-col gap-10 overflow-x-hidden'>

                <motion.section
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="show"
                    className='grid grid-cols-3 p-10 gap-10'>
                    <motion.div
                        variants={gridSquareVariants}
                        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="w-20 h-20 bg-stone-100 rounded-lg"></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                            className="w-20 h-20 bg-stone-100 rounded-full"></motion.div>
                    </motion.div>

                    {/* Shape Shifting */}
                    <motion.div variants={gridSquareVariants} className='bg-slate-700 aspect-square rounded-lg justify-center flex items-center gap-10'>
                        <motion.div
                            animate={{
                                scale: [1, 2, 2, 1],
                                rotate: [0, 90, 90, 0],
                                borderRadius: ["10%", "10%", "50%", "10%"],
                            }}
                            transition={{ duration: 5, ease: "easeInOut", repeat: 2, repeatDelay: 0.2 }}
                            className="w-1/3 h-1/3 shadow-md bg-rose-400"
                        ></motion.div>
                    </motion.div>

                    {/* Button */}
                    <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
                        <motion.button

                            whileTap={{ scale: 0.95 }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#d1d5db",
                                color: "#000000",
                            }}
                            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                            className="w-1/2 py-4 rounded-lg text-2xl text-canard-2 font-light tracking-wide bg-canard-1">
                            Subscribe</motion.button>
                    </motion.div>

                    {/* DRAG */}
                    <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
                        <motion.div
                            drag
                            dragConstraints={{
                                top: -125,
                                right: 125,
                                bottom: 125,
                                left: -125,
                            }}
                            dragTransition={{ bounce: 10, bounceStiffness: 600 }}
                            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"></motion.div>
                    </motion.div>

                    {/* SCROLL PROGRESS */}
                    <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
                        <motion.div className="w-40 aspect-square bg-amber-300 rounded-2xl">
                            <motion.div
                                className='w-full h-full bg-amber-700 origin-bottom'
                                style={{ scaleY: scrollYProgress }}></motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Animation SVG */}
                    <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
                        <motion.svg></motion.svg>
                    </motion.div>
                </motion.section>
            </div>

           
           
            <div className=''>
                {animals.map((animal, index) => (
                    <motion.div 
                     initial={{ opacity: 0 , scale:0.5}}
                    whileInView={{ opacity: 1, scale:1 }}
                             viewport={{ root: scrollRef }}
                            key={index} className='p-5 '>
                        <h3 className='text-2xl font-bold'>{animal.commonName}</h3>
                        <div className='mt-3'>


                            <img src={`${API_URL}${animal.imageUrl}`} alt={animal.commonName} className='h-100 w-full object-cover' />
                            <div className='mt-6'>{animal.description}</div>

                        </div>
                        <motion.div
                            initial={{ opacity: 0 , scale:0.5}}
                            whileInView={{ opacity: 1, scale:1 }}
                            // viewport={{ once: true }}
                             viewport={{ root: scrollRef }}
                            className='text-fuchsia-700 text-4xl font-bold'
                        >{animal.description}</motion.div>
                    </motion.div>

                ))}


            </div>
              <section className='flex flex-col gap-10 mb-10' ref={scrollRef}>
                <motion.h1 
                animate={mainControls}
                initial="hidden"
                variants={{
                    hidden:{opacity:0, y:75},
                    visible:{opacity:1, y:0},
                }}
                transition={{delay:0.3}}                
                className='text-5xl tracking-wide text-slate-800 text-center'>Just Keep Scrolling</motion.h1>
                <p className='text-slate-700 font-thin text-4xl w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia assumenda, libero consequatur repellat sint repellendus aspernatur repudiandae minima iste, eum omnis. Nemo quibusdam deserunt dolorum, reiciendis sequi cupiditate a.</p>
                <p className='text-slate-600 font-thin text-4xl w-1/2 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto excepturi ipsa voluptatem fugit distinctio, officia, pariatur consequuntur natus ipsum soluta dolorum numquam quisquam blanditiis vel labore non nam ullam.</p>
            </section>
            
        </div>
    )
}

export default MyAnimations