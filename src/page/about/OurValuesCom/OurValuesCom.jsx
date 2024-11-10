import React from "react";
import TopMaskImg from "../../../img/About/top-mask.svg";
import BottomMaskImg from "../../../img/About/bottom-mask.svg";
import CompassionImg from "../../../img/About/compassion.svg";
import RespectImg from "../../../img/About/respect.svg";
import QualityImg from "../../../img/About/quality 1.svg";

function IconCard({ image, title }) {
  return (
    <div className="w-[238px] lg:w-[306px] h-[218px] lg:h-[280px] flex flex-col justify-center items-center bg-[#0E6B70] border border-[#5e9c9f] rounded-lg m-5">
      <img src={image} alt="" />
      <h1 className="text-[20px] lg:text-[24px] text-white">{title}</h1>
    </div>
  );
}

const OurValuesCom = () => {
  return (
    <div className="bg-teal-900 text-white m-5 rounded-xl">
      <div className="lg:flex ">
        <div className="lg:w-full rounded-xl">
          <img src={TopMaskImg} alt="TopMaskImg" />
        </div>
        <div className="flex flex-col justify-center items-center -mt-[32.5rem] lg:mt-0 pb-14 md:pb-[109px]">
          <h1 className="text-[#fff] text-center font-bold text-3xl lg:text-5xl px-5 my-10">
            Our Values
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full">
              <IconCard image={CompassionImg} title="Compassion" />
            </div>
            <div className="w-full">
              <IconCard image={RespectImg} title="Respect" />
            </div>
            <div className="w-full z-10 lg:z-0">
              <IconCard image={QualityImg} title="Quality" />
            </div>
          </div>
        </div>
        <div className="lg:w-full rounded-xl -mt-[30.5rem] lg:mt-56 -z-10 lg:z-0">
          <img src={BottomMaskImg} alt="BottomMaskImg" />
        </div>
      </div>
    </div>
  );
};

export default OurValuesCom;
