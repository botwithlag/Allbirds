import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import  { type AddToCartProps } from '../Page/AddToCart'

interface CartState{
    cart:AddToCartProps[]
    successfulIntegration:boolean
    pending:boolean
    failedIntegration:boolean,
    hotProducts:string[],
    lastMessage:string|null,
    isCartOpen:boolean
}


const initialState:CartState={
    cart:[],
    successfulIntegration:true,
    pending:false,
    failedIntegration:false,
    hotProducts:[],
    lastMessage:null,
    isCartOpen:false

}

export  const  cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      addItemReq:(state)=>{state.pending= true;},
      addItemFailed:(state,action)=>{state.pending=false; state.failedIntegration=action.payload,state.successfulIntegration=!action.payload,state.lastMessage="Item is currently Unavailable"},
      addItemSuccess:(state,action)=>{
        if(action.payload)
      {  state.successfulIntegration=true
      }
        

      },
        addItem:(state,action:PayloadAction<AddToCartProps>)=>{
          if(state.successfulIntegration)
          {
             const newItem=action.payload
          const oldItems=state.cart
         const found= oldItems.find((item)=>item.handle===newItem.handle)
          if(found)
          {
            state.cart=oldItems
          }
          else{
            state.cart=[...oldItems,newItem]
          }
          }
         state.lastMessage=`Item ${action.payload.handle} has been successfully added`
        
        },
        removeItem:(state,action:PayloadAction<AddToCartProps>)=>{
           const items=state.cart
          const filteredItems= items.filter((item)=>item.handle!==action.payload.handle)
           state.cart=filteredItems
        },
        clearCart:(state)=>{
          const emptycart:AddToCartProps[]=[]
          state.cart=emptycart
        },
        getHotProducts:(state)=>{
          console.log("users gathered")
         
    },
    openCart:(state)=>{
       state.isCartOpen=true
    },
    closeCart:(state)=>{
      state.isCartOpen=false
    }
  }

})

export const{addItem,removeItem,clearCart,addItemFailed,addItemReq,addItemSuccess,getHotProducts,closeCart,openCart}=cartSlice.actions
export default cartSlice.reducer