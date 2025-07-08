import React from 'react'

function Footer() {
  return (
    <div className="h-[500px] w-auto bg-black text-[10px] text-white flex flex-col gap-2 mt-5 ">
      <div className='flex gap-2 m-8'><input type="Text" className='border-gray-500 border w-[200px] bg-gray-500' /><button className='bg-gray-500 h-[30px] w-[100px] font-bold text-[12px] text-center'> SIGN UP</button></div>
      <div className='flex flex-row w-full h-full gap-[120px] ml-8' >
         <div className='flex flex-col gap-5 ml-2'>
        <h1 className='font-bold text-[12px]'>HELP</h1>
         <h1>12973</h1>
         <h1> 1263912</h1>
         <h1> 12912</h1>
       </div>
       <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-[12px]'>SHOP</h1>
         <h1>12973</h1>
         <h1> 1263912</h1>
         <h1> 12912</h1>
       </div>
        <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-[12px]'>COMPANY</h1>
         <h1>OUR STORES</h1>
         <h1> OUR STORY</h1>
         <h1> OUR MATERIALS</h1>
       </div>
      </div>
    </div>
  )
}

export default Footer
