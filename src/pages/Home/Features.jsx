import React from 'react'
import { FaCheckCircle, FaHandsHelping, FaLeaf, FaShippingFast } from 'react-icons/fa'

const features = [
    {
        icon: <FaLeaf className='text-teal-700 text-4xl mb-3 size={45}' />,
        title: "100% Organic",
        desc: "All our produce is grown without harmful chemicals or ppesticides"
    },
    {
        icon: <FaShippingFast className='text-teal-700 text-4xl mb-3 size={45}' />,
        title: "Fast Delivery",
        desc: "All our produce is grown without harmful chemicals or ppesticides"
    },
    {
        icon: <FaHandsHelping className='text-teal-700 text-4xl mb-3 size={45}' />,
        title: "Farmer Support",
        desc: "All our produce is grown without harmful chemicals or ppesticides"
    },
    {
        icon: <FaCheckCircle className='text-teal-700 text-4xl mb-3 size={45}' />,
        title: "Quality Assured",
        desc: "All our produce is grown without harmful chemicals or ppesticides"
    },
]

const Features = () => {



    return (
        <section className='bg-fondo-claro'>
            <div className=' py-14 px-5 lg:px-14 text-center max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold mb-10 text-gray-800'>Why Choose Us</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {features.map((feature, index)=>(
                    <div key={index} className='bg-verde-calma-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300'>
                        <div className='flex justify-center text-4xl mb-3'>{feature.icon}</div>
                        <h3 className='text-xl font-bold mb-2 text-verde-noche'>{feature.title}</h3>
                        <p className='text-gray-600 text-sm'>{feature.desc}</p>
                    </div>
                ))}
            </div>
            </div>

        </section>
    )
}

export default Features