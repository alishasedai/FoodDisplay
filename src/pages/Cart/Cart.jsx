import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const {cartItems,food_list,removeFromCart} = useContext(StoreContext);
console.log(cartItems)
  return (
    <div className='cart mt-[100px] mb-[100px] '>
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
                <img src={item.image} className='rounded-sm w-[40px] h-[40px] font-black' alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p> {cartItems[item._id]}</p>
                <p> ${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>
                
              </div>
              <hr />
              </div>
            )
          }
        })}
        
         
          </div>
          <div className="cart-bottom mt-[60px] flex justify-between gap-20 ">
            <div className="total flex flex-col w-1/2">
              <h2 className='font-bold text-2xl mb-2'>Cart Totals</h2>
              <div>
                <div className="cart-total-details flex justify-between text-black font-extrabold">
                  <p>Sub Totals</p>
                  <p>{0}</p>
                </div>
                <hr className='mt-[8px] mb-2 text-gray-400'/>
                <div className='cart-totals-sub flex justify-between text-black font-extrabold'>
                  <p>Delivery Fee</p>
                  <p>{2}</p>
                </div>
                <hr className='mt-[8px]  text-gray-400' />
                <div className='cart-totals flex justify-between text-black font-extrabold'>
                <b>Total</b>
                <b>{0}</b>
                </div>
              </div>
            <button className='w-[200px] py-[10px] mt-3 rounded-sm bg-[#ff6347] text-white cursor-pointer'>PROCEED TO CHECKOUT</button>

            </div>
            <div className="promoCode flex-1">
              <div>
                <p className='mb-2'>If you have a promo code, Enter it here.</p>
                <div className="inputs w-full ">
                  <input type="text" className='md:w-[360px] w-[120px] mb-3 bg-gray-200 p-2' placeholder='promo code' />
                  <button className='p-2 w-30 rounded-md text-white bg-gray-800'>Submit</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Cart
