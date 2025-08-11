import React, { useState } from 'react'
import platypusImg from '../../assets/img/platypus.webp';
import chameleonImg from '../../assets/img/chameleon.webp';
import hummingbirdImg from '../../assets/img/colibri.webp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { easeInOut, motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "motion/react"
import AnimatedButton from '../../components/Animations/AnimatedButton';

const animals = [
    {
        img: platypusImg,
        title: "Platypus",
        desc: "A unique mammal from Australia, known for its duck-like bill and webbed feet.",
        backgroundColor: "#FE8CA3",
        hoverBackgroundColor: "#E3768C",
        left:"-30px",
        top:"80%",
        closeTop:"90%",
        closeleft:"80%",
        openTop:"48%",
        openLeft:"40%"
    },
    {
        img: chameleonImg,
        title: "Chameleon",
        desc: "A reptile famous for its ability to change color and move its eyes independently. Foto de Pixabay",
        backgroundColor: "#B2D5B5",
        hoverBackgroundColor: "#8ACA90",
        left:"60%",
        top:"65%",
        closeTop:"90%",
        closeleft:"10%",
        openTop:"45%",
        openLeft:"-20px"
    },
    {
        img: hummingbirdImg,
        title: "Hummingbird",
        desc: "A tiny bird known for its rapid wing flapping and ability to hover in mid-air. Foto de Frank Cone.",
        backgroundColor: "#FDAF11",
        hoverBackgroundColor: "#E59B05",
        left:"-15px",
        top:"5%",
        closeTop:"90%",
        closeleft:"80%",
        openTop:"50%",
        openLeft:"35%"
    }
];

const Favourites = () => {

    //  const [active, setActive] = useState(false);
     const [activeIndex, setActiveIndex] = useState(null);

     var settings = {
    className:"center",
    dots: true,
    infinite: true,
    centerPadding:"60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 200,
    pauseOnHover: true,
    arrows:false,
    responsive:[
         {
            breakpoint:640,
            settings:{
                slidesToShow:1,
                centerPadding: "20px",
            },
        },
    ]
  };
    return (
        <section className='bg-fondo-claro'>
            <div className='hidden md:block py-14 px-5 lg:px-14 text-center max-w-6xl mx-auto'>
                <h2 className='text-3xl font-bold mb-10 text-gray-800'>Favourites Animals</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 overflow-hidden px-10'>
                    {animals.map((animal, index) => (
                        <div key={index} className="relative rounded-lg h-90" onMouseLeave={() => setActiveIndex(null)}>
                            <img src={animal.img} alt={animal.title} className="absolute top-0 left-0 w-full h-full object-cover mb-2 rounded-lg" />
                            <motion.div className='absolute py-3 px-6 rounded-full z-20'                            
                                    whileTap={{ scale: 0.9 }}
                                        whileHover={{
                                        scale: 1.1,
                                        backgroundColor: animal.hoverBackgroundColor,
                                        rotate: [0, 20, 18, 0, -10, 0],                                        
                                        }}
                                        transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                                    style={{
                                    left: animal.left,
                                        top: animal.top,
                                        backgroundColor: animal.backgroundColor
                                    }}
                                    // onClick={() => setActive((pv) => !pv)}
                                    onMouseEnter={() => setActiveIndex(index === activeIndex ? null : index)} 
                            >
                                <h3 className="text-lg -left-3 top-40 z-10 text-white font-bold"
                               
                                >{animal.title}</h3>

                            </motion.div>
                            
                                {/* <h3 className='absolute font-extrabold -left-3 top-40 text-rosa-fresa text-lg z-0'>{animal.title}</h3> */}
                           
                            <motion.p 
                            className="absolute  border-2 z-20 shadow text-sm text-gray-600 p-5 bg-fondo-claro rounded-full w-2/3 aspect-square content-center"
                            animate={activeIndex === index ? "open" : "closed"}
                            style={{
                                borderColor:animal.hoverBackgroundColor
                            }}

                            variants={{
                                    open: {
                                        top:animal.openTop,
                                        left:animal.openLeft,
                                        
                                    },
                                    closed: {
                                        opacity:0 ,
                                        top:animal.closeTop,
                                        left: animal.closeleft,                                      
                                    },
                                    }}
                            
                                 transition={{ delay: 0.2, ease: easeInOut }}
                                 duration="1s"
                            >
                            {animal.desc}
                            </motion.p>
                        </div>
                    ))}
                </div>

                 <div className="mx-auto mt-10">
                <AnimatedButton text="More Animals" href="/farm-life" type="pistachio" size="big"/>
            </div>
            </div>
            <div className='md:hidden slider-container max-w-6xl mx-auto my-10 px-5'>
                {
                     <Slider {...settings}>
                    {animals.map((animal, index) => (
                        <div key={index} className="px-4">
                        <div key={index} className="relative rounded-lg h-90 ">
                            <img src={animal.img} alt={animal.name}
                            className="absolute top-0 left-0 w-full h-full object-cover mb-2 rounded-lg"
                             />
                              <motion.div className='absolute py-3 px-6 rounded-full z-20 mx-4'                            
                                    whileTap={{ scale: 0.9 }}
                                 
                                        transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                                    style={{
                                    left: animal.left,
                                        top: animal.top,
                                        backgroundColor: animal.backgroundColor
                                    }}
                                    
                            >
                                <h3 className=" text-lg -left-3 top-40 z-10 text-white font-bold"
                               
                                >{animal.title}</h3>

                            </motion.div>
                    </div>
                    </div>
                    ))}
                  </Slider>

                }
                 

            </div>
           
              
           
        </section>
    )
}

export default Favourites