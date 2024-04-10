import React from 'react'

const CarouselItem = ({ product, slide, index }) => {
    return (
        <div className={slide === index ? 'w-full max-w-[700px]' : 'hidden'}>
            < img src={product.image} alt='pen product' />
        </div >
    )
}

export default CarouselItem