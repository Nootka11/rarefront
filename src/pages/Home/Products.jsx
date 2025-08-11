import React, { useContext, useState } from 'react';

import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../layouts/ProductCard';
import { Cursor, Tab } from '../../components/NavBar/SlideTabs';

const Products = () => {
    const[selectedCategory, setSelectedCategory] = useState("All");
    // const {animals } = useContext(AnimalContext);
    const {products, categories} = useContext(ProductContext);
    console.log(products)
   

    const [position,setPosition] =useState({
            left:0,
            width:0,
            opacity:0,
        });
    
    const allCategories = ["All", ...categories];
    
    // const filteredProducts = products.filter(
    //     (product) => product.category === selectedCategory
    // )

    const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);
    
  return (
    <section className='bg-fondo-claro pb-10 px-2 md:px-5 lg:px-14'>
        <div className="py-4 md:p-5 max-w-6xl mx-auto">
            <h2 className='text-4xl font-bold mb-10 text-gray-800 text-center'>Our Products</h2>
            <div className='flex flex-wrap justify-center mb-6 space-x-4 text-sm font-medium'>
                <div className='flex md:hidden overflow-hidden gap-2 overflow-x-auto whitespace-nowrap space-x-2  custom-scroll-hide'>
                    {allCategories.map((cat,index)=>(
                        <div key={index} 
                         onClick={()=>setSelectedCategory(cat)}
                        className=' h-8 border border-dusty-mauve rounded-full px-6 text-dusty-mauve flex items-center justify-center whitespace-nowrap                       '>
                            {cat}</div>
                    ))}
                </div>
                 <ul 
                   onMouseLeave={()=>{
                       setPosition((pv)=>({
                           ...pv,
                           opacity:0,
                       }))
                   }}
                   className='hidden relative mx-auto md:flex w-fit border border-black rounded-full p-1 hover:cursor-pointer' >
                     {allCategories.map((cat,i)=>(
                        <Tab key={i} setPosition={setPosition}>
                            <button  onClick={()=>setSelectedCategory(cat)}>
                                 {cat}
                            </button>
                        </Tab>
                     ))}  
                      
                       <Cursor position={position} bgColor='bg-green-500'/>
                   </ul>
    
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {filteredProducts.map((product, index)=>(
                    <ProductCard key={index} {...product}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Products