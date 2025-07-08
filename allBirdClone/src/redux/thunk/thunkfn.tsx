
import axios from "axios"
import { useAppDispatch } from "../hooks"
import { getHotProducts } from "../CartSlice"
export default function gatherSimilarUsers(product:string){
  const dispatch=useAppDispatch()
return async function gatherHotProdcutsByThunk(){

  console.log("hello from thunk")
  dispatch(getHotProducts())
}

}