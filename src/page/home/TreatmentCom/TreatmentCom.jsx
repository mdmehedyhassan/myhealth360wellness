import React, { useState } from "react";
import faceImg from "../../../img/Home/face.svg";
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
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
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
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
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
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
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
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
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
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
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
    img: faceImg,
    accordionData: [
      {
        id: 1,
        title: "overall",
        content:
          "Acne / Acne Scars, pigmentation, wrinkles, photoaging : Micro botox, MORPHEUS8, PRP, Microneedling, IPL / Photo-facial",
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
    <div className="w-full px-5">
      <div className="py-5 lg:py-10 pb-16 lg:pb-32 bg-[#D9E5DE] rounded-xl w-full ">
        <h1 className="text-[#062223] text-center font-bold text-3xl lg:text-5xl px-5 my-10">
          What Concerns Would You Like To Address?
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center text-start ">
          <div className="flex">
            <div className="lg:bg-[#fff] p-5 grid grid-cols-3 lg:grid-cols-1 lg:border-2 border-[#0b5e62] rounded-xl lg:gap-5 gap-x-2 gap-y-2 ">
              {options.map((option) => (
                <button
                  key={option.title}
                  className={`w-auto lg:h-[54px] lg:w-[172px] p-3 text-sm lg:text-lg text-nowrap rounded-full transition-colors duration-300 capitalize ${
                    selectedOption.title === option.title
                      ? "bg-[#0B5E62] text-white"
                      : "bg-white text-[#0B5E62] border border-[#A2C1C0]"
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.title}
                </button>
              ))}
            </div>
            <div className="hidden md:block lg:block">
              <div class="h-0 w-0 border-t-[25px] border-l-[35px] border-b-[25px] border-solid border-t-transparent border-b-transparent border-l-[#0B5E62] relative mt-8"></div>
              <div class="h-0 w-0 border-t-[25px] border-l-[35px] border-b-[25px] border-solid border-t-transparent border-b-transparent border-l-[#fff] absolute -mt-[3.1rem] -ml-1"></div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row bg-[#fff] border-2 border-[#90b6b5] rounded-xl  px-5 max-w-[1027px] mx-5">
            <div className="lg:w-[60%] rounded-lg py-6">
              <h1 className="text-[#0B5E62] font-bold text-3xl pb-10 pl-5 capitalize">
                {selectedOption.title}
              </h1>
              {selectedOption.accordionData.map((item) => (
                <div
                  key={item.id}
                  className="mb-2 border-[#0B5E62] rounded-lg  lg:pr-10"
                >
                  <div className="collapse collapse-arrow bg-[#D9E5DE]">
                    <input
                      type="radio"
                      name="my-accordion-2"
                      defaultChecked={item.title === "overall"}
                    />
                    <div className="text-black flex justify-start items-center collapse-title text-xl font-medium capitalize">
                      <Dot /> {item.title} {selectedOption.title === "face"}
                    </div>
                    <div className="collapse-content text-start text-black">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center my-5 lg:my-0">
              <img
                className="rounded-xl "
                src={selectedOption.img}
                alt={selectedOption.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCom;
