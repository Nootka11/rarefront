import React from 'react'
import defaultImage from "../assets/img/img_default.jpg"; // ajusta la ruta según tu proyecto
import AnimatedButton from '../components/Animations/AnimatedButton';
import { API_URL } from '../../.config.js';
import { Link } from 'react-router';


const ProductCard = ({ imageUrl, name, price, oldPrice, soldOut, _id }) => {
  const productImage = imageUrl ? `${API_URL}${imageUrl}` : defaultImage;

  return (
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition relative overflow-hidden'>


      <img src={productImage} alt={name} className='w-full h-40 object-cover rounded' />
      <h3 className='text-lg font-semibold mt-4 text-center'>{name}</h3>
      <div className='mt-2 text-center'>
        <span className='text-green-600 font-bold'>{price}€</span>
        {oldPrice && <span className='text-gray-500 line-through ml-2'>{oldPrice}€</span>}
      </div>
      {soldOut === true ? (
        <p className='text-red-600 font-stretch-105% font-semibold my-5 text-center'>Sold Out</p>

      ) : (
        <div className='mt-4'>

          <Link to={`/product/${_id}`}>
            <AnimatedButton text='Shop Now' type="orange" size="medium" />
          </Link>
        </div>

      )}




    </div>
  )
}

export default ProductCard