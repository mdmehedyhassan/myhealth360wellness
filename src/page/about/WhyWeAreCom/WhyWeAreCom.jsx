import React from "react";
import WhoWeAreImg from "../../../img/About/whoweare.png";

const WhyWeAreCom = () => {
  return (
    <div className="py-10 pb-16 lg:pb-32 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] gap-10">
        {/* Image Section */}
        <div className="w-full hidden lg:block p-16">
          <img
            src={WhoWeAreImg}
            alt="HealthImg"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-[#0B5E62] mb-4 ">Who we are</h2>
          {/* Image Section */}
          <div className="w-full lg:hidden">
            <img
              src={WhoWeAreImg}
              alt="HealthImg"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <p className="text-[#333] mb-3 leading-relaxed mt-[30px] md:mt-0">
            We are are Medical Spa that offers wellness care customized to your
            personal goals as part of our larger vision for your health and
            happiness to enable your eu zen, “living your best.” We are nestled
            into a quiet office complex in Clarence, NY and will facilitate a
            highly personalized and above average experience for all your
            wellness and aesthetic needs!
          </p>
          <p className="text-[#333] mb-6 leading-relaxed">
            We are are Medical Spa that offers wellness care customized to your
            personal goals as part of our larger vision for your health and
            happiness to enable your eu zen, “living your best.” We are nestled
            into a quiet office complex in Clarence, NY and will facilitate a
            highly personalized and above average experience for all your
            wellness and aesthetic needs!We are are Medical Spa that offers
            wellness care customized to your personal goals as part of our
            larger vision for your health and happiness to enable your eu zen,
            “living your best.” We are nestled into a quiet office complex in
            Clarence, NY and will facilitate a highly personalized and above
            average experience for all your wellness and aesthetic needs!
          </p>
          <button className="text-[#0B5E62] text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-[#0B5E62] rounded-full hover:bg-[#0B5E62] hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreCom;
