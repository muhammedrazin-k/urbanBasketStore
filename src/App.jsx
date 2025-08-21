
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import { Whishlist } from './pages/Whishlist'
import { Cart } from './pages/Cart'
import { View } from './pages/View'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <>
      <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <Routes>
        
            <Route path='/' element={<Landing/>}/>
            <Route path='/whishlist' element={<Whishlist/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/view/:pid' element={<View/>}/>
          
        </Routes>
        
      </div>
    </>
  )
}

export default App
