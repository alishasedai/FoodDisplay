import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Route, Routes} from "react-router-dom";
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
 import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <ToastContainer />
      <Navbar />
      <hr />
     <div className='app-content flex '>
       <Sidebar />
       <Routes>
        <Route path='/add' element={<Add />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/orders' element={<Orders />}/>

       </Routes>
     </div>
    </div>
  )
}

export default App
