import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "motion/react"


function scrollAnimations() {
    const ref= useRef();
    const isInView = useInView(ref, {
        amount:"all",
    });
    // useEffect(()=>{
    //     console.log(`The element ${isInView ? "is" : "is NOT"} in view`)
    // })
  return (
    <div>
        <h1 className='text-4xl'>Scroll Animations</h1>


            <div className='flex flex-col gap-6'>
                 <div className="bg-indigo-500 h-90 w-full">j</div>
                  <div className="bg-indigo-500 h-90 w-full">j</div>
                  <div className="bg-indigo-500 h-90 w-full">j</div>
        <div className="bg-indigo-500 h-90 w-full">j</div>
        <div ref={ref} className="bg-emerald-100 w-full relative ">
            
            <div className="grid place-content-center p-6 h-90 ">
                <h2 className='text-6xl font-extrabold'>Show me on scroll</h2>
                <motion.div 
                animate={{
                    y: isInView ? "-100%" : "0%"
                }}
                className="absolute bottom-0 top-0 left-0 right-0 bg-amber-300 z-10 w-1/3"></motion.div>
                <motion.div 
                animate={{
                    y: isInView ? "100%" : "0%"
                }}
                className="absolute bottom-0 top-0 left-1/3 right-0 bg-amber-400 z-10 w-1/3"></motion.div>
                <motion.div 
                animate={{
                    y: isInView ? "-100%" : "0%"
                }}
                className="absolute bottom-0 top-0  left-2/3 right-0 bg-amber-500 z-10 w-1/3"></motion.div>
                

            </div>
            

        </div>
        <div className="bg-indigo-500 h-90 w-full"></div>
        <motion.div 
        initial={{ opacity:1}}
        whileInView={{opacity:0}}
        // viewport={{amount:"all"}}
        viewport={{margin:"-100px", once:false}}
        transition={{delay:0.3}}
        // onViewportEnter={()=>console.log('enter!!')}
        // onViewportLeave={(entry) => console.log(entry.intersectionRect)}
        className="bg-indigo-500 h-90 w-full text-lg text-slate-100">
            Animate
        </motion.div>
        <div className="bg-indigo-500 h-90 w-full"></div>
        <div className="bg-indigo-500 h-90 w-full"></div>
        <div className="bg-indigo-500 h-90 w-full"></div>
        <div className="bg-indigo-500 h-90 w-full"></div>
        <div className="bg-indigo-500 h-90 w-full"></div>

        {/* {items.map(item => (
   <motion.li layout>
      {item.name}
      {item.isSelected && <motion.div layoutId="underline" />}
   </motion.li>
))} */}
    </div>
    </div>
  )
}

export default scrollAnimations


