import React, { useState } from 'react'
import { icons } from '../assets/assests';

const LoginForm = ({setShowLogIn}) => {
    const [currState,setCurrState]= useState("Sign Up");
  return (
    <div>
      <form action="">
        <div className="loginTitle">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogIn(false)} src={icons.closeIcon} className='bg-red-700 w-7 cursor-pointer h-7' alt="" />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
