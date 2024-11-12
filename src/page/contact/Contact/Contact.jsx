import React from 'react';
import ContactBanner from './ContactBanner';
import logo1 from '../../../img/Contact/logo1.png';
import logo2 from '../../../img/Contact/logo2.png';
import logo3 from '../../../img/Contact/logo3.png';
import logo4 from '../../../img/Contact/logo4.png';

const Contact = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <div className="flex justify-center bg-[#E9F0EC] pt-[82px] md:pt-[135px] pb-[120px] ">
        <div className="flex flex-col lg:flex-row gap-[89px]">
          {/* Contact Information */}
          <div className='flex flex-col gap-[30px]'>
            <div className='flex items-center gap-[26px] w-[325px] md:w-[453px] p-[17px] py-5 border-[#B6CCE2] border-[1px] rounded-[10px]'>
              <img className='w-[84px] h-[84px]' src={logo1} alt="" />
              <div>
                <h3 className='text-[20px] md:text-2xl font-semibold leading-[120%] text-[#060F13] mb-[7px]'>Phone Number</h3>
                <p className='text-[15px] font-normal leading-[150%] text-[#5E6669]'>+012 3456 7890</p>
              </div>
            </div>
            <div className='flex items-center gap-[26px] w-[325px] md:w-[453px] p-[17px] py-5 border-[#B6CCE2] border-[1px] rounded-[10px]'>
              <img className='w-[84px] h-[84px]' src={logo2} alt="" />
              <div>
                <h3 className='text-[20px] md:text-2xl font-semibold leading-[120%] text-[#060F13] mb-[7px]'>Email Address</h3>
                <p className='text-[15px] font-normal leading-[150%] text-[#5E6669]'>emailaddress@email.com</p>
              </div>
            </div>
            <div className='flex items-center gap-[26px] w-[325px] md:w-[453px] p-[17px] py-5 border-[#B6CCE2] border-[1px] rounded-[10px]'>
              <img className='w-[84px] h-[84px]' src={logo3} alt="" />
              <div>
                <h3 className='text-[20px] md:text-2xl font-semibold leading-[120%] text-[#060F13] mb-[7px]'>Working Time</h3>
                <p className='text-[15px] font-normal leading-[150%] text-[#5E6669]'>10AM  to 8PM</p>
              </div>
            </div>
            <div className='flex items-center gap-[26px] w-[325px] md:w-[453px] p-[17px] py-5 border-[#B6CCE2] border-[1px] rounded-[10px]'>
              <img className='w-[84px] h-[84px]' src={logo4} alt="" />
              <div>
                <h3 className='text-[20px] md:text-2xl font-semibold leading-[120%] text-[#060F13] mb-[7px]'>Location</h3>
                <p className='text-[15px] font-normal leading-[150%] text-[#5E6669]'>2464 Royal Ln. Mesa, New Jersey 45463</p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="bg-white border-[1px] border-[#B6CCE2] rounded-[20px] min-h-[586px]">
            <form className="pt-[38px] md:pt-[35px] pb-[38px] md:pb-[40px] pl-5 md:pl-[42px] pr-5 md:pr-[41px]">

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#081319] text-[15px] md:text-lg font-semibold leading-[160%]">Full Name</span>
                </label>
                <input type="text" placeholder="" className="input input-bordered bg-white border-[#B6CCE2] border-[1px] rounded" required />
              </div>

              <div className='flex flex-col md:flex-row justify-between gap-5'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#081319] text-[15px] md:text-lg font-semibold leading-[160%]">Phone</span>
                  </label>
                  <input type="number" placeholder="" className="input input-bordered bg-white w-full border-[#B6CCE2] border-[1px] rounded" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#081319] text-[15px] md:text-lg font-semibold leading-[160%]">Email</span>
                  </label>
                  <input type="email" placeholder="" className="input input-bordered bg-white w-full border-[#B6CCE2] border-[1px] rounded" required />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#081319] text-[15px] md:text-lg font-semibold leading-[160%]">Select a service</span>
                </label>
                <select className="select select-bordered w-full bg-white border-[#B6CCE2] border-[1px] rounded">
                  <option disabled selected>Choose Service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#081319] text-[15px] md:text-lg font-semibold leading-[160%]">Message</span>
                </label>
                <textarea className="textarea textarea-bordered bg-white border-[#B6CCE2] border-[1px] rounded" placeholder=""></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#0B5E62] rounded-[110px] text-white text-[15px] font-bold leading-[120%] hover:bg-[#154f52]">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
