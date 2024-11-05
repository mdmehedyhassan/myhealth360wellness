import React from "react";
import HealthImg from "../../../img/About/health360.png";

const Health360Com = () => {
  return (
    <div className="py-10 pb-16 lg:pb-32 mx-5 flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1324px] gap-10">
        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-[#0B5E62] mb-4">
            Why Choose My Health 360?
          </h2>
          {/* Image Section */}
          <div className="w-full lg:hidden">
            <img
              src={HealthImg}
              alt="HealthImg"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <p className="text-[#333] mb-6 leading-relaxed">
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
        <div className="w-full hidden lg:block  p-16">
          <img
            src={HealthImg}
            alt="HealthImg"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Health360Com;
