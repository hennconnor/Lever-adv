import React from 'react'
import Montreux from '../Images/ProductImages/Montreux.jpeg';

const ProductCard = ({ product }) => {
    return (
        <div className='bg-red-500'>
            <p>{product.name}</p>
            <img src={product.image} alt={product.alt} />
        </div>
    )
}

export default ProductCard