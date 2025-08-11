"use client"
import React, { useRef, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router';
import { motion } from 'motion/react'
import ResponsiveMenu from '../Animations/ResponsiveMenu';
import useDimensions from '../Utils/UseDimensions';
import { SidebarMenu } from '../Animations/SideBarMenu';
import MyAnimateMenu from '../Animations/MyAnimateMenu';
import LettersColorHover from '../Animations/LettersColorHover';
import {navLinks,navLinksMobile} from '../../data/navLinks';


const sectionImages = {
  "Shop": "/images/shop.jpg",
  "Farm Life": "/images/farm-life.jpg",
  "About Us": "/images/about-us.jpg",
  "Animations": "/images/animations.jpg",
  "Recipes": "/images/recipes.jpg",
  "Contact": "/images/contact.jpg",
  "Animals" : '/src/assets/img/platypus.webp',
  "Plants" : '/src/assets/img/about.jpg',
};

function NavBarResponsive() {
    // const [isOpen, setIsOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(null);
    const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);

    return (
        <div className='bg-fondo-claro  md:w-full md:z-100 md:sticky top-0'>
            <div className='block md:hidden '>
                <MyAnimateMenu links={navLinksMobile} />
            </div>

            <nav className='container mx-auto uppercase bg-fondo-claro'>
                <div className='hidden h-16 items-center md:flex justify-between '>

                    {/* Logo */}
                    <div className='hidden md:block text-3xl text-rust-brown font-bold px-4'>
                        Rare Farm
                    </div>
                    {/* button desktop */}
                    <div className='hidden md:block'>
                 {navLinks.filter(link => link.active).map(link => (
                            <span
                                key={link.url}
                                className="relative"
                                onMouseEnter={() => setHoveredItem(link.text)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link to={link.url} className='nav__link text-lg px-1 pb-4 mx-3'>
                                    <LettersColorHover text={link.text} />
                                </Link>
                                {link.children && (
                                    <>
                                        <div className={`fixed -z-10 w-full left-0 bg-fondo-claro h-auto pt-5 pb-4 shadow-lg overflow-hidden transition-all duration-300 top-16  
                                         ${hoveredItem === link.text ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-60 pointer-events-none"
                                            }                                            
                                            `}  >
                                            <div className='max-w-5xl mx-auto '>
                                                <div className='flex flex-row-reverse gap-4'>
                                                    {link.children.map((child,index) => 
                                                    <div className='w-1/4' key={index}>
                                                        <img src={sectionImages[child.text]} alt={child.text} className='h-35 w-50 object-cover' />
                                                        <p className='mt-3'>
                                                            <Link to={child.url}>
                                                            {child.text}
                                                            </Link>
                                                            

                                                        </p>
                                                        </div>)}
                                                    
                                                </div>
                                                
                                            </div>


                                        </div>
                                    </>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </nav>
        </div>

    )
}



export default NavBarResponsive