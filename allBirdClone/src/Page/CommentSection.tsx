import React from 'react'
import Divider from '@mui/material/Divider'
import { StarFilledIcon } from '@radix-ui/react-icons'
import ShowReplies from './ShowReplies'
function CommentSection() {
    const comments=[{
        stars:5,
        comment:"Awesome!",
        title:" Absolutely! Here's a polished and heartfelt review you can use or adapt for your recent Allbirds shoe purchase: --- ⭐️⭐️⭐️⭐️⭐️ A Dream Come True for Ethical Fitness Lovers! I absolutely LOVE my new Allbirds shoes! From the moment I put them on, I knew I had found something special. It's such a rare gift to discover a shoe that's not only vegan, sustainable, and ethically made, but also incredibly functional for my active lifestyle. These shoes have truly delivered across the board. I’ve been using them for incline treadmill walking, weightlifting, and jumping (not so much for repetitive lateral movements though as it might not be as ideal for that type of exercise from what I've gathered so far), and they’ve held up beautifully. They offer the perfect blend of support (front forward), stability, and comfort — no compromises necessary. I also really appreciate that they seem to run a little wider than a standard fit (compared to my old Nike pair), which works out perfectly for my feet. I’m so grateful to have found a brand that aligns with my values without sacrificing performance. Thank you, Allbirds, for creating something I can feel good about wearing in every",
        img: "https://cdn-yotpo-images-production.yotpo.com/Review/714256335/702594338/original.jpg?1748874920",
        title2: "Activity",
        formId: 34663,
        fieldType: "MultipleChoice",
        value: "Strength Training, Running, Walking, Jogging"
      }
    ]
  return (
    <div className='h-auto w-full m-8'>
      <div className='w-full '></div>
    <Divider />
    
        <div className='h-auto w-full flex flex-col md:flex-row gap-2 justify-between mt-5  mb-5'>
            <div className='w-auto md:w-1/2 h-auto ml-[25px] flex flex-col gap-3 overflow-hidden '>
           <div className='flex flex-row'>
             <span><StarFilledIcon/></span>
            <span><StarFilledIcon/></span>
            <span><StarFilledIcon/></span>
            <span><StarFilledIcon/></span>
           </div>
            <h1 className='font-bold'>{comments[0].comment} </h1>
            <div className='overflow-hidden w-[300px] md:w-full h-[90px] text-[12px]'> <p>{comments[0].title}</p></div>
            <div className='h-[50px] w-[60px]'><img src={comments[0].img} alt="" /></div>
            <div className='mt-[50px] w-full flex justify-center'><ShowReplies/></div>
            </div>

           <div className='h-[150px] w-[500px] md:w-[350px] mr-[50px] p-4 bg-gray-100 '>
           <div className='m-3'>
            <h1 className='text-[15px]'>JULIE</h1>
             <Divider/>
              <div className='text-[10px] flex flex-col mt-4 gap-2 text-left'>
                <h3 className='font-bold text-gray-500'>Typical Size</h3>
                <h3 className='font-bold text-gray-500'>Size Purchased</h3>
                <h3 className='font-bold text-gray-500'>Activity Level</h3>
              </div>
           </div>
           </div>
       </div>
    <Divider/>
    </div>
  )
}

export default CommentSection
