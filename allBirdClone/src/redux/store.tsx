import {configureStore} from "@reduxjs/toolkit"
import { cartSlice } from "./CartSlice"
import { RVSlice } from "./RVslice"
import storageSession from 'redux-persist/lib/storage/session'
import localStorage from "redux-persist/lib/storage"
import cartReducer from "./CartSlice"
import RVReducer from "./RVslice"
import rootSaga from "./sagas/rootSaga"
import { combineReducers } from '@reduxjs/toolkit'
import{
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import createSagaMiddleware from "redux-saga"

const persistConfig={
    key:'cart',
    version:1,
    storage:localStorage,
    whiteList:['cart']
}

const persistConfig2={
key:'RV',
storage:storageSession,
whitelist:['RV']
}
const rootReducer=cartReducer
const secondaryReducer=RVReducer

const persistedReducer=persistReducer(persistConfig,rootReducer)
const persistedRVReducer=persistReducer(persistConfig2,secondaryReducer)
 
const sagaMiddleware=createSagaMiddleware() 

const persistedRootReducer=combineReducers({
    cart:persistedReducer,
    RV:persistedRVReducer
})



export const store= configureStore({
    reducer:persistedRootReducer,
    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare({
            serializableCheck:{
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            },
        }).concat(sagaMiddleware)  
})

sagaMiddleware.run(rootSaga)

export const persistor=persistStore(store);



export type RootState= ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export type AppStore=typeof store
