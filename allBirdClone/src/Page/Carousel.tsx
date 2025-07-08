import {useState} from "react"
import InfoSlates from "./InfoSlates"
import type {Image}  from "../hooks/useProductInfo"
import HighlightsCard from "./HighlightsCard"
import * as motion from 'motion/react-client'
interface CarouselProp{
    Images:Image[],
    stick:boolean
}
const Carousel:React.FC<CarouselProp>=({Images,stick})=>{
  //style={stick?stickyStyles:regularStyle}

  const stickyStyles: React.CSSProperties ={
  position:'sticky',
  top:0
}
const regularStyle: React.CSSProperties ={
  position:'relative'
}
    const [currentSlide,setCurrentSlide]=useState<number>(0)

    const handleFunction=(index:number)=>{
        setCurrentSlide(index)
       
    }
    return(
        <>
        <div  className="w-full opacity-100 bg-white md:w-1/2 md:h-auto flex flex-col p-4">
        <div className=" flex w-auto  h-auto ">
        <div className="  flex flex-col mr-2 h-full w-15  hidden md:block">
            {
                Images.map((image,index)=>{

                    return(
                        <motion.div whileTap={{scale:0.5}} key={index }className=" h-15 w-15 rounded-xl mb-3">
                        <button className="focus-within:outline-black focus-within:ring-2 " onClick={()=>handleFunction(index)}>
                        <img className="min-w-full min-h-full object-cover" src={image.src} alt={image.alt} />
                        </button>
                        </motion.div>
                    )
                })
            }
        </div>
        
     
        <motion.div whileHover={{scale:1.1}}className="  overflow-hidden shadow-gray-700 md:h-screen w-full bg-gray-100 rounded-4xl cursor-pointer ">
            <motion.div  transition={{duration:0.5, ease:"easeInOut"}}  className=" flex h-full transition-transform duration-200 ease-in-out " style={{transform:`translateX(-${currentSlide * 100}%)`}}>
                <div className=" flex  "> 
                    { 
                        Images.map((image,index)=>{
                               
                            return(<img key={index} className="min-w-full min-h-full cursor-pointer " src={image.src} alt={image.alt}></img>)
                           
                        })
                    }
                </div>
                

            </motion.div>



        </motion.div>

      
        </div>
      
        </div>

        <div className="flex justify-center h-full md:hidden w-full m-4">  <div className="flex gap-[2px] md:hidden ">
            { 
                Images.map((image,index)=>{
                     return <><button className="h-[7px] w-[7px] bg-black border-2 focus:outline-black focus:bg-white" style={{borderRadius:120}} onClick={()=>handleFunction(index)}></button></>
                })
            
            }
        </div></div>
        
        </>
        

    )
}

export default Carousel