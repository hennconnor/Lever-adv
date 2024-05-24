import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-black'>
            <div className='my-20 w-5/6 mx-auto flex flex-col justify-center items-center bg-slate-300 py-32'>
                <p className='text-5xl text-slate-500'>404</p>
                <p className='text-xl my-6'>error page not found</p>
                <Link className='cursor-pointer mt-2 hover:underline' to='/'>Return to Home Page</Link>
            </div>
        </div >
    )
}

export default ErrorPage