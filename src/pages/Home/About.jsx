import React from 'react'
import img from '../../assets/img/about.jpg'
import imgFarmer from '../../assets/img/farmer.webp'
import AnimatedButton from '../../components/Animations/AnimatedButton'

const About = () => {
  return (
    <section className='bg-verde-noche py-20 px-5 lg:px-20 '>
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
             {/* image section */}
            <div className='lg:w-1/2 relative flex'>
            <div className="hidden md:block relative w-64 aspect-[3/4] overflow-hidden rounded-lg shadow -rotate-12">
                <img 
                    src={img}
                    alt="About us"
                    className="w-full h-full object-cover object-center" 
                />
            </div>
              <div className="relative w-[80%] mx-auto md:mx-0 md:w-64 md:aspect-[3/4] overflow-hidden rounded-lg shadow md:rotate-6" >
                <img src={imgFarmer} alt="Our Farm" className='w-full h-full object-cover' />
            </div>  
                
            </div>

            {/* Content section */}
            <div className='lg:w-1/2 text-white'>
                <h2 className='text-3xl font-bold text-white mb-4'>About</h2>
               
                <p className='font-semibold mb-3'>Vibrant. Uncommon. Joyful.</p>
                <p className='mb-4'>
                    Welcome to our special farm, where nature’s beauty meets heartfelt care. Here, every animal and plant is nurtured with love and respect, creating a peaceful and sustainable environment. 
                    We believe in harmony with the land, offering fresh, wholesome products straight from our fields to your table. 
                    {/* Join us in celebrating the simple joys of farm life, where tradition and passion grow hand in hand. */}

                </p>
                <p className=' mb-4'>
                    Our farm is home to rare and extraordinary animals, all raised with the utmost care and happiness. These super happy animals produce unique, high-quality products that stand out for their freshness and natural goodness. 
                    {/* From specialty eggs to exclusive dairy, every item reflects the joy and well-being of the animals, bringing you products that are as exceptional as they are delicious. */}
                </p>
                <AnimatedButton text="Lear More" size="big" href="/about-us" type="calmgreen"/>
            </div>
            
        </div>
    </section>
  )
}

export default About