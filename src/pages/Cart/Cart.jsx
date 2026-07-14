import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const {cartItems,food_list,removeFromCart} = useContext(StoreContext);
console.log(cartItems)
  return (
    <div className='cart mt-2 '>
      <div className='cart-items '>
        <div className="cart-items-title grid grid-cols-6 text-gray-600 h-6 items-center ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='-mt-3'/>
        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0){
            return (
              <div>
                <div className=' h-12 grid grid-cols-6 items-center mt-2 mb-2 text-black'>
                <img src={item.image} className='rounded-sm w-[60px] h-[50px]' alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p> {cartItems[item._id]}</p>
                <p> ${item.price * cartItems[item._id]}</p>
                <p>x</p>
                
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>

    </div>
  )
}

export default Cart
