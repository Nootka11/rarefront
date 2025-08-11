import React from 'react'
import { useContext } from 'react'




import AnimatedSplitText from '../../components/Animations/AnimatedSplitText';
import AnimalCardRounded from './AnimalCard';
import { AnimalContext } from '../../context/animalContext';
import LottieLlama from '../../components/Animations/LottieLLama';
import { Link } from 'react-router';
import AnimatedButton from '../../components/Animations/AnimatedButton';

const AnimalsList = () => {
  const { animals } = useContext(AnimalContext);
  return (
    <section className='md:px-3 md:pt-28 max-w-6xl md:mx-auto'>
      <h1 className='p-3 text-6xl md:text-8xl font-goudybook text-verde-noche mb-6 transition-all'>Our Animals</h1>
      <div className='flex flex-col sm:flex-row-reverse md:px-5 xl:px-0'>
        <div className='relative md:-left-15'>
          <LottieLlama loop='true' autoplay='true' delay='3' />
        </div>
        <div className='w-4/5 sm:w-2/3 text-3xl sm:text-5xl pl-3'>
          <div className='mb-4'>
            <AnimatedSplitText text='Explore extraordinary animals from remote regions and rich traditions. ' delay={0.5} />
          </div>
          <div className='hidden md:block'>
            <AnimatedSplitText text='These rare breeds offer unique products—from yak wool to ostrich eggs—crafted by nature and heritage.' delay={1.5} />
          </div>
        </div>   

      </div>
      <div className='my-5'>
        <Link to='/animal-vote'>
          <AnimatedButton text="Vote your favourite" type='orange' size='big' />
        </Link>

      </div>
      <div className='py-10 my-5 flex flex-col'>
        {animals.map((a, i) => (
          <AnimalCardRounded
            key={i}
            index={i}
            a={a}
            // bgColor={i % 2 === 0 ? '#FF6B6B' : '#4ECDC4'} // Cambia colores como prefieras
            position={i % 2 === 0 ? 'left' : 'right'}
            bgClass={i % 2 === 0 ? 'bg-verde-calma' : 'bg-verde-pistacho'}
          />


        ))}

      </div>


    </section>
  )
}

export default AnimalsList