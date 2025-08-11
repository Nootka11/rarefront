import React, { useContext } from 'react'
import { AnimalContext } from '../../context/animalContext';
import { API_URL } from '../../../.config';
import { motion } from "motion/react"

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

function FarmLife() {
  const { animals } = useContext(AnimalContext);
  return (
    <div className='container mx-auto'>
      <div className='bg-emerald-600 p-6'>
        <h1 className='text-3xl font-semibold'>Farm Life</h1>
        <p>Our Animals and vegetables</p>
      </div>
      <div className='flex flex-col gap-10 overflow-x-hidden'>


      </div>
      <div className=''>
        {animals.map((animal, index) => (
          <div key={index} className='p-5 '>
            <h3 className='text-2xl font-bold'>{animal.commonName}</h3>
            <div className='mt-3'>


              <img src={`${API_URL}${animal.imageUrl}`} alt={animal.commonName} className='h-100 w-full object-cover' />
              <div className='mt-6'>{animal.description}</div>
            </div>
          </div>

        ))}


      </div>
    </div>
  )
}

export default FarmLife