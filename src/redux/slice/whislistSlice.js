import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const whishlistSlice=createSlice({
    name:'whishlistProducts',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
            toast.success('added to whishlist')
        },
        removeFromWishlist:(state,action)=>{
            toast.warning('removed from whishlist')
            return state.filter(eachpro=>eachpro.id !=action.payload)
        },

       
    }
})
export const {addToWishlist,removeFromWishlist }=whishlistSlice.actions
export default whishlistSlice.reducer