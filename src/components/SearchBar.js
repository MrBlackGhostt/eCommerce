import React from "react"

export const SearchBar = () => {
  return (
    <div className='items-stretch self-stretch flex justify-between gap-5'>
      <div className='justify-center items-stretch rounded bg-neutral-100 flex grow basis-[0%] flex-col pl-5 pr-3 py-2'>
        <div className='justify-between items-center flex gap-5'>
          <div className='flex gap-2 items-center'>
            <input
              type='text'
              id='search-input'
              className='border p-1'
              placeholder=' What are you looking for?'
            />
            <button
              className='aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full'
              aria-label='Search'
            >
              {" "}
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?apiKey=9b6edf8bdea342b8bc322499f1eaca1f&'
                className='aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full'
                alt='Placeholder'
              />
            </button>
          </div>
        </div>
      </div>

      <div className='justify-center items-stretch self-center flex gap-4 my-auto'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?apiKey=9b6edf8bdea342b8bc322499f1eaca1f&'
          className='aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full'
          alt='Image 1'
        />
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/27e6583cc2b0ad6384fa0e09ba54d132ea13906a2c9553ea3ae9481ef2628ff7?apiKey=9b6edf8bdea342b8bc322499f1eaca1f&'
          className='aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full'
          alt='Image 2'
        />
      </div>
    </div>
  )
}
