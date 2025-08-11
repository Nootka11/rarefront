import React, { useRef } from 'react'
import LettersColorHover from '../../components/Animations/LettersColorHover'
import { motion, useScroll } from 'motion/react'
import AnimatedSplitText from '../../components/Animations/AnimatedSplitText'
import aboutUsData from '../../data/aboutUsData'
import AboutUsBlocks from './AboutUsBlocks'
import img from '../../assets/img/aboutUs_v2.webp'
import imgMobile from '../../assets/img/about-us_mobile.webp'



function AboutUs() {
  
   const scrollRef = useRef(null)
  return (
    <section className='p-6 bg-fondo-claro'>
      <div className='max-w-7xl mx-auto py-8'>  
       
        <h1 className='font-goudybook text-7xl text-verde-noche text-center'>
          About Us   
          
        </h1>
        <div className='flex uppercase text-5xl md:text-6xl justify-center text-left font-extrabold py-4 '>
          <AnimatedSplitText text="A place for the forgotten and the fantastic." width="80%" delay={0.5} />
          </div>
          <div className=' text-4xl md:text-5xl text-right pt-4 pb-10 '>
          <AnimatedSplitText text="We grow what others forget." width="60%" delay={2} />
          </div>
          <div className='flex items-center justify-center'>
             <motion.section
          initial={{ opacity: 0, y:80 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ 
                  duration: 0.5, 
                  delay:3, 
                  ease: 'easeOut' 
                }}>
            <picture>
              <source media="(max-width: 767px)" srcSet={imgMobile} />
              <img src={img} alt="About Us" />
            </picture>
            {/* <img src={img} alt="" /> */}
          </motion.section>     
          </div>
          
          <section className='py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {aboutUsData
            .filter(item => item.active)
            .sort((a, b) => a.position - b.position)
            .map(item => (
              <motion.div 
                initial={{ opacity: 0 , scale:0.8}}
                whileInView={{ opacity: 1, scale:1 }}
                transition={{ 
                  duration: 0.2, 
                  delay: 0.1 * item.position, 
                  ease: 'easeOut' 
                }}
                viewport={{ root: scrollRef }}
                key={item.position} className="sm:items-stretch border-b"
              >
                
                <AboutUsBlocks title={item.title} text={item.content} position={item.position}/>
              </motion.div>
            ))}
          </section>
    
         
        </div>
        

    </section>
    
  )
}

export default AboutUs