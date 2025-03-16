import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Menu = ({menuclass, openHeader, openMenuHandle, closeMenuHandle}) => {
    return (
        <div>
            <ul className={ menuclass }>

                {openHeader && <button className='text-white p-3 flex ml-80 top-5 hover:bg-slate-300 rounded-md' onClick={openMenuHandle}><IoCloseSharp /></button>}

                <li className='hover:bg-[#98acd5] p-3 rounded-md '>
                    <a href="#about"  onClick={closeMenuHandle}>
                        About
                    </a>
                </li>
                <li className='hover:bg-[#98acd5] p-3 rounded-md'>
                    <a href="#skills" onClick={closeMenuHandle}>
                        Skills
                    </a>
                </li>
                <li className='hover:bg-[#98acd5] p-3 rounded-md'>
                    <a href="#experience" onClick={closeMenuHandle}>
                        Experience
                    </a>
                </li>
                <li className='hover:bg-[#98acd5] p-3 rounded-md'>
                    <a href="#certificates" onClick={closeMenuHandle}>
                        Certificates
                    </a>
                </li>
                <li className='hover:bg-[#98acd5] p-3 rounded-md'>
                    <a href="#contact" onClick={closeMenuHandle}>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;