import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slice/whislistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slice/cartSlice'



export const View= () => {
  const dispatch =useDispatch()
  const [productDetails,setProductDetails]=useState([])
  const {pid}=useParams()
  
  const whishlist=useSelector(state=>state.Whishlists)
  const handleWishlist=(pDeatils)=>{
    const existingProduct=whishlist.find(whishlistproduct=>whishlistproduct.id==pDeatils.id)
    if(existingProduct){
      alert('prduct alreay in your whishlist')
    }
    else{
      dispatch(addToWishlist(pDeatils))
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("allProducts")){
      const allproduct=JSON.parse(localStorage.getItem('allProducts'))
      const viewcard=allproduct.find(card=>card.id==pid)
      console.log(viewcard)
      setProductDetails(viewcard)
    }else{
      console.log('something went wrong')
    }
  },[])

 const addingToCart=(proDetails)=>{
  dispatch(addToCart(proDetails))
 }
  
  return (
    <div className='bg-gradient-to-r from-gray-50 to-gray-100  '>
        <Header />
        <div className='flex items-center justify-center p-4'style={{minHeight:'100vh'}}>
        <div className="card md:card-side bg-base-100 shadow-sm hover:shadow-[0_16px_20px_rgba(0,0,0,0.9)] hover:scale-110 transition-all  duration-[800ms]">
  <figure>
    <img className=' object-cover w-40 sm:w-50 hover:scale-110 hover:rotate-3 transition-all duration-[800ms]'
      src={productDetails.thumbnail}
      alt="Movie" />
      
  </figure>
  <div className="card-body flex justify-center">
    <div>
    <p className='text-gray-500 py-2 text-sm'>Product Id: {productDetails.id}</p>
    <h2 className="card-title text-xl sm:text-2xl text-gray-800">{productDetails.title}</h2>
    <p className='text-gray-500'>₹ 999</p>
    </div>
    <div>
    <p className='max-w-90 text-gray-700'>{productDetails.description} </p>
    </div>
    <div className="flex gap-3 my-5">
      <button className=" border-2 p-2 w-full border-gray-600 hover:bg-black hover:text-gray-200 hover:scale-95 font-bold transition-all duration-[800ms] shadow-xl hover:shadow-[0_15px_20px_rgba(0,0,0,0.3)]" onClick={()=>handleWishlist(productDetails)}>Wishlist</button>
      <button className=" border-2 p-2 w-full border-gray-600 hover:bg-black hover:text-gray-200 hover:scale-95 font-bold transition-all duration-[800ms] shadow-xl hover:shadow-[0_15px_20px_rgba(0,0,0,0.3)]" onClick={()=>addingToCart(productDetails)}>Cart</button>
    </div>
  </div>
</div>
</div>
    <Footer/>
    </div>
  )
}
