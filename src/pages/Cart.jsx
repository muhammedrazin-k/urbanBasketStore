import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearAllCart, decrementQuantity,incrementQuantity, removeFromCart } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";


export const Cart = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartProduct=useSelector(state=>state.carts)

  const decrementquantity=(cartProId)=>{
      
      const existingProduct=cartProduct.find(pro=>pro.id==cartProId)
    if(existingProduct.quantity>1){
      dispatch(decrementQuantity(cartProId))
    }
    else{
      dispatch(removeFromCart(cartProId))
    }
  }
  const incrementing=(proId)=>{
    const existingProduct=cartProduct.find(pro=>pro.id==proId)
    if(existingProduct.quantity>=1){
      dispatch(incrementQuantity(proId))
    }
    else{
      dispatch(removeFromCart(proId))
    }
    
  }

  const handleDeleteCart=(proId)=>{
    dispatch(removeFromCart(proId))
  }

  const clearAll=()=>{
    console.log('am i working')
    dispatch(clearAllCart([]))
  }
 
  const buyProduct=()=>{
    toast.success('successfully placed your order')
    dispatch(clearAllCart([]))
    navigate('/')
  }


  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100  ">
      <Header insideLanding={false} />

     { cartProduct.length>0 ? <div
        className="flex flex-col items-center justify-center px-10 py-10"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-start w-full px-5 my-8">
        <h1 className="text-2xl font-bold text-gray-700 py-5">Cart Summary</h1>
        </div>
        <div className=" w-full flex justify-between gap-3 items-center gap-y-10 flex-col lg:flex-row ">
          <div className="overflow-x-auto px-2 w-full ">
            <table className="table table-zebra shadow-xl ">
              {/* head */}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
               {cartProduct.map(eachcartpro=>(
                 <tr key={eachcartpro.id}>
                 <th>{eachcartpro.id}</th>
                 <td>{eachcartpro.title}</td>
                 <td>
                   <img src={eachcartpro.thumbnail} alt="" className="h-8 w-8 rounded" />
                 </td>
                 <td className="flex gap-2">
                   <button className="p-1 border-2 px-2 rounded font-bold border-gray-400 hover:bg-gray-400 transition-all duration-300" onClick={()=>decrementquantity(eachcartpro.id)}>
                     -
                   </button>
                   <span className=" my-auto font-bold">{eachcartpro.quantity}</span>
                   <button className="p-1 border-2 px-2 font-bold rounded border-gray-400 hover:bg-gray-400 transition-all duration-300" onClick={()=>incrementing(eachcartpro.id)}>
                     +
                   </button>
                 </td>
                 <td>₹ {eachcartpro.totalPrice}</td>
                 <td>
                   <i className="fa-solid fa-trash text-red-800" onClick={()=>handleDeleteCart(eachcartpro.id)}></i>
                 </td>
               </tr>
               ))}
              </tbody>
            </table>

            <div className="flex justify-end gap-2  py-2">
              <button className="btn btn-warning" onClick={()=>clearAll()}>Empty Cart</button>
              <button className="btn btn-success">
                <Link to={'/'}>
                Shop More
                </Link>
                </button>
            </div>
           
          </div>

          <div className="checkout">
            <div className="card bg-gradient-to-r from-gray-300 to-gray-100 shadow-xl w-60 sm:w-96">
              <div className="card-body">
                <h2 className="card-title">Total Items : {cartProduct.length}</h2>
                <p>Total Amount : ₹ {cartProduct.reduce((a,b)=>a+b.totalPrice,0)} </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success w-full" onClick={buyProduct}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div
        className="flex flex-col gap-3 items-center justify-center px-10 py-10"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-red-600 text-2xl">Empty Cart......!</h1>
        <button className="btn btn-success">
                <Link to={'/'}>
                Shop More
                </Link>
            </button>
           
        
      </div>
      }

      <Footer />
    </div>
  );
};
