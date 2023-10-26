import React, { useEffect, useState } from "react";
import SideImage from "../Assets/signup.png";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useAxios } from "../utils/ApiHook";
import Swal from "sweetalert2";

const Signup = () => {
  const { data, error, isLoading, ApiRequest } = useAxios();
  // console.log("isLoading", isLoading);
  // console.log("error", error);
  console.log("data", data);

  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    Role: "Customer",
    // Role:"Merchant"
  };
  const [userData, setUserData] = useState(initial);
  // console.log(userData);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    ApiRequest("/Account/Register", "POST", userData, null);
  };
  useEffect(() => {
    if (data && !isLoading && !error) {
      Swal.fire("success", `${data.message}`, "success");
    }
    if (error && error.detail) {
      Swal.fire("error", `${error.detail}`, "error");
    }
  }, [data, isLoading, error]);

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
          <form className="pt-8" onSubmit={handleSubmit}>
            <div className="flex gap-10">
              <div className="flex flex-col bg-white rounded-md p-2">
                <label className="text-stone-500">First Name</label>
                <input
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  className="outline-none w-full"
                  placeholder="write name here..."
                  required
                />
              </div>
              <div className="flex flex-col bg-white rounded-md p-2">
                <label className=" text-stone-500">Last Name</label>
                <input
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  className="outline-none w-full"
                  placeholder="write name here"
                  required
                />
              </div>
            </div>
            <br />
            <div className=" bg-white rounded-md p-1.5 ">
              <label>Email</label>
              <br />
              <input
                onChange={handleChange}
                name="email"
                type="email"
                className="outline-none w-full"
                placeholder="test1@gmail.com"
                required
              />
            </div>
            <br />
            <div className=" bg-white rounded-md p-1.5">
              <label>Password</label>
              <br />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className="outline-none w-full"
                placeholder="**************"
                required
              />
            </div>
            <br />
            <div className=" bg-white rounded-md p-1.5 mb-3 ">
              <label>Confirm Password</label>
              <br />
              <input
                onChange={handleChange}
                name="confirmPassword"
                type="password"
                className="outline-none w-full"
                placeholder="**************"
                required
              />
            </div>
              <div className="mb-4">
                {error?.errors?.Password ? (
                  <span className="text-red-400">
                    {error.errors.Password[0]}
                  </span>
                ) : (
                  error?.errors?.ConfirmPassword && (
                    <span className="text-red-400">
                      {error.errors.ConfirmPassword[0]}
                    </span>
                  )
                )}
              </div>
            <div className="text-center">
              <div className="mb-5">
                <button
                  type="submit"
                  className="px-8 py-2 bg-blue-500 text-white mb-10 justify-center rounded-md"
                >
                  Create Account
                </button>
              </div>
              <p className="mb-6">
                Already A Member?
                <Link to="/login" className="text-blue-500">
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
