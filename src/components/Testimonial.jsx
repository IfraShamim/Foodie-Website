import React from 'react'
import { IoIosStar } from "react-icons/io";

const Testimonial = () => {
    return (
        <div id='testimonials' className='max-w-[1240px] py-2 mx-auto'>
            <a href="#testimonials">
            <h1 className='mb-[1rem] text-[#F4980D] font-bold text-[1.5rem] text-center'>Testimonial</h1>
            </a>
            <h1 className='text-[#4C4C4C] mb-[0.5rem] font-bold text-[2rem] text-center'>What They Are Saying</h1>
            <p className='text-[#828282] mb-[1.5rem] text-center font-bold'>Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla quam.</p>
            <div className='flex justify-center'>
            <div className='rounded-4xl shadow-2xl p-[2rem]'>
                <div className='flex justify-center mb-[1.5rem]'><img src="Person.png" alt="" /></div>
                <p className='text-[#828282] mb-[1.5rem] text-center font-bold'>Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla quam.</p>
                <p className='flex justify-center gap-4 text-[2rem] mb-[1.5rem] text-[#F4980D] font-bold'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></p>
                <p className='text-[1.2rem] text-center font-semibold'>John Doe</p>
            </div>
            </div>
        </div>
    )
}

export default Testimonial