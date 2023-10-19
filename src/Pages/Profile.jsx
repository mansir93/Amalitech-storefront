import { FaPen } from "react-icons/fa";
import React from "react";
import Avatar from "../Assets/ProfileAvatar.png";

const Profile = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center gap-8 p-8">
        <div className=" flex justify-center items-center gap-8">
          <img src={Avatar} className="" alt="" />
          <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-950">
            Business Name{" "}
            <span>
              {" "}
              <FaPen />
            </span>
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 p-8">
          <div className="w-full max-w-md flex flex-col bg-white shadow-md p-2">
            <label className=" text-gray-500">Email</label>
            <span className="flex justify-between items-center gap-2 ">
              <input
                className="text-blue-950 border-none outline-none"
                value="business.and@gmail.com"
              />{" "}
              <FaPen />
            </span>
          </div>{" "}
          <div className="w-full max-w-md flex flex-col bg-white shadow-md p-2">
            <label className=" text-gray-500">Contact</label>
            <span className="flex justify-between items-center gap-2 ">
              <input
                className="text-blue-950 border-none outline-none"
                value="+233 247 000 000"
              />{" "}
              <FaPen />
            </span>
          </div>
          <div className="w-full max-w-md flex flex-col bg-white shadow-md p-2">
            <label className=" text-gray-500">Location</label>
            <span className="flex justify-between items-center gap-2 ">
              <input
                className="text-blue-950 border-none outline-none"
                value="10th Avenue Ron Island Street Takoradi, Ghana"
              />{" "}
              <FaPen />
            </span>
          </div>
          <div className="w-full max-w-md flex justify-end items-end p-2  ">
            <button className="text-white bg-blue-950 py-4 px-8">Save</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
