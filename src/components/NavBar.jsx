import React from 'react'
import {  FaShoppingCart } from 'react-icons/fa';
import {  FiSearch } from 'react-icons/fi';
import {  GrContact } from 'react-icons/gr';
import { Link } from 'react-router';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';


const NavBar = () => {
    return (
        <header className=' bg-[#c4dbce]'>
            <div  className='container mx-auto flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10'>
            
            {/* logo Section */}
            <div><span className='text-xl font-bold'>FarmRoot</span></div>

            {/* nav section */}
            <nav className='hidden md:flex flex-row gap-6'>
                <Link to='/'>Home</Link>
                <Link to='/about-us'>About Us</Link>
                <Link to='/shop' >Shop</Link>
                <Link to='/farm-life'>Farm Life</Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/contact'>Contact</Link>

                {/* icons */}
            <div className='hidden lg:flex gap-2 ml-8'>
                <span className='icons hover:bg-emerald-400 hover:text-amber-50'>                 
                 <FiSearch/>
                </span>
                <span  className='icons hover:bg-emerald-400 hover:text-amber-50'>                    
                    <GrContact />
                </span>
                <span  className='icons hover:bg-emerald-400 hover:text-amber-50'>
                    <FaShoppingCart />                    
                </span>
            </div>
            </nav>

            {/* responsive */}
            <button className='md:hidden bg-emerald-600 hover:bg-emerald-700 text-amber-100 py-3 px-6 rounded-full shadow-lg transition duration-200 ease-in'>
                Shop Now
            </button>

            </div>
        </header>



    )
}

export default NavBar