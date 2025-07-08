import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import type { AddToCartProps } from "../Page/AddToCart";
import { useAppSelector } from "../redux/hooks";
import { useAppDispatch } from "../redux/hooks";
import { clearCart, closeCart, removeItem } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/EmptyCart.png"
import { useTranslation } from "react-i18next";
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { Cross1Icon } from "@radix-ui/react-icons";
import { AnimatePresence } from "motion/react";
import * as motion from 'motion/react-client'


const DrawerButton:React.FC=()=>{

  const dispatch=useAppDispatch()
    const [total,setTotal]=useState(0);
    function clearCartFunction(){
      dispatch(clearCart())
    }
    const {t}=useTranslation()
    const navigate=useNavigate()
    const cartItems=useAppSelector(state=>state.cart.cart)
    const redOpen=useAppSelector(state=>state.cart.isCartOpen)
    useEffect((()=>{
     const totalSum= cartItems.reduce((accumulator,currentValue)=>currentValue.price+accumulator,0);
     setTotal(totalSum)
    }),[cartItems])
    const drawerList=(  
      <Box sx={{width:400 }} role="presentation" >
        <List>
         { cartItems.length>0?
          (<div className="flex-1/2 flex-row w-full h-full">
         
                     <ListItem> <button className="h-[30px] w-full bg-black text-white text-center font-bold "   onClick={clearCartFunction}>{t('clear_cart')}</button></ListItem>
          </div>):(<div className="flex-col justify-items-center font-bold text-center gap-2"><div className="h-50 w-50 "><img className="object-cover"src={EmptyCart} alt="" /></div><h1>Click on Add to Cart to add items</h1></div>)
          }


          <ScrollArea.Root className="h-[250px] w-full">
            <ScrollArea.Viewport className="size-full ">
            
          {cartItems.map((item:AddToCartProps,index)=>{
          
          return(
          <>
           <AnimatePresence> 
            <ListItem>
              <motion.div key={index} className="w-full h-auto justify-center text-center items-center">
                  <motion.div key={index} transition={{duration:3}} exit={{opacity:0}} className=" h-[100px] w-full flex gap-[50px] justify-center " >
                    <motion.div key={index} className="flex justify-items-start w-full gap-2">
                      <motion.div key={index}className="w-[90px] h-[100px] bg-gray-100">
                          <img className="object-cover w-full h-full " key={index} src={item.img} alt="" />
                        </motion.div>
                        <motion.div key={index }className=" h-[60px] w-[100px] overflow-hidden"><h1 key={item.handle} className="text-[10px] text-right">{item.handle}</h1></motion.div>
                        </motion.div>
                        <motion.div key={index} className="flex flex-col justify-between ">
                          <motion.button key={index} className="h-[10px] w-[40px]  text-center   " onClick={()=>dispatch(removeItem(item))}><Cross1Icon/></motion.button>
                            <motion.h1 key={index} className="text-center font-bold text-[12px] mb-2">${item.price}</motion.h1>
                        </motion.div>
                        
              </motion.div>
               <Divider color="gray" variant="fullWidth"></Divider>  
              </motion.div>
             
            </ListItem>
           </AnimatePresence>
            <div></div> 
   
          </>
        )}
        )} 

            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className=" h-full w-2">
              <ScrollArea.Thumb className="bg-gray-500 rounded-2xl h-1 w-1"></ScrollArea.Thumb>
            </ScrollArea.Scrollbar>
		

          </ScrollArea.Root>
 <ListItem> 
  <div className="w-full h-auto">
    <Divider/>
    <div className="text-[10px] h-[30px] text-center flex items-center  "><p>Gifting? Add a Note</p></div>
    <Divider/>
    <div className="text-[10px] h-auto w-full flex  justify-between m-1">
      <div className="flex flex-col gap-2">
        <span >Sub total</span>
        <span > Shipping</span>
      </div>
      <div className="flex flex-col gap-2 font-bold">
        <span>${total}</span>
        <span> FREE</span>
      </div>
      </div>
    {cartItems?(<button className="h-[30px] w-full mt-2 bg-black text-white text-center font-bold hover:bg-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer"   onClick={()=>navigate("/checkout")}>{t('go_to_checkout')}</button>):(<div></div>)}
  <div className="flex gap-1 w-full h-auto p-1 text-center text-[10px] font-bold">
    <button className="h-[20px] w-1/3 bg-purple-600 ">ShopPay</button>
    <button className="h-[20px] w-1/3 bg-yellow-500 ">PayPal</button>
    <button className="h-[20px] w-1/3 bg-yellow-700 ">AmazonPay</button>
  </div>
  </div>
 </ListItem>       
      </List>
      </Box>
    );
      return(<>
      <Drawer anchor="right" open={redOpen} onClose={()=>{dispatch(closeCart())}}>
        <div>
          {drawerList}
        </div>
      </Drawer>
      </>)

}

export default DrawerButton