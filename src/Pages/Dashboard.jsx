import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import React from "react";
import Table from "../Components/Table";

const Dashboard = () => {
  return (
    <section>
      <div className="my-4 flex flex-wrap gap-2 flex-col md:flex-row lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="flex-1 flex flex-col gap-2 items-center bg-white border-2 border-blue-950 p-4">
          <h1 className="w-full text-center border-b border-gray-400 text-blue-950 font-bold">
            {" "}
            Sites Created
          </h1>
          <div className="text-center">2</div>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center bg-white border-2 border-blue-950 p-4">
          <h1 className="w-full text-center border-b border-gray-400 text-blue-950 font-bold">
            Views
          </h1>
          <div className="text-center">8993</div>
        </div>

        <div className="flex-1 flex flex-col gap-2 items-center bg-white border-2 border-blue-950 p-4">
          <h1 className="w-full text-center border-b border-gray-400 text-blue-950 font-bold">
            Orders
          </h1>{" "}
          <div className="text-center">433</div>
          <div className="w-full flex justify-between items-center">
            <span className="text-xs text-gray-400">from last period</span>
            <span className="flex items-center text-red-500  gap-1 text-xs">
              9.07% <BsArrowDown />
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center bg-white border-2 border-blue-950 p-4">
          <h1 className="w-full text-center border-b border-gray-400 text-blue-950 font-bold">
            Earnings
          </h1>{" "}
          <div className="text-center">GH₵ 4303.00</div>
          <div className="w-full flex justify-between items-center">
            <span className=" text-xs text-gray-400">from last period</span>
            <span className="flex items-center text-green-500  gap-1 text-xs">
              12.56% <BsArrowUp />{" "}
            </span>
          </div>
        </div>
      </div>
      <Table/>
    </section>
  );
};

export default Dashboard;
