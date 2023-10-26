import React from "react";
import HeroImg from "../Assets/HeroImg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="min-h-[60vh] min-w-[30vw] flex flex-col lg:flex-row container mx-auto py-8 px-2">
        <div className="flex-1 flex flex-col gap-8 py-20">
          <h1 className="text-5xl font-black">More than</h1>
          <h1 className="text-5xl font-black">Just templates</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            <br />
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <Link
            to="/signup"
            className="px-8 py-2 bg-blue-500 text-white w-40 rounded-md"
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
