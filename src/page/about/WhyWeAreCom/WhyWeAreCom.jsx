import React from "react";
import WhoWeAreImg from "../../../img/About/who-we-are-img.png";
import PeoplesLogo from "../../../img/About/peoples-logo.png";
import GroupLogo from "../../../img/About/group-logo.png";

const WhyWeAreCom = () => {
  return (
    <div className="py-10 pb-16 lg:pb-32 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] gap-10">
        {/* Image Section */}
        <div className="hidden relative lg:flex justify-center items-center">
          <div className="absolute top-10 right-10 text-white p-2 rounded-md w-[274px] h-[90px]">
            <div className="w-full h-full bg-primary rounded-lg flex justify-start items-center p-3 gap-2 ">
              <img className="rounded-xl" src={PeoplesLogo} alt="about-img" />
              <h1 className="text-md font-bold text-wrap">8k+ Reviews</h1>
            </div>
          </div>
          <img className="rounded-xl" src={WhoWeAreImg} alt="about-img" />

          <div className="absolute bottom-0 left-11 text-white rounded-md w-[274px] h-[90px] p-2">
            <div className="w-full h-full bg-primary rounded-lg grid grid-cols-5 items-center p-2 gap-2 ">
              <div className="w-fit h-fit bg-bgPrimary p-3 rounded-lg col-span-1">
                <img className="rounded-xl" src={GroupLogo} alt="about-img" />
              </div>
              <div className="col-span-4">
                <h1 className="text-md font-bold">30,000+</h1>
                <p className="text-[10px] font-bold ">
                  By refining your ideal client profile and using precise
                  filters
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full hidden lg:block p-16">
          <img
            src={WhoWeAreImg}
            alt="HealthImg"
            className="rounded-lg object-cover w-full h-full"
          />
        </div> */}
        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-primary mb-4 ">Who we are</h2>
          {/* Image Section */}
          <div className="w-full lg:hidden">
            <img
              src={WhoWeAreImg}
              alt="HealthImg"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
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

export default WhyWeAreCom;
