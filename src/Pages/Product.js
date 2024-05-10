import React from 'react'
import { useParams } from 'react-router-dom';

const Product = ({ products }) => {
    const { id } = useParams()
    const current = id - 1;
    console.log(products[current])
    return (
        <div className='text-black'>
            <p>{products[current].name}</p>
            <img src={products[current].image} alt={products[current].name} />
            <button>Order Now</button>
            <button>Order Sample</button>
        </div>

    )
}

export default Product