import React from 'react';
import { Logo } from '../../../assets';

const NavBar = () => {
    return (
        <nav className='shadow'>
            <div className='container mx-auto flex justify-center items-center'>
                <img className='w-32' src={Logo} alt="gui-transpo-logo" />
            </div>
        </nav>
    );
}

export default NavBar;
