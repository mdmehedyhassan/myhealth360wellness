import React from "react";
import banner from "../../../img/Contact/contact-banner-img.png";

const ContactBanner = () => {
  return (
    <div className="w-full h-[365px] lg:min-h-[600px] relative inline-block bg-primary rounded-b-lg">
      <div
        className="hero h-[365px] lg:min-h-[600px] rounded-b-lg"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-30 mix-blend-multiply rounded-b-lg"></div>
        <div className="hero-overlay bg-opacity-20 rounded-b-lg"></div>
        <div className="hero-content text-neutral-content text-center pt-32 md:pt-40">
          <div className="max-w-[1002px] flex flex-col justify-center items-center">
            <h1 className="mb-9 text-4xl md:text-[64px] font-bold text-white leading-[120%]">
              Contact
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
