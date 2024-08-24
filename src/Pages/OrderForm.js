import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const OrderForm = ({ products }) => {
    const { id } = useParams()
    const current = id - 1;

    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            businessName: '',
            email: '',
            phoneNumber: '',
            shippingAddress: ''
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            })
    }

    console.log(formData)

    return (
        <div className='text-black my-20 w-5/6 mx-auto bg-slate-300 py-8 text-center rounded-md'>
            <h1 className='font-bold text-lg mb-4'>{products[current].name}</h1>
            <form onSubmit={handleSubmit} className='grid grid-flow-row justify-center gap-4'>

                <label className='label__input'>
                    Pricing:
                    <select onChange={handleChange} name='pricing' className='form__input text-gray-500'>
                        {products[current].pricing.map((item) => {
                            return (<option>{item}</option>)
                        })}
                    </select>
                </label>

                <label className='label__input'>
                    First Name:
                    <input
                        type='text'
                        name='firstName'
                        placeholder='John'
                        required
                        className='form__input'
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                </label>

                <label className='label__input'>
                    Last Name:
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Smith'
                        required
                        className='form__input'
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </label>

                <label className='label__input'>
                    Business Name:
                    <input
                        type='text'
                        name='businessName'
                        placeholder='John Smith Enterprises'
                        required
                        className='form__input'
                        onChange={handleChange}
                        value={formData.businessName}
                    />
                </label>

                <label className='label__input'>
                    Email:
                    <input
                        type='email'
                        name='email'
                        placeholder='johnsmith@gmail.com'
                        required
                        className=' form__input'
                        onChange={handleChange}
                        value={formData.email}
                    />
                </label>

                <label className='label__input'>
                    Phone Number:
                    <input
                        type='tel'
                        name='phoneNumber'
                        placeholder='+1 (123) 456-7890'
                        required
                        className='form__input'
                        onChange={handleChange}
                        value={formData.phoneNumber}
                    />
                </label>

                <label className='label__input'>
                    Shipping Address:
                    <input type='text'
                        name='shippingAddress'
                        placeholder='123 Main St.'
                        required
                        className='form__input'
                        onChange={handleChange}
                        value={formData.shippingAddress}
                    />
                </label>

                <label className='label__input'>
                    Date Needed:
                    <input
                        type='date'
                        name='date-needed'
                        className='form__input text-gray-400'
                        onChange={handleChange}
                    />
                </label>
                <input type='submit' className='bg-orange-400 rounded-md hover:bg-orange-500 p-2 cursor-pointer focus:ring-2 focus:outline-none ring-orange-400'></input>
            </form>
        </div >
    )
}

export default OrderForm