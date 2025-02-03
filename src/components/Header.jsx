import React, { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { AiTwotoneCloseSquare } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const lists = [
        { name: 'Home', path: 'home' },
        { name: 'About', path: 'about' },
        { name: 'Testimonials', path: 'testimonials' },
        { name: 'Contact', path: 'contact' }
    ];

    return (
        <div className='max-w-[1240px] mx-auto flex justify-between items-center'>
            <div className='text-[#FE9E0D] text-[2rem] tracking-widest font-bold'>FOODIE</div>
            {toggle ? 
                <IoClose onClick={() => setToggle(!toggle)} className='md:hidden block text-black cursor-pointer text-3xl' />
                : <RiMenu3Line onClick={() => setToggle(!toggle)} className='md:hidden block text-black cursor-pointer text-2xl' />
            }
            <ul className='hidden md:flex items-center gap-16 font-semibold'>
                {lists.map((list, index) => (
                    <li id={list.id} key={index} className='cursor-pointer'>
                        <a href={`#${list.path}`}>{list.name}</a>
                    </li>
                ))}
            </ul>

            {/* Responsive Menu */}
            <ul className={`md:hidden duration-100 flex flex-col items-center fixed top-0 bg-[#FE9E0D] text-white rounded-tl-2xl h-screen w-[60%] sm:w-[30%] 
                ${toggle ? 'right-[0]' : 'right-[-100%]'}`}>
                <AiTwotoneCloseSquare onClick={() => setToggle(!toggle)} className='md:hidden text-white block ml-[-9rem] mt-[1rem] cursor-pointer text-3xl' />
                {lists.map((list, index) => (
                    <li key={index} className="p-7 cursor-pointer hover:text-black">
                        <a href={`#${list.path}`}>{list.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
