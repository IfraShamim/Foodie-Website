import React from 'react'
import Button from './Button'

const About = () => {
    return (
        <div id='about' className='mb-[1rem]'>
            <a href='#about'>
                <h1 className='text-[#F4980D] font-bold text-[1.5rem] text-center'>About</h1>
            </a>
            <div className='mx-auto my-2 md:flex items-center justify-center'>
                <div className=' w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] mx-auto md:w-[30rem] md:h-[30rem]'><img src="AboutBowl.png" /></div>
                <div className='md:pr-[2rem] lg:pr-[12rem]'>
                    <h1 className='text-[#4C4C4C] text-[2rem] font-bold'>Food Is An Important <br /> Part Of A Balanced <br /> Diet</h1>
                    <p className='text-[#828282] font-bold'>Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla quam.</p>
                    <p className='text-[#828282] font-bold mt-[1rem] mb-[1rem]'>Non tincidunt magna non et elit. Dolor turpis molestie <br />
                        dui magnis facilisis at fringilla quam.</p>
                    <Button text='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default About