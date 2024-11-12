import React from "react";
import TherapyImg from "../../../img/IV-Infusion-Bar/therapy.png";

const TherapyCom = () => {
  return (
    <div className="py-10 pb-16 lg:pb-20 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] lg:max-h-[528px]">
        <div className="flex justify-center items-center lg:p-16 ">
          <img className="rounded-xl" src={TherapyImg} alt="about-img" />
        </div>
        <div className="">
          <div className="my-5 flex-col">
            <h1 className="text-[28px] lg:text-5xl font-bold text-[#062223]">
              What is IV Therapy?
            </h1>
            <h2 className=" text-sm md:text-lg my-3 text-[#000]">
              HAPPY. HEALTHY. HYDRATED.
            </h2>
          </div>
          <p className="text-[#485657] text-[15px] mb-5 leading-[160%]">
            IV vitamin therapy, also known as intravenous vitamin therapy or IV
            drip therapy, involves administering vitamins, minerals, and other
            nutrients directly into the bloodstream through a vein.
          </p>
          <p className="text-[#485657] text-[15px] mb-5 leading-[160%]">
            IV vitamin therapy is often used to address nutrient deficiencies or
            to provide a quick boost of nutrients for specific purposes, such as
            athletic performance or recovery from illness. It can also be used
            to help improve the appearance of the skin, boost energy levels, and
            support the immune system.
          </p>
          <button className="flex items-center bg-teal-900 text-white font-semibold px-4 py-2 rounded-full space-x-2 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 transition duration-300">
            <div className="bg-teal-800 p-2 rounded-full">
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm-7-9h5v5h-5z" />
              </svg>
            </div>
            <span>Schedule a Consult</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapyCom;
