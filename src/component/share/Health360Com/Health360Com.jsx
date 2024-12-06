import React from "react";
import HealthImg1 from "../../../img/Shared/health-360-img-1.png";
import HealthImg2 from "../../../img/Shared/health-360-img-2.png";
import SupportImg from "../../../img/Shared/support-img.png";
import DotCom from "../DotCom/DotCom";
import { Link } from "react-router-dom";
import { FaCommentMedical } from "react-icons/fa6";

const Health360Com = () => {
  return (
    <div className="py-20 lg:pt-[96px] lg:pb-[120px] mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center lg:max-w-[1324px] gap-16">
        {/* Text Section */}
        <div className="lg:ml-5 w-full order-2 lg:order-1">
          <h2 className="hidden lg:block text-[28px] md:text-5xl font-bold text-textPrimary mb-4">
            Why Choose My Health 360?
          </h2>
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
          <Link to="/services">
            <button className="text-primary text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-primary rounded-full hover:bg-primary hover:text-white transition-all ease-in-out duration-500">
              Learn More
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className=" relative justify-items-center lg:justify-items-end ml-auto mr-10">
          <h2 className="lg:hidden text-[28px] md:text-5xl font-bold text-textPrimary mb-10">
            Why Choose My Health 360?
          </h2>
          <div className="w-[211.91px] lg:w-[363px] h-[220.09px] lg:h-[377px] bg-bgPrimary border border-borderPrimary rounded-lg relative ">
            <img
              src={HealthImg1}
              alt=""
              className="absolute -top-[1.5rem] lg:-top-[2.5rem] -right-10 lg:-right-12 w-[186.23] lg:w-[319px] h-[209.23px] lg:h-[358.41px]"
            />
            <div className="w-[160.11px] h-[175.72px] lg:w-[280px] lg:h-[306px] relative top-[1.5rem] lg:top-[2.5rem] -left-[30%] lg:-left-[37%] p-3 bg- bg-bgPrimary rounded-lg">
              <img
                src={HealthImg2}
                alt=""
                className="w-full h-[172.2px] lg:h-[294.97px] absolute top-2 -left-2 lg:top-3 lg:-left-3"
              />
            </div>
            <div className="absolute -top-[10.3%] -left-[33%] lg:-left-[40%] text-white rounded-md w-[127.26px] lg:w-[218px] h-[43.78px] lg:h-[79px]">
              <div className="w-full h-full bg-primary rounded-lg p-1 lg:p-2 gap-2 flex justify-start items-center">
                <div className="lg:rounded-lg rounded-md col-span-1 bg-primaryAccent my-2 h-full w-[30%] flex justify-center items-center">
                  <div className="text-secondary text-2xl lg:text-4xl mx-auto">
                    <FaCommentMedical />
                  </div>
                </div>
                <div className="w-[70%] flex justify-start items-center gap-2">
                  <h1 className="text-[18px] lg:text-[29px] font-bold">24</h1>
                  <p className="text-[6px] lg:text-[11px] text-wrap">Hours Customer Support</p>
                </div>
              </div>
            </div>
            {/* Dot Grid */}
            <div className="w-[75.31px] lg:w-[140px] h-[36.78px] lg:h-[63px] bg-bgPrimary z-0 absolute -bottom-[12px] lg:-bottom-[26px] -right-12 p-1 lg:p-3">
              <div className="w-full h-full grid grid-cols-10 gap-0  justify-items-center items-center ">
                {Array.from({ length: 40 }).map((_, index) => (
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
