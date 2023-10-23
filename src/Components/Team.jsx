import React from "react";
import MansirImg from "../Assets/MansirImg.JPG";
import KelvinIMg from "../Assets/kelvinImg.jpg";

const Team = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-20 flex flex-col justify-center p-2">
        <h2 className="mb-12 text-3xl font-bold">Meet The team</h2>
        <div className="w-full flex justify-between items-center gap-8 lg:flex-row flex-col">
          <div className="max-w-sm flex flex-col justify-center items-center gap-4">
            <img src={MansirImg} alt="" className="w-60 h-60 rounded-full" />
            <p>Mansir Abdul Aziz</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti.
            </p>
          </div>
          <div className="max-w-sm flex flex-col justify-center items-center gap-4">
            <img src={KelvinIMg} alt="" className="w-60 h-60 rounded-full" />
            <p>Kelvin Akyea </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti.
            </p>
          </div>
          <div className="max-w-sm flex flex-col justify-center items-center gap-4">
            <img src={MansirImg} alt="" className="w-60 h-60 rounded-full" />
            <p>Mansir Abdul Aziz</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
