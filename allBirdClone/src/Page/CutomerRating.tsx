import React from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons';
const CutomerRating = () => {

const stars:number=4;
  return (
    <div className='h-[150px] w-full flex justify-center items-center'>
       <div className='flex flex-col justify-center'>
         <h1 className=' text-2xl'>Product Reviews</h1>
           <div className='flex ml-7 gap-2'>
            <div><h1 className='text-2xl'>4</h1></div>
            <div className='flex text-6xl'>
            {
            [...Array(stars)].map((item)=>{
                return (
                    <span>
                        <StarFilledIcon/>
                    </span> 
                )
            }
            )}
            </div>
           </div>
       </div>
    </div>
  )
}

export default CutomerRating
