import { combineSlices, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice=createSlice({
    name:'cartProducts',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct=state.find(pro=>pro.id==action.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price

               

                toast.success('product quantity increased')
                                    
                            

            }
            else{
              state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
              toast.success('New product added to cart')
            }
        },

        decrementQuantity:(state,action)=>{
            const existingCart=state.find(pro=>pro.id==action.payload)
            if(existingCart){
                existingCart.quantity--
                existingCart.totalPrice=existingCart.quantity*existingCart.price
            }

        },
        incrementQuantity:(state,action)=>{
            const existingCart=state.find(pro=>pro.id==action.payload)
            if(existingCart){
                existingCart.quantity++
                existingCart.totalPrice=existingCart.quantity*existingCart.price
            }

        },
        removeFromCart:(state,action)=>{
            return state.filter(pro=>pro.id!=action.payload)

        },
        clearAllCart:(state,action)=>action.payload
    }
})

export const {addToCart,decrementQuantity,incrementQuantity,removeFromCart,clearAllCart}=cartSlice.actions
export default cartSlice.reducer