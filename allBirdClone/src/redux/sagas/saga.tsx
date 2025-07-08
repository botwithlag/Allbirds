
import { call,put,takeEvery } from "redux-saga/effects";
import  { addItem, addItemFailed, addItemSuccess } from '../CartSlice'
import { useAppDispatch } from "../hooks";
import { asyncFn } from "./asyncfunction";
import type { AddToCartProps } from "../../AddToCart";
function* checkAvailability(action:any){
const status:boolean=yield call(asyncFn,{product:action.payload.handle} );
if(status)
{
    yield put(addItemSuccess(status))
    console.log("succesfully addedItem")
}
else{
    yield put(addItemFailed(!status))
    console.log("item is not available")
}
}

function* watcherActionFunction()
{
   yield takeEvery(addItem.type,checkAvailability)
}

export default watcherActionFunction;