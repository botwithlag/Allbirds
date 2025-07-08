import { dividerClasses } from '@mui/material/Divider'
import React from 'react'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
function ShowReplies() {
    const [open,setOpen]=useState(false)

    const tab=(
        <div className="h-auto m-[10px] bg-gray-100 rounded-xl w-full">
              <div className='h-[90px] w-full flex-col flex justify-center ml-2'>
                <div className='flex gap-1'>
                <div className="h-[40px] w-[40px] rounded-4xl border-2 "><img src="\/\/www.allbirds.com\/cdn\/shop\/files\/A11458_25Q1_Tree_Dasher_2_Twilight_White_Twilight_Teal_Blizzard_PDP_PAIR_3Q-2000x2000.png?v=1736294812" alt="" />  </div>
                 <h1 className='font-bold'>Name</h1>   
                </div>
                <div className='h-auto ml-[40px] w-auto text-center bg-gray-200 rounded-xl overflow-hidden mr-5'><p>jskjdk</p></div>
            
               
             </div>
        </div>

    )
  return (
    <div className='h-auto w-full flex flex-col'>
        <button className='h-[20px] w-[50px] bg-blue-100 text-center text-[10px] font-bold rounded-xl text-black ' onClick={()=>setOpen(!open)}>Replies</button>
       {open?tab:(<div className='hidden'></div>
       )}
    </div>
  )
}

export default ShowReplies
