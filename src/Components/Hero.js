import React from 'react'
import Pens from '../Images/BicPen.jpeg'

const Hero = () => {
    return (
        <div className='bg-[#134d71]'>
            <div className='w-5/6 mx-auto flex flex-col justify-center items-center py-4'>
                <h1 className='text-5xl text-center font-semibold'>Take Your Business to the <span className='text-orange-400'>Next Level</span></h1>
                <img src={Pens} alt='Office Pens' className='my-2' />
                <h2 className='text-2xl text-center'> <span className='font-bold underline underline-offset-8 decoration-orange-400'>Customized Designs</span> to Meet Your Customer's Needs</h2>
            </div>
        </div>
    )
}

export default Hero