import AppBar from "./components/AppBar.tsx"
import MiniAdbar from './components/MiniAdBar.tsx'
import useGetProducts from './hooks/useGetProducts.tsx';
import { useNavigate } from 'react-router-dom'
import Banner from './assets/banner1.jpg'
import RVComp from "./components/RVComp.tsx"
import Items from "./components/newArrivalsData.tsx"
import {Button} from "@radix-ui/themes"
import WordedCards from './components/WordedCards.tsx'
import { useEffect } from "react";
import Footer from "./Footer.tsx";
import ShowReplies from "./Page/ShowReplies.tsx";
import { FlipWords } from "./components/flip-words.tsx";
import NewArrival from "./components/NewArrival.tsx";
import TestamentBanner from "./Landing/TestamentBanner.tsx";
import AnimatedComponent from "./AnimatedComponent.tsx";
import * as motion from 'motion/react-client'
export interface Data{
  id:number,
  handle:string
  img:string
  price:number
}

const LandingPage=()=>{
  const Background="banner1.png"

const {data}=useGetProducts();
console.log(data.length)
const navigate=useNavigate();
const banner1="./assets/banner1.png"
    //  <img src={Banner} alt="" className="object-fit h-full w-full " />

    useEffect(()=>{
      console.log('data',data)
    },[])

 

return(
    <div className='flex flex-col md:overflow-x-hidden dark:bg-black'>
        <div  className="dark:bg-black">
        <MiniAdbar></MiniAdbar>
        <AppBar></AppBar> 
        </div>
        <motion.div initial={{ opacity:0}}whileHover={{scale:1.2}} whileInView={{opacity:1}}viewport={{margin:"-50px"}} transition={{ease:"easeInOut",duration:1}} className=" w-full h-[500px] relative"  >
          <img src={Background} className="object-cover h-full w-full" alt="" />
          <motion.div className="absolute inset-0  h-[500px]  w-full flex justify-end items-center ">
            <div className="w-1/2 h-auto flex hover:translateX(-100%) flex-col items-end m-5 gap-4 text-white">
            <div>
            <h1 className="text-3xl"><FlipWords words={["DAZZLING","AMAZING","AWESOME"]} duration={100}/> SHOES</h1>
            </div>
            <p className="text-center">Save up to 50% on summer’s comfiest kicks—before they disappear.</p>
            </div>
        </motion.div>
        </motion.div>
        <NewArrival/>
        <div className="bg-gray-100 h-[300px] w-auto  flex flex-col justify-center items-center text-center">
            <div className="w-full dark:text-black text-center">
               <h1 className="text-[30px] font-medium">Want first Dibs?</h1>
              <p className="text-[12px] text-balance"> Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p>
            </div>
            <div className="mt-5 flex justify-center">
              <input className="outline-green-800 border-2 mr-2" type="text" />
              <button className="h-[30px] w-[100px] bg-black text-white text-center font-bold text-[12px]">SIGN UP</button>
            </div>
           
              
        </div>
        <TestamentBanner></TestamentBanner>
        <div className="relative h-auto w-auto flex flex-col md:flex-row  justify-center ">
          <div className=" relative p-4 h-[450px] md:h-[580px] w-full group md:w-1/2 shadow-lg rounded  overflow:hidden mb-2 ml-2" >
          <img className="group-hover:scale-110 h-full w-full transition-transform duration-500 ease-in-out" src={data[0]?.img} alt="" />
           <div className="absolute inset-0 flex flex-col gap-1 h-full w-full justify-end items-center text-left"> 
              <h1 className="font-bold text-xl">Rock And Stroll In Comfort</h1>
              <h1 className="text-[12px]">Effortlessly comfy styles take color cues from the Southwest’s rustic rock formations.</h1>
              <div className="mb-4">
                 <button onClick={()=>{navigate(`/product/1/mens-tree-runner-go-blizzard-hanami-night`)}} className="h-[30px] w-[120px] sm:mb-2 bg-black text-white md:bg-white  md:text-black text-[10px] font-bold hover:text-white hover:bg-black">SHOP NOW</button>
              </div>
           </div>
          </div>
         <div className="h-auto w-full  md:w-1/2 flex  md:flex-wrap ">
           {
            data.map((item:Data)=>{
                return(
                <motion.div whileHover={{scale:1.2}}className="h-auto w-1/4  md:w-auto z-50">
                   <div className="relative group md:ml-5 rounded overflow-hidden shadow-lg h-auto w-full md:w-60 group mb-2 bg-gray-100">   
                     <img className="object-cover w-full h-full  transition-transform duration-300 ease-in-out group-hover:scale-110" src={item.img} alt="this is a picture"></img>
                     <div className="absolute inset-0 opacity-80 md:opacity-0 bg-opacity-40 group-hover:opacity-70 transition-opacity duration-300 ease-in-out flex justify-center items-center ">
                      <button onClick={()=>{navigate(`/product/${item.id}/${item.handle}`)}} className="h-[30px] w-[90px] sm:mb-2 bg-black text-white md:bg-white  md:text-black text-[10px] font-bold hover:text-white hover:bg-black">SHOP NOW</button>
                      </div>
                      <div className="flex flex-col gap-1 justify-start w-[full] bg-gray-100 h-auto"><h1 className="text-[10px] overflow-hidden ml-2">{item.handle}</h1> <h1 className="text-[10px] overflow-hidden ml-2">${item.price}</h1> </div>
                    </div>
                </motion.div>)
            })
          }
         </div>
        </div>
        <div id="footer"></div>
        <WordedCards/>
        <Footer/>

    </div>
)
}
export default LandingPage