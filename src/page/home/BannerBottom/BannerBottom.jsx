import React from "react";
import { MessageCircleMore, PhoneCall } from "lucide-react";

const BannerBottom = () => {
  return (
    <div className="flex bg-primary flex-col md:flex-row justify-center items-center py-6 px-5 md:px-0 mt-[-6px]">
      <div>
        <p className="ml-10 md:max-w-[596px] text-white text-base font-medium leading-[160%]  md:border-r-2 md:border-borderSecondary pr-0 md:pr-20 mb-8 md:mb-0">
          Lorem ipsum dolor sit amet consectetur. Nam nulla mattis viverra in
          purus ac aenean vitae duis. Volutpat mi nunc nunc facilisis.
        </p>
      </div>
      <div className="flex gap-6 md:gap-10 mr-0 md:mr-10 ml-0 md:ml-28 mb-5 md:mb-0">
        {/* phone */}
        <a href="tel:7164073250">
          <div className="flex gap-3 border-2 border-borderSecondary rounded-[10px] pt-2 md:pt-[10px] pb-2 md:pb-3 pl-2 md:pl-[11px] pr-2 md:pr-5">
            <div>
              <div className="w-[48px] h-[48px] bg-secondary text-white flex justify-center items-center rounded-full ">
                <PhoneCall />
              </div>
            </div>
            <div>
              <h4 className="text-gray-300 text-[11px] md:text-sm font-medium leading-[150%]">
                Call us
              </h4>
              <h3 className="text-[14px] md:text-xl text-white font-bold leading-[140%]">
                716-407-3250
              </h3>
            </div>
          </div>
        </a>
        {/* message */}
        <a
          href="sms:7162006146"
          className="flex gap-3 border-2 border-borderSecondary rounded-[10px] pt-2 md:pt-[10px] pb-2 md:pb-3 pl-2 md:pl-[11px] pr-2 md:pr-5"
        >
          <div className="w-[48px] h-[48px] bg-secondary text-white flex justify-center items-center rounded-full ">
            <MessageCircleMore />
          </div>
          <div>
            <h4 className="text-gray-300 text-[11px] md:text-sm font-medium leading-[150%]">
              Text us
            </h4>
            <h3 className="text-[14px] md:text-xl text-white font-bold leading-[140%]">
              716-200-6146
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BannerBottom;
