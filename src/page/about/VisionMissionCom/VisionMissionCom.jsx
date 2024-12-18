import React from "react";
import VisionImg from "../../../img/About/vision.png";
import MissionImg from "../../../img/About/mission.png";

function Card({ title, description, image, url }) {
  return (
    <div className="w-[385px] lg:w-[643px] h-[172px] lg:h-[340px] rounded-xl bg-bgSecondary border border-borderPrimary ">
      <div className="w-full flex justify-between items-center p-2 lg:p-5">
        {/* Text Section */}
        <div className="">
          <h2 className="text-[20px] lg:text-[40px] font-bold text-primary mb-2 lg:mb-4">
            {title}
          </h2>
          <p className="text-[12px] lg:text-[15px] text-textSecondary mb-3 lg:mb-6 pr-2">
            {description}
          </p>
          <a href={url}>
            <button className="px-5 py-2 border border-primary text-black rounded-full hover:bg-primary hover:text-white transition-colors duration-300 text-sm lg:text-lg">
              Learn More
            </button>
          </a>
        </div>
        {/* Image Section */}
        <div className="w-[220px] lg:w-[240px] h-[155px] lg:h-[308px] rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default function VisionMissionCom() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mx-5">
      <Card
        title="Our Vision"
        description="To enable individualized eudaimonia best suited to your needs."
        image={VisionImg}
        url=""
      />
      <Card
        title="Our Mission"
        description="To enable individualized eudaimonia best suited to your needs."
        image={MissionImg}
        url=""
      />
    </div>
  );
}
