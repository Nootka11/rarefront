import React from 'react'
import {motion, useScroll, useTransform } from "motion/react"
import { useRef } from 'react'

function UseScrollAdvanced() {
    const targetRef= useRef()
    const {scrollYProgress} =useScroll({
        target: targetRef,
    })
    const rotate = useTransform(scrollYProgress,[0,1],["0deg","180deg"])
  return (
    <div className='p-6 h-500'>
        <h1 className='text-4xl my-6'> Use Scroll Advanced</h1>
        
        <motion.div ref={targetRef} 
        style={{rotate}}
        className="relative mx-auto pt-28 top-100 bg-indigo-500 size-48"></motion.div>
    </div>
  )
}

export default UseScrollAdvanced