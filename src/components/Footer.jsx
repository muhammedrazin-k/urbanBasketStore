import React from 'react'

export const Footer= () => {
  return (
    <div>
        <div className="footer w-full bg-red-800 text-gray-200 p-1 sm:p-4 flex items-center  sm:justify-between flex-col sm:flex-row ">

        <div className="copyright">
        <p>Copyright © {new Date().getFullYear()} - OnlineShop Official</p>
        </div>
        <div className="icons flex  px-3">
        <i className="fa-brands fa-instagram text-xl"></i>
        <i className="fa-brands fa-facebook text-xl"></i>
        <i className="fa-brands fa-github text-xl"></i>
        </div>
        </div>
    </div>
  )
}
