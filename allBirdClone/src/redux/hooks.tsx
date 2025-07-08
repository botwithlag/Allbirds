import {useSelector,useDispatch} from 'react-redux'
import type { AppDispatch,RootState } from './store'


export const  useAppDispatch=useDispatch.withTypes<AppDispatch>() //read from the store
export const  useAppSelector=useSelector.withTypes<RootState>() //useDispatch to dispatch actions