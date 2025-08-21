import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector}  from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchProduct } from '../redux/slice/productsSlice'

export const Header= ({insideLanding}) => {

  const dispatch=useDispatch()

  const allwhishlist=useSelector(state=>state.Whishlists)
  const allCart=useSelector(state=>state.carts)
  const cartcount=allCart.length
  const carttotal=allCart.reduce((a,b)=>a+b.totalPrice,0)
  const count=allwhishlist.length   
  
  const handleChange=(e)=>{
    dispatch(searchProduct(e.target.value.toLowerCase()))

  }
  return (
    <div>
        <div className="navbar bg-white/50 backdrop-blur-sm shadow-sm  justify-between px-2 fixed z-100">
  <div className="flex w-100 ">
    <img src="/headerLogo.png" alt="" className='w-[180px] object-cover h-16 '  />
  </div>
  {insideLanding && <div className="searchfields  w-full flex justify-end ">
    <input type="text" className='w-39 sm:w-[100%] border-2 rounded-2xl border-gray-300 px-3 p-1 ' placeholder='Search Here...' onChange={(e)=>handleChange(e)} />
  </div>}


  <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-4 -ms-25 w-40 p-2 shadow">
        <li><Link to={'/whishlist'}>
        <div className="indicator ">
        <i className="fa-solid fa-heart text-xl hover:text-red-600"></i> 
              <span className="badge w-4 h-4  indicator-item text-[10px] p-2 border-none bg-green-700 text-white">{count}</span>
        </div>
        <span className='mx-2'>Whishlist</span>
        </Link></li>
        <li>
          <Link to={'/cart'}>
          <div className="indicator ">
        <i className="fa-solid fa-cart-shopping text-xl hover:text-green-800"></i>
              <span className="badge w-4 h-4  indicator-item text-[10px] p-2 border-none bg-red-700 text-white">{cartcount}</span>
        </div>
        <span className='mx-2'>Cart</span>
          </Link>
          
        </li>
        
      </ul>
    </div>


  <div className="flex  hidden sm:flex w-full justify-end px-4">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn hover:bg-transparent border-none">
        <div className="indicator ">
        <i className="fa-solid fa-heart text-xl hover:text-red-600"></i>
              <span className="badge w-4 h-4  indicator-item text-[10px] p-2 border-none bg-green-700 text-white">{count}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{count} Items</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block ">
              <Link to={'/whishlist'}>
              whishlist
              </Link>
              </button>
          </div>
        </div>
      </div>
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn  bg-transparent border-none">
      <div className="indicator ">
        <i className="fa-solid fa-cart-shopping text-xl hover:text-green-800"></i>
              <span className="badge w-4 h-4  indicator-item text-[10px] p-2 border-none bg-red-700 text-white">{cartcount}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{cartcount} Items</span>
          <span className="text-info">Subtotal: ₹ {carttotal}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">
              <Link to={'/cart'}>
              View cart
              </Link>
              </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
    </div>
  )
}
