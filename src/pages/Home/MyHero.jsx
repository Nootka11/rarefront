import React, { useState } from 'react';

const MyHero = () => {        
    return (
        <section>
    <header>
        <div className="bg-white border-b border-gray-100">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-16 lg:h-[72px]">
                    <button type="button" className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                        <a href="#" title="" className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            <span className="sr-only"> Rareblocks logo </span>
                            <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg" alt="" />
                        </a>
                    </div>

                    <div className="flex items-center justify-end ml-auto">
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Create Free Account </a>

                            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Login </a>
                        </div>

                        <div className="flex items-center justify-end space-x-5">
                            <span className="hidden w-px h-6 bg-gray-200 lg:block" aria-hidden="true"></span>

                            <button type="button" className="p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <span className="w-px h-6 bg-gray-200 lg:hidden" aria-hidden="true"></span>

                            <button type="button" className="inline-flex items-center p-2 -m-2 text-gray-900 transition-all duration-200 lg:ml-6 hover:text-gray-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-gray-600 rounded-full"> 2 </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 xl:py-48">
        <div className="absolute inset-0 hidden lg:block">
            <img className="object-cover object-right w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png" alt="" />
        </div>

        <div className="absolute inset-x-0 top-0 hidden lg:block">
            <div className="py-5">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <nav className="flex items-center space-x-8">
                        <a href="#" title="" className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> All Brands </a>

                        <a href="#" title="" className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Men </a>

                        <a href="#" title="" className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Women </a>

                        <a href="#" title="" className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Accessories </a>

                        <a href="#" title="" className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Sports </a>

                        <a href="#" title="" className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Kids </a>
                    </nav>
                </div>
            </div>
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
                <p className="text-base font-bold text-gray-600">Use “FIT40” coupon to get 40% flat discount</p>
                <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:mt-8 sm:text-5xl xl:text-7xl">Fitness kits that help you keep fit.</h1>

                <div className="mt-8 sm:mt-12">
                    <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-gray-900
                            border border-transparent
                            rounded-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-gray-600
                            focus:ring-offset-[#FFE942]
                        "
                        role="button"
                    >
                        Start shopping
                    </a>
                </div>
            </div>

            <div className="mt-8 lg:hidden">
                <img className="w-full mx-auto" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/bg.png" alt="" />
            </div>
        </div>
    </div>
</section>

    )
}
export default MyHero;