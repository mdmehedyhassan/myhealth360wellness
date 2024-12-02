import React, { useState } from "react";
import faceImg from "../../../img/Home/face.png";
import neckImg from "../../../img/Home/neck.png";
import bodyImg from "../../../img/Home/body.png";
import hairLossImg from "../../../img/Home/hair-loss.png";
import sexualWellnessImg from "../../../img/Home/sexual-wellness.png";
import chronicPainImg from "../../../img/Home/chronic-pain.png";
import { Dot } from "lucide-react";

const options = [
  {
    title: "face",
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 2,
        title: "upper third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 3,
        title: "middle third",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.",
      },
      {
        id: 4,
        title: "lower third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ducimus.",
      },
    ],
  },
  {
    title: "neck",
    img: neckImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 2,
        title: "upper third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 3,
        title: "middle third",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.",
      },
      {
        id: 4,
        title: "lower third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ducimus.",
      },
    ],
  },
  {
    title: "body",
    img: bodyImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 2,
        title: "upper third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 3,
        title: "middle third",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.",
      },
      {
        id: 4,
        title: "lower third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ducimus.",
      },
    ],
  },
  {
    title: "hair loss",
    img: hairLossImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 2,
        title: "upper third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 3,
        title: "middle third",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.",
      },
      {
        id: 4,
        title: "lower third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ducimus.",
      },
    ],
  },
  {
    title: "sexual wellness",
    img: sexualWellnessImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 2,
        title: "upper third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 3,
        title: "middle third",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.",
      },
      {
        id: 4,
        title: "lower third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ducimus.",
      },
    ],
  },
  {
    title: "chronic pain",
    img: chronicPainImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 2,
        title: "upper third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, vel!",
      },
      {
        id: 3,
        title: "middle third",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.",
      },
      {
        id: 4,
        title: "lower third",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ducimus.",
      },
    ],
  },
];

const TreatmentCom = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="w-full px-2 lg:px-5">
      <div className="py-5 lg:py-10  lg:pb-[94px] bg-bgSecondary rounded-xl w-full ">
        <h1 className="text-textPrimary text-center font-bold text-3xl lg:text-5xl px-5 my-10 lg:my-[50px]">
          What Concerns Would You Like To Address?
        </h1>
        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center text-start px-4 ">
          <div className="flex w-full lg:w-auto ">
            <div className="lg:w-[220px] w-full lg:bg-white py-7 lg:p-7 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-1 lg:border-2 border-borderPrimary rounded-xl gap-x-2 gap-y-6 ">
              {options.map((option) => (
                <button
                  key={option.title}
                  className={`w-auto p-3 text-sm lg:text-lg text-nowrap rounded-full hover:bg-primary hover:text-white transition-colors duration-500 ease-in-out capitalize ${selectedOption.title === option.title
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-borderPrimary"
                    }`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.title}
                </button>
              ))}
            </div>
            <div className="hidden md:hidden lg:block lg:mr-2">
              <div className="h-0 w-0 border-t-[20px] border-l-[30px] border-b-[20px] border-solid border-t-transparent border-b-transparent border-l-borderPrimary relative mt-8"></div>
              <div className="h-0 w-0 border-t-[20px] border-l-[30px] border-b-[20px] border-solid border-t-transparent border-b-transparent border-l-white absolute -mt-[2.5rem] -ml-1"></div>
            </div>
          </div>

          <div className="lg:w-[1027px] bg-white border-2 border-borderPrimary  rounded-xl p-3 lg:p- ">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-center lg:flex-row">
              <div className="lg:p-5 ">
                <div className="mb-5 lg:mb-0 flex justify-center items-center lg:p-5 lg:hidden ">
                  <img
                    className="rounded-xl w-auto transition-all duration-500 ease-in-out"
                    src={selectedOption.img}
                    alt={selectedOption.title}
                  />
                </div>
                <h1 className="text-primary font-bold text-2xl lg:text-3xl mb-5 capitalize transition-all duration-500 ease-in-out">
                  {selectedOption.title}
                </h1>
                <div className="grid grid-cols-1 justify-start items-center gap-2 transition-all duration-500 ease-in-out">
                  {selectedOption.accordionData.map((item) => (
                    <div
                      key={item.id}
                      className="border-borderPrimary rounded-lg"
                    >
                      <div className="collapse collapse-arrow bg-bgSecondary transition-all duration-500 ease-in-out">
                        <input
                          type="radio"
                          name="my-accordion-2"
                          defaultChecked={item.title === "overall"}
                        />
                        <div className="text-textPrimary flex justify-start items-center collapse-title text-xl font-medium capitalize transition-all duration-500 ease-in-out">
                          <Dot size={32} /> {item.title}
                          {selectedOption.title === "face"}
                        </div>
                        <div className="collapse-content text-start text-textSecondary text-wrap transition-all duration-500 ease-in-out">
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-5 lg:mb-0 lg:flex md:flex justify-center items-center lg:p-5 hidden transition-all duration-500 ease-in-out">
                <img
                  className="rounded-xl w-auto"
                  src={selectedOption.img}
                  alt={selectedOption.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCom;
