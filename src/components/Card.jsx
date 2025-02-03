import React from 'react'

const Card = (props) => {
  return (
    <div className='rounded-lg p-[2rem] mb-[2rem] shadow-2xl'>
        <p className='flex justify-center text-[#FE9E0D] font-bold text-[5rem] mb-[2.5rem]'>
            {props.icon}
        </p>
        <p className='text-[#505050] text-center text-[1.5rem] mb-[1.5rem] font-bold'>
        {props.heading} <br />
        </p>
        {props.text}
    </div>
  )
}

export default Card