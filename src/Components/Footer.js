import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#0d364f] text-white py-4'>
            <div className='w-5/6 mx-auto'>
                <h1 className='text-4xl mb-4 underline underline-offset-8 decoration-orange-400'>Contact Us</h1>
                <div>
                    <p className='mb-2'><span className='font-bold text-lg'>Phone:</span>  206-365-7400</p>
                    <p className='mb-2'><span className='font-bold text-lg'>Email:</span> tom@leveradv.com</p>
                    <p className='mb-2'><span className='font-bold text-lg'>Fax:</span> 206-400-7955</p>
                    <p><span className='font-bold text-lg'>Postal:</span> Lever Advertising     1209 NE 120th Street     Seattle, WA 98125</p>
                </div>
            </div>
        </div>
    )
}

export default Footer