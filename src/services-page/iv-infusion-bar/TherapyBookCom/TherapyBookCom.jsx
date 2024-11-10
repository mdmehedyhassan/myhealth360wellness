import React from "react";

const TherapyBookCom = () => {
  return (
    <div className="w-full px-5">
      <div
        className="py-5 lg:py-5 text-white rounded-b-xl w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("https://i.ibb.co.com/3S9v3Dh/therapBg.png")`,
        }}
      >
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
  );
};

export default TherapyBookCom;
