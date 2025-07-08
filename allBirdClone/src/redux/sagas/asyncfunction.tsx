
import axios, { type AxiosResponse } from 'axios'
interface asyncFnProp{
    product:string|undefined
}


export const asyncFn=async({product}:asyncFnProp)=>{
  try{
 const data:any= await axios.get(`http://localhost:3000/product/availability/${product}`);
 console.log(data)
  return data.data}
  catch(e){
    console.log(e)
  }
}
