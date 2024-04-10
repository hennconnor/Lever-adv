import React, { useState } from 'react'
import CarouselItem from './CarouselItem'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaCircle, FaCircleDot } from "react-icons/fa6";

import Image1 from '../Images/pen-image1.jpeg'
import Image2 from '../Images/pen-image2.jpeg'
import Image3 from '../Images/pen-image3.jpeg'

const Carousel = () => {

    const [slide, setSlide] = useState(0);
    const products = [{ image: Image1, title: 'Pen 1' },
    { image: Image2, title: 'Pen 2' },
    { image: Image3, title: 'Pen 3' }]

    const clickLeft = () => {
        setSlide(slide === 0 ? products.length - 1 : slide - 1);
    }

    const clickRight = () => {
        setSlide(slide === products.length - 1 ? 0 : slide + 1);
    }

    const circleClick = (index) => {
        setSlide(index)
    }
    return (
        <div className='my-8'>
            <div>
                {products.map((product, index) => { return <CarouselItem product={product} key={index} slide={slide} index={index} /> })}
            </div>
            <div className='flex justify-around items-center bg-[#0d364f] p-2 border-stone-400 border-solid border-t-2'>
                <FaArrowLeft className='cursor-pointer size-7 opacity-80 hover:opacity-100 hover:scale-125 duration-500' onClick={clickLeft} />
                {products.map((product, index) => {
                    return <span onClick={() => circleClick(index)}>{slide === index ? <FaCircleDot className='size-5 scale-125' /> : <FaCircle className='cursor-pointer opacity-80 size-5 hover:opacity-100 hover:scale-125 duration-500'
                    />}</span>
                })}
                <FaArrowRight className='cursor-pointer size-7 opacity-80 hover:opacity-100 hover:scale-125 duration-500' onClick={clickRight} />
            </div>
        </div>
    )
}

export default Carousel