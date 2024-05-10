import React from 'react'
import ProductsDisplay from '../Components/ProductsDisplay'

const ProductsPage = ({ products }) => {
    return (
        <div className='text-black py-10 bg-slate-100'>
            <div className='w-5/6 mx-auto'>
                <h1 className='text-4xl font-semibold mb-8 decoration-orange-400 underline underline-offset-2'>Our Products</h1>
                <ProductsDisplay products={products} />
            </div >
        </div >
    )
}

export default ProductsPage