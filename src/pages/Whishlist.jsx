import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slice/whislistSlice";
import { addToCart } from "../redux/slice/cartSlice";

export const Whishlist = () => {
  const Whislistproduct = useSelector((state) => state.Whishlists);
  const dispatch=useDispatch()

  const removeWishlist=(productId)=>{
    dispatch(removeFromWishlist(productId))
  }
  
  const AddingtoCart=(proDetails)=>{
    
    dispatch(addToCart(proDetails))
    dispatch(removeWishlist(proDetails.id))
  }

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100  ">
      <Header insideLanding={false} />

      <div
        className="flex flex-col justify-center items-center px-10  py-10"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-2xl font-bold p-2 text-gray-600">Whishlists</h1>
        {Whislistproduct.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {Whislistproduct.map((eachWhishlist) => (
              <div key={eachWhishlist.id}>
                <div className="cards flex flex-col justify-between w-60 min-h-[450px] bg-white  shadow-lg hover:shadow-[0px_16px_20px_rgba(0,0,0,0.7)] hover:scale-95 hover:rotate-1 transition-all duration-[800ms] my-2 ">
                  <div>
                    <img
                      src={eachWhishlist.thumbnail}
                      alt=""
                      className="w-100 h-72 object-cover object-top "
                    />
                  </div>
                  <div className="grid grid-cols-2 px-3 p-2 text-sm text-gray-800">
                    <h3>{eachWhishlist.title}</h3>
                    <p className="text-end text-gray-600">
                      ₹ {eachWhishlist.price}
                    </p>
                  </div>

                  <div className="p-2 flex  gap-3 ">
                    <button
                      className="border-2 w-full border-gray-300 p-1 text-gray-800 text-sm hover:bg-black hover:text-gray-200 hover:scale-95 transition-all duration-[800ms]"
                      onClick={() => removeWishlist(eachWhishlist.id)}
                    >
                      Remove
                    </button>
                    <button className="border-2 w-full border-gray-300 p-1 text-gray-800 text-sm hover:bg-black hover:text-gray-200 hover:scale-95 transition-all duration-[800ms]" onClick={()=>AddingtoCart(eachWhishlist)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-red-500 text-center">
              there is no Whishlists..
            </h1>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
