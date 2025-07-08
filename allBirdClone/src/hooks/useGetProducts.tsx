import axios from "axios"
import {useState,useEffect} from "react"


function useGetProducts()
{
const[data,setData]=useState([])
 useEffect((()=>{
    async  function getProducts(){
    const res= await axios.get("http://localhost:3000/")
    console.log(res)
     setData(res.data)
   }
   getProducts()   
   console.log(data)
 }),[])
  return {data}
}



export default useGetProducts