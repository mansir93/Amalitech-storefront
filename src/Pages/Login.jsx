import React from "react";
import Navbar from "../Components/Navbar";
import LoginImg from "../Assets/LoginImg.png";
import PassiconImg from "../Assets/PassiconImg.png";

const Login = () => {
  return (
    <div>
      <Navbar />
      {/* start here  */}
      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-[2] flex flex-col justify-center items-center gap-8 w-full">
          <h1 className="text-5xl text-blue-500 font-bold">Log in</h1>

          <div className="flex justify-center w-[50%]">
            <form className="w-full">
              <div className="flex flex-col ">
                <div className="flex flex-col bg-white my-4 h-90 py-1 px-5 rounded-lg  font-Poppins w-[300]">
                  <p className="label text-gray-400">E-mail</p>
                  <input
                    type="text"
                    className="w-full email placeholder:text-black bg-none outline-none"
                    placeholder="test1@gmail.com"
                  />
                </div>
                <div className="flex h-90 bg-white justify-between items-center my-4 py-1 px-5 rounded-lg">
                  <div className="w-[80%]">
                    <p className="label text-gray-400">Password</p>
                    <input
                      type="text"
                      className="password placeholder:text-black bg-none outline-none"
                      placeholder="Pass"
                    />
                  </div>
                    <img className="w-[20px] h-[15px] mr-0 cursor-pointer" src={PassiconImg} />
        
                </div>
                <div className="flex flex-row">
                  <input type="checkbox" />
                  <span className="ml-2">Remember me.</span>
                </div>
                <div className="flex flex-row justify-between mt-4">
                  <button className="bg-white text-blue-400 font-Poppins w-[400] text-16lg rounded w-[47%] p-2">
                    Forgot Password
                  </button>
                  <button className="bg-blue-500 text-white  rounded w-[47%] p-2">
                    Log in
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Not a member? <span className="text-blue-400">Sign up</span>
                  </p>
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
  );
};

export default Login;
