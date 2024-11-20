import React from "react";
import WhyShouldImg from "../../../img/IV-Infusion-Bar/whyshould.png";

const WhyShouldCom = () => {
  return (
    <div className="py-10 pb-16 lg:pb-20 mx-5 flex justify-center items-center ">
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
        <div className="flex justify-center items-center p-5 lg:p-16 ">
          <img className="rounded-xl" src={WhyShouldImg} alt="about-img" />
        </div>
      </div>
    </div>
  );
};

export default WhyShouldCom;
