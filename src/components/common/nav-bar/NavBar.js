import React from 'react';
import { Logo } from '../../../assets';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='shadow'>
            <div className='container mx-auto flex justify-center items-center'>
               <Link to={"/"}>
                 <img className='w-32' src={Logo} alt="gui-transpo-logo" />
               </Link>
            </div>
        </nav>
    );
}

export default NavBar;
