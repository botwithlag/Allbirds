  
  
  import React from 'react'
  import Items from './newArrivalsData'
  import { useNavigate } from 'react-router-dom'
  import * as motion from 'motion/react-client'
  
  function NewArrival() {
    const navigate =useNavigate()
    return (
        <div className="flex h-[400px]  w-auto justify-center items-center gap-[20px] ">

          {
            Items.map((item)=>{

    return(<motion.div whileHover={{scale:1.2}} className="h-[350px] w-[500px] relative overflow-hidden rounded-lg shadow-lg group  bg-gray-100  ">
              <img src={item}alt="" className="object-cover h-full w-full transition-transform duration-500 ease-in-out  group-hover:scale-110"/>
              <div className='absolute inset-0 top-4 left-10 '><div className='text-center text-2xl font-bold '>BestSellers <br/><h1 className='font-light text-[14px] mt-5'>Fan-Favorite Sneakers, Flats, and Slip-Ons</h1></div>
              </div>
              <div className="absolute inset-0  bg-opacity-40 flex items-end mb-5 justify-center opacity-90 md:opacity-0 hover:opacity-70 transition-opacity duration-300 ease-in-out gap-2 text-[10px] font-bold">
          
                <button onClick={()=>navigate('/collections')} className="md:opacity-0 bg-white text-black group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-[30px] w-[90px]  hover:bg-black hover:text-white p-2 text-center"><p>SHOP MEN</p></button>
                <button onClick={()=>navigate('/collections')} className="md:opacity-0 bg-white text-black group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-[30px] w-[90px]  hover:bg-black hover:text-white p-2 text-center"><p>SHOP WOMEN</p></button>
              </div>
          </motion.div>)
              
            })
          }
        </div>
    )
  }
  
  export default NewArrival
  
  