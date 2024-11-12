import React from "react";
import medicalspaImg from "../../../img/Home/medical-spa.svg";
import medicalgymImg from "../../../img/Home/medical-gym.svg";

const MembershipCom = () => {
  return (
    <div className="px-5 lg:px-20 bg-[#D9E5DE] w-full rounded-xl  mt-32 mb-32">
      <div className="grid gap-10 lg:gap-20 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-[21px] border-[1px] border-[#0B5E6266] p-6 flex flex-col-reverse lg:flex-row justify-between items-center -mt-32 ">
          <div className="pl-5 lg:w-1/2 lg:pr-10">
            <h3 className="text-[12px] lf:text-lg leading-[150%] font-semibold text-[#0B5E62] m-2">
              Memberships
            </h3>
            <h2 className="text-[24px] lg:text-5xl leading-[120%] font-bold text-[#062223] mb-4">
              Medical Spa Membership
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-[160%]">
              Our medical gym is led by an MD and is staffed with highly trained
              professionals who will develop a personalized exercise and
              rehabilitation plan to help you achieve your goals. Our Medical
              Gym has everything you need to succeed in your goals to shape up,
              build muscle, lose fat, or recover from an injury or disability;
              our gym has everything you need to succeed.
            </p>
            <button className="bg-[#0B5E62] text-white font-semibold py-3 px-10 lg:py-5 lg:px-16 rounded-full hover:bg-[#084a4e] transition-colors">
              Get It Now
            </button>
          </div>
          <div className="lg:w-1/2 mt-0 lg:mt-0 max-w-[456px]">
            <img
              src={medicalspaImg}
              alt="Medical Spa Membership"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-[21px] border-[1px] border-[#0B5E6266] p-6 flex justify-between flex-col lg:flex-row-reverse items-center -mb-32 ml-0 ">
          <div className="lg:w-1/2 order-1 lg:order-2 max-w-[456px]">
            <img
              src={medicalgymImg}
              alt="Medical Gym and Rehab"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pr-10 order-2 lg:order-1">
            <h3 className="text-[12px] lf:text-lg leading-[150%] font-semibold text-[#0B5E62] m-2">
              Memberships
            </h3>
            <h2 className="text-[24px] lg:text-5xl leading-[120%] font-bold text-[#062223] mb-4">
              Medical Gym and Rehab
            </h2>
            <p className="text-[#485657] mb-6 text-sm leading-[160%]">
              Our state-of-the-art facility is designed to meet your fitness and
              rehabilitation needs with the latest cutting-edge technology. Our
              gym is equipped with Emsculpt Neo and EvolveX, two of the most
              advanced muscle toning and machine-assisted rehab devices
              available.
            </p>
            <button className="bg-[#0B5E62] text-white font-semibold py-3 px-10 lg:py-5 lg:px-16 rounded-full hover:bg-[#084a4e] transition-colors">
              Get It Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCom;
