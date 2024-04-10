import React from 'react'
import { products } from '../Products.js'
import ProductCard from './ProductCard.js'
import { Link } from 'react-router-dom';

const ProductsRec = () => {
    return (
        <div className='text-black bg-slate-100 py-10'>
            <div className='w-5/6 mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold m-5 decoration-orange-400 underline'>Top Sellers</h1>
                <div className='flex flex-col md:flex-row justify-center items-stretch gap-4 my-5'>
                    <ProductCard product={products[0]} />
                    <ProductCard product={products[1]} />
                </div>
                <Link to='products' target='_top' className='bg-slate-300 p-3 rounded-full hover:bg-slate-400'>view more</Link>
            </div>
        </div >
    )
}

export default ProductsRec