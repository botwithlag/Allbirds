import Divider from "@mui/material/Divider";
import { Heading } from "@radix-ui/themes";
import Container from "@mui/material/Container";
import {Text} from "@radix-ui/themes"
import { Button } from "@radix-ui/themes";
import CustomerDetails from "./CustomerDetails";
import {useState} from "react";
import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import {useAppSelector } from "../redux/hooks";
import { Box } from "@radix-ui/themes";
import * as ScrollArea from "@radix-ui/react-scroll-area"
const Checkout=()=>{
  const [total,setTotal]=useState<number>(0)
  const cartItems=useAppSelector(state=>state.cart.cart)
  const navigate=useNavigate()
  useEffect(() => {
    const calculatedTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(calculatedTotal);
  }, [cartItems])
  



 
    return (
      <>
     <Box>
         <div id="header"className=" h-15 min-w-full   flex justify-start">
          <Heading as="h1"><button onClick={()=>{navigate("/")}}>allbirds</button></Heading>
      </div>
     </Box>
    
   
      <Divider variant="fullWidth"  />
     
        <div className="flex h-[600px] w-screen gap-6 ">
        <div id="customerForm" className="w-screen md:w-1/2 max-h-full border-r-gray-500 h-[800px]">
        <Box>
          <div className="flex flex-col items-center ml-2 gap-4 mt-5 ">
            <div className="flex  mt-2">
              <Text weight="light" size="1"   color="gray">Express Checkout</Text>
               </div>
              <div className="flex gap-4 h-30% ">
                <Button color="blue" size="3" style={{width:150}}>Shopee</Button>
                <Button color="yellow" size="3" style={{width:150}}>Paypal</Button>
              </div>
            <div className="h-full w-full">
             <Divider  variant="middle"><Text color="gray" size="1">OR</Text></Divider>
            </div>
            <div id="Contact" className="w-full " >
               <CustomerDetails/>
               <div className=' mb-10 flex justify-center'>
                 <Button size="4" style={{width:350}}color="purple">Buy</Button>
            </div>
                   
            </div>
            </div>
        </Box>
        </div>
        <div id="cart" className=" hidden md:block w-[500px] bg-gray-100">
        <div className="border-gray-200 border-2">
          <Container maxWidth="md">  
            <ScrollArea.Root className="h-[320px] w-full mt-2">
            <ScrollArea.Viewport className="size-full ">
                 <div className="w-full md:flex justify-center   ">
                     <div className="w-full md:flex-col items-center h-auto ">    
            {cartItems.map((item)=>(
                 <>
                 <div className="flex justify-between">
                 <div className="flex gap-4 m-4">
                     <div className="h-[50px] w-[50px] ">
                <img className="object-cover border-2 bg-gray-200" src={item.img} alt="" />
            </div>
                <h1 className="text-[13px] ">{item.handle}</h1>
                 </div>
                
                <h1 className="text-[10px] m-4">${item.price}</h1>
                </div>
                </>         
            
         ))
        }
        
                 </div>
                 </div>
        </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className=" h-full w-2">
              <ScrollArea.Thumb className="bg-gray-500 rounded-2xl h-1 w-1"></ScrollArea.Thumb>
            </ScrollArea.Scrollbar>
		

          </ScrollArea.Root>
          <Divider variant="fullWidth"/>
         <div className=" m-5 font-bold flex justify-between text-[15px]">
            <h1>Total</h1>
            <h1>${total}</h1>
        </div>

            </Container></div>
            </div>
       
        </div>
      

      </>
    )
}

export default Checkout