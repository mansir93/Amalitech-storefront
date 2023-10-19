// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { getCookie, removeCookie } from "../utils/Cookie";
// import { FaBars, FaHome } from "react-icons/fa";
// import { GrClose } from "react-icons/gr";

// import {
//   Collapse,
//   Typography,
//   IconButton,
//   Button,
// } from "@material-tailwind/react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = getCookie("susu_auth");
//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   });
//   const [openNav, setOpenNav] = useState(false);

//   useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);
//   const handlelogout = () => {
//     removeCookie("susu_auth");
//     navigate("/login");
//   };

//   const navList = (
//     <div className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography color="blue" className="p-1 font-normal">
//         <NavLink to="/" className="flex items-center gap-2 p-1 font-bold">
//           <FaHome /> Home
//         </NavLink>
//       </Typography>
//     </div>
//   );

//   return (
//     <div>
//       <div className="w-full p-4 shadow bg-white z-20 top-0 left-0 fixed ">
//         <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
//           <Typography
//             color="blue"
//             className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl"
//           >
//             <Link to="/">SUSU-BANK</Link>
//           </Typography>
//           <div className="hidden lg:block">{navList}</div>
//           <div className="hidden lg:flex gap-4  ">
//             <Button className="p-2 bg-blue-500" onClick={handlelogout}>
//               Logout
//             </Button>
//           </div>
//           <IconButton
//             variant="text"
//             className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//             ripple={false}
//             onClick={() => setOpenNav(!openNav)}
//           >
//             {" "}
//             {openNav ? (
//               <GrClose size={24} className="text-blue-500" />
//             ) : (
//               <FaBars size={24} className="text-blue-500" />
//             )}
//           </IconButton>
//         </div>
//         <Collapse open={openNav}>
//           <div className="container mx-auto">
//             {navList}

//             <div className="w-full mb-2 bg-blue-500 rounded-lg flex justify-center p-2">
//               <Button className="p-2 bg-blue-500" onClick={handlelogout}>
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </Collapse>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menulist = (
    <>
      <Link to="/login" className="px-8 py-2 text-center w-40 rounded-md">
        login
      </Link>

      <Link
        to="/signup"
        className="px-8 py-2 text-center bg-blue-500 text-white w-40 rounded-md"
      >
        Register
      </Link>
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
