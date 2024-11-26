import React from "react";
import TherapyImg1 from "../../../img/IV-Infusion-Bar/therapy-img-1.png";
import TherapyImg2 from "../../../img/IV-Infusion-Bar/therapy-img-2.png";
import DotCom from "../../../component/share/DotCom/DotCom";

const TherapyCom = () => {
  return (
    <div className="py-16 lg:py-32 pb-16 lg:pb-20 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] lg:max-h-[528px]">
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
                  <img src={TherapyImg1} alt="about-img" />
                </div>
              </div>
              {/* Right Section */}
              <div className="z-10 absolute top-0 -right-[3.5rem] lg:-right-20">
                {/* Right Image */}
                <div className="w-[153.84px] lg:w-[257.04px] h-[229.22px] lg:h-[383px]">
                  <img src={TherapyImg2} alt="about-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="my-5 flex-col">
            <h1 className="text-[28px] lg:text-5xl font-bold text-textPrimary">
              What is IV Therapy?
            </h1>
            <h2 className=" text-sm md:text-lg my-3 text-textPrimary">
              HAPPY. HEALTHY. HYDRATED.
            </h2>
          </div>
          <p className="text-textSecondary text-[15px] mb-5 leading-[160%]">
            IV vitamin therapy, also known as intravenous vitamin therapy or IV
            drip therapy, involves administering vitamins, minerals, and other
            nutrients directly into the bloodstream through a vein.
          </p>
          <p className="text-textSecondary text-[15px] mb-5 leading-[160%]">
            IV vitamin therapy is often used to address nutrient deficiencies or
            to provide a quick boost of nutrients for specific purposes, such as
            athletic performance or recovery from illness. It can also be used
            to help improve the appearance of the skin, boost energy levels, and
            support the immune system.
          </p>
          <button className="flex items-center bg-primary text-white font-semibold px-4 py-2 rounded-full space-x-2 transition duration-300 hover:bg-white hover:text-textPrimary">
            <div className="bg-primaryAccent p-2 rounded-full -ml-1 ">
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm-7-9h5v5h-5z" />
              </svg>
            </div>
            <span>Schedule a Consult</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapyCom;
