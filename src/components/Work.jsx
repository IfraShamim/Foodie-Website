import React from 'react'
import Card from './Card'
import { MdNoMeals } from "react-icons/md";
import { FaHandPointUp } from "react-icons/fa";
import { FaTruckPickup } from "react-icons/fa6";


const Work = () => {
    return (
        <div className='max-w-[1240px] mt-[24rem] sm:mt-[34rem] py-2 md:mt-[2.5rem] mx-auto'>
            <h1 className='mb-[1rem] text-[#F4980D] font-bold text-[1.5rem] text-center'>Work</h1>
            <h1 className='text-[#4C4C4C] mb-[0.5rem] font-bold text-[2rem] text-center'>How It Works</h1>
            <p className='text-[#828282] mb-[1.5rem] text-center font-bold'>Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla quam.</p>
            <div className='md:grid grid-cols-3 gap-10 justify-center flex-wrap'>
                <Card text='Lorem ipsum dolor sit amet consectetur. Maecenas orci et' heading='Pick Meals' icon={<MdNoMeals />}/>
                <Card text='Lorem ipsum dolor sit amet consectetur. Maecenas orci et' heading='Choose How Often' icon={<FaHandPointUp />}/>
                <Card text='Lorem ipsum dolor sit amet consectetur. Maecenas orci et' heading='Fast Deliveries'icon={<FaTruckPickup />}/>
            </div>
        </div>
    )
}

export default Work