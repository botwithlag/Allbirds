import Divider from '@mui/material/Divider'
import React from 'react'

function HighlightsCard() {
  return (
    <div className='h-auto w-full bg-gray-100 mt-4 justify-center items-center m-5'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-[30px] '>
           <div className=' h-auto gap-2 w-full text-center text-[15px]  font-poppins'>
            <h1 className='text-xl font-bold'>Free Shipping</h1>
            <h1 className='text-[12px] mb-2'>on orders over $75</h1>
             <Divider/>
           </div>
            <div className=' h-auto gap-2 w-full text-center text-[15px]  font-poppins'>
            <h1 className='text-xl font-bold'>Easy Returns</h1>
            <h1 className='text-[12px] mb-2 '>within 30 days</h1>
             <Divider/>
           </div>
            <div className=' h-auto gap-2 w-full text-center text-[15px]  font-poppins'>
            <h1 className='text-xl font-bold'>Visit Us</h1>
            <h1 className='text-[12px] mb-2'>Find a store near you</h1>
             <Divider/>
           </div>
      </div>
    </div>
  )
}

export default HighlightsCard
