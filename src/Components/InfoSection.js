import React from 'react'

const InfoSection = () => {
    return (
        <div className='bg-slate-300 text-black py-4'>
            <div className='w-5/6 mx-auto divide-solid divide-gray-400 divide-y-2 flex flex-col md:flex-row md:divide-x-2 md:divide-y-0'>
                <section className='section-1__card'>
                    <h1 className='section-1__card-header'>Satisfaction Guaranteed</h1>
                    <p>We guarantee our customer's satisfaction if you are not satisfied with the product please reach out to us.</p>
                </section>
                <section className='section-1__card pb-5'>
                    <h1 className='section-1__card-header'>Fast Delivery</h1>
                    <p>Order confirmed within 48 hours</p>
                </section>
                <section className='section-1__card'>
                    <h1 className='section-1__card-header'>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus earum vitae dolores corrupti commodi tenetur nesciunt voluptate. Sint soluta, sequi est ipsum error doloremque?</p>
                </section>
            </div>
        </div>
    )
}

export default InfoSection