import React from "react"

export const NavButton = () => {
  const handleButtonClick = (event) => {
    // handle button click event here
  }

  return (
    <div className='items-center flex justify-between gap-5 my-auto px-5 max-md:max-w-full max-md:flex-wrap'>
      <div className='text-black text-2xl font-bold leading-6 tracking-wider my-auto'>
        Exclusive
      </div>
      <div className='items-start self-stretch flex justify-between gap-5 px-px'>
        <button
          onClick={handleButtonClick}
          className='text-black text-center text-base leading-6 whitespace-nowrap items-stretch self-stretch aspect-[2] justify-center'
        >
          Home
        </button>
        <button
          onClick={handleButtonClick}
          className='text-black text-center text-base leading-6 self-center my-auto'
        >
          Contact
        </button>
        <button
          onClick={handleButtonClick}
          className='text-black text-center text-base leading-6 self-center my-auto'
        >
          About
        </button>
        <button
          onClick={handleButtonClick}
          className='text-black text-center text-base leading-6 mt-1.5 self-start'
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
