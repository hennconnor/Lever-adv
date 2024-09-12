import React, { useState } from 'react'
import CarouselItem from './CarouselItem'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaCircle, FaCircleDot } from "react-icons/fa6";

import Image1 from '../Images/Cinema-slide.jpeg'
import Image2 from '../Images/EasyFlow-slide.jpeg'
import Image3 from '../Images/Genesis-slide.jpeg'
import Image4 from '../Images/Montreux-slide.jpeg'

const Carousel = () => {

    const [slide, setSlide] = useState(0);
    const products = [{ id: 2, image: Image1, title: "Cinema 500 Pen" },
    { id: 4, image: Image2, title: "Easy Flow Pen" },
    { id: 3, image: Image3, title: "Genesis Pen" },
    { id: 1, image: Image4, title: "Montreux Pen" }]

    const clickLeft = () => {
        setSlide(slide === 0 ? products.length - 1 : slide - 1);
    }

    const clickRight = () => {
        setSlide(slide === products.length - 1 ? 0 : slide + 1);
    }

    // const circleClick = (index) => {
    //     setSlide(index)
    // }
    return (
        <div className='my-8'>
            <div className='relative'>
                {products.map((product, index) => { return <CarouselItem product={product} key={index} slide={slide} index={index} /> })}
                <button onClick={clickLeft}><FaArrowLeft className='cursor-pointer md:size-9 size-6 bg-slate-600 opacity-70 hover:opacity-100 hover:scale-125 duration-500 absolute top-1/2 left-2' /></button>
                <button onClick={clickRight}><FaArrowRight className='cursor-pointer bg-slate-600 size-6 md:size-9 opacity-70 hover:opacity-100 hover:scale-125 duration-500 absolute top-1/2 right-2' /></button>
            </div>
            {/* <div className='flex justify-around items-center bg-[#0d364f] p-2 border-stone-400 border-solid border-t-2'>
                <button onClick={clickLeft}><FaArrowLeft className='cursor-pointer size-7 opacity-80 hover:opacity-100 hover:scale-125 duration-500' /></button>
                {products.map((product, index) => {
                    return <div onClick={() => circleClick(index)}>{slide === index ? <button><FaCircleDot className='size-5 scale-125' /></button> : <button><FaCircle className='cursor-pointer opacity-80 size-5 hover:opacity-100 hover:scale-125 duration-500' /></button>}</div>
                })}
                <button onClick={clickRight}><FaArrowRight className='cursor-pointer size-7 opacity-80 hover:opacity-100 hover:scale-125 duration-500' /></button>
            </div> */}
        </div>
    )
}

export default Carousel