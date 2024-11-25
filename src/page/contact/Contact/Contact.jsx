import React from "react";
import ContactBanner from "../ContactBanner/ContactBanner";
import {
  FaPhone,
  FaRegMessage,
  FaRegClock,
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <div className="flex justify-center bg-bgPrimary pt-[82px] md:pt-[135px] pb-[120px] -mt-2">
        <div className="flex flex-col lg:flex-row gap-[89px]">
          {/* Contact Information */}
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[26px] w-[385px] md:w-[453px] p-[17px] py-5 border-borderPrimary border-[1px] rounded-[10px]">
              <div className="w-20 h-20 bg-primary hover:bg-primaryAccent flex justify-center items-center rounded-full text-white text-2xl">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-[20px] md:text-2xl font-semibold leading-[120%] text-textPrimary mb-[7px]">
                  Phone Number
                </h3>
                <p className="text-[15px] font-normal leading-[150%] text-textSecondary">
                  +012 3456 7890
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[26px] w-[385px] md:w-[453px] p-[17px] py-5 border-borderPrimary border-[1px] rounded-[10px]">
              <div className="w-20 h-20 bg-primary hover:bg-primaryAccent flex justify-center items-center rounded-full text-white text-2xl">
                <FaRegMessage />
              </div>
              <div>
                <h3 className="text-[20px] md:text-2xl font-semibold leading-[120%] text-textPrimary mb-[7px]">
                  Email Address
                </h3>
                <p className="text-[15px] font-normal leading-[150%] text-textSecondary">
                  emailaddress@email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[26px] w-[385px] md:w-[453px] p-[17px] py-5 border-borderPrimary border-[1px] rounded-[10px]">
              <div className="w-20 h-20 bg-primary hover:bg-primaryAccent flex justify-center items-center rounded-full text-white text-2xl">
                <FaRegClock />
              </div>
              <div>
                <h3 className="text-[20px] md:text-2xl font-semibold leading-[120%] text-textPrimary mb-[7px]">
                  Working Time
                </h3>
                <p className="text-[15px] font-normal leading-[150%] text-textPrimary">
                  10AM to 8PM
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[26px] w-[385px] md:w-[453px] p-[17px] py-5 border-borderPrimary border-[1px] rounded-[10px]">
              <div className="w-20 h-20 bg-primary hover:bg-primaryAccent flex justify-center items-center rounded-full text-white text-2xl">
                <FaLocationDot />
              </div>
              <div>
                <h3 className="text-[20px] md:text-2xl font-semibold leading-[120%] text-textPrimary mb-[7px]">
                  Location
                </h3>
                <p className="text-[15px] font-normal leading-[150%] text-textPrimary">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="bg-white border-[1px] border-borderPrimary rounded-[20px] min-h-[586px]">
            <form className="pt-[38px] md:pt-[35px] pb-[38px] md:pb-[40px] pl-5 md:pl-[42px] pr-5 md:pr-[41px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-textPrimary text-[15px] md:text-lg font-semibold leading-[160%]">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input bg-white border-borderPrimary border-[1px] rounded"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-textPrimary text-[15px] md:text-lg font-semibold leading-[160%]">
                      Phone
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder=""
                    className="input bg-white w-full border-borderPrimary border-[1px] rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-textPrimary text-[15px] md:text-lg font-semibold leading-[160%]">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="input bg-white w-full border-borderPrimary border-[1px] rounded"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-textPrimary text-[15px] md:text-lg font-semibold leading-[160%]">
                    Select a service
                  </span>
                </label>
                <select className="select w-full bg-white border-borderPrimary border-[1px] rounded">
                  <option disabled selected>
                    Choose Service
                  </option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-textPrimary text-[15px] md:text-lg font-semibold leading-[160%]">
                    Message
                  </span>
                </label>
                <textarea
                  className="textarea border-borderPrimary bg-white border-[1px] rounded"
                  placeholder=""
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-primary border-none rounded-[110px] text-white text-[15px] font-bold leading-[120%] hover:bg-primaryAccent">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
