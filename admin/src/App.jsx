import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Navbar />
      <hr />
     <div className='app-content flex '>
       <Sidebar />
     </div>
    </div>
  )
}

export default App
