import { useEffect,useState } from "react"
import axios from "axios"
import shoes from "../json/product1.json"
export interface Image{
    src:string,
    alt:string
}
export interface Size{
  [key:string]:Availablity
}




interface Availablity{
  id: number;
  sku: string;
  value: string;
  available: boolean;
  backordered: boolean;
  isFinalSale: boolean;
  metafields: { [key: string]: string | boolean | undefined; };
  price: number;
  compareAtPrice: number | null;
  handle: string;
}


  

 


export interface TargetProduct{
    fullName:string,
    description:string,
    handle:string
    price:number,
    category:string,
    images:Image[]
    colors:string[],
    sizes:Size
}

export interface Products{
  [key:string]:TargetProduct
}


const useProductInfo=(c:string|undefined,pid:string|undefined,ln:string|undefined)=>{  
  
const[product,setProduct]=useState<TargetProduct>({
    handle:"",
    description:"",
    price:13500,
    category:"",
    images:[{
        "src": "",
        "alt": ""
      },{
        "src": "",
        "alt": ""
      },{
        "src": "",
        "alt": ""
      },{
        "src": "",
        "alt": ""
      },{
        "src": "",
        "alt": ""
      },{
        "src": "",
        "alt": ""
      }],
    colors:[],
    sizes: shoes.products[0].sizes,
    fullName:""
    })

  const [allProdInfo,setAllProdInfo]=useState<Products>({})
    
 

useEffect(()=>{

  async function getData(prodno:string|undefined){
  try{
  const result=await axios.get<any>(`http://localhost:3000/${prodno}/${ln}`) //create another usehookfor this remove the dependency between color and pid
  setAllProdInfo(result.data.products);
  
 // saga thunk 

 
   const keys:string[]=Object.keys(result.data.products)
console.log(allProdInfo)
 
   let colorChangekey:string|undefined=keys.find((key)=>{
       return result.data.products[key].handle===c
       
   })

   if(colorChangekey===null||colorChangekey===undefined)
   {
      colorChangekey=keys[0]
   }

   if(!c)
   {
    colorChangekey=keys[0]
   }



   const colorChangeObj=result.data.products[colorChangekey]

   setProduct(colorChangeObj)

 }catch(e){
    console.log(e)
  }
}
getData(pid)
},[c])
return {product,setProduct,allProdInfo}
}
export default useProductInfo