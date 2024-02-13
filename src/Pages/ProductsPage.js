import React from 'react'
import Products from '../Components/Products'

const ProductsPage = () => {
    return (
        <div className='text-black py-4 bg-slate-100'>
            <div className='w-5/6 mx-auto'>
                <h1 className='text-4xl font-semibold'>Our Products</h1>
                <Products />
            </div >
        </div >
    )
}

export default ProductsPage