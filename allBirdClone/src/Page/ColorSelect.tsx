import { Text } from "@radix-ui/themes"
import {Heading} from "@radix-ui/themes"
import type {Products} from "../hooks/useProductInfo"
import {  useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import * as motion from "motion/react-client"
interface ColorSelectProps{
    color:string,
    heading:string,
    products:Products
}




const ColorSelect:React.FC<ColorSelectProps>=({color,heading,products}:ColorSelectProps,)=>{
 const navigate=useNavigate()
 const location=useLocation()
  const allColors=Object.keys(products)
 

const changeLastPathSegmentColor = (color:string) => {
      const currentPathSegments = location.pathname.split('/').filter(Boolean);
      const newPathSegments = [...currentPathSegments]; 
      
      
      newPathSegments[newPathSegments.length - 1] = color;
      
      const newPath =  '/'+ newPathSegments.join('/');
      navigate(newPath);
  };
  
    
  return (
    <>

      <div className="mt-4">
       <Heading as="h6" size='2'>{heading} <Text color="gray" >{color}</Text></Heading>
      </div>
    
    <div className="ml-3 mt-3 mb-5 flex-wrap gap-2">
      {
        allColors.map((item,index)=>{
          return (<motion.button whileTap={{scale:1.5}} key={index} className={`w-7 h-7 ml-2 rounded-full  outline-black  focus:ring-2 ` }
        style={{ backgroundColor: products[item].colors[0] }} onClick={()=>{changeLastPathSegmentColor(products[item].handle) }}></motion.button>)
        })
      } 
</div>
</>     
  )
  // Things to remember : string interpolation does not work with bg-color items in tailwind
}
export default ColorSelect