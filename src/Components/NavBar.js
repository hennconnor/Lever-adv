import React from 'react';
import { useState } from 'react';
import Logo from '../Images/leverLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const [show, setShow] = useState(false);
    return (
        <div className='bg-[#0d364f] text-zinc-50 py-4'>
            <div className='w-5/6 mx-auto flex justify-between items-center'>
                <p>Lever Advertising</p>
                <FontAwesomeIcon icon={faBars} className='md:hidden cursor-pointer' onClick={() => console.log('click')} />
                <div className='hidden md:flex'>
                    <Link to='/'>Home</Link>
                    <Link to='products'>Products</Link>
                    <Link to='faq'>FAQ</Link>
                    <Link to='contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;