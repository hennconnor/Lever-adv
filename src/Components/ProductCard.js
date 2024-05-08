import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`products/${product.name}`} className='bg-white p-5 rounded-md border-solid border-2 hover:border-blue-300 cursor-pointer decoration-black hover:underline max-w-[400px]'>
            <p>{product.name}</p>
            <img src={product.image} alt={product.alt} />
        </Link>
    )
}

export default ProductCard