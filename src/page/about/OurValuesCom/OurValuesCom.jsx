import React from "react";
import TopMaskImg from "../../../img/About/top-mask.svg";
import BottomMaskImg from "../../../img/About/bottom-mask.svg";
import {
  FaHandshakeSimple,
  FaThumbsUp,
  FaHandHoldingHeart,
} from "react-icons/fa6";

const OurValuesCom = () => {
  return (
    <div className="bg-primary text-white m-5 rounded-xl">
      <div className="lg:flex ">
        <div className="lg:w-full rounded-xl">
          <img src={TopMaskImg} alt="TopMaskImg" />
        </div>
        <div className="flex flex-col justify-center items-center -mt-[32.5rem] lg:mt-0 pb-14 md:pb-[109px]">
          <h1 className="text-white text-center font-bold text-3xl lg:text-5xl px-5 my-10">
            Our Values
          </h1>
          <div className="flex flex-col md:flex-col gap-5 lg:flex-row justify-center items-center">
            <div className="w-56 bg-primaryAccent text-secondary p-16 rounded-xl border border-primaryAccent transition-colors duration-500 ease-in-out flex flex-col justify-center items-center">
              <div className=" text-6xl">
                <FaHandHoldingHeart />
              </div>
              <h1 className="text-3xl text-white">Compassion</h1>
            </div>
            <div className="w-56 bg-primaryAccent text-secondary p-16 rounded-xl border border-primaryAccent transition-colors duration-500 ease-in-out flex flex-col justify-center items-center">
              <div className=" text-6xl">
                <FaHandshakeSimple />
              </div>
              <h1 className="text-3xl text-white">Respect</h1>
            </div>
            <div className="w-56 bg-primaryAccent text-secondary p-16 rounded-xl border border-primaryAccent transition-colors duration-500 ease-in-out flex flex-col justify-center items-center z-10">
              <div className="text-6xl">
                <FaThumbsUp />
              </div>
              <h1 className="text-3xl text-white">Quality</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-full rounded-xl -mt-[30.5rem] lg:mt-0 -z-10 lg:z-0 lg:mr-0 flex justify-end items-end">
          <img src={BottomMaskImg} alt="BottomMaskImg" />
        </div>
      </div>
    </div>
  );
};

export default OurValuesCom;
