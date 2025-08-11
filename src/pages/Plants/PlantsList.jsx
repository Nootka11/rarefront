import React, { useState } from 'react'
import { useContext } from 'react'
import { VegetableContext } from '../../context/VegetableContext'
import { motion } from "motion/react"
// import { API_URL } from '../../../.config';
// import PlantCard from './PlantCard';
// import PlantDetail from './PlantDetail';

import PlanCardRounded from './PlanCardRounded';
import LottieBee from '../../components/Animations/LottieBee';
import AnimatedSplitText from '../../components/Animations/AnimatedSplitText';

const PlantsList = () => {
  const { vegetables } = useContext(VegetableContext);

 const delayBeforeCards = 3;
  return (
    <section className='pt-6 px-6 md:pt-28 max-w-7xl mx-auto '>
      <h1 className='text-6xl md:text-8xl font-goudybook text-verde-noche mb-6 transition-all'>Our Vegetables</h1>
      <div className='flex'>
        <div className='w-2/3 text-5xl'>
          <div className='mb-4'> 
            <AnimatedSplitText text='Discover unique vegetables rooted in tradition and flavor.' delay={0.5} />
         </div>
         <div className='hidden md:block'>
             <AnimatedSplitText text='From ancient varieties to rare finds, each one tells a story of culture and nutrition.' delay={1.5} 
        />
          
         </div>
       
        </div>
        <div>
          <LottieBee loop='false' autoplay='false' delay='2' />
        </div>
      </div>
      <motion.div className='py-2 my-5 flex flex-col'
       initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delayBeforeCards, duration: 0.8, ease: "easeOut" }}
      >
        {vegetables.map((v, i) => (
          <PlanCardRounded
            key={i}
            v={v}
            // bgColor={i % 2 === 0 ? '#FF6B6B' : '#4ECDC4'} // Cambia colores como prefieras
            position={i % 2 === 0 ? 'left' : 'right'}
           
            bgClass={i % 2 === 0 ? 'bg-verde-calma' : 'bg-verde-pistacho'}
          />


        ))}

      </motion.div>
    </section>
  )
}

export default PlantsList