import {useState} from "react"
 import { addItem } from "../redux/CartSlice"
import Snackbar from "@mui/material/Snackbar" //cutom make // internationalistion // dark theme and light theme
import { useAppDispatch,useAppSelector } from "../redux/hooks"
import { useTranslation } from "react-i18next"

export interface AddToCartProps{
    handle:string,
    img:string,
    price:number
}

export interface AddCardFunctionality{
    handle:string,
    img:string,
    price:number,
}

export interface addToCartOnce{
[key:string]:number
}

 
const AddToCart:React.FC<AddCardFunctionality>=({handle,img,price,})=>{

    const[open,setOpen]=useState<boolean>(false)
    const dispatch=useAppDispatch()
    const{t}=useTranslation()
    const availableStatus=useAppSelector(state=>state.cart)
     const click:addToCartOnce={}
     click[handle]=0
    const handleClick:any=():void=>{

       if(click[handle])
       {
        return
       }
       click[handle]++
        dispatch(addItem({handle:handle,img:img,price:price}))
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

return(
    <>
     <div className='mt-4 ml-5'><button className="h-[40px] w-[400px] bg-black text-white text-[15px] text-center font-bold" onClick={handleClick} >{t('AddToCart')}</button></div>
      <Snackbar
  open={open}
  autoHideDuration={4000}
  onClose={handleClose}
  message={availableStatus.lastMessage}
  
/>
    </>
)
}

export default AddToCart
