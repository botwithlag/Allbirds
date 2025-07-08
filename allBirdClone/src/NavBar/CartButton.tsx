import DrawerButton from "./DrawerButton";
import { useState } from "react";
import  ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { openCart } from "../redux/CartSlice";



const CartButton = () => {
    const dispatch=useAppDispatch()
     const cartItems=useAppSelector(state=>state.cart.cart);
     console.log("it should only render once")
  return (
    <>
    <button onClick={()=>dispatch(openCart())}> <div className="text-[10px] font-bold  mt-[4px]">{cartItems.length}</div><ShoppingCartIcon fontSize="small"sx={{size:20,}}></ShoppingCartIcon></button>
   <DrawerButton />
   </>
  )

}

export default CartButton
