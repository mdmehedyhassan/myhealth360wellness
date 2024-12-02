import React from "react";
import WhyShouldImg1 from "../../../img/IV-Infusion-Bar/why-should-img-1.png";
import WhyShouldImg2 from "../../../img/IV-Infusion-Bar/why-should-img-2.png";
import DotCom from "../../../component/share/DotCom/DotCom";
import { Link } from "react-router-dom";
import { FaCalendarDays } from "react-icons/fa6";

const WhyShouldCom = () => {
  return (
    <div className="pb-20 lg:pt-[150px] lg:pb-[169px] mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] lg:max-h-[528px]">
        <div className="order-last lg:order-first ">
          <div className="my-5 flex-col">
            <h1 className="text-[28px] lg:text-5xl font-bold text-textPrimary">
              Why Should You Get It?
            </h1>
            <h2 className=" text-sm lg:text-md my-3 text-textPrimary">
              INCREASE YOUR VITAMIN AVAILABILITY
            </h2>
          </div>
          <p className="text-textSecondary text-[15px] mb-5 leading-[160%]">
            Higher Bioavailability: When vitamins and nutrients are administered
            via IV, they bypass the gut, delivering higher percentage of
            nutrients directly into the bloodstream and immediately available
            for use by the cells.
          </p>
          <p className="text-textSecondary text-[15px] mb-5 leading-[160%]">
            Faster Absorption: IV vitamin therapy delivers nutrients directly to
            the cells, bypassing gut absorption, which means that they can be
            used immediately by the body. This is great for those who need a
            quick boost of nutrients for a specific purpose, such as athletic
            performance or recovery from illness.
          </p>
          <Link to="/services">
            <button className="flex items-center bg-primary text-white font-semibold px-4 py-3 rounded-full space-x-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-textPrimary">
              <div className="bg-primaryAccent text-secondary p-2 rounded-full -ml-1 ">
                {/* Calendar Icon */}
                <FaCalendarDays />
              </div>
              <span>Schedule a Consult</span>
            </button>
          </Link>
        </div>

        {/* Image Section For Desktop*/}
        <div className="relative mx-auto mb-5 lg:mb-0">
          <div className="w-[248.37px] lg:w-[415px] h-[268.72px] lg:h-[449px] p-5 bg-bgPrimary rounded-lg border border-borderPrimary relative">
            {/* Dot Grid for desktop */}
            <div className="hidden lg:block w-[170px] h-[81px]  bg-bgPrimary absolute -bottom-[35px] -left-[2rem] p-2 z-0">
              <div className="w-full h-full grid grid-cols-10 gap-0 justify-items-center items-center">
                {Array.from({ length: 40 }).map((_, index) => (
                  <DotCom key={index} />
                ))}
              </div>
            </div>
            {/* Dot Grid for Mobile */}
            <div className="lg:hidden w-[106.36px] h-[52.49px]  bg-bgPrimary absolute -bottom-[21px] -left-[1.5rem]  p-2 z-0">
              <div className="w-full h-full grid grid-cols-6 gap-0 justify-items-center items-center">
                {Array.from({ length: 24 }).map((_, index) => (
                  <DotCom key={index} />
                ))}
              </div>
            </div>
            <div className="flex justify-evenly relative">
              {/* Left Section */}
              <div className="absolute -top-10 -left-[4rem] lg:-left-24">
                {/* Left Image */}
                <div className="w-[155.61px] lg:w-[260px] h-[243.53px] lg:h-[406.91px] ">
                  <img src={WhyShouldImg1} alt="about-img" />
                </div>
              </div>
              {/* Right Section */}
              <div className="z-10 absolute top-0 -right-[3.5rem] lg:-right-20">
                {/* Right Image */}
                <div className="w-[153.84px] lg:w-[257.04px] h-[229.22px] lg:h-[383px]">
                  <img src={WhyShouldImg2} alt="about-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShouldCom;
