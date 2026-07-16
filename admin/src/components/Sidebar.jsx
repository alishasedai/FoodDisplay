import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";


const Sidebar = () => {
  return (
   <div className="sidebar w-15 sm:w-20 md:w-[18%] min-h-lvh border-2">
  <div className="sidebar-options pt-12 flex flex-col gap-5 px-2">
    
    <div className="sidebar-option flex items-center justify-center md:justify-start gap-2 border border-gray-500 px-2 py-2 cursor-pointer">
      <IoMdAdd />
      <p className="hidden md:block">Add Items</p>
    </div>

    <div className="sidebar-option flex items-center justify-center md:justify-start gap-2 border border-gray-500 px-2 py-2 cursor-pointer">
      <FaRegListAlt />
      <p className="hidden md:block">List Items</p>
    </div>

    <div className="sidebar-option flex items-center justify-center md:justify-start gap-2 border border-gray-500 px-2 py-2 cursor-pointer">
      <GoListOrdered />
      <p className="hidden md:block">Orders</p>
    </div>

  </div>
</div>
  )
}

export default Sidebar
