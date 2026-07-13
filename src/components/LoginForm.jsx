import React, { useState } from 'react'
import { icons } from '../assets/assests';

const LoginForm = ({setShowLogIn}) => {
    const [currState,setCurrState]= useState("Sign Up");
  return (
    <div className='absolute z-10 w-full h-full bg-black/50 grid '>
      <form action="" className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[30px] py-[25px] rounded-lg text-[14px] '>
        <div className="loginTitle flex gap-3 justify-between">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogIn(false)} src={icons.closeIcon} className='bg-red-700 w-7 cursor-pointer h-7' alt="" />
        </div>
        <div>
          {currState === "Login" ? <></> : <input className='border-2 w-full mb-1' type="text" placeholder='Your Name' required name="" id="" />}
          <input className='border-2 w-full mb-1' type="email" placeholder='Your Email' name="" id="" />
          <input className='border-2 w-full' type="password" placeholder='Password'
          required name="" id="" />
        </div>
        <button className='bg-black/50 text-white rounded-sm p-2'>{currState === "Sign Up" ? "Create a account" : "Login"}</button>
        <div className="login-popupCondition flex justify-center items-center gap-2">
          <input type="checkbox" required name="" id="" />
          <p className='mt-4'>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
       {currState === "Login" ?  <p>Create a new account? <span className='cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click here.</span></p> : <p>Alrready have an account? <span className='cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>}
       

      </form>
    </div>
  )
}

export default LoginForm
