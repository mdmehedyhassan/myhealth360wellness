import React from "react";
import TopMaskImg from "../../../img/About/top-mask.svg";
import BottomMaskImg from "../../../img/About/bottom-mask.svg";
import CompassionLogo from "../../../img/About/compassion-logo.png";
import RespectLogo from "../../../img/About/handshake-logo.png";
import QualityLogo from "../../../img/About/quality-logo.png";

function IconCard({ image, title }) {
  return (
    <div className="w-[238px] lg:w-[306px] h-[218px] lg:h-[280px] flex flex-col justify-center items-center bg-primaryAccent border-2 border-borderPrimary rounded-lg m-5">
      <img src={image} alt="" className="" />
      <h1 className="text-[20px] lg:text-[24px] text-white">{title}</h1>
    </div>
  );
}

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
          <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center">
            <div className="w-full">
              <IconCard image={CompassionLogo} title="Compassion" />
            </div>
            <div className="w-full">
              <IconCard image={RespectLogo} title="Respect" />
            </div>
            <div className="w-full z-10 lg:z-0">
              <IconCard image={QualityLogo} title="Quality" />
            </div>
          </div>
        </div>
        <div className="lg:w-full rounded-xl -mt-[30.5rem] lg:mt-56 -z-10 lg:z-0 lg:mr-0 flex justify-end items-end">
          <img src={BottomMaskImg} alt="BottomMaskImg" />
        </div>
      </div>
    </div>
  );
};

export default OurValuesCom;
