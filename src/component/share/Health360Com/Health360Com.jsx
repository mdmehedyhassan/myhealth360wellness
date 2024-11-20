import React from "react";
import HealthImg from "../../../img/Shared/health-360-img.png";
import SupportImg from "../../../img/Shared/support-img.png";

const Health360Com = () => {
  return (
    <div className="py-10 lg:py-16 pb-10 lg:pb-36 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] gap-16">
        {/* Text Section */}
        <div className="lg:ml-5 w-full">
          <h2 className="text-[28px] md:text-5xl font-bold text-textPrimary mb-4">
            Why Choose My Health 360?
          </h2>
          {/* Image Section */}
          <div className="relative flex justify-center items-center mb-10 lg:hidden">
            <img className="rounded-xl" src={HealthImg} alt="about-img" />
            <div className="absolute top-0 left-0 bg-primary text-white rounded-md w-[10rem] h-[3.5rem] ">
              <div className="w-full h-full flex justify-center items-center gap-2 mx-2">
                {/* <div className="w-[4rem] h-[3.5rem] flex justify-center items-center bg-bgSecondary rounded-md"> */}
                <img src={SupportImg} alt="" />
                {/* </div> */}
                <h1 className="text-3xl font-bold">24</h1>
                <p className="text-[10px] text-wrap">Hours Customer Support</p>
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
        <div className=" hidden lg:block ml-5 relative ">
          <img className="rounded-xl" src={HealthImg} alt="about-img" />
          <div className="absolute top-0 left-0 bg-primary text-white rounded-md w-56 h-20 ">
            <div className="w-full h-full flex justify-center items-center gap-2 mx-3">
              <div className="w-[4rem] h-[3.5rem] flex justify-center items-center bg-bgSecondary rounded-md">
                <img src={SupportImg} alt="" />
              </div>
              <h1 className="text-4xl font-bold">24</h1>
              <p className="text-xs text-wrap">Hours Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health360Com;
