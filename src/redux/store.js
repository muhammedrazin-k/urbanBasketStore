import {configureStore} from '@reduxjs/toolkit'
import productsSlice from './slice/productsSlice'
import whislistSlice from './slice/whislistSlice'
import cartSlice from './slice/cartSlice'

const store=configureStore({
    
    reducer:{
        products:productsSlice,
        Whishlists:whislistSlice,
        carts:cartSlice
    }
})

export default store