import React from 'react';
import ContactBanner from './ContactBanner';

const Contact = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <div className="hero bg-[#E9F0EC] min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          {/* Contact Information */}
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          {/* Form */}
          <div className="card bg-white shrink-0 shadow-2xl w-1/2">
            <form className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#081319] text-lg font-semibold leading-[160%]">Full Name</span>
                </label>
                <input type="text" placeholder="" className="input input-bordered bg-white border-[#B6CCE2] border-[1px] rounded" required />
              </div>

              <div className='flex justify-between gap-5'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#081319] text-lg font-semibold leading-[160%]">Phone</span>
                  </label>
                  <input type="number" placeholder="" className="input input-bordered bg-white w-[260px] border-[#B6CCE2] border-[1px] rounded" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#081319] text-lg font-semibold leading-[160%]">Email</span>
                  </label>
                  <input type="email" placeholder="" className="input input-bordered bg-white w-[260px] border-[#B6CCE2] border-[1px] rounded" required />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#081319] text-lg font-semibold leading-[160%]">Select a service</span>
                </label>
                <select className="select select-bordered w-full bg-white border-[#B6CCE2] border-[1px] rounded">
                  <option disabled selected>Choose Service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#081319] text-lg font-semibold leading-[160%]">Message</span>
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
