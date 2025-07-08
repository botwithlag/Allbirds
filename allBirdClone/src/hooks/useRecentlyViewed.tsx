import type { TargetProduct } from "./useProductInfo"
import {useState,useEffect} from "react"
import { useAppDispatch,useAppSelector } from "../redux/hooks"
import { viewNewItem } from "../redux/RVslice"

const useRecentlyViewed=(prop:TargetProduct)=>{
const items=useAppSelector((state)=>state.RV.list)
const dispatch=useAppDispatch()


useEffect(()=>{
dispatch(viewNewItem(prop))
},[prop])
 
}

export default useRecentlyViewed