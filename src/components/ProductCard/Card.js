import { useEffect, useState } from "react"

export function Card({ id, category, name, image, price, rating }) {
  return (
    <div className='items-stretch bg-white flex max-w-[195px] flex-col'>
      <header className='header flex-col overflow-hidden relative flex aspect-square w-full justify-between gap-5 pt-1 pb-12 px-1.5 items-start'>
        <img
          loading='lazy'
          srcSet={image}
          className='absolute h-full w-full object-cover object-center inset-0'
        />
        <div className='new-badge relative text-stone-50 text-sm leading-4 whitespace-nowrap justify-center items-stretch bg-green-700 aspect-[1.8076923076923077] mt-1 p-2'>
          {" "}
          {rating.count}{" "}
        </div>
        <div className='product-image relative justify-center items-center bg-zinc-100 flex aspect-square flex-col h-7 flex-1 px-1.5 rounded-[80px]'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/cac281f7c548fd6095fd617fafe99967ee76a81e0b9ed3f81188cbc33c279b95?apiKey=9b6edf8bdea342b8bc322499f1eaca1f&'
            className='aspect-square object-contain object-center w-full justify-center items-center overflow-hidden'
          />
        </div>
      </header>
      <div className='content items-stretch flex w-full flex-col p-3'>
        <div className='colors items-stretch content-center flex-wrap flex justify-between gap-2 pr-8'>
          <div className='colors-list items-stretch flex gap-1'>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/933144e0ebe95b235df3ed9878817ddf0725547878221fc21359ab8acbadbe25?apiKey=9b6edf8bdea342b8bc322499f1eaca1f&'
              className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
            />
            <div className='color-circle stroke-[2px] flex w-6 shrink-0 h-6 flex-col rounded-[50%]' />
            <div className='color-circle stroke-[2px] flex w-6 shrink-0 h-6 flex-col rounded-[50%]' />
          </div>
          <div className='text-black text-xs font-bold leading-4 self-center grow whitespace-nowrap my-auto'>
            {" "}
            +7 Colors{" "}
          </div>
        </div>
        <div className='text-neutral-400 text-xs leading-3 tracking-wider uppercase whitespace-nowrap mt-3'>
          {" "}
          {category}{" "}
        </div>
        <div className='product-name text-zinc-900 text-2xl font-bold leading-8 tracking-tight whitespace-nowrap mt-2'>
          {" "}
          {name}{" "}
        </div>
        <div className='product-info items-stretch flex justify-between gap-2 mt-3'>
          {/* <img
            loading='lazy'
            src={rating}
            className='aspect-[5] object-contain object-center w-20 items-start overflow-hidden shrink-0 max-w-full'
          /> */}
          <p>{rating.rate}</p>
          <div className='product-rating text-zinc-900 text-sm leading-4 underline self-center my-auto'>
            {" "}
            {rating.count}{" "}
          </div>
        </div>
        <div className='product-price text-zinc-900 text-lg font-medium leading-6 mt-3'>
          {" "}
          {`$${price}`}{" "}
        </div>
      </div>
    </div>
  )
}
