import React from "react";
import aboutImg from "../../../img/Home/about-doctor-img.png";

const AboutDoctorCom = () => {
  return (
    <div className="py-10 pb-16 lg:pb-32 px-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] lg:max-h-[528px] px-5">
        <div className="hidden lg:block relative ">
          <img className="rounded-xl" src={aboutImg} alt="about-img" />
          <div className="absolute -bottom-5 right-32 text-white bg-white p-3 rounded-lg w-44 h-40">
            <div className="w-full h-full bg-primary rounded-lg  flex flex-col justify-center items-start p-4 ">
              <h1 className="text-4xl text-bold mb-2">25+</h1>
              <p className="text-sm text-nowrap">Years Of Experience</p>
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
          <div className="relative flex justify-center items-center lg:hidden mb-10">
            <img className="rounded-xl" src={aboutImg} alt="about-img" />
            <div className="absolute -bottom-4 right-0 text-white bg-white p-2 rounded-md w-36 h-32">
              <div className="w-full h-full bg-primary rounded-lg  flex flex-col justify-center items-start p-3 ">
                <h1 className="text-3xl text-bold mb-2">25+</h1>
                <p className="text-xs text-nowrap">Years Of Experience</p>
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
          <button className="text-primary text-sm lg:text-lg font-bold py-4 px-16 bg-transparent border border-primary rounded-full hover:bg-primary hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctorCom;
