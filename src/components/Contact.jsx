import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1240px] mx-auto'>
            <a href="#contact">
            <h1 className='mb-[1rem] text-[#F4980D] font-bold text-[1.5rem] text-center mt-[2rem]'>Contact</h1>
            </a>         
            <h1 className='text-[#4C4C4C] mb-[1.5rem] font-bold text-[2rem] text-center'>Have Question In Mind? <br /> Let Us Help You</h1>
            <div className='flex mb-[2rem] gap-4 justify-center items-center flex-wrap'>
                <input type="text" placeholder='yourmail@gmail.com' className='p-[1rem] mb-[1.5rem] md:mb-0 w-[97%] md:w-[50%] text-[#8D8D8D] bg-white font-semibold rounded-3xl' />
                <div className='bg-[#FE9E0D] cursor-pointer md:mx-0 mx-auto text-white font-bold p-2 rounded w-[8rem] text-center'>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default Contact