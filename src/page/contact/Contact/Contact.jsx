import React from 'react';
import ContactBanner from './ContactBanner';

const Contact = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          {/* Contact Information */}
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered bg-white" required />
              </div>

              <div className='flex justify-between gap-5'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="number" placeholder="email" className="input input-bordered bg-white w-[260px]" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered bg-white w-[260px]" required />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select a service</span>
                </label>
                <select className="select select-bordered w-full bg-white">
                  <option disabled selected>Which service do you want?</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered bg-white" placeholder="Bio"></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
