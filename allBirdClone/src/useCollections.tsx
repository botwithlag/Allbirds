import { useEffect,useState } from "react"
import axios from 'axios'


function useCollections()
{
    const[data,setData]=useState({})
    useEffect(()=>{
         async function getData(){
            try{ const result:any= await axios.get('http://localhost:3000/collection');
               console.log(result.data)
                setData(result.data)
        }
         catch(e){
            console.log(e)
         }
        }
        getData()
    },[])
    return {data}
}
export default useCollections