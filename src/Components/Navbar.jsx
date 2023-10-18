import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menulist = (
    <>
      <Link to="/login" className="px-8 py-2 text-center w-40 rounded-md" >login</Link>

      <Link to="/signup" className="px-8 py-2 text-center bg-blue-500 text-white w-40 rounded-md" >Register</Link>
    </>
  );
  return (
    <>
      <div className="w-full shadow">
        <div className="px-8 m-auto">
          <nav className="flex justify-between items-center p-4">
            <div className="text-3xl font-black text-blue-600">
              <Link to="/">StoreFront</Link>
            </div>
            <div
              className="flex gap-4 items-center max-md:hidden
            "
            >
              {menulist}
            </div>
            <div className="hidden max-md:inline-flex">
              {!toggle ? (
                <button onClick={() => setToggle(!toggle)}>
                  <FaBars />
                </button>
              ) : (
                ""
                // <button onClick={() => setToggle(!toggle)}>
                //   <AiOutlineClose />
                // </button>
              )}
              {toggle && (
                <div className="absolute top-10 right-5 bg-slate-600 p-5">
                  {" "}
                  <button onClick={() => setToggle(!toggle)}>
                    <AiOutlineClose />
                  </button>
                  {menulist}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
