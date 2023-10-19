import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Projects from "../Pages/Projects";
import Support from "../Pages/Support";

const Layout = () => {
  return (
    <div className="min-h-screen h-screen w-full fixed">
      <Navbar />
      {/* Content */}
      <div className="flex h-full bg-blue-900 ">
        <Sidebar />
        <div className="bg-gray-200 w-full h-full lg:px-20 lg:pt-10 px-4 py-2 overflow-scroll mb-40">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
