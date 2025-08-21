import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const result= await axios('https://dummyjson.com/products')
    localStorage.setItem('allProducts',JSON.stringify(result.data.products))
    return result.data.products

})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allproduct:[],
        dummyAllProducts:[],
        loading:false,
        error:''
    },
    reducers:{
         searchProduct:(state,action)=>{
          state.allproduct= state.dummyAllProducts.filter(pro=>pro.title.toLowerCase().includes(action.payload))
         }
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allproduct=action.payload
            state.dummyAllProducts=action.payload
            state.loading=false
            state.error=''
        })

        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allproduct=[]
            state.loading=true
            state.error=''

        })

        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allproduct=[]
            state.loading=false
            state.error="API CALL FAILED ... Please try after some time"
        })

    }
})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer