import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const {categories} = useContext(ProductContext)
  return (
    <footer className='bg-fondo-claro text-verde-noche pt-12 pb-6 px-5 lg:px-14 border-t-naranja-vida border-20 border-l-orange-700'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-8'>
        {/* logo section */}
        <div>
            <h3 className='text-2xl font-bold text-rosa-fresa mb-3'>Rare Farm</h3>
            <p className='text-sm text-gray-600'>
                Taste the harmony of a world where nature whispers, and every bite tells a story of sustainable wonder. Each delivery carries the joy of rare, happy animals and the quiet magic of local hands that honor the land.
            </p>
        </div>
        {/* quick links */}
        <div>
            <h4 className='font-semibold mb-3 text-verde-noche'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
                <li><a href="/" className='hover:text-green-600'>Home</a></li>
                <li><a href="/" className='hover:text-green-600'>About Us</a></li>
                <li><a href="/" className='hover:text-green-600'>Products</a></li>
                <li><a href="/" className='hover:text-green-600'>Animals</a></li>
                <li><a href="/" className='hover:text-green-600'>Contact</a></li>
            </ul>
        </div>
        {/* categories */}
        <div >
            <h4 className='font-semibold mb-3 text-green-700'>Categories</h4>
            <ul className='space-y-2 text-sm'>
                {categories.map((cat,index)=>(
                    <li key={index}>
                        <a href="/"  className='hover:text-green-600'>{cat}</a>                        
                        </li>
                ))}
                
                
            </ul>
        </div>
        {/* contact + social */}
        <div>
            <div>
            <h4 className='font-semibold mb-3 text-green-700'>Contact</h4>
            <p className='text-sm text-gray-600 mb-2'> At the bend of the old wind road, where the sun rests on golden feathers — Macondo Valley, just past the whispering trees.</p>
            <p className='text-sm text-gray-600 mb-2'>Send your words with a breeze to: hello@magicfarm.cloud — our hens will deliver it before dusk.</p>

        </div>
        <div className='flex space-x-4'>
            <a href="/" className=' text-naranja-vida hover:text-verde-noche'>
                <FaFacebook/>
            </a>
            <a href="/" className=' text-naranja-vida hover:text-verde-noche'><FaInstagram/></a>
            <a href="/" className=' text-naranja-vida hover:text-verde-noche'><FaTwitter/></a>
        </div>
        </div>
        
        </div>
    </footer>
  )
}

export default Footer