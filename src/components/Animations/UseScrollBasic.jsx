import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import React from 'react'

function UseScrollBasic() {
    const { scrollYProgress, scrollXProgress, scrollX, scrollY } = useScroll()
    useMotionValueEvent(scrollYProgress, "change",
        (latest)=>console.log(latest)
    )
    const background = useTransform(
        scrollYProgress,
        [0,1],
        ["#ffffff","#6366f1"]
    );
  return (
    <div className='h-500'>
        <h1>Use ScrollBasic</h1>
         <motion.div 
        style={{
            scaleX:scrollYProgress,
            background,
            x:"-50%",
            y:"-50%",
            
        }}
        className="fixed left-0 top-1/2 h-4 w-screen bg-indigo-400"></motion.div>
    </div>
  )
}


export default UseScrollBasic