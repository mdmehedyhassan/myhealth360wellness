import React from "react";
import banner from "../../../img/IV-Infusion-Bar/therapy-book-img.png";

const TherapyBookCom = () => {
  return (
    <div className="rounded-b-xl mx-5 ">
      <div className="w-full relative inline-block rounded-b-xl">
        <div
          className="hero rounded-b-xl"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="absolute inset-0 bg-primary opacity-30 mix-blend-multiply rounded-b-xl"></div>
          <div className="hero-overlay bg-opacity-20 rounded-b-xl"></div>
          <div className="hero-content text-neutral-content text-center pt-32 md:pt-40">
            <div className="max-w-[1002px] text-white  flex flex-col justify-center items-center">
              <h1 className="text-center font-bold text-2xl lg:text-5xl px-5">
                READY FOR IV THERAPY?
              </h1>
              <p className="text-sm my-5 mx-8 text-center">
                Call now to Schedule a Consult with our qualified physician.
              </p>
              <button className="text-black text-sm lg:text-lg font-bold py-4 px-16 bg-white border rounded-full my-3">
                Book an Infusion Suite!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyBookCom;
