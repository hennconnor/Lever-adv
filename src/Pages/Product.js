import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = ({ products }) => {
    const { id } = useParams()
    const current = id - 1;
    return (
        <div className='bg-slate-100 py-10 '>
            <div className='text-black p-5 bg-white w-5/6 mx-auto rounded-md border-solid border-blue-200 border-2 min-w-80 grid grid-flow-row gap-4'>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='product__section'>
                        <h1 className='underline mb-2 font-bold text-lg'>{products[current].name}</h1>
                        <img src={products[current].image} alt={products[current].alt} className='border-2' />
                    </div>
                    <div className='product__section md:border-l-2 px-10'>
                        <div className='product__section'>
                            <h2 className='font-bold border-b-2 my-2 pb-2'>Highlights</h2>
                            <ul className='list-disc my-3 grid grid-flow-row gap-3 ml-4'>
                                {products[current].details.map((element) => <li className='leading-8'>{element}</li>)}
                            </ul>
                        </div>
                        <div className='product__section'>
                            <h2 className='font-bold border-b-2 my-2 pb-2'>Pricing</h2>
                            <ul className='list-disc my-3 ml-4 grid grid-flow-row gap-3'>
                                {products[current].pricing.map((element) => <li className='leading-8'>{element}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-3 p-3'>
                    <Link to={`/products/${id}/order`} target='_top' className='border-2 p-2 border-red-400 text-red-400 hover:bg-red-400 hover:rounded-md hover:text-white'>Order Now</Link>
                    <Link to={`/products/${id}/sample`} target='_top' className='border-2 p-2 border-green-500 text-green-500 hover:bg-green-500 hover:rounded-md hover:text-white'>Order Sample</Link>
                </div>
            </div>
        </div >

    )
}

export default Product