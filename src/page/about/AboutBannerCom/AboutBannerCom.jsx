import React from "react";
import AboutImg from "../../../img/About/about-banner.png";

const AboutBannerCom = () => {
  return (
    <div
      className="hero min-h-full bg-black py-40"
      style={{
        backgroundImage: `url(${AboutImg})`,
      }}
    >
      <div className="hero-content text-neutral-content text-center pt-32 md:pt-40">
        <div className="max-w-[1002px] flex flex-col justify-center items-center">
          <h1 className="mb-9 text-4xl md:text-[64px] font-bold text-white leading-[120%]">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutBannerCom;
