import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-[#303030] p-[4rem] md:flex justify-between gap-2 items-center'>
                <div>
                    <p className='text-[1.5rem] font-bold mb-[2rem]'>Footer</p>
                    <p className='flex gap-4 text-[2rem] font-bold mb-[1.5rem]'><FaTwitter /><FaLinkedin /><FaInstagramSquare /><FaFacebook /></p>
                </div>
                <div className='md:grid grid-cols-3 gap-24 font-semibold'>
                    <div className='mb-[1.5rem]'>
                        <ul className='list-none'>
                            <li>Quality</li>
                            <li>Help</li>
                            <li>Share</li>
                            <li>Carrers</li>
                            <li>Work</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div className='mb-[1.5rem]'>
                        <ul className='list-none'>
                            <li>244-5333-7783</li>
                            <li>hello@food.com</li>
                            <li>press@food.com</li>
                            <li>contact@food.com</li>
                        </ul>
                    </div>
                    <div>
                    <ul className='list-none mb-[1.5rem]'>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer