import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { fetchProducts } from '../redux/slice/productsSlice'
import {useDispatch,useSelector} from 'react-redux'
import { Pagination } from '../components/Pagination'


export const Landing= () => {


  const dispatch=useDispatch()
  
  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const {allproduct,loading,error}=useSelector(state=>state.products)

  const [currentpage,setcurrentPage]=useState(1)
  const productperPage=8
  const endingIndex=currentpage*productperPage
  const startingIndex=endingIndex-productperPage

  let currentProduct=allproduct.slice(startingIndex,endingIndex)
  return (
    <div className='bg-gradient-to-tl from-gray-200 to-white  ' >
        <Header insideLanding={true}/>

        
        <div className='flex flex-col items-center justify-center py-28' style={{minHeight:'100vh'}}>

          <div className=' text-5xl sm:text-7xl max-w-250 tracking-wide font-bold px-10 my-10'>
            <h1 className='text-gray-300 '>Elevate Your Routine with<span className='text-transparent  bg-gradient-to-r from-rose-500 via-sky-300 to-orange-400 bg-clip-text bg-[length:400%_300%] animate-[gradient_4s_ease-in-out_infinite] '> Urban Basket</span></h1>
          </div>

          {loading && <div className='pt-10'>
            <span className="loading loading-spinner text-error "></span>
          </div>}
          {error &&<div>
            <h1 className='text-red-500'>{error}</h1>
          </div>}
          <div className="cardsection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 my-10">
            {allproduct.length>0 ? currentProduct.map(eachProduct=>(
              <div key={eachProduct.id}>
              <Card productData={eachProduct}/>
            </div>
            ))
            :
            <div><h1 className='text-red-500 '>there is no such Product</h1></div>
            }
          
          </div>

          <div>
            <Pagination totalProduct={allproduct.length} productperPage={productperPage} setcurrentPage={setcurrentPage} currentpage={currentpage}/>
          </div>
        </div>

        <Footer/>
    </div>
  )
}
