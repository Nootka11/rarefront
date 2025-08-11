import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import AnimatedButton from '../../components/Animations/AnimatedButton';
import { API_URL } from '../../../.config.js';
import { Link } from 'react-router';

function Shop() {
  const { products, categories } = useContext(ProductContext);


  return (

    <section className=' bg-fondo-claro'>
      <div className='max-w-7xl mx-auto py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>


        {products.map((product, index) => {
          const origin = product.animalOrigin || product.vegetableOrigin;
          return (
            <article key={index} className='p-4 bg-white rounded-xl'>

              <div className="productImg__container relative  h-90 overflow-hidden">
                <img src={`${API_URL}${product.imageUrl}`} alt="" className='productImg_active absolute h-90 z-10 w-full rounded-xl object-cover' />
                <img src={origin ? `${API_URL}${origin.imageUrl}` : '/default-image.jpg'}
                  alt={origin ? origin.commonName : product.name} className='productImg_hover absolute h-90 z-10 w-full rounded-xl object-cover saturate-50' />
                <div className="productItem__btn absolute w-full z-50">
                  <Link to={`/product/${product._id}`}>
                    <AnimatedButton text="Shop Now" size="big" type="orange" />
                  </Link>
                  {/* <AnimatedButton text="Shop Now" size="big" type="orange" href='/'/> */}
                </div>
              </div>
              <div className="content mt-6">
                <h2>{product.name} - {product.price} €</h2>
                <p className='mt-6 mb-10'>{product.description}</p>
                <p className='bg-fondo-claro rounded-xl mt-6 px-2 py-3 text-sm'>
                  <span className='text-rust-brown'>Category : </span> {product.category}
                </p>

              </div>




            </article>
          )
        })}
      </div>
    </section>

  )
}

export default Shop