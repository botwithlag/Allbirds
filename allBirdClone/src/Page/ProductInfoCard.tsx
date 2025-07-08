import { Text } from "@radix-ui/themes"
import DOMPurify from "dompurify"
import { Button } from "@radix-ui/themes"
interface Products{
    title:string,
    description:string,
    price:number
}


function cleanString(str:string)
{
    const clean=str.replace("<p>","").replace("</p>","")
    console.log(clean)
    return clean

}



const ProductInfoCard:React.FC<Products>=({title,description,price}:Products)=>{

    const shipping=false;
   
    // should use breadcrumbing instead of hardcoding it 
    return (
        <>
        <div>
        
        <div className='relative w-full  overflow-hidden h-50% m-2 ' >
        <h1 className="text-2xl text-left font-bold">{title}</h1>
        <div className="  mt-2 mb-2 w-auto font-light ">
           <div className="text-[13px] overflow-hidden w-[400px]"><p>{cleanString(description)}</p></div>
           </div>
        </div>
        <div className="flex gap-2 w-full">
           <Text weight="bold" className="pl-2">${price}</Text>
        {shipping && <Button className="ml-2"color="gray" variant="soft">Free Shipping</Button>}
        </div>
        </div> 
        </>
    )
}

export default ProductInfoCard