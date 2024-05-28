import React from 'react'
import { Link } from 'react-router-dom';

const CarouselItem = ({ product, slide, index }) => {
    return (
        <Link to={`products/${product.id}`} target='_top' className={slide === index ? 'w-full max-w-[700px]' : 'hidden'}>
            <img src={product.image} alt='pen product' />
        </Link>
    )
}

export default CarouselItem