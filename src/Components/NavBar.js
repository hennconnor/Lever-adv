import React from 'react';
import { useState } from 'react';
import Logo from '../Images/leverLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {

    const [show, setShow] = useState(false);
    return (
        <div className='bg-[#0d364f] text-zinc-50 py-4'>
            <div className='w-5/6 mx-auto flex justify-between items-center'>
                <p>Lever Advertising</p>
                <FontAwesomeIcon icon={faBars} className='md:hidden cursor-pointer' />
                <div className='hidden md:flex'>
                    <a>Home</a>
                    <a>Products</a>
                    <a>FAQ</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;