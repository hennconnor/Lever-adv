import React from 'react'
import Data from '../productData.json'
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div>
            {Data.products.map(product => {
                return (
                    <ProductCard product={product} key={product.id} />)
            })}
        </div>

    )
}

export default Products;