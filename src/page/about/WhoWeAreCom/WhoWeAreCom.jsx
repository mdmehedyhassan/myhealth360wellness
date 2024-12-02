import React from "react";
import WhoWeAreImg1 from "../../../img/About/whoweare-img-1.png";
import WhoWeAreImg2 from "../../../img/About/whoweare-img-2.png";
import PeoplesLogo from "../../../img/About/peoples-logo.png";
import DotCom from "../../../component/share/DotCom/DotCom";
import { FaPeopleGroup } from "react-icons/fa6";

const WhoWeAreCom = () => {
  return (
    <div className="py-20 lg:py-[120px] mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] gap-10">
        <h2 className=" md:hidden text-3xl font-bold text-primary mb-4 ">
          Who we are
        </h2>

        {/* Image Section For Desktop*/}
        <div className="relative mx-auto">
          <div className="w-[294px] lg:w-[489px] h-[288px] lg:h-[481px] p-5 bg-bgPrimary rounded-lg border border-borderPrimary relative">
            {/* Dot Grid */}
            <div className="w-[110px] h-[60px] bg-bgPrimary absolute -top-[21px] -right-[1rem] p-2 z-0">
              <div className="w-full h-full grid grid-cols-10 gap-0 justify-items-center items-center">
                {Array.from({ length: 40 }).map((_, index) => (
                  <DotCom key={index} />
                ))}
              </div>
            </div>
            <div className="flex justify-evenly relative">
              {/* Left Section */}
              <div className="absolute top-0 -left-[2.5rem] lg:-left-12">
                {/* Left Image */}
                <div className="w-[155.89px] lg:w-[260px] h-[234.98px] lg:h-[391.91px] ">
                  <img src={WhoWeAreImg1} alt="about-img" />
                </div>
                {/* Left Box */}
                <div className="text-white rounded-md w-[155.89px] lg:w-[260px] h-[46.77px] lg:h-[78px] mt-4">
                  <div className="w-full h-full bg-primary rounded-lg grid grid-cols-5 items-center p-2 gap-2 ">
                    <div className="lg:ml-2 rounded-lg col-span-1">
                      <div className="text-secondary text-3xl">
                        <FaPeopleGroup />
                      </div>
                    </div>
                    <div className="col-span-4">
                      <h1 className="text-[13px] lg:text-md font-bold">
                        30,000+
                      </h1>
                      <p className="text-[4px] lg:text-[10px] font-bold ">
                        By refining your ideal client profile and using precise
                        filters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Section */}
              <div className="z-10 absolute top-0 -right-[2.5rem] lg:-right-12">
                {/* Right Box */}
                <div className="bg-primary flex justify-start items-center p-1 lg:p-3 gap-2 text-white rounded-lg w-[156px] lg:w-[260px] h-[46px] lg:h-[78px] z-10 mb-4">
                  <div className="w-[120px] lg:w-[237.12px] h-[27.18px] lg:h-[45.33px]">
                    <img
                      className="rounded-xl"
                      src={PeoplesLogo}
                      alt="about-img"
                    />
                  </div>
                  <h1 className="text-sm lg:text-md font-bold text-wrap">
                    8k+ Reviews
                  </h1>
                </div>
                {/* Right Image */}
                <div className="w-[154.12px] lg:w-[257.04px] h-[234.98px] lg:h-[391.91px]">
                  <img src={WhoWeAreImg2} alt="about-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full">
          <h2 className="hidden md:block text-3xl font-bold text-primary mb-4 ">
            Who we are
          </h2>
          <p className="text-textSecondary mb-3 leading-relaxed mt-[30px] md:mt-0">
            We are are Medical Spa that offers wellness care customized to your
            personal goals as part of our larger vision for your health and
            happiness to enable your eu zen, “living your best.” We are nestled
            into a quiet office complex in Clarence, NY and will facilitate a
            highly personalized and above average experience for all your
            wellness and aesthetic needs!
          </p>
          <p className="text-textSecondary mb-6 leading-relaxed">
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
          <button className="text-pretty text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-primary rounded-full hover:bg-primary hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreCom;
