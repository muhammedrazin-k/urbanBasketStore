import React from "react";
import { Link } from "react-router-dom";

export const Card = ({productData}) => {
  return (
    <div>
      <div className="cards w-60 min-h-96 bg-white flex flex-col justify-between shadow-lg hover:shadow-[0px_16px_20px_rgba(0,0,0,0.7)] hover:scale-95 hover:rotate-1 transition-all duration-[800ms] my-2 ">
        <div>
          <img src={productData.images[0]} alt="" className="w-100 max-h-68 object-cover object-top " />
        </div>
        <div className="flex justify-between px-3 p-2 text-sm text-gray-800">
          <h3 className="max-w-40 font-bold">{productData.title}</h3>
          <p className="text-end text-gray-600">₹ {productData.price}</p>
        </div>
        
        <div className="p-2 ">
          <button className="border-1 w-full border-gray-800 text-gray-700 p-1 hover:bg-black hover:text-white transition-all duration-[700ms]">
          <Link to={`/view/${productData.id}`} className="">
            View More
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
