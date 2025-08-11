import React from 'react'
import img from '../../assets/img/horse.webp'
import AnimatedButton from '../../components/Animations/AnimatedButton'

const Hero = () => {
  return (
    
    <section 
    className='bg-fondo-claro'
    >
        <div className='container mx-auto min-h-[80vh] flex flex-col-reverse 
        md:flex-row md:gap-10 justify-center 
        md:justify-between 
        items-center
        py-0 px-4
        lg:px-10 '>        
        {/* content section */}
        <div className='text-center  md:text-start md:mt-0 space-y-5 '>
            <h3 className='text-sm md:text-lg text-gray-700'>Frash From Farm to Your Plate</h3>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight text-gray-900'>
                Where Rare Creatures Thrive,<br/> Taste the Difference </h1>
            <p className='text-gray-600'>We care for endangered and unusual animals, bringing you ethical products from nature’s hidden treasures. </p>
           

            <AnimatedButton text="Farm Life" href="/farm-life/animals" />
        </div>

        {/* img section */}
        <div className='w-4/5 md:w-2/5 lg:w-1/2 rounded-2xl'>
            <img src={img} alt="" className='shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-2xl'/>
        </div>
        </div>

    </section>  
    
  )
}

export default Hero