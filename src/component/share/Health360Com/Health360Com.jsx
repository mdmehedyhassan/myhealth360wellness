import React from "react";
import HealthImg1 from "../../../img/Shared/health-360-img-1.png";
import HealthImg2 from "../../../img/Shared/health-360-img-2.png";
import SupportImg from "../../../img/Shared/support-img.png";
import DotCom from "../DotCom/DotCom";

const Health360Com = () => {
  return (
    <div className="py-10 lg:py-16 pb-10 lg:pb-36 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center lg:max-w-[1324px] gap-16">
        {/* Text Section */}
        <div className="lg:ml-5 w-full">
          <h2 className="text-[28px] md:text-5xl font-bold text-textPrimary mb-4">
            Why Choose My Health 360?
          </h2>
          {/* Image Section */}
          <div className="relative flex justify-center items-center mb-10 lg:hidden mt-16 pl-10">
            <div className="w-[211px] h-[202px] bg-bgPrimary border border-borderPrimary rounded-lg relative right-0">
              <img
                src={HealthImg1}
                alt=""
                className="absolute -top-[3.5rem] -right-12"
              />
              <div className="w-[140px] h-[175px] relative top-[1.5rem] -left-[37%] p-3 bg- bg-bgPrimary rounded-lg">
                <img
                  src={HealthImg2}
                  alt=""
                  className="w-full h-[172.2] absolute top-3 -left-3"
                />
              </div>
              <div className="absolute -top-[28%] -left-[43%] bg-primary text-white rounded-md w-32 h-20 ">
                <div className="w-full h-full flex justify-center items-center gap-2 mx-3">
                  <div className="w-[2rem] h-[1.5rem] flex justify-center items-center rounded-md">
                    <img src={SupportImg} alt="" />
                  </div>
                  <h1 className="text-2xl font-bold">24</h1>
                  <p className="text-[10px] text-wrap">
                    Hours Customer Support
                  </p>
                </div>
              </div>
              {/* Dot Grid */}
              <div className="w-[75px] h-[36px] bg-bgSecondary z-0 absolute -bottom-[23px] -right-12 p-1">
                <div className="w-full h-full grid grid-cols-8 gap-0  justify-items-center items-center ">
                  {Array.from({ length: 24 }).map((_, index) => (
                    <DotCom key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-textSecondary mb-6 leading-relaxed">
            My Health 360 — Concierge Care offers annual membership-based
            enhanced access to holistic and integrative wellness care customized
            to your personal goals. We take a holistic approach to taking care
            of our patients instead of just treating their medical conditions to
            enable their best selves and to enhance their quality of life. Our
            Board-Certified physicians deliver virtual / telemedicine consults,
            in-person visits at our clinic, and even old-fashioned house visits
            under certain conditions. Our Board-Certified physicians care about
            your overall well-being and deliver personalized, holistic, and
            integrative medicine as a part of the larger vision for your health
            and happiness to enable your Eú Zen.
          </p>
          <button className="text-[#0B5E62] text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-[#0B5E62] rounded-full hover:bg-[#0B5E62] hover:text-white">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className=" hidden lg:block relative justify-items-end ml-auto mr-10">
          <div className="w-[363px] h-[377px] bg-bgPrimary border border-borderPrimary rounded-lg relative right-0">
            <img
              src={HealthImg1}
              alt=""
              className="absolute -top-[2.5rem] -right-12"
            />
            <div className="w-[280px] h-[306px] relative top-[2.5rem] -left-[37%] p-3 bg- bg-bgPrimary rounded-lg">
              <img
                src={HealthImg2}
                alt=""
                className="w-full h-[294.97px] absolute top-3 -left-3"
              />
            </div>
            <div className="absolute -top-[11%] -left-[40%] bg-primary text-white rounded-md w-56 h-20 ">
              <div className="w-full h-full flex justify-center items-center gap-2 mx-3">
                <div className="w-[4rem] h-[3.5rem] flex justify-center items-center bg-bgSecondary rounded-md">
                  <img src={SupportImg} alt="" />
                </div>
                <h1 className="text-4xl font-bold">24</h1>
                <p className="text-xs text-wrap">Hours Customer Support</p>
              </div>
            </div>
            {/* Dot Grid */}
            <div className="w-[140px] h-[63px] bg-bgSecondary z-0 absolute -bottom-[26px] -right-12 p-3">
              <div className="w-full h-full grid grid-cols-12 gap-0  justify-items-center items-center ">
                {Array.from({ length: 48 }).map((_, index) => (
                  <DotCom key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health360Com;
