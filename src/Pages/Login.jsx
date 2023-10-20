import React from "react";
import Navbar from "../Components/Navbar";
import LoginImg from "../Assets/LoginImg.png";
import PassiconImg from "../Assets/PassiconImg.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* start here  */}
      <div className="flex bg-gray-100">
        <div className="flex-[2] flex flex-col justify-center items-center gap-8 w-full">
          <h1 className="text-5xl text-blue-500 font-bold">Log in</h1>

          <div className="flex justify-center w-[50%]">
            <form className="w-full">
              <div className="flex flex-col gap-4 ">
                <div className="flex flex-col bg-white py-1 px-5 rounded-lg w-[300]">
                  <label className=" text-gray-400">E-mail</label>
                  <input
                    type="text"
                    className="w-full email placeholder:text-black bg-none outline-none"
                    placeholder="test1@gmail.com"
                  />
                </div>
                <div className="flex flex-col bg-white py-1 px-5 rounded-lg w-[300]">
                  <label className=" text-gray-400">Password</label>
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      className="password placeholder:text-black bg-none outline-none"
                      placeholder="Pass"
                    />
                    <span>
                      <img
                        className="w-[20px] h-[15px] mr-0 cursor-pointer"
                        src={PassiconImg}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <input type="checkbox" />
                  <span className="ml-2">Remember me.</span>
                </div>
                <div className="flex flex-row justify-between pt-4 gap-5">
                  <Link
                    to="/forgot-password"
                    className="bg-white text-blue-400 text-center flex-1 text-16lg rounded p-2 hover:bg-blue-500 hover:text-white"
                  >
                    Forgot Password
                  </Link>
                  <button className="bg-blue-500 text-white text-center rounded flex-1 p-2">
                    Log in
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Not a member?{" "}
                    <Link to="/signup" className="text-blue-400">
                      Sign up
                    </Link>
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
