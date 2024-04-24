// stateStore.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import IncDecReducer from './reducers/IncDecSlice'
import ClientReviewReducer from "./reducers/client_review";

const store = configureStore({
  reducer: {
    IncDec: IncDecReducer,
    ClientReview: ClientReviewReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//Writing these here to prevent defining the types in every file
export const useAppDispatch = () => useDispatch<AppDispatch>() //This is used to perform action
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector 
// Used to get the data from the store in the component

export default store
