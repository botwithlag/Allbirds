import { Text } from "@radix-ui/themes"
import type { Size } from "../hooks/useProductInfo";

import { useTranslation } from "react-i18next";

interface SelectSizeProp{
   
    setSize:React.Dispatch<React.SetStateAction<string>>,
    sizeObj:Size
}
const SelectSize:React.FC<SelectSizeProp >=({setSize,sizeObj}:SelectSizeProp,)=>{
const {t}=useTranslation()
  const sizeKeys=Object.keys(sizeObj)// does not need to be hard coded can be done by data=Object.key(sizes) then using each size as 
 return(
    <>
    <Text color="gray" weight="bold" size="2" > {t('sizes')} </Text>
   <div className="mr-5 flex-wrap  gap-5 ml-2 mt-1 ">  
    {
        sizeKeys.map((sizeKey)=>{
           if(sizeObj[sizeKey]["available"]) return (<button key={sizeKey} className="h-10 w-10 border-2 mr-2 mt-1 hover:outline-2" onClick={()=>{setSize(sizeKey)}}>{sizeKey}</button>)
        })
    }
   </div>
   <Text color="gray" weight="bold" size="1" className="mt-5 mx-auto underline" > {t('see_size_chart')} </Text>
   </>
 )
}

export default SelectSize