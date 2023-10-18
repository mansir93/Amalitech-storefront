import React from "react";
import ProjectImg from "../Assets/ProjectImg.jpeg";

const Project = () => {
  return (
    <section className="">
      <div className="min-h-[50vh] flex flex-col lg:flex-row container mx-auto py-8 px-2 justify-center items-center">
        <div className="flex-1 flex flex-col justify-center items- center gap-8 py-20">
          <p className="text-2xl font-semibold border-b-2 border-gray-300 p-4 max-w-fit">
            Landing Page
          </p>
          <p className="text-2xl font-semibold border-b-2 border-gray-300 p-4 max-w-fit">
            Eccomerce
          </p>
          <p className="text-2xl font-semibold border-b-2 border-gray-300 p-4 max-w-fit">
            Blogs
          </p>
          <p className="text-2xl font-semibold border-b-2 border-gray-300 p-4 max-w-fit">
            Portfolio
          </p>
          <p className="text-2xl font-semibold border-b-2 border-gray-300 p-4 max-w-fit">
            Hiring
          </p>
        </div>
        <div className="flex-1">
          <img src={ProjectImg} alt="" className="max-w-sm"/>{" "}
        </div>
      </div>
    </section>
  );
};

export default Project;
