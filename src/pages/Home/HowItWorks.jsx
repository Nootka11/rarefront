import React from 'react'
import img from "../../assets/img/process.jpg"

const steps = [
    {
        number: "01",
        title: "Whisper Your Wish",
        desc: "Tell us what you desire from our enchanted fields, where every seed holds a story."
    },
    {
        number: "02",
        title: "Weave the Magic",
        desc: "Our happy creatures and fertile soil join forces, crafting your order with care and a sprinkle of wonder."
    },
    {
        number: "03",
        title: "Journey Through Time",
        desc: "As your order travels from the heart of our farm, it carries the scent of dawn and the promise of freshness."
    },
    {
        number: "04",
        title: "Receive the Gift",
        desc: "Unwrap nature’s treasure — rare, joyful, and bursting with the life of Macondo’s spirit."
    }
];

const HowItWorks = () => {
    return (
        <section className='bg-fondo-claro py-16 px-5 lg:px-20'>
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
               
                <div className='w-[80%] lg:w-1/2'>
                    <img src={img} alt="Organic Process" className='w-full h-auto rounded-lg shadow-lg ' />
                </div>
                <div className='lg:w-1/2'>
                     <h2 className='text-3xl font-bold text-gray-800 mb-8'>How it works</h2>
                     <div className='space-y-8'>
                    {steps.map((step, index) => (
                        <div key={index} className='flex items-start gap-5'>
                           <div className='text-verde-noche text-3xl font-bold'>{step.number}</div> 
                           <div>
                            <h3 className='text-xl font-semibold text-gray-900'>{step.title}</h3>
                            <p className='text-sm text-gray-800'>{step.desc}</p>

                           </div>
                            
                        </div>
                    ))}
                </div>
                </div>
                
                <div></div>
            </div>

        </section>
    )
}

export default HowItWorks