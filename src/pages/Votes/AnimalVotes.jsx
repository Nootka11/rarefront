import React, { useContext, useEffect, useState } from 'react'
import { AnimalContext } from '../../context/animalContext';
import { API_URL } from '../../../.config'
import axios from 'axios';
import { FaPlus , FaMinus} from "react-icons/fa";

const AnimalVoteCard = ({ name, votes, img, onVote }) => {
  const getVoteColor = (votes) => {
    if (votes >= 10) return 'bg-teal-800';
    if (votes >= 5) return 'bg-teal-600';
    if (votes >= 1) return 'bg-teal-400';
    return 'bg-teal-200'; // default (pocos votos)
  };
  const getSaturationClass = (votes) => {
  if (votes >= 6) return 'saturate-100'; // color completo
  if (votes === 5) return 'saturate-75';
  if (votes === 4) return 'saturate-50';
  if (votes === 3) return 'saturate-25';
  if (votes === 2) return 'grayscale saturate-0';
  return 'grayscale';
};

  return (
    <>
      <div className={`max-w-full rounded-lg shadow relative h-64 ${getVoteColor(votes)}`}>
        <img src={`${API_URL}${img}`} alt={name}         
        className={`absolute right-[35%] top-1/2 -translate-y-1/2 z-10 max-w-58 max-h-58 filter ${getSaturationClass(votes)}`} />
        <div className="block relative top-1.5 right-0 border-t-[50px] border-r-[190px] border-b-[190px] border-transparent border-r-red-400">
         </div>
         <div className="block absolute top-15 right-2 text-white text-lg">
          <p className='text-5xl uppercase'>VOTE</p>
          <p className='max-w-36 text-center'>{name}</p> 
        </div>
       
         <div className='z-20 absolute bottom-6 md:bottom-2 
         right-0 
         border-t-[55px] border-b-[55px]
         border-r-[150px] border-transparent border-r-white'>
          <span className='block left-18 md:left-20 absolute text-5xl -top-5 text-verde-noche font-bold'>{votes}</span>
        
          </div>
          
        <div className='absolute z-20 top-[80%] left-[30%]'>
          <button className="px-3 py-2 rounded bg-red-400 hover:bg-rosa-fresa "
            onClick={() => onVote('minus')}><FaMinus /></button>
          <button className="px-3 py-2 rounded bg-lime-500 hover:bg-lime-300 ml-5"
            onClick={() => onVote('plus')}><FaPlus /></button>
          
        </div>
      </div>

      
    </>
  )
}



const AnimalVotes = () => {
  const { animals } = useContext(AnimalContext);
  console.log(animals)
  const [animalVotes, setAnimalVotes] = useState([])

  useEffect(() => {
    if (animals.length > 0) {
      setAnimalVotes(animals);
    }
  }, [animals]);



  const voteAnimal = async (animalId, direction) => {
    try {

      const res = await axios.patch(`${API_URL}/api/animals/${animalId}/vote`, { direction });


      if (res.status !== 200) {
        throw new Error('Failed to vote');
      }

      return res.data; // returns updated animal
    } catch (err) {
      console.error('Voting error:', err.message);
    }
  };

  const handleVote = async (id, direction) => {
    const updated = await voteAnimal(id, direction);
    if (!updated) return;

    setAnimalVotes(prev =>
      prev.map(animal =>
        animal._id === id ? { ...animal, votes: updated.votes } : animal
      )
    );
  };



  return (
    <div>

      <section className='max-w-6xl mx-auto p-3'>
        <h1 className='text-4xl md:text-8xl font-goudybook text-verde-noche mb-6 transition-all'>Vote Your Favorite Rare Animal</h1>

        <div className='grid md:grid-rows-3 gap-4'>
          {/* 2 primeros */}
          <div className="grid md:grid-cols-2 gap-4 ">
            {animalVotes.slice(0, 2).map(animal => (
              <AnimalVoteCard
                key={animal._id}
                name={animal.commonName}
                votes={animal.votes}
                img={animal.imageTransparentUrl}
                onVote={dir => handleVote(animal._id, dir)}
              />
            ))}
          </div>
          {/* 3 siguientes */}
          <div className="grid md:grid-cols-3 gap-4">
            {animalVotes.slice(2, 5).map(animal => (
              <AnimalVoteCard
                key={animal._id}
                name={animal.commonName}
                votes={animal.votes}
                img={animal.imageTransparentUrl}
                onVote={dir => handleVote(animal._id, dir)}
              />
            ))}
          </div>

          {/* últimos 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            {animalVotes.slice(5, 7).map(animal => (
              <AnimalVoteCard
                key={animal._id}
                name={animal.commonName}
                votes={animal.votes}
                img={animal.imageTransparentUrl}
                onVote={dir => handleVote(animal._id, dir)}
              />
            ))}
          </div>
        </div>

    

      </section>
    </div>
  )
}

export default AnimalVotes