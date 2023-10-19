import React from 'react'
import Navbar from '../Components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar/>
        {/* start here  */}
        <div className="flex min-h-screen ">
        <div className="flex-[2] flex flex-col justify-center items-center gap-8 w-full">
          <h1 className="text-5xl text-blue-500 font-bold">Log in</h1>

          <div className="flex justify-center w-[50%]">
            <form className="w-full" >
              <div className="flex flex-col w-full ">
                <div className="flex flex-col bg-white h-90 p-1 rounded">
                  <p className="label text-gray-400">E-mail</p>
                  <input
                    type="text"
                    className="email placeholder:text-black"
                    placeholder="test1@gmail.com"
                  />
                </div>
                <div className="flex flex-col bg-white my-4 p-1 rounded">
                  <p className="label">Password</p>
                  <div className="w-full flex justify-between item-center">
                  <input type="text" className="password" placeholder="Pass" />
                  <p className="flex justify-center p-1 cursor-pointer"><img src={PassiconImg} /></p>
                  </div>
                  <div className="flex justify-center bg-contain">
                
                  </div>
                </div>
                <div className="flex flex-row">
                  <input type="checkbox" />
                  <span className="ml-2" >
                  Remember me.

                  </span>
                </div>
                <div className="flex flex-row justify-between mt-4">
                  <button className="bg-white text-blue-400 font-Poppins rounded w-[47%] p-2">
                    Forgot Password
                  </button>
                  <button className="bg-blue-500 text-white  rounded w-[47%] p-2">
                    Log in
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>Not a member? <span className="text-blue-400">Sign up</span></p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1">
          <img src={LoginImg} alt="LoginImg" />
        </div>
      </div>
      {/* end here  */}


    </div>
  )
}

export default Login