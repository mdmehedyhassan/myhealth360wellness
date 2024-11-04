import React from "react";
import aboutImg from "../../../img/Home/aboutdoctor.svg";

const AboutDoctorCom = () => {
  return (
    <div className="py-10 pb-32 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-2 items-center max-w-[1324px] max-h-[528px]">
        <div className="flex justify-center items-center">
          <img className="rounded-xl " src={aboutImg} alt="about-img" />
        </div>
        <div className="">
          <div className="flex justify-start items-end mb-5">
            <h1 className="text-5xl text-[#062223]">About Doctor Andry </h1>
            <h2 className="text-md text-[#758081]">MD,FACP, CPHIMS</h2>
          </div>
          <p className="text-[#758081] text-sm mb-5 leading-[160%]">
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
          <p className="text-[#758081] text-sm mb-5 leading-[160%]">
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

          <button className="text-[#0B5E62] text-lg font-bold py-4 px-16 bg-transparent border border-[#0B5E62] rounded-full hover:bg-teal-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctorCom;
