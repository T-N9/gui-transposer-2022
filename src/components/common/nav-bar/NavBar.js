import React from 'react';
import { Logo } from '../../../assets';
import { Link } from 'react-router-dom';

/* Icons */
import { AvatarIcon } from '@radix-ui/react-icons';

const NavBar = () => {
    return (
        <nav className='shadow'>
            <div className='container mx-auto flex justify-between items-center'>
               <Link to={"/"}>
                 <img className='w-32' src={Logo} alt="gui-transpo-logo" />
               </Link>


                <div>
                    <ul>
                        <li className=' p-2 shadow-md rounded-md'>
                            <Link to="/profile">
                                <AvatarIcon className='w-7 h-7'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
