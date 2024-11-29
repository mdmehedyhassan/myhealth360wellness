import React from "react";
import aboutImg from "../../../img/Shared/about-doctor-img.png";
import DotCom from "../DotCom/DotCom";
import { Link } from "react-router-dom";

const AboutDoctorCom = () => {
  return (
    <div className="py-28 pb-16 lg:pb-32 px-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] lg:max-h-[528px]">
        <div className="hidden lg:block relative">
          {/* Main Image and Border */}
          <div className="w-fit rounded-lg border border-borderPrimary relative">
            <div className="w-fit p-5 bg-bgPrimary rounded-lg relative">
              {/* Dot Grid */}
              <div className="w-[110px] h-[60px] bg-bgPrimary absolute -top-[21px] -right-[2rem] p-2 z-0">
                <div className="w-full h-full grid grid-cols-7 gap-0 justify-items-center items-center">
                  {Array.from({ length: 28 }).map((_, index) => (
                    <DotCom key={index} />
                  ))}
                </div>
              </div>
              {/* Main Image */}
              <div className="relative z-10">
                <img src={aboutImg} alt="about-img" />
              </div>
            </div>
          </div>
          {/* Floating Info Box */}
          <div className="absolute -bottom-5 right-32 text-white bg-white p-2 rounded-lg w-40 h-32 z-20">
            <div className="w-full h-full bg-primary rounded-lg flex flex-col justify-center items-start p-3">
              <h1 className="text-4xl font-bold mb-2">25+</h1>
              <p className="text-sm whitespace-nowrap">Years Of Experience</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="lg:flex my-5">
            <h1 className="text-3xl font-bold lg:text-5xl text-textPrimary">
              About Doctor Andry 
            </h1>
            <h2 className=" text-sm lg:text-md mt-4 text-textSecondary">
              MD,FACP, CPHIMS
            </h2>
          </div>

          <div className="w-[366px] h-[366px] relative flex justify-center items-center lg:hidden mb-10">
            {/* Main Image and Border */}
            <div className="w-fit rounded-lg border border-borderPrimary relative">
              <div className="w-fit p-5 bg-bgPrimary rounded-lg relative">
                {/* Dot Grid */}
                <div className="w-[110px] h-[60px] bg-bgPrimary absolute -top-[21px] -right-[2rem] p-2 z-0">
                  <div className="w-full h-full grid grid-cols-7 gap-0 justify-items-center items-center">
                    {Array.from({ length: 28 }).map((_, index) => (
                      <DotCom key={index} />
                    ))}
                  </div>
                </div>
                {/* Main Image */}
                <div className="relative z-10">
                  <img src={aboutImg} alt="about-img" />
                </div>
              </div>
            </div>
            {/* Floating Info Box */}
            <div className="absolute -bottom-5 -right-5 text-white bg-white p-2 rounded-lg w-40 h-32 z-20">
              <div className="w-full h-full bg-primary rounded-lg flex flex-col justify-center items-start p-3">
                <h1 className="text-4xl font-bold mb-2">25+</h1>
                <p className="text-sm whitespace-nowrap">Years Of Experience</p>
              </div>
            </div>
          </div>

          <p className="text-textSecondary text-sm mb-5 leading-[160%]">
            Meet and consult with our American Board of Internal Certified
            Internal Medicine specialist, Dr. Umbrine Fatima with more than 20
            years of experience in this field. Dr. Fatima received her medical
            degree from Dow Medical University, Pakistan, and completed her
            Internal Medicine Residency training at New York Hospital, Queens,
            affiliated with Cornell University Medical College, USA. Dr. Fatima
            applies integrative approach to her medical care delivery, offering
            patient-centered care with allopathic, complimentary, alternative,
            and holistic approaches to deliver personalized medicine best suited
            to your personal goals of health and wellness.
          </p>
          <p className="text-textSecondary text-sm mb-5 leading-[160%]">
            Dr. Fatima is also a clinical informaticist and a Certified
            Professional in Health Information Management and Systems with 20+
            years of experience in healthcare leadership, including HIPAA
            compliant organizational transformations. As a practicing physician,
            combines her clinical and informatics experience to help healthcare
            organizations develop and implement user-friendly information
            technologies. Dr. Fatima is also a medical director at SASI, and has
            recently been appointed to the post of President of the Buffalo
            District of the New York American College of Physicians.
          </p>
          <Link to="/about">
            <button className="text-primary text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-primary rounded-full hover:bg-primary hover:text-white transition-all ease-in-out duration-500">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctorCom;
