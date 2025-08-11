import React, { useRef, useState } from 'react'
import { motion } from "motion/react"

export const SlideTabsExample= () =>{

    return(
        <div className='grid place-content-center bg-neutral-100'>
            <SlideTabs/>
        </div>
    )
}
export const SlideTabs = () => {
    const [position,setPosition] =useState({
        left:0,
        width:0,
        opacity:0,
    });
  return (
    <>
    <ul 
    onMouseLeave={()=>{
        setPosition((pv)=>({
            ...pv,
            opacity:0,
        }))
    }}
    className='relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1'>
        <Tab setPosition={setPosition}>Home</Tab>
        <Tab setPosition={setPosition}>Pricing</Tab>
        <Tab setPosition={setPosition}>Feautures</Tab>
        <Tab setPosition={setPosition}>Docs</Tab>
        <Tab setPosition={setPosition}>Blog</Tab>
        <Cursor position={position}/>
    </ul>
    </>
    
  )
}
export const Tab = ({ children, setPosition }) =>{
    const ref = useRef(null)
    return(
        <>
        <li 
        ref={ref}
        onMouseEnter={()=>{
            if(!ref.current) return;

            // const data = ref.current.getBoundingClientRect();
            // console.log(data)

            const {width} = ref.current.getBoundingClientRect();
            setPosition({width,opacity:1,left:ref.current.offsetLeft})
        }}
        className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase
        
        md:px-5 md:py-3 md:text-base text-white mix-blend-difference '>
            {children}
        </li>
        {/* //  text-white mix-blend-difference */}
        </>
    )
}

const invertHexColor = (hex) => {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }

  const inverted = hex
    .match(/.{2}/g)
    .map((c) => (255 - parseInt(c, 16)).toString(16).padStart(2, "0"))
    .join("");

  return `#${inverted}`;
};
export const Cursor =({position, bgColor}) =>{
   
    return <motion.li
    animate={position}   
    className={`absolute z-0 h-7 rounded-full  bg-black md:h-12`}/>

}
// export default SlideTabs