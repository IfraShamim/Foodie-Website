import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-[#FE9E0D] cursor-pointer md:mx-0 mx-auto text-white font-bold p-2 rounded w-[8rem] text-center'>
        {props.text}
    </div>
  )
}

export default Button