import AppBar from './components/AppBar'
import MiniAdbar from './components/MiniAdBar'
import { useState } from 'react'
import useCollections from './useCollections'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from './redux/hooks'
import * as  motion from 'motion/react-client'
import { addItem, closeCart, openCart } from './redux/CartSlice'
function Collections() {
    const [open,setOpen]=useState(false);
    const navigate=useNavigate()
    const {data}=useCollections()
    const keys=Object.keys(data)
    const dispatch=useAppDispatch()

function addIntoCart(handle:string,img:string,price:number){

    dispatch(addItem({handle,img,price}))
    dispatch(openCart())  
}



  return (
    <div>
     <MiniAdbar/>
    <AppBar/>
    <div className='h-auto w-full flex m-5'>
 
     <div className='w-full h-auto relative flex flex-wrap m-3'>
      
      {
        keys.map((key)=>{
        const sizeKeys=Object.keys(data[key].sizes)
        console.log(sizeKeys)
            return <>
        <motion.div whileHover={{scale:0.9}} className=" relative group w-1/2 md:w-1/4 h-auto hover:shadow-xl flex flex-col justify-center  ">
         <div className='h-[200px] w-[200px] m-7 cursor-pointer  '>
            <button onClick={()=>{console.log(data[key].id);navigate(`/product/${data[key].id}/${data[key].handle}`)}}><img className="h-full w-[200px] object-cover bg-neutral-100 cursor-pointer" src={data[key].images[1].src} alt={data[key].images[0].alt} /></button>
         </div>
         <div className=' m-2 gap-2 text-[10px]'>
           <h1 className='font-bold mb-2'>{data[key].handle}</h1>
           <h2 >${data[key].price}</h2>
         </div>
         <div className='flex justify-between'>
          <h1 className=' m-3 text-[12px] md:hidden group-hover:block'>Quick Add</h1>
          <h1 className='block md:hidden text-[10px] m-5'><button onClick={()=>setOpen(!open)}>button</button></h1>
         </div>
          {open?(<div className='block'>
             <div className=' w-full md:w-full h-auto md:hidden flex  md:group-hover:flex  gap-2 flex-wrap m-3 text-[10px]'>
            {sizeKeys.map((sizeKey,index)=>{
                return <> <div key={index} className='h-[40px] w-[40px] border-2 border-black'><button key={index} className="cursor-pointer h-full w-full" onClick={()=>addIntoCart(data[key].handle,data[key].images[0].src,data[key].price)}>{sizeKey}</button></div></>
            })
             }
         </div>
          </div>):(<div className='hidden md:block'>
             <div className=' w-full md:w-full h-auto hidden  md:group-hover:flex  gap-2 group-hover:flex-wrap m-3 text-[10px]'>
            {sizeKeys.map((sizeKey,index)=>{
                return <> <div key={index} className='h-[40px] w-[40px] border-2 border-black'><button key={index} className="cursor-pointer h-full w-full" onClick={()=>addIntoCart(data[key].handle,data[key].images[0].src,data[key].price)}>{sizeKey}</button></div></>
            })
             }
         </div>
          </div>)}
       </motion.div>            
  
            </>
        })
      }
    
    </div>
     
         
    </div>      
    </div>
  )
}

export default Collections
