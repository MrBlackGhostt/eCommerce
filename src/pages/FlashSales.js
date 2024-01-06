import React from "react"
import { ProductCard } from "../components"

export function FlashSalesComponent() {
  console.log("sessfsf")
  return (
    <div className='items-stretch flex flex-col'>
      <div className='items-stretch flex w-full justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5'>
        <div className='max-md:max-w-full'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0'>
              <div className='items-stretch flex grow flex-col max-md:mt-10'>
                <div className='items-stretch flex justify-between gap-4'>
                  <div className='rounded bg-red-500 flex w-5 shrink-0 h-10 flex-col' />
                  <div className='text-red-500 text-base font-semibold leading-5 my-auto'>
                    Today’s
                  </div>
                </div>
                <div className='text-black text-4xl font-semibold leading-10 tracking-widest whitespace-nowrap mt-6'>
                  Flash Sales
                </div>
              </div>
            </div>
            <div className='flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0'>
              <div className='flex grow gap-4 mt-14 items-end max-md:mt-10'>
                <div className='items-stretch self-stretch flex grow basis-[0%] flex-col'>
                  <div className='text-black text-xs font-medium leading-5 whitespace-nowrap'>
                    Days
                  </div>
                  <div className='text-black text-3xl font-bold leading-8 tracking-widest whitespace-nowrap mt-1'>
                    03
                  </div>
                </div>
                <div className='items-stretch flex basis-[0%] flex-col mt-7'>
                  <div className='flex shrink-0 h-1 flex-col rounded-[50%]' />
                  <div className='flex shrink-0 h-1 flex-col mt-2 rounded-[50%]' />
                </div>
                <div className='items-stretch self-stretch flex grow basis-[0%] flex-col'>
                  <div className='text-black text-xs font-medium leading-5 whitespace-nowrap'>
                    Hours
                  </div>
                  <div className='text-black text-3xl font-bold leading-8 tracking-widest whitespace-nowrap mt-1'>
                    23
                  </div>
                </div>
                <div className='items-stretch flex basis-[0%] flex-col mt-7'>
                  <div className='flex shrink-0 h-1 flex-col rounded-[50%]' />
                  <div className='flex shrink-0 h-1 flex-col mt-2 rounded-[50%]' />
                </div>
                <div className='items-stretch self-stretch flex grow basis-[0%] flex-col'>
                  <div className='text-black text-xs font-medium leading-5 whitespace-nowrap'>
                    Minutes
                  </div>
                  <div className='text-black text-3xl font-bold leading-8 tracking-widest whitespace-nowrap mt-1'>
                    19
                  </div>
                </div>
                <div className='items-stretch flex basis-[0%] flex-col mt-7'>
                  <div className='flex shrink-0 h-1 flex-col rounded-[50%]' />
                  <div className='flex shrink-0 h-1 flex-col mt-2 rounded-[50%]' />
                </div>
                <div className='items-stretch self-stretch flex grow basis-[0%] flex-col'>
                  <div className='text-black text-xs font-medium leading-5 whitespace-nowrap'>
                    Seconds
                  </div>
                  <div className='text-black text-3xl font-bold leading-8 tracking-widest whitespace-nowrap mt-1'>
                    56
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='items-stretch flex gap-2 mt-14 self-end max-md:mt-10'>
          <button onClick={() => console.log("safsa")}>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?apiKey=9b6edf8bdea342b8bc322499f1eaca1f&'
              className='aspect-square object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full'
            />
          </button>
          <button onClick={() => console.log("safsa")}>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?apiKey=9b6edf8bdea342b8bc322499f1eaca1f&'
              className='aspect-square object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full'
            />
          </button>
        </div>
      </div>
      <ProductCard />
    </div>
  )
}
