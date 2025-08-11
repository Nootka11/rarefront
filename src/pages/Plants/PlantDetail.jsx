import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { VegetableContext } from '../../context/VegetableContext';
import { API_URL } from '../../../.config';
import LottieWalk from '../../components/Animations/LottieWalk';
import LottieBee from '../../components/Animations/LottieBee';
import AnimatedSplitText from '../../components/Animations/AnimatedSplitText';
import { motion, useScroll } from 'motion/react'
import BackButton from '../../components/BackButton';


const PlantDetail = () => {




  const { id } = useParams();

  const { vegetables } = useContext(VegetableContext);

  const vegetable = vegetables.find((v) => v._id === id);
  //   const [imgSrc, setImgSrc] = useState(`../assets/img/transparent/${vegetable.commonName}.webp`);

  //   const handleError = () => {
  //   // Si la imagen del front falla, carga la del backend
  //   setImgSrc(`${API_URL}${vegetable.imageUrl}`);

  // };

  if (!vegetable) {
    return <div>Plant no encontrada</div>; // Puedes mostrar un spinner o redireccionar si quieres
  }
console.log(vegetable)
  return (
    <>

      <div className='max-w-6xl mx-auto pb-10 xl:pb-20  bg-fondo-claro content-center'>
        <div className=''>
             <motion.section
          initial={{ opacity: 0, x: 800 }}
          whileInView={{ opacity: 1, x: 200 }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: 'easeInOut'
          }}>
          <img
            src={
              vegetable.imageTransparentUrl
                ? `${API_URL}${vegetable.imageTransparentUrl}`
                : `${API_URL}${vegetable.imageUrl}`
            }
            alt={vegetable.commonName} className='max-h-90 w-1/2 object-contain' />
        </motion.section>

        </div>

     
        <h1 className='z-50 text-6xl md:text-9xl uppercase text-verde-pistacho text-shadow-2xs bordered_letter  text-center'>
          {vegetable.commonName}
        </h1>
        <p className='text-3xl font-stretch-75% font-goudybook  text-center p-6 text-rosa-fresa'> - {vegetable.scientificName }</p>
        <div className="flex flex-col-reverse md:flex-row">
          <div className='text-3xl md:text-7xl lg:w-2/3 '>
            <AnimatedSplitText text={vegetable.description} delay={1} />
          </div>
          <div className='md:w-1/3'>
            <LottieBee loop='false' autoplay='false' delay='2'/>

          </div>
            

        </div>
        <BackButton/>
      </div>

    </>
  )
}

export default PlantDetail