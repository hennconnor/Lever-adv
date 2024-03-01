import React from 'react'
import { products } from '../Products'
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div>
            {products.map(product => {
                return (
                    <ProductCard product={product} key={product.id} />)
            })}
        </div>

    )
}

export default Products;