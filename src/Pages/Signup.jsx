import React from "react";
import SideImage from "../Assets/signup.png";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex bg-gray-100">
        <div className="flex-1">
          <img className="h-screen" src={SideImage} alt="signupimage" />
        </div>
        <div className=" flex flex-col justify-center items-center flex-[2]">
          <p className="text-5xl text-center text-blue-500 text-bold">
            Sign up
          </p>
          <form className="pt-8 ">
            <div className="flex gap-10">
              <div className="flex flex-col bg-white rounded-md p-2">
                <label className="text-stone-500">First Name</label>
                <input
                  className="text-stone-300 "
                  placeholder="write name here..."
                />
              </div>
              <div className="flex flex-col bg-white rounded-md p-2">
                <label className=" text-stone-500">Last Name</label>
                <input
                  className="text-stone-300"
                  placeholder="write name here"
                />
              </div>
            </div>
            <br />
            <div className=" bg-white rounded-md p-1.5 ">
              <label>Email</label>
              <br />
              <input placeholder="test1@gmail.com" />
            </div>
            <br />
            <div className=" bg-white rounded-md p-1.5">
              <label>Password</label>
              <br />
              <input placeholder="**************" />
            </div>
            <br />
            <div className=" bg-white rounded-md p-1.5 mb-3 ">
              <label>Confirm Password</label>
              <br />
              <input placeholder="**************" />
            </div>
          </form>
          <br />
          <div className="text-center">
            <div className="mb-5">
              <Link
                to="/"
                className="px-8 py-2 bg-blue-500 text-white w-40 mb-10 justify-center rounded-md"
              >
                Create Account
              </Link>
            </div>
            <p className="mb-6">
              Already A Member?
              <Link to="/login" className="text-blue-500">
                {" "}
                Log In
              </Link>
            </p>
            <br />

            {/*  */}
            <p>
              Create{" "}
              <Link to="/" className="text-blue-500 underline">
                Business Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
