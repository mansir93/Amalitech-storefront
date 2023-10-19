import { RiCustomerService2Line } from "react-icons/ri";
import { BsFillBagFill } from "react-icons/bs";
import { CgList } from "react-icons/cg";
import { BiTransferAlt } from "react-icons/bi";
import { FaHouseUser } from "react-icons/fa";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChartPie, FaBars } from "react-icons/fa";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SidebarNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isMenuActive = (menuPath) => {
    return location.pathname === menuPath;
  };
  const style = {
    backgroundColor: " #59AFFF",
  };

  return (
    <div>
      <Sidebar collapsed={collapsed} style={{ height: "100vh" }}>
        <Menu iconShape="square">
          <div className="flex flex-col gap-8 text-white bg-blue-950 h-screen">
            <MenuItem
              className="hover:text-blue-500"
              icon={<FaBars />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            ></MenuItem>
            <MenuItem
              className="hover:text-blue-500"
              icon={<FaChartPie size={30} />}
              component={<NavLink to="/account" />}
              style={isMenuActive("/account") ? style : null}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              className="hover:text-blue-500"
              icon={<CgList size={30} />}
              component={<NavLink to="/account/profile" />}
              style={isMenuActive("/account/profile") ? style : null}
            >
              Profile{" "}
            </MenuItem>
            <MenuItem
              className="hover:text-blue-500"
              icon={<BsFillBagFill size={30} />}
              component={<NavLink to="/account/projects" />}
              style={isMenuActive("/account/projects") ? style : null}
            >
              Projects
            </MenuItem>{" "}
            <MenuItem
              className="hover:text-blue-500"
              icon={<RiCustomerService2Line size={30} />}
              component={<NavLink to="/account/support" />}
              style={isMenuActive("/account/support") ? style : null}
            >
              Support
            </MenuItem>{" "}
          </div>
        </Menu>
      </Sidebar>

      {/* Sidebar */}
    </div>
  );
};

export default SidebarNav;
