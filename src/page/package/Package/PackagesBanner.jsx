import React from "react";
import Banner from "../../../img/banner-packages.png";

const PackagesBanner = () => {
  return (
    <div
      className="hero min-h-full bg-black py-40"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className="hero-content text-neutral-content text-center pt-32 md:pt-40 max-w-3xl">
        <div className="max-w-[1002px] flex flex-col justify-center items-center">
          <h1 className="mb-9 text-4xl md:text-[64px] font-bold text-white leading-[120%]">
            Our Packages
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PackagesBanner;
