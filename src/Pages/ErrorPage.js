import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-black'>
            <div className='w-5/6 mx-auto flex flex-col justify-center items-center bg-slate-300 py-5'>
                <p className='text-5xl text-slate-500'>404</p>
                <p className='text-xl'>error page not found</p>
                <Link to='/'>Return to Home Page</Link>
            </div>
        </div>
    )
}

export default ErrorPage