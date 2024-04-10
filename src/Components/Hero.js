import React from 'react'
import Carousel from './Carousel.js';

const Hero = () => {
    return (
        <div className='bg-[#134d71] py-10'>
            <div className='w-5/6 mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-4xl md:text-5xl text-center font-semibold'>Take Your Business to the <span className='text-orange-400'>Next Level</span></h1>
                <Carousel />
                <h2 className='text-2xl text-center'> <span className='font-bold underline underline-offset-8 decoration-orange-400'>Customized Designs</span> to Meet Your Customer's Needs</h2>
            </div>
        </div>
    )
}

export default Hero