import React from 'react'
import Data from '../productData.json'
import ProductCard from './ProductCard';

const Products = () => {

    return (
        <div>
            {Data.products.map(product => {
                <ProductCard product={product} />
            })}
        </div>

    )
}

export default Products;