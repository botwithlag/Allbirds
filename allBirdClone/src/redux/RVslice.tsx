import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type { TargetProduct } from '../hooks/useProductInfo'

interface InitialView{
    list:TargetProduct[]
}

const initialState:InitialView={
    list:[]
}

export const RVSlice=createSlice({
    name:"RV",
    initialState,
    reducers:{//uses immer only state and state based references are mutable
        viewNewItem:(state,action:PayloadAction<TargetProduct>)=>{
             state.list=state.list.filter((item)=>item.handle!==action.payload.handle)
             if(action.payload.handle)
             {
             state.list.unshift(action.payload)
             }
             
             if(state.list.length>5)
             {
                state.list.pop()
             }
    }}
})
export const {viewNewItem}=RVSlice.actions
export default RVSlice.reducer