import React from "react";
import banner from "../../../img/Services/services-bannser-img.png";

const ServicesBannerCom = () => {
  return (
    <div className="w-full min-h-[600px] relative inline-block bg-primary">
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-30 mix-blend-multiply"></div>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center pt-32 md:pt-40">
          <div className="max-w-[1002px] flex flex-col justify-center items-center">
            <h1 className="mb-9 text-4xl md:text-[64px] font-bold text-white leading-[120%]">
              Our Services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBannerCom;
