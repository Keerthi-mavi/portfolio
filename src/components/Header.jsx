import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import Menu from './Menu'

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [ openHeader, setOpenHeader ] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY > 60) {
            setScrollHeader(true);
        } else {
            setScrollHeader(false);
        }
    }

    const openMenuHandle = () => {
        setOpenHeader( (prevState)=>{
            return !prevState;
        });
    }
    const closeMenuHandle = () => {
        setOpenHeader(false);
    }
    window.addEventListener('scroll', scrollHandler);

    const menuClass = openHeader ? `h-screen fixed left-0 top-0 max-w-[400px] w-full bg-gray-900 text-white p-2 flex-col text-center` : `ml-10 hidden items-baseline space-x-4 md:flex`;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${scrollHeader ? 'bg-gray-900 shadow-md text-white ' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className='flex items-center justify-between h-16 text-xl font-semibold'>
                    <h1 className={`text-4xl ${!scrollHeader && 'text-[#111827]'}`}>Portfolio</h1>

                    <div >
                        <Menu menuclass={menuClass} openHeader={openHeader} openMenuHandle={openMenuHandle} closeMenuHandle={closeMenuHandle}/>
                    </div>

                    <div className='block md:hidden'>
                       { !openHeader && <button className='p-3 hover:bg-slate-300 rounded-md' onClick={openMenuHandle}> 
                            <TiThMenu /> 
                        </button>}
                    </div>

                </div>
            </div>
        </nav>

    );
};

export default Header;